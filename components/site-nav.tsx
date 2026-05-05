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
          <a
            href="https://github.com/getmetraly"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.28-1.67-1.28-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.52-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.19-1.48 3.15-1.17 3.15-1.17.62 1.59.23 2.77.11 3.06.73.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.37-5.25 5.65.41.35.77 1.04.77 2.1 0 1.52-.01 2.75-.01 3.12 0 .31.21.68.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            GitHub
          </a>
          <Link
            href="/login"
            className="btn-primary"
            aria-label="Try demo preview"
          >
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
