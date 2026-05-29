import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { Check, ArrowUpRight, Video, Mail, MessageSquare, Phone } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import jurgenBank from "@/assets/jurgen-portret-bank.png";
import jurgenMariska from "@/assets/jurgen-mariska.jpg";
import { Reveal } from "@/components/Reveal";
import { ChannelCards } from "@/components/ChannelCards";
import { BezelFrame } from "@/components/BezelCard";
import { CTALink } from "@/components/CTAButton";
import { SectionKicker } from "@/components/SectionKicker";
import {
  MaskReveal,
  StaggerGroup,
  StaggerItem,
  Magnetic,
  Marquee,
  CrowdReveal,
  HoverExpandCard,
  RevealImage,
  useReducedMotionSafe,
} from "@/components/motion";

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

const maskingCards = [
  {
    k: "In klantgesprekken",
    title: "Je toon schuift mee met de ander.",
    detail:
      "Je past je toon en snelheid aan op de ander. Soms zo precies dat je de jouwe even kwijt bent.",
  },
  {
    k: "Bij prijsgesprekken",
    title: "Je prijs zakt om het ongemak weg te nemen.",
    detail:
      "Je voelt de aarzeling bij de ander, en haalt liever je prijs naar beneden dan dat je dat ongemak laat staan.",
  },
  {
    k: "Op netwerk-events",
    title: "Je doet mee op pure wilskracht.",
    detail:
      "Je doet alsof je het leuk vindt, op pure wilskracht. Daarna ben je twee dagen onbruikbaar.",
  },
];

const channelChips = [
  { icon: Video, label: "Videobellen", x: "-14%", y: "-8%", delay: 0.5, drift: -90 },
  { icon: Phone, label: "Bellen", x: "-22%", y: "62%", delay: 0.62, drift: 70 },
  { icon: MessageSquare, label: "Chatten", x: "82%", y: "10%", delay: 0.74, drift: -60 },
  { icon: Mail, label: "Mailsessie", x: "78%", y: "70%", delay: 0.86, drift: 100 },
];

/* ---------- Hero with scroll choreography ---------- */

function Hero() {
  const reduced = useReducedMotionSafe();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Portrait drifts up + scales as you scroll past the hero.
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const portraitRotate = useTransform(scrollYProgress, [0, 1], [0.6, -1.2]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -right-32 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl float-gentle" />
        <div className="absolute top-40 -left-24 h-[320px] w-[320px] rounded-full bg-highlight/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-6 pb-20 pt-14 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:pb-32 lg:pt-20">
        <div className="lg:col-span-7 lg:pr-6 xl:pr-12">
          <Reveal>
            <span className="eyebrow">1-op-1 business coaching</span>
          </Reveal>
          <h1 className="display-xl mt-7 text-[2.8rem] leading-[0.98] sm:text-[3.6rem] lg:text-[4.8rem] xl:text-[5.4rem]">
            <MaskReveal as="span" text="Onderneem met" className="block" onView={false} />
            <MaskReveal as="span" text="je brein," className="block" onView={false} delay={0.08} />
            <MaskReveal
              as="span"
              text="niet ertegen."
              className="block italic text-primary"
              onView={false}
              delay={0.16}
            />
          </h1>
          <Reveal delay={320}>
            <p className="mt-8 max-w-xl text-[18px] leading-relaxed text-foreground/75 lg:text-[19px]">
              Business coaching voor ondernemers met een ADHD-, autisme- of
              AuDHD-brein. Een op een, op het kanaal waarop jij het meest jezelf bent.
              Of dat nu bellen, videobellen, chatten of mailen is.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Magnetic>
                <CTALink to="/over-mij" variant="secondary" size="lg">
                  Lees mijn verhaal
                </CTALink>
              </Magnetic>
              <CTALink to="/traject" variant="ghost" size="lg" showArrow={false}>
                Bekijk het traject
              </CTALink>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <motion.div
              style={reduced ? undefined : { y: portraitY, scale: portraitScale, rotate: portraitRotate }}
            >
              <Reveal variant="right" delay={160}>
                <BezelFrame>
                  <div className="overflow-hidden bezel-inner">
                    <img
                      src={jurgenBank}
                      alt="Jurgen, oprichter van Gewoon Anders, zit ontspannen op een bank in een lichte huiselijke kamer."
                      className="h-full w-full object-cover"
                      loading="eager"
                    />
                  </div>
                </BezelFrame>
              </Reveal>
            </motion.div>

            {/* Floating channel chips that drift on scroll */}
            {!reduced &&
              channelChips.map((chip) => (
                <FloatingChip key={chip.label} chip={chip} progress={scrollYProgress} />
              ))}
          </div>
        </div>
      </div>

      {/* Marquee band */}
      <div className="relative border-y border-foreground/10 bg-background/60 py-5">
        <Marquee
          items={["Videobellen", "Bellen zonder beeld", "Live chatten", "Mailsessies"]}
          duration={28}
          className="font-display text-[1.4rem] italic text-foreground/70 sm:text-[1.7rem]"
        />
      </div>
    </section>
  );
}

