"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navigation, siteConfig, offices } from "@/data/site";
import { cn } from "@/lib/utils";
import { useSite } from "./SiteProvider";
import { ChevronIcon } from "../ui/Icon";
import { Socials } from "../ui/Socials";

function MenuList() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <ul>
      {navigation.map((item) => {
        if (item.label === "Industries") {
          return (
            <li key={item.label}>
              <button
                type="button"
                className={cn("menu__dropdownToggle", open && "menu__dropdownToggle--open")}
                onClick={() => setOpen(!open)}
              >
                <span>{item.label}</span>
                <ChevronIcon className="chevron--menu" />
              </button>
              <div className={cn("menu__dropdownList", open && "menu__dropdownList--open")}>
                <div>
                  <Link className="menu__dropdownLink menu__dropdownLink--main" href="/industries">
                    All Industries
                  </Link>
                  {item.children?.map((ch) => (
                    <Link key={ch.href} className="menu__dropdownLink" href={ch.href}>
                      {ch.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          );
        }
        const active = pathname === item.href;
        return (
          <li key={item.label}>
            <Link className={cn("menu__link", active && "menu__link--active")} href={item.href}>
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function MenuOverlay() {
  const { menuOpen } = useSite();

  return (
    <div className={cn("menu", menuOpen && "menu--open")} aria-hidden={!menuOpen}>
      <div className="container-clay menu__inner">
        <div className="menu__nav">
          <p className="menu__eyebrow">Menu</p>
          <MenuList />
        </div>

        <div className="menu__aside">
          <div className="menu__contact">
            <a className="menu__email" href={siteConfig.emailHref}>
              {siteConfig.email}
            </a>
            <a className="menu__phone" href="tel:+14157966262">
              {siteConfig.phone}
            </a>
            <div className="menu__offices">
              {offices.map((o) => (
                <a key={o.city} className="menu__office" href={o.href} target="_blank" rel="noopener noreferrer">
                  {o.city} <span className="menu__officeHref">↗</span>
                </a>
              ))}
            </div>
          </div>
          <Socials className="menu__socials" />
        </div>
      </div>
    </div>
  );
}