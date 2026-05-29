import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
import { MaskReveal, Magnetic, StaggerGroup, StaggerItem } from "@/components/motion";
import { CTALink } from "@/components/CTAButton";

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
          <MaskReveal as="h2" text="Wat ik vaak zie bij autistische ondernemers" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Je bent ijzersterk in je vak. Je werkt scherp, grondig en eerlijk. Klanten
            waarderen dat. En toch is het ondernemen eromheen vermoeiend op een manier
            die je niet altijd kunt uitleggen. Een paar dingen die vaak terugkomen:
          </p>
          <StaggerGroup as="ul" className="mt-5 space-y-3 text-[17px] leading-relaxed text-foreground/80">
            <StaggerItem as="li">Klantgesprekken die goed gaan en je daarna twee dagen kosten.</StaggerItem>
            <StaggerItem as="li">Netwerken dat aanvoelt als acteren.</StaggerItem>
            <StaggerItem as="li">
              Een aanbod dat je nog een keer wil herschrijven omdat het niet helemaal
              klopt, en dat daardoor de deur niet uit gaat.
            </StaggerItem>
            <StaggerItem as="li">Prijsgesprekken die je liever niet voert.</StaggerItem>
            <StaggerItem as="li">Onverwachte vragen die je dag platleggen.</StaggerItem>
          </StaggerGroup>
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
            <MaskReveal as="h2" text="Waar het traject op aanstuurt" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
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
          <MaskReveal as="h2" text="Waarom 1-op-1 vaak beter past dan een groep" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
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
