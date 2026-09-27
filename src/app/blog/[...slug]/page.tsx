import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticle, latestArticles, featuredArticles } from "@/data/articles";
import MainImage from "@/components/ui/MainImage";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";

type Params = { slug: string[] };

function bodyFor(slug: string, title: string, category: string): string[] {
  return [
    `${title} — a deep dive from our ${category.toLowerCase()} practice.`,
    "Great design is not decoration; it is a decision-making system. Across branding, web, and product work, the same pattern repeats: the teams that ship best are the ones that turn opinion into principle, then principle into system.",
    "We start from the job to be done. Before a single pixel moves, we pressure-test the strategy: who is this for, what must they feel, and what has to change for the project to be called a success.",
    "Then the craft takes over. Typography, layout, motion, and restraint. The details are the design — but only details that survive contact with real users are worth shipping.",
    "Finally, we measure and iterate. The best work is never finished; it is maintained by the people who built it, using the same systems that got them there.",
  ];
}

export function generateStaticParams() {
  const all = [...featuredArticles, ...latestArticles];
  return all.map((a) => ({ slug: a.slug.split("/") }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const article = getArticle(params.slug.join("/"));
  if (!article) return {};
  return { title: article.title, description: article.summary, openGraph: { images: [article.image] } };
}

const related = (current: string) => [...latestArticles, ...featuredArticles].filter((a) => a.slug !== current).slice(0, 3);

export default function ArticlePage({ params }: { params: Params }) {
  const slug = params.slug.join("/");
  const article = getArticle(slug);

  if (!article) notFound();

  const paragraphs = bodyFor(article.slug, article.title, article.category);

  return (
    <article className="article">
      <header className="article__hero">
        <div className="container-clay">
          <div className="article__meta">
            <span className="tag">{article.category}</span>
            <span>{article.created}</span>
            {article.updated ? <span>Updated {article.updated}</span> : null}
            <span>{article.readTime}</span>
          </div>
          <h1 className="h-display article__title" style={{ maxWidth: "18ch" }}>
            {article.title}
          </h1>
          <div className="article__img" style={{ marginTop: 48, aspectRatio: "16 / 9", overflow: "hidden" }}>
            <MainImage src={article.image} alt={article.title} priority sizes="100vw" />
          </div>
        </div>
      </header>

      <div className="container-clay">
        <div className="article__body">
          <p className="t-lede" style={{ marginBottom: 28 }}>
            {article.summary}
          </p>
          {paragraphs.map((p, i) =>
            i === 2 ? (
              <div key={i}>
                <p>{p}</p>
                <blockquote className="case__quote" style={{ border: 0, padding: "24px 0" }}>
                  <p className="h-subtitle case__quoteText" style={{ maxWidth: "none" }}>
                    The teams that ship best are the ones that turn opinion into principle, then principle into system.
                  </p>
                </blockquote>
                <h2>Why the details matter</h2>
                <p>
                  Craft is a competitive advantage precisely because it is hard to fake. Users feel the difference
                  between attention and polish even when they cannot name it.
                </p>
              </div>
            ) : (
              <p key={i}>{p}</p>
            ),
          )}
        </div>
      </div>

      <section className="section">
        <div className="container-clay">
          <div className="section__toolbar">
            <div>
              <p className="eyebrow">Keep reading</p>
              <h2 className="h-display section__title">Related articles</h2>
            </div>
          </div>
          <div className="blog-grid">
            {related(article.slug).map((a) => (
              <Reveal key={a.slug}>
                <Link className="blog-cover" href={`/blog/${a.slug.split("/").join("/")}`}>
                  <MainImage src={a.image} alt={a.title} sizes="(min-width: 768px) 33vw, 100vw" />
                  <span className="blog-cover__body">
                    <span className="blog-cover__category">{a.category}</span>
                    <span className="blog-cover__title">{a.title}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}