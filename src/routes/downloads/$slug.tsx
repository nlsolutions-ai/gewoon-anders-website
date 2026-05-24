import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";

type Freebie = {
  title: string;
  intro: string;
  meta: string;
  metaDesc: string;
  content: () => JSX.Element;
};

const freebies: Record<string, Freebie> = {
  energiescan: {
    title: "De Ondernemers-energiescan",
    intro:
      "Achttien stellingen over je werk, verdeeld over vijf pijlers: brein, energie, structuur, grenzen, richting. Geen test, geen score, geen diagnose. Wel een uitslag in gewone taal die je kunt gebruiken.",
    meta: "Ondernemers-energiescan - Gewoon Anders",
    metaDesc:
      "In tien minuten weet je waar in je bedrijf je energie wegloopt en waar je kracht zit. Gratis werkblad voor ADHD-, autisme- en AuDHD-ondernemers.",
    content: () => (
      <>
        <h2 className="text-2xl font-semibold text-foreground">Hoe het werkt</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
          Per pijler lees je drie tot vier stellingen. Bij elke stelling vink je een van
          drie antwoorden aan: klopt vaak, klopt soms, klopt zelden. Daarna lees je per
          pijler een korte uitleg over wat je antwoorden waarschijnlijk betekenen voor
          jouw werkweek. Het is geen score waar een advies uit rolt. Het is een
          beschrijving die je kunt herkennen.
        </p>

        <h3 className="mt-10 text-xl font-semibold text-foreground">Pijler 1. Brein</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-6 text-[16px] leading-relaxed text-foreground/80">
          <li>Ik weet welke taken voor mijn brein makkelijk gaan en welke veel kosten.</li>
          <li>Ik kan dezelfde taak twee dagen achter elkaar even goed doen.</li>
          <li>Bij onverwachte vragen heb ik tijd nodig om weer scherp te worden.</li>
        </ol>

        <h3 className="mt-8 text-xl font-semibold text-foreground">Pijler 2. Energie</h3>
        <ol start={4} className="mt-3 list-decimal space-y-2 pl-6 text-[16px] leading-relaxed text-foreground/80">
          <li>Ik ben na een klantgesprek minstens een uur niet productief.</li>
          <li>Mijn weekenden geven me terug wat de week heeft gekost.</li>
          <li>Ik weet welke taken in mijn werk de meeste energie kosten.</li>
          <li>Ik kan herstellen door iets te doen, niet alleen door niets te doen.</li>
        </ol>

        <h3 className="mt-8 text-xl font-semibold text-foreground">Pijler 3. Structuur</h3>
        <ol start={8} className="mt-3 list-decimal space-y-2 pl-6 text-[16px] leading-relaxed text-foreground/80">
          <li>Ik heb een week die past bij hoe mijn brein in pieken en dalen werkt.</li>
          <li>Mijn planning houdt het langer vol dan drie weken.</li>
          <li>Ik weet wanneer ik op een dag begin en wanneer ik stop.</li>
          <li>Administratie loopt in een eigen ritme, niet als een stress-piek aan het eind van de maand.</li>
        </ol>

        <h3 className="mt-8 text-xl font-semibold text-foreground">Pijler 4. Grenzen</h3>
        <ol start={12} className="mt-3 list-decimal space-y-2 pl-6 text-[16px] leading-relaxed text-foreground/80">
          <li>Ik kan een prijs noemen zonder dat ik er een uur later mee zit.</li>
          <li>Ik zeg nee tegen werk dat niet bij me past, ook als er ruimte in mijn agenda is.</li>
          <li>Mijn klanten weten wanneer ik beschikbaar ben en wanneer niet.</li>
          <li>Ik weet wanneer een klant te veel van mij vraagt.</li>
        </ol>

        <h3 className="mt-8 text-xl font-semibold text-foreground">Pijler 5. Richting</h3>
        <ol start={16} className="mt-3 list-decimal space-y-2 pl-6 text-[16px] leading-relaxed text-foreground/80">
          <li>Ik weet welk werk in mijn bedrijf ik echt zelf wil doen.</li>
          <li>De groei van mijn bedrijf past bij wat ik aankan en wat ik wil.</li>
          <li>Mijn klanten zijn klanten die bij me passen, niet alleen klanten die opdracht geven.</li>
        </ol>

        <h2 className="mt-12 text-2xl font-semibold text-foreground">Hoe je je antwoorden leest</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
          Veel "klopt zelden" in pijler twee wijst meestal op een werkweek die nog niet
          rekent met wat klantcontact je kost. Een paar "klopt vaak" in pijler drie en de
          rest "klopt zelden" wijst op een planning die misschien goed leek toen je hem
          maakte, maar die jouw brein niet draagt. Pijler vier "klopt zelden" zie ik het
          vaakst terug. Daar zit vaak de combinatie van prijs te laag en klantcontact te
          breed.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
          Wat je doet met je uitslag is aan jou. Voor sommigen is dit genoeg om zelf wat
          aan te passen. Anderen bespreken het in een{" "}
          <Link to="/contact" className="text-primary underline-offset-2 hover:underline">
            gratis kennismaking
          </Link>
          .
        </p>
      </>
    ),
  },

  "prijzen-spiekbriefje": {
    title: "Het Prijzen-spiekbriefje",
    intro:
      "Vijf zinnen die je kunt gebruiken in een prijsgesprek. Niet om een script te zijn, wel om iets te hebben waarop je terug kunt vallen als je hoofd op het moment niet helder is.",
    meta: "Prijzen-spiekbriefje - Gewoon Anders",
    metaDesc:
      "Vijf concrete zinnen om je prijs te noemen, te verdedigen en nee te zeggen. Gratis werkblad voor neurodivergente ondernemers.",
    content: () => (
      <>
        <h2 className="text-2xl font-semibold text-foreground">Waarom dit een spiekbriefje is</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
          In een live gesprek met druk wil je brein vooral wegkomen. Zelf bedenken wat je
          gaat zeggen kost dan meer dan je kunt missen. Een paar zinnen die er al staan,
          waarvan je weet dat ze goed in jouw mond liggen, halen het zware werk eruit.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-foreground">Zin 1. Je prijs noemen</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
          "Mijn tarief voor dit type opdracht is X euro per [uur, dagdeel, traject].
          Daar zit Y in. Klopt dat met wat je voor ogen had?"
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">
          Korte, neutrale zin. Geen verontschuldiging. De vraag aan het eind is geen
          twijfel, het is een open ruimte voor de ander om iets te zeggen.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-foreground">Zin 2. Je prijs verdedigen</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
          "Dat tarief past bij hoe ik werk en wat dit type opdracht me kost. Daar onder
          gaan zou betekenen dat ik er minder aandacht aan kan geven, en daar ben jij niet
          mee geholpen."
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">
          De zin maakt expliciet dat een lager tarief geen win is voor de klant, in plaats
          van een verlies voor jou. Beweegt het gesprek weg van prijs naar inhoud.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-foreground">Zin 3. Geen korting geven, zonder gedoe</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
          "Ik werk niet met korting. Wel kan ik kijken of we de opdracht kleiner kunnen
          maken. Dan blijft het tarief gelijk en wordt de totale prijs lager."
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">
          Verschuift de vraag van geld naar scope. Daar heb je veel meer aan, en de klant
          meestal ook.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-foreground">Zin 4. Niet ter plekke beslissen</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
          "Goede vraag. Ik wil daar even rustig op terugkomen. Ik laat je morgen wat ik
          ervan vind."
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">
          Voor de momenten dat je merkt dat je niet helder bent. Geen lange uitleg.
          Eerlijk, beknopt, en je hebt tijd gewonnen.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-foreground">Zin 5. Nee zeggen op een opdracht</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
          "Ik denk dat ik niet de juiste persoon ben voor dit. Inhoudelijk zit het buiten
          mijn beste werk, en daar wil ik eerlijk in zijn. Als je wil, denk ik mee over
          wie het wel goed kan doen."
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">
          Nee, mét respect voor de klant. Het aanbod om mee te denken houdt de relatie
          warm zonder dat je iets aanneemt wat niet past.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-foreground">Tot slot</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
          Pas de zinnen aan tot ze klinken zoals jij praat. Oefen ze hardop. Dat klinkt
          gek. Maar het maakt het verschil tussen "ik weet wat ik wil zeggen" en "ik krijg
          het er ook uit als het moment er is".
        </p>
      </>
    ),
  },

  "masking-check": {
    title: "De Masking-check voor ondernemers",
    intro:
      "Twaalf situaties uit het echte ondernemen. Per situatie noteer je: maskeer ik hier nog? En wat kost het me? Niet om jezelf te beoordelen. Om jezelf te zien.",
    meta: "Masking-check voor ondernemers - Gewoon Anders",
    metaDesc:
      "Twaalf situaties die laten zien waar je in je bedrijf nog maskeert en wat het kost. Gratis werkblad voor autistische en AuDHD-ondernemers.",
    content: () => (
      <>
        <h2 className="text-2xl font-semibold text-foreground">Wat dit werkblad doet</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
          Voor veel autistische en AuDHD-ondernemers gebeurt masking onbewust. Je merkt
          niet dat je het doet, je merkt alleen dat je leeg bent. Dit werkblad maakt het
          zichtbaar door je situaties voor te leggen waar masking vaak in zit. Per
          situatie noteer je drie dingen: doe ik dit hier nog, hoe vaak, en wat kost het
          me. Daarna lees je de samenvatting van jezelf en zie je waar de zwaarste posten
          zitten.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-foreground">De twaalf situaties</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-6 text-[16px] leading-relaxed text-foreground/80">
          <li>Een eerste klantgesprek waarin je je toon en tempo aanpast.</li>
          <li>Een lopend klantgesprek dat langer duurt dan afgesproken, zonder dat je het kunt stoppen.</li>
          <li>Een prijsgesprek waarin je het ongemak van de ander voelt en je prijs verlaagt.</li>
          <li>Een netwerk-event waar je doet alsof je het leuk vindt.</li>
          <li>Een LinkedIn-post die je niet plaatst omdat hij niet klinkt zoals "ondernemers schrijven".</li>
          <li>Een mail die je drie keer herschrijft om te zorgen dat de toon goed valt.</li>
          <li>Een telefoongesprek waarin je niet de tijd hebt die je nodig hebt om scherp te antwoorden.</li>
          <li>Een feedbackgesprek met een klant waar je iets oneens bent maar niets zegt.</li>
          <li>Een vergadering waar je oogcontact maakt om sociaal vlot over te komen.</li>
          <li>Een dag waarop je vooraf hebt besloten "ik ga er fris uitzien", ongeacht hoe je je voelt.</li>
          <li>Een verkoopgesprek waar je enthousiast doet over een aanbod dat je niet helemaal voelt.</li>
          <li>Een afspraak die je nakomt terwijl je systeem schreeuwt dat je niet kunt.</li>
        </ol>

        <h2 className="mt-12 text-2xl font-semibold text-foreground">Per situatie</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
          Noteer voor jezelf:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[16px] leading-relaxed text-foreground/80">
          <li>Komt dit in mijn werk voor? Vaak, soms, zelden.</li>
          <li>Hoe voel ik me direct daarna? In één woord.</li>
          <li>Hoe voel ik me een uur later? In één woord.</li>
          <li>Wat zou een kleinere, eerlijke vorm zijn van wat ik nu doe?</li>
        </ul>

        <h2 className="mt-12 text-2xl font-semibold text-foreground">Wat je hierna kunt zien</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
          Als drie of meer van de twaalf situaties "vaak" en "leeg" of "moe" opleveren,
          weet je waar de grootste energie wegloopt in je werk. Dat is geen oordeel. Het
          is een kaart. Wat je ermee doet, is aan jou. Vaak is de eerste stap een kleinere
          vorm vinden voor twee of drie situaties. Niet stoppen met maskeren. Wel iets
          minder doen waar het te veel kost.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
          Wil je hier verder over praten?{" "}
          <Link to="/contact" className="text-primary underline-offset-2 hover:underline">
            Plan een kennismaking
          </Link>
          . Of lees{" "}
          <Link to="/themas/masking" className="text-primary underline-offset-2 hover:underline">
            de pagina over masking in het ondernemen
          </Link>
          .
        </p>
      </>
    ),
  },

  "mijn-week-mijn-brein": {
    title: "Mijn week, mijn brein",
    intro:
      "Een printbaar overzicht waarmee je een week lang bijhoudt wat je werk je kost en geeft. Geen score, geen app, geen statistiek. Een vel waar je op kunt schrijven.",
    meta: "Mijn week, mijn brein - werkblad - Gewoon Anders",
    metaDesc:
      "Houd een week lang bij waar je energie en focus heen gaan. Gratis printbaar werkblad voor neurodivergente ondernemers.",
    content: () => (
      <>
        <h2 className="text-2xl font-semibold text-foreground">Wat je doet</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
          Eén week lang, drie keer per dag een aantekening van twee minuten. Ochtend,
          middag, eind van de dag. Daarna kijk je terug en zie je je patroon.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-foreground">Per moment noteer je</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[16px] leading-relaxed text-foreground/80">
          <li>Hoe vol mijn hoofd is op een schaal van laag, midden, hoog.</li>
          <li>Hoe scherp mijn focus is op een schaal van laag, midden, hoog.</li>
          <li>Of er overprikkeling zit in mijn lichaam. Ja, een beetje, nee.</li>
          <li>Welke taak ik heb gedaan in het blok hiervoor.</li>
          <li>Of die taak iets opleverde of vooral kostte.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold text-foreground">Per dag noteer je</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[16px] leading-relaxed text-foreground/80">
          <li>Wanneer ik vandaag het scherpst was.</li>
          <li>Welke taak het meeste kostte.</li>
          <li>Welke kleine keuze ik morgen anders kan maken.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold text-foreground">Aan het eind van de week</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
          Lees je hele vel terug en beantwoord drie vragen.
        </p>
        <ol className="mt-4 list-decimal space-y-2 pl-6 text-[16px] leading-relaxed text-foreground/80">
          <li>Op welke twee momenten in de week was ik het scherpst?</li>
          <li>Welke twee taken hebben de meeste energie genomen?</li>
          <li>Wat zou ik volgende week één klein anders willen plannen, op basis hiervan?</li>
        </ol>

        <h2 className="mt-12 text-2xl font-semibold text-foreground">Tips</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
          Print het werkblad en hang het op een plek waar je het ziet. Een telefoon-app
          kun je wegklikken, een vel niet. Vul het niet retro in, maar in het moment, ook
          al duurt het maar twee minuten. En houd je niet aan een idee van een goede
          week. Schrijf wat er is.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
          In het traject{" "}
          <Link to="/traject" className="text-primary underline-offset-2 hover:underline">
            Anders Ondernemen
          </Link>{" "}
          is pijler twee hier helemaal aan gewijd. Wil je het zelf eerst proberen, dat
          kan met dit werkblad.
        </p>
      </>
    ),
  },
};

