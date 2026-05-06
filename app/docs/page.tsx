import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import styles from "@/components/marketing/marketing.module.css";

const docSections = [
  {
    title: "Project status",
    desc: "Canonical status index, readiness markers, implementation boundaries, and next actions.",
    href: "https://github.com/getmetraly/docs/blob/main/STATUS.md",
    label: "Canonical",
  },
  {
    title: "Claim policy",
    desc: "Rules for public wording, implementation claims, roadmap language, and proof requirements.",
    href: "https://github.com/getmetraly/docs/blob/main/claim-policy.md",
    label: "Required",
  },
  {
    title: "Website claim boundaries",
    desc: "Safe website language for AI, dashboards, connectors, demo, pricing, and marketplace claims.",
    href: "https://github.com/getmetraly/docs/blob/main/status/claims-and-website.md",
    label: "Website",
  },
  {
    title: "Architecture overview",
    desc: "System-level architecture, product boundaries, self-hosted posture, and implementation map.",
    href: "https://github.com/getmetraly/docs/blob/main/architecture/overview.md",
    label: "Architecture",
  },
  {
    title: "Billing and license flow",
    desc: "Payment, signed license activation, feature gates, renewal, downgrade, and recovery lifecycle.",
    href: "https://github.com/getmetraly/docs/blob/main/product/billing-license-flow.md",
    label: "Pricing",
  },
  {
    title: "Monetization strategy",
    desc: "Community, Pro, and Enterprise packaging, pricing anchors, and open-core monetization model.",
    href: "https://github.com/getmetraly/docs/blob/main/strategy/monetization-v2.md",
    label: "Strategy",
  },
];

const productDocs = [
  {
    title: "Homepage v3 copy",
    href: "https://github.com/getmetraly/docs/blob/main/website/homepage-copy-v3.md",
  },
  {
    title: "Website content architecture",
    href: "https://github.com/getmetraly/docs/blob/main/website/website-content-architecture.md",
  },
  {
    title: "Demo dataset specification",
    href: "https://github.com/getmetraly/docs/blob/main/product/demo-dataset-spec.md",
  },
  {
    title: "First useful insights",
    href: "https://github.com/getmetraly/docs/blob/main/product/first-useful-insights.md",
  },
];

export const metadata = {
  title: "Documentation — Metraly",
  description:
    "Metraly documentation landing page for product status, claim policy, architecture, pricing, demo, and implementation boundaries.",
};

export default function DocsPage() {
  return (
    <SiteShell>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.badge}>Docs · Source of truth</div>
          <h1 className={styles.heroTitle}>
            Build with the
            <br />
            <span className={styles.gradientText}>same truth as the product.</span>
          </h1>
          <p className={styles.heroSub}>
            Metraly documentation tracks product status, claim boundaries, architecture, pricing, demo data, and implementation readiness.
          </p>
          <div className={styles.heroActions}>
            <a href="https://github.com/getmetraly/docs" className="btn-primary" target="_blank" rel="noreferrer">
              Open docs repo →
            </a>
            <Link href="/demo" className="btn-ghost btn-large">
              Try synthetic demo
            </Link>
          </div>
        </section>

        <section className={styles.surface}>
          <div className={styles.section}>
            <div className={styles.eyebrow}>Start here</div>
            <h2 className={styles.title}>Canonical docs for public claims.</h2>
            <p className={styles.sub}>
              These documents define what the website can say today, what is still designed, and what must wait for implementation proof.
            </p>

            <div className={styles.grid3}>
              {docSections.map((doc) => (
                <a key={doc.title} href={doc.href} className={styles.card} style={{ textDecoration: "none", color: "inherit" }} target="_blank" rel="noreferrer">
                  <div className={styles.cardHead}>
                    <h3 className={styles.cardTitle}>{doc.title}</h3>
                    <span className={styles.status}>{doc.label}</span>
                  </div>
                  <p className={styles.cardDesc}>{doc.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className={`${styles.section} ${styles.split}`}>
            <div>
              <div className={styles.eyebrow}>Product docs</div>
              <h2 className={styles.title}>Website, demo, and product proof.</h2>
              <p className={styles.sub}>
                These docs keep the public site aligned with build-in-public positioning, synthetic data, role dashboards, and proof requirements.
              </p>
            </div>

            <div className={styles.card}>
              <div style={{ display: "grid", gap: 14 }}>
                {productDocs.map((doc) => (
                  <a key={doc.title} href={doc.href} target="_blank" rel="noreferrer" className={styles.cardDesc} style={{ color: "var(--cyan)", textDecoration: "none" }}>
                    → {doc.title} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.surface}>
          <div className={styles.section}>
            <div className={styles.eyebrow}>Implementation boundary</div>
            <h2 className={styles.title}>Docs describe direction. Code proves claims.</h2>
            <p className={styles.sub}>
              Before a public claim becomes “shipped,” it must be verified in the application repository and reflected in the status docs.
            </p>

            <div className={styles.grid3}>
              <a href="https://github.com/getmetraly/metraly" className={styles.card} style={{ textDecoration: "none", color: "inherit" }} target="_blank" rel="noreferrer">
                <h3 className={styles.cardTitle}>Application repository</h3>
                <p className={styles.cardDesc}>Implementation truth for dashboards, connectors, AI, plugins, license gates, and telemetry.</p>
              </a>
              <a href="https://github.com/getmetraly/website" className={styles.card} style={{ textDecoration: "none", color: "inherit" }} target="_blank" rel="noreferrer">
                <h3 className={styles.cardTitle}>Website repository</h3>
                <p className={styles.cardDesc}>Public positioning, homepage, pricing, AI page, demo gateway, and claim-safe marketing surface.</p>
              </a>
              <a href="https://github.com/getmetraly/docs" className={styles.card} style={{ textDecoration: "none", color: "inherit" }} target="_blank" rel="noreferrer">
                <h3 className={styles.cardTitle}>Documentation repository</h3>
                <p className={styles.cardDesc}>Canonical strategy, status, methodology, product proof, pricing, architecture, and claim policy.</p>
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
