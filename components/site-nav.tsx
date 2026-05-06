"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ButtonLink, Icon } from "@/components/ui/primitives";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/ai", label: "AI", badge: "Soon" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
  { href: "/blog", label: "Blog" },
  { href: "/trust", label: "Trust" },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname.startsWith(href);
}

export function SiteNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="nav-inner">
          <Link className="nav-logo" href="/" aria-label="Metraly home" onClick={closeMenu}>
            <div className="nav-logo-icon" aria-hidden="true">
              M
            </div>
            Metraly
          </Link>

          <ul className="nav-links" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                  {item.badge ? (
                    <span className="nav-badge" aria-label={`${item.label} coming soon`}>
                      {item.badge}
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <ThemeToggle />
            <ButtonLink href="https://github.com/getmetraly" external variant="ghost" className="nav-github">
              <Icon name="github" />
              GitHub <Icon name="external" />
            </ButtonLink>
            <ButtonLink href="/demo" className="nav-cta" aria-label="Try synthetic demo preview">
              Try Demo <Icon name="arrowRight" />
            </ButtonLink>
            <button
              className={`hamburger ${isOpen ? "open" : ""}`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsOpen((value) => !value)}
              type="button"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-nav ${isOpen ? "open" : ""}`} id="mobile-nav" aria-hidden={!isOpen}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive(pathname, item.href) ? "page" : undefined}
            onClick={closeMenu}
          >
            {item.label}
            {item.badge ? <span className="nav-badge">{item.badge}</span> : null}
          </Link>
        ))}
        <div className="mobile-nav-divider" />
        <ButtonLink href="/demo" onClick={closeMenu}>
          Try Demo <Icon name="arrowRight" />
        </ButtonLink>
        <ButtonLink href="https://github.com/getmetraly" external variant="ghost">
          <Icon name="github" /> GitHub <Icon name="external" />
        </ButtonLink>
      </div>
    </>
  );
}
