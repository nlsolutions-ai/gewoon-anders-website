import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useReducedMotionSafe } from "./useReducedMotionSafe";

type CountUpProps = {
  to: number;
  className?: string;
  /** Duration in ms. */
  duration?: number;
  prefix?: string;
  suffix?: string;
};

/**
 * Counts up to a target number when scrolled into view. Shows the final number
 * immediately under reduced motion.
 */
export function CountUp({ to, className, duration = 1400, prefix = "", suffix = "" }: CountUpProps) {
  const reduced = useReducedMotionSafe();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [value, setValue] = useState(reduced ? to : 0);

  useEffect(() => {
    if (reduced || !inView) return;
    let raf = 0;
    let start = 0;
    function step(ts: number) {
      if (!start) start = ts;
      const progress = Math.min(1, (ts - start) / duration);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to));
      if (progress < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("nl-NL")}
      {suffix}
    </span>
  );
}
