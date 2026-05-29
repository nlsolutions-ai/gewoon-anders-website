import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
import { MaskReveal } from "@/components/motion";

export const Route = createFileRoute("/themas/zichtbaarheid-netwerken")({
  head: () => ({
    meta: [
      { title: "Zichtbaarheid en netwerken - Gewoon Anders" },
      {
        name: "description",
        content:
          "Hoe je zichtbaar wordt als ondernemer zonder netwerk-events die je dagen kosten, en zonder een online persona die niet bij je past.",
      },
      { property: "og:title", content: "Zichtbaarheid en netwerken" },
      { property: "og:url", content: "/themas/zichtbaarheid-netwerken" },
    ],
    links: [{ rel: "canonical", href: "/themas/zichtbaarheid-netwerken" }],
  }),
  component: ZichtbaarheidPage,
});

function ZichtbaarheidPage() {
  return (
    <>
      <PageHeader
        title="Zichtbaarheid en netwerken."
        intro="Zichtbaar worden is voor veel ondernemers al ingewikkeld. Voor neurodivergente ondernemers komt er een laag bij. De gangbare manieren, netwerkborrels, LinkedIn-posts op gevoel, eindeloos content blijven maken, kosten je vaak meer dan ze opleveren. Dat hoeft niet."
      />

      <section className="mx-auto max-w-3xl px-6 py-12 lg:px-10">
        <FadeIn>
          <MaskReveal as="h2" text="Waarom standaard netwerken vaak niet werkt" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Een netwerk-event is een van de meest overprikkelende settings die je kunt
            bedenken. Veel mensen, veel geluid, veel kort contact dat snel moet zijn.
            Voor een autistisch brein zit daar weinig in waar je iets aan hebt. Voor een
            ADHD-brein duurt het te kort om ergens in te zakken. Bij AuDHD speelt het
            allebei tegelijk.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
            En toch ga je, want het hoort. Daarna ben je twee dagen nergens toe in staat.
            En de opdracht die eruit komt is meestal niet de moeite waard.
          </p>
        </FadeIn>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <FadeIn>
            <MaskReveal as="h2" text="Online speelt iets vergelijkbaars" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
            <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
              Veel ondernemers proberen LinkedIn of socials op de manier waarop anderen
              dat lijken te doen. Korte, vlotte posts, drie keer per week, reageren op
              andermans berichten. Voor de meeste neurodivergente breinen werkt dat niet.
              Je voelt je telkens nét niet jezelf, en je merkt dat je het uitstelt om iets
              te plaatsen.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <FadeIn>
          <MaskReveal as="h2" text="Wat wel werkt" className="display-lg text-[1.7rem] sm:text-[1.9rem] text-foreground" />
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Begin bij vorm. Wat is een vorm waar jouw brein zich goed in voelt? Voor
            sommigen is dat lange teksten op een eigen website. Voor anderen is het een
            podcast in twee opnamesessies per maand. Voor weer anderen is het wekelijkse
            mail aan een lijst van vijftig mensen. Geen van die vormen is per definitie
            beter. De vorm die je volhoudt is de beste voor jou.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
            Werk daarna aan herhaling. Zichtbaarheid is geen sprint van een paar weken.
            Het is een manier waarop mensen je leren kennen over een jaar of twee. Dat
            betekent: kleine porties, vaak, in dezelfde toon.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
            En zoek warme paden. Eén op een. Mensen die jou kennen en je werk delen.
            Klanten die uit eigen beweging zeggen waarom ze terugkomen. Dat schaalt
            langzaam, maar het houdt het meeste van jou heel.
          </p>
        </FadeIn>
      </section>

      <section className="bg-highlight">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <FadeIn>
            <p className="text-[17px] leading-relaxed text-foreground/80">
              In het traject kijken we in pijler vijf naar welk soort zichtbaarheid bij
              jouw bedrijf past. Niet alle zichtbaarheid is groei. En groei is niet voor
              iedereen het doel. Lees ook{" "}
              <Link to="/themas/masking" className="text-primary underline-offset-2 hover:underline">
                Masking in het ondernemen
              </Link>
              , want zichtbaarheid en maskeren raken elkaar vaak.
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
