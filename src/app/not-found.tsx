import Link from "next/link";
import { ArrowIcon } from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <div className="section notfound" style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
      <div className="container-clay">
        <p className="eyebrow">404</p>
        <h1 className="h-display notfound__title" style={{ maxWidth: "14ch", marginTop: 24 }}>
          This page took a step to the side.
        </h1>
        <p className="t-lede notfound__text" style={{ marginTop: 20, maxWidth: 520, color: "var(--color-gray-500)" }}>
          The link may be old, or the page may have moved. Let&rsquo;s get you back to something useful.
        </p>
        <div className="notfound__cta" style={{ marginTop: 36, display: "flex", gap: 16 }}>
          <Link href="/" className="btn-pill">
            Back home
          </Link>
          <Link className="link-arrow link-animated h-button" href="/work">
            <span className="link-animated__label">View work</span>
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}