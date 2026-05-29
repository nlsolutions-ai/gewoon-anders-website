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
 * The item list is duplicated once so the -50% translate loops seamlessly.
 */
export function Marquee({
  items,
  className,
  duration = 32,
  separator = "·",
}: MarqueeProps) {
  const sequence = [...items, ...items];
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
