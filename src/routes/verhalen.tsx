import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/verhalen")({
  head: () => ({
    meta: [
      { title: "Verhalen van deelnemers - Gewoon Anders" },
      {
        name: "description",
        content:
          "Vijf onderneemsters vertellen hoe het traject Anders Ondernemen hun werk veranderde. Geen mooie woorden, wel eerlijke verhalen over wat anders werd.",
      },
      { property: "og:title", content: "Verhalen van deelnemers" },
      { property: "og:url", content: "/verhalen" },
    ],
    links: [{ rel: "canonical", href: "/verhalen" }],
  }),
  component: VerhalenPage,
});

type Story = {
  name: string;
  age: number;
  role: string;
  brain: string;
  initials: string;
  /** tailwind classes for the avatar circle */
  avatarBg: string;
  avatarText: string;
  quote: string;
  body: string;
  channel?: string;
  changed?: string;
};

const stories: Story[] = [
  {
    name: "Eva",
    age: 38,
    role: "Illustrator",
    brain: "AuDHD, ontdekt op haar 35e",
    initials: "EV",
    avatarBg: "bg-primary/15",
    avatarText: "text-primary",
    quote: "Ik dacht dat ik beter moest leren plannen. Ik ben juist gestopt met de manier van plannen die niet bij me paste.",
    body: "Toen we begonnen had ik vier verschillende apps en een whiteboard. Niets hield het langer vol dan drie weken. We hebben twee sessies besteed aan kijken wat wél werkte. Bleek dat ik in pieken werk, niet in een rechte lijn. Nu plan ik die pieken in plaats van een gemiddelde dag. Mijn ochtenden zijn vrij, ik werk vier middagen door, vrijdag is licht. Ik dacht echt dat dit niet kon als ondernemer. Het kan dus wel.",
    channel: "Vooral mailsessies",
    changed: "Werkweek opnieuw ingericht",
  },
  {
    name: "Sanne",
    age: 44,
    role: "Virtual assistant",
    brain: "Autisme, ontdekt na de diagnose van haar zoon",
    initials: "SA",
    avatarBg: "bg-highlight",
    avatarText: "text-foreground",
    quote: "Ik doe nog steeds dezelfde dingen. Ik snap nu alleen waarom het me vroeger zo leegtrok.",
    body: "Mijn werk ging op zich prima, maar ik was elke vrijdag op. Na onze derde sessie merkte ik dat ik na een Zoom-meeting twee uur niet meer kon functioneren. Vanaf dat moment was het geen mysterie meer. Ik heb mijn klantcontact teruggebracht naar één videocall per week, de rest gaat via mail en chat. Ik factureer hetzelfde, werk minder uren, en aan het eind van de dag is er nog iets van mij over. Klanten merken er niks van, behalve dat ik prettiger antwoord.",
    channel: "Mix van mail en bellen zonder beeld",
    changed: "Klantcontact verkleind",
  },
  {
    name: "Maaike",
    age: 29,
    role: "Copywriter",
    brain: "ADHD, vroeg gediagnosticeerd",
    initials: "MA",
    avatarBg: "bg-foreground text-background",
    avatarText: "text-background",
    quote: "Hij vroeg niet wat ik wilde veranderen. Hij vroeg wat ik wilde houden.",
    body: "Ik kwam binnen met het idee dat ik eindelijk een normale ondernemer wilde worden. Jurgen vroeg gewoon waarom. Daar had ik geen goed antwoord op. Vier maanden later weet ik dat ik geen tweede medewerker wil, geen abonnementsmodel, en geen tien klanten tegelijk. Ik heb nu drie vaste klanten, een wachtlijst van vier, en mijn weekend is van mij. Het is precies het bedrijf dat ik altijd al wilde. Ik wist het zelf alleen niet.",
    channel: "Videobellen",
    changed: "Bedrijfsrichting helder",
  },
  {
    name: "Marieke",
    age: 52,
    role: "HR-consultant",
    brain: "AuDHD, diagnose op haar 49e",
    initials: "MK",
    avatarBg: "bg-secondary",
    avatarText: "text-foreground",
    quote: "Ik was bang dat het te laat was om mijn werk anders in te richten. Het was juist nog net op tijd.",
    body: "Toen ik begon dacht ik dat ik op een burn-out afstevende. Ik was al twee keer eerder uitgevallen, en deze keer wilde ik het voor zijn. We zijn niet bij de uitputting begonnen, maar bij mijn tarief. Dat was te laag, mijn beschikbaarheid te ruim, en mijn aanbod te breed. Een paar maanden later werk ik met minder klanten, verdien ik meer, en is de zaterdag voor het eerst in jaren gewoon weer een vrije dag.",
    channel: "Bellen zonder beeld",
    changed: "Tarief en grenzen herzien",
  },
  {
    name: "Lotte",
    age: 33,
    role: "Therapeut en coach voor jonge volwassenen",
    brain: "Autisme, ontdekt op haar 32e",
    initials: "LO",
    avatarBg: "bg-primary/15",
    avatarText: "text-primary",
    quote: "Ik dacht dat ik mezelf moest aanpassen aan mijn vak. Hij liet me zien dat het andersom ook kan.",
    body: "In de zorg leer je dat structuur belangrijk is. Maar de structuren die ik geleerd had, waren niet gemaakt voor mijn brein. Ik plande te veel op één dag en deed te veel intakes achter elkaar. Het advies was niet om minder te werken, maar om het anders in te delen. Mijn cliënten zien me nu in blokken van drie afspraken op één dag, met twee dagen ertussen om alles te verwerken. Ik ben nog steeds vol, maar niet meer leeg.",
    channel: "Wisselend, soms chat",
    changed: "Andere werkindeling",
  },
];

