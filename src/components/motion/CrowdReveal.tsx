import { useMemo, useRef } from "react";
import {
  motion,
  motionValue,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useReducedMotionSafe } from "./useReducedMotionSafe";

/**
 * Scroll-driven "growing crowd" as a tidy field of uniform marbles. Every face
 * is the same-size circle with a solid border in a Gewoon Anders logo colour.
 * They sit side by side in a clean grid (no overlap) and pop in from the centre
 * outward while the field gently zooms out. Jurgen + Mariska occupy the two
 * dead-centre cells (green border, appear first, stay). Then the heading pops in
 * along the bottom over a soft glow.
 */

const COLS = 12;
const ROWS = 7;
const CELLS = COLS * ROWS; // 84 marbles: 2 hosts + 82 AI faces

const AI_FACE_COUNT = 82;
const AI_FACES = Array.from(
  { length: AI_FACE_COUNT },
  (_, i) => `/crowd/face-${String(i + 1).padStart(2, "0")}.jpg`,
);

// Border colours pulled from the Gewoon Anders logo.
const LOGO_BORDERS = [
  "#3F2A8E", // deep purple
  "#5A3CA8", // violet
  "#2756A8", // royal blue
  "#137A8E", // petrol / teal
  "#29A8DF", // cyan
  "#F47B20", // orange
  "#EE4036", // red-orange
  "#FBB040", // golden yellow
];
const HOST_BORDER = "#246724"; // brand green

type Cell = {
  row: number;
  col: number;
  src: string;
  host: boolean;
  border: string;
  threshold: number;
};

function buildCells(): Cell[] {
  const cx = (COLS - 1) / 2;
  const cy = (ROWS - 1) / 2;

  // Rank every cell by distance from centre (for centre-outward appearance).
  const order = Array.from({ length: CELLS }, (_, i) => i).sort((a, b) => {
    const da = Math.hypot((a % COLS) - cx, (Math.floor(a / COLS) - cy) * 1.1);
    const db = Math.hypot((b % COLS) - cx, (Math.floor(b / COLS) - cy) * 1.1);
    return da - db;
  });
  const rank = new Array<number>(CELLS);
  order.forEach((cellIndex, r) => {
    rank[cellIndex] = r;
  });

  let aiCursor = 0;
  return Array.from({ length: CELLS }, (_, i) => {
    const row = Math.floor(i / COLS);
    const col = i % COLS;
    const r = rank[i];
    const host = r < 2; // two centre-most cells
    let src: string;
    let border: string;
    if (host) {
      // r === 0 → Jurgen (left of the centre pair), r === 1 → Mariska.
      src = r === 0 ? "/crowd/jurgen.jpg" : "/crowd/mariska.jpg";
      border = HOST_BORDER;
    } else {
      src = AI_FACES[aiCursor % AI_FACE_COUNT];
      aiCursor++;
      border = LOGO_BORDERS[(row * 3 + col * 5) % LOGO_BORDERS.length];
    }
    return {
      row,
      col,
      src,
      host,
      border,
      threshold: 0.04 + (r / CELLS) * 0.72,
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
  const cells = useMemo(buildCells, []);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const fieldScale = useTransform(scrollYProgress, [0, 0.8], [1.45, 1]);

  const grid = (
    <div
      className="mx-auto grid w-full max-w-[1080px] gap-[clamp(4px,0.9vw,12px)]"
      style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
    >
      {cells.map((cell, i) => (
        <Marble key={i} cell={cell} progress={reduced ? null : scrollYProgress} />
      ))}
    </div>
  );

  if (reduced) {
    return (
      <section className="relative overflow-hidden py-20">
        <div className="px-6">{grid}</div>
        <h2 className="display-xl mx-auto mt-12 max-w-[18ch] px-6 text-center text-[2.2rem] leading-[1.02] sm:text-[3rem]">
          {heading}{" "}
          {headingAccent && <span className="italic text-primary">{headingAccent}</span>}
        </h2>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[460vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-secondary/40">
        <div className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl float-gentle" />
        <div className="pointer-events-none absolute -right-24 bottom-1/4 h-[360px] w-[360px] rounded-full bg-highlight/40 blur-3xl" />

        <motion.div
          style={{ scale: fieldScale, willChange: "transform" }}
          className="w-full px-6 lg:px-10"
        >
          {grid}
        </motion.div>

        {/* Heading pops in along the bottom over a soft glow */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[7%] flex justify-center px-6">
          <CrowdHeading progress={scrollYProgress} heading={heading} headingAccent={headingAccent} />
        </div>
      </div>
    </section>
  );
}

function Marble({ cell, progress }: { cell: Cell; progress: MotionValue<number> | null }) {
  const opacity = useTransform(progress ?? CONST_ONE, [cell.threshold, cell.threshold + 0.04], [0, 1]);
  const scale = useTransform(progress ?? CONST_ONE, [cell.threshold, cell.threshold + 0.07], [0.2, 1]);
  const dynamic = progress ? { opacity, scale } : {};
  return (
    <motion.div
      style={{ ...dynamic, willChange: "transform, opacity" }}
      className="aspect-square"
    >
      <div
        className={`h-full w-full overflow-hidden rounded-full ${cell.host ? "shadow-ambient" : ""}`}
        style={{ border: `3px solid ${cell.border}` }}
      >
        <img
          src={cell.src}
          alt=""
          aria-hidden
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    </motion.div>
  );
}

// Stable constant MotionValue for the reduced-motion path.
const CONST_ONE = motionValue(1);

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
  const y = useTransform(progress, [0.82, 0.92], [22, 0]);
  return (
    <motion.div style={{ opacity }} className="relative flex justify-center">
      <div className="pointer-events-none absolute -inset-x-32 -inset-y-12 rounded-[50%] bg-[radial-gradient(ellipse_at_center,var(--color-background)_0%,color-mix(in_oklch,var(--color-background)_80%,transparent)_55%,transparent_78%)]" />
      <motion.h2
        style={{ scale, y }}
        className="display-xl relative max-w-[20ch] text-center text-[2.2rem] leading-[1.0] sm:text-[3rem] lg:text-[3.8rem]"
      >
        {heading}{" "}
        {headingAccent && <span className="italic text-primary">{headingAccent}</span>}
      </motion.h2>
    </motion.div>
  );
}
