import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false },
};

const sections = [
  {
    h: "1. Information We Collect",
    body: [
      "Clay Global, LLC operates the website at clay.global. When you browse the site or get in touch with us, we collect the minimum information needed to respond to you and improve the experience.",
      "This may include contact details you choose to share (name, email, company), technical data such as device and browser type, usage patterns, and cookies used to track site performance.",
    ],
  },
  {
    h: "2. How We Use Information",
    body: [
      "We use information to respond to inquiries, review project requests, improve our website, and communicate about our services when you have opted in.",
      "We do not sell personal information. Data is shared only with service providers that help us run the site, under appropriate safeguards.",
    ],
  },
  {
    h: "3. Cookies",
    body: [
      "The site uses cookies and similar technologies for analytics and core functionality. You can control cookies through your browser settings; disabling cookies may affect parts of the experience.",
    ],
  },
  {
    h: "4. Data Retention & Security",
    body: [
      "We retain information only as long as necessary for the purposes described above. We apply reasonable technical and organizational measures to protect the data we hold.",
    ],
  },
  {
    h: "5. Your Rights",
    body: [
      "Depending on your location, you may have rights to access, correct, delete, or port your personal information, and to object to or restrict certain processing.",
      `To exercise any of these rights, email ${siteConfig.email}.`,
    ],
  },
  {
    h: "6. Contact",
    body: [
      `Questions about this policy can be sent to ${siteConfig.email} or ${siteConfig.phone}, or by mail at 300 Broadway, San Francisco, CA 94133.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container-clay">
          <p className="eyebrow">Legal</p>
          <h1 className="h-display page-hero__title">Privacy Policy</h1>
        </div>
      </section>
      <section className="section legal">
        <div className="container-clay">
          <div className="legal__body t-body">
            <p>
              Last updated: January 1, 2026. This policy explains how {siteConfig.legalName} handles information on
              its website.
            </p>
            {sections.map((s) => (
              <div key={s.h}>
                <h2>{s.h}</h2>
                {s.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}