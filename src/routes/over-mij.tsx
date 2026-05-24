import { createFileRoute, Link } from "@tanstack/react-router";
import jurgenBank from "@/assets/jurgen-portret-bank.png";
import jurgenBos from "@/assets/jurgen-bospad.png";
import { FadeIn } from "@/components/FadeIn";

export const Route = createFileRoute("/over-mij")({
  head: () => ({
    meta: [
      { title: "Over mij - Gewoon Anders" },
      {
        name: "description",
        content:
          "Wie ik ben en waarom ik Gewoon Anders heb opgericht. Neurodivergentie van twee kanten: mijn eigen brein en mijn vrouw met AuDHD.",
      },
      { property: "og:title", content: "Over mij - Gewoon Anders" },
      { property: "og:description", content: "Neurodivergentie ken ik van twee kanten." },
      { property: "og:url", content: "/over-mij" },
    ],
    links: [{ rel: "canonical", href: "/over-mij" }],
  }),
  component: OverMijPage,
});

const sections = [
  {
    h: "Jarenlang ondernemen zonder te snappen waarom het zo zwaar was",
    p: "Ik ben jong begonnen met ondernemen, en op papier ging het goed. Onder de oppervlakte vroeg ik me steeds vaker af waarom alles zoveel energie kostte. Waarom mijn agenda nooit klopte. Waarom ik na een productieve week soms dagen nodig had om te herstellen. Ik dacht lang dat het aan mij lag.",
  },
  {
    h: "Het moment waarop het kwartje viel",
    p: "Op een gegeven moment vielen de stukjes op hun plek. Niet door een dramatisch moment, maar door rustige gesprekken, lezen, en eerlijk naar mezelf kijken. Vanaf dat moment ging ik mijn werk anders inrichten.",
  },
  {
    h: "Wat ik leerde naast mijn vrouw",
    p: "Ik ben al ruim achttien jaar samen met mijn vrouw. Zij werd pas op latere leeftijd gediagnosticeerd met AuDHD. Ik heb van dichtbij gezien wat late herkenning met iemand doet. Wat het kost om jarenlang te maskeren. Wat het doet als de mensen om je heen niet geloven dat het echt zo werkt. Dat heeft mijn beeld van neurodivergentie net zo gevormd als mijn eigen ervaring.",
  },
  {
    h: "Wat ik ontdekte over mijn eigen brein",
    p: "Mijn brein werkt in pieken, niet in een rechte lijn. Het houdt van diepe focus en heeft daarna rust nodig. Het past niet in standaard werkweken. Door dat te accepteren in plaats van bevechten, ging ondernemen voor het eerst echt soepel.",
  },
  {
    h: "Waarom ik Gewoon Anders heb opgericht",
    p: "Ik wil dat andere neurodivergente ondernemers niet hoeven te doen alsof. Geen jaren verspillen aan systemen die voor een ander brein zijn gemaakt. Geen energie verliezen aan uitleggen wat eigenlijk vanzelfsprekend zou moeten zijn. Daarom Gewoon Anders.",
  },
];

function OverMijPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 lg:px-10 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-5xl">
              Wie ik ben en waarom ik dit doe.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              Ik ben Jurgen, oprichter van Gewoon Anders. Ik ben zelf neurodivergent,
              ondernemer al jaren, en ik woon met mijn vrouw, die AuDHD heeft. Wat ik
              meeneem in coaching komt uit beide werelden.
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="overflow-hidden rounded-2xl bg-secondary shadow-[0_8px_30px_rgba(31,58,82,0.08)]">
              <img
                src={jurgenBank}
                alt="Jurgen zit ontspannen op een bank in een lichte huiselijke kamer."
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12 lg:px-10">
        <div className="space-y-12">
          {sections.slice(0, 2).map((s, i) => (
            <FadeIn key={s.h} delay={i * 60}>
              <article>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  {s.h}
                </h2>
                <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">{s.p}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Sfeerbeeld bospad */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
        <FadeIn>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={jurgenBos}
              alt="Jurgen staat rustig op een bospad in zacht licht."
              className="h-full w-full object-cover"
            />
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12 lg:px-10">
        <div className="space-y-12">
          {sections.slice(2).map((s, i) => (
            <FadeIn key={s.h} delay={i * 60}>
              <article>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  {s.h}
                </h2>
                <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">{s.p}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>


      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-10">
          <FadeIn>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground hover:bg-primary/90"
            >
              Plan een gratis kennismaking
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
