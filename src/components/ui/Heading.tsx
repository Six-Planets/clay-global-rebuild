import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const styles = {
  display: "h-display",
  "display-2": "h-display-2",
  "services-title": "services-title",
  title: "title-h3",
  card: "card-title",
  article: "article-title",
  lead: "h-lead",
  "section-label": "h-label",
  button: "h-button",
} as const;

export type HeadingVariant = keyof typeof styles;

export default function Heading({
  children,
  variant = "display",
  as: Tag = variant === "card" || variant === "article" ? "h3" : "h2",
  className,
}: {
  children: ReactNode;
  variant?: HeadingVariant;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";
  className?: string;
}) {
  return <Tag className={cn(styles[variant], className)}>{children}</Tag>;
}