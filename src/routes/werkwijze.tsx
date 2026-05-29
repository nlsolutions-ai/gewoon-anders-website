import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
import { Magnetic } from "@/components/motion";
import { CTALink } from "@/components/CTAButton";

export const Route = createFileRoute("/werkwijze")({
  head: () => ({
    meta: [
      { title: "Werkwijze: Het Anders Fundament - Gewoon Anders" },
      {
        name: "description",
        content:
          "Mijn werkwijze in vijf pijlers: brein, energie, structuur, grenzen, richting. Eerst je brein begrijpen, dan pas praktische stappen.",
      },
      { property: "og:title", content: "Werkwijze - Gewoon Anders" },
      { property: "og:description", content: "Het Anders Fundament in vijf pijlers." },
      { property: "og:url", content: "/werkwijze" },
    ],
    links: [{ rel: "canonical", href: "/werkwijze" }],
  }),
  component: WerkwijzePage,
});

const pillars = [
  { n: 1, t: "Brein", d: "Begrijpen hoe jouw brein werkt in je werk: aandacht, taakwisseling, focus.", q: "Hoe werk ik eigenlijk?" },
  { n: 2, t: "Energie", d: "Herkennen wat je werk je aan energie kost en geeft. Overprikkeling en herstel.", q: "Wat kost en geeft mij energie?" },
  { n: 3, t: "Structuur", d: "Werksystemen en routines die passen bij jouw brein, niet bij dat van een ander.", q: "Welke structuur werkt voor mij?" },
  { n: 4, t: "Grenzen", d: "Grenzen voelen, kennen en aangeven. Naar klanten en naar jezelf.", q: "Waar liggen mijn grenzen?" },
  { n: 5, t: "Richting", d: "Keuzes maken over je bedrijf die echt bij je passen.", q: "Waar wil ik naartoe?" },
];

function WerkwijzePage() {
  return (
    <>
      <PageHeader
        title="Hoe ik werk: Het Anders Fundament."
        intro="Al mijn begeleiding draait om een eenvoudig idee. Je kunt geen bedrijf bouwen op een brein dat je niet begrijpt. Daarom kijken we eerst naar hoe jouw brein werkt, en pas daarna naar de praktische stappen. Dat doen we langs vijf pijlers."
      />

      <section className="mx-auto max-w-5xl px-6 py-12 lg:px-10">
        <ul className="space-y-5">
          {pillars.map((p, i) => (
            <FadeIn key={p.n} as="li" delay={i * 60}>
              <article className="grid gap-5 rounded-xl border border-border bg-card p-7 sm:grid-cols-[auto_1fr] sm:gap-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-highlight text-xl font-semibold text-foreground">
                  {p.n}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">{p.t}</h2>
                  <p className="mt-2 text-[16px] leading-relaxed text-foreground/80">
                    {p.d}
                  </p>
                  <p className="mt-4 text-[15px] italic text-primary">{p.q}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <FadeIn>
          <div className="rounded-2xl bg-highlight p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Grenzen zijn geen karakterfouten
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-foreground/80">
              Veel ondernemers die ik begeleid hebben jaren gehoord dat ze te gevoelig,
              te druk of te moeilijk zijn. Dat klopt niet. Een grens is geen
              tekortkoming, het is een manier om goed voor jezelf te zorgen. We werken
              vanuit wat jouw brein nodig heeft, niet vanuit wat de norm zegt.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-10">
          <FadeIn>
            <Magnetic>
              <CTALink to="/traject" variant="primary" size="lg">
                Bekijk het traject
              </CTALink>
            </Magnetic>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
