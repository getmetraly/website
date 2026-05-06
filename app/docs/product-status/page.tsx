import { SiteShell } from "@/components/site-shell";
import styles from "@/components/marketing/marketing.module.css";
import { ButtonLink } from "@/components/ui/primitives";

const statusItems = [
  ["Role dashboards", "Preview", "Synthetic role dashboards and product UI are visible publicly."],
  ["Dashboard editor", "In progress", "Drag-and-drop dashboard editing and rendering are active product work."],
  ["Git / CI connectors", "Next", "Connectors are the next major milestone after dashboard foundation work."],
  ["AI insights", "Designed", "AI examples are synthetic and directional, not production-ready claims."],
  ["Plugin marketplace", "Planned", "Plugin architecture and marketplace direction exist but are not shipped."],
  ["Billing and license activation", "Designed", "Paid licensing requires signed license validation before GA claims."],
];

export const metadata = {
  title: "Product Status — Metraly Docs",
  description: "Public implementation status and claim-safe roadmap markers for Metraly.",
};

export default function ProductStatusDocsPage() {
  return (
    <SiteShell>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.badge}>Docs · Product status</div>
          <h1 className={styles.heroTitle}>What exists.<br /><span className={styles.gradientText}>What is next.</span></h1>
          <p className={styles.heroSub}>Metraly uses public status markers so the website can show product direction without overclaiming implementation maturity.</p>
          <div className={styles.heroActions}>
            <ButtonLink href="/pricing">View pricing</ButtonLink>
            <ButtonLink href="/docs" variant="ghost">Back to docs</ButtonLink>
          </div>
        </section>

        <section className={styles.surface}>
          <div className={styles.section}>
            <div className={styles.eyebrow}>Status map</div>
            <h2 className={styles.title}>Public implementation markers.</h2>
            <p className={styles.sub}>Every major area should clearly communicate whether it is preview, in progress, next, designed, planned, or shipped.</p>
            <div className={styles.grid3}>
              {statusItems.map(([area, status, note]) => (
                <div className={styles.card} key={area}>
                  <div className={styles.cardHead}>
                    <h3 className={styles.cardTitle}>{area}</h3>
                    <span className={styles.status}>{status}</span>
                  </div>
                  <p className={styles.cardDesc}>{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
