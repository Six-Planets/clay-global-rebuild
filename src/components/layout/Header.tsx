"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, logo } from "@/data/site";
import { cn } from "@/lib/utils";
import { useSite } from "./SiteProvider";

export default function Header() {
  const pathname = usePathname();
  const { menuOpen, setMenuOpen, darkHeader } = useSite();
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, setMenuOpen]);

  const industries = navigation.find((n) => n.label === "Industries");

  return (
    <header
      className={cn(
        "header",
        scrolled && "header--scrolled",
        darkHeader && !scrolled && "header--dark",
        menuOpen && "header--menuOpen",
      )}
    >
      <div className="header__menuBg" />
      <div className="container-clay header__main">
        <Link className="logo" href="/" aria-label="Clay — home">
          <img className="logo__mark" src={logo.mark} alt="" width={21} height={40} decoding="async" />
          <img className="logo__title" src={logo.title} alt="Clay" width={74} height={34} decoding="async" />
        </Link>

        <nav className="header__navlist" aria-label="Primary">
          {navigation.map((item) => {
            const isIndustries = item.label === "Industries";
            return (
              <div
                key={item.label}
                className={cn("header__item", isIndustries && dropdown && "header__item--open")}
                onMouseEnter={() => isIndustries && setDropdown(true)}
                onMouseLeave={() => isIndustries && setDropdown(false)}
              >
                <Link className="header__link" href={item.href}>
                  {item.label}
                </Link>
                {isIndustries && item.children ? (
                  <div className="header__dropdown">
                    <Link className="header__dropdownMain link-animated" href={item.main?.href ?? "/industries"}>
                      <span className="link-animated__label">All Industries</span>
                    </Link>
                    {item.children.map((ch) => (
                      <Link key={ch.href} className="header__dropdownLink" href={ch.href}>
                        {ch.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <Link href="/contact" className="header__contactLink header__contact">
          Let&rsquo;s Talk
        </Link>

        <button
          type="button"
          className="header__burger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="header__stripe header__stripe--top" />
          <span className="header__stripe header__stripe--bottom" />
        </button>
      </div>
    </header>
  );
}