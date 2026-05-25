import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/voor-wie/adhd-ondernemers")({
  head: () => ({
    meta: [
      { title: "Coaching voor ADHD-ondernemers - Gewoon Anders" },
      {
        name: "description",
        content:
          "Business coaching voor ondernemers met ADHD. Voor wie een werkweek wil die past bij pieken en dalen, in plaats van ertegen te vechten.",
      },
      { property: "og:title", content: "Coaching voor ADHD-ondernemers" },
      { property: "og:url", content: "/voor-wie/adhd-ondernemers" },
    ],
    links: [{ rel: "canonical", href: "/voor-wie/adhd-ondernemers" }],
  }),
  component: AdhdPage,
});

function AdhdPage() {
  return (
    <>
      <PageHeader
        title="Voor ADHD-ondernemers."
        intro="Veel ondernemers met ADHD herkennen zichzelf in iets dat niet vaak hardop gezegd wordt. Je kunt heel veel, maar niet zomaar wanneer dat moet. Je hebt pieken die anderen niet hebben en dalen die je voor hen probeert te verbergen. Een traject hier draait er niet om je vlakker te maken. Het draait erom je werk eromheen te bouwen."
      />

      <section className="mx-auto max-w-3xl px-6 py-12 lg:px-10">
        <FadeIn>
          <h2 className="text-2xl font-semibold text-foreground">Wat ik vaak zie bij ADHD-ondernemers</h2>
          <ul className="mt-5 space-y-3 text-[17px] leading-relaxed text-foreground/80">
            <li>Veel ideeën, veel start, weinig afronden.</li>
            <li>
              Goed in een nieuwe klant binnenhalen, stroef in het eindeloos opvolgen
              daarna.
            </li>
            <li>
              Hyperfocus die soms vier uur fantastisch is, en daarna twee dagen niet meer
              terugkomt.
            </li>
            <li>
              Een agenda die er op maandag strak uitziet en op woensdagmiddag in stukken
              ligt.
            </li>
            <li>Onderschatting van wat simpele administratie je kost.</li>
            <li>En vaak, als laatste: dat je zelf het hardst voor jezelf bent.</li>
          </ul>
        </FadeIn>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-foreground">Waar het traject op aanstuurt</h2>
            <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
              Geen vlakke discipline. Een werkweek die in pieken en dalen werkt. Een
              manier van klantcontact die niet je hele dag opslokt. Een aanbod waarin je
              hyperfocus iets kan opleveren, en geen verplichting wordt. Lees verder over{" "}
              <Link to="/themas/executive-functies" className="text-primary underline-offset-2 hover:underline">
                executive functies en planning
              </Link>{" "}
              en{" "}
              <Link to="/themas/energie-burnout" className="text-primary underline-offset-2 hover:underline">
                energie en burn-out
              </Link>
              .
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <FadeIn>
          <h2 className="text-2xl font-semibold text-foreground">Verschil met AuDHD</h2>
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Veel mensen met ADHD blijken na een paar jaar zoeken een AuDHD-brein te
            hebben. Dat verandert het beeld. Als je je niet helemaal herkent in het ADHD-
            label, of als het beeld er nooit zuiver bij paste, lees dan ook{" "}
            <Link to="/voor-wie/audhd-ondernemers" className="text-primary underline-offset-2 hover:underline">
              de pagina voor AuDHD-ondernemers
            </Link>
            . Bij coaching maakt het verschil welk profiel het meest van toepassing is.
          </p>
        </FadeIn>
      </section>

      <section className="bg-highlight">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <FadeIn>
            <p className="text-[17px] leading-relaxed text-foreground/80">
              Diagnose is niet nodig om mee te doen. Vermoeden mag.{" "}
              <Link to="/faq" className="text-primary underline-offset-2 hover:underline">
                Meer vragen daarover
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
