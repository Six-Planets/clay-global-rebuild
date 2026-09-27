import type { Metadata } from "next";
import IndustryLanding from "@/components/industry/IndustryLanding";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Fintech",
  description: industries.fintech.heroDescription,
};

export default function FintechPage() {
  return <IndustryLanding slug="fintech" />;
}