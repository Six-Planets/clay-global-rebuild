import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Clay is a global UI/UX design and branding firm headquartered in San Francisco. We're a founder-led team of senior designers and strategists.",
};

const stats = [
  { value: "78", label: "Global Team Members" },
  { value: "16", label: "Years In Business" },
  { value: "529", label: "Projects Completed" },
  { value: "SF", label: "Headquarters" },
];

const why = [
  {
    title: "Teams Led by Co-Founders",
    text: "Our co-founders are hands-on across every project. A design director leads the day to day, and senior leadership reviews the work like it's their own — because it is.",
  },
  {
    title: "Collaboration Is Key",
    text: "We embed with your product, marketing, and engineering teams. No over-the-wall design: our process is set up for tight feedback loops from kickoff to launch.",
  },
  {
    title: "Brand And Product in One Place",
    text: "Identity, interface, and engineering under one roof means the app you ship matches the brand you promise — and the website that sells it stays consistent with both.",
  },
  {
    title: "Built for the Long Run",
    text: "We design systems that outlive launches. Our clients keep us around for years because the work scales, stays current, and keeps performing long after the first release.",
  },
  {
    title: "Honest, Direct Communication",
    text: "We tell you what the work needs, not what you want to hear. Fast answers, clear timelines, and no surprises when it matters.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section page-hero about-hero">
        <div className="container-clay">
          <p className="eyebrow">About Clay</p>
          <h1 className="h-display about-hero__statement">
            We&rsquo;re a global UI/UX design and branding firm that helps ambitious companies build trust and standout
            digital products.
          </h1>
          <p className="t-lede page-hero__lead" style={{ marginTop: 28, maxWidth: 620 }}>
            Since 2008 we&rsquo;ve helped startups, Fortune 100s, and everyone in between turn strategy into
            shipping-grade design. {siteConfig.missionControl}
          </p>
        </div>
      </section>

      <section className="section about-page__stats">
        <div className="container-clay">
          <div className="about-stats">
            {stats.map((s) => (
              <div className="about-stats__item" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-page__why">
        <div className="container-clay">
          <Reveal className="why-heading">
            <p className="eyebrow">Why Clay</p>
            <h2 className="h-display about-page__whyTitle">A partnership you&rsquo;ll want to keep.</h2>
          </Reveal>

          <div className="why-list">
            {why.map((item, i) => (
              <Reveal className="why-item" key={item.title} delay={(i % 2) * 60}>
                <span className="why-item__index">{(i + 1).toString().padStart(2, "0")}</span>
                <h3 className="why-item__title">{item.title}</h3>
                <p className="why-item__text">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--black about-page__cta">
        <div className="container-clay">
          <div className="about-page__ctaGrid">
            <h2 className="h-display about-page__ctaTitle">Want to work with us?</h2>
            <Link href="/contact" className="btn-pill btn-pill--light">
              Schedule a Meeting
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}