function VerhalenPage() {
  return (
    <>
      {/* Intro */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 right-[-15%] h-[420px] w-[420px] rounded-full bg-primary/8 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 left-[-15%] h-[320px] w-[320px] rounded-full bg-highlight/40 blur-3xl" />

        <div className="relative mx-auto max-w-[1240px] px-6 pt-12 pb-12 lg:px-10 lg:pt-20 lg:pb-16">
          <Reveal>
            <span className="eyebrow">Verhalen</span>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="display-xl mt-6 max-w-3xl text-[2.4rem] sm:text-[3rem] lg:text-[3.6rem]">
              Hoe het traject<br />
              bij hen uitpakte.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-foreground/75 lg:text-[18px]">
              Vijf onderneemsters vertellen wat er in hun werk veranderde tijdens en na
              Anders Ondernemen. Geen mooie verhalen, wel concrete dingen die nu anders
              gaan.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Bento grid of stories */}
      <section className="relative mx-auto max-w-[1240px] px-6 pb-16 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-6 lg:gap-6">
          {/* Story 1: wide hero */}
          <Reveal className="lg:col-span-4">
            <StoryCardLarge story={stories[0]} rotate="-rotate-[0.5deg]" />
          </Reveal>

          {/* Story 2: tall card with highlight */}
          <Reveal delay={80} className="lg:col-span-2 lg:row-span-2">
            <StoryCardTall story={stories[1]} rotate="rotate-[0.6deg]" />
          </Reveal>

          {/* Story 3: dark accent card */}
          <Reveal delay={140} className="lg:col-span-2">
            <StoryCardDark story={stories[2]} rotate="-rotate-[0.4deg]" />
          </Reveal>

          {/* Story 4: regular card */}
          <Reveal delay={200} className="lg:col-span-2">
            <StoryCardSmall story={stories[3]} rotate="rotate-[0.3deg]" />
          </Reveal>

          {/* Story 5: wide bottom card */}
          <Reveal delay={260} className="lg:col-span-6">
            <StoryCardWide story={stories[4]} rotate="-rotate-[0.3deg]" />
          </Reveal>
        </div>

        <Reveal delay={120}>
          <p className="mt-10 max-w-2xl text-[13px] leading-relaxed text-foreground/55">
            Deze verhalen zijn met toestemming gedeeld. Namen, leeftijden en beroepen
            zijn aangepast om de privacy van de deelnemers te beschermen. Wat zij in het
            traject hebben ervaren staat ongewijzigd.
          </p>
        </Reveal>
      </section>

      {/* Slot */}
      <section className="relative mx-auto max-w-[1240px] px-6 pb-24 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-foreground p-10 sm:p-14 lg:p-16">
            <div className="pointer-events-none absolute -top-24 -right-24 h-[320px] w-[320px] rounded-full bg-primary/25 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-background/60">
                  Past dit verhaal bij wat jij zoekt?
                </p>
                <h2 className="display-lg mt-3 text-3xl text-background sm:text-4xl">
                  Plan vrijblijvend een kennismaking.
                </h2>
                <p className="mt-5 text-[16px] leading-relaxed text-background/80">
                  Een half uur, op het kanaal dat jij wil. Geen verkoopgesprek, geen
                  verplichting. We kijken samen of het klikt en of mijn aanpak past bij
                  waar jij staat.
                </p>
              </div>
              <div className="lg:col-span-5 lg:text-right">
                <Link
                  to="/contact"
                  className="magnet group inline-flex items-center gap-3 rounded-full bg-background pl-6 pr-2 py-2 text-[15px] font-medium text-foreground"
                >
                  <span>Plan een kennismaking</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground/8 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[1px]">
                    <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

/* ---------- Card variants ---------- */

function Avatar({ story, size = "md" }: { story: Story; size?: "md" | "lg" }) {
  const sizeClass = size === "lg" ? "h-14 w-14 text-[16px]" : "h-11 w-11 text-[13px]";
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full font-semibold tracking-tight ${sizeClass} ${story.avatarBg} ${story.avatarText}`}
      aria-hidden
    >
      {story.initials}
    </div>
  );
}

function PersonLine({ story }: { story: Story }) {
  return (
    <div className="flex items-center gap-3">
      <Avatar story={story} />
      <div className="min-w-0">
        <p className="text-[15px] font-semibold text-foreground">
          {story.name}, {story.age}
        </p>
        <p className="text-[13px] text-foreground/65">
          {story.role} · {story.brain}
        </p>
      </div>
    </div>
  );
}

function MetaPills({ story, dark = false }: { story: Story; dark?: boolean }) {
  const pillCls = dark
    ? "border-background/15 bg-background/5 text-background/80"
    : "border-foreground/10 bg-foreground/[0.03] text-foreground/70";
  return (
    <div className="flex flex-wrap gap-2">
      {story.channel && (
        <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[12px] ${pillCls}`}>
          Kanaal: {story.channel}
        </span>
      )}
      {story.changed && (
        <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[12px] ${pillCls}`}>
          {story.changed}
        </span>
      )}
    </div>
  );
}

function StoryCardLarge({ story, rotate = "" }: { story: Story; rotate?: string }) {
  return (
    <article
      className={`h-full rounded-3xl border border-foreground/8 bg-card p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:rotate-0 hover:shadow-ambient-lg lg:p-10 ${rotate}`}
    >
      <PersonLine story={story} />
      <blockquote className="display-lg mt-6 text-[1.5rem] leading-tight text-foreground sm:text-[1.8rem] lg:text-[2rem]">
        “{story.quote}”
      </blockquote>
      <p className="mt-6 text-[15px] leading-relaxed text-foreground/75">{story.body}</p>
      <div className="mt-7">
        <MetaPills story={story} />
      </div>
    </article>
  );
}

function StoryCardTall({ story, rotate = "" }: { story: Story; rotate?: string }) {
  return (
    <article
      className={`flex h-full flex-col rounded-3xl border border-foreground/8 bg-highlight p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:rotate-0 hover:shadow-ambient-lg lg:p-9 ${rotate}`}
    >
      <PersonLine story={story} />
      <blockquote className="display-lg mt-6 text-[1.4rem] leading-tight text-foreground sm:text-[1.6rem]">
        “{story.quote}”
      </blockquote>
      <p className="mt-5 text-[15px] leading-relaxed text-foreground/75">{story.body}</p>
      <div className="mt-auto pt-7">
        <MetaPills story={story} />
      </div>
    </article>
  );
}

function StoryCardDark({ story, rotate = "" }: { story: Story; rotate?: string }) {
  return (
    <article
      className={`flex h-full flex-col rounded-3xl bg-foreground p-8 text-background transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:rotate-0 hover:shadow-ambient-lg ${rotate}`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background text-foreground text-[13px] font-semibold tracking-tight`}
          aria-hidden
        >
          {story.initials}
        </div>
        <div className="min-w-0">
          <p className="text-[15px] font-semibold text-background">
            {story.name}, {story.age}
          </p>
          <p className="text-[13px] text-background/65">
            {story.role} · {story.brain}
          </p>
        </div>
      </div>
      <blockquote className="display-lg mt-6 text-[1.3rem] leading-tight text-background sm:text-[1.5rem]">
        “{story.quote}”
      </blockquote>
      <p className="mt-5 text-[14px] leading-relaxed text-background/80">{story.body}</p>
      <div className="mt-auto pt-6">
        <MetaPills story={story} dark />
      </div>
    </article>
  );
}

