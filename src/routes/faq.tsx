import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Veelgestelde vragen - Gewoon Anders" },
      {
        name: "description",
        content:
          "Antwoorden op de meestgestelde vragen over coaching voor neurodivergente ondernemers bij Gewoon Anders.",
      },
      { property: "og:title", content: "Veelgestelde vragen - Gewoon Anders" },
      { property: "og:description", content: "Antwoorden op veelgestelde vragen." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FaqPage,
});

const faqs = [
  { q: "Moet ik een diagnose hebben om mee te doen?", a: "Nee. Het gaat om hoe jouw brein werkt in je bedrijf, niet om een officiele diagnose. Veel mensen die ik begeleid hebben een vermoeden, of zijn pas laat gediagnosticeerd. Dat is allemaal welkom." },
  { q: "Ik vind videobellen lastig. Kan dat anders?", a: "Ja. Je kiest per sessie zelf hoe we contact hebben: videobellen, bellen zonder beeld, live chatten of een mailsessie. Je hoeft nooit een kanaal te gebruiken dat niet bij je past." },
  { q: "Is dit therapie?", a: "Nee. Dit is zakelijke coaching. Het is praktisch en op de toekomst gericht. Ik stel geen diagnoses en geef geen therapie. Heb je een zorgvraag, dan denk ik met je mee over de juiste plek." },
  { q: "Hoe werkt een mailsessie precies?", a: "Jij schrijft een uitgewerkte mail over je situatie en je vraag. Ik stuur binnen drie werkdagen een uitgewerkte reactie terug, met inzichten en concrete stappen. Samen telt dat als een volledige sessie." },
  { q: "Wat als ik een sessie moeilijk vind of stil val?", a: "Dat is geen probleem. We gaan in jouw tempo. Je hoeft nooit meer te delen dan je wil, en je mag altijd zeggen dat iets te veel is." },
  { q: "Is de coaching aftrekbaar van de belasting?", a: "Voor ondernemers is zakelijke coaching meestal aftrekbaar als bedrijfskosten. Vraag dit na bij je boekhouder voor jouw specifieke situatie." },
  { q: "Hoe lang duurt het hele traject?", a: "Het volledige traject bestaat uit acht sessies, verspreid over ongeveer vier maanden. Het tempo bepalen we samen, dus het kan ook rustiger." },
  { q: "Wat gebeurt er bij de gratis kennismaking?", a: "We hebben een gesprek van dertig minuten op het kanaal dat jij kiest. Je vertelt waar je tegenaan loopt, ik vertel hoe ik werk, en we kijken of het klikt. Je zit daarna nergens aan vast." },
];

function FaqPage() {
  return (
    <>
      <PageHeader
        title="Veelgestelde vragen."
        intro="Hieronder beantwoord ik de vragen die het vaakst gesteld worden. Staat jouw vraag er niet bij, stel hem dan gerust via de contactpagina."
      />
      <section className="mx-auto max-w-3xl px-6 pb-24 lg:px-10">
        <FadeIn>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="py-6 text-left text-[17px] font-semibold text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-[16px] leading-relaxed text-foreground/80">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </section>
    </>
  );
}
