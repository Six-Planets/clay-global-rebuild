import type { Metadata } from "next";
import Link from "next/link";
import MainImage from "@/components/ui/MainImage";
import Reveal from "@/components/ui/Reveal";
import BlogRows from "@/components/blog/BlogRows";
import {
  featuredArticles,
  latestArticles,
  guidesArticles,
  webDesignArticles,
  uiUxArticles,
  brandingArticles,
  type Article,
} from "@/data/articles";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on branding, web design, UI/UX, and AI from the Clay team.",
};

function FeaturedMain({ article }: { article: Article }) {
  return (
    <Link className="blog-featured__main" href={`/blog/${article.slug}`}>
      <div className="blog-featured__media">
        <MainImage src={article.image} alt={article.title} sizes="(min-width: 768px) 66vw, 100vw" />
      </div>
      <p className="eyebrow blog-featured__category" style={{ marginTop: 24 }}>
        {article.category}
      </p>
      <h2 className="h-card blog-featured__title" style={{ marginTop: 14, maxWidth: "26ch", fontSize: 28 }}>
        {article.title}
      </h2>
      <p className="t-body blog-featured__summary" style={{ marginTop: 14, color: "var(--color-gray-500)", maxWidth: 560 }}>
        {article.summary}
      </p>
    </Link>
  );
}

export default function BlogPage() {
  const featured = featuredArticles[0];
  const side = [...featuredArticles.slice(1), ...latestArticles.slice(0, 2)];

  return (
    <>
      <section className="section page-hero blog-hero">
        <div className="container-clay">
          <p className="eyebrow">Blog</p>
          <h1 className="h-display blog-hero__title">Ideas from the studio.</h1>
          <p className="t-lede page-hero__lead" style={{ marginTop: 24, maxWidth: 600 }}>
            Guides, opinions, and research on branding, web design, UI/UX, and AI — written by the people doing the
            work.
          </p>
        </div>
      </section>

      <section className="section blog">
        <div className="container-clay">
          <div className="blog-featured">
            <FeaturedMain article={featured} />
            <div className="blog-featured__side">
              {side.map((a) => (
                <Link key={a.slug} href={`/blog/${a.slug}`} className="news-dark__item" style={{ padding: "18px 0" }}>
                  <span className="news-dark__title h-card" style={{ color: "var(--color-gray-900)" }}>
                    {a.title}
                  </span>
                  <span className="news-dark__meta t-sm">
                    {a.category} · {a.created}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section blog-guides">
        <div className="container-clay">
          <div className="section__toolbar">
            <div>
              <p className="eyebrow">Guides</p>
              <h2 className="h-display section__title">Deep dives</h2>
            </div>
          </div>
          <div className="blog-grid">
            {guidesArticles.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 80}>
                <Link className="blog-cover" href={`/blog/${a.slug}`}>
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

      <section className="section blog-rows">
        <div className="container-clay">
          <BlogRows
            groups={[
              { label: "Web Design", articles: webDesignArticles },
              { label: "UI/UX", articles: uiUxArticles },
              { label: "Branding", articles: brandingArticles },
            ]}
          />
        </div>
      </section>
    </>
  );
}