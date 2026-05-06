import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import styles from "@/components/marketing/marketing.module.css";

const steps = [
  "Payment or contract",
  "Signed license",
  "Self-hosted app verification",
  "Feature gates",
  "Renewal, downgrade, and recovery",
];

export const metadata = {
  title: "Pricing & License — Metraly Docs",
  description: "Public documentation for Metraly pricing preview, editions, and signed-license activation model.",
};

export default function PricingLicenseDocsPage() {
  return (
    <SiteShell>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.badge}>Docs · Pricing & license</div>
          <h1 className={styles.heroTitle}>Pricing is public.<br /><span className={styles.gradientText}>Activation is phased.</span></h1>
          <p className={styles.heroSub}>Community is free. Pro and Enterprise pricing are public anchors while paid licensing moves through signed-license pilots and implementation proof.</p>
          <div className={styles.heroActions}>
            <Link href="/pricing" className="btn-primary">View pricing</Link>
            <Link href="/docs" className="btn-ghost btn-large">Back to docs</Link>
          </div>
        </section>

        <section className={styles.surface}>
          <div className={styles.section}>
            <div className={styles.eyebrow}>Editions</div>
            <h2 className={styles.title}>Community, Pro, Enterprise.</h2>
            <div className={styles.grid3}>
              <div className={styles.card}><h3 className={styles.cardTitle}>Community</h3><p className={styles.cardDesc}>Free self-hosted AGPLv3 core for evaluation, small teams, OSS, and privacy-first buyers.</p></div>
              <div className={styles.card}><h3 className={styles.cardTitle}>Pro</h3><p className={styles.cardDesc}>Planned paid tier for scale, retention, exports, alerts, private AI direction, plugins, and support.</p></div>
              <div className={styles.card}><h3 className={styles.cardTitle}>Enterprise</h3><p className={styles.cardDesc}>Pilot/contact tier for procurement, deployment guidance, custom agreements, and regulated-environment roadmap needs.</p></div>
            </div>
          </div>
        </section>

        <section>
          <div className={`${styles.section} ${styles.split}`}>
            <div>
              <div className={styles.eyebrow}>License flow</div>
              <h2 className={styles.title}>Billing is not the license.</h2>
              <p className={styles.sub}>Billing decides whether a customer paid. The self-hosted app needs a signed license to unlock paid entitlements locally.</p>
            </div>
            <div className={`${styles.card} ${styles.cardAccent}`}>
              {steps.map((step, index) => (
                <p key={step} className={styles.cardDesc}>{index + 1}. {step}</p>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
