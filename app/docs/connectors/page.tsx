import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import styles from "@/components/marketing/marketing.module.css";

const connectorAreas = [
  "Git repositories",
  "CI/CD systems",
  "Issue tracking",
  "Operational alerts",
  "Team communication",
  "Custom plugins",
];

export const metadata = {
  title: "Connectors — Metraly Docs",
  description: "Documentation for planned Metraly connectors and integration direction.",
};

export default function ConnectorsDocsPage() {
  return (
    <SiteShell>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.badge}>Docs · Connectors</div>
          <h1 className={styles.heroTitle}>Engineering signals.<br /><span className={styles.gradientText}>Connected responsibly.</span></h1>
          <p className={styles.heroSub}>Connectors are the next major milestone after dashboard rendering and editor work. Public docs intentionally describe direction without claiming shipped integrations.</p>
          <div className={styles.heroActions}>
            <Link href="/docs/product-status" className="btn-primary">View status</Link>
            <Link href="/docs" className="btn-ghost btn-large">Back to docs</Link>
          </div>
        </section>

        <section className={styles.surface}>
          <div className={styles.section}>
            <div className={styles.eyebrow}>Planned integration areas</div>
            <h2 className={styles.title}>Connectors are directional today.</h2>
            <div className={styles.grid3}>
              {connectorAreas.map((item) => (
                <div className={styles.card} key={item}>
                  <h3 className={styles.cardTitle}>{item}</h3>
                  <p className={styles.cardDesc}>Planned connector direction for synthetic dashboards, metrics, AI insights, and operational visibility.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
