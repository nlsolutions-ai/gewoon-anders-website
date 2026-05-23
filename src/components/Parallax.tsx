import { useEffect, useRef, type ReactNode } from "react";

/**
 * Subtle parallax: shifts content along Y axis based on scroll position.
 * Uses requestAnimationFrame + transform only (GPU-safe).
 * Respects prefers-reduced-motion.
 */
export function Parallax({
  children,
  speed = 0.18,
  className = "",
}: {
  children: ReactNode;
  /** -0.5 (slow) to 0.5 (fast). Positive = moves slower than scroll (deeper). */
  speed?: number;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    let visible = false;

    const obs = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? false;
        if (visible) tick();
      },
      { rootMargin: "100px 0px 100px 0px" },
    );
    obs.observe(wrap);

    const tick = () => {
      if (!visible || !wrap || !inner) return;
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // 0 when section centered, negative above, positive below
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      const offset = -progress * speed * 100;
      inner.style.transform = `translate3d(0, ${offset}px, 0)`;
      raf = window.requestAnimationFrame(tick);
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(tick);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    tick();

    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={wrapRef} className={className}>
      <div ref={innerRef} style={{ willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
}
