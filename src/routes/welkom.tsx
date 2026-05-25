import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import mockupVolledig from "@/assets/mockup-volledig.png";
import { FadeIn } from "@/components/FadeIn";
import { Reveal } from "@/components/Reveal";
import { CalendlyChannelFlow, type CalendlyUrls } from "@/components/CalendlyChannelFlow";

export const Route = createFileRoute("/welkom")({
  head: () => ({
    meta: [
      { title: "Welkom bij Gewoon Anders Ondernemen" },
      {
        name: "description",
        content:
          "Bedankt voor je aankoop van Gewoon Anders Ondernemen. Plan hier je eerste sessie en lees wat er nu gaat gebeuren.",
      },
      { name: "robots", content: "noindex,nofollow" },
      { property: "og:title", content: "Welkom bij Gewoon Anders Ondernemen" },
      { property: "og:url", content: "/welkom" },
    ],
    links: [{ rel: "canonical", href: "/welkom" }],
  }),
  component: WelkomPage,
});

const sessieUrls: CalendlyUrls = {
  video: "https://calendly.com/northernlights-info/gewoon-anders-videocall",
  bellen: "https://calendly.com/northernlights-info/gewoon-anders-telefonisch",
  chat: "https://calendly.com/northernlights-info/gewoon-anders-chat",
  mail: "https://calendly.com/northernlights-info/gewoon-anders-email",
};

const watNu = [
  {
    h: "Een bevestigingsmail",
    p: "Je ontvangt zo een mail van Plug&Pay met je factuur en betaalbewijs. Check eventueel je spam-map als 'm niet binnen tien minuten verschijnt.",
  },
  {
    h: "Je eerste sessie",
    p: "Hieronder kun je sessie één meteen inplannen. Dat is een rustig kennismakingsgesprek waarin we kijken hoe jouw brein nu staat en wat de komende sessies gaan dragen.",
  },
  {
    h: "Een korte voorbereiding per mail",
    p: "Uiterlijk drie dagen voor je eerste sessie krijg je van mij een korte voorbereiding. Geen huiswerk, wel een paar dingen om alvast over na te denken als je dat wil.",
  },
];

function WelkomPage() {
  return (
    <>
      {/* Hero — editorial split met mockup */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -right-32 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-40 -left-24 h-[320px] w-[320px] rounded-full bg-highlight/40 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-[1240px] gap-10 px-6 pb-16 pt-12 lg:grid-cols-12 lg:gap-14 lg:px-10 lg:pb-24 lg:pt-20">
          <div className="lg:col-span-7 lg:pr-4">
            <Reveal>
              <span className="eyebrow">Welkom · je bent ingestapt</span>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="display-xl mt-6 text-[2.2rem] sm:text-[2.8rem] lg:text-[3.6rem]">
                Mooi dat je<br />
                <span className="text-primary">er bent.</span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-foreground/75 lg:text-[18px]">
                Je hebt zojuist Gewoon Anders Ondernemen geboekt. Hieronder lees
                je rustig wat er nu gaat gebeuren, en kun je direct je eerste
                sessie inplannen op het kanaal dat voor jou werkt.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal variant="right" delay={120}>
              <img
                src={mockupVolledig}
                alt="Gewoon Anders Ondernemen: acht sessies, werkboek en routekaart"
                className="mx-auto w-full max-w-md lg:max-w-none"
                loading="eager"
                width={1400}
                height={933}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bevestigingscard */}
      <section className="mx-auto max-w-3xl px-6 pb-4 lg:px-10">
        <FadeIn>
          <div className="rounded-2xl border border-primary/15 bg-highlight p-6 lg:p-7">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check size={16} strokeWidth={2.2} aria-hidden />
              </span>
              <div>
                <p className="text-[16px] font-semibold text-foreground">
                  Je aankoop is gelukt.
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-foreground/75">
                  Je traject van acht sessies staat klaar. Geen haast — plan je
                  eerste sessie wanneer dat past, deze week of volgende.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Wat er nu gebeurt */}
      <section className="mx-auto max-w-3xl px-6 py-14 lg:px-10 lg:py-16">
        <FadeIn>
          <span className="eyebrow">Wat er nu gebeurt</span>
          <h2 className="display-lg mt-5 text-3xl sm:text-[2rem]">
            Drie dingen, op je eigen tempo.
          </h2>
        </FadeIn>
        <ol className="mt-10 space-y-5">
          {watNu.map((item, i) => (
            <FadeIn key={item.h} as="li" delay={i * 70}>
              <article className="flex gap-5 rounded-2xl border border-foreground/8 bg-card p-6 lg:p-7">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[14px] font-semibold text-primary tabular-nums">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-[17px] font-semibold text-foreground">
                    {item.h}
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-foreground/75">
                    {item.p}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </ol>
      </section>

      {/* Eerste sessie inplannen */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10 lg:py-20">
          <FadeIn>
            <span className="eyebrow">Sessie 1 · Kennismaking en je brein</span>
            <h2 className="display-lg mt-5 text-3xl sm:text-[2rem]">
              Plan je eerste sessie in.
            </h2>
            <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-foreground/75">
              Een rustig gesprek van zestig minuten. We maken kennis op het
              kanaal dat jij kiest en brengen in kaart hoe jouw brein werkt in
              je werk. Je hoeft niets voor te bereiden.
            </p>
          </FadeIn>

          <div className="mt-10">
            <CalendlyChannelFlow
              urls={sessieUrls}
              step1Eyebrow="Stap 1"
              step1Heading="Welk kanaal werkt voor jou?"
              step1Intro="Je mag elke sessie wisselen, geen vorm is een mindere keuze. Kies wat nu past."
              step2Heading="Kies een moment dat jou uitkomt."
            />
          </div>
        </div>
      </section>

      {/* Iets vragen */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center lg:px-10 lg:py-20">
        <FadeIn>
          <h2 className="text-2xl font-semibold text-foreground sm:text-[1.8rem]">
            Loop je ergens tegenaan voor de eerste sessie?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-foreground/75">
            Een mail volstaat. Ik reageer binnen een paar werkdagen. Voor
            dringende vragen mag je ook WhatsApp gebruiken.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hallo@gewoonanders.nu"
              className="inline-flex items-center justify-center break-all rounded-xl bg-primary px-6 py-3.5 text-center text-base font-medium text-primary-foreground hover:bg-primary/90"
            >
              Mail hallo@gewoonanders.nu
            </a>
            <a
              href="https://wa.me/31639479021"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-foreground/15 bg-background px-6 py-3.5 text-base font-medium text-foreground hover:bg-secondary"
            >
              WhatsApp
            </a>
          </div>
          <p className="mt-10 text-[14px] text-foreground/55">
            Liever eerst nog wat lezen?{" "}
            <Link
              to="/traject"
              className="text-primary underline-offset-2 hover:underline"
            >
              Bekijk hoe het traject is opgebouwd
            </Link>
            .
          </p>
        </FadeIn>
      </section>
    </>
  );
}
