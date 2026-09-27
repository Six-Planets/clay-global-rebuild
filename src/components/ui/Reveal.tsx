"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Shared reveal-on-scroll wrapper matching the reference site's idiom:
 * opacity 0 + translateY(15px) -> visible, easeOutExpo.
 * Pure CSS transitions; the `.reveal--active` class is added when scrolled into view.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  once = true,
}: {
  children?: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "span" | "section" | "article" | "p" | "h2" | "h3" | "ul";
  once?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            if (once) io.disconnect();
          } else if (!once) {
            setActive(false);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", active && "reveal--active", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}