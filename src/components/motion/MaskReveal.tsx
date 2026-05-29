import { createElement, type ElementType } from "react";
import { motion } from "framer-motion";
import { useReducedMotionSafe } from "./useReducedMotionSafe";

type Tag = "h1" | "h2" | "h3" | "p" | "span" | "div";

type MaskRevealProps = {
  /** The text to reveal word by word. */
  text: string;
  /** Render tag, e.g. "h1" | "h2" | "p". */
  as?: Tag;
  className?: string;
  /** Delay before the first word (seconds). */
  delay?: number;
  /** Per-word stagger (seconds). */
  stagger?: number;
  /** Trigger on scroll into view (default) or immediately on mount. */
  onView?: boolean;
};

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Editorial kinetic headline: each word rises out of an overflow clip with a
 * staggered cascade. Falls back to plain text when reduced motion is requested.
 */
export function MaskReveal({
  text,
  as = "span",
  className,
  delay = 0,
  stagger = 0.055,
  onView = true,
}: MaskRevealProps) {
  const reduced = useReducedMotionSafe();
  const words = text.split(" ");

  if (reduced) {
    return createElement(as, { className }, text);
  }

  const MotionTag = (motion[as] as ElementType);

  const animateProps = onView
    ? { whileInView: "visible", viewport: { once: true, margin: "-12% 0px" } }
    : { animate: "visible" };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      {...animateProps}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}
        >
          <motion.span
            style={{ display: "inline-block", willChange: "transform" }}
            variants={{ hidden: { y: "110%" }, visible: { y: "0%" } }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
