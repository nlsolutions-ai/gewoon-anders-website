import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { CalendlyChannelFlow, type CalendlyUrls } from "@/components/CalendlyChannelFlow";

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

const intakeUrls: CalendlyUrls = {
  video: "https://calendly.com/northernlights-info/gewoon-anders-videocall-intake",
  bellen: "https://calendly.com/northernlights-info/gewoon-anders-telefonisch-intake",
  chat: "https://calendly.com/northernlights-info/gewoon-anders-chat-intake",
  mail: "https://calendly.com/northernlights-info/gewoon-anders-e-mail-intake",
};

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gratis kennismaking · 30 minuten"
        title="Plan een rustig kennismakingsgesprek."
        intro="Een kennismaking is een half uur, op het kanaal dat jij wil. Geen verkoopgesprek, geen verplichting. We kijken samen rustig of het klikt. Daarna beslis jij of je verder wil."
      />

      <CalendlyChannelFlow urls={intakeUrls} />

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
