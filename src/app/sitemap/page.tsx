import type { Metadata } from "next";
import Link from "next/link";
import { navigation, offices, legalNav } from "@/data/site";

export const metadata: Metadata = {
  title: "Sitemap",
  robots: { index: false },
};

const groups = [
  {
    label: "Pages",
    links: [
      { label: "Home", href: "/" },
      ...navigation.map((n) => ({ label: n.label, href: n.href })),
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Industries",
    links: [
      { label: "All Industries", href: "/industries" },
      { label: "Fintech", href: "/fintech" },
      { label: "Crypto & Web3", href: "/crypto" },
    ],
  },
  {
    label: "Work",
    links: [
      { label: "All Work", href: "/work" },
      { label: "Sky", href: "/work/sky" },
      { label: "Slack", href: "/work/slack" },
      { label: "STC Bank", href: "/work/stc-bank" },
      { label: "Marqeta", href: "/work/marqeta" },
      { label: "Grayscale", href: "/work/grayscale" },
      { label: "Wealth", href: "/work/wealth" },
    ],
  },
  {
    label: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      ...legalNav.map((l) => ({ label: l.label, href: l.href })),
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container-clay">
          <p className="eyebrow">Sitemap</p>
          <h1 className="h-display page-hero__title">Where everything lives.</h1>
        </div>
      </section>
      <section className="section">
        <div className="container-clay">
          <div className="sitemap-grid">
            {groups.map((g) => (
              <div className="sitemap-col" key={g.label}>
                <h3 className="t-sm">{g.label}</h3>
                <ul>
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="t-sm" style={{ marginTop: 48, color: "var(--color-gray-500)" }}>
            Offices: {offices.map((o) => o.city).join(", ")}.
          </p>
        </div>
      </section>
    </>
  );
}