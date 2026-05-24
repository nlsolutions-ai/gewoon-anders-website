export type Situatie = {
  id: number;
  text: string;
  /** Short context tag visible on the result card */
  context: string;
};

export const situaties: Situatie[] = [
  {
    id: 1,
    text: "Een eerste klantgesprek waarin je je toon en tempo aanpast op de ander.",
    context: "Klantcontact",
  },
  {
    id: 2,
    text: "Een lopend klantgesprek dat langer duurt dan afgesproken, zonder dat je het kunt stoppen.",
    context: "Klantcontact",
  },
  {
    id: 3,
    text: "Een prijsgesprek waarin je het ongemak van de ander voelt en je prijs verlaagt.",
    context: "Geld en prijs",
  },
  {
    id: 4,
    text: "Een netwerk-event waar je doet alsof je het leuk vindt.",
    context: "Netwerken",
  },
  {
    id: 5,
    text: "Een LinkedIn-post die je niet plaatst omdat hij niet klinkt zoals 'ondernemers schrijven'.",
    context: "Zichtbaarheid",
  },
  {
    id: 6,
    text: "Een mail die je drie keer herschrijft om te zorgen dat de toon goed valt.",
    context: "Klantcontact",
  },
  {
    id: 7,
    text: "Een telefoongesprek waarin je niet de tijd hebt die je nodig hebt om scherp te antwoorden.",
    context: "Klantcontact",
  },
  {
    id: 8,
    text: "Een feedbackgesprek met een klant waar je iets oneens bent maar niets zegt.",
    context: "Grenzen",
  },
  {
    id: 9,
    text: "Een vergadering waar je oogcontact maakt om sociaal vlot over te komen.",
    context: "Klantcontact",
  },
  {
    id: 10,
    text: "Een dag waarop je vooraf hebt besloten 'ik ga er fris uitzien', ongeacht hoe je je voelt.",
    context: "Energie",
  },
  {
    id: 11,
    text: "Een verkoopgesprek waar je enthousiast doet over een aanbod dat je niet helemaal voelt.",
    context: "Geld en prijs",
  },
  {
    id: 12,
    text: "Een afspraak die je nakomt terwijl je systeem schreeuwt dat je niet kunt.",
    context: "Grenzen",
  },
];

export const maskingAnswerOptions = [
  { value: 1, label: "Bijna nooit" },
  { value: 2, label: "Soms" },
  { value: 3, label: "Vaak" },
  { value: 4, label: "Bijna altijd" },
] as const;

export type Interpretation = "low" | "mid" | "high";

/** Total score is 12-48 across 12 statements. */
export function interpretTotal(score: number): Interpretation {
  if (score <= 23) return "low";
  if (score <= 35) return "mid";
  return "high";
}

export const totalInterpretations: Record<
  Interpretation,
  { title: string; text: string }
> = {
  low: {
    title: "Je weet meestal jezelf te zijn",
    text: "In de meeste werksituaties maskeer je weinig. Dat is winst, want het werk dat je doet kost je minder dan voor mensen die wel masking moeten doen. Houd in de gaten of er een paar specifieke plekken zijn waar het je nog veel kost.",
  },
  mid: {
    title: "Op enkele plekken kost masking je veel",
    text: "Er zijn situaties waar je jezelf goed kunt zijn en situaties waar je veel werk levert om er sociaal vlot uit te zien. Dat tweede telt op. Hieronder zie je de zwaarste plekken. Daar zit de meeste winst.",
  },
  high: {
    title: "Masking neemt veel werk over",
    text: "In veel werksituaties draai je een tweede taak naast je inhoudelijke werk: jezelf zo houden dat het sociaal soepel oogt. Dat verklaart waarschijnlijk waarom je vaak leeg bent. Dit is geen reden om iemand anders te worden. Het is wel een goede reden om je werk anders in te richten zodat je het minder hoeft.",
  },
};

/** Returns the top N situations by score (highest first) for "where it costs you most". */
export function topSituaties(answers: number[], n = 3) {
  return situaties
    .map((s, i) => ({ situatie: s, score: answers[i] ?? 0 }))
    .filter((x) => x.score >= 3) // only show items they actually scored as vaak/altijd
    .sort((a, b) => b.score - a.score)
    .slice(0, n);
}
