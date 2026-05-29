import { useReducedMotion } from "framer-motion";

/**
 * Returns a definite boolean for reduced-motion preference.
 * framer-motion's useReducedMotion can return null during SSR; we coerce to
 * false so the first client paint matches the server (no motion flash), and the
 * real value kicks in after hydration.
 */
export function useReducedMotionSafe(): boolean {
  return useReducedMotion() ?? false;
}
