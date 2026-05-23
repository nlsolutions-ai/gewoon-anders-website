import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import jurgenBank from "@/assets/jurgen-portret-bank.png";
import jurgenMariska from "@/assets/jurgen-mariska.jpg";
import { FadeIn } from "@/components/FadeIn";
import { ChannelCards } from "@/components/ChannelCards";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gewoon Anders - Coaching voor neurodivergente ondernemers" },
      {
        name: "description",
        content:
          "Onderneem met je brein, niet ertegen. Rustige 1-op-1 business coaching voor ondernemers met ADHD, autisme of AuDHD.",
      },
      { property: "og:title", content: "Gewoon Anders" },
      { property: "og:description", content: "Onderneem met je brein, niet ertegen." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const recognise = [
  "Je bent goed in je vak, maar de rest van het ondernemen put je uit.",
  "Na een klantgesprek ben je leeg, terwijl het gesprek goed ging.",
  "Je hebt elke planningsmethode geprobeerd, en geen enkele houdt stand.",
  "Je vraagt een te lage prijs, omdat onderhandelen te veel van je vraagt.",
  "Iedereen zegt dat je moet groeien, maar dat voelt niet als jouw doel.",
];

const reassure = [
  {
    h: "Je hoeft geen diagnose te hebben.",
    p: "Het gaat om hoe jouw brein werkt, niet om een papiertje.",
  },
  {
    h: "Dit is coaching, geen therapie.",
    p: "Praktisch en op de toekomst gericht. Bij een zorgvraag verwijs ik je warm door.",
  },
  {
    h: "Je weet vooraf wat het kost.",
    p: "Heldere prijzen, geen verrassingen, geen verkooppraatjes.",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-24 lg:px-10 lg:pt-24 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
              Onderneem met je brein, niet ertegen.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
              Business coaching voor ondernemers met een ADHD-, autisme- of AuDHD-brein.
              Een op een, op het kanaal waarop jij het beste denkt. Of dat nu bellen,
              videobellen, chatten of mailen is.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Plan een gratis kennismaking
              </Link>
              <Link
                to="/traject"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Bekijk het traject
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="overflow-hidden rounded-2xl bg-secondary shadow-[0_8px_30px_rgba(31,58,82,0.08)]">
              <img
                src={jurgenBank}
                alt="Jurgen, oprichter van Gewoon Anders, zit ontspannen op een bank in een lichte huiselijke kamer."
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Herkenning */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10 lg:py-28">
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Misschien herken je dit als ondernemer.
            </h2>
          </FadeIn>
          <ul className="mt-12 space-y-5">
            {recognise.map((line, i) => (
              <FadeIn key={i} as="li" delay={i * 60}>
                <div className="flex gap-4 rounded-xl bg-background/70 p-5">
                  <Check
                    className="mt-1 shrink-0 text-primary"
                    size={22}
                    strokeWidth={1.8}
                    aria-hidden
                  />
                  <p className="text-[17px] leading-relaxed text-foreground/85">{line}</p>
                </div>
              </FadeIn>
            ))}
          </ul>
          <FadeIn>
            <p className="mt-12 max-w-2xl text-[17px] leading-relaxed text-foreground/80">
              Dit ligt niet aan jou en niet aan een gebrek aan discipline. Het ligt aan
              een manier van ondernemen die voor een ander brein is ontworpen. Bij Gewoon
              Anders bouw je een bedrijf dat past bij het brein dat je hebt.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Tweezijdig verhaal */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ik ken dit van twee kanten.
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-foreground/80">
                Ik ben zelf neurodivergent, en ik run al jaren meerdere bedrijven. Maar
                ik ken neurodivergentie ook van heel dichtbij op een andere manier. Ik
                ben al ruim achttien jaar samen met mijn vrouw, die pas op latere leeftijd
                ontdekte dat ze AuDHD heeft. Ik heb van dichtbij gezien wat het met
                iemand doet om jarenlang niet te weten waarom je anders bent. Om jezelf
                steeds aan te passen. Om niet geloofd te worden.
              </p>
              <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
                Daarom snap ik niet alleen hoe het voelt vanbinnen, maar ook wat de
                mensen om je heen vaak niet zien. Die twee kanten neem ik mee in elke
                begeleiding.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="overflow-hidden rounded-2xl bg-secondary shadow-[0_8px_30px_rgba(31,58,82,0.08)]">
              <img
                src={jurgenMariska}
                alt="Jurgen en zijn vrouw Mariska samen bij zonsondergang aan zee."
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Kanaal */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-28">
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Jij kiest hoe we praten.
            </h2>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-foreground/80">
              Niet iedereen denkt het beste in een videocall. Sommige mensen denken
              scherper zonder beeld, of in geschreven tekst, of als ze de tijd krijgen om
              hun gedachten te ordenen. Daarom kies je bij Gewoon Anders per sessie zelf
              hoe we contact hebben.
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="mt-12">
              <ChannelCards />
            </div>
          </FadeIn>
          <FadeIn>
            <p className="mt-10 max-w-2xl text-[17px] leading-relaxed text-foreground/80">
              Allemaal gelijkwaardig. De ene week anders dan de andere. Zoals je brein nu
              eenmaal werkt.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Traject korte uitleg */}
      <section className="bg-highlight">
        <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10 lg:py-28">
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Het traject: Anders Ondernemen.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-foreground/80">
              In acht sessies bouw je een bedrijf dat werkt met jouw brein. We kijken
              naar hoe je werkt, waar je energie heen gaat, welke structuur bij je past,
              hoe je grenzen stelt naar klanten, en welke richting echt van jou is. Een
              op een, in jouw tempo, op het kanaal dat voor jou werkt.
            </p>
            <Link
              to="/traject"
              className="mt-10 inline-flex items-center justify-center rounded-xl border border-foreground/15 bg-background px-6 py-3.5 text-base font-medium text-foreground hover:bg-secondary"
            >
              Bekijk het hele traject
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Geruststelling */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-28">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Wat je van tevoren mag weten.
          </h2>
        </FadeIn>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {reassure.map((r, i) => (
            <FadeIn key={r.h} as="li" delay={i * 80}>
              <article className="h-full rounded-xl border border-border bg-card p-7 shadow-[0_1px_2px_rgba(31,58,82,0.04)]">
                <h3 className="text-lg font-semibold text-foreground">{r.h}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground/75">
                  {r.p}
                </p>
              </article>
            </FadeIn>
          ))}
        </ul>
      </section>

      {/* Slot */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-10 lg:py-28">
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Benieuwd of dit bij je past?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-foreground/80">
              Plan een gratis kennismaking van een half uur. Op het kanaal dat jij wil.
              Geen verplichtingen. Daarna beslis jij rustig of je verder wil.
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
