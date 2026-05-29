import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
import { MaskReveal, Magnetic, StaggerGroup, StaggerItem } from "@/components/motion";
import { CTALink } from "@/components/CTAButton";

export const Route = createFileRoute("/themas/demand-avoidance")({
  head: () => ({
    meta: [
      { title: "Demand avoidance bij ondernemers - Gewoon Anders" },
      {
        name: "description",
        content:
          "Waarom de dingen die je het meest wil doen soms juist het lastigst beginnen, hoe je dat patroon herkent, en wat je ermee kunt in je werk.",
      },
      { property: "og:title", content: "Demand avoidance bij ondernemers" },
      { property: "og:url", content: "/themas/demand-avoidance" },
    ],
    links: [{ rel: "canonical", href: "/themas/demand-avoidance" }],
  }),
  component: DemandAvoidancePage,
});

function DemandAvoidancePage() {
  return (
    <>
      <PageHeader
        title="Demand avoidance."
        intro="Iets moet en dan kan het niet meer. Niet omdat je niet wil. Juist niet. Maar zodra het een opdracht wordt, ook eentje die je jezelf gaf, loopt het systeem vast. Dit is voor veel autistische en AuDHD-ondernemers een herkenbaar patroon."
      />

      <section className="mx-auto max-w-3xl px-6 py-12 lg:px-10">
        <FadeIn>
          <MaskReveal as="h2" text="Wat het is" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Demand avoidance is een sterke, vaak onbewuste weerstand tegen dingen die als
            eis aanvoelen. Het is geen luiheid en geen onwil. Het is een brein dat op
            opdrachten reageert met een soort innerlijk slot. Hoe sterker de eis, hoe
            steviger het slot. Ook eisen die je jezelf oplegt tellen mee.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
            Veel mensen die dit ervaren weten dat heel goed van zichzelf. Anderen kennen
            alleen het resultaat. Een mail die je niet kunt openen, terwijl het je
            favoriete klant is. Een project dat je gepassioneerd hebt opgepakt en nu
            uitstelt. Eigen deadlines die niet helpen. Externe juist wel, soms.
          </p>
        </FadeIn>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <FadeIn>
            <MaskReveal as="h2" text="Hoe het zich uit in je werk" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
            <StaggerGroup as="ul" className="mt-5 space-y-3 text-[17px] leading-relaxed text-foreground/80">
              <StaggerItem as="li">Het werk dat je leuk vindt blijft liggen zodra je het op je takenlijst zet.</StaggerItem>
              <StaggerItem as="li">Een aanbod dat klaar moet, herschrijf je in plaats van te versturen.</StaggerItem>
              <StaggerItem as="li">Je website is nooit af, omdat afronden voelt als een eis.</StaggerItem>
              <StaggerItem as="li">Eigen routines slijten snel. Wat in week één lukte, voelt in week drie als dwang.</StaggerItem>
              <StaggerItem as="li">Op een drukke dag krijg je veel gedaan, op een rustige dag bijna niets.</StaggerItem>
            </StaggerGroup>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <FadeIn>
          <MaskReveal as="h2" text="Wanneer het niet alleen demand avoidance is" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Soms ligt er nog iets anders onder. Je hebt iets klaar. Een aanbod, een
            website, een lancering, een eerste video. Soms al weken of maanden. Je
            voorbereiding is uitgebreid, vaak ruim genoeg. En toch krijg je jezelf niet
            aan de start.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
            Bij demand avoidance gaat het om de eis: het moet, dus het kan niet meer. Hier
            gaat het om iets anders. De uitkomst. Wat als het niet wordt wat je hoopte.
            Wat als iemand er iets van vindt. Wat als blijkt dat het toch niet goed is. Zo
            lang je voorbereidt, kun je nog bijsturen. Zodra je de knop indrukt, is het
            uit jouw hand.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
            Veel ondernemers herkennen dat. Het wordt vaak verkocht als perfectionisme.
            Dat dekt het zelden volledig. Onder die laag zit meestal angst voor het
            oordeel, of voor het feit dat de uitkomst niet bij te sturen is zodra hij er
            is. Dat is geen karaktertrek om af te leren. Het is iets dat ruimte mag
            krijgen, en waar je omheen kunt bouwen.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
            Wat in trajecten vaak helpt: maak van starten een kleinere stap dan voltooien.
            Zet iets in een bèta-versie naar buiten, in plaats van een definitieve. Laat
            één persoon meekijken voor je publiek wordt. Spreek vooraf met jezelf af dat
            je het over twee weken bijstuurt, ongeacht hoe het valt. Dat haalt de
            permanentie van de stap eraf. Niet de uitkomst is verkleind, wel het gewicht
            dat je aan de start hangt.
          </p>
        </FadeIn>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <FadeIn>
            <MaskReveal as="h2" text="Waarom standaard advies dit erger maakt" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
            <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
              "Maak een planning en houd je eraan" werkt averechts. "Beloof het iemand,
              dan moet je wel" werkt soms een keer, en daarna nooit meer. "Tweak je
              mindset" maakt mensen vooral kwaad op zichzelf. Wat helpt is dingen niet
              als opdracht inrichten.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-highlight">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <FadeIn>
            <MaskReveal as="h2" text="Wat in trajecten vaak werkt" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
            <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
              Geen recept. Wel een paar dingen die ik vaak met mensen uitprobeer.
            </p>
            <StaggerGroup as="ul" className="mt-5 space-y-3 text-[17px] leading-relaxed text-foreground/80">
              <StaggerItem as="li">
                Verklein de eis. Niet "ik ga drie uur aan dat aanbod werken", wel "ik open
                het bestand".
              </StaggerItem>
              <StaggerItem as="li">
                Maak meerdere ingangen mogelijk. Vandaag schrijven, morgen een stuk lezen,
                overmorgen aan de lay-out.
              </StaggerItem>
              <StaggerItem as="li">
                Bouw vrijheid in. Een takenlijst van vier dingen waarvan je er twee mag
                kiezen werkt vaak beter dan vier die alle vier moeten.
              </StaggerItem>
              <StaggerItem as="li">
                Gebruik externe structuur waar dat past en eigen rommel waar dat past.
                Niet alles hoeft gestroomlijnd.
              </StaggerItem>
            </StaggerGroup>
            <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
              En misschien wel het belangrijkste: stop met jezelf uitleggen dat het luiheid
              is. Dat is het niet.
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
