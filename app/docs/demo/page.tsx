import { SiteShell } from "@/components/site-shell";
import styles from "@/components/marketing/marketing.module.css";
import { ButtonLink } from "@/components/ui/primitives";

const roles = [
  "CTO",
  "VP Engineering",
  "Tech Lead",
  "DevOps",
  "Individual Contributor",
];

export const metadata = {
  title: "Demo Sandbox — Metraly Docs",
  description: "Documentation for the Metraly synthetic sandbox and role-based demo dashboards.",
};

export default function DemoDocsPage() {
  return (
    <SiteShell>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.badge}>Docs · Demo sandbox</div>
          <h1 className={styles.heroTitle}>Real UI direction.<br /><span className={styles.gradientText}>Synthetic engineering data.</span></h1>
          <p className={styles.heroSub}>The public sandbox demonstrates product direction, role dashboards, and workflow ideas without requiring real repositories or CI/CD credentials.</p>
          <div className={styles.heroActions}>
            <ButtonLink href="/demo">Open sandbox</ButtonLink>
            <ButtonLink href="/docs" variant="ghost">Back to docs</ButtonLink>
          </div>
        </section>

        <section className={styles.surface}>
          <div className={styles.section}>
            <div className={styles.eyebrow}>Role dashboards</div>
            <h2 className={styles.title}>Synthetic role perspectives.</h2>
            <div className={styles.grid3}>
              {roles.map((role) => (
                <div className={styles.card} key={role}>
                  <h3 className={styles.cardTitle}>{role}</h3>
                  <p className={styles.cardDesc}>Synthetic metrics, delivery visibility, operational signals, and dashboard flows for this role.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className={`${styles.section} ${styles.split}`}>
            <div>
              <div className={styles.eyebrow}>Boundaries</div>
              <h2 className={styles.title}>The sandbox is not production telemetry.</h2>
              <p className={styles.sub}>The public demo intentionally uses synthetic datasets and preview functionality to demonstrate UX and product direction before live integrations are connected.</p>
            </div>
            <div className={`${styles.card} ${styles.cardAccent}`}>
              <h3 className={styles.cardTitle}>Safe wording</h3>
              <p className={styles.cardDesc}>The website may claim real UI and synthetic datasets. It should not claim real customer telemetry, production AI operations, or finished enterprise integrations through the demo.</p>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
