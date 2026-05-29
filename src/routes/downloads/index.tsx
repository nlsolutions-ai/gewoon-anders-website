import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { SectionKicker } from "@/components/SectionKicker";
import { CTALink, CTAAnchor } from "@/components/CTAButton";
import { MaskReveal, Magnetic, RevealImage } from "@/components/motion";

export const Route = createFileRoute("/downloads/")({
  head: () => ({
    meta: [
      { title: "Gratis downloads voor neurodivergente ondernemers - Gewoon Anders" },
      {
        name: "description",
        content:
          "Twee gratis scans en twee werkbladen voor ondernemers met ADHD, autisme of AuDHD. Energie, masking, prijzen en een weekoverzicht voor je brein.",
      },
      { property: "og:title", content: "Gratis downloads voor neurodivergente ondernemers" },
      { property: "og:url", content: "/downloads" },
    ],
    links: [{ rel: "canonical", href: "/downloads" }],
  }),
  component: DownloadsPage,
});

/* ---------- Scan preview (styled device card, not a screenshot) ---------- */

type ScanPreview = {
  meterLabel: string;
  pillar: string;
  progress: number; // 0–100
  question: string;
  options: string[];
  active: number;
};

function ScanCard({ preview, tone }: { preview: ScanPreview; tone: "primary" | "highlight" }) {
  return (
    <div className="relative">
      <div
        className={`pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] blur-2xl ${
          tone === "primary" ? "bg-primary/10" : "bg-highlight/50"
        }`}
      />
      <div className="overflow-hidden rounded-[1.6rem] border border-foreground/10 bg-card shadow-ambient-lg">
        {/* faux browser bar */}
        <div className="flex items-center gap-1.5 border-b border-foreground/8 bg-foreground/[0.02] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="ml-3 h-4 flex-1 rounded-full bg-foreground/[0.04]" />
        </div>
        <div className="px-6 py-7 sm:px-8 sm:py-8">
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.14em] text-foreground/50">
            <span>{preview.meterLabel}</span>
            <span>{preview.pillar}</span>
          </div>
          <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-foreground/8">
            <div className="h-full rounded-full bg-primary" style={{ width: `${preview.progress}%` }} />
          </div>
          <p className="display-lg mt-6 text-[1.5rem] leading-tight sm:text-[1.7rem]">
            {preview.question}
          </p>
          <ul className="mt-6 space-y-2.5">
            {preview.options.map((opt, i) => {
              const active = i === preview.active;
              return (
                <li
                  key={opt}
                  className={`flex items-center justify-between rounded-2xl border px-5 py-3.5 text-[15px] ${
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-foreground/10 bg-card text-foreground"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-md font-mono text-[11px] ${
                        active
                          ? "bg-primary-foreground/15 text-primary-foreground"
                          : "border border-foreground/10 bg-foreground/5 text-foreground/55"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="font-medium">{opt}</span>
                  </span>
                  {active && <Check size={18} strokeWidth={2.2} aria-hidden />}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ---------- Data ---------- */

type Scan = {
  title: string;
  short: string;
  nut: string;
  bestFor: string;
  to: string;
  cta: string;
  tone: "primary" | "highlight";
  preview: ScanPreview;
};

const scans: Scan[] = [
  {
    title: "De Ondernemers-energiescan",
    short:
      "In tien minuten weet je waar in je bedrijf de energie weglekt en waar je kracht zit. Achttien stellingen, vijf gebieden, een rustige uitslag.",
    nut: "Direct online te doen. Geen e-mail nodig. Uitslag per gebied in gewone taal.",
    bestFor: "Wie voelt dat er iets niet klopt en wil zien waar precies.",
    to: "/energiescan",
    cta: "Doe de scan",
    tone: "primary",
    preview: {
      meterLabel: "Stelling 3 van 18",
      pillar: "Energie",
      progress: 28,
      question: "Ik weet wat ik moet doen, maar beginnen lukt vaak niet.",
      options: ["Klopt niet", "Klopt soms", "Klopt vaak", "Klopt helemaal"],
      active: 2,
    },
  },
  {
    title: "De Masking-check",
    short:
      "Twaalf herkenbare situaties uit het ondernemen. Per situatie kies je hoe vaak je je hierin herkent. Aan het eind zie je waar het je het meest kost.",
    nut: "Direct online te doen. Geen e-mail nodig. Top 3 zwaarste posten in beeld.",
    bestFor: "Wie vermoedt dat veel kleine dingen samen te veel kosten.",
    to: "/masking-check",
    cta: "Doe de check",
    tone: "highlight",
    preview: {
      meterLabel: "Situatie 5 van 12",
      pillar: "Klantgesprek",
      progress: 42,
      question: "Ik pas mijn toon aan zodat het gesprek soepel loopt.",
      options: ["Nooit", "Soms", "Vaak", "Bijna altijd"],
      active: 2,
    },
  },
];

type Sheet = {
  slug: string;
  title: string;
  short: string;
  nut: string;
  bestFor: string;
  image: string;
};

const sheets: Sheet[] = [
  {
    slug: "prijzen-spiekbriefje",
    title: "Het Prijzen-spiekbriefje",
    short:
      "Vijf concrete zinnen om je prijs te noemen, te verdedigen en nee te zeggen, zonder dat je het op het moment moet bedenken.",
    nut: "Sluit een prijsgesprek af zonder dat je achteraf het gevoel hebt te laag te zijn ingestoken.",
    bestFor: "Wie prijsgesprekken zwaar vindt.",
    image: "/previews/prijzen-spiekbriefje.png",
  },
  {
    slug: "mijn-week-mijn-brein",
    title: "Mijn week, mijn brein",
    short:
      "Een printbaar weekoverzicht waarmee je een week lang je energie, focus en overprikkeling in kaart brengt.",
    nut: "Je ziet zelf waar de pieken en dalen liggen. Daarna kun je daar iets mee.",
    bestFor: "Wie wel doorheeft dat het schuurt, maar niet weet wanneer precies.",
    image: "/previews/mijn-week-mijn-brein.png",
  },
];

/* ---------- Shared detail rows ---------- */

function MetaRows({ nut, bestFor }: { nut: string; bestFor: string }) {
  return (
    <dl className="mt-6 space-y-3 border-t border-foreground/10 pt-5 text-[14px] leading-relaxed">
      <div>
        <dt className="font-semibold text-foreground/80">Wat het je geeft</dt>
        <dd className="mt-1 text-foreground/65">{nut}</dd>
      </div>
      <div>
        <dt className="font-semibold text-foreground/80">Voor wie</dt>
        <dd className="mt-1 text-foreground/65">{bestFor}</dd>
      </div>
    </dl>
  );
}

function DownloadsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gratis"
        title="Klein en concreet. Voor deze week."
        intro="Twee scans die je meteen online doet en twee werkbladen om te downloaden. Geen invuldreun, geen lange theorie. Iets waarmee je deze week aan de slag kunt."
      />

      {/* Scans */}
      <section className="mx-auto max-w-[1240px] px-6 pb-8 lg:px-10">
        <Reveal>
          <SectionKicker index="01" label="Doe een scan · direct online" />
        </Reveal>
        <MaskReveal
          as="h2"
          text="In een paar minuten zie je waar het zit."
          className="display-lg mt-5 max-w-2xl text-[1.9rem] text-foreground sm:text-[2.3rem]"
        />

        <div className="mt-14 space-y-20 lg:space-y-28">
          {scans.map((s, i) => (
            <div
              key={s.to}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <Reveal
                variant={i % 2 === 0 ? "left" : "right"}
                className={i % 2 === 0 ? "" : "lg:order-2"}
              >
                <ScanCard preview={s.preview} tone={s.tone} />
              </Reveal>
              <div className={i % 2 === 0 ? "" : "lg:order-1"}>
                <Reveal>
                  <span className="eyebrow">Gratis scan</span>
                </Reveal>
                <MaskReveal
                  as="h3"
                  text={s.title}
                  className="display-lg mt-4 text-[1.7rem] text-foreground sm:text-[2rem]"
                />
                <Reveal delay={120}>
                  <p className="mt-4 text-[17px] leading-relaxed text-foreground/75">{s.short}</p>
                </Reveal>
                <Reveal delay={180}>
                  <MetaRows nut={s.nut} bestFor={s.bestFor} />
                </Reveal>
                <Reveal delay={240}>
                  <div className="mt-7">
                    <Magnetic>
                      <CTALink to={s.to} variant="primary" size="lg">
                        {s.cta}
                      </CTALink>
                    </Magnetic>
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Werkbladen */}
      <section className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <SectionKicker index="02" label="Download een werkblad · pdf" />
        </Reveal>
        <MaskReveal
          as="h2"
          text="Iets op papier om mee te werken."
          className="display-lg mt-5 max-w-2xl text-[1.9rem] text-foreground sm:text-[2.3rem]"
        />

        <div className="mt-14 space-y-20 lg:space-y-28">
          {sheets.map((s, i) => (
            <div key={s.slug} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={i % 2 === 0 ? "" : "lg:order-2"}>
                <div className="relative mx-auto max-w-sm">
                  <div className="pointer-events-none absolute -inset-5 -z-10 rounded-[2rem] bg-highlight/40 blur-2xl" />
                  <RevealImage
                    src={s.image}
                    alt={`Voorpagina van ${s.title}`}
                    from={i % 2 === 0 ? "left" : "right"}
                    className="rotate-[-1.4deg] rounded-2xl shadow-ambient-lg ring-1 ring-foreground/10"
                  />
                </div>
              </div>
              <div className={i % 2 === 0 ? "" : "lg:order-1"}>
                <Reveal>
                  <span className="eyebrow">Gratis werkblad</span>
                </Reveal>
                <MaskReveal
                  as="h3"
                  text={s.title}
                  className="display-lg mt-4 text-[1.7rem] text-foreground sm:text-[2rem]"
                />
                <Reveal delay={120}>
                  <p className="mt-4 text-[17px] leading-relaxed text-foreground/75">{s.short}</p>
                </Reveal>
                <Reveal delay={180}>
                  <MetaRows nut={s.nut} bestFor={s.bestFor} />
                </Reveal>
                <Reveal delay={240}>
                  <div className="mt-7">
                    <Magnetic>
                      <CTALink
                        to="/downloads/$slug"
                        params={{ slug: s.slug } as never}
                        variant="primary"
                        size="lg"
                      >
                        Bekijk en download
                      </CTALink>
                    </Magnetic>
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Slot — ink CTA */}
      <section className="noise relative overflow-hidden bg-ink text-ink-foreground">
        <div className="pointer-events-none absolute -top-24 -right-24 h-[320px] w-[320px] rounded-full bg-primary/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-[280px] w-[280px] rounded-full bg-primary/15 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center lg:px-10">
          <Reveal>
            <span className="eyebrow !text-background/90">Liever direct sparren</span>
          </Reveal>
          <MaskReveal
            as="h2"
            text="Plan vrijblijvend een kennismaking."
            className="display-lg mt-5 text-[2rem] text-background sm:text-[2.5rem]"
          />
          <Reveal delay={140}>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-background/80">
              Een werkblad is fijn om zelf na te denken. Soms helpt het meer om iemand
              mee te laten kijken. Een kennismaking duurt een half uur, op het kanaal dat
              jij kiest. Geen verkoopgesprek, geen verplichting.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-9 flex justify-center">
              <Magnetic>
                <CTALink to="/contact" variant="primary" size="lg">
                  Plan een kennismaking
                </CTALink>
              </Magnetic>
            </div>
          </Reveal>
          <Reveal delay={280}>
            <p className="mx-auto mt-8 max-w-md text-[13px] leading-relaxed text-background/55">
              Werkbladen krijg je in je inbox. Daarna hooguit een paar mails over hoe ik
              werk. Uitschrijven met één klik. Ik verkoop niets door.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
