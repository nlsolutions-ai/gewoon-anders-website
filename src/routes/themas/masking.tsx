import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/themas/masking")({
  head: () => ({
    meta: [
      { title: "Masking in het ondernemen - Gewoon Anders" },
      {
        name: "description",
        content:
          "Wat masking is in een ondernemerscontext, hoe je het herkent in klantgesprekken en netwerken, en waarom het je bedrijf op lange termijn meer kost dan je denkt.",
      },
      { property: "og:title", content: "Masking in het ondernemen" },
      {
        property: "og:description",
        content: "Hoe masking je energie, prijs en richting in je bedrijf onzichtbaar afpakt.",
      },
      { property: "og:url", content: "/themas/masking" },
    ],
    links: [{ rel: "canonical", href: "/themas/masking" }],
  }),
  component: MaskingPage,
});

function MaskingPage() {
  return (
    <>
      <PageHeader
        title="Masking in het ondernemen."
        intro="Veel autistische en AuDHD-ondernemers maskeren. Niet omdat ze willen liegen, maar omdat ze geleerd hebben dat het anders niet werkt. Op deze pagina leg ik uit wat dat is, hoe het zich uit in je bedrijf, en waarom het je meer kost dan een paar uur per week."
      />

      <section className="mx-auto max-w-3xl px-6 py-12 lg:px-10">
        <FadeIn>
          <h2 className="text-2xl font-semibold text-foreground">Wat masking is, in mijn woorden</h2>
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Masking is het wegstoppen van wat je echt voelt of nodig hebt, en daarvoor in de
            plaats laten zien wat je denkt dat de ander wil zien. Voor een autistisch of
            AuDHD-brein gaat dat verder dan beleefdheid. Je past je oogcontact aan. Je laat
            niet zien dat het licht in de vergaderruimte je hoofd vol maakt. Je houdt een
            grap binnen omdat je niet zeker weet of die in deze setting werkt. Je antwoordt
            in de toon waarvan je inschat dat hij gepast is, ook al kost dat moeite.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
            Bij veel mensen begint dat als kind. Je leert het zonder erover na te denken.
            Zo gewoon, dat je er pas achter komt dat je het doet als je een keer per ongeluk
            stopt. En dan voelt het ineens vreemd, terwijl het altijd je normaal was.
          </p>
        </FadeIn>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-foreground">Hoe het zich uit in je bedrijf</h2>
            <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
              In je werk merk je het vaak pas achteraf. Tijdens een klantgesprek loopt
              het soepel, je bent vriendelijk, je geeft antwoord, je krijgt de opdracht.
              Maar zodra je ophangt is je hoofd leeg en je lichaam zwaar. Je had het
              gevoel dat je gewoon jezelf was. En toch heeft het je meer gekost dan een
              ochtend hard werken.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
              Een paar plekken waar je het bij ondernemers vaak ziet terugkomen:
            </p>
            <ul className="mt-5 space-y-3 text-[17px] leading-relaxed text-foreground/80">
              <li>
                <strong className="font-semibold text-foreground">In klantgesprekken.</strong>{" "}
                Je past je toon, snelheid en woordkeus aan op de ander. Soms zo precies dat je
                de jouwe even kwijt bent.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Bij prijsgesprekken.</strong>{" "}
                Je voelt aarzeling van de ander en haalt liever je prijs naar beneden dan dat
                je het ongemak voelt. Je noemt het pragmatisch. Het is vaak masking.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Op netwerk-events.</strong>{" "}
                Je doet alsof je het leuk vindt, terwijl je het bijhoudt op pure
                wilskracht. Daarna ben je twee dagen onbruikbaar.
              </li>
              <li>
                <strong className="font-semibold text-foreground">In e-mails.</strong>{" "}
                Je herschrijft een mail drie keer om te zorgen dat je toon precies goed valt.
                Een minuutje wordt twintig.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Op je website en LinkedIn.</strong>{" "}
                Je tekst klinkt als iemand anders, want je hebt opgeschreven wat je dacht dat
                "ondernemers schrijven". De klanten die je trekt passen vaak niet bij jou.
              </li>
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <FadeIn>
          <h2 className="text-2xl font-semibold text-foreground">Wat het je kost</h2>
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Mensen om je heen zien meestal niets. Dat is precies het probleem. Wie goed
            maskeert oogt rustig. Je krijgt vaak te horen dat je het zo goed doet. En
            ondertussen klopt er iets niet, alleen kun je niet altijd uitleggen wat.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
            De prijs zit op vier plekken die ik in mijn coaching steeds weer terugzie. Je
            energie loopt sneller leeg dan voor mensen om je heen logisch lijkt. Je prijs
            blijft te laag, want elk gesprek waarin je de prijs moet verdedigen kost veel
            meer dan het oplevert. Je trekt klanten aan die bij de versie passen die je
            laat zien, niet bij jou. En je verliest na verloop van tijd het zicht op wat
            jij eigenlijk wil. Niet wat de markt wil, niet wat je hoort te willen. Wat jij
            wil.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
            Veel ondernemers die ik begeleid komen pas in beeld als die vier dingen samen
            knellen. Soms is er een burn-out aan de rand. Soms is het een rustiger besef
            dat er iets niet klopt aan de manier waarop ze hun bedrijf hebben opgebouwd.
          </p>
        </FadeIn>
      </section>

      <section className="bg-highlight">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-foreground">Hoe ik dit van twee kanten ken</h2>
            <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
              Ik ben zelf neurodivergent. Ik heb het ook gedaan, jaren. Voor een deel doe ik
              het nog. Je leert het niet zomaar af.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
              Daarnaast ben ik al ruim achttien jaar samen met mijn vrouw. Zij kreeg pas op
              latere leeftijd de diagnose AuDHD. In die jaren voor de diagnose heb ik van
              dichtbij gezien wat masking met iemand doet als niemand, ook jijzelf niet,
              ziet dat het gebeurt. Het slijt mensen van binnenuit. Ze raken niet kwaad,
              ze raken op. Dat is een ander beeld dan veel mensen ervan hebben.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
              Wat ik daar geleerd heb neem ik mee in elk traject. Niet als theorie. Als
              herkenning.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <FadeIn>
          <h2 className="text-2xl font-semibold text-foreground">Wat we hiermee doen in het traject</h2>
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
            Stoppen met maskeren is geen schakelaar. Bij een paar dingen kan het wel, bij
            andere is dat onhandig of onveilig. In het traject Gewoon Anders Ondernemen kijken we
            per situatie. Waar in je bedrijf doe je het? Waar kost het je meer dan het je
            oplevert? Waar zou een kleine, concrete andere keuze al genoeg zijn?
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
            We werken niet aan een nieuw, ongemaskerd jij in acht weken. We werken aan een
            bedrijf waarin je minder hoeft. Een werkweek die ruimte laat voor wat masking
            kost. Klantcontact op het kanaal waarop je het beste denkt. Prijsgesprekken op
            een manier die jouw brein niet leegtrekt. Klanten die bij jou passen, niet bij
            de versie van jou die je optilt voor de camera.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
            En als je daarna nog steeds maskeert in sommige situaties, dan is dat een
            keuze. Geen reflex. Dat scheelt enorm.
          </p>
        </FadeIn>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-10">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-foreground">
              Herken je dit en wil je het eens rustig bespreken?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-foreground/80">
              Plan een gratis kennismaking van een half uur op het kanaal dat jij wil. Je
              hoeft niets voor te bereiden, ook geen verhaal. Je hoeft alleen te beginnen.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground hover:bg-primary/90"
              >
                Plan een kennismaking
              </Link>
              <Link
                to="/masking-check"
                className="inline-flex items-center justify-center rounded-xl border border-foreground/15 bg-background px-6 py-3.5 text-base font-medium text-foreground hover:bg-secondary"
              >
                Doe eerst de Masking-check
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
