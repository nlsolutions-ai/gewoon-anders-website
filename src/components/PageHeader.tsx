import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { MaskReveal } from "./motion";

/**
 * Editorial page header: hairline eyebrow kicker (optionally with a section
 * numeral), an oversized kinetic serif title, and an intro. Used across nearly
 * every content page, so this is the main lever for site-wide consistency.
 */
export function PageHeader({
  title,
  intro,
  eyebrow,
  index,
}: {
  title: string;
  intro?: ReactNode;
  eyebrow?: string;
  /** Optional magazine numeral shown before the eyebrow, e.g. "01". */
  index?: string;
}) {
  return (
    <header className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 right-[-20%] h-[420px] w-[420px] rounded-full bg-primary/8 blur-3xl float-gentle" />
      <div className="relative mx-auto max-w-[1240px] px-6 pt-14 pb-16 lg:px-10 lg:pt-24 lg:pb-20">
        <div className="max-w-4xl">
          {eyebrow && (
            <Reveal>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                {index && <span className="section-index">{index}</span>}
                <span className="eyebrow">{eyebrow}</span>
              </div>
            </Reveal>
          )}
          <MaskReveal
            as="h1"
            text={title}
            className="display-xl mt-6 text-balance text-[2.1rem] leading-[1.02] sm:text-[2.8rem] lg:text-[3.7rem]"
          />
          {intro && (
            <Reveal delay={160}>
              <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-foreground/75 lg:text-[19px]">
                {intro}
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </header>
  );
}
