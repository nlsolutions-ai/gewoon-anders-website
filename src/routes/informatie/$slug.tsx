import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
import { Magnetic } from "@/components/motion";
import { CTALink } from "@/components/CTAButton";
import { SectionKicker } from "@/components/SectionKicker";
import { getPost, posts, type Block } from "@/lib/blog-data";

export const Route = createFileRoute("/informatie/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const p = loaderData.post;
    return {
      meta: [
        { title: `${p.title} - Gewoon Anders` },
        { name: "description", content: p.description },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/informatie/${p.slug}` },
        { property: "article:section", content: p.category },
      ],
      links: [{ rel: "canonical", href: `/informatie/${p.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.description,
            articleSection: p.category,
            author: {
              "@type": "Person",
              name: "Jurgen",
              jobTitle: "Business coach voor neurodivergente ondernemers",
              url: "/over-mij",
            },
            publisher: {
              "@type": "Organization",
              name: "Gewoon Anders",
              logo: { "@type": "ImageObject", url: "/logo.png" },
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": `/informatie/${p.slug}` },
          }),
        },
      ],
    };
  },
  component: InformatiePostPage,
});

function renderBlock(block: Block, i: number, isFirstParagraph: boolean) {
  switch (block.kind) {
    case "p":
      return (
        <p
          key={i}
          className={`mt-5 text-[17px] leading-relaxed text-foreground/80 lg:text-[18px] ${
            isFirstParagraph ? "dropcap first-letter:mr-1" : ""
          }`}
        >
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2
          key={i}
          className="display-lg mt-14 border-t border-foreground/10 pt-8 text-[1.7rem] text-foreground sm:text-[2rem]"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="mt-9 text-xl font-semibold text-foreground">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={i} className="mt-5 list-disc space-y-2 pl-6 text-[16px] leading-relaxed text-foreground/80 lg:text-[17px]">
          {block.items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mt-5 list-decimal space-y-2 pl-6 text-[16px] leading-relaxed text-foreground/80 lg:text-[17px]">
          {block.items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote key={i} className="my-10 border-l-2 border-primary pl-6">
          <p className="pullquote text-foreground/90">{block.text}</p>
        </blockquote>
      );
    case "link-row":
      return (
        <p key={i} className="mt-8 text-[15px] leading-relaxed text-foreground/75">
          <Link
            to={block.href}
            className="inline-flex items-center gap-1.5 font-semibold text-primary link-underline"
          >
            {block.text}
            <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden />
          </Link>
        </p>
      );
  }
}

function InformatiePostPage() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 2);
  const firstParagraphIndex = post.content.findIndex((b) => b.kind === "p");

  return (
    <>
      <PageHeader
        eyebrow={`${post.category} · ${post.readingTime} lezen`}
        title={post.title}
        intro={post.description}
      />

      <article className="mx-auto max-w-[44rem] px-6 pb-20 lg:px-10">
        <FadeIn>
          <div>{post.content.map((b, i) => renderBlock(b, i, i === firstParagraphIndex))}</div>
        </FadeIn>
      </article>

      {related.length > 0 && (
        <section className="border-t border-border bg-secondary">
          <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
            <FadeIn>
              <SectionKicker label={`Meer in ${post.category}`} />
              <ul className="mt-8 grid gap-5 sm:grid-cols-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to="/informatie/$slug"
                      params={{ slug: r.slug }}
                      className="group block h-full rounded-2xl border border-border bg-card p-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-primary/30 hover:shadow-ambient"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {r.category} · {r.readingTime}
                      </p>
                      <h3 className="display-lg mt-3 text-[1.4rem] text-foreground">
                        {r.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-foreground/75">
                        {r.excerpt}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>
      )}

      <section className="noise relative overflow-hidden bg-ink text-ink-foreground">
        <div className="pointer-events-none absolute -right-24 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center lg:px-10">
          <FadeIn>
            <h2 className="display-lg text-[1.9rem] text-background sm:text-[2.4rem]">
              Wil je dit eens rustig bespreken?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-background/80">
              Plan een gratis kennismaking van een half uur op het kanaal dat jij wil. Je
              zit nergens aan vast.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Magnetic>
              <CTALink to="/contact" variant="primary" size="lg">
                Plan een kennismaking
              </CTALink>
            </Magnetic>
              <Link
                to="/informatie"
                className="inline-flex items-center justify-center rounded-xl border border-background/20 bg-background/10 px-6 py-3.5 text-base font-medium text-background hover:bg-background/15"
              >
                Alle artikelen
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
