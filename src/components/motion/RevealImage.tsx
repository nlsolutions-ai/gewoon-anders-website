import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotionSafe } from "./useReducedMotionSafe";

type RevealImageProps = {
  src: string;
  alt: string;
  className?: string;
  /** Wipe direction. */
  from?: "bottom" | "left" | "right";
  /** Eager-load (hero) vs lazy. */
  eager?: boolean;
};

/**
 * Image that wipes open with a clip-path + inner scale as it scrolls into view,
 * then keeps a subtle scroll-linked scale (Ken Burns). Static under reduced
 * motion.
 */
export function RevealImage({ src, alt, className, from = "bottom", eager }: RevealImageProps) {
  const reduced = useReducedMotionSafe();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Inner image scale: zooms slightly as it travels through the viewport.
  const scale = useTransform(scrollYProgress, [0, 1], [1.18, 1.02]);

  if (reduced) {
    return (
      <div className={`overflow-hidden ${className ?? ""}`}>
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    );
  }

  const clipFrom =
    from === "left"
      ? "inset(0 100% 0 0)"
      : from === "right"
        ? "inset(0 0 0 100%)"
        : "inset(100% 0 0 0)";

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className ?? ""}`}
      initial={{ clipPath: clipFrom }}
      whileInView={{ clipPath: "inset(0% 0 0 0)" }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        className="h-full w-full object-cover"
        style={{ scale, willChange: "transform" }}
      />
    </motion.div>
  );
}
