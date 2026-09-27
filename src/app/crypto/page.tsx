import type { Metadata } from "next";
import IndustryLanding from "@/components/industry/IndustryLanding";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Crypto & Web3",
  description: industries.crypto.heroDescription,
};

export default function CryptoPage() {
  return <IndustryLanding slug="crypto" />;
}