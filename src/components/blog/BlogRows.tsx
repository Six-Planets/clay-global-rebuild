"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Article } from "@/data/articles";

type Group = { label: string; articles: Article[] };

export default function BlogRows({ groups }: { groups: Group[] }) {
  const [active, setActive] = useState("All");
  const labels = ["All", ...groups.map((g) => g.label)];
  const visible = active === "All" ? groups : groups.filter((g) => g.label === active);

  return (
    <>
      <div className="blog-categories">
        {labels.map((label) => (
          <button
            type="button"
            key={label}
            className={cn("filter-chip", active === label && "filter-chip--active")}
            aria-pressed={active === label}
            onClick={() => setActive(label)}
          >
            {label}
          </button>
        ))}
      </div>

      {visible.map((group) => (
        <div className="blog-section" key={group.label} style={{ marginBottom: 80 }}>
          <div className="section__toolbar">
            <div>
              <p className="eyebrow">{group.label}</p>
            </div>
            <span className="t-sm" style={{ color: "var(--color-gray-400)" }}>
              {group.articles.length} articles
            </span>
          </div>
          <div className="blog-row-list">
            {group.articles.map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`} className="news-dark__item" style={{ padding: "26px 0" }}>
                <span className="news-dark__title h-card" style={{ color: "var(--color-gray-900)" }}>
                  {a.title}
                </span>
                <span className="news-dark__meta t-sm">
                  {a.category} · {a.created}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}