export type Gebied = {
  id: number;
  title: string;
  subtitle: string;
  /** number of statements in this gebied */
  count: number;
  /** average range as printed in the PDF */
  avgMin: number;
  avgMax: number;
  results: {
    low: { title: string; text: string };
    mid: { title: string; text: string };
    high: { title: string; text: string };
  };
};

export type Statement = {
  id: number;
  gebied: number;
  text: string;
};

export const gebieden: Gebied[] = [
  {
    id: 1,
    title: "Je brein aan het werk",
    subtitle: "Hoe je aandacht, focus en taken op je inwerken tijdens een werkdag.",
    count: 4,
    avgMin: 8,
    avgMax: 12,
    results: {
      low: {
        title: "Er is hier veel rust",
        text: "Starten, schakelen en focussen gaan je redelijk goed af, of je hebt er al manieren voor gevonden. Dat is een sterke basis om op te bouwen.",
      },
      mid: {
        title: "Hier valt iets te winnen",
        text: "Op sommige momenten werkt je brein soepel mee, op andere botst het. Vaak zit het verschil in timing en in hoe je je dag indeelt. Daar is winst te halen.",
      },
      high: {
        title: "Hier lekt je energie weg",
        text: "Je brein en je werkdag werken regelmatig tegen elkaar in. Dat kost je veel energie en het voelt waarschijnlijk als een dagelijks gevecht. Dit is geen kwestie van discipline. Het is een kwestie van je werk anders inrichten, passend bij hoe jouw brein nu eenmaal werkt.",
      },
    },
  },
  {
    id: 2,
    title: "Je energie",
    subtitle: "Hoe je werk je energie kost en geeft, en hoe het herstel verloopt.",
    count: 4,
    avgMin: 8,
    avgMax: 12,
    results: {
      low: {
        title: "Er is hier veel rust",
        text: "Je houdt je energie redelijk in balans, of je merkt op tijd wanneer je moet bijsturen. Blijf goed letten op je vroege signalen.",
      },
      mid: {
        title: "Hier valt iets te winnen",
        text: "Je energie raakt met enige regelmaat op, en herstel kost tijd. Waarschijnlijk merk je een terugval pas als hij er al is. Je vroege signalen leren herkennen maakt veel verschil.",
      },
      high: {
        title: "Hier lekt je energie weg",
        text: "Je raakt structureel leeg, en herstellen lukt nauwelijks voordat de volgende belasting komt. Dit is een serieus signaal. Niet om bang van te worden, wel om iets mee te doen. Werk dat is afgestemd op jouw energie is geen luxe, het is noodzaak om vol te kunnen houden.",
      },
    },
  },
  {
    id: 3,
    title: "Je structuur",
    subtitle: "Hoe planning, systemen en overzicht in jouw werk uitpakken.",
    count: 3,
    avgMin: 6,
    avgMax: 9,
    results: {
      low: {
        title: "Er is hier veel rust",
        text: "Je hebt een vorm van structuur gevonden die voor jou werkt, of je hebt er weinig last van. Mooi, dat is precies de bedoeling.",
      },
      mid: {
        title: "Hier valt iets te winnen",
        text: "Je structuur werkt deels, maar niet betrouwbaar. Vaak komt dat doordat de methode oorspronkelijk voor een ander soort brein is bedacht. Een structuur die vanuit jouw brein is ontworpen, houdt langer stand.",
      },
      high: {
        title: "Hier lekt je energie weg",
        text: "Geen enkel systeem lijkt bij je te blijven plakken. Dat ligt niet aan jou en niet aan een gebrek aan wilskracht. Het ligt aan systemen die niet voor jouw brein zijn gemaakt. Met een structuur die wel bij je past, verandert dit.",
      },
    },
  },
  {
    id: 4,
    title: "Je grenzen",
    subtitle: "Hoe je grenzen stelt naar klanten en naar jezelf.",
    count: 4,
    avgMin: 8,
    avgMax: 12,
    results: {
      low: {
        title: "Er is hier veel rust",
        text: "Je weet je grenzen redelijk te bewaken, in prijs, beschikbaarheid en nee zeggen. Dat beschermt je energie en je bedrijf.",
      },
      mid: {
        title: "Hier valt iets te winnen",
        text: "Je grenzen staan soms wel en soms niet. Vaak weet je heus wel waar je grens ligt, maar ontbreken de woorden om hem te stellen. Dat is goed te leren.",
      },
      high: {
        title: "Hier lekt je energie weg",
        text: "Je grenzen staan onder druk: te lage prijzen, te veel bereikbaarheid, moeite met nee zeggen. Dat kost je geld en energie. Onthoud: een grens is geen karakterfout. Het is een manier om goed voor jezelf te zorgen, zodat je je werk kunt blijven doen.",
      },
    },
  },
  {
    id: 5,
    title: "Je richting",
    subtitle: "Hoe goed de richting van je bedrijf past bij wie jij bent.",
    count: 3,
    avgMin: 6,
    avgMax: 9,
    results: {
      low: {
        title: "Er is hier veel rust",
        text: "De richting van je bedrijf past redelijk bij wie je bent. Je werkt grotendeels vanuit eigen keuzes, niet vanuit wat hoort.",
      },
      mid: {
        title: "Hier valt iets te winnen",
        text: "Je twijfelt af en toe of je bedrijf nog de goede kant op gaat. Vaak zit daar een aanname onder die niet van jou is, bijvoorbeeld over groei. Het loont om die richting bewust te onderzoeken.",
      },
      high: {
        title: "Hier lekt je energie weg",
        text: "Je bedrijf gaat een kant op die niet voelt als de jouwe. Misschien doe je werk dat niet past, of voel je druk om te groeien terwijl je dat niet wil. Dit is het moment om stil te staan bij de vraag welk bedrijf echt bij jouw brein past.",
      },
    },
  },
];

