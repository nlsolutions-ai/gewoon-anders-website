import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";

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
          <h2 className="text-2xl font-semibold text-foreground">Wat het is</h2>
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Demand avoidance is een sterke, vaak onbewuste weerstand tegen dingen die als
            eis aanvoelen. Het is geen luiheid. Het is geen onwil. Het is een brein dat op
            opdrachten reageert met een soort innerlijk slot. Hoe sterker de eis, hoe
            steviger het slot. Ook eigen eisen tellen mee.
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
            <h2 className="text-2xl font-semibold text-foreground">Hoe het zich uit in je werk</h2>
            <ul className="mt-5 space-y-3 text-[17px] leading-relaxed text-foreground/80">
              <li>Het werk dat je leuk vindt blijft liggen zodra je het op je takenlijst zet.</li>
              <li>Een aanbod dat klaar moet, herschrijf je in plaats van te versturen.</li>
              <li>Je website is nooit af, omdat afronden voelt als een eis.</li>
              <li>Eigen routines slijten snel. Wat in week één lukte, voelt in week drie als dwang.</li>
              <li>Op een drukke dag krijg je veel gedaan, op een rustige dag bijna niets.</li>
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <FadeIn>
          <h2 className="text-2xl font-semibold text-foreground">Waarom standaard advies dit erger maakt</h2>
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            "Maak een planning en houd je eraan" werkt averechts. "Beloof het iemand,
            dan moet je wel" werkt soms een keer, en daarna nooit meer. "Tweak je
            mindset" maakt mensen vooral kwaad op zichzelf. Wat helpt is dingen niet als
            opdracht inrichten.
          </p>
        </FadeIn>
      </section>

      <section className="bg-highlight">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-foreground">Wat in trajecten vaak werkt</h2>
            <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
              Een paar lijnen die ik vaak met mensen uitprobeer. Verklein de eis. Niet "ik
              ga drie uur aan dat aanbod werken", wel "ik open het bestand". Maak meerdere
              ingangen mogelijk. Vandaag schrijven, morgen stuk lezen, overmorgen lay-out.
              Bouw vrijheid in. Een takenlijst van vier dingen waarvan je er twee mag
              kiezen werkt vaak beter dan vier die alle vier moeten. Gebruik externe
              structuur waar dat past en eigen rommel waar dat past. Niet alles hoeft
              gestroomlijnd.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
              En misschien wel het belangrijkste: stop met jezelf uitleggen dat het luiheid
              is. Het is geen luiheid.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-10">
          <FadeIn>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground hover:bg-primary/90"
            >
              Plan een kennismaking
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
