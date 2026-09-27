import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/data/site";
import { SiteProvider } from "@/components/layout/SiteProvider";
import Header from "@/components/layout/Header";
import FooterWrap from "@/components/layout/Footer";
import MenuOverlay from "@/components/layout/MenuOverlay";
import Toasts from "@/components/layout/Toasts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://clay.global"),
  title: {
    default: `${siteConfig.name} — UI/UX Design & Branding Agency`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.legalName }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <noscript>
          <style>{`.reveal,.str-word{opacity:1 !important;transform:none !important;transition:none !important}`}</style>
        </noscript>
        <SiteProvider>
          <Header />
          <MenuOverlay />
          <main>{children}</main>
          <FooterWrap />
          <Toasts />
        </SiteProvider>
      </body>
    </html>
  );
}