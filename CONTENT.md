# Content-cheatsheet voor Gewoon Anders

Welke tekst zit in welk bestand. Bedoeld voor snelle text-edits via de
GitHub web editor of `.`-toets editor.

## Tip: gebruik `.` op github.com

Open de repo op github.com en druk op `.` (punt). Dan opent de hele repo in
een VS Code-achtige editor in je browser. Met `Cmd+P` (of `Ctrl+P`) kun je
een bestand zoeken op naam. Met `Cmd+Shift+F` zoek je in alle bestanden naar
een specifieke zin — dat is vaak het snelst om een typo te vinden.

---

## Hoofdpagina's

| URL | Bestand |
|---|---|
| `/` (homepage) | `src/routes/index.tsx` |
| `/over-mij` | `src/routes/over-mij.tsx` |
| `/traject` | `src/routes/traject.tsx` |
| `/verhalen` (testimonials) | `src/routes/verhalen.tsx` |
| `/faq` (veelgestelde vragen) | `src/routes/faq.tsx` |
| `/contact` (intake-kennismaking) | `src/routes/contact.tsx` |
| `/sessie` (sessie-plannen voor klanten) | `src/routes/sessie.tsx` |
| `/welkom` (na betaling, 8 sessies) | `src/routes/welkom.tsx` |
| `/welkom-kort` (na betaling, 4 sessies) | `src/routes/welkom-kort.tsx` |
| `/privacy` | `src/routes/privacy.tsx` |
| `/voorwaarden` | `src/routes/voorwaarden.tsx` |

## Voor-wie-pagina's

| URL | Bestand |
|---|---|
| `/voor-wie/adhd-ondernemers` | `src/routes/voor-wie/adhd-ondernemers.tsx` |
| `/voor-wie/autistische-ondernemers` | `src/routes/voor-wie/autistische-ondernemers.tsx` |
| `/voor-wie/audhd-ondernemers` | `src/routes/voor-wie/audhd-ondernemers.tsx` |
| `/voor-wie/laat-ontdekt` | `src/routes/voor-wie/laat-ontdekt.tsx` |

## Thema-pagina's

| URL | Bestand |
|---|---|
| `/themas/masking` | `src/routes/themas/masking.tsx` |
| `/themas/overprikkeling` | `src/routes/themas/overprikkeling.tsx` |
| `/themas/energie-burnout` | `src/routes/themas/energie-burnout.tsx` |
| `/themas/executive-functies` | `src/routes/themas/executive-functies.tsx` |
| `/themas/demand-avoidance` | `src/routes/themas/demand-avoidance.tsx` |
| `/themas/prijzen-onderhandelen` | `src/routes/themas/prijzen-onderhandelen.tsx` |
| `/themas/zichtbaarheid-netwerken` | `src/routes/themas/zichtbaarheid-netwerken.tsx` |

## Blog-artikelen (alle 17)

Alle blogs zitten in één bestand:

**`src/lib/blog-data.ts`**

Elk artikel staat als een object met `slug`, `title`, `description`, `excerpt`,
`category`, `readingTime` en `content` (een array met paragrafen, headings en
lijsten). Zoek in dat bestand op een stuk tekst dat je wil aanpassen, en
verander het ter plekke.

## Scans (energiescan en masking-check)

| Wat | Bestand |
|---|---|
| Vragen + uitslag-teksten energiescan | `src/lib/energiescan-data.ts` |
| Vragen + uitslag-teksten masking-check | `src/lib/masking-check-data.ts` |
| De scan-pagina zelf (intro, knoppen) | `src/routes/energiescan.tsx` / `src/routes/masking-check.tsx` |

## Downloads (freebies)

| Wat | Bestand |
|---|---|
| Overzicht-pagina met 4 cards | `src/routes/downloads/index.tsx` |
| Individuele werkblad-pagina's | `src/routes/downloads/$slug.tsx` |

## Navigatie en footer

| Wat | Bestand |
|---|---|
| Bovenste navigatie (menu's, dropdowns) | `src/components/SiteNav.tsx` |
| Footer onderaan elke pagina | `src/components/SiteFooter.tsx` |

---

## Tips bij het bewerken

**1. Je hoeft de code rondom de tekst niet te begrijpen.**
Tekst staat tussen aanhalingstekens (`"..."`) of in `text:` velden. Verander
alleen wat tussen de aanhalingstekens staat.

**2. Apostroffen en quotes.**
- Gebruik `'` (gewone apostrof) voor woorden als `'s`, `'t`, `'m`.
- Voor aanhalingstekens binnen een zin, gebruik `\"` (met backslash ervoor),
  of herschrijf de zin. Voorbeeld:
  ```
  text: "Klanten zeggen vaak: \"dit had ik nooit verwacht\"."
  ```

**3. Regelafbrekingen.**
Een nieuwe alinea is een nieuw blok in de array. Een regel-binnen-alinea
kan met `\n\n` of door gewoon door te schrijven.

**4. Links.**
Interne links zien er zo uit:
```jsx
<Link to="/themas/masking">Masking in het ondernemen</Link>
```
Externe links zo:
```jsx
<a href="https://...">Tekst</a>
```

**5. Vergeet niet op te slaan + committen.**
Onderaan de GitHub-editor staat "Commit changes". Geef een korte beschrijving
zoals "Tekst homepage aangepast" en klik commit. Vercel deployt automatisch.

---

## Wanneer Claude vragen

Voor deze dingen is het sneller om Claude te vragen dan zelf te doen:

- **Nieuwe blog schrijven** — copy + structuur + plek in `blog-data.ts`
- **Volledige pagina herschrijven** — bijvoorbeeld de homepage van toon
  veranderen
- **Nieuwe scan/quiz toevoegen**
- **Nieuwe pagina toevoegen** — bijvoorbeeld een aparte landingspagina
- **Iets dat de structuur of styling raakt** — een sectie verplaatsen,
  een knop ergens toevoegen
- **Iets dat in meerdere bestanden tegelijk moet** — bijvoorbeeld een
  productnaam op de hele site aanpassen

Voor deze dingen ben je sneller af zelf:

- **Eén woord typo's**
- **Een zin scherper maken**
- **Een prijs of datum aanpassen**
- **Een e-mailadres of telefoonnummer corrigeren**
- **Een link aanpassen**

Korte vuistregel: als je het in onder de twee minuten weet te vinden via de
zoekfunctie, doe je het zelf. Anders vraag je Claude.
