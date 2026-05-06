import Link from "next/link";
import type { ReactNode } from "react";
import { SiteShell } from "@/components/site-shell";
import styles from "@/components/marketing/marketing.module.css";
import layoutStyles from "./docs-layout.module.css";

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
      <div className={layoutStyles.shell}>
        <div className={layoutStyles.sidebarWrap}>
          <aside className={layoutStyles.sidebar}>
            <div>
              <div className={styles.badge} style={{ marginBottom: 14 }}>
                Public docs
              </div>

              <h2 className={layoutStyles.title}>Metraly Documentation</h2>

              <p className={styles.cardDesc}>
                Public product docs synced from validated internal planning and implementation status.
              </p>
            </div>

            {docsNav.map((group) => (
              <div key={group.section} className={layoutStyles.group}>
                <div className={layoutStyles.groupTitle}>{group.section}</div>

                <div className={layoutStyles.links}>
                  {group.links.map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      className={layoutStyles.link}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </aside>
        </div>

        <div className={layoutStyles.content}>{children}</div>
      </div>
    </SiteShell>
  );
}