export const Route = createFileRoute("/downloads/$slug")({
  loader: ({ params }) => {
    const freebie = freebies[params.slug];
    if (!freebie) throw notFound();
    return { freebie, slug: params.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return {
      meta: [
        { title: loaderData.freebie.meta },
        { name: "description", content: loaderData.freebie.metaDesc },
        { property: "og:title", content: loaderData.freebie.meta },
        { property: "og:description", content: loaderData.freebie.metaDesc },
        { property: "og:url", content: `/downloads/${loaderData.slug}` },
      ],
      links: [{ rel: "canonical", href: `/downloads/${loaderData.slug}` }],
    };
  },
  component: FreebiePage,
});

function FreebiePage() {
  const { freebie } = Route.useLoaderData();
  return (
    <>
      <PageHeader title={freebie.title} intro={freebie.intro} />

      <section className="mx-auto max-w-3xl px-6 pb-8 lg:px-10">
        <FadeIn>
          <div className="rounded-2xl bg-highlight p-6">
            <p className="text-[15px] leading-relaxed text-foreground/80">
              Je leest hieronder de volledige inhoud. Wil je het werkblad als PDF in je
              inbox?{" "}
              <Link to="/contact" className="text-primary underline-offset-2 hover:underline">
                Stuur me een mail met de naam van het werkblad
              </Link>
              . Een opt-in formulier hier op de site volgt zodra de e-maillijst staat.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20 lg:px-10">
        <FadeIn>
          <article className="prose-content text-foreground/80">
            <freebie.content />
          </article>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 lg:px-10">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-foreground p-8 text-background lg:p-10">
            <div className="pointer-events-none absolute -top-24 -right-24 h-[280px] w-[280px] rounded-full bg-primary/25 blur-3xl" />
            <div className="relative">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-background/60">
                Liever even samen kijken
              </p>
              <h2 className="display-lg mt-3 text-[1.6rem] sm:text-[1.9rem]">
                Plan vrijblijvend een kennismaking.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-background/80">
                Werkblad doorgenomen en wil je het bespreken? Een kennismaking duurt een
                half uur, op het kanaal dat jij wil. Geen verkoopgesprek, geen
                verplichting. Je vertelt waar je tegenaan loopt, ik luister en denk mee.
                Daarna beslis jij of je verder wil.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="magnet group inline-flex items-center gap-3 rounded-full bg-background pl-5 pr-1.5 py-1.5 text-[14px] font-medium text-foreground"
                >
                  <span>Plan een kennismaking</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/8 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[1px]">
                    <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden />
                  </span>
                </Link>
                <Link
                  to="/downloads"
                  className="magnet inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/5 px-4 py-2 text-[14px] font-medium text-background hover:bg-background/10"
                >
                  Andere werkbladen
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
