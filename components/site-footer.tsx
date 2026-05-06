import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <Link className="nav-logo" href="/" aria-label="Metraly home">
              <div className="nav-logo-icon" aria-hidden="true">M</div>
              Metraly
            </Link>
            <p className="footer-brand-desc">
              Self-hosted Engineering Intelligence with a privacy-first architecture.
              AGPLv3 open-core. Designed for customer-controlled infrastructure.
            </p>
          </div>

          <div>
            <div className="footer-col-title">Product</div>
            <ul className="footer-links">
              <li><Link href="/#features">Features</Link></li>
              <li><Link href="/#roles">Who it's for</Link></li>
              <li><Link href="/ai">AI direction</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Resources</div>
            <ul className="footer-links">
              <li><Link href="/docs">Documentation</Link></li>
              <li><Link href="/demo">Synthetic demo</Link></li>
              <li><Link href="/trust">Trust</Link></li>
              <li><a href="https://github.com/getmetraly/metraly" target="_blank" rel="noopener">GitHub</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Legal</div>
            <ul className="footer-links">
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <a href="https://github.com/getmetraly" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
