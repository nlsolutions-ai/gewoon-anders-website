import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/downloads/")({
  head: () => ({
    meta: [
      { title: "Gratis downloads voor neurodivergente ondernemers - Gewoon Anders" },
      {
        name: "description",
        content:
          "Vier korte, bruikbare werkbladen voor ondernemers met ADHD, autisme of AuDHD. Energie, prijzen, masking en een weekoverzicht voor je brein.",
      },
      { property: "og:title", content: "Gratis downloads voor neurodivergente ondernemers" },
      { property: "og:url", content: "/downloads" },
    ],
    links: [{ rel: "canonical", href: "/downloads" }],
  }),
  component: DownloadsPage,
});

type Download = {
  slug: string;
  title: string;
  short: string;
  nut: string;
  bestFor: string;
  number: string;
  size: "wide" | "tall" | "regular";
  accent: "primary" | "highlight" | "secondary";
  /** Optional override: link to a custom route instead of /downloads/[slug] */
  to?: string;
  /** Optional override: alternative CTA label */
  ctaLabel?: string;
};

const downloads: Download[] = [
  {
    slug: "energiescan",
    title: "De Ondernemers-energiescan",
    short:
      "In tien minuten weet je waar in je bedrijf de energie weglekt en waar je kracht zit. Achttien stellingen, vijf gebieden, een rustige uitslag.",
    nut: "Direct online te doen. Geen e-mail nodig. Uitslag per gebied in gewone taal.",
    bestFor: "Wie voelt dat er iets niet klopt en wil zien waar precies.",
    number: "01",
    size: "wide",
    accent: "primary",
    to: "/energiescan",
    ctaLabel: "Doe de scan",
  },
  {
    slug: "masking-check",
    title: "De Masking-check",
    short:
      "Twaalf herkenbare situaties uit het ondernemen. Per situatie kies je hoe vaak je je hierin herkent. Aan het eind zie je waar het je het meest kost.",
    nut: "Direct online te doen. Geen e-mail nodig. Top 3 zwaarste posten in beeld.",
    bestFor: "Wie vermoedt dat veel kleine dingen samen te veel kosten.",
    number: "02",
    size: "tall",
    accent: "highlight",
    to: "/masking-check",
    ctaLabel: "Doe de check",
  },
  {
    slug: "prijzen-spiekbriefje",
    title: "Het Prijzen-spiekbriefje",
    short:
      "Vijf concrete zinnen om je prijs te noemen, te verdedigen en nee te zeggen, zonder dat je het op het moment moet bedenken.",
    nut: "Sluit een prijsgesprek af zonder dat je achteraf het gevoel hebt te laag te zijn ingestoken.",
    bestFor: "Wie prijsgesprekken zwaar vindt.",
    number: "03",
    size: "regular",
    accent: "secondary",
  },
  {
    slug: "mijn-week-mijn-brein",
    title: "Mijn week, mijn brein",
    short:
      "Een printbaar weekoverzicht waarmee je een week lang je energie, focus en overprikkeling in kaart brengt.",
    nut: "Je ziet zelf waar de pieken en dalen liggen. Daarna kun je daar iets mee.",
    bestFor: "Wie wel doorheeft dat het schuurt, maar niet weet wanneer precies.",
    number: "04",
    size: "regular",
    accent: "secondary",
  },
];

function DownloadsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gratis werkbladen"
        title="Klein en concreet. Voor deze week."
        intro="Vier korte werkbladen voor ondernemers met een ADHD-, autisme- of AuDHD-brein. Geen invuldreun, geen lange theorie. Iets waarmee je deze week aan de slag kunt. Gratis, in ruil voor je e-mailadres."
      />

      <section className="mx-auto max-w-[1240px] px-6 pb-16 lg:px-10">
        <div className="grid auto-rows-[minmax(0,1fr)] gap-5 sm:grid-cols-6 lg:gap-6">
          {downloads.map((d, i) => (
            <Reveal
              key={d.slug}
              delay={i * 80}
              className={
                d.size === "wide"
                  ? "sm:col-span-6 lg:col-span-4"
                  : d.size === "tall"
                    ? "sm:col-span-3 lg:col-span-2"
                    : "sm:col-span-3"
              }
            >
              <DownloadCard d={d} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 pb-24 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-5 lg:gap-6">
          <Reveal className="lg:col-span-3">
            <div className="flex h-full flex-col rounded-3xl bg-foreground p-8 text-background lg:p-10">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-background/60">
                Liever direct sparring
              </p>
              <h2 className="display-lg mt-3 text-[1.8rem] sm:text-[2rem]">
                Plan vrijblijvend een kennismaking.
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-background/80">
                Een werkblad is fijn om zelf na te denken. Soms helpt het meer om iemand
                mee te laten kijken. Een kennismaking duurt een half uur, op het kanaal
                dat jij kiest. Geen verkoopgesprek, geen verplichting. Je vertelt waar
                je tegenaan loopt, ik vertel hoe ik werk, en jij beslist daarna zelf wat
                je wil.
              </p>
              <div className="mt-auto pt-7">
                <Link
                  to="/contact"
                  className="magnet group inline-flex items-center gap-3 rounded-full bg-background pl-6 pr-2 py-2 text-[15px] font-medium text-foreground"
                >
                  <span>Plan een kennismaking</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground/8 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[1px]">
                    <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden />
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={80}>
            <div className="flex h-full flex-col rounded-3xl border border-foreground/8 bg-highlight p-8 lg:p-10">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
                Over je e-mailadres
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-foreground/80">
                Je krijgt het werkblad in je inbox. Daarna hooguit een paar mails over hoe
                ik werk. Niet meer. Uitschrijven met één klik. Ik verkoop niets door.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function DownloadCard({ d }: { d: Download }) {
  const bgClass =
    d.accent === "primary"
      ? "bg-foreground text-background"
      : d.accent === "highlight"
        ? "bg-highlight"
        : "bg-card";
  const eyebrowClass = d.accent === "primary" ? "text-background/60" : "text-primary";
  const textClass = d.accent === "primary" ? "text-background/80" : "text-foreground/75";
  const dividerClass = d.accent === "primary" ? "border-background/15" : "border-foreground/10";
  const mutedTextClass = d.accent === "primary" ? "text-background/60" : "text-foreground/60";
  const iconBg = d.accent === "primary" ? "bg-background/10" : "bg-foreground/5";

  const linkProps = d.to
    ? { to: d.to }
    : { to: "/downloads/$slug" as const, params: { slug: d.slug } };

  return (
    <Link
      {...(linkProps as any)}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-foreground/8 p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-ambient-lg ${bgClass}`}
    >
      {d.accent === "primary" && (
        <>
          <div className="pointer-events-none absolute -top-24 -right-24 h-[280px] w-[280px] rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-12 h-[260px] w-[260px] rounded-full bg-primary/20 blur-3xl" />
        </>
      )}
      <div className="relative flex items-start justify-between">
        <span className={`text-[12px] font-semibold uppercase tracking-[0.18em] ${eyebrowClass}`}>
          {d.to ? `Scan ${d.number}` : `Werkblad ${d.number}`}
        </span>
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full ${iconBg} transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[1px]`}
        >
          <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden />
        </span>
      </div>
      <h2
        className={`display-lg relative mt-6 text-2xl sm:text-[26px] lg:text-[28px] ${
          d.accent === "primary" ? "text-background" : "text-foreground"
        }`}
      >
        {d.title}
      </h2>
      <p className={`relative mt-4 text-[15px] leading-relaxed ${textClass}`}>{d.short}</p>
      <div className={`relative mt-auto space-y-3 border-t pt-5 text-[13px] leading-relaxed ${dividerClass}`}>
        <div>
          <p className={`font-semibold ${d.accent === "primary" ? "text-background/85" : "text-foreground/80"}`}>
            Wat het je geeft
          </p>
          <p className={`mt-1 ${mutedTextClass}`}>{d.nut}</p>
        </div>
        <div>
          <p className={`font-semibold ${d.accent === "primary" ? "text-background/85" : "text-foreground/80"}`}>
            Voor wie
          </p>
          <p className={`mt-1 ${mutedTextClass}`}>{d.bestFor}</p>
        </div>
        {d.ctaLabel && (
          <p
            className={`pt-1 text-[13px] font-semibold ${
              d.accent === "primary" ? "text-background" : "text-primary"
            }`}
          >
            {d.ctaLabel} →
          </p>
        )}
      </div>
    </Link>
  );
}
