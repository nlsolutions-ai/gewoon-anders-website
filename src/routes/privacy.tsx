import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacyverklaring - Gewoon Anders" },
      { name: "description", content: "Privacyverklaring van Gewoon Anders." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacyverklaring."
        intro="Deze pagina krijgt binnenkort de volledige privacyverklaring van Gewoon Anders. Heb je nu al een vraag over hoe ik met je gegevens omga, stuur dan een mail."
      />
      <section className="mx-auto max-w-3xl px-6 pb-24 lg:px-10">
        <p className="text-[16px] leading-relaxed text-foreground/80">
          Gewoon Anders gaat zorgvuldig om met je gegevens. Wat je deelt in een gesprek
          of via het contactformulier blijft tussen ons. Ik gebruik je gegevens alleen om
          contact met je op te nemen en om de coaching uit te kunnen voeren.
        </p>
      </section>
    </>
  );
}
