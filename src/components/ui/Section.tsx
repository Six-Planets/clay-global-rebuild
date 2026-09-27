import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Section({
  children,
  className,
  id,
  tag: Tag = "section",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tag?: "section" | "div" | "footer" | "header" | "main";
}) {
  return (
    <Tag id={id} className={cn("section", className)}>
      {children}
    </Tag>
  );
}