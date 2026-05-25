import { useEffect, useRef, useState } from "react";
import {
  Check,
  Mail,
  MessageSquare,
  Phone,
  Video,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export type Channel = "video" | "bellen" | "chat" | "mail";

export type CalendlyUrls = Record<Channel, string>;

type Kanaal = {
  id: Channel;
  label: string;
  short: string;
  icon: LucideIcon;
};

const KANALEN: Kanaal[] = [
  {
    id: "video",
    label: "Videobellen",
    short: "Gesprek met beeld. Zestig minuten.",
    icon: Video,
  },
  {
    id: "bellen",
    label: "Bellen zonder beeld",
    short: "Alleen je stem. Zestig minuten.",
    icon: Phone,
  },
  {
    id: "chat",
    label: "Live chatten",
    short: "Tekstgesprek in een tijdvak van zestig minuten.",
    icon: MessageSquare,
  },
  {
    id: "mail",
    label: "Mailsessie",
    short: "Jij schrijft uit, ik reageer uitgewerkt binnen drie werkdagen.",
    icon: Mail,
  },
];

type Props = {
  /** Calendly URL per kanaal */
  urls: CalendlyUrls;
  /** Label boven stap 1, klein eyebrow */
  step1Eyebrow?: string;
  /** Heading boven kanaal-keuze */
  step1Heading?: string;
  /** Intro onder de heading */
  step1Intro?: string;
  /** Label boven stap 2 wanneer een kanaal is gekozen */
  step2Eyebrow?: string;
  /** Heading boven Calendly embed */
  step2Heading?: string;
};

export function CalendlyChannelFlow({
  urls,
  step1Eyebrow = "Stap 1",
  step1Heading = "Welk kanaal heeft jouw voorkeur?",
  step1Intro = "Allemaal gelijkwaardig. Geen voorkeur, geen verkeerd antwoord. Kies wat voor jou nu het minst kost.",
  step2Eyebrow = "Stap 2",
  step2Heading = "Kies een moment dat jou uitkomt.",
}: Props) {
  const [selected, setSelected] = useState<Channel | null>(null);
  const embedRef = useRef<HTMLDivElement | null>(null);

  const active = KANALEN.find((k) => k.id === selected) ?? null;
  const activeUrl = active ? urls[active.id] : null;

  function choose(id: Channel) {
    setSelected(id);
    window.setTimeout(() => {
      embedRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  return (
    <>
      <section className="mx-auto max-w-[1240px] px-6 pb-10 lg:px-10">
        <FadeIn>
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
            {step1Eyebrow}
          </p>
          <h2 className="display-lg mt-3 text-[1.6rem] sm:text-[1.8rem]">{step1Heading}</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-foreground/70">
            {step1Intro}
          </p>
        </FadeIn>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {KANALEN.map(({ icon: Icon, ...k }, i) => {
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
        {active && activeUrl ? (
          <FadeIn>
            <div className="mt-2">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
                {step2Eyebrow}
              </p>
              <h2 className="display-lg mt-3 text-[1.6rem] sm:text-[1.8rem]">
                {step2Heading}
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-foreground/70">
                Je hebt gekozen voor{" "}
                <strong className="font-semibold">{active.label}</strong>. Kies hieronder
                een datum en tijd. Je krijgt direct een bevestiging.
              </p>
            </div>
            <div className="mt-8 overflow-hidden rounded-3xl border border-foreground/8 bg-card">
              <CalendlyEmbed url={activeUrl} key={activeUrl} />
            </div>
            <p className="mt-4 text-[13px] text-foreground/55">
              Werkt de planner niet?{" "}
              <a
                href={activeUrl}
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
    </>
  );
}

function CalendlyEmbed({ url }: { url: string }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(false);
  }, [url]);

  const embedSrc = `${url}?hide_gdpr_banner=1&hide_landing_page_details=1&primary_color=246724`;

  return (
    <div className="relative">
      {!loaded && (
        <div className="flex h-[760px] items-center justify-center bg-card text-[14px] text-foreground/55">
          Planner wordt geladen…
        </div>
      )}
      <iframe
        title="Plan een sessie"
        src={embedSrc}
        className={loaded ? "block h-[760px] w-full" : "absolute inset-0 h-[760px] w-full opacity-0"}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
