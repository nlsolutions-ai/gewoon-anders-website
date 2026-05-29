import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import mockupVolledig from "@/assets/mockup-volledig.png";
import mockupKort from "@/assets/mockup-kort.png";
import { FadeIn } from "@/components/FadeIn";
import { ChannelCards } from "@/components/ChannelCards";
import { PageHeader } from "@/components/PageHeader";
import { MaskReveal, Magnetic } from "@/components/motion";
import { CTAAnchor } from "@/components/CTAButton";

const CHECKOUT_VOLLEDIG = "https://checkout.northernlights.solutions/checkout/gewoon-anders-ondernemen";
const CHECKOUT_KORT = "https://checkout.northernlights.solutions/checkout/gewoon-anders-ondernemen-kort";

export const Route = createFileRoute("/traject")({
  head: () => ({
    meta: [
      { title: "Gewoon Anders Ondernemen, het 1-op-1 traject" },
      {
        name: "description",
        content:
          "Acht 1-op-1 sessies over ongeveer vier maanden. Vrije kanaalkeuze per sessie. Heldere prijzen, zonder verrassingen.",
      },
      { property: "og:title", content: "Het traject Gewoon Anders Ondernemen" },
      { property: "og:description", content: "Acht 1-op-1 sessies, vrije kanaalkeuze." },
      { property: "og:url", content: "/traject" },
    ],
    links: [{ rel: "canonical", href: "/traject" }],
  }),
  component: TrajectPage,
});

const sessions = [
  { n: 1, t: "Kennismaking en je brein", d: "We maken rustig kennis op het kanaal dat jij kiest, en brengen in kaart hoe jouw brein werkt in je werk." },
  { n: 2, t: "Waar je bedrijf tegen je brein in werkt", d: "We benoemen welke onderdelen van het ondernemen botsen met hoe jij in elkaar zit. Zonder oordeel." },
  { n: 3, t: "Energie", d: "Je houdt een week je werkenergie bij. We zoeken samen waar je energie weglekt." },
  { n: 4, t: "Een werkweek die bij je past", d: "We ontwerpen een planning of werksysteem dat klopt voor jouw brein." },
  { n: 5, t: "Tussenpunt", d: "We kijken halverwege terug. Wat werkt al, wat stellen we bij." },
  { n: 6, t: "Grenzen", d: "We oefenen met een concrete zakelijke grens: een prijs, een nee, een afspraak met een klant." },
  { n: 7, t: "Welk bedrijf past bij jou", d: "We formuleren een keuze over de toekomst van je bedrijf die echt van jou is." },
  { n: 8, t: "Je eigen plan", d: "Je rondt je persoonlijke plan af: hoe je verder bouwt na het traject." },
];


