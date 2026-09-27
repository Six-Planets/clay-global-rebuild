import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
  tag: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  tag?: "div" | "section" | "header" | "footer" | "nav" | "ul" | "ol" | "main" | "aside";
}) {
  return <Tag className={cn("container-clay", className)}>{children}</Tag>;
}