export type Block =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "quote"; text: string }
  | { kind: "link-row"; text: string; href: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  readingTime: string;
  content: Block[];
};

export const posts: Post[] = [
  // Masking-cluster
  {
    slug: "onzichtbare-uitputting-klantgesprek",
    title: "Onzichtbare uitputting: waarom een goed klantgesprek je dagen kost",
    description:
      "Hoe het komt dat een klantgesprek dat soepel verliep en waar je tevreden uit kwam, je daarna een of twee dagen onbruikbaar maakt. En wat eraan te doen is.",
    excerpt:
      "Het gesprek ging goed. Toch ben je daarna leeg. Dat is niet vreemd. Hier is wat er onder zit.",
    category: "Masking",
    readingTime: "8 min",
    content: [
      {
        kind: "p",
        text: "Een klant heeft net opgehangen, of de videocall is uit. Het ging goed. Er komt een opdracht uit. Je was vriendelijk, je was scherp, je hebt gezegd wat je wilde zeggen. En toch lig je twintig minuten later op de bank en kun je niks meer doen vandaag. Niet eens een mail beantwoorden. Soms duurt het tot de volgende ochtend, soms langer.",
      },
      {
        kind: "p",
        text: "Voor wie dit herkent, dit stuk. Ik ga uitleggen waar die uitputting vandaan komt en waarom hij vaker bij neurodivergente ondernemers terugkomt dan bij anderen. En ik geef wat ik in mijn coaching steeds weer terugzie aan dingen die echt helpen.",
      },
      { kind: "h2", text: "Wat er gebeurt tijdens dat gesprek" },
      {
        kind: "p",
        text: "Tijdens een klantgesprek doe je drie dingen tegelijk. Je luistert naar wat de klant zegt en wat hij of zij eigenlijk vraagt. Je denkt aan het werk: kan ik dit, wat ga ik bieden, wat gaat het kosten. En je houdt jezelf zo dat het sociaal vlot loopt. Toon, oogcontact, glimlach op de juiste plek, pauzes die niet ongemakkelijk worden.",
      },
      {
        kind: "p",
        text: "Voor neurotypische ondernemers gaat dat derde meestal vanzelf. Voor veel autistische en AuDHD-ondernemers niet. Het wordt gedaan, maar het is werk. Dat zie je aan de buitenkant niet, dat is precies het punt van masking.",
      },
      {
        kind: "p",
        text: "Daar komt nog iets bij. Veel neurodivergente breinen nemen meer informatie op dan strikt nodig. Toonverandering bij een vraag over geld. Een korte stilte die misschien iets betekent of misschien niet. Het achtergrondgeluid van het kantoor. Allemaal binnen, allemaal verwerken.",
      },
      { kind: "h2", text: "Waarom het pas later voelt" },
      {
        kind: "p",
        text: "Tijdens het gesprek staat er adrenaline op. Je systeem houdt het goed vol terwijl het moet. Pas als het gesprek voorbij is, mag het loslaten. En dan komt alles wat opgespaard was naar boven. De vermoeidheid die er al was. De prikkels die nog zaten te wachten op verwerking. Een stuk leegte.",
      },
      {
        kind: "p",
        text: "Veel mensen voelen dat aan als een crash. Een paar uur niets kunnen. Geluid wordt scherper, licht feller, een kort berichtje voelt als een opdracht. Dat is geen overdrijving. Je systeem zegt: eerst dit verwerken voor ik weer mee kan.",
      },
      { kind: "h2", text: "Wat het op de lange termijn kost" },
      {
        kind: "p",
        text: "Eén gesprek per twee weken, prima. Drie gesprekken op één dag, week over zeep. Daar zit het probleem voor veel ondernemers. Je agenda is opgebouwd alsof elk gesprek ongeveer even duur is. Voor jouw brein is dat niet zo. Een gesprek over een lopende opdracht met een vaste klant kost minder dan een eerste kennismaking. Een mailwissel met een opdrachtgever kost minder dan een videocall.",
      },
      {
        kind: "p",
        text: "Wie dat niet meeneemt in zijn planning, raakt langzaam op. Niet door overwerk. Door onzichtbare optelsommen die nooit ergens in een spreadsheet staan.",
      },
      { kind: "h2", text: "Wat helpt" },
      {
        kind: "p",
        text: "Ik geef hieronder geen recept. Ik geef wat in trajecten van mij vaak terugkomt en blijkt te werken voor het brein van de mensen die ik begeleid.",
      },
      {
        kind: "ul",
        items: [
          "Plan niet twee zware klantgesprekken op één dag. Liever twee dagen met een gesprek, dan een dag met twee.",
          "Bouw een rustblok in na een gesprek. Geen telefoon, geen mail, geen scherm. Een half uur minimaal. Veertig minuten beter.",
          "Kies per gesprek het kanaal dat het minst kost. Een mailwissel werkt soms net zo goed, en kost vaak een fractie. Een telefoongesprek zonder beeld is voor veel mensen lichter dan een videocall.",
          "Spreek vooraf af hoe lang een gesprek duurt en stop dan ook. Een gesprek dat uitloopt naar negentig minuten kost vaak meer dan twee aparte van zestig.",
          "Reken klantgesprekken niet als een tussendoor-ding maar als een taak op zich. Zet er een vinkje achter als je terug bent, dan kun je zien hoeveel er in je week zaten.",
        ],
      },
      { kind: "h2", text: "En wat masking betreft" },
      {
        kind: "p",
        text: "Je hoeft niet ineens ongemaskerd het volgende gesprek in. Wel kan het schelen om iets minder bij te houden tijdens het gesprek. Iets minder de toon van de ander mee-monitoren. Een ander kanaal kiezen waarop je zelf scherper bent en de ander automatisch minder bewust leest. Dat zijn kleine keuzes met een groot effect over de week.",
      },
      {
        kind: "p",
        text: "Bij Anders Ondernemen werken we hier in pijler twee mee. We meten één week wat klantcontact je kost en herontwerpen daarna je werkweek zodat het blijft kloppen. Dat is meestal genoeg. Geen vakantie nodig. Geen burn-outpreventie-cursus. Gewoon een week die rekent met wat jij nodig hebt.",
      },
      {
        kind: "link-row",
        text: "Lees ook: Masking in het ondernemen",
        href: "/themas/masking",
      },
    ],
  },
  {
    slug: "stoppen-met-maskeren-in-je-bedrijf",
    title: "Stoppen met maskeren in je bedrijf: hoe doe je dat zonder klanten te verliezen",
    description:
      "Praktische stappen om minder te maskeren in je werk, met respect voor het feit dat klanten en relaties belangrijk blijven. Geen alles-of-niets.",
    excerpt:
      "Stoppen met maskeren is geen schakelaar. Het is een serie kleine, eerlijke keuzes. Dit is hoe je begint.",
    category: "Masking",
    readingTime: "9 min",
    content: [
      {
        kind: "p",
        text: "Mensen die ontdekken dat ze masking doen, willen het vaak het liefst gewoon stoppen. Helemaal. Vanaf morgen. Dat is begrijpelijk en het is zelden een goed idee. Niet omdat je niet mag stoppen, wel omdat masking jaren een functie heeft gehad en zomaar wegzetten zelden goed valt voor jou en voor de mensen om je heen.",
      },
      {
        kind: "p",
        text: "In dit stuk schets ik hoe ik ondernemers help om minder te maskeren in hun werk, zonder dat hun bedrijf er aan moet. Het is geen revolutie. Het is keuzes maken over waar masking je nog wat oplevert en waar het je vooral kost.",
      },
      { kind: "h2", text: "Eerst zien waar je het doet" },
      {
        kind: "p",
        text: "Veel mensen denken dat ze in alles maskeren. Dat klopt vaak niet. Op sommige plekken doe je het al lang niet meer, bijvoorbeeld bij een vaste klant of bij een collega die je goed kent. Op andere plekken doe je het automatisch en zwaar.",
      },
      {
        kind: "p",
        text: "Een goede eerste stap is een week lang per klantcontact opschrijven hoe gemaskeerd je je voelde tijdens het gesprek. Een schaal van een tot vijf is genoeg. Niet om jezelf te beoordelen. Om jezelf in beeld te krijgen.",
      },
      { kind: "h2", text: "Drie soorten masking onderscheiden" },
      {
        kind: "p",
        text: "In de praktijk zie ik drie soorten terugkomen. De eerste is sociale glad-strijking: toon, oogcontact, glimlach. De tweede is inhoudelijk inpassen: je past je woordkeus en je voorbeelden aan op wat je denkt dat de ander aanspreekt. De derde is grensverhullen: je laat niet zien dat iets veel kost of dat je iets niet wil.",
      },
      {
        kind: "p",
        text: "Die drie hebben elk hun eigen prijs. Sociale glad-strijking kost vooral energie. Inhoudelijk inpassen kost je in helderheid van je aanbod en op den duur in welke klanten je trekt. Grensverhullen kost je op de duurste plek: je tarief, je beschikbaarheid, je bedrijf.",
      },
      { kind: "h2", text: "Begin bij grensverhullen, niet bij sociale glad-strijking" },
      {
        kind: "p",
        text: "Veel mensen willen beginnen bij hun gezicht. Niet meer doen alsof. Dat is zwaar werk en bovendien geeft het direct sociaal ongemak. Het is wel terecht, maar het is niet de beste plek om te beginnen.",
      },
      {
        kind: "p",
        text: "Beter werkt het om eerst je grenzen minder te verhullen. Je tarief. Je beschikbaarheid. Welk werk je wel en niet aanneemt. Dat zijn keuzes die je vóór het gesprek kunt maken, op papier. In het gesprek hoef je ze alleen te benoemen. Dat is technisch makkelijker dan een ander gezicht zetten, en het levert verhoudingsgewijs het meeste op.",
      },
      { kind: "h2", text: "Kies klanten waar je het bij oefent" },
      {
        kind: "p",
        text: "Niet bij elke klant tegelijk. Begin bij een klant waar je vertrouwen voelt, of bij een nieuwe klant waar je niets te verliezen hebt. Daar oefen je een eerlijker grens. Werkt het, dan neem je het mee naar de volgende. Werkt het niet zoals je hoopte, dan reflecteer je wat je daar uit haalt en probeer je opnieuw.",
      },
      { kind: "h2", text: "Schrijf wat je gaat zeggen, voor het moment er is" },
      {
        kind: "p",
        text: "Het is een open deur, en toch slaan veel mensen het over. Schrijf vooraf op wat je in het gesprek wil zeggen over je tarief, je termijn, je beschikbaarheid. Niet als script, wel als anker. In het gesprek hoef je het dan niet ter plekke te bedenken. Dat is precies de plek waar masking het hardst toeslaat.",
      },
      { kind: "h2", text: "Wees zacht voor jezelf als het terugvalt" },
      {
        kind: "p",
        text: "Soms doe je het goed, soms valt het terug. Een vermoeide dag, een lastige klant, een gesprek dat anders loopt dan verwacht. Niet erg. Masking is een gewoonte van decennia. Het gaat niet weg in zes weken. Het wordt wel kleiner, zichtbaarder, en daarmee een keuze in plaats van een reflex.",
      },
      { kind: "h2", text: "Wat klanten ervan vinden" },
      {
        kind: "p",
        text: "De zorg die mensen hebben is dat klanten weglopen als je minder maskeert. In de praktijk zie ik vaker het omgekeerde. Klanten die bij je passen waarderen het. Klanten die niet bij je passen vertrekken eerder, en dat is meestal precies wat je nodig hebt. Het zware werk om die laatste groep tevreden te houden was masking, en dat valt nu weg.",
      },
      {
        kind: "link-row",
        text: "Werkblad om dit zichtbaar te maken: de Masking-check",
        href: "/downloads/masking-check",
      },
    ],
  },
  {
    slug: "maskeren-op-netwerk-events",
    title: "Maskeren op netwerk-events: waarom \"even langs\" geen oplossing is",
    description:
      "Waarom netwerk-events voor neurodivergente ondernemers vaak duur uitvallen en wat alternatieven zijn die wel werken voor je bedrijf.",
    excerpt:
      "Je gaat omdat het hoort. Het kost je twee dagen. De opdracht die eruit komt was die twee dagen niet waard. Hier is wat wel werkt.",
    category: "Masking",
    readingTime: "7 min",
    content: [
      {
        kind: "p",
        text: "Iedere paar weken schrijft iemand zich in. Een borrel, een ondernemerslunch, een netwerk-event. Er is iemand die je kent die zegt dat hij of zij ook gaat. Je gaat omdat je weet dat zichtbaarheid belangrijk is voor je bedrijf. Het is twee uur. Hoe erg kan het zijn.",
      },
      {
        kind: "p",
        text: "Daarna ben je twee dagen onbruikbaar. Drie als het tegenzat. De ene opdracht die eruit voortkwam was die twee dagen niet waard, zeker niet als je de tijd erna meerekent. En toch ga je weer over een maand, want het hoort.",
      },
      { kind: "h2", text: "Waarom een netwerk-event zo duur is" },
      {
        kind: "p",
        text: "Een netwerk-event is voor je brein een opeenstapeling van precies wat het minst goed gaat. Veel mensen tegelijk. Achtergrondgeluid dat je niet kunt wegfilteren. Korte gesprekken die snel moeten en sociaal vlot. Een omgeving die je niet kent. En, vaak vergeten, een hoge mate van uitstraling-werk: er goed uitzien, er rustig uitzien, beschikbaar uitzien voor het volgende gesprek.",
      },
      {
        kind: "p",
        text: "Bij elkaar opgeteld is dat een sportprestatie. Het feit dat het tussen acht en tien plaatsvindt en je daarna nog naar huis moet rijden, helpt ook niet.",
      },
      { kind: "h2", text: "Waarom \"even langs\" niet werkt" },
      {
        kind: "p",
        text: "Een veelgehoord advies is: ga er even heen, blijf een uur, ga weg. Dat klinkt redelijk en helpt voor andere mensen vaak. Voor neurodivergente ondernemers is het opstart-werk niet kleiner als je er korter bent. Je hoofd schakelt op een opstart, of die nou een uur of drie uur duurt. Je geeft jezelf minder tijd om iets aan een gesprek te hebben, maar de kosten zijn er al.",
      },
      {
        kind: "p",
        text: "Wat wel werkt, is niet kiezen voor dit type setting in de eerste plaats. Tenzij je expliciet ervaring hebt dat het bij jou wel werkt.",
      },
      { kind: "h2", text: "Wat in plaats daarvan kan" },
      {
        kind: "p",
        text: "Het doel achter een netwerk-event is meestal: mensen leren kennen waar later werk uit kan komen. Dat doel haal je op andere manieren ook. Met meer rendement per uur en minder herstel achteraf.",
      },
      {
        kind: "ul",
        items: [
          "Eén op een. Een goed gesprek van een uur met iemand van wie je het werk waardeert, levert vaak meer op dan een uur met twintig mensen samen.",
          "Op een kanaal dat bij je past. Schrijf op LinkedIn als je daar prettig schrijft. Of bel iemand op. Of nodig iemand uit voor een wandeling. Geen drukke ruimte nodig.",
          "Werk in je eigen netwerk. Klanten die jou aanbevelen, vakgenoten met wie je samenwerkt, oud-collega's. Dat zijn warme paden. Er hoeft geen kennismaking, alleen onderhoud.",
          "Maak content die voor je werkt zonder dat je live ergens hoeft te staan. Een artikel, een podcast-aflevering, een lezing waarin je je in twee opnamesessies kunt voorbereiden. Eén keer maken, lang vindbaar.",
        ],
      },
      { kind: "h2", text: "Mocht je toch gaan" },
      {
        kind: "p",
        text: "Soms is er een event waar je heen wil omdat de juiste mensen er zijn. Dan gelden andere regels. Maak het zo voorspelbaar mogelijk. Kom op tijd, kies een kennismaking met twee mensen die je vooraf hebt aangeschreven, zorg dat je in dat eerste half uur de gesprekken hebt die je echt nodig had. Daarna mag je weg met een goed gevoel.",
      },
      {
        kind: "p",
        text: "Plan na een event de volgende dag licht. Niets met klanten. Niets dat starten vraagt. Iets wat lekker doorpakt op routine. Dat is geen luxe. Dat is goed boekhouden met je energie.",
      },
      {
        kind: "link-row",
        text: "Lees ook: Zichtbaarheid en netwerken",
        href: "/themas/zichtbaarheid-netwerken",
      },
    ],
  },
  // Energie & overprikkeling
  {
    slug: "signalen-overprikkeling-na-klantcontact",
    title: "Overprikkeling na klantcontact: de signalen die je vaak mist",
    description:
      "Hoe je overprikkeling bij jezelf herkent, ook als je gewend bent geraakt aan het overhouden van klantgesprekken. Met concrete signalen uit de praktijk.",
    excerpt:
      "Veel ondernemers herkennen overprikkeling pas als ze weten waar ze op moeten letten. Hier is wat ik vaak terugzie.",
    category: "Energie",
    readingTime: "7 min",
    content: [
      {
        kind: "p",
        text: "Mensen denken bij overprikkeling vaak aan iets dramatisch. Een hete winkelstraat in juli, een verjaardag met zestien mensen, een ouderavond op school. Dat klopt ook. Maar voor ondernemers is overprikkeling vaak veel sluipender. Een telefoongesprek dat een half uur duurde. Een onverwachte mail van een klant met een aanpassing. Een vergadering die soepel verliep.",
      },
      {
        kind: "p",
        text: "Het probleem is dat veel mensen pas merken dat ze overprikkeld zijn als het al gebeurd is. Een uur later, of de volgende dag, of als hun partner iets zegt over hun korte lontje. Dit stuk is voor wie het eerder wil herkennen, omdat dat het verschil maakt tussen erkennen en uitvallen.",
      },
      { kind: "h2", text: "De directe signalen" },
      {
        kind: "p",
        text: "Direct na een klantcontact, in het eerste half uur, zijn er een paar dingen die vaak terugkomen.",
      },
      {
        kind: "ul",
        items: [
          "Je hoofd voelt vol. Niet vol van gedachten, vol als in: er kan nu niets meer bij.",
          "Geluiden zijn iets harder dan ze waren. De koelkast, een buiten passerende auto, geluid uit een naburig kantoor.",
          "Je wil niet meer praten. Een korte vraag van iemand voelt als een opdracht.",
          "Je hebt geen zin in scherm. Niet in werk, niet in social, niet in een serie. Of juist heel veel in scherm, omdat je hoofd wil ontkoppelen.",
          "Lichamelijk: druk op je borst, schouders die zwaar voelen, een onrustige maag.",
        ],
      },
      { kind: "h2", text: "De signalen na een uur" },
      {
        kind: "p",
        text: "Veel ondernemers denken dat ze het kunnen doorpushen als ze meteen weer iets doen. Soms lukt dat ook. Maar het signaal komt dan vaak later, niet weg.",
      },
      {
        kind: "ul",
        items: [
          "Je raakt geïrriteerd om kleine dingen. Een vraag van een huisgenoot, een mail die niet wil openen, een keuze die maar gemaakt moet worden.",
          "Beslissingen worden taai. Wat te eten, of je nog een mail beantwoordt, of je een wandeling maakt.",
          "Tijdsgevoel klopt niet meer. Je denkt dat je een uur op de bank hebt gezeten en er zijn drie kwartier voorbij. Of andersom.",
          "Een klein, herhalend geluid wordt onverdraaglijk. Iemand die roert in een kopje thee. Een tikkende klok.",
          "Je verzint dingen waarom je iets niet hoeft te doen wat eigenlijk wel moest.",
        ],
      },
      { kind: "h2", text: "Wat ondernemers het vaakst missen" },
      {
        kind: "p",
        text: "Drie dingen die ik in coaching vaak terugzie. Eerst: mensen herkennen overprikkeling als die heftig is en niet als die mild is. Lichte overprikkeling stapelt zich juist op. Tweede: mensen rekenen de overprikkeling weg met de logica dat het gesprek toch goed ging. Maar of het gesprek goed ging zegt niets over hoeveel het kostte. Derde: mensen koppelen het pas op de avond, terwijl er overdag al signalen waren.",
      },
      { kind: "h2", text: "Wat helpt" },
      {
        kind: "p",
        text: "Het belangrijkste is leren herkennen, niet bestrijden. Als je overprikkeling vroeg ziet, kun je een rustblok inbouwen voor het te diep wordt. Een wandeling van vijftien minuten zonder telefoon. Een stuk afwassen of een ander handwerk waar je niet voor hoeft na te denken. Iets met je handen, weg van scherm.",
      },
      {
        kind: "p",
        text: "Een tweede manier van helpen: bouw je werkweek zo dat overprikkeling minder vaak hoeft op te treden. Minder gesprekken op dezelfde dag. Een kanaalkeuze die jou minder kost. Werk dat aansluit bij je piekenergie, en geen werk verwacht wanneer je daalt.",
      },
      {
        kind: "link-row",
        text: "Werkblad om je week in kaart te brengen: Mijn week, mijn brein",
        href: "/downloads/mijn-week-mijn-brein",
      },
    ],
  },
  {
    slug: "werken-in-pieken-niet-in-een-rechte-lijn",
    title: "Werken in pieken, niet in een rechte lijn: een werkweek voor een neurodivergent brein",
    description:
      "Hoe je een werkweek ontwerpt die werkt met je natuurlijke pieken en dalen in plaats van ertegen. Met voorbeelden uit de praktijk.",
    excerpt:
      "Je werkt nooit vijf gelijke dagen. Dat is geen tekort. Dat is je systeem. Je werkweek mag dat weten.",
    category: "Energie",
    readingTime: "9 min",
    content: [
      {
        kind: "p",
        text: "De meeste ondernemingsadvies gaat ervan uit dat je elke werkdag ongeveer hetzelfde kunt presteren. Vroege ochtenden voor diep werk, kortere blokken na de lunch, een mooi afgeronde dag. Vijf keer per week, met af en toe een uitzondering.",
      },
      {
        kind: "p",
        text: "Voor veel neurodivergente ondernemers werkt dat niet. Je hebt pieken die geweldig zijn en die je dezelfde week niet kunt herhalen. Je hebt dalen waarin niet veel uitkomt, maar waar je tegelijk geen permanente schade aanricht. Je hebt onverwachte kostenposten in je dag, dingen die voor anderen een onderbreking zijn en voor jou twee uur.",
      },
      {
        kind: "p",
        text: "In dit stuk laat ik zien hoe je een werkweek bouwt die met dat patroon werkt. Niet eentje die ertegen probeert te duwen.",
      },
      { kind: "h2", text: "Ga uit van piek-tijd, niet van klok-tijd" },
      {
        kind: "p",
        text: "Een gewone werkweek bestaat uit klok-tijd: van negen tot vijf, vijf dagen. Een werkweek die past bij jouw brein begint bij piek-tijd: wanneer ben jij scherp.",
      },
      {
        kind: "p",
        text: "Voor sommigen is dat dinsdag- en donderdagochtend. Voor anderen is het maandag tot en met woensdag in blokken van anderhalf uur. Voor weer anderen drie keer per dag een uur. Het maakt niet zoveel uit welk patroon je hebt, het maakt veel uit of je het kent.",
      },
      {
        kind: "p",
        text: "Houd een week of twee bij wanneer je het beste denkt. Niet wat de wekker zegt, maar wat je voelt aan focus. Dat zijn je pieken. Daar plan je het werk dat denken vraagt.",
      },
      { kind: "h2", text: "Plan dalen zonder schaamte" },
      {
        kind: "p",
        text: "Een werkweek die rekent met pieken moet ook rekenen met dalen. Veel ondernemers proberen die weg te poetsen of er doorheen te werken. Dat lukt soms en het kost vaker dan het oplevert.",
      },
      {
        kind: "p",
        text: "Beter: zet dalen in voor werk dat ze aankunnen. Routinematig: facturen sturen, mail beantwoorden, verzendingen klaarmaken, administratie bijwerken. Lichamelijk: wandeling, even buiten, een korte training. Saai: opruimen, archiveren. Geen geestelijk zware taken. Geen klantgesprekken.",
      },
      {
        kind: "p",
        text: "Een week met twee pieken van vier uur en de rest dalen waarin je het lichte werk doet, levert vaak meer op dan vijf dagen gemiddelde productiviteit waar je elke avond moe van bent.",
      },
      { kind: "h2", text: "Kies een drempel" },
      {
        kind: "p",
        text: "Het lastigste is starten. Een lege agenda voelt voor sommige breinen als vrijheid en voor andere als een lege fabriekshal. Voor het laatste type werkt het om een drempel te kiezen. Niet \"ik ga vandaag aan dat aanbod werken\", maar \"ik open het bestand en lees de laatste alinea\". Vaak ben je dan al binnen.",
      },
      {
        kind: "p",
        text: "Schrijf je drempels op. Eén drempel per taak die je vaak uitstelt. Steeds zo klein dat het haast lachwekkend is. Dat is precies de bedoeling. Lachwekkend klein neemt het gewicht eraf.",
      },
      { kind: "h2", text: "Reken klantcontact apart" },
      {
        kind: "p",
        text: "Een klantgesprek is voor neurotypische ondernemers een uurtje. Voor jou is het vaak meer. Niet alleen het uur zelf, maar de opstart ervoor en het herstel erna. Reken twee uur. Of drie. Je werkweek voelt dan ineens vol terwijl je een gat had in je agenda.",
      },
      {
        kind: "p",
        text: "Beter zo'n gat hebben dan er steeds achter komen dat een dag voller was dan je dacht. Plan niet meer dan twee klantgesprekken per dag. Op piek-dagen liever één.",
      },
      { kind: "h2", text: "Buffer voor het onverwachte" },
      {
        kind: "p",
        text: "Iedere week komt er iets bij wat je niet had gepland. Een mail die antwoord wil. Een huisgenoot die iets nodig heeft. Een storing in software die je gebruikt. Voor neurotypische ondernemers is dat een onderbreking van een kwartier. Voor jou kan het twee uur zijn omdat het schakelen tussen taken zwaar is.",
      },
      {
        kind: "p",
        text: "Plan in elke werkweek een blok van een halve dag dat leeg is. Niet voor leuke dingen. Voor de onverwachte zaken die er gewoon zijn. Als ze er niet zijn, heb je een halve dag terug. Win-win.",
      },
      { kind: "h2", text: "Schrijf je week op één vel" },
      {
        kind: "p",
        text: "Eén A4. Bovenkant je pieken, midden je dalen, onderkant je buffer. Daar tussen de drie tot vier dingen die deze week moeten gebeuren. Niet meer. Eén ding centraal. Aan het eind van de week kijk je terug en pas je aan.",
      },
      {
        kind: "p",
        text: "Dat klinkt simpel. Het is ook simpel. Dat is precies waarom het werkt. Veel planningsadvies probeert je systeem na te bootsen. Maar je systeem werkte niet, anders had je het niet gezocht. Een vel met pieken en dalen werkt vaak wel.",
      },
      {
        kind: "link-row",
        text: "Lees meer over executive functies en planning",
        href: "/themas/executive-functies",
      },
    ],
  },
  {
    slug: "burnout-bij-autisme-anders",
    title: "Burn-out bij ondernemers met autisme: waarom het anders aanvoelt dan \"gewoon\" druk",
    description:
      "Autistische burn-out heeft een andere oorzaak en een ander verloop dan typische werkstress. Hier is wat het wel en niet is, en hoe je het vroeg herkent.",
    excerpt:
      "Autistische burn-out is niet hetzelfde als werkdruk. Hij begint stiller en duurt langer. Vroeg herkennen is het belangrijkste.",
    category: "Energie",
    readingTime: "8 min",
    content: [
      {
        kind: "p",
        text: "Burn-out is een woord met een te brede betekenis. Iemand die zes maanden te hard heeft gewerkt en niet meer kan, heeft burn-out. Iemand die drie jaar masking heeft gedaan in haar werk en alles op koste van haar lichaam blijkt te doen, ook. Maar de twee zijn niet hetzelfde. Niet in oorzaak, niet in verloop, en niet in herstel.",
      },
      {
        kind: "p",
        text: "Voor autistische en AuDHD-ondernemers wijkt het beeld vaak van wat in de standaard literatuur staat. Dat maakt het lastig. Je past niet in het verhaal, dus je en je omgeving denken dat het iets anders is. Tot het te ver is.",
      },
      { kind: "h2", text: "Het stille begin" },
      {
        kind: "p",
        text: "Een typische burn-out begint vaak met een periode van veel werk, veel druk, en het gevoel dat het niet meer gaat. Een autistische burn-out begint vaak stiller. Geen acute crisis. Wel een hele lange periode waarin alles iets te veel kost, terwijl er aan de buitenkant niets opvallends is. Tot je een ochtend wakker wordt en je douche niet meer aan krijgt.",
      },
      {
        kind: "p",
        text: "De oorzaak ligt zelden in te veel uren. Hij ligt vaker in te lang in een vorm zitten die niet past. Een werkweek die niet rekent met je brein. Klantcontact dat te dicht op elkaar staat. Voortdurende masking in werk en privé. Een aantal compromissen die afzonderlijk te dragen zijn, en samen niet.",
      },
      { kind: "h2", text: "Wat erbij hoort" },
      {
        kind: "ul",
        items: [
          "Je executive functies vallen weg. Niet eens iets ingewikkelds: je weet niet meer welke t-shirt je aan moet trekken.",
          "Je masking valt weg. Je hebt geen energie meer om de sociale vorm op te houden. Mensen om je heen merken het, en dat geeft schaamte.",
          "Sensorisch wordt alles luider. Geluid, licht, geur, smaak, beweging. Het geluid van een wasmachine kan onverdraaglijk worden.",
          "Je herstelt niet door rust alleen. Slapen helpt iets, maar weken vrij voelen als drie dagen.",
          "Speciale interesses worden zwaar. Wat je vroeger als anker had, voelt nu te ingewikkeld om in te stappen.",
        ],
      },
      { kind: "h2", text: "Het lange herstel" },
      {
        kind: "p",
        text: "Een typische burn-out duurt drie tot zes maanden om uit te komen, met goede begeleiding. Een autistische burn-out duurt vaak langer, soms een jaar of twee. Niet omdat je iets fout doet, wel omdat het herstel een andere structuur heeft. Het gaat niet om bijkomen en weer doorgaan op de oude voet. Het gaat om herontwerpen van hoe je leeft en werkt zodat je niet terugkomt op het punt waar je was.",
      },
      {
        kind: "p",
        text: "Veel mensen krijgen in deze fase de diagnose pas, omdat het patroon dan zichtbaar wordt voor een professional. Voor sommigen is dat een opluchting. Voor anderen voegt het iets toe aan de zwaarte. Beide is normaal.",
      },
      { kind: "h2", text: "Vroege signalen" },
      {
        kind: "p",
        text: "Wat ik in coaching probeer is mensen helpen het vroeg te zien. Dat zijn niet de signalen van een burn-out in volle gang. Dat zijn signalen dat het systeem voorraad opmaakt.",
      },
      {
        kind: "ul",
        items: [
          "Je weekenden geven niet meer terug wat ze vroeger gaven. Twee dagen vrij voelen als twintig minuten.",
          "Mensen die je vroeger normaal aan vond, vind je nu vermoeiend. Niet één persoon, structureel.",
          "Het ding dat altijd jouw rustpunt was, doe je niet meer. Geen muziek, geen lezen, geen wandeling.",
          "Je rekent op de week dat je vakantie hebt om te herstellen, en dat lukt niet meer.",
          "Beslissingen worden taai, ook kleine.",
        ],
      },
      { kind: "h2", text: "Wat dit met coaching te maken heeft" },
      {
        kind: "p",
        text: "Coaching is niet de juiste plek voor een burn-out. Bij echte uitval verwijs ik je naar zorg, vaak naar een psycholoog die autisme bij volwassenen kent. Coaching werkt het beste op het moment ervoor: wanneer je nog functioneert maar voelt dat er iets schuurt en het structureel wordt.",
      },
      {
        kind: "p",
        text: "Daar zit ook het verschil met therapie. We werken aan hoe je werk en je bedrijf zo inricht dat het structureel houdbaar is. Niet aan trauma-verwerking of medicatie. Voor dat laatste ben ik niet je persoon.",
      },
      {
        kind: "link-row",
        text: "Lees meer over energie en burn-out",
        href: "/themas/energie-burnout",
      },
    ],
  },
  // Brein-specifiek
  {
    slug: "adhd-of-audhd-verschil",
    title: "ADHD-ondernemer of AuDHD-ondernemer? Waarom dat onderscheid uitmaakt",
    description:
      "Hoe je het verschil herkent tussen ADHD en AuDHD bij ondernemers, en waarom standaard ADHD-advies vaak averechts werkt voor mensen met AuDHD.",
    excerpt:
      "Veel mensen ontdekken pas na jaren ADHD-coaching dat ze AuDHD hebben. Dat verandert wat past en wat niet.",
    category: "Brein",
    readingTime: "8 min",
    content: [
      {
        kind: "p",
        text: "Een groeiende groep ondernemers herkent zich in ADHD en gebruikt dat label om hun werk anders in te richten. Voor sommigen werkt dat goed. Voor anderen werkt het deels, en blijft er een rest die niet klopt. Die rest is vaak een autistische component die niet meegenomen is.",
      },
      {
        kind: "p",
        text: "AuDHD, een combinatie van ADHD en autisme, komt vaker voor dan gedacht. Van buitenaf wordt het niet altijd herkend, omdat de twee elkaar deels maskeren. Een autistisch brein dat in de buitenwereld goed functioneert wordt vaak alleen als ADHD gezien. In coaching maakt dat verschil.",
      },
      { kind: "h2", text: "Wat ADHD-advies meestal zegt" },
      {
        kind: "p",
        text: "Het meeste ADHD-advies voor ondernemers gaat over snelheid en remming. Werk in korte blokken. Begin maar gewoon. Gebruik externe deadlines. Maak gebruik van je hyperfocus. Stop met overdenken. Beweeg veel.",
      },
      {
        kind: "p",
        text: "Voor een puur ADHD-brein werkt dat vaak goed. Voor een AuDHD-brein werkt het deels, en op andere plekken averechts. Externe deadlines kunnen demand avoidance triggeren. Korte blokken kunnen frustreren omdat je net diep zat. Beweeg veel werkt totdat overprikkeling intreedt. Stop met overdenken is niet altijd mogelijk als je een autistisch brein hebt dat juist veel verwerkt.",
      },
      { kind: "h2", text: "Hoe je AuDHD vaak herkent" },
      {
        kind: "p",
        text: "Ik doe geen diagnostiek, maar in coaching zie ik patronen die vaak terugkomen bij mensen die later AuDHD blijken te hebben.",
      },
      {
        kind: "ul",
        items: [
          "Je hebt veel ideeën, en tegelijk een sterke voorkeur voor herhaling en voorspelbaarheid.",
          "Je hyperfocust, en daarna ben je sensorisch overprikkeld in plaats van dat je nog drie uur door kunt.",
          "Je hebt last van overgangen tussen taken. Niet alleen het starten, ook het stoppen.",
          "Je werkt het beste in pieken, maar je hebt strikte routines nodig om die pieken voor te bereiden.",
          "Standaard ADHD-tips als \"begin gewoon\" werken bij jou averechts.",
          "Sociale situaties kosten je meer dan ze zouden moeten, ook al lijken anderen het niet te merken.",
          "Je hebt diagnose ADHD, maar tien jaar later vraag je je af waarom een deel van het verhaal niet klopte.",
        ],
      },
      { kind: "h2", text: "Wat anders is in coaching" },
      {
        kind: "p",
        text: "Een AuDHD-traject ziet er meestal anders uit dan een ADHD-traject. Drie verschillen die ik in mijn werk zie.",
      },
      {
        kind: "p",
        text: "Eerste: meer aandacht voor structuur en voorspelbaarheid. Een AuDHD-brein wil systeem en vrijheid tegelijk. Een ADHD-coach werkt vaak in de richting van losser maken. Dat werkt voor een AuDHD-ondernemer maar half. De vrijheid moet binnen een kader, anders zakt het brein in chaos.",
      },
      {
        kind: "p",
        text: "Tweede: meer aandacht voor sensorische kosten en masking. Bij ADHD ligt de nadruk vaak op aandacht en starten. Bij AuDHD voeg je daar overprikkeling en masking aan toe. Dat geeft een ander beeld van waar de energie heen gaat.",
      },
      {
        kind: "p",
        text: "Derde: meer aandacht voor demand avoidance. Een ADHD-coach zegt vaak: kies een deadline en commit. Een AuDHD-brein reageert daar soms juist averechts op. We werken met andere mechanismes om in beweging te komen.",
      },
      { kind: "h2", text: "Hoe je hier verder mee komt" },
      {
        kind: "p",
        text: "Als je herkent dat een deel van het ADHD-verhaal voor jou niet klopt, kan AuDHD een betere lens zijn. Diagnose is niet nodig om in coaching anders te kijken. Wat wel helpt is een paar weken bijhouden waar bij jou de zwaarte zit en welke standaard tips bij jou averechts werken. Dat is meestal genoeg om in beweging te komen.",
      },
      {
        kind: "link-row",
        text: "Voor AuDHD-ondernemers: bekijk de pagina",
        href: "/voor-wie/audhd-ondernemers",
      },
    ],
  },
  {
    slug: "laat-ontdekt-ondernemen-met-diagnose-op-latere-leeftijd",
    title: "Laat ontdekt: ondernemen met een AuDHD-diagnose op je veertigste",
    description:
      "Wat een late diagnose met je doet als je al jaren ondernemer bent, hoe je vooruit kijkt zonder de jaren ervoor te bagatelliseren, en wat je in coaching kunt verwachten.",
    excerpt:
      "De diagnose verklaart twintig jaar werk. Dat is opluchting en woede tegelijk. Ondertussen draait je bedrijf gewoon door. Hoe verder.",
    category: "Brein",
    readingTime: "8 min",
    content: [
      {
        kind: "p",
        text: "Voor steeds meer ondernemers komt de diagnose pas later in hun leven. In de veertig, in de vijftig. Soms via een kind dat de diagnose kreeg en bekende patronen liet zien. Soms via een burn-out. Soms via een gesprek waarin iemand iets te raak zei.",
      },
      {
        kind: "p",
        text: "Wat dat met je doet, is moeilijk vooraf in te schatten. Veel mensen zeggen achteraf dat ze het niet hadden kunnen voorspellen. In dit stuk schets ik wat ik vaak terugzie bij mensen die ik begeleid, en hoe coaching zich daartoe verhoudt.",
      },
      { kind: "h2", text: "Wat een late diagnose met je kan doen" },
      {
        kind: "p",
        text: "Een paar reacties die ik vaak hoor.",
      },
      {
        kind: "ul",
        items: [
          "Opluchting: er was dus een reden voor wat altijd zwaarder voelde dan logisch was.",
          "Woede: waarom is dit niet eerder gezien, waarom heeft niemand het mij verteld, waarom heb ik mezelf zo hard aangepakt.",
          "Verdriet: alle keuzes die ik anders gemaakt zou hebben als ik dit had geweten.",
          "Twijfel: klopt het wel, ben ik niet gewoon iemand die zichzelf zoekt in een trend.",
          "Vermoeidheid: nu ik dit weet, mag ik dan eindelijk minder.",
          "Schaamte: wat zou mijn vader, mijn collega, mijn klant hier nu van zeggen.",
        ],
      },
      {
        kind: "p",
        text: "Veel mensen voelen meerdere dingen tegelijk. Dat is normaal. Het wisselt vaak per week, soms per dag.",
      },
      { kind: "h2", text: "Wat het met je bedrijf doet" },
      {
        kind: "p",
        text: "Je bedrijf draait door. Klanten verwachten dat je gewoon bereikbaar blijft. Mail blijft binnenkomen. Tegelijk staat alles wat je over je werk dacht in een ander licht. Beslissingen die je eerder nam, dienen zich opnieuw aan. Klanten waar je ja tegen zei terwijl je nee voelde, mogen die blijven? De manier waarop je je website schreef, klopt die met wie je bent? Het traject van je bedrijf, was dat een keuze of compensatie?",
      },
      {
        kind: "p",
        text: "Dat is veel om mee bezig te zijn naast lopend werk. Veel mensen schroeven het werk tijdelijk terug. Anderen doen het tegenovergestelde en duiken in hun werk om af te leiden. Beide kan, beide hoeft niet permanent.",
      },
      { kind: "h2", text: "Wat coaching wel en niet doet" },
      {
        kind: "p",
        text: "Coaching gaat over je bedrijf, niet over de diagnose zelf. Voor het verwerken van de diagnose is therapie of een goede psycholoog beter geschikt. Coaching pakt het op het punt: nu je weet hoe je brein werkt, hoe ga je je bedrijf inrichten zodat het bij je past.",
      },
      {
        kind: "p",
        text: "Dat zijn vaak concrete keuzes. Welke klanten passen bij je en welke kosten je meer dan ze opleveren. Welke werkweek werkt met je energie. Welk kanaal werkt voor klantcontact, en welk niet. Welke kant van je werk vraagt masking, en welk deel niet. Wat is je tarief eigenlijk, eerlijk gerekend.",
      },
      { kind: "h2", text: "Je hebt al veel uitgeprobeerd" },
      {
        kind: "p",
        text: "Iemand die op zijn veertigste de diagnose krijgt heeft al twintig jaar gewerkt. Hij of zij heeft al van alles geprobeerd. Veel daarvan werkt voor een deel. Dat is geen vergissing om af te leren. Dat is winst.",
      },
      {
        kind: "p",
        text: "In coaching kijken we naar wat al werkt, waarom het werkt, en waar het toch nog klem komt. Vaak is dat een paar specifieke plekken, niet je hele manier van ondernemen. Dat is goed nieuws. Je hoeft niet opnieuw te beginnen.",
      },
      { kind: "h2", text: "Hoe ik dit ken" },
      {
        kind: "p",
        text: "Mijn vrouw kreeg de diagnose AuDHD op latere leeftijd. Ik heb van dichtbij gezien wat dat met iemand doet, ook met onze relatie. Dat heeft mijn werk gevormd. Ik ga er niet vanuit dat een diagnose op die leeftijd een schone lei betekent. Ik ga uit van wat er al staat, en wat van daaruit kan.",
      },
      {
        kind: "link-row",
        text: "Voor laat ontdekt of laat gediagnosticeerd",
        href: "/voor-wie/laat-ontdekt",
      },
    ],
  },
  {
    slug: "executive-functies-en-ondernemerschap",
    title: "Executive functies en ondernemerschap: waarom plannen zo zwaar voelt",
    description:
      "Hoe executive functies werken, waarom standaard planningsmethodes vaak averechts werken bij neurodivergente ondernemers, en wat wel beter past.",
    excerpt:
      "Plannen is voor sommige breinen geen vaardigheid maar een berg. Hier is waarom, en wat eraan te doen is.",
    category: "Brein",
    readingTime: "9 min",
    content: [
      {
        kind: "p",
        text: "Je hebt elke planningsmethode geprobeerd. Bullet journal, app, tijdsblokken, eat the frog, Eisenhower-matrix, getting things done. Elke methode werkt drie weken. Daarna lukt het niet meer. Je denkt dat je het probleem bent. Vaak ben je dat niet. De methodes zijn ontworpen voor een ander type brein.",
      },
      { kind: "h2", text: "Wat executive functies zijn" },
      {
        kind: "p",
        text: "Executive functies is een paraplu-term voor een aantal denkstappen die nodig zijn om iets gedaan te krijgen. Ze klinken simpel en zijn dat voor sommige mensen ook. Voor anderen niet.",
      },
      {
        kind: "ul",
        items: [
          "Initieren: een taak beginnen. Klinkt simpel. Voor sommige breinen is het de zwaarste stap.",
          "Plannen: voorzien welke stappen nodig zijn en in welke volgorde.",
          "Prioriteren: kiezen welke taak nu belangrijker is dan een andere.",
          "Werkgeheugen vasthouden: tussendoor onderbroken worden en daarna terug naar waar je was.",
          "Schakelen: van de ene taak naar de andere overgaan.",
          "Reguleren: zien wanneer iets niet werkt en bijstellen.",
        ],
      },
      {
        kind: "p",
        text: "Bij ADHD- en AuDHD-breinen werken een of meer van deze functies anders. Niet altijd slechter, vaak anders. Plannen kan moeilijk gaan, maar onthouden waar je in een complex project zat juist makkelijk. Initieren kan zwaar zijn, maar als je eenmaal in beweging bent ga je urenlang door.",
      },
      { kind: "h2", text: "Waarom standaard planning faalt" },
      {
        kind: "p",
        text: "De meeste planningsmethodes gaan uit van een paar aannames. Dat je elke dag ongeveer dezelfde tijd kunt werken. Dat je taken op een hiërarchie kunt zetten en daar consequent aan vasthoudt. Dat je een blok kunt starten omdat je het had gepland. Dat herhaling rust geeft.",
      },
      {
        kind: "p",
        text: "Voor veel neurodivergente breinen klopt geen van deze aannames volledig. Je dagen zijn niet gelijk. Hiërarchie verschuift per dag, soms per uur. Een blok starten op tijd kost je vaak meer dan het blok zelf. Herhaling brandt door demand avoidance heen na een paar weken.",
      },
      { kind: "h2", text: "Wat wel werkt" },
      {
        kind: "p",
        text: "Geen recept. Een paar principes die in mijn coaching vaak terugkomen.",
      },
      { kind: "h3", text: "1. Werk vanuit energie, niet vanuit klok" },
      {
        kind: "p",
        text: "Beschrijf in plaats van \"maandag 9:00 tot 12:00 deep work\" iets als \"mijn ochtenden waarin ik scherp ben, ongeveer twee tot drie keer per week, gebruik ik voor het werk dat denken vraagt\". Geef jezelf ruimte om die pieken te herkennen in plaats van ze te plannen.",
      },
      { kind: "h3", text: "2. Maak starten kleiner dan de taak" },
      {
        kind: "p",
        text: "Een taak begint niet met de taak. Hij begint met een drempel. Schrijf je drempel op, niet de taak. Vaak is dat \"het bestand openen\" of \"de eerste alinea lezen\". Soms is dat genoeg om binnen te zijn.",
      },
      { kind: "h3", text: "3. Werk met visuele ankers, niet met lijsten" },
      {
        kind: "p",
        text: "Een takenlijst van vijftien items in een app zie je niet meer als je hem dichtklikt. Een whiteboard met drie kaartjes zie je elke keer als je opkijkt. Voor breinen met onbetrouwbaar werkgeheugen scheelt dat enorm.",
      },
      { kind: "h3", text: "4. Maximaal drie dingen per dag" },
      {
        kind: "p",
        text: "Veel mensen zetten zeven tot tien items op een dag en halen er drie. Daar voel je je rot bij. Zet er drie op en haal er drie. Of haal er twee en plan eentje door. Dat geeft een ander gevoel aan een week.",
      },
      { kind: "h3", text: "5. Geef jezelf opties" },
      {
        kind: "p",
        text: "Demand avoidance werkt minder hard als er keuze is. Vier taken waarvan je er twee mag kiezen werkt vaker dan vier die alle vier moeten. Klinkt klein. Maakt voor sommige breinen enorm verschil.",
      },
      { kind: "h2", text: "Buffer voor het onverwachte" },
      {
        kind: "p",
        text: "Iedere week komt er iets bij. Plan een halve dag leeg voor wat je nog niet weet. Als die niet nodig is heb je een halve dag gewonnen. Standaard advies.",
      },
      {
        kind: "p",
        text: "In het traject werken we in pijler drie aan een werkweek die past bij jouw brein. Geen template. Eentje die je herkent en die houdbaar is, ook na drie weken.",
      },
      {
        kind: "link-row",
        text: "Lees meer over executive functies en planning",
        href: "/themas/executive-functies",
      },
    ],
  },
  // Grenzen, geld, klantcontact
  {
    slug: "eerlijke-prijs-vragen-zonder-dat-het-je-dagen-kost",
    title: "Een eerlijke prijs vragen zonder dat het je dagen kost",
    description:
      "Concrete manieren om je tarief te noemen en te verdedigen zonder dat je er na het gesprek dagen aan blijft kauwen. Voor ondernemers die hun prijs steeds te laag laten.",
    excerpt:
      "Het probleem is zelden je prijs. Het is het gesprek erover. Hier is hoe je het gesprek lichter maakt.",
    category: "Grenzen",
    readingTime: "8 min",
    content: [
      {
        kind: "p",
        text: "Veel ondernemers zitten met een prijs die ze niet helemaal durven te noemen. Of een prijs die ze noemen en die ze daarna lager maken op het moment dat de klant aarzelt. Voor neurodivergente ondernemers heeft dat zelden te maken met onzekerheid over hun werk. Het heeft te maken met het gesprek.",
      },
      {
        kind: "p",
        text: "In dit stuk schets ik vijf concrete dingen die je kunt doen om een eerlijke prijs te vragen zonder dat het je dagen kost. Geen mindset-werk, geen affirmaties. Praktisch.",
      },
      { kind: "h2", text: "1. Zet je prijs op papier voor het gesprek" },
      {
        kind: "p",
        text: "De plek waar het meestal misgaat is in het moment zelf. Iemand vraagt naar je tarief. Je voelt aarzeling van de ander. Je gaat improviseren. Je noemt een getal dat je later niet zou hebben gekozen.",
      },
      {
        kind: "p",
        text: "Voorkom dat. Stuur vooraf een korte mail met je tarief en wat erin zit. In het gesprek kun je dan zeggen: \"Zoals in mijn mail van vrijdag staat is mijn tarief X. Voor deze opdracht denk ik aan iets soortgelijks.\" De prijs is dan al genoemd voor het gesprek begint. Dat scheelt de helft van de moeite.",
      },
      { kind: "h2", text: "2. Werk met een vaste, korte zin" },
      {
        kind: "p",
        text: "In het gesprek zelf is het lichter als je niet hoeft te verzinnen hoe je je prijs noemt. Schrijf één zin op waarvan je weet dat hij goed in jouw mond ligt. Bijvoorbeeld: \"Mijn tarief voor dit type opdracht is X. Daar zit Y in.\" Oefen die hardop. Klinkt suf, helpt enorm.",
      },
      { kind: "h2", text: "3. Geef korting alleen op scope, niet op tarief" },
      {
        kind: "p",
        text: "Als een klant aarzelt, ligt de reflex om tarief te verlagen klaar. Niet doen. Verlaag scope. \"Voor dit budget kan ik dit deel doen. Het andere deel kun je zelf oppakken of later inzetten.\" Daar wordt vrijwel iedereen rustig van. Jij houdt je tarief, de klant heeft een werkbare opdracht.",
      },
      {
        kind: "p",
        text: "Het bijkomende voordeel: scope-discussies zijn inhoudelijk. Tarief-discussies voelen persoonlijk. Het gesprek wordt inhoudelijker, en daarmee lichter voor jou.",
      },
      { kind: "h2", text: "4. Beslis niet ter plekke" },
      {
        kind: "p",
        text: "Soms vraagt iemand iets in een gesprek waarvan je weet dat je het niet meteen kunt beantwoorden. Geld, deadline, scope, samenwerking. Het is geen luxe om te zeggen: \"Goede vraag. Daar wil ik even rustig op terugkomen. Ik laat je morgen wat ik ervan vind.\" De meeste klanten waarderen dat. Wie er nee op zegt is niet de klant waar je dit type werk mee wil doen.",
      },
      { kind: "h2", text: "5. Reken niet alleen je uur, ook je herstel" },
      {
        kind: "p",
        text: "Veel neurodivergente ondernemers rekenen hun tarief op een rechte lijn. Uur werk, betaalde uren. Maar je herstel rekent niet in je uur. Een klant die elke week iets nieuws van je vraagt kost je veel meer uren dan zichtbaar zijn op een factuur.",
      },
      {
        kind: "p",
        text: "Reken voor jezelf eens uit wat een gemiddeld klantgesprek je werkelijk kost: gesprek plus opstart plus herstel. Vergelijk dat met wat je factureert. Als de verhouding niet klopt, is je tarief te laag of je werkmodel niet houdbaar. Dat zijn beide te repareren. Maar je moet het wel zien.",
      },
      { kind: "h2", text: "Tot slot" },
      {
        kind: "p",
        text: "Je prijs is zelden het probleem. Het gesprek erover is het probleem. Als je het gesprek lichter maakt, is je prijs vrijwel meteen makkelijker te vragen. En het schrappen van een paar zelfklemmingen scheelt al snel een dag herstel per maand.",
      },
      {
        kind: "link-row",
        text: "Werkblad: het Prijzen-spiekbriefje",
        href: "/downloads/prijzen-spiekbriefje",
      },
    ],
  },
  {
    slug: "demand-avoidance-uitstellen-eigen-deadlines",
    title: "Demand avoidance bij ondernemers: waarom je je eigen deadlines uitstelt",
    description:
      "Hoe demand avoidance werkt, waarom \"gewoon beginnen\" averechts werkt, en welke aanpakken wel in beweging brengen zonder je systeem te dwingen.",
    excerpt:
      "Iets moet en dan kan het niet meer. Niet omdat je niet wil. Juist niet. Hier is wat erachter zit en wat je ermee kunt.",
    category: "Grenzen",
    readingTime: "9 min",
    content: [
      {
        kind: "p",
        text: "Veel ondernemers herkennen het. De taak die je het meest wil doen blijft het langst liggen. De klant van wie je het werk waardeert, mail je het laatst terug. Het project dat je gepassioneerd hebt opgepakt, ligt zes weken in de wacht. Als iemand anders je dit zou aansporen, zou je het direct doen. Maar nu, omdat het van jou moet, niet.",
      },
      {
        kind: "p",
        text: "Dat is geen luiheid en zeker geen onwil. Het is een patroon dat een naam heeft: demand avoidance. Het is sterker bij sommige autistische en AuDHD-breinen dan bij anderen. Voor wie het heeft, kost het veel. In dit stuk schets ik hoe het werkt en wat erbij helpt.",
      },
      { kind: "h2", text: "Wat het is en wat het niet is" },
      {
        kind: "p",
        text: "Demand avoidance is een sterke, vaak onbewuste weerstand tegen dingen die als eis aanvoelen. Hoe sterker de eis, hoe steviger de weerstand. Het maakt niet uit van wie de eis komt: ook eisen van jezelf tellen mee. Sterker nog, eigen eisen worden vaak het meest geblokkeerd, omdat ze de meest invasieve voelen.",
      },
      {
        kind: "p",
        text: "Het is niet uitstelgedrag in de gewone betekenis. Iemand die uitstelt en eraan begint als het echt moet, doet iets anders. Bij demand avoidance werkt \"als het echt moet\" averechts. Hoe hoger de druk, hoe minder beweging. Een externe deadline kan iets oplossen, maar vaak ook niet.",
      },
      { kind: "h2", text: "Hoe het zich in je bedrijf uit" },
      {
        kind: "ul",
        items: [
          "Een aanbod dat klaar is om te versturen, herschrijf je in plaats van het te versturen.",
          "Je website is nooit af, omdat afronden voelt als een afsluiting waar je je niet aan kunt binden.",
          "Een routine die in week één goed werkte, voelt in week drie als dwang.",
          "Je werkt het beste op een vrije dag waarop niets moet, en niet op de dagen waarop je tijd had ingepland.",
          "Een mail van een klant die je waardeert, blijft het langst liggen.",
          "Je krijgt veel gedaan op willekeurige momenten, en bijna niets op geplande momenten.",
        ],
      },
      { kind: "h2", text: "Waarom standaard advies dit erger maakt" },
      {
        kind: "p",
        text: "Veel ADHD-advies werkt vanuit het idee: maak een commitment, vertel het iemand, zet er een deadline op. Voor wie sterke demand avoidance heeft is dat vaak een korte termijn-oplossing die op de middellange termijn een nieuw blok bouwt. De eerste keer werkt het misschien. De vijfde keer niet meer, en dan voelt het systeem ook nog gefaald.",
      },
      {
        kind: "p",
        text: "Wat werkt is niet meer eisen toevoegen, maar de bestaande eisen onderbreken.",
      },
      { kind: "h2", text: "Wat in coaching vaak werkt" },
      { kind: "h3", text: "Verklein de eis tot iets bijna lachwekkends" },
      {
        kind: "p",
        text: "Niet \"ik ga vandaag drie uur aan het aanbod werken\". Wel: \"ik open het bestand\". Dat is het hele commitment. Vaak ben je dan al binnen en doe je meer. Als je niet meer doet, ook prima. Het bestand was open. Morgen verder.",
      },
      { kind: "h3", text: "Maak meerdere paden mogelijk" },
      {
        kind: "p",
        text: "Niet één manier waarop het moet, maar drie manieren waarop het mag. Schrijven kan vandaag. Of stukken hardop opnemen en later uittypen. Of een grove schets op een vel maken en pas daarna typen. Demand avoidance heeft minder grip als er keuze is.",
      },
      { kind: "h3", text: "Gebruik niet-tijdgebonden ankers" },
      {
        kind: "p",
        text: "Een rigide \"elke maandag om negen uur\" werkt vaak averechts. Een anker als \"de eerste keer dat ik op kantoor ben deze week\" geeft hetzelfde ritme zonder de demand-feel.",
      },
      { kind: "h3", text: "Vier doen, kies twee" },
      {
        kind: "p",
        text: "Een takenlijst van vier dingen waarvan je er twee mag kiezen werkt vaker dan vier die alle vier moeten. Het maakt op papier weinig uit, in je hoofd alles. Je gaat doorgaans niet exact twee doen, vaak drie. Maar het idee dat er keuze is, opent het slot.",
      },
      { kind: "h3", text: "Stop met jezelf uitleggen dat het luiheid is" },
      {
        kind: "p",
        text: "Het is geen luiheid. Iemand die op een dag dat niets moet drie uur doorwerkt aan zijn aanbod is niet lui. Schaamte over demand avoidance maakt het effect groter, niet kleiner. Erkenning dat dit een patroon is dat bij jou hoort en dat je ermee kunt werken, scheelt vaak meer dan een nieuwe planningsmethode.",
      },
      { kind: "h2", text: "Tot slot" },
      {
        kind: "p",
        text: "Demand avoidance gaat niet weg. Je kunt er wel mee leren werken zodat het je bedrijf niet meer ondermijnt. Voor veel mensen die ik begeleid is dit een van de plekken waar coaching het snelst voor verschil zorgt. Niet omdat we het oplossen. Omdat we het herkennen en het werk eromheen bouwen.",
      },
      {
        kind: "link-row",
        text: "Lees meer over demand avoidance",
        href: "/themas/demand-avoidance",
      },
    ],
  },
  {
    slug: "nee-zeggen-zonder-relatie-te-breken",
    title: "Nee zeggen tegen een klant zonder de relatie te breken",
    description:
      "Concrete manieren om opdrachten af te wijzen, beschikbaarheid te begrenzen of korting te weigeren zonder dat de klant zich afgewezen voelt.",
    excerpt:
      "Nee zeggen kost veel als je goed wil overkomen. Hier is hoe je het kunt doen zonder dat het de relatie raakt.",
    category: "Grenzen",
    readingTime: "7 min",
    content: [
      {
        kind: "p",
        text: "Een belangrijk verschil tussen ondernemers die houdbaar werken en ondernemers die langzaam opraken zit in nee zeggen. De eerste groep doet het regelmatig en zonder veel gedoe. De tweede groep doet het zelden, en als het lukt, kost het ze dagen.",
      },
      {
        kind: "p",
        text: "Voor veel neurodivergente ondernemers ligt het tweede patroon dichterbij. Het is niet dat je niet weet wat je wil. Het is dat het gesprek waarin je je nee uitspreekt veel kost. Je voelt het ongemak van de ander, je leest mee op zijn gezicht, je weegt je toon. En dan zeg je toch ja, of een halve ja.",
      },
      {
        kind: "p",
        text: "Hier is hoe je het lichter maakt.",
      },
      { kind: "h2", text: "Begin bij wat je niet wil" },
      {
        kind: "p",
        text: "Veel mensen proberen in het moment te bedenken wat ze willen zeggen. Dat is precies de plek waar masking en demand avoidance binnenkomen. Beter is om vooraf, op een rustig moment, na te denken over wat je niet wil. Welk soort werk niet. Welke beschikbaarheid niet. Welke betaaltermijn niet. Welke voorwaarden niet.",
      },
      {
        kind: "p",
        text: "Schrijf dat op. Niet als beleid op je website (al kan dat helpen), maar als handvat voor jezelf. In het gesprek hoef je dan niets te bedenken. Je hoeft alleen te raadplegen.",
      },
      { kind: "h2", text: "Gebruik een vorm die de klant niets neemt" },
      {
        kind: "p",
        text: "Een nee landt zachter als je de klant niet leeg laat staan. Drie vormen die meestal werken.",
      },
      {
        kind: "p",
        text: "Eerste: een nee met een verwijzing. \"Ik denk dat dit beter past bij X, die ken ik en kan het echt goed.\" Daar wordt iedereen rustig van. Je klant heeft een richting, jij hoeft niet.",
      },
      {
        kind: "p",
        text: "Tweede: een nee met een alternatief. \"Voor deze opdracht ben ik niet de goede persoon. Wel kan ik je helpen met X, als dat een vraag is die er ook ligt.\" Sommige klanten gaan daarop in. Anderen niet, en dan is dat ook duidelijk.",
      },
      {
        kind: "p",
        text: "Derde: een nee met scope. \"Dit hele pakket past niet bij mijn manier van werken. Het deel X wel. Als je daar mee uit de voeten kunt, doe ik mee.\" Geeft de klant ruimte om te schikken zonder dat je hele werk wordt opgerekt.",
      },
      { kind: "h2", text: "Wees concreet en kort" },
      {
        kind: "p",
        text: "Een nee landt slechter als hij vaag wordt. \"Ik ga er nog even over nadenken\" wordt vaak gehoord als een ja-met-twijfel, terwijl je het bedoelde als nee. Wees liever concreet: \"Ik ga dit niet doen.\" Of: \"Dat past niet bij hoe ik werk.\" Klaar.",
      },
      {
        kind: "p",
        text: "Daar hoort meestal geen lange uitleg bij. Een lange uitleg geeft de klant haakjes om alsnog te onderhandelen, en geeft jou een lang gesprek over een nee. Een korte, beleefde, duidelijke zin is voor allebei beter.",
      },
      { kind: "h2", text: "Wat als de klant teleurgesteld is" },
      {
        kind: "p",
        text: "Soms is dat zo. Daar mag je iets in benoemen, kort. \"Ik snap dat je hier op had gehoopt. Ik wil eerlijk zijn over wat ik wel en niet doe.\" Niet om te bevechten, om te erkennen. Daarna verandert er meestal niets meer aan de inhoud, en dat is ook geen ramp. Klanten die hier slecht op reageren waren klanten die jou hetzelfde patroon nog vaker zouden hebben aangedaan.",
      },
      { kind: "h2", text: "Oefen op kleine dingen" },
      {
        kind: "p",
        text: "Nee zeggen op een grote opdracht is moeilijk. Nee zeggen op een kort verzoek is makkelijker en bouwt iets op. Een mail die vraagt om snel even iets, een verzoek om een telefoongesprek tussendoor, een verzoek om gratis advies in een netwerkgesprek. Daar mag je nee. Vriendelijk. Concreet. Zonder uitleg. Hoe vaker je dat doet bij kleine dingen, hoe makkelijker het wordt bij grote.",
      },
      {
        kind: "link-row",
        text: "Lees meer over prijzen en onderhandelen",
        href: "/themas/prijzen-onderhandelen",
      },
    ],
  },
  // Werkwijze & beslissingen
  {
    slug: "1-op-1-coaching-autistische-ondernemers",
    title: "Waarom 1-op-1 coaching voor autistische ondernemers vaak beter werkt dan een groepstraject",
    description:
      "Wat een livegroep aan extra werk vraagt, waarom dat voor veel autistische ondernemers een hoge drempel is, en wat 1-op-1 anders doet.",
    excerpt:
      "Een groep kan goed werken. Voor veel autistische ondernemers werkt 1-op-1 sneller en met minder herstel. Hier is waarom.",
    category: "Werkwijze",
    readingTime: "7 min",
    content: [
      {
        kind: "p",
        text: "Veel coachingstrajecten voor ondernemers zijn opgezet als groep. Een cohort van zes tot twaalf mensen die samen door een programma gaan. Voor sommigen is dat geweldig. Voor veel autistische en AuDHD-ondernemers is het een drempel die maakt dat ze niet beginnen, of die maakt dat ze stoppen na drie sessies.",
      },
      {
        kind: "p",
        text: "Dit stuk gaat over waarom dat zit en wat een 1-op-1 traject anders doet. Niet om iets weg te zetten, wel om iets bij te zetten.",
      },
      { kind: "h2", text: "Wat een livegroep van je vraagt" },
      {
        kind: "p",
        text: "Een groep is meer dan inhoud plus tijd. Er zit een sociale laag bij die voor sommige mensen vanzelf gaat en voor anderen werk is.",
      },
      {
        kind: "ul",
        items: [
          "Inschatten waar je in een gesprek mag inhaken zonder iemand te onderbreken.",
          "Lezen hoe de anderen zitten, en je toon daarop aanpassen.",
          "Beslissen of het oke is om iets persoonlijks te delen of niet.",
          "Wachten op je beurt terwijl je gedachte alweer twee onderwerpen verder is.",
          "Bij videobellen: oogcontact mee-houden in een raster van zes gezichten.",
          "Sociaal vlot blijven ook als jouw vraag op dat moment niet aan de beurt is.",
        ],
      },
      {
        kind: "p",
        text: "Voor een neurotypische ondernemer is dat een licht ongemak dat na een paar sessies wegvalt. Voor veel autistische ondernemers blijft het werk. Werk dat los staat van waarom je begon: je bedrijf vooruit brengen.",
      },
      { kind: "h2", text: "Wat een 1-op-1 weghaalt" },
      {
        kind: "p",
        text: "In een 1-op-1 traject hoef je dat sociale werk niet te doen. Je bent met één persoon. Je bepaalt het tempo. Je kunt stil zijn zonder dat het ongemakkelijk is. Je kunt iets persoonlijks delen zonder dat een groep meeleest. Je kunt afzien van delen zonder dat er een lege plek valt in de rondvraag.",
      },
      {
        kind: "p",
        text: "Dat scheelt vaak verbazingwekkend veel. Veel mensen die naar mij komen zeggen achteraf dat ze in een groep nooit een derde van wat ze in een 1-op-1 deelden naar boven hadden gehaald. Niet omdat ze het niet wilden. Omdat de timing en de sociale ruimte niet bestond.",
      },
      { kind: "h2", text: "Maar wat je mist in een groep" },
      {
        kind: "p",
        text: "Eerlijk: in een 1-op-1 mis je twee dingen. Lotgenotencontact en het effect van andermans vragen die jou nieuwe inzichten geven.",
      },
      {
        kind: "p",
        text: "Het eerste kun je elders zoeken. Een community, een appgroep, één goed gesprek met een vakgenoot. Niet binnen je coachingstraject, dat is rustiger.",
      },
      {
        kind: "p",
        text: "Het tweede is een echt voordeel van groepen dat niet helemaal te vervangen is. Wat ik er in een 1-op-1 voor doe: ik breng tussen sessies door voorbeelden van anderen langs, geanonimiseerd, op punten waar ik denk dat ze raken. Niet hetzelfde leereffect als zelf horen, wel een gedeelte ervan.",
      },
      { kind: "h2", text: "Wanneer een groep wel werkt" },
      {
        kind: "p",
        text: "Voor sommige mensen werkt een groep prima. Vaak zijn dat mensen die de sociale energie niet als kostenpost ervaren en die juist wat hebben aan andermans verhalen. Voor wie sociaal contact geen werk is, kan een groep een opener en sneller pad zijn.",
      },
      {
        kind: "p",
        text: "Wat in mijn ervaring vaak het verschil maakt is hoe een eerste kennismaking voelt. Voelt het idee van zes andere ondernemers samen een rustige bron? Dan past een groep mogelijk. Voelt het als een berg vóór je inhoudelijke werk? Dan past 1-op-1 beter.",
      },
      {
        kind: "p",
        text: "Bij Gewoon Anders is het traject 1-op-1. Niet omdat groepen slecht zijn, wel omdat de specifieke groep waar ik voor ben juist hier het meeste aan heeft.",
      },
      {
        kind: "link-row",
        text: "Lees meer over autistische ondernemers",
        href: "/voor-wie/autistische-ondernemers",
      },
    ],
  },
  {
    slug: "mailsessies-in-coaching",
    title: "Mailsessies in coaching: voor wie het werkt en waarom",
    description:
      "Een uitleg van wat een mailsessie is, voor wie het past, wat je ervoor terugkrijgt, en hoe je voorkomt dat het een eindeloos gesprek wordt.",
    excerpt:
      "Een sessie hoeft geen videocall te zijn. Voor sommige breinen werkt mail beter dan praten. Hier is hoe dat eruitziet.",
    category: "Werkwijze",
    readingTime: "6 min",
    content: [
      {
        kind: "p",
        text: "Eén van de kanalen die ik in coaching aanbied is de mailsessie. Voor veel mensen is dat een nieuw idee. \"Mag dat ook, een sessie zonder gesprek?\" Ja. En voor sommige breinen werkt het zelfs beter dan een videocall.",
      },
      {
        kind: "p",
        text: "In dit stuk leg ik uit wat een mailsessie is, voor wie het past, en hoe ik voorkom dat het een onbedoelde, eindeloze uitwisseling wordt.",
      },
      { kind: "h2", text: "Hoe het werkt" },
      {
        kind: "p",
        text: "Een mailsessie is een afgebakende uitwisseling. Jij stuurt een mail. Daarin schrijf je over je situatie en je vraag. Geen format, wel inhoudelijk: waar zit je mee, wat heb je geprobeerd, wat speelt eromheen. Lengte: net zoveel als nodig om het helder te krijgen.",
      },
      {
        kind: "p",
        text: "Ik lees die mail rustig, vaak op een piek-moment in mijn week. Daarna stuur ik binnen drie werkdagen een uitgewerkte reactie. Inzichten, vragen terug als die nodig zijn, en meestal twee tot drie concrete stappen. Samen telt dat als één sessie.",
      },
      { kind: "h2", text: "Voor wie het past" },
      {
        kind: "ul",
        items: [
          "Wie beter denkt en formuleert in tekst dan in een gesprek.",
          "Wie tijd nodig heeft om iets te ordenen voor het de deur uit gaat.",
          "Wie videobellen of bellen overprikkelend vindt, of na een gesprek lang nodig heeft om bij te komen.",
          "Wie een drukke week heeft en geen tijdstip kan vastleggen, maar wel wat kwijt wil.",
          "Wie het rustig vindt om mijn reactie te kunnen herlezen.",
        ],
      },
      { kind: "h2", text: "Voor wie het niet past" },
      {
        kind: "p",
        text: "Mailsessies zijn niet handig als je vraag heel zoek-achtig is en gebaat is bij doorvragen in een gesprek. Of als je iets wilt waar emotie bij hoort en je het beste hardop kunt benoemen. Of als je op een stuk wil reflecteren samen, waar de uitwisseling tussen jou en mij belangrijker is dan een uitgewerkte schriftelijke gedachte. Dan is bellen of videobellen sneller en effectiever.",
      },
      { kind: "h2", text: "Hoe ik het werkbaar houd" },
      {
        kind: "p",
        text: "Veel coaches doen geen mailsessies omdat het uit de hand kan lopen. Een korte vraag, een lange reactie, daarop weer een korte vraag, en zo verder. Dat is voor coach en deelnemer onhoudbaar. Ik werk met een paar duidelijke afspraken die maken dat het werkt.",
      },
      {
        kind: "ul",
        items: [
          "Eén mail in, één mail uit. Een mailsessie is geen open draad. Wil je doorgaan, dan plannen we een volgende sessie.",
          "De inhoudelijke mail moet uitgewerkt zijn. Niet een paar regels, wel zo dat ik genoeg context heb om te reageren. Drie tot zes alinea's is gangbaar.",
          "Ik reageer binnen drie werkdagen, in een uitgewerkte vorm. Niet snelle stukjes. Wel doordachte tekst.",
          "Tussen mailsessies door is er geen onbeperkt mailen. Voor korte vragen tussendoor is er het begrensde mailkanaal van het traject, met vaste reactiemomenten.",
        ],
      },
      { kind: "h2", text: "Hoe het in een traject past" },
      {
        kind: "p",
        text: "In het traject Anders Ondernemen kies je per sessie het kanaal. Dat mag wisselen. Sessie één videobellen, sessie twee mail, sessie drie bellen zonder beeld. Geen vorm is een mindere keuze. Voor veel mensen die ik begeleid is een mix het meest comfortabel. Mailsessies voor de denkstappen, videocalls voor de stappen waarin het gesprek een rol speelt.",
      },
      {
        kind: "p",
        text: "Voor wie het concept nieuw is: probeer het in de gratis kennismaking. Dat kan ook per mail. Jij schrijft je situatie en vraag, ik reageer. Geen kosten. Daarna weet je of dit kanaal jou past.",
      },
      {
        kind: "link-row",
        text: "Lees meer over het traject",
        href: "/traject",
      },
    ],
  },
  {
    slug: "coaching-of-therapie-voor-neurodivergente-ondernemers",
    title: "Coaching of therapie? Het verschil voor neurodivergente ondernemers",
    description:
      "Wanneer je beter naar een coach gaat en wanneer naar een therapeut, en hoe je het verschil herkent in jouw situatie. Met respect voor de overlap.",
    excerpt:
      "Soms is coaching het juiste, soms therapie. Soms beide na elkaar. Hier is hoe ik het onderscheid bewaak in mijn werk.",
    category: "Werkwijze",
    readingTime: "7 min",
    content: [
      {
        kind: "p",
        text: "Voor neurodivergente ondernemers die hulp zoeken is de keuze tussen coaching en therapie niet altijd duidelijk. Beide gaan over je leven, beide praten met je, beide kunnen helpen. Voor de meeste mensen is een mix nodig op verschillende momenten. In dit stuk schets ik hoe ik het onderscheid maak in mijn werk en wanneer ik je liever naar iemand anders verwijs.",
      },
      { kind: "h2", text: "Wat coaching is" },
      {
        kind: "p",
        text: "Coaching is praktisch en op de toekomst gericht. We werken aan iets concreets in je leven of je werk. Bij Gewoon Anders is dat altijd je bedrijf: hoe je werkt, met welke klanten, op welke voorwaarden, met welk ritme. We kijken hoe het nu is, waar het schuurt, en wat je anders kunt inrichten.",
      },
      {
        kind: "p",
        text: "Coaching is geen behandeling. Ik stel geen diagnoses, schrijf niets voor, en ben geen aanspreekpunt bij crisis. Wel ben ik iemand die weet hoe het is om ondernemer te zijn met een neurodivergent brein, en die je daarbij helpt om praktische keuzes te maken.",
      },
      { kind: "h2", text: "Wat therapie is" },
      {
        kind: "p",
        text: "Therapie is breder en gaat vaak over heel andere lagen. Verwerking van wat eerder gebeurde. Patronen die je in je leven en relaties terugziet. Emotionele klachten die zich uiten in je lichaam of in hoe je je in de wereld voelt. Trauma. Een therapeut is opgeleid om die lagen aan te raken op een manier waarop het veilig kan.",
      },
      {
        kind: "p",
        text: "Een diagnose stellen, behandelplan maken, medicatie afstemmen, intensieve verwerking: dat hoort bij therapie of bij psychologische zorg. Niet bij coaching.",
      },
      { kind: "h2", text: "Hoe je het verschil herkent in jezelf" },
      {
        kind: "p",
        text: "Een paar vragen die kunnen helpen bij wat past.",
      },
      {
        kind: "ul",
        items: [
          "Gaat je vraag over hoe je je werk anders inricht? Coaching.",
          "Gaat je vraag over hoe je je voelt en wat dat vraagt om te dragen? Therapie.",
          "Wil je dat iemand met je meedenkt over je bedrijf op basis van ervaring? Coaching.",
          "Wil je dat iemand met je meekijkt naar wat eerder in je leven is gebeurd? Therapie.",
          "Voel je je in crisis of vlak bij een crisis? Eerst zorg, daarna pas eventueel coaching.",
        ],
      },
      { kind: "h2", text: "Wanneer ik je doorverwijs" },
      {
        kind: "p",
        text: "Soms begint iemand bij mij en blijkt al snel dat coaching niet de goede plek is op dit moment. Dat zeg ik dan. Niet met een lange uitleg, wel duidelijk. We stoppen of we pauzeren, en ik denk met je mee over een goede plek.",
      },
      {
        kind: "p",
        text: "Andersom komt ook voor: iemand werkt al lang met een therapeut, en wil daarnaast iemand erbij die specifiek met zijn of haar bedrijf meekijkt. Dat kan goed naast elkaar. Coaching en therapie sluiten elkaar niet uit.",
      },
      { kind: "h2", text: "Een tussenvorm bestaat niet" },
      {
        kind: "p",
        text: "Er is een groep coaches die zegt dat ze coachen \"met therapeutische inslag\". Voor veel mensen klinkt dat prettig. Voor mij is het oppassen. Het risico is dat je dingen aanraakt die meer omhulling nodig hebben dan een coach kan bieden. Ik blijf liever aan een kant van de lijn en houd het zuiver. Dat geeft jou ook duidelijkheid over waar je terecht kunt.",
      },
      {
        kind: "p",
        text: "Bij Anders Ondernemen gaat het over je bedrijf. Over je brein in dat bedrijf. Niet over wat eerder is gebeurd of wat onverwerkt is. Als dat aan de orde komt, en het komt soms aan de orde, benoemen we het en ik help je iemand vinden die daarbij past.",
      },
      {
        kind: "link-row",
        text: "Lees over mij en mijn werkwijze",
        href: "/over-mij",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function postSummary(p: Post) {
  return {
    slug: p.slug,
    title: p.title,
    description: p.description,
    excerpt: p.excerpt,
    category: p.category,
    readingTime: p.readingTime,
  };
}
