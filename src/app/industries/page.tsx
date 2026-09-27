import type { Metadata } from "next";
import Link from "next/link";
import MainImage from "@/components/ui/MainImage";
import Reveal from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Industries",
  description: "Clay's deep experience designing for fintech and crypto/Web3 in particular.",
};

const links = [
  {
    href: "/fintech",
    label: "Industry",
    title: "Fintech",
    description: "Digital banks, payments, wealth, and AI — the future of finance is intelligent.",
    image:
      "https://cdn.sanity.io/images/r115idoc/production/1d66abb4a91acaf2e8e5742df142d1c1855d545f-1494x1121.jpg?w=1600&q=80&fit=clip&auto=format",
  },
  {
    href: "/crypto",
    label: "Industry",
    title: "Crypto & Web3",
    description: "Exchanges, protocols, and asset management — design that builds trust in decentralized worlds.",
    image:
      "https://cdn.sanity.io/images/r115idoc/production/48630999ba6adde2edcb53ed18f337778d453138-1408x1760.png?w=1600&q=80&fit=clip&auto=format",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container-clay">
          <p className="eyebrow">Industries</p>
          <h1 className="h-display page-hero__title">Where we go deep.</h1>
          <p className="t-lede page-hero__lead" style={{ marginTop: 24, maxWidth: 600 }}>
            Every client gets our full toolkit. These are the spaces where years of accumulated expertise let us move
            faster and ship stronger.
          </p>
        </div>
      </section>

      <section className="section industries-links">
        <div className="container-clay">
          <div className="industries-links">
            {links.map((l) => (
              <Reveal key={l.href}>
                <Link className="industry-link" href={l.href}>
                  <span className="industry-link__media">
                    <MainImage src={l.image} alt={l.title} sizes="(min-width: 768px) 50vw, 100vw" />
                  </span>
                  <span className="industry-link__arrow">
                    <ArrowIcon />
                  </span>
                  <span className="industry-link__body">
                    <span className="industry-link__label">{l.label}</span>
                    <span className="industry-link__title h-card">{l.title}</span>
                    <span className="industry-link__desc t-sm" style={{ display: "block", marginTop: 10, color: "var(--color-gray-300)" }}>
                      {l.description}
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}