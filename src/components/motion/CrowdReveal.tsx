import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { User } from "lucide-react";
import { useReducedMotionSafe } from "./useReducedMotionSafe";

/**
 * Scroll-driven "growing crowd": as you scroll, avatars pop in from the centre
 * outward while the whole field zooms out, so a handful of large faces becomes a
 * screen full of ~88 small ones — the feeling of a whole community arriving.
 * Then the heading pops in over the (dimmed) crowd.
 *
 * Avatars are stylised profile circles in varied brand tints (no stock photos).
 * Swap the inner glyph for <img> tiles later if real portraits are supplied.
 */

const COLS = 11;
const ROWS = 8;
const COUNT = COLS * ROWS; // 88

// Brand-tinted palette so the crowd reads as diverse but on-brand.
const TINTS = [
  { bg: "#246724", fg: "#EAF3EA" }, // forest green
  { bg: "#3E8E5A", fg: "#F0F7F1" }, // lighter green
  { bg: "#1F3A52", fg: "#E7EEF4" }, // ink blue-grey
  { bg: "#5FA8A0", fg: "#F1F8F7" }, // teal
  { bg: "#C9A23F", fg: "#2A2410" }, // warm ochre
  { bg: "#8FB36A", fg: "#22300F" }, // sage
  { bg: "#2F5E7A", fg: "#EAF2F7" }, // steel blue
  { bg: "#B9763E", fg: "#FBF1E8" }, // terracotta
];

/** Deterministic pseudo-random in [0,1) so SSR and client match. */
function pseudo(n: number): number {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

type Avatar = {
  x: number;
  y: number;
  size: number;
  tint: number;
  threshold: number;
};

function buildAvatars(): Avatar[] {
  const items: Array<Avatar & { dist: number }> = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const idx = r * COLS + c;
      const jx = (pseudo(idx) - 0.5) * 5.5;
      const jy = (pseudo(idx + 99) - 0.5) * 5.5;
      const x = ((c + 0.5) / COLS) * 100 + jx;
      const y = ((r + 0.5) / ROWS) * 100 + jy;
      const size = 6 + pseudo(idx + 7) * 3.4;
      const dist = Math.hypot(x - 50, (y - 50) * 1.15);
      items.push({ x, y, size, tint: idx % TINTS.length, threshold: 0, dist });
    }
  }
  // Appear from the centre outward.
  items.sort((a, b) => a.dist - b.dist);
  items.forEach((it, i) => {
    it.threshold = (i / COUNT) * 0.62;
  });
  return items;
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

  const fieldScale = useTransform(scrollYProgress, [0, 0.72], [2.5, 1]);
  const fieldOpacity = useTransform(scrollYProgress, [0.72, 0.84], [1, 0.5]);

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
    <section ref={ref} className="relative h-[360vh]">
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
        willChange: "transform, opacity",
      }}
    >
      <AvatarDot a={a} />
    </motion.div>
  );
}

function AvatarDot({ a }: { a: Avatar }) {
  const tint = TINTS[a.tint];
  return (
    <div
      className="flex aspect-square items-center justify-center rounded-full shadow-sm ring-1 ring-black/5"
      style={{ background: tint.bg }}
    >
      <User
        strokeWidth={2}
        className="h-1/2 w-1/2"
        style={{ color: tint.fg }}
        aria-hidden
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
  const opacity = useTransform(progress, [0.74, 0.84], [0, 1]);
  const scale = useTransform(progress, [0.74, 0.9], [0.92, 1]);
  const y = useTransform(progress, [0.74, 0.84], [26, 0]);
  return (
    <motion.div
      style={{ opacity }}
      className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center px-6 text-center"
    >
      <div className="pointer-events-none absolute h-[55%] w-[78%] max-w-[820px] rounded-full bg-[radial-gradient(ellipse_at_center,var(--color-background)_0%,color-mix(in_oklch,var(--color-background)_70%,transparent)_55%,transparent_75%)]" />
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
