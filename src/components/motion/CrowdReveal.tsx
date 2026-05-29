import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useReducedMotionSafe } from "./useReducedMotionSafe";

/**
 * Scroll-driven "growing crowd": as you scroll, faces pop in from the centre
 * outward while the whole field zooms out, so a couple of large faces (Jurgen +
 * Mariska) become a screen full of ~88 small ones — the feeling of a whole
 * community arriving. Then the heading pops in over the (dimmed) crowd.
 *
 * Faces: Jurgen + Mariska (real) at the two centre slots, the rest AI-generated
 * portraits from thispersondoesnotexist.com, served from /public/crowd.
 */

const COLS = 11;
const ROWS = 8;
const COUNT = COLS * ROWS; // 88

// Number of AI faces available in /public/crowd as face-NN.jpg.
const AI_FACE_COUNT = 40;

const HOST_FACES = ["/crowd/jurgen.jpg", "/crowd/mariska.jpg"];
const AI_FACES = Array.from(
  { length: AI_FACE_COUNT },
  (_, i) => `/crowd/face-${String(i + 1).padStart(2, "0")}.jpg`,
);

/** Deterministic pseudo-random in [0,1) so SSR and client match. */
function pseudo(n: number): number {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

type Avatar = {
  x: number;
  y: number;
  size: number;
  src: string;
  host: boolean;
  threshold: number;
};

function buildAvatars(): Avatar[] {
  const cells: Array<{ x: number; y: number; size: number; dist: number; idx: number }> = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const idx = r * COLS + c;
      const jx = (pseudo(idx) - 0.5) * 5.5;
      const jy = (pseudo(idx + 99) - 0.5) * 5.5;
      const x = ((c + 0.5) / COLS) * 100 + jx;
      const y = ((r + 0.5) / ROWS) * 100 + jy;
      const size = 6 + pseudo(idx + 7) * 3.4;
      const dist = Math.hypot(x - 50, (y - 50) * 1.15);
      cells.push({ x, y, size, dist, idx });
    }
  }
  // Appear from the centre outward.
  cells.sort((a, b) => a.dist - b.dist);

  return cells.map((cell, order) => {
    let src: string;
    let host = false;
    if (order === 0) {
      src = HOST_FACES[0]; // Jurgen — dead centre
      host = true;
    } else if (order === 1) {
      src = HOST_FACES[1]; // Mariska — next to him
      host = true;
    } else {
      // Spread AI faces so repeats land in different distance-rings (never adjacent).
      src = AI_FACES[(order * 7) % AI_FACE_COUNT];
    }
    return {
      x: cell.x,
      y: cell.y,
      size: host ? cell.size * 1.35 : cell.size,
      src,
      host,
      threshold: (order / COUNT) * 0.72,
    };
  });
}

type CrowdRevealProps = {
  heading: string;
  headingAccent?: string;
};

export function CrowdReveal({ heading, headingAccent }: CrowdRevealProps) {
  const reduced = useReducedMotionSafe();
  const ref = useRef<HTMLDivElement>(null);
  const avatars = useMemo(buildAvatars, []);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const fieldScale = useTransform(scrollYProgress, [0, 0.8], [2.6, 1]);
  const fieldOpacity = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.45]);

  if (reduced) {
    return (
      <section className="relative overflow-hidden py-24">
        <div className="relative mx-auto h-[60vh] max-w-[1100px] px-6">
          {avatars.map((a, i) => (
            <AvatarDot key={i} a={a} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <h2 className="display-xl mx-auto max-w-[18ch] px-6 text-[2.4rem] leading-[1.02] sm:text-[3.4rem]">
            {heading}{" "}
            {headingAccent && <span className="italic text-primary">{headingAccent}</span>}
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[480vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-secondary/40">
        <div className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl float-gentle" />
        <div className="pointer-events-none absolute -right-24 bottom-1/4 h-[360px] w-[360px] rounded-full bg-highlight/40 blur-3xl" />

        <motion.div
          style={{ scale: fieldScale, opacity: fieldOpacity, willChange: "transform, opacity" }}
          className="relative h-[82vh] w-full max-w-[1240px]"
        >
          {avatars.map((a, i) => (
            <CrowdAvatar key={i} a={a} progress={scrollYProgress} />
          ))}
        </motion.div>

        <CrowdHeading progress={scrollYProgress} heading={heading} headingAccent={headingAccent} />
      </div>
    </section>
  );
}

function CrowdAvatar({ a, progress }: { a: Avatar; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [a.threshold, a.threshold + 0.04], [0, 1]);
  const scale = useTransform(progress, [a.threshold, a.threshold + 0.07], [0.3, 1]);
  return (
    <motion.div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${a.x}%`,
        top: `${a.y}%`,
        width: `${a.size}%`,
        opacity,
        scale,
        zIndex: a.host ? 20 : 1,
        willChange: "transform, opacity",
      }}
    >
      <AvatarDot a={a} />
    </motion.div>
  );
}

function AvatarDot({ a }: { a: Avatar }) {
  return (
    <div
      className={`aspect-square overflow-hidden rounded-full shadow-sm ${
        a.host ? "ring-2 ring-primary/70" : "ring-1 ring-black/10"
      }`}
    >
      <img
        src={a.src}
        alt=""
        aria-hidden
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function CrowdHeading({
  progress,
  heading,
  headingAccent,
}: {
  progress: MotionValue<number>;
  heading: string;
  headingAccent?: string;
}) {
  const opacity = useTransform(progress, [0.82, 0.92], [0, 1]);
  const scale = useTransform(progress, [0.82, 0.98], [0.92, 1]);
  const y = useTransform(progress, [0.82, 0.92], [26, 0]);
  return (
    <motion.div
      style={{ opacity }}
      className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center px-6 text-center"
    >
      <div className="pointer-events-none absolute h-[55%] w-[78%] max-w-[820px] rounded-full bg-[radial-gradient(ellipse_at_center,var(--color-background)_0%,color-mix(in_oklch,var(--color-background)_72%,transparent)_55%,transparent_75%)]" />
      <motion.h2
        style={{ scale, y }}
        className="display-xl relative max-w-[18ch] text-[2.6rem] leading-[1.0] sm:text-[3.8rem] lg:text-[5.2rem]"
      >
        {heading}{" "}
        {headingAccent && <span className="italic text-primary">{headingAccent}</span>}
      </motion.h2>
    </motion.div>
  );
}
