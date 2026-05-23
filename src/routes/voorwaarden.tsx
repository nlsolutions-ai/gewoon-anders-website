import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/voorwaarden")({
  head: () => ({
    meta: [
      { title: "Algemene voorwaarden - Gewoon Anders" },
      { name: "description", content: "Algemene voorwaarden van Gewoon Anders." },
      { property: "og:url", content: "/voorwaarden" },
    ],
    links: [{ rel: "canonical", href: "/voorwaarden" }],
  }),
  component: VoorwaardenPage,
});

function VoorwaardenPage() {
  return (
    <>
      <PageHeader
        title="Algemene voorwaarden."
        intro="Deze pagina krijgt binnenkort de volledige algemene voorwaarden van Gewoon Anders. Heb je nu al een vraag, stuur dan een mail."
      />
      <section className="mx-auto max-w-3xl px-6 pb-24 lg:px-10">
        <p className="text-[16px] leading-relaxed text-foreground/80">
          Gewoon Anders biedt coaching, geen zorg. Er worden geen diagnoses gesteld en
          geen behandeling gegeven. Bij een zorgvraag denk ik met je mee over de juiste
          plek.
        </p>
      </section>
    </>
  );
}
