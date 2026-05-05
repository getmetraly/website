import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import styles from "@/components/marketing/marketing.module.css";

const cards = [
  {
    icon: "🔒",
    title: "Private by design",
    text: "Local models, BYO providers, and controlled data exposure — not default SaaS data sharing.",
    label: "Designed",
  },
  {
    icon: "✦",
    title: "Engineering-context insights",
    text: "Explain bottlenecks across PRs, CI, incidents, and delivery flow using engineering context.",
    label: "Direction",
  },
  {
    icon: "🧪",
    title: "Synthetic examples first",
    text: "Early examples use synthetic data before real connectors and live pipelines are available.",
    label: "Preview",
  },
];

const roadmap = [
  ["Now", "Synthetic insight examples in the website and dashboard mock data."],
  ["Next", "Dashboard editor, real rendering, and demo environment alignment."],
  ["Then", "GitHub / GitLab and CI/CD connectors to support real engineering signals."],
  ["Later", "AI insight layer with provider controls, local model support, and evaluation methodology."],
];

export default function AIPage() {
  return (
    <SiteShell>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />

          <div className={styles.badge}>AI SOON · Designed, not shipped</div>

          <h1 className={styles.heroTitle}>
            AI insights for private
            <br />
            <span className={styles.gradientText}>engineering data.</span>
          </h1>

          <p className={styles.heroSub}>
            Metraly is being designed to explain delivery bottlenecks, CI failures, review queues, and operational risk without sending sensitive engineering data to another default SaaS AI layer.
          </p>

          <div className={styles.heroActions}>
            <Link href="/" className="btn-primary">Back to homepage</Link>
            <Link href="/docs" className="btn-ghost btn-large">Read docs</Link>
          </div>
        </section>

        <section className={styles.surface}>
          <div className={styles.section}>
            <div className={styles.eyebrow}>Principles</div>
            <h2 className={styles.title}>Designed to explain, not expose.</h2>
            <p className={styles.sub}>
              The AI layer is a product direction. Until connectors, live data pipelines, and evaluation are ready, all examples should stay synthetic and status-labeled.
            </p>

            <div className={styles.grid3}>
              {cards.map((item) => (
                <div key={item.title} className={styles.card}>
                  <div className={styles.icon}>{item.icon}</div>
                  <div className={styles.cardHead}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <span className={styles.status}>{item.label}</span>
                  </div>
                  <p className={styles.cardDesc}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className={`${styles.section} ${styles.split}`}>
            <div>
              <div className={styles.eyebrow}>Synthetic preview</div>
              <h2 className={styles.title}>What an insight could look like.</h2>
              <p className={styles.sub}>
                Example only. The goal is to connect engineering signals into an actionable explanation while keeping data-control boundaries explicit.
              </p>
            </div>

            <div className={`${styles.card} ${styles.cardAccent}`}>
              <div style={{ color: "var(--purple)", fontSize: 12, fontWeight: 700, marginBottom: 10 }}>
                Synthetic insight example
              </div>
              <h3 style={{ fontSize: 22, marginBottom: 12 }}>
                Review queue increased this sprint
              </h3>
              <p className={styles.cardDesc} style={{ marginBottom: 16 }}>
                Likely bottleneck: two overloaded reviewers are assigned across multiple high-risk services. Review wait time is increasing faster than implementation time.
              </p>
              <div className={styles.note}>
                Based on synthetic data. Not a live AI inference.
              </div>
            </div>
          </div>
        </section>

        <section className={styles.surface}>
          <div className={styles.section}>
            <div className={styles.eyebrow}>Roadmap</div>
            <h2 className={styles.title}>AI follows the data foundation.</h2>
            <p className={styles.sub}>
              AI should not overtake the product foundation. It depends on dashboard rendering, connectors, real pipelines, and evaluation.
            </p>

            <div className={styles.grid4}>
              {roadmap.map(([stage, text]) => (
                <div key={stage} className={styles.card}>
                  <h3 className={styles.cardTitle}>{stage}</h3>
                  <p className={styles.cardDesc}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.sectionSmall} ${styles.center}`}>
          <h2 className={styles.title}>AI is coming after the foundation is real.</h2>
          <p className={styles.sub}>
            Follow the build-in-public roadmap from synthetic dashboards to real integrations and validated insights.
          </p>
          <Link href="/" className="btn-primary">View homepage →</Link>
        </section>
      </main>
    </SiteShell>
  );
}
