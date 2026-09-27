"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

/**
 * Word-by-word line reveal used by hero titles.
 * Each word lives in an overflow-hidden line and slides up with a stagger
 * of 90ms per word (matches reference `--str-word-index`).
 */
export default function WordsReveal({
  text,
  className,
  delay = 0,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timer = setTimeout(() => setActive(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const words = text.split(" ");

  return (
    <Tag ref={ref as never} className={className ?? ""}>
      {words.map((w, i) => (
        <span key={i} className="str-group">
          <span className="str-line">
            <span
              className={active ? "str-word str-word--active" : "str-word"}
              style={{ "--str-word-index": i } as CSSProperties}
            >
              {w}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}