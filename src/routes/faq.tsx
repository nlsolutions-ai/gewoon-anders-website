import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { MaskReveal } from "@/components/motion";
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
          "Antwoorden op de meestgestelde vragen over coaching voor neurodivergente ondernemers: diagnose, kanalen, prijs, werkwijze, en wat we doen als het schuurt.",
      },
      { property: "og:title", content: "Veelgestelde vragen - Gewoon Anders" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqsForSchema(),
        }),
      },
    ],
  }),
  component: FaqPage,
});

type FaqItem = { q: string; a: string };
type FaqGroup = { group: string; items: FaqItem[] };

const groups: FaqGroup[] = [
  {
    group: "Of dit bij je past",
    items: [
      {
        q: "Moet ik een diagnose hebben om mee te doen?",
        a: "Nee. Het gaat om hoe jouw brein werkt in je bedrijf, niet om een officieel papiertje. Veel mensen die ik begeleid hebben een vermoeden, of zijn pas later in hun leven gediagnosticeerd. Dat is allemaal welkom.",
      },
      {
        q: "Ik weet niet zeker of ik wel neurodivergent ben. Kan ik dan toch komen?",
        a: "Ja. Als je veel van wat op deze site staat herkent en je voelt dat je werk je meer kost dan logisch zou moeten zijn, is dat een prima reden om eens te praten. We hoeven niet eerst zeker te weten wat het is.",
      },
      {
        q: "Is dit therapie?",
        a: "Nee. Dit is zakelijke coaching. We werken aan je bedrijf en hoe je werk inricht. Ik stel geen diagnoses en geef geen therapie. Bij een zorgvraag denk ik met je mee over een goede plek, ik verwijs warm door.",
      },
      {
        q: "Voor wie is dit traject niet bedoeld?",
        a: "Voor wie nu in een crisis zit of eerst zorg nodig heeft, is dit niet het juiste moment. Ook niet voor wie alleen een tactisch marketingvraagstuk heeft waar het brein geen rol in speelt. En niet voor wie zoekt naar een coach die je in een hoger tempo duwt. In een kennismaking kijken we samen of het past.",
      },
    ],
  },
  {
    group: "De kanalen",
    items: [
      {
        q: "Ik vind videobellen lastig. Kan dat anders?",
        a: "Ja. Je kiest per sessie zelf hoe we contact hebben: videobellen, bellen zonder beeld, live chatten of een mailsessie. Je hoeft nooit een kanaal te gebruiken dat niet bij je past.",
      },
      {
        q: "Hoe werkt een mailsessie precies?",
        a: "Jij schrijft een uitgewerkte mail over je situatie en je vraag. Ik lees 'm rustig en stuur binnen drie werkdagen een uitgewerkte reactie terug, met inzichten en concrete stappen. Samen telt dat als één sessie. Het is dus geen reeks korte berichtjes heen en weer.",
      },
      {
        q: "Kan ik elke sessie wisselen van kanaal?",
        a: "Ja. Je beslist per sessie, uiterlijk bij het inplannen. De ene week voelt videobellen prima, de andere week is bellen zonder beeld beter. Dat hoeft niet vooraf vast.",
      },
      {
        q: "Mag ik tussen sessies door contact opnemen?",
        a: "Voor korte vragen kun je op vaste momenten mailen, ik reageer dan binnen een paar werkdagen. Voor langere uitwisselingen plannen we een mailsessie of een ander kanaal. Geen 24/7 beschikbaarheid en geen crisisdienst.",
      },
    ],
  },
  {
    group: "Het traject",
    items: [
      {
        q: "Hoe lang duurt het hele traject?",
        a: "Het volledige traject bestaat uit acht sessies, verspreid over ongeveer vier maanden. Het tempo bepalen we samen. Het mag rustiger als dat beter past.",
      },
      {
        q: "Wat als ik na het traject nog losse sessies wil?",
        a: "Dat kan. Losse vervolgsessies kosten 175 euro inclusief btw per stuk en kun je inplannen wanneer je voelt dat je wil bijsturen. Geen abonnement, geen verplichting.",
      },
      {
        q: "Wat als ik niet aan acht sessies toekom?",
        a: "Er is een verkorte variant van vier sessies, voor een afgebakende vraag. Dat heet Gewoon Anders Ondernemen Kort en kost 795 euro inclusief btw. Voor sommige mensen is dat genoeg om een blokkade los te trekken.",
      },
      {
        q: "Wat als ik halverwege wil stoppen?",
        a: "Dat mag. Je betaalt dan voor wat je hebt afgenomen. We bespreken vooraf hoe afronden eruitziet, zodat er geen vervelend gevoel achterblijft.",
      },
      {
        q: "Krijg ik huiswerk?",
        a: "Soms. Per pijler is er een kort, rustig werkblad. Geen lange opdrachten. Past een werkblad op dat moment niet, dan slaan we het over. Doelen halen is geen doel op zich.",
      },
    ],
  },
  {
    group: "Prijs en geld",
    items: [
      {
        q: "Wat kost het traject?",
        a: "Het volledige traject Gewoon Anders Ondernemen kost 1.450 euro inclusief btw voor acht sessies. Gespreid betalen kan in vier maandelijkse termijnen van 395 euro inclusief btw. De korte variant is 795 euro inclusief btw. Alle bedragen op de site zijn inclusief btw.",
      },
      {
        q: "Is de coaching aftrekbaar van de belasting?",
        a: "Voor ondernemers is zakelijke coaching meestal aftrekbaar als bedrijfskosten. Vraag het even na bij je boekhouder voor jouw situatie. Ik geef geen belastingadvies.",
      },
      {
        q: "Wat krijg ik voor die prijs?",
        a: "Acht sessies van zestig minuten op het kanaal dat jij per keer kiest. Een werkblad per pijler. Een begrensd mailkanaal voor korte vragen tussendoor. Aan het eind een eigen Gewoon Anders Ondernemen Plan.",
      },
      {
        q: "Wat zit er niet bij?",
        a: "Geen 24/7 beschikbaarheid, geen crisisdienst, geen onbeperkt mailen tussen sessies. Geen marketing- of administratie-uitvoering. Geen diagnose of therapie.",
      },
    ],
  },
  {
    group: "In de praktijk",
    items: [
      {
        q: "Wat gebeurt er bij de gratis kennismaking?",
        a: "We hebben een gesprek van dertig minuten op het kanaal dat jij kiest. Je vertelt waar je tegenaan loopt, ik vertel hoe ik werk, en we kijken of het klikt. Je zit daarna nergens aan vast.",
      },
      {
        q: "Wat als ik een sessie moeilijk vind of stil val?",
        a: "Dat is geen probleem. We gaan in jouw tempo. Je hoeft nooit meer te delen dan je wil, en je mag altijd zeggen dat iets te veel is.",
      },
      {
        q: "Wat als ik een sessie wil verzetten?",
        a: "Tot 24 uur van tevoren kun je kosteloos verzetten. Daarbinnen reken ik de sessie als gedaan, behalve als er iets dringends speelt. Dat lossen we dan in overleg op.",
      },
      {
        q: "Werk je ook met ondernemers zonder personeel?",
        a: "Ja. De meeste mensen die ik begeleid zijn zzp'er of hebben een klein bedrijf. Het traject werkt ook voor ondernemers met een team, mits je vraag in jouw rol als ondernemer ligt en niet in HR.",
      },
      {
        q: "Wat doe je met privacy?",
        a: "Wat je in een sessie zegt blijft tussen ons. Ik leg geen verklaringen of dossiers aan. Voor administratie sla ik alleen het nodige op: naam, contact, factuurgegevens. Lees ook de privacyverklaring.",
      },
    ],
  },
];