function TrajectPage() {
  return (
    <>
      <PageHeader
        title="Gewoon Anders Ondernemen: het 1-op-1 traject."
        intro="In acht sessies bouwen we samen aan een bedrijf dat werkt met jouw brein. Geen vage theorie om indruk mee te maken. Wel praktische begeleiding die past bij hoe jij denkt en werkt. Een op een, volledig online, in jouw tempo."
      />

      {/* Sessies */}
      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-20">
        <FadeIn>
          <MaskReveal as="h2" text="Hoe het traject is opgebouwd." className="display-lg text-[1.9rem] sm:text-[2.2rem] text-foreground" />
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Acht sessies, verdeeld over zo'n vier maanden. Wat er per sessie gebeurt
            staat hieronder. Zo weet je waar je instapt.
          </p>
        </FadeIn>
        <ol className="mt-12 space-y-4">
          {sessions.map((s, i) => (
            <FadeIn key={s.n} as="li" delay={i * 50}>
              <article className="flex gap-6 rounded-xl border border-border bg-card p-6 sm:p-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-highlight text-lg font-semibold text-foreground">
                  {s.n}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{s.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground/75">
                    {s.d}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </ol>
      </section>

      {/* Kanalen */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-24">
          <FadeIn>
            <MaskReveal as="h2" text="Je kiest per sessie hoe we contact hebben." className="display-lg text-[1.9rem] sm:text-[2.2rem] text-foreground" />
          </FadeIn>
          <div className="mt-10">
            <ChannelCards />
          </div>
          <FadeIn>
            <div className="mt-10 rounded-2xl bg-highlight p-8">
              <h3 className="text-xl font-semibold text-foreground">
                Hoe werkt een mailsessie precies?
              </h3>
              <p className="mt-4 text-[16px] leading-relaxed text-foreground/80">
                Bij een mailsessie schrijf jij een uitgewerkte mail over je situatie en
                je vraag. Ik lees 'm rustig en stuur binnen drie werkdagen een
                doordachte reactie terug, met inzichten en concrete stappen. Samen is
                dat een volwaardige sessie. Geen losse berichtjes heen en weer, maar
                één goede uitwisseling.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Twee varianten — visueel */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-24">
        <FadeIn>
          <MaskReveal as="h2" text="Twee manieren om mee te doen." className="display-lg text-[1.9rem] sm:text-[2.2rem] text-foreground" />
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-foreground/80">
            Het volledige traject voor wie ruim wil bouwen, of de korte
            variant voor één afgebakende vraag. Wat je krijgt in beide
            gevallen: 1-op-1 sessies, vrije kanaalkeuze, een werkboek en een
            routekaart voor jouw bedrijf.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-2">
          <FadeIn>
            <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 sm:p-7">
              <div className="flex items-center justify-center">
                <img
                  src={mockupVolledig}
                  alt="Gewoon Anders Ondernemen: acht sessies met werkboek en routekaart"
                  className="w-full max-w-xs sm:max-w-sm"
                  loading="lazy"
                  width={1400}
                  height={933}
                />
              </div>
              <div className="mt-2 flex flex-1 flex-col">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-primary">
                  Acht sessies · vier maanden
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  Gewoon Anders Ondernemen
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground/75">
                  Het volledige traject. Acht 1-op-1 sessies, een werkboek
                  per pijler, en aan het eind je eigen routekaart voor de
                  komende maanden.
                </p>
                <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-2xl font-semibold tabular-nums text-foreground">
                    €&thinsp;1.450
                  </span>
                  <span className="text-[14px] text-foreground/65">
                    incl. btw · of 4 × €&thinsp;395
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Magnetic>
                    <CTAAnchor
                      href={CHECKOUT_VOLLEDIG}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                    >
                      Direct boeken
                    </CTAAnchor>
                  </Magnetic>
                  <Link
                    to="/contact"
                    className="text-[14px] font-medium text-primary link-underline"
                  >
                    Eerst kennismaken
                  </Link>
                </div>
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={80}>
            <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 sm:p-7">
              <div className="flex items-center justify-center">
                <img
                  src={mockupKort}
                  alt="Gewoon Anders Ondernemen Kort: vier sessies met werkboek en routekaart"
                  className="w-full max-w-xs sm:max-w-sm"
                  loading="lazy"
                  width={1400}
                  height={933}
                />
              </div>
              <div className="mt-2 flex flex-1 flex-col">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-primary">
                  Vier sessies · twee maanden
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  Gewoon Anders Ondernemen Kort
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground/75">
                  De verkorte variant voor één afgebakende vraag. Vier
                  1-op-1 sessies, een werkboek en een routekaart die je
                  meteen kunt gebruiken.
                </p>
                <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-2xl font-semibold tabular-nums text-foreground">
                    €&thinsp;795
                  </span>
                  <span className="text-[14px] text-foreground/65">
                    incl. btw · of 2 × €&thinsp;445
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Magnetic>
                    <CTAAnchor
                      href={CHECKOUT_KORT}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                    >
                      Direct boeken
                    </CTAAnchor>
                  </Magnetic>
                  <Link
                    to="/contact"
                    className="text-[14px] font-medium text-primary link-underline"
                  >
                    Eerst kennismaken
                  </Link>
                </div>
              </div>
            </article>
          </FadeIn>
        </div>

        <FadeIn>
          <p className="mt-12 max-w-3xl text-[15px] leading-relaxed text-foreground/70">
            Na het traject kun je losse vervolgsessies bijboeken voor 175 euro
            inclusief btw per sessie. Alle bedragen op deze pagina zijn inclusief
            btw. Voor ondernemers is zakelijke coaching meestal aftrekbaar als
            bedrijfskosten. Vraag dit na bij je boekhouder.
          </p>
        </FadeIn>
      </section>

      {/* Slot */}
      <section className="noise relative overflow-hidden bg-ink text-ink-foreground">
        <div className="pointer-events-none absolute -right-24 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center lg:px-10">
          <FadeIn>
            <MaskReveal as="h2" text="Klaar om te beginnen?" className="display-lg text-[1.9rem] sm:text-[2.3rem] text-background" />
            <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-background/80">
              Boek het traject direct als je weet dat dit bij je past. Of plan eerst
              een vrijblijvende kennismaking als je nog wil voelen of het klikt. Beide
              kan, beide is goed.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Magnetic>
                <CTAAnchor
                  href={CHECKOUT_VOLLEDIG}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="lg"
                >
                  Boek het volledige traject
                </CTAAnchor>
              </Magnetic>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-background/20 bg-background/10 px-6 py-3.5 text-base font-medium text-background hover:bg-background/15"
              >
                Plan een kennismaking
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
