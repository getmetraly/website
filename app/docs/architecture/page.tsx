import { SiteShell } from "@/components/site-shell";
import styles from "@/components/marketing/marketing.module.css";
import { ButtonLink } from "@/components/ui/primitives";

const layers = [
  ["Website", "Public positioning, pricing preview, documentation, AI direction, and demo gateway."],
  ["Demo sandbox", "Static bundled product UI using synthetic data and hash-based navigation."],
  ["Metraly app", "Self-hosted application where implementation proof lives."],
  ["Connectors", "Planned Git, CI/CD, project-management, and operational data sources."],
  ["License gates", "Future signed-license verification and paid feature activation."],
  ["AI layer", "Designed private AI direction with local/BYO provider control boundaries."],
];

export const metadata = {
  title: "Architecture — Metraly Docs",
  description: "Public architecture overview for Metraly website, demo, app, connectors, licensing, and AI direction.",
};

export default function ArchitectureDocsPage() {
  return (
    <SiteShell>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.badge}>Docs · Architecture</div>
          <h1 className={styles.heroTitle}>Self-hosted core.<br /><span className={styles.gradientText}>Public proof surfaces.</span></h1>
          <p className={styles.heroSub}>A public architecture map for how the website, demo sandbox, self-hosted app, connectors, licensing, and AI direction relate.</p>
          <div className={styles.heroActions}>
            <ButtonLink href="/docs/self-hosting">Self-hosting docs</ButtonLink>
            <ButtonLink href="/docs" variant="ghost">Back to docs</ButtonLink>
          </div>
        </section>

        <section className={styles.surface}>
          <div className={styles.section}>
            <div className={styles.eyebrow}>System map</div>
            <h2 className={styles.title}>Public architecture layers.</h2>
            <p className={styles.sub}>This page intentionally describes high-level public architecture, not internal planning details.</p>
            <div className={styles.grid3}>
              {layers.map(([title, desc]) => (
                <div className={styles.card} key={title}>
                  <h3 className={styles.cardTitle}>{title}</h3>
                  <p className={styles.cardDesc}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className={`${styles.section} ${styles.split}`}>
            <div>
              <div className={styles.eyebrow}>Trust boundary</div>
              <h2 className={styles.title}>Implementation truth lives in the app.</h2>
              <p className={styles.sub}>The website explains product direction. The demo proves UX direction with synthetic data. The self-hosted application repository proves shipped implementation.</p>
            </div>
            <div className={`${styles.card} ${styles.cardAccent}`}>
              <h3 className={styles.cardTitle}>Claim rule</h3>
              <p className={styles.cardDesc}>A feature becomes a shipped public claim only after implementation is verified in product code and reflected in public status documentation.</p>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
