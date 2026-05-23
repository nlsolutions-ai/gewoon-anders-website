import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";

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
          <h2 className="text-2xl font-semibold text-foreground">Wat overprikkeling eigenlijk is</h2>
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
            <h2 className="text-2xl font-semibold text-foreground">Hoe je het bij jezelf herkent</h2>
            <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
              Veel ondernemers die ik begeleid herkennen het pas als ze het opschrijven.
              Een paar signalen die vaak terugkomen:
            </p>
            <ul className="mt-5 space-y-3 text-[17px] leading-relaxed text-foreground/80">
              <li>Na een gesprek wil je niemand zien of horen. Geen telefoon, geen mail.</li>
              <li>Je kunt geen taak meer aan die nadenken vraagt. Auto's op afstand, koffie, scrollen.</li>
              <li>Je raakt geïrriteerd om kleine dingen. Geluid van de afwasmachine.</li>
              <li>Lichamelijk: hoofdpijn, druk op je borst, een onrustig gevoel onder je huid.</li>
              <li>Het zit niet in een uur weg. Soms duurt het tot de volgende ochtend, of langer.</li>
            </ul>
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
          <h2 className="text-2xl font-semibold text-foreground">Wat erbij hoort</h2>
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
            <h2 className="text-2xl font-semibold text-foreground">Wat helpt</h2>
            <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
              Niets van dit is een trucje. Het zijn dingen die ondernemers die ik begeleid
              hebben uitgeprobeerd en blijken te werken voor hun brein.
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

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-10">
          <FadeIn>
            <p className="text-[17px] leading-relaxed text-foreground/80">
              In het traject{" "}
              <Link to="/traject" className="text-primary underline-offset-2 hover:underline">
                Anders Ondernemen
              </Link>{" "}
              kijken we per pijler waar je energie naartoe gaat. Wil je eerst zelf
              meten waar het lekt?{" "}
              <Link to="/downloads" className="text-primary underline-offset-2 hover:underline">
                Doe de Ondernemers-energiescan
              </Link>
              .
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground hover:bg-primary/90"
            >
              Plan een kennismaking
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
