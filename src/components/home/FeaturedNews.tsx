import Link from "next/link";
import { featuredArticles } from "@/data/articles";
import MainImage from "../ui/MainImage";
import Reveal from "../ui/Reveal";
import { ArrowIcon } from "../ui/Icon";

export default function FeaturedNews() {
  return (
    <section className="section section--black news">
      <div className="container-clay">
        <div className="section__toolbar news__toolbar">
          <div>
            <p className="eyebrow news__eyebrow">Featured News</p>
            <h2 className="h-display news__heading section__title">Recent news from Clay</h2>
          </div>
          <Link className="link-arrow link-animated link-animated--inverted h-button" href="/blog">
            <span className="link-animated__label">View all news</span>
            <ArrowIcon />
          </Link>
        </div>

        <div className="news__grid">
          {featuredArticles.map((a, i) => (
            <Reveal delay={i * 90} key={a.slug}>
              <article className="news-card">
                <Link href={`/blog/${a.slug}`} className="news-card__media">
                  <MainImage
                    src={a.image}
                    alt={a.title}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="news-card__img"
                  />
                </Link>
                <span className="eyebrow news-card__cat">{a.category}</span>
                <h3 className="h-article news-card__title">
                  <Link className="news-card__titleLink" href={`/blog/${a.slug}`}>
                    {a.title}
                  </Link>
                </h3>
                <p className="t-sm news-card__meta">
                  {a.created} · {a.readTime}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}