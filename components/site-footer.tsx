import Link from "next/link";

const footerGroups = [
  {
    title: "Product",
    links: [
      { href: "/#features", label: "Platform overview" },
      { href: "/#roles", label: "Role dashboards" },
      { href: "/ai", label: "AI direction" },
      { href: "/pricing", label: "Pricing preview" },
    ],
  },
  {
    title: "Explore",
    links: [
      { href: "/docs", label: "Documentation" },
      { href: "/blog", label: "Blog" },
      { href: "/demo", label: "Synthetic demo" },
      { href: "/demo-app/", label: "Open sandbox" },
      { href: "/trust", label: "Trust center" },
    ],
  },
  {
    title: "Open source",
    links: [
      { href: "https://github.com/getmetraly/metraly", label: "App repository ↗", external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy policy" },
      { href: "/terms", label: "Terms of service" },
      { href: "/rss.xml", label: "RSS feed" },
    ],
  },
];

type FooterLink = {
  href: string;
  label: string;
  external?: boolean;
};

export function SiteFooter({ className }: { className?: string } = {}) {
  return (
    <footer className={className}>
      <div className="footer-inner">
        <div className="footer-topline">
          <div>
            <Link className="nav-logo" href="/" aria-label="Metraly home">
              <div className="nav-logo-icon" aria-hidden="true">M</div>
              Metraly
            </Link>
            <p className="footer-brand-desc">
              Self-hosted Engineering Intelligence for teams that want visibility without moving engineering data into another SaaS by default.
            </p>
          </div>
          <div className="footer-status-card">
            <span className="footer-fsl">AGPLv3 core</span>
            <p>Community core is free. Pro and Enterprise are pricing previews for pilots and future signed-license activation.</p>
          </div>
        </div>

        <div className="footer-grid">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <div className="footer-col-title">{group.title}</div>
              <ul className="footer-links">
                {group.links.map((link: FooterLink) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                    ) : (
                      <Link href={link.href}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© 2026 Metraly. Public preview documentation and synthetic demo surfaces.</span>
          <div className="footer-bottom-links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/blog">Blog</Link>
            <a href="https://github.com/getmetraly" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
