import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/voorwaarden")({
  head: () => ({
    meta: [
      { title: "Algemene voorwaarden - Gewoon Anders" },
      {
        name: "description",
        content:
          "De algemene voorwaarden voor coaching bij Gewoon Anders. Helder over wat we wel en niet doen, prijzen, annulering en aansprakelijkheid.",
      },
      { property: "og:url", content: "/voorwaarden" },
    ],
    links: [{ rel: "canonical", href: "/voorwaarden" }],
  }),
  component: VoorwaardenPage,
});

function VoorwaardenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Algemene voorwaarden"
        title="De afspraken op een rij."
        intro="Geen kleine lettertjes. Hieronder staat wat we afspreken als je een coachingstraject afneemt of een losse sessie boekt. Laatste wijziging: mei 2026."
      />

      <section className="mx-auto max-w-3xl px-6 pb-24 lg:px-10">
        <article className="space-y-12 text-[16px] leading-relaxed text-foreground/80">
          <Block title="1. Wie is wie">
            <p>
              <strong>De coach.</strong> Gewoon Anders is een onderdeel van NorthernLights
              Solutions, gevestigd in België, ondernemingsnummer 1037.471.022, btw-nummer
              BE1037471022. Contact via{" "}
              <a
                className="text-primary link-underline"
                href="mailto:hallo@gewoonanders.nu"
              >
                hallo@gewoonanders.nu
              </a>
              .
            </p>
            <p>
              <strong>De deelnemer.</strong> Een ondernemer (zzp'er, eigenaar of vennoot
              van een onderneming) die een traject of sessie afneemt. Bij een boeking ga
              je akkoord met deze voorwaarden.
            </p>
            <p>
              Deze voorwaarden gelden voor alle aanbiedingen, offertes, overeenkomsten en
              diensten van Gewoon Anders, tenzij schriftelijk anders is afgesproken.
            </p>
          </Block>

          <Block title="2. Wat coaching bij Gewoon Anders is, en wat niet">
            <p>
              Coaching bij Gewoon Anders is zakelijke begeleiding voor ondernemers met een
              ADHD-, autisme- of AuDHD-brein. Het doel is je werk en je bedrijf zo in te
              richten dat het past bij hoe jouw brein werkt. Het is praktisch en
              toekomstgericht.
            </p>
            <p>
              Coaching is geen zorg en geen therapie. Er worden geen diagnoses gesteld,
              geen verklaringen afgegeven, geen behandelplannen opgesteld en geen
              medicatie voorgeschreven. Bij een zorgvraag verwijs ik je warm door naar de
              juiste plek.
            </p>
            <p>
              Bij crisis ben ik geen aanspreekpunt. Voor acute hulp neem je contact op met
              je huisarts, de crisisdienst van je regio of een vergelijkbare instantie.
            </p>
          </Block>

          <Block title="3. Hoe een traject werkt">
            <p>
              Een volledig traject Gewoon Anders Ondernemen bestaat uit acht sessies van zestig
              minuten, verspreid over ongeveer vier maanden. Een verkorte variant (Anders
              Ondernemen Kort) bestaat uit vier sessies. Per sessie kies je het kanaal:
              videobellen, bellen zonder beeld, live chatten of een mailsessie.
            </p>
            <p>
              Voor een mailsessie geldt een vaste vorm: één uitgewerkte mail van jou, één
              uitgewerkte reactie van mij binnen drie werkdagen. Dat telt samen als één
              sessie. Een mailsessie is geen open draad.
            </p>
            <p>
              Tussen sessies door is er een beperkt mailkanaal voor korte vragen. Daar
              reageer ik op vaste momenten binnen drie werkdagen. Het is geen crisisdienst
              en geen 24/7 beschikbaarheid.
            </p>
            <p>
              We plannen sessies in overleg, met respect voor jouw tempo. Halverwege het
              traject kijken we kort terug en bij of het tempo nog past.
            </p>
          </Block>

          <Block title="4. Aanmelden en kennismaking">
            <p>
              Voor een traject of losse sessie volgt eerst een gratis kennismaking van
              dertig minuten op het kanaal dat jij kiest. Daarin kijken we samen of het
              klikt en of mijn aanpak bij jouw vraag past. Aan de kennismaking zijn geen
              kosten en geen verplichtingen verbonden.
            </p>
            <p>
              Na de kennismaking krijg je, als we tot een traject overgaan, een
              schriftelijke bevestiging met de gemaakte afspraken, de prijs en deze
              voorwaarden. De overeenkomst komt tot stand op het moment dat je die
              bevestiging accepteert.
            </p>
          </Block>

          <Block title="5. Prijzen en betaling">
            <ul className="ml-5 list-disc space-y-2">
              <li>Gewoon Anders Ondernemen, acht sessies: 1.450 euro inclusief btw.</li>
              <li>
                Gespreid betalen: vier maandelijkse termijnen van 395 euro inclusief btw,
                totaal 1.580 euro inclusief btw.
              </li>
              <li>Gewoon Anders Ondernemen Kort, vier sessies: 795 euro inclusief btw.</li>
              <li>Losse vervolgsessie na een traject: 175 euro inclusief btw per sessie.</li>
            </ul>
            <p>
              Alle bedragen op deze site en in offertes zijn inclusief btw. Voor
              ondernemers gevestigd in België geldt het Belgische btw-regime. Voor
              ondernemers in andere EU-lidstaten of daarbuiten worden facturen opgesteld
              volgens de geldende regels rond intracommunautaire of internationale
              dienstverlening; in dat geval kan de btw-behandeling op de factuur afwijken.
            </p>
            <p>
              De factuur volgt na de eerste sessie of bij gespreid betalen per termijn.
              Betalingstermijn is veertien dagen, tenzij anders afgesproken. Bij
              uitblijven van betaling stuur ik een herinnering, daarna een aanmaning. Op
              dat moment kunnen wettelijk toegestane kosten worden aangerekend.
            </p>
            <p>
              Zakelijke coaching is voor ondernemers doorgaans aftrekbaar als
              bedrijfskosten. Of dat in jouw specifieke situatie geldt, vraag je na bij je
              boekhouder. Gewoon Anders geeft geen belastingadvies.
            </p>
          </Block>

          <Block title="6. Annulering, verzetten, no-show">
            <p>
              <strong>Verzetten van een sessie.</strong> Tot 24 uur voor de sessie kun je
              kosteloos verzetten. Daarbinnen reken ik de sessie als gedaan, tenzij er
              sprake is van overmacht. Dat lossen we dan in overleg op.
            </p>
            <p>
              <strong>Tussentijds beëindigen door deelnemer.</strong> Je kunt het traject
              tussentijds beëindigen. Je betaalt dan voor de sessies die je hebt
              afgenomen, plus eventueel een lopende termijn. Restitutie voor niet-genoten
              sessies binnen een lopend pakket vindt plaats binnen redelijke grenzen en
              naar evenredigheid.
            </p>
            <p>
              <strong>Beëindigen door coach.</strong> In uitzonderlijke gevallen kan ik
              een traject niet voortzetten, bijvoorbeeld als de coachvraag niet langer
              binnen mijn expertise valt. In dat geval verwijs ik warm door en wordt het
              eventueel teveel betaalde bedrag teruggestort.
            </p>
            <p>
              <strong>Herroepingsrecht voor consumenten.</strong> Voor zover deze
              overeenkomst wordt gesloten met een consument (geen ondernemer), geldt het
              wettelijk herroepingsrecht van veertien dagen. Bij dienstverlening die met
              jouw uitdrukkelijke instemming binnen die termijn aanvangt, vervalt het
              herroepingsrecht voor het reeds uitgevoerde deel.
            </p>
          </Block>

          <Block title="7. Wat je van mij mag verwachten">
            <ul className="ml-5 list-disc space-y-2">
              <li>
                Een respectvolle, nuchtere begeleiding zonder oordeel over jouw brein of
                je tempo.
              </li>
              <li>
                Voorbereiding op elke sessie en een uitgewerkte reactie bij mailsessies
                binnen de afgesproken termijn.
              </li>
              <li>Geheimhouding van wat je in een sessie deelt (zie punt 9).</li>
              <li>Een eerlijke verwijzing als coaching niet de juiste plek is.</li>
            </ul>
          </Block>

          <Block title="8. Wat ik van jou vraag">
            <ul className="ml-5 list-disc space-y-2">
              <li>Eerlijke communicatie over wat speelt en wat werkt.</li>
              <li>
                Tijdig laten weten als een sessie niet door kan, zoals onder annulering
                staat.
              </li>
              <li>Betaling binnen de afgesproken termijn.</li>
              <li>
                Begrip dat ik geen 24/7 beschikbaarheid bied en bij dringende zorg
                doorverwijs.
              </li>
            </ul>
          </Block>

          <Block title="9. Geheimhouding">
            <p>
              Alles wat je in een sessie of in een uitwisseling tussen sessies deelt,
              behandel ik vertrouwelijk. Ik deel niets met derden, tenzij je daar
              uitdrukkelijk toestemming voor geeft, of tenzij een wettelijke verplichting
              dat vereist.
            </p>
            <p>
              Voor casuïstiek-bespreking met collega-coaches (intervisie) gebruik ik
              alleen geanonimiseerde informatie zonder herleidbare details. Je kunt daar
              vooraf bezwaar tegen maken.
            </p>
          </Block>

          <Block title="10. Aansprakelijkheid">
            <p>
              Coaching is een traject waarin jij zelf keuzes maakt over je werk en je
              bedrijf. Ik denk mee, geef perspectief en help bij de uitvoering, maar de
              uiteindelijke beslissingen liggen bij jou. Ik ben niet aansprakelijk voor
              indirecte schade, gevolgschade, gederfde inkomsten of immateriële schade.
            </p>
            <p>
              Mijn aansprakelijkheid voor directe schade is beperkt tot het bedrag dat in
              de zes maanden voorafgaand aan de schade door jou is betaald voor de
              dienstverlening. Voor zover wettelijk toegestaan vervalt elke aanspraak één
              jaar na het ontstaan van de schade.
            </p>
            <p>
              Bij overmacht (waaronder ziekte, technische storingen of andere
              omstandigheden buiten mijn invloed) ben ik gerechtigd nakoming op te
              schorten zonder dat dit een grond voor schadevergoeding oplevert. We zoeken
              dan samen naar een redelijke oplossing.
            </p>
          </Block>

          <Block title="11. Klachten">
            <p>
              Ben je ergens niet tevreden over, laat het me dan zo snel mogelijk weten via{" "}
              <a
                className="text-primary link-underline"
                href="mailto:hallo@gewoonanders.nu"
              >
                hallo@gewoonanders.nu
              </a>
              . Ik reageer binnen vijf werkdagen en zoek samen met jou naar een passende
              oplossing.
            </p>
            <p>
              Komen we er samen niet uit, dan kun je terecht bij een bevoegde rechter
              zoals onder punt 13 omschreven.
            </p>
          </Block>

          <Block title="12. Intellectueel eigendom">
            <p>
              Werkmateriaal dat ik ter beschikking stel (werkbladen, oefeningen, freebies,
              blogartikelen, het Gewoon Anders Ondernemen Plan) is auteursrechtelijk beschermd.
              Je mag het gebruiken in je eigen bedrijfsvoering. Doorverkopen, publiceren
              of verspreiden onder eigen naam is niet toegestaan zonder schriftelijke
              toestemming.
            </p>
            <p>
              Het uiteindelijke Gewoon Anders Ondernemen Plan dat we samen vormgeven, is van
              jou. Je mag er vrij mee verder werken, ook na het traject.
            </p>
          </Block>

          <Block title="13. Toepasselijk recht en bevoegde rechter">
            <p>
              Op deze overeenkomst is Belgisch recht van toepassing. Geschillen die niet
              in der minne kunnen worden opgelost, worden voorgelegd aan de bevoegde
              rechtbank van het arrondissement waarin Gewoon Anders is gevestigd, tenzij
              de wet dwingend een andere rechter aanwijst.
            </p>
          </Block>

          <Block title="14. Wijzigingen">
            <p>
              Deze voorwaarden kunnen veranderen. Voor lopende trajecten geldt de versie
              die van kracht was op het moment van boeken. Op nieuwe boekingen geldt de
              meest recente versie zoals gepubliceerd op deze pagina.
            </p>
            <p className="text-[14px] text-foreground/60">
              Versie van mei 2026. NorthernLights Solutions, ondernemingsnummer
              1037.471.022, btw-nummer BE1037471022.
            </p>
          </Block>
        </article>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-foreground sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}
