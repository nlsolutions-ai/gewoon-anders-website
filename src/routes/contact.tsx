import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Mail,
  MessageSquare,
  Phone,
  Video,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Plan een gratis kennismaking - Gewoon Anders" },
      {
        name: "description",
        content:
          "Plan een gratis kennismaking van dertig minuten op het kanaal dat jij kiest: videobellen, bellen zonder beeld, chatten of mailen. Geen verplichtingen.",
      },
      { property: "og:title", content: "Contact - Gewoon Anders" },
      { property: "og:description", content: "Plan een gratis kennismaking." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

type Kanaal = {
  id: "video" | "bellen" | "chat" | "mail";
  label: string;
  short: string;
  icon: LucideIcon;
  url: string;
};

const kanalen: Kanaal[] = [
  {
    id: "video",
    label: "Videobellen",
    short: "Gesprek met beeld. Zestig minuten.",
    icon: Video,
    url: "https://calendly.com/northernlights-info/gewoon-anders-videocall",
  },
  {
    id: "bellen",
    label: "Bellen zonder beeld",
    short: "Alleen je stem. Zestig minuten.",
    icon: Phone,
    url: "https://calendly.com/northernlights-info/gewoon-anders-telefonisch",
  },
  {
    id: "chat",
    label: "Live chatten",
    short: "Tekstgesprek in een tijdvak van zestig minuten.",
    icon: MessageSquare,
    url: "https://calendly.com/northernlights-info/gewoon-anders-chat",
  },
  {
    id: "mail",
    label: "Mailsessie",
    short: "Jij schrijft uit, ik reageer uitgewerkt binnen drie werkdagen.",
    icon: Mail,
    url: "https://calendly.com/northernlights-info/gewoon-anders-email",
  },
];

function ContactPage() {
  const [selected, setSelected] = useState<Kanaal["id"] | null>(null);
  const embedRef = useRef<HTMLDivElement | null>(null);

  const active = kanalen.find((k) => k.id === selected) ?? null;

  function choose(id: Kanaal["id"]) {
    setSelected(id);
    window.setTimeout(() => {
      embedRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  return (
    <>
      <PageHeader
        eyebrow="Gratis kennismaking · 30 minuten"
        title="Plan een rustig kennismakingsgesprek."
        intro="Een kennismaking is een half uur, op het kanaal dat jij wil. Geen verkoopgesprek, geen verplichting. We kijken samen rustig of het klikt. Daarna beslis jij of je verder wil."
      />

      <section className="mx-auto max-w-[1240px] px-6 pb-10 lg:px-10">
        <FadeIn>
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
            Stap 1
          </p>
          <h2 className="display-lg mt-3 text-[1.6rem] sm:text-[1.8rem]">
            Welk kanaal heeft jouw voorkeur?
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-foreground/70">
            Allemaal gelijkwaardig. Geen voorkeur, geen verkeerd antwoord. Kies wat voor
            jou nu het minst kost.
          </p>
        </FadeIn>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {kanalen.map(({ icon: Icon, ...k }, i) => {
            const isActive = selected === k.id;
            return (
              <FadeIn key={k.id} as="li" delay={i * 60}>
                <button
                  type="button"
                  onClick={() => choose(k.id)}
                  aria-pressed={isActive}
                  className={`group relative flex w-full items-start gap-5 overflow-hidden rounded-3xl border p-6 text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-ambient ${
                    isActive
                      ? "border-primary bg-primary/[0.04] shadow-ambient"
                      : "border-foreground/8 bg-card"
                  }`}
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-[4deg] ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon size={22} strokeWidth={1.6} aria-hidden />
                  </span>
                  <span className="flex-1">
                    <span className="flex items-center gap-2">
                      <span className="text-[18px] font-semibold text-foreground">
                        {k.label}
                      </span>
                      {isActive && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                          <Check size={11} strokeWidth={2.4} aria-hidden />
                          Gekozen
                        </span>
                      )}
                    </span>
                    <span className="mt-1 block text-[14px] leading-relaxed text-foreground/70">
                      {k.short}
                    </span>
                  </span>
                </button>
              </FadeIn>
            );
          })}
        </ul>
      </section>

      <section
        ref={embedRef}
        className="mx-auto max-w-[1240px] scroll-mt-28 px-6 pb-16 lg:px-10"
      >
        {active ? (
          <FadeIn>
            <div className="mt-2">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
                Stap 2
              </p>
              <h2 className="display-lg mt-3 text-[1.6rem] sm:text-[1.8rem]">
                Kies een moment dat jou uitkomt.
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-foreground/70">
                Je hebt gekozen voor <strong className="font-semibold">{active.label}</strong>.
                Kies hieronder een datum en tijd. Je krijgt direct een bevestiging.
              </p>
            </div>
            <div className="mt-8 overflow-hidden rounded-3xl border border-foreground/8 bg-card">
              <CalendlyEmbed url={active.url} key={active.id} />
            </div>
            <p className="mt-4 text-[13px] text-foreground/55">
              Werkt de planner niet?{" "}
              <a
                href={active.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary link-underline"
              >
                Open 'm in een nieuw tabblad
              </a>
              .
            </p>
          </FadeIn>
        ) : (
          <FadeIn>
            <div className="mt-2 rounded-3xl border border-dashed border-foreground/15 bg-card/40 p-8 text-center">
              <p className="text-[15px] text-foreground/60">
                Kies hierboven een kanaal. De planner verschijnt dan hier.
              </p>
            </div>
          </FadeIn>
        )}
      </section>

      <section className="mx-auto max-w-[1240px] px-6 pb-24 lg:px-10">
        <FadeIn>
          <div className="rounded-3xl border border-foreground/8 bg-highlight p-7 lg:p-9">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
              Liever direct contact zonder planner
            </p>
            <h2 className="display-lg mt-3 text-[1.4rem] sm:text-[1.6rem]">
              Stuur een mail of WhatsApp.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-foreground/75">
              Ik reageer binnen twee werkdagen, op vaste momenten. Geen 24/7
              beschikbaarheid.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href="mailto:hallo@gewoonanders.nu"
                className="magnet group flex items-center gap-4 rounded-2xl border border-foreground/8 bg-card p-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-ambient"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-foreground/5 text-foreground/70 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground/55">
                    E-mail
                  </span>
                  <span className="mt-0.5 block truncate text-[15px] font-medium text-foreground">
                    hallo@gewoonanders.nu
                  </span>
                </span>
              </a>

              <a
                href="https://wa.me/31639479021"
                target="_blank"
                rel="noopener noreferrer"
                className="magnet group flex items-center gap-4 rounded-2xl border border-foreground/8 bg-card p-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-ambient"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 transition-colors group-hover:bg-[#25D366]/15">
                  <WhatsAppIcon size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground/55">
                    WhatsApp Business
                  </span>
                  <span className="mt-0.5 block truncate text-[15px] font-medium text-foreground">
                    +31 6 39 47 90 21
                  </span>
                </span>
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 rounded-2xl border border-border bg-card/60 p-6 text-[14px] leading-relaxed text-foreground/70">
            <p className="font-semibold text-foreground">Bedrijfsgegevens</p>
            <p className="mt-2">Ondernemingsnummer: 1037.471.022</p>
            <p>Btw-nummer: BE1037471022</p>
            <p>Gevestigd in België</p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

/**
 * Calendly inline embed via iframe.
 * Keyed on URL in the parent so React unmounts/remounts when the channel changes.
 */
function CalendlyEmbed({ url }: { url: string }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(false);
  }, [url]);

  // hide_landing_page_details hides the host/title block to keep the embed tighter
  const embedSrc = `${url}?hide_gdpr_banner=1&hide_landing_page_details=1&primary_color=246724`;

  return (
    <div className="relative">
      {!loaded && (
        <div className="flex h-[760px] items-center justify-center bg-card text-[14px] text-foreground/55">
          Planner wordt geladen…
        </div>
      )}
      <iframe
        title="Plan een kennismaking"
        src={embedSrc}
        className={loaded ? "block h-[760px] w-full" : "absolute inset-0 h-[760px] w-full opacity-0"}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
