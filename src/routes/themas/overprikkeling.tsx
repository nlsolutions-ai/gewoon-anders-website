import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
import { MaskReveal, Magnetic, StaggerGroup, StaggerItem } from "@/components/motion";
import { CTALink } from "@/components/CTAButton";

export const Route = createFileRoute("/themas/overprikkeling")({
  head: () => ({
    meta: [
      { title: "Overprikkeling na klantcontact - Gewoon Anders" },
      {
        name: "description",
        content:
          "Waarom je na een goed verlopen klantgesprek soms uren of dagen nodig hebt om te herstellen, hoe je dat herkent, en wat eraan te doen is.",
      },
      { property: "og:title", content: "Overprikkeling na klantcontact" },
      { property: "og:url", content: "/themas/overprikkeling" },
    ],
    links: [{ rel: "canonical", href: "/themas/overprikkeling" }],
  }),
  component: OverprikkelingPage,
});

function OverprikkelingPage() {
  return (
    <>
      <PageHeader
        title="Overprikkeling na klantcontact."
        intro="Je hebt een goed gesprek gehad. De klant was tevreden, jij was scherp, alles ging soepel. En toch ben je daarna onbruikbaar. Dat is niet vreemd. Voor veel neurodivergente ondernemers werkt klantcontact zo."
      />

      <section className="mx-auto max-w-3xl px-6 py-12 lg:px-10">
        <FadeIn>
          <MaskReveal as="h2" text="Wat overprikkeling eigenlijk is" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Overprikkeling is wat er gebeurt als je brein meer informatie binnenkrijgt dan
            het kan verwerken op de snelheid waarop het binnenkomt. Bij autistische
            ondernemers gaat dat vaak om sociale informatie. Toon, gezichtsuitdrukking,
            wat de ander niet zegt, hoe het lijkt te vallen. Bij ADHD-ondernemers vaak om
            volume, beweging, parallelle gesprekken. Bij AuDHD allebei tegelijk.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
            Het is geen zwakte. Het is een brein dat verfijnder waarneemt. Maar verfijning
            kost energie, en in een klantgesprek staat alles aan.
          </p>
        </FadeIn>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <FadeIn>
            <MaskReveal as="h2" text="Hoe je het bij jezelf herkent" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
            <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
              Veel ondernemers die ik begeleid herkennen het pas als ze het opschrijven.
              Een paar signalen die vaak terugkomen:
            </p>
            <StaggerGroup as="ul" className="mt-5 space-y-3 text-[17px] leading-relaxed text-foreground/80">
              <StaggerItem as="li">Na een gesprek wil je niemand zien of horen. Geen telefoon, geen mail.</StaggerItem>
              <StaggerItem as="li">Je kunt geen taak meer aan die nadenken vraagt. Wel scrollen, koffie zetten, iets met je handen aanrommelen.</StaggerItem>
              <StaggerItem as="li">Je raakt geïrriteerd om kleine dingen. Het geluid van de afwasmachine, een vraag van iemand.</StaggerItem>
              <StaggerItem as="li">Lichamelijk: hoofdpijn, druk op je borst, een onrustig gevoel onder je huid.</StaggerItem>
              <StaggerItem as="li">Het zakt niet binnen een uur. Soms duurt het tot de volgende ochtend, of langer.</StaggerItem>
            </StaggerGroup>
            <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
              Veel mensen geloven niet dat het door dat ene gesprek komt, want dat gesprek
              ging goed. Daar zit de denkfout. Het gaat niet om of het goed ging. Het gaat
              om hoeveel je hebt opgenomen.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <FadeIn>
          <MaskReveal as="h2" text="Wat erbij hoort" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Hier zit vaak een tweede laag. Masking. Tijdens een klantgesprek werk je niet
            alleen aan de inhoud, je doet ook moeite om er rustig en sociaal vlot uit te
            zien. Twee taken tegelijk, terwijl het er voor de buitenkant op één lijkt.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
            Lees meer over die tweede laag op de pagina{" "}
            <Link to="/themas/masking" className="text-primary underline-offset-2 hover:underline">
              Masking in het ondernemen
            </Link>
            .
          </p>
        </FadeIn>
      </section>

      <section className="bg-highlight">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <FadeIn>
            <MaskReveal as="h2" text="Wat helpt" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
            <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
              Dit zijn geen trucjes. Het zijn dingen die ondernemers die ik begeleid
              hebben uitgeprobeerd, en die blijken te werken voor hun brein.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
              Een paar voorbeelden die vaak terugkomen. Plan niet twee zware gesprekken op
              één dag. Bouw vaste rustblokken in na klantcontact, geen telefoon, geen
              scherm. Kies per gesprek het kanaal dat het minst overprikkelt. Een mailwissel
              kost soms helemaal niets, terwijl een videocall een dag uitschakelt. Spreek
              vooraf af hoe lang een gesprek duurt en houd je daaraan, ook als het loopt.
              Bouw je week zo op dat je harde dingen op pieken doet en zachte dingen op
              dalen. Geen rechte lijn van negen tot vijf.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="noise relative overflow-hidden bg-ink text-ink-foreground">
        <div className="pointer-events-none absolute -right-24 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center lg:px-10">
          <FadeIn>
            <p className="text-[17px] leading-relaxed text-background/80">
              In het traject{" "}
              <Link to="/traject" className="text-primary underline-offset-2 hover:underline">
                Gewoon Anders Ondernemen
              </Link>{" "}
              kijken we per pijler waar je energie naartoe gaat. Wil je eerst zelf
              meten waar het lekt?{" "}
              <Link to="/energiescan" className="text-primary underline-offset-2 hover:underline">
                Doe de Ondernemers-energiescan
              </Link>
              .
            </p>
            <div className="mt-8">
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
