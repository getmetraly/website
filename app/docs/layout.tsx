import Link from "next/link";
import type { ReactNode } from "react";
import { SiteShell } from "@/components/site-shell";
import styles from "@/components/marketing/marketing.module.css";

const docsNav = [
  {
    section: "Getting started",
    links: [
      ["Overview", "/docs"],
      ["Quick start", "/docs/quick-start"],
      ["Demo sandbox", "/docs/demo"],
    ],
  },
  {
    section: "Platform",
    links: [
      ["Self-hosting", "/docs/self-hosting"],
      ["Architecture", "/docs/architecture"],
      ["Connectors", "/docs/connectors"],
      ["AI direction", "/docs/ai"],
    ],
  },
  {
    section: "Product status",
    links: [
      ["Status", "/docs/product-status"],
      ["Claim policy", "/docs/claim-policy"],
      ["Pricing & license", "/docs/pricing-license"],
    ],
  },
];

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <SiteShell>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "280px minmax(0, 1fr)",
          gap: 32,
          maxWidth: 1440,
          margin: "0 auto",
          padding: "120px 24px 80px",
        }}
      >
        <aside
          style={{
            position: "sticky",
            top: 100,
            alignSelf: "start",
            display: "grid",
            gap: 28,
            padding: 24,
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 24,
            background: "rgba(10,14,24,0.72)",
            backdropFilter: "blur(20px)",
            height: "fit-content",
          }}
        >
          <div>
            <div className={styles.badge} style={{ marginBottom: 14 }}>Public docs</div>
            <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 10 }}>
              Metraly Documentation
            </h2>
            <p className={styles.cardDesc}>
              Public product docs synced from validated internal planning and implementation status.
            </p>
          </div>

          {docsNav.map((group) => (
            <div key={group.section} style={{ display: "grid", gap: 12 }}>
              <div
                style={{
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.45)",
                  fontWeight: 700,
                }}
              >
                {group.section}
              </div>

              <div style={{ display: "grid", gap: 8 }}>
                {group.links.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    style={{
                      color: "rgba(255,255,255,0.82)",
                      textDecoration: "none",
                      padding: "10px 12px",
                      borderRadius: 12,
                      transition: "all 0.2s ease",
                      border: "1px solid transparent",
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </aside>

        <div>{children}</div>
      </div>
    </SiteShell>
  );
}