function FloatingChip({
  chip,
  progress,
}: {
  chip: (typeof channelChips)[number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const y = useTransform(progress, [0, 1], [0, chip.drift]);
  const opacity = useTransform(progress, [0, 0.6], [1, 0]);
  const Icon = chip.icon;
  return (
    <motion.div
      className="absolute z-10 hidden lg:block"
      style={{ left: chip.x, top: chip.y, y, opacity, willChange: "transform, opacity" }}
      initial={{ opacity: 0, scale: 0.6, y: 14 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: chip.delay, type: "spring", stiffness: 240, damping: 18 }}
    >
      <div className="flex items-center gap-2 rounded-full border border-foreground/10 bg-card/90 px-4 py-2.5 shadow-ambient backdrop-blur-md">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon size={15} strokeWidth={1.8} aria-hidden />
        </span>
        <span className="text-[14px] font-medium text-foreground">{chip.label}</span>
      </div>
    </motion.div>
  );
}

function HomePage() {
  return (
    <>
      {/* 01 — Hero */}
      <Hero />

      {/* Visual interlude — groeiende menigte met storyline-payoff */}
      <CrowdReveal heading="Wij zijn gewoon anders…" headingAccent="En dat is prima." />

      {/* 02 — Herkenning */}
      <section className="relative bg-secondary">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionKicker index="02" label="Herkenning" />
              </Reveal>
              <h2 className="display-lg mt-6 text-[2rem] sm:text-4xl lg:text-[2.8rem]">
                <MaskReveal as="span" text="Misschien herken je dit als ondernemer." />
              </h2>
              <Reveal delay={140}>
                <p className="mt-6 text-[17px] leading-relaxed text-foreground/75">
                  Dit ligt niet aan jou en niet aan een gebrek aan discipline. Het ligt
                  aan een manier van ondernemen die voor een ander brein is ontworpen.
                  Bij Gewoon Anders bouw je een bedrijf dat past bij het brein dat je
                  hebt.
                </p>
              </Reveal>
            </div>
            <StaggerGroup as="ul" className="space-y-4 lg:col-span-7">
              {recognise.map((line, i) => (
                <StaggerItem key={i} as="li">
                  <div className="group relative flex gap-5 rounded-2xl bg-background/70 p-6 ring-1 ring-foreground/5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-background hover:shadow-ambient hover:ring-primary/20">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]">
                      <Check size={18} strokeWidth={2} aria-hidden />
                    </span>
                    <p className="text-[17px] leading-relaxed text-foreground/85">{line}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* 03 — Masking, dark ink section with hover-expand cards */}
      <section className="noise relative overflow-hidden bg-ink text-ink-foreground">
        <div className="pointer-events-none absolute -right-32 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1240px] gap-14 px-6 py-28 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-36">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionKicker index="03" label="Het stuk dat vaak onbenoemd blijft" light />
            </Reveal>
            <h2 className="display-lg mt-6 text-[2.1rem] text-background sm:text-4xl lg:text-[3rem]">
              <MaskReveal as="span" text="Masking kost je waarschijnlijk meer dan je denkt." />
            </h2>
            <Reveal delay={160}>
              <p className="mt-8 text-[17px] leading-relaxed text-background/80 lg:text-[18px]">
                Voor veel autistische en AuDHD-ondernemers is masking de stille post
                die bij elk klantgesprek, elke pitch en elke netwerkafspraak iets van je
                aftrekt. Je wordt niet ineens iemand anders. Je past je toon een beetje
                aan, je houdt iets binnen, je maakt oogcontact dat je eigenlijk niet
                zou maken. En voor je het weet ben je na een gesprek dat goed ging een
                dag lang nergens meer toe in staat.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 text-[17px] leading-relaxed text-background/80 lg:text-[18px]">
                Dat is geen reden om iemand anders te worden. Wel een goede reden om je
                werk zo in te richten dat je het minder hoeft.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Magnetic>
                  <CTALink to="/themas/masking" variant="primary" size="lg">
                    Lees over masking
                  </CTALink>
                </Magnetic>
                <CTALink
                  to="/masking-check"
                  variant="secondary"
                  size="lg"
                  className="!border-background/20 !bg-background/10 !text-background hover:!bg-background/15"
                >
                  Doe de Masking-check
                </CTALink>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <StaggerGroup className="space-y-4">
              {maskingCards.map((card, i) => (
                <StaggerItem key={card.k}>
                  <div className={i === 1 ? "lg:ml-10" : ""}>
                    <HoverExpandCard
                      kicker={card.k}
                      title={card.title}
                      detail={card.detail}
                      className="!bg-background/[0.06] !border-background/12 backdrop-blur-sm [&_p]:!text-background/85 [&_p:first-of-type]:!text-primary"
                    />
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <Reveal delay={200}>
              <p className="mt-4 text-center text-[13px] text-background/45">
                Beweeg over een kaart om meer te zien
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04 — Tweezijdig verhaal */}
      <section className="relative bg-secondary">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-6 py-24 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-32">
          <div className="lg:col-span-5">
            <RevealImage
              src={jurgenMariska}
              alt="Jurgen en zijn vrouw Mariska samen bij zonsondergang aan zee."
              from="left"
              className="bezel-inner aspect-[4/5] rounded-2xl shadow-ambient-lg ring-1 ring-foreground/10"
            />
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <SectionKicker index="04" label="Twee kanten van neurodivergentie" />
            </Reveal>
            <h2 className="display-lg mt-6 text-[2rem] sm:text-4xl lg:text-[2.8rem]">
              <MaskReveal as="span" text="Ik ken dit van twee kanten." />
            </h2>
            <Reveal delay={160}>
              <p className="mt-8 text-[17px] leading-relaxed text-foreground/75">
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

      {/* 05 — Kanaal */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-6 py-28 lg:px-10 lg:py-36">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionKicker index="05" label="Vier kanalen, gelijkwaardig" />
              </Reveal>
              <h2 className="display-lg mt-6 text-[2rem] sm:text-4xl lg:text-[2.8rem]">
                <MaskReveal as="span" text="Jij kiest hoe we praten." />
              </h2>
              <Reveal delay={160}>
                <p className="mt-8 text-[17px] leading-relaxed text-foreground/75">
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

      {/* 06 — Traject teaser */}
      <section className="relative">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
          <div className="noise relative overflow-hidden rounded-[2rem] bg-ink p-10 text-ink-foreground sm:p-14 lg:p-20">
            <div className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-primary/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-24 h-[360px] w-[360px] rounded-full bg-primary/15 blur-3xl" />
            <div className="relative max-w-3xl">
              <Reveal>
                <SectionKicker index="06" label="Het traject" light />
              </Reveal>
              <h2 className="display-lg mt-6 text-[2.2rem] text-background sm:text-4xl lg:text-[3rem]">
                <MaskReveal as="span" text="Gewoon Anders Ondernemen." />
              </h2>
              <Reveal delay={140}>
                <p className="mt-7 text-[17px] leading-relaxed text-background/80 lg:text-[18px]">
                  In acht sessies bouw je een bedrijf dat werkt met jouw brein. We kijken
                  naar hoe je werkt, waar je energie heen gaat, welke structuur bij je
                  past, hoe je grenzen stelt naar klanten, en welke richting echt van
                  jou is. Een op een, in jouw tempo, op het kanaal dat voor jou werkt.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-10">
                  <Magnetic>
                    <CTALink
                      to="/traject"
                      variant="secondary"
                      size="lg"
                      className="!bg-background/10 !border-background/20 !text-background hover:!bg-background/15"
                    >
                      Bekijk het hele traject
                    </CTALink>
                  </Magnetic>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — Geruststelling */}
      <section className="relative">
        <div className="mx-auto max-w-[1240px] px-6 py-28 lg:px-10 lg:py-36">
          <Reveal>
            <SectionKicker index="07" label="Wat je van tevoren mag weten" />
          </Reveal>
          <h2 className="display-lg mt-6 max-w-2xl text-[2rem] sm:text-4xl lg:text-[2.6rem]">
            <MaskReveal as="span" text="Vier dingen die ik vooraf wil zeggen." />
          </h2>
          <StaggerGroup as="ul" className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reassure.map((r, i) => (
              <StaggerItem key={r.h} as="li">
                <article className="group relative h-full overflow-hidden rounded-3xl border border-foreground/8 bg-card p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-ambient-lg hover:border-primary/20">
                  <span className="section-index absolute right-7 top-7">0{i + 1}</span>
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                  <h3 className="text-lg font-semibold text-foreground">{r.h}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">
                    {r.p}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 08 — Slot */}
      <section className="relative bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-28 text-center lg:px-10">
          <h2 className="display-lg text-[2.2rem] sm:text-4xl lg:text-[3rem]">
            <MaskReveal as="span" text="Benieuwd of dit bij je past?" />
          </h2>
          <Reveal delay={100}>
            <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-foreground/75">
              Plan een gratis kennismaking van een half uur. Op het kanaal dat jij wil.
              Geen verplichtingen. Daarna beslis jij rustig of je verder wil.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-10 flex justify-center">
              <Magnetic>
                <CTALink to="/contact" variant="primary" size="lg">
                  Plan een kennismaking
                </CTALink>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
