import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
import { MaskReveal, Magnetic } from "@/components/motion";
import { CTALink } from "@/components/CTAButton";

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
          <MaskReveal as="h2" text="Waarom het anders zit" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Bij neurotypische ondernemers gaat burn-out vaak over te lang te veel doen:
            te hoge werkdruk, te weinig rust. Bij neurodivergente ondernemers ligt het
            zelden aan een tekort aan rust. Het ligt eraan dat veel dingen die voor
            anderen vanzelf gaan, voor jou een taak zijn. Een rommelige inbox is voor
            iemand anders ongemak, voor jou een halve ochtend werk om je er niet door
            te laten meeslepen. Een onverwacht telefoontje is voor iemand anders een
            onderbreking, voor jou een halve dag.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
            Wat het lastig maakt: de buitenkant kan er ontspannen uitzien, terwijl je
            van binnen rent. Je ziet er fit uit. Je werkt geen zeventig uur. Je hebt
            misschien een gezin, hobby's, sport. En toch wordt het minder.
          </p>
        </FadeIn>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <FadeIn>
            <MaskReveal as="h2" text="Vroege signalen" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
            <ul className="mt-5 space-y-3 text-[17px] leading-relaxed text-foreground/80">
              <li>Dingen die je twee jaar geleden makkelijk deed, kosten nu drie keer zoveel moeite.</li>
              <li>Je werkdagen worden steeds korter zonder dat je het zo gepland hebt.</li>
              <li>Je stelt mail uit, ook simpele. Het opent niet meer in je hoofd.</li>
              <li>Je hyperfocus, als die er was, lukt niet meer. Of duurt veel korter.</li>
              <li>Weekenden geven niet meer terug wat ze vroeger gaven.</li>
              <li>Geluiden, licht, drukte: alles voelt scherper dan een jaar terug.</li>
            </ul>
            <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
              Dit zijn geen rare signalen. Het zijn aanwijzingen dat het systeem dat je
              gebouwd hebt om te werken niet meer past bij waar jouw brein nu staat.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <FadeIn>
          <MaskReveal as="h2" text="Waar het meestal lekt" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Op vier plekken zie ik energielekken vaak terugkomen. Klantcontact, omdat je
            er meer in stopt dan aan de buitenkant te zien is. Administratie, omdat je
            executive functies eraan trekken. Onduidelijke verwachtingen, omdat je
            brein dan voor elke mogelijke uitkomst een scenario voorbereidt. En
            masking, een beetje overal.
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
            <MaskReveal as="h2" text="Wat we doen in het traject" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
            <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
              In pijler twee houd je een week je werkenergie bij. Niet voor cijfers,
              voor herkenning. Je ziet zelf welke taken iets opleveren, en welke alles
              eraf halen. Daarna kijken we wat je anders kunt inrichten in je week, je
              klantcontact en je aanbod, zodat het aan het eind klopt.
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
            <Magnetic>
              <CTALink to="/contact" variant="primary" size="lg">
                Plan een kennismaking
              </CTALink>
            </Magnetic>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
