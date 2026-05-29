import { type ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotionSafe } from "./useReducedMotionSafe";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /**
   * Depth: positive moves slower (recedes), negative moves faster (comes
   * forward). Roughly the px offset across the full scroll-through.
   */
  offset?: number;
};

/**
 * Scroll-linked vertical parallax. Layer several at different offsets for a
 * multi-depth effect. Renders static under reduced motion.
 */
export function Parallax({ children, className, offset = 60 }: ParallaxProps) {
  const reduced = useReducedMotionSafe();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y, willChange: "transform" }}>{children}</motion.div>
    </div>
  );
}
