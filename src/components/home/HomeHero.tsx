"use client";

import WordsReveal from "../ui/WordsReveal";
import Video from "../ui/Video";

const HERO_VIDEO =
  "https://cdn.sanity.io/files/r115idoc/production/1f0e5e7efc6e944b7ab0babd354ad6f850296748.mp4";
const HERO_POSTER =
  "https://cdn.sanity.io/images/r115idoc/production/image-136ce83f7031faf68b01f7c2e02199b7a50b9f35-1920x1080-jpg?w=1920&q=80&fit=clip&auto=format";

export default function HomeHero() {
  return (
    <section className="hero hero--video">
      <div className="container-clay">
        <p className="eyebrow hero__label">UI/UX Design and Branding Agency</p>
        <h1 className="h-display hero__title">
          <WordsReveal text="We're creating standout brands and digital experiences that captivate users" delay={250} />
        </h1>
      </div>

      <div className="container-clay">
        <Video video={HERO_VIDEO} poster={HERO_POSTER} className="hero__videoRoot" animateIn />
      </div>
    </section>
  );
}