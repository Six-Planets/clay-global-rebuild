import Link from "next/link";
import { getCase, getNextCase, type CaseSection } from "@/data/cases";
import { getProject } from "@/data/projects";
import Reveal from "../ui/Reveal";
import MainImage from "../ui/MainImage";
import { ArrowIcon } from "../ui/Icon";

function ImageView({ src, alt = "", className }: { src: string; alt?: string; className?: string }) {
  return (
    <Reveal className={className}>
      <div className="img-reveal img-reveal--active" style={{ width: "100%", height: "100%" }}>
        <MainImage src={src} alt={alt} sizes="(min-width: 768px) 100vw, 100vw" />
      </div>
    </Reveal>
  );
}

function SectionView({ section }: { section: CaseSection }) {
  switch (section.type) {
    case "heading":
      return (
        <Reveal>
          <h2 className="h-article case__heading">{section.title}</h2>
        </Reveal>
      );
    case "text":
      return (
        <Reveal>
          <div className="t-body case__text">
            {section.body.map((p, i) => (
              <p key={i} style={{ marginBottom: i === section.body.length - 1 ? 0 : 16 }}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      );
    case "image":
      return (
        <div className={section.full ? "case__figure case__figure--full" : "case__figure"}>
          <ImageView src={section.image.src} alt={section.image.alt} />
        </div>
      );
    case "gallery": {
      const wide = section.images.some((im) => im.width / im.height > 1.4);
      return (
        <div className="case__gallery">
          {section.images.map((im, i) => (
            <Reveal className={`case__galleryItem${wide || section.images.length === 1 ? " case__galleryItem--wide" : ""}`} key={i}>
              <div className="case__galleryItem__inner">
                <MainImage src={im.src} alt={im.alt ?? ""} />
              </div>
            </Reveal>
          ))}
        </div>
      );
    }
    case "quote":
      return (
        <Reveal>
          <blockquote className="case__quote">
            <p className="h-display case__quoteText">&ldquo;{section.text}&rdquo;</p>
            <footer className="case__quoteAuthor t-sm">{section.attribution}</footer>
          </blockquote>
        </Reveal>
      );
    default:
      return null;
  }
}

export default function CaseStudyShow({ slug }: { slug: string }) {
  const project = getProject(slug);
  const cs = getCase(slug);
  const next = getNextCase(slug);

  if (!project) {
    return (
      <div className="section">
        <div className="container-clay">
          <p>Project not found.</p>
        </div>
      </div>
    );
  }

  return (
    <article className="case">
      <header className="case__hero">
        <div className="container-clay">
          <p className="eyebrow">Case study</p>
          <div className="case__tags">
            {project.tags.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
          <h1 className="h-display case__title">{project.client}</h1>
          <p className="t-lede case__summary">{cs?.tagline ?? project.description}</p>
          <Reveal className="case__heroImg">
            <div className="img-reveal img-reveal--active" style={{ width: "100%", height: "100%" }}>
              <MainImage src={project.image} alt={project.client} priority sizes="100vw" />
            </div>
          </Reveal>
        </div>
      </header>

      <div className="container-clay">
        <Reveal className="case__overview">
          <h2 className="h-display case__overviewTitle">Overview</h2>
          <div className="t-body case__text">
            {(cs?.summary ?? []).map((p, i) => (
              <p key={i} style={{ marginBottom: i === (cs?.summary.length ?? 0) - 1 ? 0 : 16 }}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        {cs?.sections.map((s, i) => (
          <div className="case__section" key={i}>
            <SectionView section={s} />
          </div>
        ))}

        {cs?.roles ? (
          <Reveal className="case__overview">
            <h2 className="h-article case__heading">Roles</h2>
            <div className="case__tags">
              {cs.roles.map((r) => (
                <span className="tag" key={r}>
                  {r}
                </span>
              ))}
            </div>
          </Reveal>
        ) : null}
      </div>

      {next ? (
        <section className="case__next">
          <div className="container-clay case__nextInner">
            <p className="case__nextLabel eyebrow">Next case study</p>
            <Link className="case__nextTitle h-display" href={`/work/${next.slug}`}>
              {next.client}
            </Link>
            <Reveal className="case__nextImg">
              <div className="case__heroImg">
                <MainImage src={next.image} alt={next.client} sizes="100vw" />
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      <div className="container-clay">
        <nav className="case__nav" aria-label="More work">
          <Link className="link-arrow link-animated h-button" href="/work">
            <span className="link-animated__label">All work</span>
          </Link>
          <Link className="link-arrow link-animated h-button" href="/contact">
            <span className="link-animated__label">Start a project</span>
            <ArrowIcon />
          </Link>
        </nav>
      </div>
    </article>
  );
}