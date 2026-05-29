import { createElement, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotionSafe } from "./useReducedMotionSafe";

type GroupTag = "div" | "ul" | "ol";

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  as?: GroupTag;
};

/**
 * Wrap a group; direct children wrapped in <StaggerItem> animate in sequence
 * when the group scrolls into view. Spring-physics rise + fade.
 */
export function StaggerGroup({
  children,
  className,
  stagger = 0.09,
  delay = 0,
  as = "div",
}: StaggerGroupProps) {
  const reduced = useReducedMotionSafe();

  if (reduced) {
    return createElement(as, { className }, children);
  }

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {children}
    </MotionTag>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article" | "span";
};

export function StaggerItem({ children, className, as = "div" }: StaggerItemProps) {
  const reduced = useReducedMotionSafe();
  const MotionTag = motion[as];

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      transition={{ type: "spring", stiffness: 260, damping: 30, mass: 0.9 }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </MotionTag>
  );
}
