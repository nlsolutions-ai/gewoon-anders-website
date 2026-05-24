import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
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

function renderBlock(block: Block, i: number) {
  switch (block.kind) {
    case "p":
      return (
        <p key={i} className="mt-5 text-[17px] leading-relaxed text-foreground/80">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2 key={i} className="mt-12 text-2xl font-semibold text-foreground">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="mt-8 text-xl font-semibold text-foreground">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={i} className="mt-5 list-disc space-y-2 pl-6 text-[16px] leading-relaxed text-foreground/80">
          {block.items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mt-5 list-decimal space-y-2 pl-6 text-[16px] leading-relaxed text-foreground/80">
          {block.items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote key={i} className="mt-6 border-l-4 border-primary pl-5 text-[17px] italic leading-relaxed text-foreground/80">
          {block.text}
        </blockquote>
      );
    case "link-row":
      return (
        <p key={i} className="mt-8 text-[15px] leading-relaxed text-foreground/75">
          <Link to={block.href} className="text-primary underline-offset-2 hover:underline">
            {block.text}
          </Link>
        </p>
      );
  }
}

function InformatiePostPage() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <PageHeader
        eyebrow={`${post.category} · ${post.readingTime} lezen`}
        title={post.title}
        intro={post.description}
      />

      <article className="mx-auto max-w-3xl px-6 pb-20 lg:px-10">
        <FadeIn>
          <div>{post.content.map(renderBlock)}</div>
        </FadeIn>
      </article>

      {related.length > 0 && (
        <section className="border-t border-border bg-secondary">
          <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
            <FadeIn>
              <h2 className="text-2xl font-semibold text-foreground">Meer in {post.category}</h2>
              <ul className="mt-6 grid gap-5 sm:grid-cols-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to="/informatie/$slug"
                      params={{ slug: r.slug }}
                      className="group block h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {r.category} · {r.readingTime}
                      </p>
                      <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-primary">
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

      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-10">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-foreground">
              Wil je dit eens rustig bespreken?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-foreground/80">
              Plan een gratis kennismaking van een half uur op het kanaal dat jij wil. Je
              zit nergens aan vast.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground hover:bg-primary/90"
              >
                Plan een kennismaking
              </Link>
              <Link
                to="/informatie"
                className="inline-flex items-center justify-center rounded-xl border border-foreground/15 bg-background px-6 py-3.5 text-base font-medium text-foreground hover:bg-secondary"
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