export const statements: Statement[] = [
  // Gebied 1: Je brein aan het werk
  { id: 1, gebied: 1, text: "Ik weet wat ik moet doen, maar beginnen lukt vaak niet." },
  { id: 2, gebied: 1, text: "Schakelen tussen taken kost me onevenredig veel moeite." },
  { id: 3, gebied: 1, text: "Als ik onderbroken word, ben ik de draad daarna lang kwijt." },
  { id: 4, gebied: 1, text: "Ik stel bepaalde taken eindeloos uit, ook simpele." },

  // Gebied 2: Je energie
  { id: 5, gebied: 2, text: "Na een klantgesprek ben ik leeg, ook als het gesprek goed ging." },
  { id: 6, gebied: 2, text: "Aan het eind van een werkdag is er weinig van mij over." },
  { id: 7, gebied: 2, text: "Ik merk pas dat ik over mijn grens ga als het eigenlijk al te laat is." },
  { id: 8, gebied: 2, text: "Een dag met veel afspraken of prikkels heeft dagen nodig om te herstellen." },

  // Gebied 3: Je structuur
  { id: 9, gebied: 3, text: "Ik heb veel planningsmethodes geprobeerd, maar geen enkele houdt stand." },
  { id: 10, gebied: 3, text: "Mijn werk leunt op systemen die voor anderen lijken te zijn gemaakt." },
  { id: 11, gebied: 3, text: "Ik verlies overzicht zodra er te veel tegelijk speelt." },

  // Gebied 4: Je grenzen
  { id: 12, gebied: 4, text: "Ik vraag een lagere prijs dan eigenlijk eerlijk is." },
  { id: 13, gebied: 4, text: "Nee zeggen tegen werk of verzoeken kost me veel moeite." },
  { id: 14, gebied: 4, text: "Ik ben vaker bereikbaar dan goed voor me is." },
  { id: 15, gebied: 4, text: "Ik cijfer mezelf weg om een klant niet teleur te stellen." },

  // Gebied 5: Je richting
  { id: 16, gebied: 5, text: "Ik doe werk dat me eigenlijk niet past, omdat het nu eenmaal zo gegroeid is." },
  { id: 17, gebied: 5, text: "Ik voel druk om te groeien, terwijl dat niet mijn eigen doel is." },
  { id: 18, gebied: 5, text: "Ik weet niet goed welk soort bedrijf echt bij mijn brein zou passen." },
];

export const answerOptions = [
  { value: 1, label: "Klopt niet" },
  { value: 2, label: "Klopt soms" },
  { value: 3, label: "Klopt vaak" },
  { value: 4, label: "Klopt helemaal" },
] as const;

export type Interpretation = "low" | "mid" | "high";

export function interpret(gebied: Gebied, score: number): Interpretation {
  if (score < gebied.avgMin) return "low";
  if (score > gebied.avgMax) return "high";
  return "mid";
}

/** Calculate score for each gebied from full answer array (length 18, values 1-4) */
export function scoresByGebied(answers: number[]): Record<number, number> {
  const result: Record<number, number> = {};
  for (const g of gebieden) result[g.id] = 0;
  statements.forEach((s, i) => {
    const v = answers[i];
    if (typeof v === "number") result[s.gebied] += v;
  });
  return result;
}
