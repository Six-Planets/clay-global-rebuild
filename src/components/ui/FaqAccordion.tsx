"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronIcon } from "../ui/Icon";
import type { FaqItem } from "@/data/faq";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<string | null>(items[0]?.question ?? null);

  return (
    <div className="faq-list">
      {items.map((item) => {
        const active = open === item.question;
        return (
          <div key={item.question} className={cn("faq-item", active && "faq-item--active")}>
            <button
              type="button"
              className="faq-item__trigger"
              aria-expanded={active}
              onClick={() => setOpen(active ? null : item.question)}
            >
              <span className="faq-item__title h-subtitle">{item.question}</span>
              <ChevronIcon />
            </button>
            <div className="faq-item__content">
              <div>
                <div className="faq-item__answer t-body">
                  {item.answer.map((p, i) => (
                    <p key={i} style={{ marginBottom: i === item.answer.length - 1 ? 0 : 14 }}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}