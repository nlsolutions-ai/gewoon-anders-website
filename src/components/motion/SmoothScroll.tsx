import { useEffect } from "react";
import Lenis from "lenis";
import { useReducedMotionSafe } from "./useReducedMotionSafe";

/**
 * Lenis smooth-scroll provider. Mounts once at the app root.
 * Skips initialization entirely when the user prefers reduced motion, so native
 * scroll (and the reduced-motion CSS) takes over cleanly.
 */
export function SmoothScroll() {
  const reduced = useReducedMotionSafe();

  useEffect(() => {
    if (reduced) return;
    if (typeof window === "undefined") return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    let frame = 0;
    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [reduced]);

  return null;
}
