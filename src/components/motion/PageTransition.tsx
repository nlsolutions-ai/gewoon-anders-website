import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotionSafe } from "./useReducedMotionSafe";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Wraps page content for route transitions. Used with AnimatePresence keyed by
 * pathname in __root. Simple, fast cross-fade + slight rise — deliberately
 * restrained so it doesn't fight SSG/scroll-restore. No motion when reduced.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const reduced = useReducedMotionSafe();

  if (reduced) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: EASE }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