function StoryCardSmall({ story, rotate = "" }: { story: Story; rotate?: string }) {
  return (
    <article
      className={`flex h-full flex-col rounded-3xl border border-foreground/8 bg-secondary p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:rotate-0 hover:shadow-ambient-lg ${rotate}`}
    >
      <PersonLine story={story} />
      <blockquote className="display-lg mt-6 text-[1.3rem] leading-tight text-foreground sm:text-[1.5rem]">
        “{story.quote}”
      </blockquote>
      <p className="mt-5 text-[14px] leading-relaxed text-foreground/75">{story.body}</p>
      <div className="mt-auto pt-6">
        <MetaPills story={story} />
      </div>
    </article>
  );
}

function StoryCardWide({ story, rotate = "" }: { story: Story; rotate?: string }) {
  return (
    <article
      className={`rounded-3xl border border-foreground/8 bg-card p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:rotate-0 hover:shadow-ambient-lg lg:p-10 ${rotate}`}
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Avatar story={story} size="lg" />
          <p className="mt-4 text-[16px] font-semibold text-foreground">
            {story.name}, {story.age}
          </p>
          <p className="text-[13px] text-foreground/65">
            {story.role} · {story.brain}
          </p>
          <div className="mt-5">
            <MetaPills story={story} />
          </div>
        </div>
        <div className="lg:col-span-7">
          <blockquote className="display-lg text-[1.5rem] leading-tight text-foreground sm:text-[1.8rem] lg:text-[2rem]">
            “{story.quote}”
          </blockquote>
          <p className="mt-6 text-[15px] leading-relaxed text-foreground/75">
            {story.body}
          </p>
        </div>
      </div>
    </article>
  );
}
