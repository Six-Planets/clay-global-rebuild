"use client";

import { useMemo, useRef, useState, type PointerEvent } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getWorkCategoryCounts, type Project, type WorkCategory } from "@/data/projects";
import MainImage from "../ui/MainImage";
import { ArrowIcon } from "../ui/Icon";

type Filter = "All" | WorkCategory;

const allFilters: Filter[] = ["All", "Digital Products", "Websites", "Branding"];

const isFilter = (v: string): v is Filter => (allFilters as string[]).includes(v);

export default function WorkArchive({ projects, initial = "All" }: { projects: Project[]; initial?: string }) {
  const [filter, setFilter] = useState<Filter>(isFilter(initial) ? initial : "All");
  const [hover, setHover] = useState<string | null>(null);
  const tipRef = useRef<HTMLDivElement | null>(null);
  const counts = useMemo(() => getWorkCategoryCounts(), []);

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const preview = visible.find((p) => p.slug === hover);

  const onMove = (e: PointerEvent<HTMLElement>) => {
    const tip = tipRef.current;
    if (!tip) return;
    tip.style.setProperty("--cx", `${e.clientX}px`);
    tip.style.setProperty("--cy", `${e.clientY}px`);
  };

  return (
    <div>
      <div className="work-archive__filters">
        {allFilters.map((f) => {
          const count = f === "All" ? projects.length : counts[f];
          return (
            <button
              key={f}
              type="button"
              className={cn("filter-chip", filter === f && "filter-chip--active")}
              onClick={() => setFilter(f)}
            >
              {f} <span className="filter-chip__count">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="work-list" onPointerMove={onMove} onPointerEnter={() => setHover(null)}>
        {visible.map((p, i) => (
          <Link
            key={p.slug}
            href={p.href ?? `/work/${p.slug}`}
            className="work-list__item"
            onPointerEnter={() => setHover(p.slug)}
          >
            <span className="work-list__num t-sm">{(i + 1).toString().padStart(2, "0")}</span>
            <span className="work-list__item__title">{p.client}</span>
            <span className="work-list__item__desc t-body">{p.description}</span>
            <span className="work-list__item__tags">
              {p.tags.slice(0, 3).map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </span>
            <ArrowIcon className="work-list__item__arrow" />
          </Link>
        ))}
      </div>

      <div
        className={cn("cursor-tooltip", preview && "cursor-tooltip--show")}
        ref={tipRef}
        aria-hidden="true"
      >
        <div className={cn("tooltip__img", hover && "tooltip__img--pop")}>
          {preview ? <MainImage src={preview.image} alt="" sizes="320px" /> : null}
        </div>
      </div>
    </div>
  );
}