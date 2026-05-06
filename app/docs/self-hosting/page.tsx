import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import styles from "@/components/marketing/marketing.module.css";

export const metadata = {
  title: "Self-hosting — Metraly Docs",
  description: "Understand the self-hosted direction and deployment philosophy behind Metraly.",
};

export default function SelfHostingDocsPage() {
  return (
    <SiteShell>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.badge}>Docs · Self-hosting</div>
          <h1 className={styles.heroTitle}>Keep engineering data<br /><span className={styles.gradientText}>under your control.</span></h1>
          <p className={styles.heroSub}>Metraly is designed around self-hosting for organizations that cannot route repository, CI/CD, or operational telemetry through another SaaS layer.</p>
          <div className={styles.heroActions}>
            <a href="https://github.com/getmetraly/metraly" className="btn-primary" target="_blank" rel="noreferrer">View source →</a>
            <Link href="/docs" className="btn-ghost btn-large">Back to docs</Link>
          </div>
        </section>

        <section className={styles.surface}>
          <div className={styles.section}>
            <div className={styles.eyebrow}>Principles</div>
            <h2 className={styles.title}>Self-hosted by default.</h2>
            <div className={styles.grid3}>
              <div className={styles.card}><h3 className={styles.cardTitle}>Repository sovereignty</h3><p className={styles.cardDesc}>Git history, pull requests, incidents, CI/CD logs, and engineering metrics stay in infrastructure you control.</p></div>
              <div className={styles.card}><h3 className={styles.cardTitle}>Private AI direction</h3><p className={styles.cardDesc}>AI is designed around local models, BYO providers, and explicit control boundaries instead of automatic external data sharing.</p></div>
              <div className={styles.card}><h3 className={styles.cardTitle}>Open core foundation</h3><p className={styles.cardDesc}>The Community Edition remains useful and inspectable even before paid modules are generally available.</p></div>
            </div>
          </div>
        </section>

        <section>
          <div className={`${styles.section} ${styles.split}`}>
            <div>
              <div className={styles.eyebrow}>Current reality</div>
              <h2 className={styles.title}>Deployment maturity is evolving.</h2>
              <p className={styles.sub}>The public website currently demonstrates UI direction, dashboard rendering, and synthetic demo environments. Connectors, deployment workflows, AI infrastructure, and enterprise controls are still evolving.</p>
            </div>
            <div className={`${styles.card} ${styles.cardAccent}`}>
              <h3 className={styles.cardTitle}>Claim-safe status</h3>
              <p className={styles.cardDesc}>Metraly should not claim production-ready enterprise deployment, compliance certification, air-gapped operation, or finished AI infrastructure until implementation proof exists in the product repository.</p>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
