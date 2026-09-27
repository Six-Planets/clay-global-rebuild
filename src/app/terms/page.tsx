import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  robots: { index: false },
};

const sections = [
  {
    h: "1. Acceptance of Terms",
    body: [
      `By accessing and using the clay.global website you accept these terms. If you do not agree with any part of them, please stop using the site.`,
    ],
  },
  {
    h: "2. Intellectual Property",
    body: [
      "The content of this website — including text, imagery, design, logos, and code — is owned by its respective producers and exists here for informational purposes. The showcase of client work remains the property of the respective clients.",
      "Studio images and case-study materials may not be reproduced without written permission.",
    ],
  },
  {
    h: "3. Use of Site",
    body: [
      "You may browse the site freely and link to it from elsewhere. You may not scrape, resell, or misrepresent the content, and you may not use the site to transmit malicious code.",
    ],
  },
  {
    h: "4. Third-Party Links",
    body: [
      "The site links to third-party websites and external resources. We are not responsible for the content or practices of those sites.",
    ],
  },
  {
    h: "5. Disclaimers & Liability",
    body: [
      "The site is provided as-is, without warranties of any kind. To the maximum extent permitted by law, we are not liable for damages arising from use of the site.",
    ],
  },
  {
    h: "6. Governing Law & Contact",
    body: [
      "These terms are governed by the laws of the State of California, USA. Questions can be sent to " + siteConfig.email + ".",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container-clay">
          <p className="eyebrow">Legal</p>
          <h1 className="h-display page-hero__title">Terms of Use</h1>
        </div>
      </section>
      <section className="section legal">
        <div className="container-clay">
          <div className="legal__body t-body">
            <p>Last updated: January 1, 2026.</p>
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