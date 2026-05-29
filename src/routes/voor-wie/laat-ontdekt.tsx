import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
import { MaskReveal, Magnetic } from "@/components/motion";
import { CTALink } from "@/components/CTAButton";

export const Route = createFileRoute("/voor-wie/laat-ontdekt")({
  head: () => ({
    meta: [
      { title: "Laat ontdekt of laat gediagnosticeerd - Gewoon Anders" },
      {
        name: "description",
        content:
          "Coaching voor ondernemers die pas later in hun leven ontdekten dat ze neurodivergent zijn. Er ligt jarenlang werk achter je. We kijken vooruit, met respect voor wat al is.",
      },
      { property: "og:title", content: "Laat ontdekt of laat gediagnosticeerd" },
      { property: "og:url", content: "/voor-wie/laat-ontdekt" },
    ],
    links: [{ rel: "canonical", href: "/voor-wie/laat-ontdekt" }],
  }),
  component: LaatOntdektPage,
});

function LaatOntdektPage() {
  return (
    <>
      <PageHeader
        title="Laat ontdekt of laat gediagnosticeerd."
        intro="Je hebt jaren ondernomen voordat het kwartje viel. Of misschien hebben anderen het lang gezegd en heb je het lang niet geloofd. Hoe het ook zat, je staat nu op een ander punt dan iemand die het al langer wist. Hier mag dat ook zo zijn."
      />

      <section className="mx-auto max-w-3xl px-6 py-12 lg:px-10">
        <FadeIn>
          <MaskReveal as="h2" text="Wat een late ontdekking met je doet" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Veel ondernemers die ik begeleid zijn pas in de veertig of vijftig achter hun
            brein gekomen. Soms via een kind dat een diagnose kreeg. Soms via een
            burn-out. Soms na een gesprek met iemand die zelf neurodivergent is en je
            iets liet zien dat je niet meer kon wegredeneren.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
            Wat erbij hoort: opluchting, woede, schaamte, verdriet om alle jaren ervoor,
            en een soort moeheid omdat je nu pas mag stoppen met iets aan jezelf
            uitleggen wat je nooit zelf bedacht had. Dat allemaal door elkaar. Het mag.
          </p>
        </FadeIn>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <FadeIn>
            <MaskReveal as="h2" text="Wat anders is bij coaching dan eerder in je carrière" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
            <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
              Je hebt al van alles uitgeprobeerd. Veel daarvan werkt voor een deel. Je
              hebt je eigen workarounds. Dat is winst, niet iets om af te leren. We
              kijken naar wat al werkt, waarom het werkt, en op welk punt het toch klem
              gaat zitten. Vaak is dat een paar concrete plekken, niet je hele manier van
              ondernemen.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
              We doen ook niet alsof je opnieuw begint. Je bent jezelf niet kwijt, je
              hebt jezelf in een ander licht leren zien. Dat scheelt.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <FadeIn>
          <MaskReveal as="h2" text="Ik ken dit ook van mijn vrouw" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Mijn vrouw is op latere leeftijd gediagnosticeerd met AuDHD. Ik heb van
            dichtbij gezien wat dat met iemand doet, ook met onze relatie. Dat heeft de
            manier waarop ik werk gevormd. Ik ga niet uit van een schoon vel. Ik ga uit
            van wat er al is, en wat van daaruit kan.
          </p>
        </FadeIn>
      </section>

      <section className="bg-highlight">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <FadeIn>
            <p className="text-[17px] leading-relaxed text-foreground/80">
              Diagnose niet nodig. Vermoeden mag.{" "}
              <Link to="/faq" className="text-primary underline-offset-2 hover:underline">
                Lees meer in de veelgestelde vragen
              </Link>
              .
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
