import type { ReactNode } from "react";

/**
 * Double-Bezel card: outer shell holds inner core like a machined tray.
 * Concentric radii. Tinted ambient shadow.
 */
export function BezelCard({
  children,
  className = "",
  innerClassName = "",
  tone = "card",
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  tone?: "card" | "highlight" | "secondary";
}) {
  const innerBg =
    tone === "highlight"
      ? "bg-highlight"
      : tone === "secondary"
        ? "bg-secondary"
        : "bg-card";
  return (
    <div
      className={`bezel-outer relative bg-foreground/[0.025] p-1.5 ring-1 ring-foreground/5 transition-shadow duration-500 hover:shadow-ambient-lg ${className}`}
    >
      <div
        className={`bezel-inner relative ${innerBg} p-7 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}

/** Compact bezel-style image frame */
export function BezelFrame({
  children,
  className = "",
  innerClassName = "",
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <div
      className={`bezel-outer relative bg-foreground/[0.04] p-1.5 ring-1 ring-foreground/5 shadow-ambient-lg ${className}`}
    >
      <div className={`bezel-inner overflow-hidden bg-secondary ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
}
