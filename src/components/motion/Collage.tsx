import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useReducedMotionSafe } from "./useReducedMotionSafe";

type Tile = {
  src: string;
  alt: string;
  /** Final grid slot, as percentage of the stage (0–100). */
  gridX: number;
  gridY: number;
  /** Final size as a fraction of stage width. */
  w: number;
  /** Scatter start: offset from grid slot (vw/vh-ish, in %). */
  fromX: number;
  fromY: number;
  /** Start rotation in degrees. */
  rot: number;
  /** Parallax depth after assembly (px of extra drift). */
  depth: number;
  z: number;
};

type CollageProps = {
  tiles: Tile[];
  /** Center overlay heading (decorative). */
  kicker?: string;
  heading?: string;
  /** Second line of the heading, rendered as a warm accent. */
  headingAccent?: string;
};

/**
 * Pinned scroll-assembly collage. The section is tall; inside it a sticky
 * viewport holds image tiles that begin scattered + rotated and converge into a
 * tidy grid as you scroll through. After assembly they drift with light
 * parallax. A centered heading fades in at the convergence point.
 *
 * Under reduced motion: renders a plain static grid of the tiles.
 */
export function Collage({ tiles, kicker, heading, headingAccent }: CollageProps) {
  const reduced = useReducedMotionSafe();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  if (reduced) {
    return (
      <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-4 px-6 py-20 sm:grid-cols-3 lg:px-10">
        {tiles.map((t) => (
          <img
            key={t.src}
            src={t.src}
            alt={t.alt}
            className="w-full rounded-2xl object-cover shadow-ambient"
          />
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative h-[280vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* soft moving glow */}
        <div className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl float-gentle" />
        <div className="pointer-events-none absolute -right-24 bottom-1/4 h-[360px] w-[360px] rounded-full bg-highlight/40 blur-3xl" />

        <div className="relative h-[78vh] w-full max-w-[1240px]">
          {tiles.map((t, i) => (
            <CollageTile key={t.src} tile={t} progress={scrollYProgress} index={i} />
          ))}

          {/* Center heading fades in as tiles lock into place */}
          <CenterHeading
            progress={scrollYProgress}
            kicker={kicker}
            heading={heading}
            headingAccent={headingAccent}
          />
        </div>
      </div>
    </div>
  );
}

function CollageTile({
  tile,
  progress,
  index,
}: {
  tile: Tile;
  progress: MotionValue<number>;
  index: number;
}) {
  // Converge between 0 and 0.55 of the scroll-through; then gentle parallax.
  const x = useTransform(progress, [0, 0.55, 1], [`${tile.fromX}%`, "0%", "0%"]);
  const y = useTransform(
    progress,
    [0, 0.55, 1],
    [`${tile.fromY}%`, "0%", `${tile.depth}px`],
  );
  const rotate = useTransform(progress, [0, 0.55], [tile.rot, 0]);
  const scale = useTransform(progress, [0, 0.55], [0.82, 1]);
  const opacity = useTransform(progress, [0, 0.12], [0, 1]);

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${tile.gridX}%`,
        top: `${tile.gridY}%`,
        width: `${tile.w}%`,
        x,
        y,
        rotate,
        scale,
        opacity,
        zIndex: tile.z,
        willChange: "transform, opacity",
      }}
    >
      <div className="overflow-hidden rounded-2xl shadow-ambient-lg ring-1 ring-foreground/10">
        <img
          src={tile.src}
          alt={tile.alt}
          loading={index < 2 ? "eager" : "lazy"}
          className="h-full w-full object-cover"
        />
      </div>
    </motion.div>
  );
}

function CenterHeading({
  progress,
  kicker,
  heading,
  headingAccent,
}: {
  progress: MotionValue<number>;
  kicker?: string;
  heading?: string;
  headingAccent?: string;
}) {
  const opacity = useTransform(progress, [0.42, 0.6, 0.92, 1], [0, 1, 1, 0]);
  const y = useTransform(progress, [0.42, 0.6], [28, 0]);
  if (!kicker && !heading) return null;
  return (
    <motion.div
      style={{ opacity, y }}
      className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center px-6 text-center"
    >
      {/* soft legibility glow so the heading reads over any tile */}
      <div className="pointer-events-none absolute h-[60%] w-[80%] max-w-[820px] rounded-full bg-[radial-gradient(ellipse_at_center,var(--color-background)_0%,transparent_70%)] opacity-80" />
      {kicker && <span className="eyebrow relative mb-5">{kicker}</span>}
      {heading && (
        <h2 className="display-xl relative max-w-[18ch] text-[2.4rem] leading-[0.98] sm:text-[3.6rem] lg:text-[5rem]">
          {heading}
          {headingAccent && (
            <>
              {" "}
              <span className="italic text-primary">{headingAccent}</span>
            </>
          )}
        </h2>
      )}
    </motion.div>
  );
}
