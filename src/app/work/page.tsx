import type { Metadata } from "next";
import { projects } from "@/data/projects";
import WorkArchive from "@/components/work/WorkArchive";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected work from Clay's digital product, website, and branding practice.",
};

export default function WorkPage({ searchParams }: { searchParams: { filter?: string } }) {
  return (
    <section className="section page-hero">
      <div className="container-clay">
        <p className="eyebrow">Work</p>
        <h1 className="h-display page-hero__title">Design work that convinces, converts, and delights.</h1>
        <p className="t-lede page-hero__lead" style={{ marginTop: 24, maxWidth: 620 }}>
          Branding, websites, and digital products for startups and the world&rsquo;s largest companies.
        </p>
        <WorkArchive projects={projects} initial={searchParams.filter} />
      </div>
    </section>
  );
}