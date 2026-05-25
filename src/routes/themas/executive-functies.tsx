import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/themas/executive-functies")({
  head: () => ({
    meta: [
      { title: "Executive functies en planning - Gewoon Anders" },
      {
        name: "description",
        content:
          "Waarom plannen, starten en taakwisselen zo veel moeite kosten als je brein anders werkt, en hoe je een werkweek bouwt die wel past.",
      },
      { property: "og:title", content: "Executive functies en planning" },
      { property: "og:url", content: "/themas/executive-functies" },
    ],
    links: [{ rel: "canonical", href: "/themas/executive-functies" }],
  }),
  component: ExecFunctiesPage,
});

function ExecFunctiesPage() {
  return (
    <>
      <PageHeader
        title="Executive functies en planning."
        intro="Je hebt elke planningsmethode geprobeerd. Geen enkele houdt stand. Dat ligt vaak niet aan jouw discipline. Het ligt aan een mismatch tussen hoe die methodes werken en hoe jouw brein werkt."
      />

      <section className="mx-auto max-w-3xl px-6 py-12 lg:px-10">
        <FadeIn>
          <h2 className="text-2xl font-semibold text-foreground">Wat executive functies zijn</h2>
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Executive functies is de verzamelnaam voor de denkstappen die het mogelijk
            maken een taak te beginnen, vol te houden, te switchen, en op tijd af te
            ronden. Plannen, starten, prioriteren, schakelen tussen taken, werkgeheugen
            vasthouden tijdens onderbrekingen. Voor veel ADHD- en AuDHD-breinen werken
            deze functies anders. Niet slechter, anders.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
            Voorbeelden die ondernemers vaak noemen. Je weet wat je moet doen. Je weet
            zelfs hoe. Maar starten lukt niet, of pas op het moment dat het te laat is.
            Of: je werkt drie uur door en bent dan klaar voor de hele dag, maar in een
            standaard werkweek hoort dat niet zo. Of: een eenvoudige administratieve
            taak voelt zwaarder dan een klantopdracht waarin je honderd keer zoveel
            denkkracht stopt.
          </p>
        </FadeIn>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-foreground">Waarom standaard planning vaak niet werkt</h2>
            <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
              De meeste planningsmethodes vragen om consistente uren, vaste blokken,
              herhaalbare ritmes. Dat past goed bij een brein dat in een rechte lijn werkt.
              Bij veel neurodivergente breinen werkt energie in pieken en dalen. Op
              dinsdagochtend doe je in twee uur wat een ander in een dag doet. Op
              woensdagmiddag is er bijna niets. Een planning die elke dag hetzelfde aanneemt
              gaat dan met je vechten.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
              Er zit ook iets anders in de weg. Voor sommige breinen geldt dat hoe meer
              een taak voelt als moeten, hoe minder hij vanzelf gaat. Dat heeft een naam:
              demand avoidance. Lees daarover meer op de pagina{" "}
              <Link to="/themas/demand-avoidance" className="text-primary underline-offset-2 hover:underline">
                Demand avoidance
              </Link>
              .
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <FadeIn>
          <h2 className="text-2xl font-semibold text-foreground">Wat wel werkt</h2>
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Geen recept. Wel een paar principes die in trajecten steeds terugkomen.
          </p>
          <ul className="mt-5 space-y-3 text-[17px] leading-relaxed text-foreground/80">
            <li>
              Bouw je week om je energie, niet om de klok. Reken niet op vijf gelijke
              werkdagen, maar op een paar pieken en dalen. Plan je harde taken op de
              pieken die je herkent.
            </li>
            <li>
              Maak starten makkelijker dan doorgaan. Geen uur werken, maar vijftien
              minuten. Het ding dat je uitstelt: hak juist dát in stukjes, de rest niet.
            </li>
            <li>
              Zet niet meer dan drie dingen op een dag, en zet er één centraal. De rest
              is bijvangst.
            </li>
            <li>
              Werk met een visueel anker als je werkgeheugen onbetrouwbaar is. Een
              whiteboard of een paar vellen op je bureau. Geen acht open tabs.
            </li>
            <li>
              Bewaar een buffer voor de onverwachte dingen die toch altijd langskomen.
              Niet als noodgreep, maar als standaard.
            </li>
          </ul>
        </FadeIn>
      </section>

      <section className="bg-highlight">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <FadeIn>
            <p className="text-[17px] leading-relaxed text-foreground/80">
              In het traject ontwerpen we in pijler drie een werkweek die past bij jouw
              brein. Geen template. Eentje die je zelf herkent en kunt volhouden. Dat is
              een van de plekken waar het verschil het snelst voelbaar wordt.
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
