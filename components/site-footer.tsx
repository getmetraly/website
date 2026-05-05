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
              Engineering metrics platform with full data sovereignty.
              AGPLv3 open-core. Deploy on your infrastructure.
            </p>
          </div>

          <div>
            <div className="footer-col-title">Product</div>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#roles">Who it's for</a></li>
              <li><a href="#ai">AI Assistant</a></li>
              <li><Link href="/pricing">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Resources</div>
            <ul className="footer-links">
              <li><Link href="/docs">Documentation</Link></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#community">Community</a></li>
              <li><a href="https://github.com/getmetraly/metraly" target="_blank" rel="noopener">GitHub</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="https://github.com/getmetraly/metraly" target="_blank" rel="noopener">
              <span className="footer-fsl">AGPLv3</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
