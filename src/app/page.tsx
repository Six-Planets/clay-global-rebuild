import Link from "next/link";
import HomeHero from "@/components/home/HomeHero";
import CapabilitiesAccordion from "@/components/home/CapabilitiesAccordion";
import LogoWall from "@/components/home/LogoWall";
import IndustriesPreview from "@/components/home/IndustriesPreview";
import { WorkList } from "@/components/home/WorkList";
import AboutTop from "@/components/home/AboutTop";
import FeaturedNews from "@/components/home/FeaturedNews";
import HomeFaq from "@/components/home/HomeFaq";
import { capabilities } from "@/data/services";
import { getHomeProjects } from "@/data/projects";

export default function HomePage() {
  const homeProjects = getHomeProjects();

  return (
    <>
      <HomeHero />

      <CapabilitiesAccordion capabilities={capabilities} />

      <section className="section logo-wall">
        <div className="container-clay container-clay--full">
          <LogoWall />
        </div>
      </section>

      <IndustriesPreview />

      <section className="section work-section">
        <div className="container-clay">
          <div className="section__toolbar">
            <div>
              <p className="eyebrow work-section__eyebrow">Selected Work</p>
              <h2 className="h-display work-section__title section__title">Selected projects</h2>
            </div>
            <Link className="link-arrow link-animated h-button" href="/work">
              <span className="link-animated__label">All projects</span>
            </Link>
          </div>
        </div>
        <div className="container-clay">
          <WorkList projects={homeProjects} />
        </div>
      </section>

      <AboutTop />

      <FeaturedNews />

      <HomeFaq />
    </>
  );
}