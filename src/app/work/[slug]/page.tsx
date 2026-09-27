import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import { getCase } from "@/data/cases";
import CaseStudyShow from "@/components/case/CaseStudyShow";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = getProject(params.slug);
  if (!p) return {};
  return {
    title: p.client,
    description: p.description,
    openGraph: { images: [p.image] },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();
  void getCase;
  return <CaseStudyShow slug={params.slug} />;
}