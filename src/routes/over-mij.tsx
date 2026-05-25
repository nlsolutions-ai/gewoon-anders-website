import { createFileRoute, Link } from "@tanstack/react-router";
import jurgenBank from "@/assets/jurgen-portret-bank.png";
import jurgenBos from "@/assets/jurgen-bospad.png";
import jurgenMariska from "@/assets/jurgen-mariska.jpg";
import { FadeIn } from "@/components/FadeIn";

export const Route = createFileRoute("/over-mij")({
  head: () => ({
    meta: [
      { title: "Over mij - Gewoon Anders" },
      {
        name: "description",
        content:
          "Wie ik ben en waarom ik Gewoon Anders heb opgericht. Neurodivergentie van twee kanten: mijn eigen ADHD-brein en mijn vrouw met AuDHD.",
      },
      { property: "og:title", content: "Over mij - Gewoon Anders" },
      { property: "og:description", content: "Neurodivergentie ken ik van twee kanten." },
      { property: "og:url", content: "/over-mij" },
    ],
    links: [{ rel: "canonical", href: "/over-mij" }],
  }),
  component: OverMijPage,
});

type Section = { h: string; paragraphs: string[] };

const sectionsBeforeBos: Section[] = [
  {
    h: "Jarenlang ondernemen zonder te snappen waarom het zo zwaar was",
    paragraphs: [
      "Ik ben jong begonnen met werken, en op papier ging het goed. Onder de oppervlakte vroeg ik me steeds vaker af waarom alles zoveel energie kostte. Waarom ik mijn doelen nooit haalde. Waarom ik na een productieve week soms dagen nodig had om te herstellen. En waarom ik altijd beter was in iets nieuws dan in iets afmaken. Ik dacht lang dat het aan mij lag.",
    ],
  },
  {
    h: "Het moment waarop het kwartje viel",
    paragraphs: [
      'Voor mij viel het kwartje toen ik besloot om te stoppen met "aardig gevonden" willen worden. Ik begon meer te leven voor mezelf en mijn dromen, en daardoor maskeerde ik ook minder.',
      "Ik merkte dat het leven mij minder energie kostte. Dat het mij zelfvertrouwen gaf. Dat er rust en berusting kwam. Ik leerde te kijken naar wat ik nodig had. Naar welke grenzen ik moest stellen en hoe ik ervoor kon zorgen dat ik aan het eind van de week nog een beetje energie over had.",
      "Ik bepaalde voor mezelf de definitie van succes. En leerde dat iedereen een andere definitie van succes heeft.",
    ],
  },
];

const sectionsAfterBos: Section[] = [
  {
    h: "Wat ik ontdekte over mijn eigen brein",
    paragraphs: [
      "Mijn brein werkt in pieken, niet in een rechte lijn. Het houdt van diepe focus en heeft daarna rust nodig. Het past niet in standaard werkweken. Door dat te accepteren in plaats van de strijd ermee aan te gaan, ging ondernemen voor het eerst echt soepel.",
      "Ik heb piekmomenten en momenten waarop alles op een wat lager pitje draait. Mijn werkweek is hier inmiddels op ingericht.",
    ],
  },
  {
    h: "Ik bén niet ADHD of autisme. Ik héb het.",
    paragraphs: [
      "Net als jij ben ik geen verpersoonlijking van mijn neurodivergente brein. Ik heb er soms last van en soms profijt. Maar behalve een mede-lotgenoot ben ik nog veel meer. Ik ben specialist in marketing en sales, en heb jarenlange ervaring binnen operationeel management.",
      "Ik coach al jaren ondernemers en heb een nuchtere kijk op dingen, zonder daarbij onnodig hard te zijn.",
    ],
  },
  {
    h: "Waarom ik Gewoon Anders heb opgericht",
    paragraphs: [
      'Ik wil dat andere neurodivergente ondernemers niet hoeven te doen alsof. Ik zal niet zeggen dat het een "superpower" is. Soms is het ontzettend complex en frustrerend, en voelt het uitzichtloos. Maar er zijn wel degelijk manieren om minder last te hebben van jezelf en je omgeving. En manieren om het maximale eruit te halen voor jezelf.',
      "Geen jaren verspillen aan systemen die voor een ander brein zijn gemaakt. Geen energie verliezen aan uitleggen wat eigenlijk vanzelfsprekend zou moeten zijn. Daarom Gewoon Anders. Want jij bent gewoon een beetje anders. En dat is best.",
    ],
  },
];

function SectionBlock({ s }: { s: Section }) {
  return (
    <article>
      <h2 className="display-lg text-[1.8rem] sm:text-[2rem] lg:text-[2.2rem]">{s.h}</h2>
      <div className="mt-5 space-y-5">
        {s.paragraphs.map((p, i) => (
          <p key={i} className="text-[17px] leading-relaxed text-foreground/80">
            {p}
          </p>
        ))}
      </div>
    </article>
  );
}

function OverMijPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 right-[-15%] h-[420px] w-[420px] rounded-full bg-primary/8 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 left-[-15%] h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-highlight/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-6 pt-12 pb-16 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:pt-20 lg:pb-20">
          <div className="lg:col-span-7">
            <FadeIn>
              <span className="eyebrow">Over mij</span>
            </FadeIn>
            <FadeIn delay={60}>
              <h1 className="display-xl mt-6 text-[2.4rem] sm:text-[3rem] lg:text-[3.6rem]">
                Wie ik ben en waarom ik dit doe.
              </h1>
            </FadeIn>
            <FadeIn delay={140}>
              <p className="mt-7 text-[18px] leading-relaxed text-foreground/80">
                Ik ben Jurgen, oprichter van Gewoon Anders. Zelf heb ik ADHD
                (gediagnosticeerd) en behoorlijk wat autistische trekjes (geen diagnose).
                Jarenlang heb ik voor een grote multinational op kantoor gewerkt, en
                ondertussen al evenveel jaren een eigen bedrijf gerund.
              </p>
            </FadeIn>
            <FadeIn delay={220}>
              <p className="mt-5 text-[18px] leading-relaxed text-foreground/80">
                Al ruim achttien jaar ben ik dolgelukkig met mijn prachtige vrouw,
                Mariska, die AuDHD heeft. Wat ik meeneem in mijn coaching komt uit beide
                werelden.
              </p>
            </FadeIn>
          </div>
          <div className="lg:col-span-5">
            <FadeIn delay={120}>
              <div className="overflow-hidden rounded-3xl bg-secondary shadow-ambient-lg">
                <img
                  src={jurgenBank}
                  alt="Jurgen zit ontspannen op een bank in een lichte huiselijke kamer."
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Eerste twee secties: verleden + kwartje */}
      <section className="mx-auto max-w-3xl px-6 py-12 lg:px-10">
        <div className="space-y-14">
          {sectionsBeforeBos.map((s, i) => (
            <FadeIn key={s.h} delay={i * 60}>
              <SectionBlock s={s} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Sfeerbeeld bospad */}
      <section className="mx-auto max-w-5xl px-6 py-12 lg:px-10">
        <FadeIn>
          <div className="overflow-hidden rounded-3xl shadow-ambient-lg">
            <img
              src={jurgenBos}
              alt="Jurgen staat rustig op een bospad in zacht licht."
              className="h-full w-full object-cover"
            />
          </div>
        </FadeIn>
      </section>

      {/* Mariska — eigen sectie met foto */}
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-6 py-20 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-24">
          <div className="lg:col-span-5">
            <FadeIn>
              <div className="overflow-hidden rounded-3xl shadow-ambient-lg">
                <img
                  src={jurgenMariska}
                  alt="Jurgen en zijn vrouw Mariska samen bij zonsondergang aan zee."
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
          <div className="lg:col-span-7">
            <FadeIn>
              <h2 className="display-lg text-[1.8rem] sm:text-[2rem] lg:text-[2.2rem]">
                Wat ik leerde naast mijn vrouw
              </h2>
            </FadeIn>
            <FadeIn delay={80}>
              <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
                Ik ben al ruim achttien jaar samen met Mariska. Zij werd pas op latere
                leeftijd gediagnosticeerd met AuDHD, na een jarenlange zoektocht naar
                haar eigen "ik". Ik heb van dichtbij gezien wat late herkenning met
                iemand doet. Hoeveel energie het haar kostte om jarenlang te maskeren.
                Wat het doet als de mensen om je heen niet geloven dat jouw brein echt
                zo werkt.
              </p>
            </FadeIn>
            <FadeIn delay={140}>
              <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
                Dat heeft mijn beeld van neurodivergentie net zo gevormd als mijn eigen
                ervaring ermee.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Overige secties */}
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="space-y-14">
          {sectionsAfterBos.map((s, i) => (
            <FadeIn key={s.h} delay={i * 60}>
              <SectionBlock s={s} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Slot */}
      <section className="mx-auto max-w-[1240px] px-6 pb-24 lg:px-10">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] bg-foreground p-10 sm:p-14 lg:p-16">
            <div className="pointer-events-none absolute -top-24 -right-24 h-[320px] w-[320px] rounded-full bg-primary/25 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-background/60">
                  Klinkt dit als iets dat bij je past
                </p>
                <h2 className="display-lg mt-3 text-3xl text-background sm:text-4xl">
                  Plan vrijblijvend een kennismaking.
                </h2>
                <p className="mt-5 text-[16px] leading-relaxed text-background/80">
                  Een half uur, op het kanaal dat jij wil. Geen verkoopgesprek, geen
                  verplichting. We kijken samen of het klikt.
                </p>
              </div>
              <div className="lg:col-span-5 lg:text-right">
                <Link
                  to="/contact"
                  className="magnet group inline-flex items-center gap-3 rounded-full bg-background pl-6 pr-2 py-2 text-[15px] font-medium text-foreground"
                >
                  <span>Plan een kennismaking</span>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
