import { type ReactNode } from "react";

type MarqueeProps = {
  items: string[];
  className?: string;
  /** Seconds for one full loop. Lower = faster. */
  duration?: number;
  /** Separator between items. */
  separator?: ReactNode;
};

/**
 * Infinite horizontal ticker. Pure CSS animation (see .marquee-track in
 * styles.css) so it costs almost nothing and auto-stops under reduced motion.
 *
 * The track is two identical halves and the CSS translates by -50%, so the loop
 * is seamless ONLY when one half is at least as wide as the viewport. With a
 * short item list a single pass would leave a gap on the right, so we repeat the
 * items enough times per half to comfortably overflow any screen width.
 */
export function Marquee({
  items,
  className,
  duration = 32,
  separator = "·",
}: MarqueeProps) {
  const reps = Math.max(3, Math.ceil(16 / Math.max(1, items.length)));
  const half = Array.from({ length: reps }, () => items).flat();
  const sequence = [...half, ...half];
  return (
    <div className={`marquee-mask overflow-hidden ${className ?? ""}`}>
      <div
        className="marquee-track"
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {sequence.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span>{item}</span>
            <span aria-hidden className="px-6 opacity-40">
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
