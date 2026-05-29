import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
import { MaskReveal } from "@/components/motion";

export const Route = createFileRoute("/voor-wie/audhd-ondernemers")({
  head: () => ({
    meta: [
      { title: "Coaching voor AuDHD-ondernemers - Gewoon Anders" },
      {
        name: "description",
        content:
          "Business coaching voor ondernemers met AuDHD. Voor wie zowel pieken en dalen kent als overprikkeling en behoefte aan voorspelbaarheid. Een traject dat met die spanning werkt, niet er tegenin.",
      },
      { property: "og:title", content: "Coaching voor AuDHD-ondernemers" },
      { property: "og:url", content: "/voor-wie/audhd-ondernemers" },
    ],
    links: [{ rel: "canonical", href: "/voor-wie/audhd-ondernemers" }],
  }),
  component: AudhdPage,
});

function AudhdPage() {
  return (
    <>
      <PageHeader
        title="Voor AuDHD-ondernemers."
        intro="AuDHD is geen optelsom van ADHD en autisme. Het is een combinatie waarin de twee dingen tegen elkaar in trekken. Je hebt drang naar nieuwe ideeën en behoefte aan voorspelbaarheid. Je raakt overprikkeld en je verveelt je. Standaard advies past zelden. Een traject dat met die spanning rekent, wel."
      />

      <section className="mx-auto max-w-3xl px-6 py-12 lg:px-10">
        <FadeIn>
          <MaskReveal as="h2" text="Wat AuDHD-ondernemers vaak herkennen" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Je hebt veel ideeën én een sterke voorkeur voor systemen en voorspelbaarheid.
            Je raakt enthousiast en uitgeput in hetzelfde uur. Een klantgesprek loopt op
            natuurlijke energie en kost je toch een hele dag. Je houdt van diepe focus en
            je verveelt je in herhaling. Je masking is meestal fijnzinnig en goed, en dus
            ook duur. Mensen om je heen snappen niet hoe je tegelijk zo druk kunt zijn en
            zo snel opraakt.
          </p>
        </FadeIn>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <FadeIn>
            <MaskReveal as="h2" text="Waarom de meeste coaching niet past" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
            <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
              Een ADHD-coach probeert je los te maken en in beweging te krijgen. Even
              fijn, daarna leeg. Een autisme-coach helpt je structuur bouwen. Even fijn,
              en dan voelt het te krap. AuDHD-ondernemers hebben meestal allebei nodig.
              Een werkweek met structuur waar dat past en met vrijheid waar dat past. Een
              aanbod in een vaste vorm, maar waarin afwijking ook ruimte krijgt.
              Klantcontact op een manier waarop voorspelbaarheid en variatie naast elkaar
              kunnen bestaan.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <FadeIn>
          <MaskReveal as="h2" text="Waar we het over hebben" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            De grootste thema's die in een AuDHD-traject vaak terugkomen:{" "}
            <Link to="/themas/masking" className="text-primary underline-offset-2 hover:underline">
              masking
            </Link>
            ,{" "}
            <Link to="/themas/overprikkeling" className="text-primary underline-offset-2 hover:underline">
              overprikkeling
            </Link>
            ,{" "}
            <Link to="/themas/demand-avoidance" className="text-primary underline-offset-2 hover:underline">
              demand avoidance
            </Link>{" "}
            en{" "}
            <Link to="/themas/energie-burnout" className="text-primary underline-offset-2 hover:underline">
              energie en burn-out
            </Link>
            .
          </p>
        </FadeIn>
      </section>

      <section className="bg-highlight">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <FadeIn>
            <p className="text-[17px] leading-relaxed text-foreground/80">
              Ik ken AuDHD ook van dichtbij. Mijn vrouw heeft de diagnose op latere
              leeftijd gekregen. Lees{" "}
              <Link to="/over-mij" className="text-primary underline-offset-2 hover:underline">
                wie ik ben en waarom ik dit doe
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
