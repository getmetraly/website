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
            href="https://github.com/getmetraly/metraly"
            className="btn-ghost"
            target="_blank"
            rel="noopener"
            aria-label="View on GitHub"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.285.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.23-1.305-3.465-.42-5.625-1.965-5.625-5.925 0-1.305.465-2.385 1.23-3.225.12-.3.54-1.53.12-3.18-.135-.315-.69-1.56-.21-3.255 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.48 1.695.345 2.94.21 3.255.765.84 1.23 1.92 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.42.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .285.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
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
