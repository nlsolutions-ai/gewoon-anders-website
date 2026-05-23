import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHeader({
  title,
  intro,
  eyebrow,
}: {
  title: string;
  intro?: ReactNode;
  eyebrow?: string;
}) {
  return (
    <header className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 right-[-20%] h-[420px] w-[420px] rounded-full bg-primary/8 blur-3xl" />
      <div className="relative mx-auto max-w-[1240px] px-6 pt-12 pb-16 lg:px-10 lg:pt-20 lg:pb-20">
        <div className="max-w-3xl">
          {eyebrow && (
            <Reveal>
              <span className="eyebrow">{eyebrow}</span>
            </Reveal>
          )}
          <Reveal delay={eyebrow ? 60 : 0}>
            <h1 className="display-xl mt-6 text-[2.2rem] sm:text-[2.8rem] lg:text-[3.6rem]">
              {title}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={140}>
              <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-foreground/75 lg:text-[18px]">
                {intro}
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </header>
  );
}