function faqsForSchema() {
  return groups.flatMap((g) =>
    g.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  );
}

function FaqPage() {
  return (
    <>
      <PageHeader
        title="Veelgestelde vragen."
        intro="Hieronder beantwoord ik de vragen die mensen het vaakst stellen. Geordend per onderwerp. Staat jouw vraag er niet bij, stuur me dan een mail of stel hem in een gratis kennismaking."
      />
      <section className="mx-auto max-w-[1240px] px-6 pb-28 lg:px-10">
        {groups.map((group, gi) => (
          <div
            key={group.group}
            className="grid gap-8 border-t border-foreground/10 py-14 first:border-t-0 first:pt-2 lg:grid-cols-12 lg:gap-12 lg:py-20"
          >
            <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
              <Reveal>
                <span className="section-index">{String(gi + 1).padStart(2, "0")}</span>
              </Reveal>
              <MaskReveal
                as="h2"
                text={group.group}
                className="display-lg mt-3 text-[1.7rem] text-foreground sm:text-[2rem]"
              />
            </div>

            <div className="lg:col-span-8">
              <Accordion type="single" collapsible className="w-full">
                {group.items.map((f, i) => (
                  <Reveal key={i} delay={i * 50}>
                    <AccordionItem
                      value={`item-${gi}-${i}`}
                      className="border-b border-foreground/10"
                    >
                      <AccordionTrigger className="gap-4 py-6 text-left text-[17px] font-semibold text-foreground hover:text-primary hover:no-underline lg:text-[18px]">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-[16px] leading-relaxed text-foreground/80 lg:text-[17px]">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  </Reveal>
                ))}
              </Accordion>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
