"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function SiteNav() {
  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        <Link className="nav-logo" href="/" aria-label="Metraly home">
          <div className="nav-logo-icon" aria-hidden="true">
            M
          </div>
          Metraly
        </Link>
        <ul className="nav-links" role="list">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#roles">Who it's for</a>
          </li>
          <li>
            <a href="#ai">
              AI{" "}
              <span className="nav-badge" aria-label="New feature">
                NEW
              </span>
            </a>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/docs">Docs</Link>
          </li>
        </ul>
        <div className="nav-right">
          <ThemeToggle />
          <a href="https://github.com/getmetraly" className="btn-github">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91..."/>
            </svg>
            GitHub
          </a>
          <Link href="/login" className="btn-primary" aria-label="Try demo preview">
            Try Demo →
          </Link>
          <button
            className="hamburger"
            id="hamburger"
            aria-label="Open menu"
            aria-expanded="false"
            aria-controls="mobile-nav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
