import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/voor-wie/autistische-ondernemers")({
  head: () => ({
    meta: [
      { title: "Coaching voor autistische ondernemers - Gewoon Anders" },
      {
        name: "description",
        content:
          "Business coaching voor autistische ondernemers. Voor wie het werk goed kan, maar voor wie het ondernemen eromheen veel meer kost dan zichtbaar is.",
      },
      { property: "og:title", content: "Coaching voor autistische ondernemers" },
      { property: "og:url", content: "/voor-wie/autistische-ondernemers" },
    ],
    links: [{ rel: "canonical", href: "/voor-wie/autistische-ondernemers" }],
  }),
  component: AutismePage,
});

function AutismePage() {
  return (
    <>
      <PageHeader
        title="Voor autistische ondernemers."
        intro="Veel coaching voor neurodivergente ondernemers is gemaakt voor het ADHD-brein. Snel, vlot, ideeën spuien. Voor het autistische brein klopt dat vaak niet. Hier kijken we naar wat jouw brein wel goed kan en wat het anders nodig heeft."
      />

      <section className="mx-auto max-w-3xl px-6 py-12 lg:px-10">
        <FadeIn>
          <h2 className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground">Wat ik vaak zie bij autistische ondernemers</h2>
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Je bent ijzersterk in je vak. Je werkt scherp, grondig en eerlijk. Klanten
            waarderen dat. En toch is het ondernemen eromheen vermoeiend op een manier
            die je niet altijd kunt uitleggen. Een paar dingen die vaak terugkomen:
          </p>
          <ul className="mt-5 space-y-3 text-[17px] leading-relaxed text-foreground/80">
            <li>Klantgesprekken die goed gaan en je daarna twee dagen kosten.</li>
            <li>Netwerken dat aanvoelt als acteren.</li>
            <li>
              Een aanbod dat je nog een keer wil herschrijven omdat het niet helemaal
              klopt, en dat daardoor de deur niet uit gaat.
            </li>
            <li>Prijsgesprekken die je liever niet voert.</li>
            <li>Onverwachte vragen die je dag platleggen.</li>
          </ul>
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Niets hiervan is een tekort. Het is wat er gebeurt als een brein dat heel
            precies waarneemt en houdt van voorspelbaarheid een bedrijf runt in een
            omgeving die graag het tegenovergestelde wil.
          </p>
        </FadeIn>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <FadeIn>
            <h2 className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground">Waar het traject op aanstuurt</h2>
            <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
              We bouwen een manier van ondernemen die je inhoudelijke kracht beschermt,
              in plaats van die langzaam op te eten. Klantcontact op het kanaal waarop je
              denkt. Voorspelbare structuur waar dat kan. Klanten die bij je passen, geen
              die elke week iets nieuws van je vragen. Een prijs die niet hoeft te worden
              verdedigd.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
              Relevante thema's:{" "}
              <Link to="/themas/masking" className="text-primary underline-offset-2 hover:underline">
                Masking
              </Link>
              ,{" "}
              <Link to="/themas/overprikkeling" className="text-primary underline-offset-2 hover:underline">
                Overprikkeling na klantcontact
              </Link>{" "}
              en{" "}
              <Link to="/themas/zichtbaarheid-netwerken" className="text-primary underline-offset-2 hover:underline">
                Zichtbaarheid en netwerken
              </Link>
              .
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <FadeIn>
          <h2 className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground">Waarom 1-op-1 vaak beter past dan een groep</h2>
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Een livegroep van zes andere ondernemers vraagt veel sociaal werk dat los staat
            van het bedrijf waar je heen wil. In een 1-op-1 traject hoef je dat niet te
            dragen. Je hoeft niet te peilen wat de anderen vinden, niet te wachten, niet
            mee te beslissen over het tempo van de groep. Je bent met één persoon bezig
            met jouw werk. Dat is voor veel autistische ondernemers de eerste reden om
            iets daadwerkelijk te beginnen.
          </p>
        </FadeIn>
      </section>

      <section className="bg-highlight">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <FadeIn>
            <p className="text-[17px] leading-relaxed text-foreground/80">
              Diagnose is niet nodig om mee te doen. Late ontdekking ook welkom. Lees{" "}
              <Link to="/voor-wie/laat-ontdekt" className="text-primary underline-offset-2 hover:underline">
                de pagina voor laat ontdekte of laat gediagnosticeerde ondernemers
              </Link>
              .
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
