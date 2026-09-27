import Link from "next/link";
import MainImage from "../ui/MainImage";
import Reveal from "../ui/Reveal";
import FaqAccordion from "../ui/FaqAccordion";
import LogoWall from "../home/LogoWall";
import { WorkList } from "../home/WorkList";
import { HeaderTheme } from "../layout/SiteProvider";
import { industries, getIndustryProjects, type Industry } from "@/data/industries";
import { projects } from "@/data/projects";

export default function IndustryLanding({ slug }: { slug: keyof typeof industries }) {
  const industry = industries[slug];
  const work = getIndustryProjects(industry, projects);

  return (
    <>
      <HeaderTheme dark />

      <section className="industry-hero">
        <div className="container-clay industry-hero__inner">
          <p className="eyebrow industry-hero__label" style={{ color: "var(--color-gray-500)" }}>
            {industry.label}
          </p>
          <h1 className="h-display industry-hero__title">{industry.heroTitle}</h1>
          <p className="t-lede industry-hero__desc">{industry.heroDescription}</p>
          <div className="industry-hero__cta">
            <Link href={industry.ctaLink} className="btn-pill btn-pill--light">
              Get in touch
            </Link>
          </div>
          <div className="industry-logos">
            <p className="industry-logos__label t-sm">Trusted by</p>
            <div className="industry-logos__grid">
              <LogoWall dark />
            </div>
          </div>
        </div>
      </section>

      <section className="section impact">
        <div className="container-clay">
          <p className="eyebrow">{industry.label} experience</p>
          <h2 className="h-display impact__title">{industry.impactTitle}</h2>
          <p className="t-body impact__desc">{industry.impactDescription}</p>
        </div>
      </section>

      <section className="section how-help">
        <div className="container-clay">
          <div className="section__toolbar">
            <div>
              <p className="eyebrow">How we help</p>
              <h2 className="h-display section__title">{industry.howWeHelpTitle}</h2>
            </div>
          </div>

          {industry.howWeHelp.map((row, i) => (
            <Reveal className="how-help__row" key={row.index} delay={(i % 2) * 60}>
              <div className="how-help__media">
                <MainImage src={row.image} alt={row.title} sizes="(min-width: 768px) 55vw, 100vw" />
              </div>
              <div className="how-help__body">
                <span className="how-help__index">{row.index}</span>
                <h3 className="h-subtitle how-help__title">{row.title}</h3>
                <p className="t-body how-help__desc">{row.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section perspective">
        <div className="container-clay">
          <Reveal className="perspective__card">
            <div className="perspective__media">
              <MainImage src={industry.perspectiveImage} alt="" sizes="100vw" />
            </div>
            <div className="perspective__body">
              <div>
                <p className="eyebrow">{industry.perspectiveTitle}</p>
                <h3 className="h-subtitle perspective__title">{industry.perspectiveText}</h3>
              </div>
              <Link className="link-arrow link-animated h-button" href={industry.perspectiveLink}>
                <span className="link-animated__label">Read the article</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section focus">
        <div className="container-clay">
          <p className="eyebrow">{industry.focusTitle}</p>
          <div className="focus-grid" style={{ marginTop: 28 }}>
            {industry.focusAreas.map((a) => (
              <span className="focus-chip" key={a}>
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section industry-work">
        <div className="container-clay">
          <div className="section__toolbar">
            <div>
              <p className="eyebrow">Case studies</p>
              <h2 className="h-display section__title">{industry.workTitle}</h2>
            </div>
            <Link className="link-arrow link-animated h-button" href="/work">
              <span className="link-animated__label">View all work</span>
            </Link>
          </div>
          <WorkList projects={work} />
        </div>
      </section>

      <section className="section industry-quotes">
        <div className="container-clay">
          {industry.quotes.map((q) => (
            <Reveal className="industry-quote" key={q.name}>
              <span className="industry-quote__mark">&ldquo;</span>
              <p className="h-subtitle industry-quote__text">{q.text}</p>
              <p className="industry-quote__author t-sm">
                <strong>{q.name}</strong>
                {q.role}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section why-section">
        <div className="container-clay">
          <p className="eyebrow">{industry.whyTitle}</p>
          <h2 className="h-display why-section__head">{industry.whyDescription}</h2>
          <div className="why-cards">
            {industry.whyItems.map((item) => (
              <div className="why-card" key={item.title}>
                <h3 className="why-card__title">{item.title}</h3>
                <p className="t-body why-card__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section industry-cta">
        <div className="container-clay">
          <div className="industry-cta__inner">
            <div className="industry-cta__img">
              <MainImage src={industry.ctaImage} alt="" sizes="480px" />
            </div>
            <div className="container-clay">
              <h2 className="h-display industry-cta__title">{industry.ctaTitle}</h2>
              <p className="t-body industry-cta__desc">{industry.ctaDescription}</p>
              <div className="industry-cta__btn">
                <Link href={industry.ctaLink} className="btn-pill btn-pill--light">
                  Schedule a Meeting
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--black">
        <div className="container-clay faq__inner">
          <div className="faq__head">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 className="h-display faq__title section__title">Frequently asked questions</h2>
            </div>
          </div>
          <FaqAccordion items={industry.faq} />
        </div>
      </section>
    </>
  );
}