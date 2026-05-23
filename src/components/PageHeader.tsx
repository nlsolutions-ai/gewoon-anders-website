import type { ReactNode } from "react";

export function PageHeader({
  title,
  intro,
}: {
  title: string;
  intro?: ReactNode;
}) {
  return (
    <header className="mx-auto max-w-3xl px-6 pt-20 pb-12 lg:px-10 lg:pt-28">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {title}
      </h1>
      {intro && (
        <p className="mt-6 text-lg leading-relaxed text-foreground/80">{intro}</p>
      )}
    </header>
  );
}
