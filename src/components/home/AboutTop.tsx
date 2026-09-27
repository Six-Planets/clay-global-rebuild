import Link from "next/link";
import Reveal from "../ui/Reveal";

const gallery: { ref: string; alt: string }[] = [
  { ref: "image-5ea636fb9df56ebb3a32f44565761e9a5e9d63a6-1148x1148-png", alt: "a person carrying a Clay branded bag full of wheat" },
  { ref: "image-dfe44198fb2b2c41befa5e04cb697a1ccd1b00e4-1148x920-png", alt: "Clay team members sitting on stairs together" },
  { ref: "image-f350ccb2addc2aa56c03ad6692d90c33b13e6534-1148x1436-png", alt: "a panoramic view of tall buildings in San Francisco" },
  { ref: "image-87f439c8888db195282e812af75148c61b9d7ee3-1148x920-png", alt: "Clay team member sitting on a chair with a camera" },
  { ref: "image-03a2ac59bd53d9ea5f209c175663773635f3c86b-1148x1148-jpg", alt: "a white shelf with books and a plant in Clay office" },
  { ref: "image-6cc75862d3d4dc612d91681e787be50bfd6008e3-1148x920-png", alt: "two Clay team members working in an office setting" },
  { ref: "image-1e6ee3ee386d6fa8e4370609fe363930608de1a5-1148x1148-png", alt: "Clay team member with a laptop in an office smiling" },
  { ref: "image-c12969ac91dd359ada6ab564a6ef7cdec718936b-1148x1436-png", alt: "a rainbow foil unicorn balloon at Clay office" },
  { ref: "image-65337416eee9b5c4a34f7ed455145e75a1541aa6-1148x1148-png", alt: "Clay designer using a tablet to create icons for a project" },
  { ref: "image-4f38374e3f2bddc378efdafd586eb77b30e63e04-1148x1436-jpg", alt: "Clay team member holding a Clay branded flag in a field" },
  { ref: "image-a20b450f816e11b9f88859dc934a010116ef5c42-1148x920-png", alt: "a book on a table in an office setting" },
];

const imgUrl = (ref: string, w: number) =>
  `https://cdn.sanity.io/images/r115idoc/production/${ref}?w=${w}&q=80&fit=clip&auto=format`;

export default function AboutTop() {
  const loop = [...gallery, ...gallery];

  return (
    <section className="section about-top">
      <div className="container-clay">
        <Reveal>
          <p className="eyebrow">About</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="h-display about-top__statement">
            We transform companies through design innovation
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <div className="about-top__copy">
            <p className="t-body about-top__text">
              Our cross-disciplinary team combines strategy, branding, UX design, and technology for
              swift, impactful results. Working as one team with our clients, we merge human creativity
              with AI-driven efficiency to consistently exceed expectations.
            </p>
            <Link className="link-arrow link-animated h-button" href="/about">
              <span className="link-animated__label">Get to know us</span>
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="container-clay">
        <div className="logo-marquee marquee-imgs about-gallery">
          <div className="logo-marquee__track marquee-imgs__track about-gallery__track">
            {loop.map((g, i) => (
              <figure className="logo-marquee__cell about-gallery__cell" key={`${g.ref}-${i}`}>
                <img className="about-gallery__img" src={imgUrl(g.ref, 1200)} alt={g.alt} loading="lazy" decoding="async" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}