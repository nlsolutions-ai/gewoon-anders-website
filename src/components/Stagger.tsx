import { Children, isValidElement, type ReactNode } from "react";
import { Reveal } from "./Reveal";

/**
 * Wraps children with sequential reveal delays for a staggered cascade.
 */
export function Stagger({
  children,
  step = 80,
  start = 0,
  variant = "up",
  className = "",
}: {
  children: ReactNode;
  step?: number;
  start?: number;
  variant?: "up" | "left" | "right";
  className?: string;
}) {
  const items = Children.toArray(children).filter(isValidElement);
  return (
    <div className={className}>
      {items.map((child, i) => (
        <Reveal key={i} delay={start + i * step} variant={variant}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}
