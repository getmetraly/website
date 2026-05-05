import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import styles from "@/components/marketing/marketing.module.css";

const roleCards = [
  {
    title: "VP Engineering",
    desc: "Delivery flow, review queues, DORA metrics, and execution bottlenecks.",
    href: "/demo-app/#/dash-vp",
  },
  {
    title: "CTO",
    desc: "Engineering health, organizational risk, platform visibility, and investment signals.",
    href: "/demo-app/#/dash-cto",
  },
  {
    title: "Tech Lead",
    desc: "Team execution, service ownership, PR throughput, and operational load.",
    href: "/demo-app/#/dash-tl",
  },
  {
    title: "DevOps",
    desc: "CI/CD health, incidents, deployment quality, and infrastructure visibility.",
    href: "/demo-app/#/dash-devops",
  },
  {
    title: "Individual Contributor",
    desc: "My PRs, review queue, workload, and personal delivery insights.",
    href: "/demo-app/#/dash-ic",
  },
  {
    title: "Dashboard Wizard",
    desc: "Synthetic dashboard setup and layout generation experience.",
    href: "/demo-app/#/dash-wizard",
  },
];

const advancedAreas = [
  {
    title: "Metric Explorer",
    href: "/demo-app/#/metrics",
  },
  {
    title: "AI Workspace",
    href: "/demo-app/#/ai",
  },
  {
    title: "Plugins",
    href: "/demo-app/#/plugins",
  },
  {
    title: "Connector Wizard",
    href: "/demo-app/#/wizard",
  },
];

export const metadata = {
  title: "Synthetic Demo — Metraly",
  description:
    "Explore Metraly using synthetic engineering dashboards and sandbox preview environments.",
};

export default function DemoPage() {
  return (
    <SiteShell>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />

          <div className={styles.badge}>
            SYNTHETIC DEMO · No real company data
          </div>

          <h1 className={styles.heroTitle}>
            Explore the Metraly
            <br />
            <span className={styles.gradientText}>engineering sandbox.</span>
          </h1>

          <p className={styles.heroSub}>
            Role-based dashboards and engineering insights powered by synthetic data. No login required.
          </p>

          <div className={styles.heroActions}>
            <a href="/demo-app/" className="btn-primary">
              Open sandbox →
            </a>
            <Link href="/" className="btn-ghost btn-large">
              Back to homepage
            </Link>
          </div>
        </section>

        <section className={styles.surface}>
          <div className={styles.section}>
            <div className={styles.eyebrow}>Role dashboards</div>
            <h2 className={styles.title}>Explore engineering perspectives.</h2>
            <p className={styles.sub}>
              Each dashboard is built on synthetic engineering data to demonstrate how different roles could interact with Metraly.
            </p>

            <div className={styles.grid3}>
              {roleCards.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  className={styles.card}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className={styles.cardHead}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <span className={styles.status}>Demo</span>
                  </div>
                  <p className={styles.cardDesc}>{card.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className={styles.section}>
            <div className={styles.eyebrow}>Advanced areas</div>
            <h2 className={styles.title}>Beyond dashboards.</h2>
            <p className={styles.sub}>
              Explore additional synthetic product areas including metrics, AI workflows, plugins, and connector setup experiences.
            </p>

            <div className={styles.grid4}>
              {advancedAreas.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className={styles.card}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.sectionSmall} ${styles.center}`}>
          <h2 className={styles.title}>Synthetic demo environment.</h2>
          <p className={styles.sub}>
            This environment uses mock engineering data and preview functionality to demonstrate product direction before live integrations are connected.
          </p>
          <a href="/demo-app/" className="btn-primary">
            Launch sandbox →
          </a>
        </section>
      </main>
    </SiteShell>
  );
}
