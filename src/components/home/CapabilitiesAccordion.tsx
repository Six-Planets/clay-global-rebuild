"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowIcon, ChevronIcon } from "../ui/Icon";
import MainImage from "../ui/MainImage";
import type { Capability } from "@/data/services";

export default function CapabilitiesAccordion({ capabilities }: { capabilities: Capability[] }) {
  const [expanded, setExpanded] = useState<string | null>(capabilities[0]?.id ?? null);
  const [hovered, setHovered] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ot = setTimeout(() => {}, 100);
    return () => clearTimeout(ot);
  }, []);

  return (
    <section className="section caps">
      <div className="container-clay">
        <div className="caps__head">
          <div>
            <p className="eyebrow caps__eyebrow">Capabilities</p>
            <h2 className="h-display caps__title section__title">What we do</h2>
          </div>
          <div className="caps__link">
            <Link className="link-animated link-animated--large h-button" href="/about">
              <span className="link-animated__label">More about the team</span>
            </Link>
          </div>
        </div>

        <div className="acc-list" ref={rootRef}>
          {capabilities.map((cap) => {
            const active = expanded === cap.id || hovered === cap.id;
            return (
              <div
                key={cap.id}
                className={cn("acc-item", active && "acc-item--active")}
                onMouseEnter={() => setHovered(cap.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="acc-item__image">
                  <MainImage src={cap.image} alt="" className="acc-item__img" width={810} sizes="220px" />
                </div>
                <button
                  type="button"
                  className="acc-item__trigger"
                  aria-expanded={expanded === cap.id}
                  onClick={() => setExpanded(expanded === cap.id ? null : cap.id)}
                >
                  <span className="acc-item__title">{cap.title}</span>
                  <ChevronIcon />
                </button>
                <div className="acc-item__content">
                  <div>
                    <div className="acc-item__text t-body">{cap.text}</div>
                    <Link className="link-arrow link-animated h-button acc-item__more" href={cap.href}>
                      <span className="link-animated__label">Learn more</span>
                      <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}