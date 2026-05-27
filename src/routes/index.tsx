import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowUpRight } from "lucide-react";
import jurgenBank from "@/assets/jurgen-portret-bank.png";
import jurgenMariska from "@/assets/jurgen-mariska.jpg";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { ChannelCards } from "@/components/ChannelCards";
import { BezelFrame } from "@/components/BezelCard";
import { CTALink } from "@/components/CTAButton";

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
  "Je bereidt iets maandenlang voor, en toch krijg je jezelf niet aan de start.",
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
    p: "Heldere prijzen. Geen verrassingen achteraf, geen verkooppraatje.",
  },
  {
    h: "Het gaat om wie jij bent.",
    p: "Geen standaardprogramma. We kijken samen wat neurodiversiteit voor jou betekent, en hoe succes er voor jou uitziet. Dat is voor iedereen anders. Daar bouwen we het traject omheen.",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero — Editorial split */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -right-32 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl float-gentle" />
          <div className="absolute top-40 -left-24 h-[320px] w-[320px] rounded-full bg-highlight/40 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-[1240px] gap-12 px-6 pb-24 pt-14 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:pb-32 lg:pt-20">
          <div className="lg:col-span-7 lg:pr-6 xl:pr-12">
            <Reveal>
              <span className="eyebrow">1-op-1 business coaching</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display-xl mt-6 text-[2.6rem] sm:text-[3.2rem] lg:text-[4.4rem] xl:text-[5rem]">
                Onderneem met<br />
                je brein,<br />
                <span className="text-primary">niet ertegen.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-[18px] leading-relaxed text-foreground/75 lg:text-[19px]">
                Business coaching voor ondernemers met een ADHD-, autisme- of
                AuDHD-brein. Een op een, op het kanaal waarop jij het meest jezelf bent.
                Of dat nu bellen, videobellen, chatten of mailen is.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <CTALink to="/over-mij" variant="secondary" size="lg">
                  Lees mijn verhaal
                </CTALink>
                <CTALink to="/traject" variant="ghost" size="lg" showArrow={false}>
                  Bekijk het traject
                </CTALink>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal variant="right" delay={120}>
              <Parallax speed={0.12}>
                <BezelFrame className="rotate-[0.6deg]">
                  <div className="overflow-hidden bezel-inner">
                    <img
                      src={jurgenBank}
                      alt="Jurgen, oprichter van Gewoon Anders, zit ontspannen op een bank in een lichte huiselijke kamer."
                      className="h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02]"
                      loading="eager"
                    />
                  </div>
                </BezelFrame>
              </Parallax>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Herkenning */}
      <section className="relative bg-secondary">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="eyebrow">Herkenning</span>
              </Reveal>
              <Reveal delay={60}>
                <h2 className="display-lg mt-5 text-3xl sm:text-4xl lg:text-[2.6rem]">
                  Misschien herken je dit als ondernemer.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 text-[17px] leading-relaxed text-foreground/75">
                  Dit ligt niet aan jou en niet aan een gebrek aan discipline. Het ligt
                  aan een manier van ondernemen die voor een ander brein is ontworpen.
                  Bij Gewoon Anders bouw je een bedrijf dat past bij het brein dat je
                  hebt.
                </p>
              </Reveal>
            </div>
            <ul className="space-y-4 lg:col-span-7">
              {recognise.map((line, i) => (
                <Reveal key={i} as="li" delay={i * 70}>
                  <div className="group relative flex gap-5 rounded-2xl bg-background/70 p-6 ring-1 ring-foreground/5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-background hover:shadow-ambient">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110">
                      <Check size={18} strokeWidth={2} aria-hidden />
                    </span>
                    <p className="text-[17px] leading-relaxed text-foreground/85">{line}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Masking — kern */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-32 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-primary/8 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1240px] gap-14 px-6 py-28 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-36">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow">Het stuk dat vaak onbenoemd blijft</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-lg mt-6 text-3xl sm:text-4xl lg:text-[2.8rem]">
                Masking kost je waarschijnlijk meer dan je denkt.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 text-[17px] leading-relaxed text-foreground/75 lg:text-[18px]">
                Voor veel autistische en AuDHD-ondernemers is masking de stille post
                die bij elk klantgesprek, elke pitch en elke netwerkafspraak iets van je
                aftrekt. Je wordt niet ineens iemand anders. Je past je toon een beetje
                aan, je houdt iets binnen, je maakt oogcontact dat je eigenlijk niet
                zou maken. En voor je het weet ben je na een gesprek dat goed ging een
                dag lang nergens meer toe in staat.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 text-[17px] leading-relaxed text-foreground/75 lg:text-[18px]">
                Dat is geen reden om iemand anders te worden. Wel een goede reden om je
                werk zo in te richten dat je het minder hoeft.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-3">
                <CTALink to="/themas/masking" variant="primary" size="lg">
                  Lees over masking
                </CTALink>
                <CTALink to="/masking-check" variant="secondary" size="lg">
                  Doe de Masking-check
                </CTALink>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal variant="right" delay={120}>
              <div className="space-y-4">
                <div className="rounded-3xl border border-foreground/8 bg-card p-7 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-ambient">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
                    In klantgesprekken
                  </p>
                  <p className="mt-3 text-[17px] leading-relaxed text-foreground/85">
                    Je past je toon en snelheid aan op de ander. Soms zo precies dat je
                    de jouwe even kwijt bent.
                  </p>
                </div>
                <div className="rounded-3xl border border-foreground/8 bg-card p-7 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-ambient lg:ml-10">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
                    Bij prijsgesprekken
                  </p>
                  <p className="mt-3 text-[17px] leading-relaxed text-foreground/85">
                    Je voelt de aarzeling bij de ander, en haalt liever je prijs naar
                    beneden dan dat je dat ongemak laat staan.
                  </p>
                </div>
                <div className="rounded-3xl border border-foreground/8 bg-card p-7 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-ambient">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
                    Op netwerk-events
                  </p>
                  <p className="mt-3 text-[17px] leading-relaxed text-foreground/85">
                    Je doet alsof je het leuk vindt, op pure wilskracht. Daarna ben je
                    twee dagen onbruikbaar.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tweezijdig verhaal */}
      <section className="relative bg-secondary">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-6 py-24 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-32">
          <div className="lg:col-span-5">
            <Reveal>
              <Parallax speed={0.1}>
                <BezelFrame>
                  <img
                    src={jurgenMariska}
                    alt="Jurgen en zijn vrouw Mariska samen bij zonsondergang aan zee."
                    className="h-full w-full object-cover"
                  />
                </BezelFrame>
              </Parallax>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow">Twee kanten van neurodivergentie</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-lg mt-6 text-3xl sm:text-4xl lg:text-[2.6rem]">
                Ik ken dit van twee kanten.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 text-[17px] leading-relaxed text-foreground/75">
                Ik ben zelf neurodivergent, en ik run al jaren meerdere bedrijven. Maar
                ik ken neurodivergentie ook van heel dichtbij op een andere manier. Ik
                ben al ruim achttien jaar samen met mijn vrouw, die pas op latere
                leeftijd ontdekte dat ze AuDHD heeft. Ik heb van dichtbij gezien wat het
                met iemand doet om jarenlang niet te weten waarom je anders bent. Om
                jezelf steeds aan te passen. Om niet geloofd te worden.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 text-[17px] leading-relaxed text-foreground/75">
                Daarom snap ik niet alleen hoe het voelt vanbinnen, maar ook wat de
                mensen om je heen vaak niet zien. Die twee kanten neem ik mee in elke
                begeleiding.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <Link
                to="/over-mij"
                className="mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-primary link-underline"
              >
                Lees mijn verhaal
                <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Kanaal */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-6 py-28 lg:px-10 lg:py-36">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="eyebrow">Vier kanalen, gelijkwaardig</span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg mt-6 text-3xl sm:text-4xl lg:text-[2.6rem]">
                  Jij kiest hoe we praten.
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-7 text-[17px] leading-relaxed text-foreground/75">
                  Niet iedereen denkt het beste in een videocall. Sommige mensen denken
                  scherper zonder beeld, of in geschreven tekst, of als ze de tijd
                  krijgen om hun gedachten te ordenen. Daarom kies je bij Gewoon Anders
                  per sessie zelf hoe we contact hebben.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-5 text-[17px] leading-relaxed text-foreground/75">
                  Allemaal gelijkwaardig. De ene week anders dan de andere. Zoals je
                  brein nu eenmaal werkt.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <ChannelCards />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Traject korte uitleg */}
      <section className="relative">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] bg-foreground p-10 sm:p-14 lg:p-20">
            <div className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-24 h-[360px] w-[360px] rounded-full bg-primary/15 blur-3xl" />
            <div className="relative max-w-3xl">
              <Reveal>
                <span className="eyebrow border-background/20 bg-background/10 text-background/90">
                  Het traject
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg mt-6 text-3xl text-background sm:text-4xl lg:text-[2.6rem]">
                  Gewoon Anders Ondernemen.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 text-[17px] leading-relaxed text-background/80 lg:text-[18px]">
                  In acht sessies bouw je een bedrijf dat werkt met jouw brein. We kijken
                  naar hoe je werkt, waar je energie heen gaat, welke structuur bij je
                  past, hoe je grenzen stelt naar klanten, en welke richting echt van
                  jou is. Een op een, in jouw tempo, op het kanaal dat voor jou werkt.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-10">
                  <CTALink to="/traject" variant="secondary" size="lg" className="!bg-background/10 !border-background/20 !text-background hover:!bg-background/15">
                    Bekijk het hele traject
                  </CTALink>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Geruststelling */}
      <section className="relative">
        <div className="mx-auto max-w-[1240px] px-6 py-28 lg:px-10 lg:py-36">
          <Reveal>
            <span className="eyebrow">Wat je van tevoren mag weten</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-lg mt-6 max-w-2xl text-3xl sm:text-4xl lg:text-[2.4rem]">
              Vier dingen die ik vooraf wil zeggen.
            </h2>
          </Reveal>
          <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reassure.map((r, i) => (
              <Reveal key={r.h} as="li" delay={i * 90}>
                <article className="group relative h-full rounded-3xl border border-foreground/8 bg-card p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-ambient-lg">
                  <span className="absolute right-7 top-7 text-[12px] font-mono text-foreground/30">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{r.h}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">
                    {r.p}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Slot */}
      <section className="relative bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-28 text-center lg:px-10">
          <Reveal>
            <h2 className="display-lg text-3xl sm:text-4xl lg:text-[2.6rem]">
              Benieuwd of dit bij je past?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-foreground/75">
              Plan een gratis kennismaking van een half uur. Op het kanaal dat jij wil.
              Geen verplichtingen. Daarna beslis jij rustig of je verder wil.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-10 flex justify-center">
              <CTALink to="/contact" variant="primary" size="lg">
                Plan een kennismaking
              </CTALink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
