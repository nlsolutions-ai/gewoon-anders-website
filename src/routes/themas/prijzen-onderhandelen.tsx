import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
import { MaskReveal, Magnetic, StaggerGroup, StaggerItem } from "@/components/motion";
import { CTALink } from "@/components/CTAButton";

export const Route = createFileRoute("/themas/prijzen-onderhandelen")({
  head: () => ({
    meta: [
      { title: "Prijzen en onderhandelen - Gewoon Anders" },
      {
        name: "description",
        content:
          "Waarom prijsgesprekken voor veel neurodivergente ondernemers uitputtend zijn, hoe je een eerlijke prijs vraagt zonder dat het je dagen kost, en wat je in de tussentijd kunt doen.",
      },
      { property: "og:title", content: "Prijzen en onderhandelen" },
      { property: "og:url", content: "/themas/prijzen-onderhandelen" },
    ],
    links: [{ rel: "canonical", href: "/themas/prijzen-onderhandelen" }],
  }),
  component: PrijzenPage,
});

function PrijzenPage() {
  return (
    <>
      <PageHeader
        title="Prijzen en onderhandelen."
        intro="Voor veel neurodivergente ondernemers is het noemen van een prijs het zwaarste deel van het werk. Niet omdat de prijs te hoog is. Omdat het gesprek zelf veel kost. Je voelt aarzeling van de ander en je brein gaat aan. En de prijs gaat naar beneden, ook als je dat eigenlijk niet wil."
      />

      <section className="mx-auto max-w-3xl px-6 py-12 lg:px-10">
        <FadeIn>
          <MaskReveal as="h2" text="Waarom dit zo schuurt" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Een prijsgesprek is een gesprek met druk. Iemand wil iets, er staat geld
            tussen, je voelt de toon, je merkt of er ruimte is. Voor breinen die heel
            verfijnd waarnemen wat de ander doet, is dat een berg informatie tegelijk.
            Daar reken je op afstand of het de moeite waard is, je leest mee op gezicht
            en stem, je houdt rekening met wat je zelf voelt, en ondertussen moet er een
            antwoord uit.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
            Veel ondernemers reageren door de prijs te verlagen voor de ander erom vraagt.
            Niet omdat ze ervan overtuigd zijn dat hij te hoog is. Omdat het ongemak van
            de andere kant te zwaar weegt op dat moment. Pas een uur later, in je auto,
            voelt het verkeerd.
          </p>
        </FadeIn>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <FadeIn>
            <MaskReveal as="h2" text="Hoe dit je bedrijf beïnvloedt" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
            <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
              Wat ik vaak terugzie: je tarief zakt langzaam onder wat je werk waard is,
              zonder dat je het bewust kiest. Je trekt klanten aan die graag onderhandelen,
              omdat je signaal afgeeft dat dat kan. En je gaat prijsgesprekken op den duur
              uit de weg, waardoor je liever wat lager instuurt dan dat gesprek in te gaan.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <FadeIn>
          <MaskReveal as="h2" text="Wat helpt" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Het belangrijkste: maak het gesprek minder een gesprek. Hoe minder je ter
            plekke moet onderhandelen, hoe meer je brein ruimte heeft voor de inhoud.
          </p>
          <StaggerGroup as="ul" className="mt-5 space-y-3 text-[17px] leading-relaxed text-foreground/80">
            <StaggerItem as="li">
              Zet je prijs op papier vóór het gesprek begint, niet erna.
            </StaggerItem>
            <StaggerItem as="li">
              Werk met een vaste, korte zin voor het noemen van je prijs, zodat je niet
              ter plekke iets hoeft te bedenken.
            </StaggerItem>
            <StaggerItem as="li">
              Spreek met jezelf af dat je niet op het moment zelf korting geeft, ongeacht
              hoe het ongemak voelt. Korting kan ook morgen.
            </StaggerItem>
            <StaggerItem as="li">
              Reken niet alleen uurprijzen uit, maar ook wat een onderhandeling je aan
              energie kost. Een klant die telkens wil afdingen kost vaak meer dan hij
              oplevert.
            </StaggerItem>
            <StaggerItem as="li">
              Bied minder opties aan. Drie pakketten waarvan er één duidelijk de beste
              keuze is, helpt jou net zo goed als de klant.
            </StaggerItem>
          </StaggerGroup>
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Voor concrete zinnen die in zo'n gesprek bruikbaar zijn, is er een kort
            werkblad:{" "}
            <Link to="/downloads" className="text-primary underline-offset-2 hover:underline">
              het Prijzen-spiekbriefje
            </Link>
            .
          </p>
        </FadeIn>
      </section>

      <section className="bg-highlight">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <FadeIn>
            <p className="text-[17px] leading-relaxed text-foreground/80">
              In het traject werken we hier in pijler vier mee, samen met andere grenzen.
              Niet door je een script aan te leren. Door per situatie te kijken wat je
              eigen, eerlijke vorm is en die zo te oefenen dat hij bruikbaar wordt in het
              echt.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="noise relative overflow-hidden bg-ink text-ink-foreground">
        <div className="pointer-events-none absolute -right-24 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center lg:px-10">
          <FadeIn>
            <h2 className="display-lg text-[1.9rem] text-background sm:text-[2.3rem]">
              Wil je hier eens rustig over praten?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-background/80">
              Plan een gratis kennismaking van een half uur, op het kanaal dat jij kiest. Geen verplichting.
            </p>
            <div className="mt-8 flex justify-center">
              <Magnetic>
                <CTALink to="/contact" variant="primary" size="lg">
                  Plan een kennismaking
                </CTALink>
              </Magnetic>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
