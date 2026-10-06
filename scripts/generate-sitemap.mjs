#!/usr/bin/env node
/**
 * Genereert dist/client/sitemap.xml uit de daadwerkelijk geprerenderde pagina's.
 *
 * Eén bron van waarheid: een pagina die zelf een `noindex`-meta heeft, wordt
 * overgeslagen. Zet je ergens noindex, dan valt hij vanzelf uit de sitemap.
 *
 * Draait automatisch na `npm run build`.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "dist", "client");

// De host waarop de site echt draait. Apex (zonder www) redirect hiernaartoe,
// dus dit is wat Google als canonieke URL moet zien.
const SITE_URL = (process.env.SITE_URL || "https://www.gewoonanders.nu").replace(/\/$/, "");

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (entry === "index.html") out.push(full);
  }
  return out;
}

// URL's die via vercel.json doorverwijzen horen niet in een sitemap: die moet
// alleen definitieve URL's bevatten. We lezen de redirects uit zodat dit
// automatisch klopt als er later eentje bijkomt.
let redirectExact = new Set();
let redirectPrefix = [];
try {
  const vercel = JSON.parse(readFileSync(join(root, "vercel.json"), "utf8"));
  for (const r of vercel.redirects ?? []) {
    const src = String(r.source || "");
    if (src.includes(":")) redirectPrefix.push(src.split(":")[0]);
    else redirectExact.add(src.replace(/\/$/, "") || "/");
  }
} catch {
  // geen vercel.json of onleesbaar: dan simpelweg niets uitsluiten
}

const pages = [];
const skipped = [];
const redirected = [];

for (const file of walk(outDir)) {
  const rel = relative(outDir, dirname(file));
  const route = rel === "" ? "/" : "/" + rel.split(sep).join("/");

  if (
    redirectExact.has(route) ||
    redirectPrefix.some((pre) => pre !== "/" && route.startsWith(pre))
  ) {
    redirected.push(route);
    continue;
  }

  const html = readFileSync(file, "utf8");
  // Pagina's die zichzelf op noindex zetten horen niet in de sitemap.
  if (/<meta[^>]+name=["']robots["'][^>]*noindex/i.test(html)) {
    skipped.push(route);
    continue;
  }
  pages.push(route);
}

pages.sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${SITE_URL}${p === "/" ? "/" : p}</loc></url>`).join("\n")}
</urlset>
`;

writeFileSync(join(outDir, "sitemap.xml"), xml, "utf8");
console.log(
  `sitemap.xml: ${pages.length} pagina's` +
    (skipped.length ? ` | noindex overgeslagen: ${skipped.join(", ")}` : "") +
    (redirected.length ? ` | redirect overgeslagen: ${redirected.join(", ")}` : ""),
);
