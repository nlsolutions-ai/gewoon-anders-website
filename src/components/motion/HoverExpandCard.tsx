import { type ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotionSafe } from "./useReducedMotionSafe";

const EASE = [0.16, 1, 0.3, 1] as const;

type HoverExpandCardProps = {
  kicker: string;
  /** Always-visible summary line. */
  title: string;
  /** Detail revealed on hover (desktop) / always shown (touch + reduced). */
  detail: string;
  className?: string;
};

/**
 * Card that unfolds on hover: the detail slides open with a height+fade
 * animation and an accent bar sweeps in. On touch devices and under reduced
 * motion the detail is always shown (no information hidden behind hover).
 */
export function HoverExpandCard({ kicker, title, detail, className }: HoverExpandCardProps) {
  const reduced = useReducedMotionSafe();
  const [open, setOpen] = useState(false);

  const alwaysOpen = reduced;

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-3xl border border-foreground/8 bg-card p-7 ${className ?? ""}`}
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      whileHover={reduced ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      style={{ willChange: "transform" }}
    >
      {/* accent sweep */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left bg-primary"
        initial={false}
        animate={{ scaleX: open || alwaysOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: EASE }}
      />
      <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
        {kicker}
      </p>
      <p className="mt-3 text-[18px] font-semibold leading-snug text-foreground">
        {title}
      </p>

      {alwaysOpen ? (
        <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">{detail}</p>
      ) : (
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.42, ease: EASE }}
              style={{ overflow: "hidden" }}
            >
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">
                {detail}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
}
