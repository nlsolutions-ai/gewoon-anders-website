import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacyverklaring - Gewoon Anders" },
      {
        name: "description",
        content:
          "Hoe Gewoon Anders met je gegevens omgaat. Welke gegevens, waarom, hoe lang, en welke rechten je hebt.",
      },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="Hoe ik met je gegevens omga."
        intro="Deze verklaring legt uit welke gegevens ik verzamel, waarom, hoe lang ik ze bewaar en welke rechten je hebt. In gewone taal. Laatste wijziging: mei 2026."
      />

      <section className="mx-auto max-w-3xl px-6 pb-24 lg:px-10">
        <article className="space-y-12 text-[16px] leading-relaxed text-foreground/80">
          <Block title="1. Wie verwerkt je gegevens">
            <p>
              Gewoon Anders is een onderdeel van NorthernLights Solutions, gevestigd in
              België, ingeschreven onder ondernemingsnummer 1037.471.022 met btw-nummer
              BE1037471022. NorthernLights Solutions is verwerkingsverantwoordelijke voor
              de gegevens die je achterlaat via deze website, het contactformulier, of
              tijdens coaching.
            </p>
            <p>
              Vragen over deze verklaring of over hoe ik met jouw gegevens omga, kun je
              stellen via{" "}
              <a
                className="text-primary link-underline"
                href="mailto:hallo@gewoonanders.nu"
              >
                hallo@gewoonanders.nu
              </a>
              .
            </p>
          </Block>

          <Block title="2. Welke gegevens ik verwerk">
            <p>Afhankelijk van het contactmoment kunnen dat zijn:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong>Contactgegevens</strong>: naam, e-mailadres, telefoonnummer als je
                dat zelf deelt.
              </li>
              <li>
                <strong>Inhoud van je bericht</strong>: wat je in het contactformulier of
                in een mail schrijft, inclusief je vraag of situatie.
              </li>
              <li>
                <strong>Sessie-informatie</strong>: korte aantekeningen die ik tussen
                sessies bewaar om context te houden. Geen verbatim transcripten en geen
                opnames.
              </li>
              <li>
                <strong>Factuurgegevens</strong>: naam, factuuradres, ondernemingsnummer
                of btw-nummer als dat van toepassing is.
              </li>
              <li>
                <strong>E-maillijst</strong>: e-mailadres en naam als je een freebie hebt
                gedownload of je hebt aangemeld voor de mailreeks.
              </li>
              <li>
                <strong>Technische gegevens van de website</strong>: standaard logging van
                de hosting (zoals geanonimiseerd IP en tijdstip) en alleen strikt
                noodzakelijke cookies voor het functioneren van de site.
              </li>
            </ul>
            <p>
              Ik vraag geen bijzondere persoonsgegevens (zoals medische diagnoses). Wat je
              vrijwillig deelt in een sessie of in je bericht, behandel ik vertrouwelijk
              en sla ik niet meer op dan nodig.
            </p>
          </Block>

          <Block title="3. Waarvoor ik je gegevens gebruik">
            <ul className="ml-5 list-disc space-y-2">
              <li>Contact opnemen na een aanvraag voor een kennismaking of vraag.</li>
              <li>Een coachingstraject uitvoeren en sessies plannen.</li>
              <li>Facturen opstellen en de boekhouding bijhouden.</li>
              <li>
                Je een freebie sturen waar je voor hebt getekend en, als je daarvoor
                instemming hebt gegeven, een korte serie opvolgmails.
              </li>
              <li>Voldoen aan wettelijke verplichtingen, bijvoorbeeld op het gebied van fiscale bewaarplicht.</li>
              <li>De website veilig en bruikbaar houden.</li>
            </ul>
          </Block>

          <Block title="4. Op welke grondslag">
            <p>Ik baseer de verwerking op een van de volgende AVG-grondslagen:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong>Uitvoering van een overeenkomst</strong>: voor de coachingdienst
                en het contact eromheen.
              </li>
              <li>
                <strong>Toestemming</strong>: voor het versturen van de mailreeks na een
                freebie. Je kunt die toestemming op elk moment intrekken via de
                uitschrijflink onderin elke mail.
              </li>
              <li>
                <strong>Wettelijke verplichting</strong>: voor administratie en fiscale
                bewaarplicht.
              </li>
              <li>
                <strong>Gerechtvaardigd belang</strong>: voor minimale logging die de
                website veilig houdt en voor het beantwoorden van losse vragen.
              </li>
            </ul>
          </Block>

          <Block title="5. Hoe lang ik je gegevens bewaar">
            <ul className="ml-5 list-disc space-y-2">
              <li>
                Contact- en sessiegegevens bewaar ik tot maximaal twee jaar na ons laatste
                contact, tenzij je vraagt om eerdere verwijdering.
              </li>
              <li>
                Factuurgegevens en boekhoudkundige stukken bewaar ik zeven jaar, conform
                de fiscale bewaarplicht.
              </li>
              <li>
                Inschrijvingen op de e-maillijst blijven actief totdat je je uitschrijft.
                Daarna verwijder ik je e-mailadres binnen dertig dagen uit het
                marketingsysteem.
              </li>
              <li>
                Loggegevens van de hosting bewaar ik niet langer dan technisch noodzakelijk
                is.
              </li>
            </ul>
          </Block>

          <Block title="6. Met wie ik gegevens deel">
            <p>
              Ik verkoop, verhuur of deel je gegevens niet voor reclamedoeleinden. Voor
              bepaalde diensten werk ik met externe verwerkers, die alleen toegang krijgen
              tot de gegevens die nodig zijn voor hun taak en daarvoor een
              verwerkersovereenkomst hebben getekend:
            </p>
            <ul className="ml-5 list-disc space-y-2">
              <li>De hostingpartij van deze website.</li>
              <li>Een mailprovider voor zakelijke en transactionele mails.</li>
              <li>Een e-mailmarketingdienst voor de freebie-mailreeks.</li>
              <li>Een boekhouder voor het opmaken van de jaarrekening.</li>
              <li>Een planningstool voor het inplannen van sessies.</li>
            </ul>
            <p>
              Op verzoek deel ik welke leveranciers op dit moment in gebruik zijn. Voor
              gegevens die buiten de EER worden verwerkt, hanteer ik de standaard
              contractsbepalingen of een ander geldig mechanisme zoals voorzien door de
              AVG.
            </p>
          </Block>

          <Block title="7. Beveiliging">
            <p>
              Ik tref technische en organisatorische maatregelen om je gegevens te
              beschermen tegen verlies of onrechtmatige verwerking. Concreet: sterke
              wachtwoorden, tweefactorauthenticatie op de belangrijkste systemen,
              versleuteling waar mogelijk, en een beperkt aantal mensen met toegang. Geen
              systeem is honderd procent veilig. Als er een datalek ontstaat dat een
              risico vormt voor jouw rechten, meld ik dat binnen de wettelijke termijn aan
              de bevoegde autoriteit en, waar nodig, aan jou.
            </p>
          </Block>

          <Block title="8. Jouw rechten">
            <p>Je hebt onder de AVG de volgende rechten:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong>Recht op inzage</strong> in welke gegevens ik van je verwerk.
              </li>
              <li>
                <strong>Recht op rectificatie</strong> als gegevens onjuist of onvolledig
                zijn.
              </li>
              <li>
                <strong>Recht op gegevenswissing</strong>, voor zover er geen wettelijke
                bewaarplicht geldt.
              </li>
              <li>
                <strong>Recht op beperking</strong> van de verwerking onder bepaalde
                omstandigheden.
              </li>
              <li>
                <strong>Recht op overdraagbaarheid</strong> van de gegevens die je zelf
                hebt aangeleverd.
              </li>
              <li>
                <strong>Recht van bezwaar</strong> tegen verwerking op basis van
                gerechtvaardigd belang.
              </li>
              <li>
                <strong>Recht om toestemming in te trekken</strong>, met name voor de
                mailreeks.
              </li>
            </ul>
            <p>
              Stuur je verzoek naar{" "}
              <a
                className="text-primary link-underline"
                href="mailto:hallo@gewoonanders.nu"
              >
                hallo@gewoonanders.nu
              </a>
              . Ik reageer binnen een maand. Ben je het niet eens met hoe ik je verzoek
              afhandel, dan kun je een klacht indienen bij de bevoegde
              gegevensbeschermingsautoriteit. In België is dat de Gegevensbeschermings­autoriteit
              (gegevensbeschermingsautoriteit.be).
            </p>
          </Block>

          <Block title="9. Cookies">
            <p>
              Deze website gebruikt op dit moment alleen strikt noodzakelijke cookies en
              functioneel-technische opslag die nodig zijn om de site te laten werken.
              Geen tracking, geen advertenties van derden, geen profilering. Als ik in de
              toekomst analytische of marketing-cookies wil inzetten, vraag ik daar
              vooraf je toestemming voor via een cookiebanner.
            </p>
          </Block>

          <Block title="10. Wijzigingen">
            <p>
              Deze verklaring kan veranderen wanneer de dienst of de wetgeving daarom
              vraagt. De meest actuele versie staat altijd op deze pagina. Bij
              substantiële wijzigingen die jou direct raken, breng ik je daarvan op de
              hoogte.
            </p>
            <p className="text-[14px] text-foreground/60">
              Versie van mei 2026. Verwerkingsverantwoordelijke: NorthernLights Solutions,
              ondernemingsnummer 1037.471.022, btw-nummer BE1037471022.
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
