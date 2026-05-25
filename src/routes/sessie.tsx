import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { CalendlyChannelFlow, type CalendlyUrls } from "@/components/CalendlyChannelFlow";

export const Route = createFileRoute("/sessie")({
  head: () => ({
    meta: [
      { title: "Plan je volgende sessie - Gewoon Anders" },
      {
        name: "description",
        content:
          "Voor deelnemers van het traject Anders Ondernemen: plan je volgende sessie op het kanaal dat deze week voor jou werkt.",
      },
      { name: "robots", content: "noindex,nofollow" },
      { property: "og:title", content: "Plan je volgende sessie" },
      { property: "og:url", content: "/sessie" },
    ],
    links: [{ rel: "canonical", href: "/sessie" }],
  }),
  component: SessiePage,
});

const sessieUrls: CalendlyUrls = {
  video: "https://calendly.com/northernlights-info/gewoon-anders-videocall",
  bellen: "https://calendly.com/northernlights-info/gewoon-anders-telefonisch",
  chat: "https://calendly.com/northernlights-info/gewoon-anders-chat",
  mail: "https://calendly.com/northernlights-info/gewoon-anders-email",
};

function SessiePage() {
  return (
    <>
      <PageHeader
        eyebrow="Voor deelnemers · sessie 1 t/m 8"
        title="Plan je volgende sessie."
        intro="Welkom terug. Kies hieronder het kanaal dat deze week voor jou werkt en plan je volgende sessie in. Je mag elke keer wisselen, geen vorm is een mindere keuze."
      />

      <CalendlyChannelFlow
        urls={sessieUrls}
        step1Eyebrow="Stap 1"
        step1Heading="Welk kanaal werkt deze keer voor jou?"
        step1Intro="Je mag wisselen per sessie. Kies wat nu past bij je energie en wat je deze week wil doen."
        step2Heading="Kies een moment dat jou uitkomt."
      />
    </>
  );
}
