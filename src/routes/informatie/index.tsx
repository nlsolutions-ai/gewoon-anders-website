import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { posts } from "@/lib/blog-data";

export const Route = createFileRoute("/informatie/")({
  head: () => ({
    meta: [
      { title: "Informatie - Gewoon Anders" },
      {
        name: "description",
        content:
          "Artikelen over ondernemen met een neurodivergent brein. Over masking, overprikkeling, energie, executive functies, prijzen, grenzen en werkwijze.",
      },
      { property: "og:title", content: "Informatie - Gewoon Anders" },
      { property: "og:url", content: "/informatie" },
    ],
    links: [{ rel: "canonical", href: "/informatie" }],
  }),
  component: InformatieIndex,
});

const categoryOrder = ["Masking", "Energie", "Brein", "Grenzen", "Werkwijze"];

const categoryDesc: Record<string, string> = {
  Masking: "De stille post die elk klantgesprek afroomt. Hoe je het ziet, en hoe je het kleiner maakt.",
  Energie:
    "Waarom je leeg bent na gesprekken die goed gingen, en hoe je een werkweek bouwt die rekent met pieken en dalen.",
  Brein: "Wat ADHD, autisme en AuDHD betekenen in een bedrijf. En wat een late diagnose ermee doet.",
  Grenzen: "Een prijs vragen, nee zeggen, deadlines met jezelf maken zonder dat je systeem dichtklapt.",
  Werkwijze: "Hoe ik werk en waarom. Coaching of therapie. Mailsessies. Eén op een vs een groep.",
};

function InformatieIndex() {
  return (
    <>
      <PageHeader
        eyebrow="17 artikelen"
        title="Over ondernemen met een ander brein."
        intro="Geen losse tips. Wel wat ik in coaching steeds terugzie en waarvan ik denk dat het je kan helpen om jezelf of je werk anders te zien."
      />

      <section className="mx-auto max-w-[1240px] px-6 pb-24 lg:px-10">
        {categoryOrder.map((cat, gi) => {
          const items = posts.filter((p) => p.category === cat);
          return (
            <div key={cat} className="mt-20 first:mt-4">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                  <Reveal>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
                      {cat}
                    </p>
                  </Reveal>
                  <Reveal delay={60}>
                    <h2 className="display-lg mt-3 text-[28px] sm:text-[32px] lg:text-[36px]">
                      {cat === "Brein" ? "Hoe het brein werkt in je werk" : cat}
                    </h2>
                  </Reveal>
                  <Reveal delay={120}>
                    <p className="mt-4 max-w-md text-[15px] leading-relaxed text-foreground/70">
                      {categoryDesc[cat]}
                    </p>
                  </Reveal>
                </div>
                <ul className="space-y-4 lg:col-span-8">
                  {items.map((p, i) => (
                    <Reveal key={p.slug} as="li" delay={gi * 40 + i * 80}>
                      <Link
                        to="/informatie/$slug"
                        params={{ slug: p.slug }}
                        className="group relative block overflow-hidden rounded-3xl border border-foreground/8 bg-card p-7 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-ambient-lg sm:p-8"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-foreground/45">
                            {p.readingTime} lezen
                          </span>
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground/5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-primary group-hover:text-primary-foreground group-hover:translate-x-[2px] group-hover:-translate-y-[1px]">
                            <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden />
                          </span>
                        </div>
                        <h3 className="display-lg mt-5 text-[22px] text-foreground sm:text-[24px] lg:text-[26px]">
                          {p.title}
                        </h3>
                        <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">
                          {p.excerpt}
                        </p>
                      </Link>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
