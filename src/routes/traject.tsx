import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { ChannelCards } from "@/components/ChannelCards";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/traject")({
  head: () => ({
    meta: [
      { title: "Het traject Anders Ondernemen - Gewoon Anders" },
      {
        name: "description",
        content:
          "Acht 1-op-1 sessies over ongeveer vier maanden. Vrije kanaalkeuze per sessie. Heldere prijzen, zonder verrassingen.",
      },
      { property: "og:title", content: "Het traject Anders Ondernemen" },
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

const prices = [
  { t: "Gratis kennismaking", d: "Een vrijblijvend gesprek van dertig minuten op het kanaal dat jij kiest.", p: "Gratis" },
  { t: "Anders Ondernemen, het volledige traject", d: "Acht sessies over ongeveer vier maanden, met vrije kanaalkeuze en werkmateriaal.", p: "1.450 euro" },
  { t: "Gespreid betalen", d: "Hetzelfde traject, verspreid over vier maandelijkse termijnen.", p: "Vier keer 395 euro" },
  { t: "Anders Ondernemen Kort", d: "Een verkorte variant van vier sessies, voor een afgebakende vraag.", p: "795 euro" },
  { t: "Losse vervolgsessie", d: "Voor wie na het traject af en toe wil bijsturen.", p: "175 euro per sessie" },
];

function TrajectPage() {
  return (
    <>
      <PageHeader
        title="Anders Ondernemen: het 1-op-1 traject."
        intro="In acht sessies bouw je samen met mij een bedrijf dat werkt met jouw brein. Geen theorie voor de buhne, maar praktische begeleiding die past bij hoe jij denkt en werkt. Een op een, volledig online, in jouw tempo."
      />

      {/* Sessies */}
      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-20">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Hoe het traject is opgebouwd.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Het traject bestaat uit acht sessies, verdeeld over ongeveer vier maanden.
            Hieronder zie je precies wat er in elke sessie gebeurt, zodat je weet wat je
            kunt verwachten.
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">
              Je kiest per sessie hoe we contact hebben.
            </h2>
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
                je vraag. Ik lees die rustig en stuur binnen drie werkdagen een
                uitgewerkte reactie terug, met inzichten en concrete stappen. Samen is
                dat een volwaardige sessie. Het is geen eindeloze uitwisseling van korte
                berichtjes, maar een doordachte heen-en-weer.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Prijzen */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-24">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Wat het kost.
          </h2>
        </FadeIn>
        <ul className="mt-10 space-y-4">
          {prices.map((pr, i) => (
            <FadeIn key={pr.t} as="li" delay={i * 50}>
              <article className="grid gap-4 rounded-xl border border-border bg-card p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-7">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{pr.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground/75">
                    {pr.d}
                  </p>
                </div>
                <p className="text-lg font-semibold text-primary sm:text-right">{pr.p}</p>
              </article>
            </FadeIn>
          ))}
        </ul>
        <FadeIn>
          <p className="mt-8 text-[15px] leading-relaxed text-foreground/75">
            Voor ondernemers is zakelijke coaching meestal aftrekbaar als bedrijfskosten.
            Vraag dit na bij je boekhouder.
          </p>
        </FadeIn>
      </section>

      {/* Slot */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-10">
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">
              Wil je weten of dit traject bij je past?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-foreground/80">
              Plan een gratis kennismaking. We kijken samen rustig of het klikt, en je
              zit nergens aan vast.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground hover:bg-primary/90"
            >
              Plan een gratis kennismaking
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
