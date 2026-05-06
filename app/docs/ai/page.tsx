import { SiteShell } from "@/components/site-shell";
import styles from "@/components/marketing/marketing.module.css";
import { ButtonLink } from "@/components/ui/primitives";

const aiAreas = [
  "Synthetic insight generation",
  "Role-based engineering summaries",
  "Private AI direction",
  "BYO model/provider direction",
  "Operational context workflows",
  "Chat-based exploration",
];

export const metadata = {
  title: "AI Direction — Metraly Docs",
  description: "Documentation for the Metraly AI direction and public implementation boundaries.",
};

export default function AiDocsPage() {
  return (
    <SiteShell>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.badge}>Docs · AI direction</div>
          <h1 className={styles.heroTitle}>AI for engineering.<br /><span className={styles.gradientText}>Without losing control.</span></h1>
          <p className={styles.heroSub}>Metraly explores AI-assisted engineering visibility with synthetic examples and conservative public wording while implementation evolves.</p>
          <div className={styles.heroActions}>
            <ButtonLink href="/ai">Open AI page</ButtonLink>
            <ButtonLink href="/docs" variant="ghost">Back to docs</ButtonLink>
          </div>
        </section>

        <section className={styles.surface}>
          <div className={styles.section}>
            <div className={styles.eyebrow}>Direction</div>
            <h2 className={styles.title}>AI is directional, not overclaimed.</h2>
            <div className={styles.grid3}>
              {aiAreas.map((item) => (
                <div className={styles.card} key={item}>
                  <h3 className={styles.cardTitle}>{item}</h3>
                  <p className={styles.cardDesc}>Part of the public AI direction demonstrated through synthetic examples and preview UX.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className={`${styles.section} ${styles.split}`}>
            <div>
              <div className={styles.eyebrow}>Boundaries</div>
              <h2 className={styles.title}>What the website should not claim.</h2>
              <p className={styles.sub}>The website may show AI concepts, workflows, and synthetic examples. It should not claim production-grade AI automation, autonomous operations, or enterprise-grade model governance before implementation proof exists.</p>
            </div>
            <div className={`${styles.card} ${styles.cardAccent}`}>
              <h3 className={styles.cardTitle}>Safe wording examples</h3>
              <p className={styles.cardDesc}>→ AI direction</p>
              <p className={styles.cardDesc}>→ AI workflows in development</p>
              <p className={styles.cardDesc}>→ Synthetic AI examples</p>
              <p className={styles.cardDesc}>→ Private AI exploration</p>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
