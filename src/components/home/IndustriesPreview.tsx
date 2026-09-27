import Link from "next/link";
import MainImage from "../ui/MainImage";
import Reveal from "../ui/Reveal";

const FINTECH_IMG =
  "https://cdn.sanity.io/images/r115idoc/production/1d66abb4a91acaf2e8e5742df142d1c1855d545f-1494x1121.jpg?w=1600&q=80&fit=clip&auto=format";
const CRYPTO_IMG =
  "https://cdn.sanity.io/images/r115idoc/production/48630999ba6adde2edcb53ed18f337778d453138-1408x1760.png?w=900&q=80&fit=clip&auto=format";

export default function IndustriesPreview() {
  return (
    <section className="section industries-preview">
      <div className="container-clay">
        <Reveal>
          <p className="eyebrow industries-preview__eyebrow">Fintech</p>
          <h2 className="h-display industries-preview__title">
            The Future of Finance is Intelligent
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <Link href="/fintech" className="industries-preview__stage">
            <MainImage
              src={FINTECH_IMG}
              alt="Fintech work by Clay"
              sizes="(min-width: 768px) 80vw, 100vw"
              className="industries-preview__stageImg"
            />
            <span className="industries-preview__stageCta link-arrow link-animated h-button">
              <span className="link-animated__label">Explore fintech</span>
            </span>
          </Link>
        </Reveal>

        <Reveal delay={200}>
          <div className="industries-preview__links">
            <span className="t-body industries-preview__hint">Every client gets our full toolkit — strategy, branding, UX, and building.</span>
            <Link href="/crypto" className="industries-preview__mini link-animated link-animated--large h-button">
              <span className="link-animated__label">Crypto &amp; Web3</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}