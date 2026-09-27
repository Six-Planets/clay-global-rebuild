import type { Metadata } from "next";
import Link from "next/link";
import MainImage from "@/components/ui/MainImage";
import Reveal from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/Icon";
import { serviceRows } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Branding, digital products, websites, development, content, and generative AI — full-service design for ambitious companies.",
};

const sanity = (file: string) =>
  `https://cdn.sanity.io/images/r115idoc/production/${file}?w=1200&q=80&fit=clip&auto=format`;

export default function ServicesPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container-clay">
          <p className="eyebrow">Services</p>
          <h1 className="h-display page-hero__title">Full-service design that takes products from idea to impact.</h1>
          <p className="t-lede page-hero__lead" style={{ marginTop: 24, maxWidth: 600 }}>
            Six integrated practices, one senior team. Work with the same designers across brand, product, web,
            content, and code.
          </p>
        </div>
      </section>

      <section className="section services">
        <div className="container-clay">
          {serviceRows.map((row, i) => (
            <Reveal className="service-row" key={row.id} delay={(i % 2) * 60}>
              <div className="service-row__media">
                <MainImage src={sanity(row.image)} alt={row.title} sizes="(min-width: 768px) 45vw, 100vw" />
              </div>
              <div className="service-row__content">
                <span className="service-row__index">{row.index}</span>
                <h2 className="h-display service-row__title">{row.title}</h2>
                <p className="t-body service-row__desc">{row.description}</p>
                <div className="service-row__subs">
                  {row.subs.map((sub) => (
                    <div className="service-row__sub" key={sub.num}>
                      <span className="service-row__subNum">{sub.num}</span>
                      <div>
                        <p className="service-row__subTitle t-sm">{sub.title}</p>
                        <p className="service-row__subDesc">{sub.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link className="link-arrow link-animated h-button service-row__link" href={row.link}>
                    <span className="link-animated__label">See examples</span>
                    <ArrowIcon />
                  </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section services-cta">
        <div className="container-clay">
          <div className="services-cta__inner">
            <h2 className="h-display services-cta__title">Not sure where to start?</h2>
            <p className="t-lede services-cta__desc">
              Tell us about your project and we&rsquo;ll point you at the right practice — or scope an integrated
              engagement across several.
            </p>
            <Link href="/contact" className="btn-pill services-cta__btn">
              Schedule a Meeting
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}