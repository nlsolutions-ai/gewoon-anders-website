import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { posts } from "@/lib/blog-data";

const BASE_URL = "";

const themaSlugs = [
  "masking",
  "overprikkeling",
  "energie-burnout",
  "executive-functies",
  "demand-avoidance",
  "prijzen-onderhandelen",
  "zichtbaarheid-netwerken",
];

const voorWieSlugs = [
  "adhd-ondernemers",
  "autistische-ondernemers",
  "audhd-ondernemers",
  "laat-ontdekt",
];

const freebieSlugs = [
  "energiescan",
  "prijzen-spiekbriefje",
  "masking-check",
  "mijn-week-mijn-brein",
];

type Entry = { path: string; priority: string; changefreq: string };

const baseEntries: Entry[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/traject", priority: "0.9", changefreq: "monthly" },
  { path: "/werkwijze", priority: "0.8", changefreq: "monthly" },
  { path: "/over-mij", priority: "0.8", changefreq: "monthly" },
  { path: "/verhalen", priority: "0.7", changefreq: "monthly" },
  { path: "/energiescan", priority: "0.8", changefreq: "monthly" },
  { path: "/masking-check", priority: "0.8", changefreq: "monthly" },
  { path: "/faq", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.9", changefreq: "monthly" },
  { path: "/downloads", priority: "0.8", changefreq: "monthly" },
  { path: "/informatie", priority: "0.8", changefreq: "weekly" },
  { path: "/privacy", priority: "0.3", changefreq: "yearly" },
  { path: "/voorwaarden", priority: "0.3", changefreq: "yearly" },
];

const themaEntries: Entry[] = themaSlugs.map((s) => ({
  path: `/themas/${s}`,
  priority: "0.7",
  changefreq: "monthly",
}));

const voorWieEntries: Entry[] = voorWieSlugs.map((s) => ({
  path: `/voor-wie/${s}`,
  priority: "0.7",
  changefreq: "monthly",
}));

const freebieEntries: Entry[] = freebieSlugs.map((s) => ({
  path: `/downloads/${s}`,
  priority: "0.6",
  changefreq: "monthly",
}));

const blogEntries: Entry[] = posts.map((p) => ({
  path: `/informatie/${p.slug}`,
  priority: "0.6",
  changefreq: "monthly",
}));

const entries: Entry[] = [
  ...baseEntries,
  ...themaEntries,
  ...voorWieEntries,
  ...freebieEntries,
  ...blogEntries,
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries
          .map(
            (e) =>
              `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
