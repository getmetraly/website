import styles from "@/components/marketing/marketing.module.css";
import { ButtonLink, Icon } from "@/components/ui/primitives";

export const metadata = {
  title: "Quick Start — Metraly Docs",
  description: "Start exploring Metraly with the synthetic demo, source repository, and self-hosted deployment path.",
};

export default function QuickStartDocsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.badge}>Docs · Quick start</div>
        <h1 className={styles.heroTitle}>Start with the<br /><span className={styles.gradientText}>synthetic sandbox.</span></h1>
        <p className={styles.heroSub}>Explore the product direction with synthetic data before connecting real repositories, CI/CD systems, or team workflows.</p>
        <div className={styles.heroActions}>
          <ButtonLink href="/demo">Open demo <Icon name="arrowRight" /></ButtonLink>
          <ButtonLink href="/docs" variant="ghost">Back to docs</ButtonLink>
        </div>
      </section>

      <section className={styles.surface}>
        <div className={styles.section}>
          <div className={styles.eyebrow}>Recommended path</div>
          <h2 className={styles.title}>Evaluate without real company data.</h2>
          <div className={styles.grid3}>
            <div className={styles.card}><h3 className={styles.cardTitle}>1. Open the demo</h3><p className={styles.cardDesc}>Use the synthetic sandbox to see role dashboards and product flows with mock engineering data.</p></div>
            <div className={styles.card}><h3 className={styles.cardTitle}>2. Review product status</h3><p className={styles.cardDesc}>Understand what is preview, in progress, designed, planned, or not yet shipped.</p></div>
            <div className={styles.card}><h3 className={styles.cardTitle}>3. Self-host when ready</h3><p className={styles.cardDesc}>Run Metraly on infrastructure you control before connecting real engineering signals.</p></div>
          </div>
        </div>
      </section>

      <section>
        <div className={`${styles.section} ${styles.split}`}>
          <div>
            <div className={styles.eyebrow}>Current baseline</div>
            <h2 className={styles.title}>Real UI direction. Synthetic data.</h2>
            <p className={styles.sub}>Metraly is being built as a self-hosted Engineering Intelligence platform. The public demo and website use real product direction with synthetic data and status-labeled roadmap capabilities.</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Do not enter real data into demo environments</h3>
            <p className={styles.cardDesc}>The demo is intended for product exploration only. It should not be used with real tokens, repositories, CI/CD credentials, personal data, or company-sensitive information.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
