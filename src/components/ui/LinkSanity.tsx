import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowIcon } from "./Icon";

/**
 * The reference site's signature arrow link: "Visit site ↗" with an underlined
 * label and a small arrow that animates right on hover.
 * Supports both internal (`href` starting with "/") and external links.
 */
export default function LinkSanity({
  href,
  children,
  className,
  icon = true,
  underline = true,
  external,
  onClick,
}: {
  href: string;
  children?: ReactNode;
  className?: string;
  icon?: boolean;
  underline?: boolean;
  external?: boolean;
  onClick?: () => void;
}) {
  const cls = cn("link-sanity", underline && "link-sanity--line", className);
  const isExternal = external ?? /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick}>
        <span>{children ?? "Visit site"}&nbsp;↗</span>
        {icon ? <ArrowIcon /> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} onClick={onClick}>
      <span>{children}</span>
      {icon ? <ArrowIcon /> : null}
    </Link>
  );
}