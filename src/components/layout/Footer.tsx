"use client";

import Link from "next/link";
import { footerNav, legalNav, offices, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { Socials } from "../ui/Socials";

function Contacts() {
  return (
    <section className="contacts">
      <div className="container-clay">
        <div className="contacts__grid">
          <div className="contacts__label t-sm">Next steps</div>
          <div className="contacts__title h-display">
            Let&rsquo;s talk. <br />
            <a className="contacts__emailLarge" href={siteConfig.emailHref}>
              {siteConfig.email}
            </a>
          </div>
          <div className="contacts__cta">
            <Link href="/contact" className="btn-pill">
              Schedule a Meeting
            </Link>
            <a className="contacts__phone" href="tel:+14157966262">
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container-clay">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__mission">{siteConfig.missionControl}</div>
          </div>

          <div className="footer__col footer__col--nav">
            <p className="footer__heading t-sm">Menu</p>
            <ul className="footer__links">
              {footerNav.map((n) => (
                <li key={n.href}>
                  <Link className="footer__navLink t-sm" href={n.href}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col footer__col--offices">
            <p className="footer__heading t-sm">Locations</p>
            <ul className="footer__links">
              {offices.map((o) => (
                <li key={o.city}>
                  <a className="footer__addr t-sm" href={o.href} target="_blank" rel="noopener noreferrer">
                    {o.city}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col footer__col--contact">
            <p className="footer__heading t-sm">Contact</p>
            <ul className="footer__links">
              <li>
                <a className="footer__navLink t-sm" href={siteConfig.emailHref}>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a className="footer__navLink t-sm" href="tel:+14157966262">
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
            <Socials className="footer__socials" />
          </div>
        </div>

        <div className="divider footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright t-sm">© 2016–{new Date().getFullYear()} {siteConfig.name}</p>
          <ul className="footer__legal t-sm">
            {legalNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterWrap({ className }: { className?: string }) {
  return (
    <div className={cn("footer-wrap", className)}>
      <Contacts />
      <Footer />
    </div>
  );
}

export default FooterWrap;