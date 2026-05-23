import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/themas/energie-burnout")({
  head: () => ({
    meta: [
      { title: "Energie en burn-out bij neurodivergente ondernemers - Gewoon Anders" },
      {
        name: "description",
        content:
          "Waarom burn-out bij ADHD-, autisme- en AuDHD-ondernemers vaak een andere oorzaak heeft, hoe je het vroeg herkent, en hoe je je werk er omheen bouwt zonder te crashen.",
      },
      { property: "og:title", content: "Energie en burn-out" },
      { property: "og:url", content: "/themas/energie-burnout" },
    ],
    links: [{ rel: "canonical", href: "/themas/energie-burnout" }],
  }),
  component: EnergieBurnoutPage,
});

function EnergieBurnoutPage() {
  return (
    <>
      <PageHeader
        title="Energie en burn-out."
        intro="Burn-out bij neurodivergente ondernemers ziet er vaak anders uit dan in de boekjes. Het is geen mensen die te hard willen presteren. Het is mensen die jarenlang harder werken dan ze laten zien, omdat de basis hen veel meer kost dan anderen."
      />

      <section className="mx-auto max-w-3xl px-6 py-12 lg:px-10">
        <FadeIn>
          <h2 className="text-2xl font-semibold text-foreground">Waarom het anders zit</h2>
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Bij neurotypische ondernemers gaat burn-out vaak over te lang te veel doen. De
            werkdruk is te hoog, de structuur valt weg, de rust komt niet. Bij
            neurodivergente ondernemers ligt het meestal niet aan een tekort aan rust. Het
            ligt aan het feit dat veel dingen die voor anderen vanzelf gaan, voor jou een
            taak zijn. Een rommelige inbox is voor iemand anders ongemak, voor jou een
            ochtend werk om je niet te laten meeslepen. Een onverwacht telefoontje is voor
            iemand anders een onderbreking, voor jou een halve dag.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
            Het verraderlijke is dat de buitenkant er ontspannen uit kan zien terwijl je
            van binnen rent. Je ziet er fit uit. Je werkt geen zeventig uur. Je hebt
            misschien een gezin, hobby's, sport. En toch wordt het minder.
          </p>
        </FadeIn>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-foreground">Vroege signalen</h2>
            <ul className="mt-5 space-y-3 text-[17px] leading-relaxed text-foreground/80">
              <li>Dingen die je twee jaar geleden makkelijk deed, kosten nu drie keer zoveel moeite.</li>
              <li>Je werkdagen worden steeds korter zonder dat je het zo gepland hebt.</li>
              <li>Je stelt mail uit, ook simpele. Het opent niet meer in je hoofd.</li>
              <li>Je hyperfocus, als die er was, lukt niet meer. Of duurt veel korter.</li>
              <li>Weekenden geven niet meer terug wat ze vroeger gaven.</li>
              <li>Geluiden, licht, drukte: alles voelt scherper dan een jaar terug.</li>
            </ul>
            <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
              Dit zijn geen rare signalen. Het zijn signalen dat het systeem dat je gebouwd
              hebt om te werken niet meer past bij waar jouw brein nu staat.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <FadeIn>
          <h2 className="text-2xl font-semibold text-foreground">Waar het meestal lekt</h2>
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Vier plekken waar ik in trajecten energielekken vaak terugzie. Klantcontact,
            omdat je er meer in stopt dan zichtbaar is. Administratie, omdat je executive
            functies eraan trekken. Onduidelijke verwachtingen, omdat je brein dan een
            scenario per mogelijkheid voorbereidt in plaats van afwacht. En masking, een
            beetje overal.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
            Lees ook:{" "}
            <Link to="/themas/overprikkeling" className="text-primary underline-offset-2 hover:underline">
              Overprikkeling na klantcontact
            </Link>{" "}
            en{" "}
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
            <h2 className="text-2xl font-semibold text-foreground">Wat we doen in het traject</h2>
            <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
              In pijler twee houd je een week je werkenergie bij. Niet voor cijfers, voor
              herkenning. Je ziet zelf welke taken iets opleveren en welke alles eraf
              halen. Daarna kijken we wat je kunt anders inrichten in je week, in je
              klantcontact, en in je aanbod, zodat het optellen klopt.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
              Het is geen herstelplan. Bij echte uitval verwijs ik je naar zorg. Coaching
              werkt het beste op het moment dat je nog functioneert maar voelt dat het
              schuurt.
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
