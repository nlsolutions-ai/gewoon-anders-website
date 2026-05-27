import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";

import appCss from "../styles.css?url";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollProgress } from "@/components/ScrollProgress";

function NotFoundComponent() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-background">
      <div className="pointer-events-none absolute -top-32 right-[-15%] h-[420px] w-[420px] rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-[-15%] h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-highlight/40 blur-3xl" />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-2xl flex-col justify-center px-6 py-16 lg:px-10">
        <span className="text-[12px] font-mono uppercase tracking-[0.18em] text-foreground/55">
          404
        </span>
        <h1 className="display-xl mt-4 text-[2.4rem] sm:text-[3rem] lg:text-[3.4rem]">
          Hier staat niets.<br />
          Niet erg.
        </h1>
        <p className="mt-6 text-[17px] leading-relaxed text-foreground/75">
          Misschien is de link verouderd, of heb ik 'm verplaatst. Hieronder een paar
          plekken waar wel iets te vinden is.
        </p>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          <li>
            <Link
              to="/"
              className="group flex h-full flex-col rounded-2xl border border-foreground/8 bg-card p-5 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-ambient"
            >
              <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-primary">
                Begin hier
              </span>
              <span className="mt-1 text-[16px] font-semibold text-foreground">
                Naar de homepage
              </span>
              <span className="mt-1 text-[14px] leading-relaxed text-foreground/65">
                Wat ik doe en voor wie.
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/themas/masking"
              className="group flex h-full flex-col rounded-2xl border border-foreground/8 bg-card p-5 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-ambient"
            >
              <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-primary">
                Thema
              </span>
              <span className="mt-1 text-[16px] font-semibold text-foreground">
                Masking in het ondernemen
              </span>
              <span className="mt-1 text-[14px] leading-relaxed text-foreground/65">
                Het stuk dat vaak onbenoemd blijft.
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/energiescan"
              className="group flex h-full flex-col rounded-2xl border border-foreground/8 bg-card p-5 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-ambient"
            >
              <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-primary">
                Gratis
              </span>
              <span className="mt-1 text-[16px] font-semibold text-foreground">
                Energiescan
              </span>
              <span className="mt-1 text-[14px] leading-relaxed text-foreground/65">
                In tien minuten zie je waar je energie weglekt.
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="group flex h-full flex-col rounded-2xl border border-foreground/8 bg-card p-5 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-ambient"
            >
              <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-primary">
                Kennismaking
              </span>
              <span className="mt-1 text-[16px] font-semibold text-foreground">
                Plan vrijblijvend een gesprek
              </span>
              <span className="mt-1 text-[14px] leading-relaxed text-foreground/65">
                Een half uur, op het kanaal dat jij wil.
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display-lg text-2xl text-foreground sm:text-3xl">
          Deze pagina laadt niet.
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">
          Er ging iets mis. Probeer te verversen, of ga terug naar de homepage.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Opnieuw proberen
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Naar homepage
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_URL = "https://gewoonanders.nu";
const OG_IMAGE = `${SITE_URL}/og.png`;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Gewoon Anders - Business coaching voor neurodivergente ondernemers" },
      {
        name: "description",
        content:
          "Rustige 1-op-1 business coaching voor ondernemers met een ADHD-, autisme- of AuDHD-brein. Jij kiest per sessie het kanaal: bellen, video, chatten of mailen.",
      },
      { name: "author", content: "Gewoon Anders" },
      { name: "theme-color", content: "#246724" },
      // Open Graph
      { property: "og:title", content: "Gewoon Anders" },
      {
        property: "og:description",
        content:
          "Business coaching voor ondernemers met een ADHD-, autisme- of AuDHD-brein.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Gewoon Anders" },
      { property: "og:locale", content: "nl_NL" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Gewoon Anders — Onderneem met je brein, niet ertegen" },
      // Twitter / X
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Gewoon Anders" },
      {
        name: "twitter:description",
        content:
          "Business coaching voor ondernemers met een ADHD-, autisme- of AuDHD-brein.",
      },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      // Favicons
      { rel: "icon", href: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { rel: "icon", href: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": `${SITE_URL}/#organization`,
          name: "Gewoon Anders",
          alternateName: "Gewoon Anders Business Coaching",
          description:
            "Business coaching voor ondernemers met een ADHD-, autisme- of AuDHD-brein. Een op een, op het kanaal waarop jij het meest jezelf bent.",
          url: SITE_URL,
          logo: `${SITE_URL}/logo.png`,
          image: OG_IMAGE,
          email: "hallo@gewoonanders.nu",
          telephone: "+31-6-39479021",
          areaServed: ["NL", "BE"],
          inLanguage: "nl",
          parentOrganization: {
            "@type": "Organization",
            name: "NorthernLights Solutions",
            taxID: "BE1037471022",
            vatID: "BE1037471022",
            identifier: "1037.471.022",
            address: { "@type": "PostalAddress", addressCountry: "BE" },
          },
          knowsAbout: [
            "ADHD bij ondernemers",
            "Autisme bij ondernemers",
            "AuDHD",
            "Masking",
            "Overprikkeling",
            "Executive functies",
            "Demand avoidance",
            "Burn-out preventie",
            "Neurodivergent ondernemerschap",
          ],
          founder: {
            "@type": "Person",
            "@id": `${SITE_URL}/#founder`,
            name: "Jurgen",
            jobTitle: "Business coach voor neurodivergente ondernemers",
            knowsAbout: [
              "Neurodivergent ondernemerschap",
              "ADHD",
              "Autisme",
              "AuDHD",
              "Masking",
            ],
          },
          sameAs: ["https://instagram.com/gewoonanders.nu"],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Trajecten en sessies",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Gewoon Anders Ondernemen",
                  description:
                    "Het volledige 1-op-1 coachingtraject. Acht sessies van zestig minuten, verspreid over circa vier maanden. Vrije kanaalkeuze per sessie.",
                  serviceType: "Business coaching",
                  provider: { "@id": `${SITE_URL}/#organization` },
                },
                price: "1450",
                priceCurrency: "EUR",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  price: "1450",
                  priceCurrency: "EUR",
                  valueAddedTaxIncluded: true,
                },
                url: `${SITE_URL}/traject`,
                availability: "https://schema.org/InStock",
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Gewoon Anders Ondernemen Kort",
                  description:
                    "Verkort 1-op-1 coachingtraject van vier sessies, voor een afgebakende vraag.",
                  serviceType: "Business coaching",
                  provider: { "@id": `${SITE_URL}/#organization` },
                },
                price: "795",
                priceCurrency: "EUR",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  price: "795",
                  priceCurrency: "EUR",
                  valueAddedTaxIncluded: true,
                },
                url: `${SITE_URL}/traject`,
                availability: "https://schema.org/InStock",
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Losse vervolgsessie",
                  description: "Eén sessie na afronding van het traject, op het kanaal dat past.",
                  serviceType: "Business coaching",
                  provider: { "@id": `${SITE_URL}/#organization` },
                },
                price: "175",
                priceCurrency: "EUR",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  price: "175",
                  priceCurrency: "EUR",
                  valueAddedTaxIncluded: true,
                },
                url: `${SITE_URL}/traject`,
                availability: "https://schema.org/InStock",
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Gratis kennismaking",
                  description:
                    "Vrijblijvend gesprek van dertig minuten op het kanaal dat jij kiest.",
                  serviceType: "Business coaching",
                  provider: { "@id": `${SITE_URL}/#organization` },
                },
                price: "0",
                priceCurrency: "EUR",
                url: `${SITE_URL}/contact`,
                availability: "https://schema.org/InStock",
              },
            ],
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Naar inhoud
      </a>
      <ScrollProgress />
      <SiteNav />
      <main id="main">
        <Outlet />
      </main>
      <SiteFooter />
      <Analytics />
    </QueryClientProvider>
  );
}
