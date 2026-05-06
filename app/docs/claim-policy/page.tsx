import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import styles from "@/components/marketing/marketing.module.css";

const safeClaims = [
  "Real UI with synthetic data",
  "Dashboards are actively being developed",
  "Connectors are planned / next",
  "AI is designed and evolving",
  "Pricing is preview / pilot oriented",
  "Community Edition is self-hosted open core",
];

const unsafeClaims = [
  "Production-ready AI assistant",
  "Live enterprise marketplace",
  "GA billing and license automation",
  "Certified compliance programs",
  "Finished enterprise deployment stack",
  "Operational AI claims without implementation proof",
];

export const metadata = {
  title: "Claim Policy — Metraly Docs",
  description: "Public wording and implementation-boundary policy for Metraly website and documentation.",
};

export default function ClaimPolicyDocsPage() {
  return (
    <SiteShell>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.badge}>Docs · Claim policy</div>
          <h1 className={styles.heroTitle}>Direction is public.<br /><span className={styles.gradientText}>Proof is required.</span></h1>
          <p className={styles.heroSub}>Metraly intentionally uses conservative public wording to avoid claiming capabilities that are not yet implemented and verified in the application.</p>
          <div className={styles.heroActions}>
            <Link href="/pricing" className="btn-primary">View pricing boundaries</Link>
            <Link href="/docs" className="btn-ghost btn-large">Back to docs</Link>
          </div>
        </section>

        <section className={styles.surface}>
          <div className={styles.section}>
            <div className={styles.eyebrow}>Safe claims</div>
            <h2 className={styles.title}>What the website can safely say.</h2>
            <div className={styles.grid3}>
              {safeClaims.map((item) => (
                <div className={styles.card} key={item}>
                  <p className={styles.cardDesc}>→ {item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className={styles.section}>
            <div className={styles.eyebrow}>Unsafe claims</div>
            <h2 className={styles.title}>What should not be publicly claimed yet.</h2>
            <div className={styles.grid3}>
              {unsafeClaims.map((item) => (
                <div className={`${styles.card} ${styles.cardAccent}`} key={item}>
                  <p className={styles.cardDesc}>✕ {item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
