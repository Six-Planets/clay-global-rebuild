import type { Metadata } from "next";
import { offices, siteConfig, socials } from "@/data/site";
import { Socials } from "@/components/ui/Socials";
import { ArrowIcon } from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Let's talk about your next brand, website, or digital product with the Clay team.",
};

const links = [
  {
    label: "Become a Client",
    href: siteConfig.emailHref,
    text: siteConfig.email,
    hint: "For new projects",
  },
  {
    label: "Join the Team",
    href: "mailto:careers@clay.global",
    text: "careers@clay.global",
    hint: "Careers",
  },
  {
    label: "Press & Media",
    href: "mailto:press@clay.global",
    text: "press@clay.global",
    hint: "Press kit & interviews",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container-clay">
          <p className="eyebrow">Contact</p>
          <h1 className="h-display page-hero__title">Let&rsquo;s talk.</h1>
        </div>
      </section>

      <section className="section contact">
        <div className="container-clay">
          <div className="contact__grid">
            <div className="contact__col--main">
              {links.map((l, i) => (
                <Reveal className="contact__section" key={l.label} delay={i * 60}>
                  <p className="eyebrow contact__label">
                    {String(i + 1).padStart(2, "0")} — {l.hint}
                  </p>
                  <div className="contact__list">
                    <a className="contact__link" href={l.href}>
                      {l.text} <ArrowIcon />
                    </a>
                    <span className="t-sm" style={{ color: "var(--color-gray-500)" }}>
                      {l.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <aside className="contact__aside">
              <p className="eyebrow contact__label">Locations</p>
              <div className="contact__offices">
                {offices.map((o) => (
                  <a className="contact__office" key={o.city} href={o.href} target="_blank" rel="noopener noreferrer">
                    <strong>{o.city}</strong>
                    <span>
                      {o.lines[0]} {o.lines[1]}
                    </span>
                  </a>
                ))}
              </div>
              <p className="eyebrow contact__label" style={{ marginTop: 40 }}>
                Follow us
              </p>
              <Socials />
              <p className="eyebrow contact__label" style={{ marginTop: 40 }}>
                Phone
              </p>
              <a className="contact__link" href="tel:+14157966262" style={{ fontSize: 20 }}>
                {siteConfig.phoneDisplay}
              </a>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}