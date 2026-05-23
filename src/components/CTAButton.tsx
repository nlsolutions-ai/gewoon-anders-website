import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  showArrow?: boolean;
  size?: "md" | "lg";
  className?: string;
};

const sizes = {
  md: {
    pad: "pl-6 pr-2 py-2",
    text: "text-[15px]",
    iconBox: "h-9 w-9",
    iconSize: 16,
  },
  lg: {
    pad: "pl-7 pr-2.5 py-2.5",
    text: "text-base",
    iconBox: "h-11 w-11",
    iconSize: 18,
  },
} as const;

function shellClass(variant: Variant) {
  if (variant === "primary") {
    return "bg-primary text-primary-foreground hover:bg-primary/95";
  }
  if (variant === "secondary") {
    return "bg-foreground/[0.04] text-foreground border border-foreground/10 hover:bg-foreground/[0.06]";
  }
  return "bg-transparent text-foreground border border-foreground/15 hover:bg-foreground/[0.04]";
}

function iconBgClass(variant: Variant) {
  if (variant === "primary") return "bg-primary-foreground/15";
  return "bg-foreground/5";
}

/** Primary CTA — pill with nested circular icon ("button-in-button" pattern) */
export function CTALink({
  to,
  children,
  variant = "primary",
  showArrow = true,
  icon,
  size = "md",
  className = "",
  ...rest
}: CommonProps & ComponentProps<typeof Link> & { to: any }) {
  const s = sizes[size];
  return (
    <Link
      to={to}
      {...rest}
      className={`magnet group inline-flex items-center gap-3 rounded-full font-medium ${s.pad} ${s.text} ${shellClass(variant)} ${className}`}
    >
      <span>{children}</span>
      {(showArrow || icon) && (
        <span
          className={`flex ${s.iconBox} items-center justify-center rounded-full ${iconBgClass(variant)} transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[1px]`}
        >
          {icon ?? <ArrowUpRight size={s.iconSize} strokeWidth={1.8} aria-hidden />}
        </span>
      )}
    </Link>
  );
}

/** External / anchor variant */
export function CTAAnchor({
  href,
  children,
  variant = "primary",
  showArrow = true,
  icon,
  size = "md",
  className = "",
  ...rest
}: CommonProps & ComponentProps<"a">) {
  const s = sizes[size];
  return (
    <a
      href={href}
      {...rest}
      className={`magnet group inline-flex items-center gap-3 rounded-full font-medium ${s.pad} ${s.text} ${shellClass(variant)} ${className}`}
    >
      <span>{children}</span>
      {(showArrow || icon) && (
        <span
          className={`flex ${s.iconBox} items-center justify-center rounded-full ${iconBgClass(variant)} transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[1px]`}
        >
          {icon ?? <ArrowUpRight size={s.iconSize} strokeWidth={1.8} aria-hidden />}
        </span>
      )}
    </a>
  );
}
