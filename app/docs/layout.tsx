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
    <SiteShell showFooter={false}>
  
        <div className={layoutStyles.content}>{children}</div>
  
    </SiteShell>
  );
}
