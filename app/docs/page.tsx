import Link from "next/link";
import styles from "@/components/marketing/marketing.module.css";

const docSections = [
  {
    title: "Quick start",
    desc: "Install Metraly locally, open the app, and explore the synthetic sandbox before connecting real engineering data.",
    href: "#quick-start",
    label: "Start",
  },
  {
    title: "Self-hosting",
    desc: "Run Metraly on your own infrastructure and keep repository, CI/CD, project, and team signals under your control.",
    href: "#self-hosting",
    label: "Deploy",
  },
  {
    title: "Product status",
    desc: "Understand what is available now, what is in progress, and which capabilities are still planned or designed.",
    href: "#status",
    label: "Truth",
  },
  {
    title: "Trust",
    desc: "Understand Metraly's privacy, telemetry, AI, plugin and claim boundaries before connecting data.",
    href: "/trust",
    label: "Trust",
  },
  {
    title: "Pricing and license",
    desc: "Community is free. Pro and Enterprise pricing are public anchors for future signed-license activation and paid pilots.",
    href: "/pricing",
    label: "Pricing",
  },
  {
    title: "Demo sandbox",
    desc: "Explore role-based dashboards and synthetic engineering data before live integrations are available.",
    href: "/demo",
    label: "Demo",
  },
  {
    title: "Public claim policy",
    desc: "Metraly uses conservative public wording: real UI, synthetic data, and clear status labels for roadmap capabilities.",
    href: "#claims",
    label: "Policy",
  },
];

const statusRows = [
  ["Real product UI", "Preview", "Role dashboards and UI direction are visible using synthetic data."],
  ["Dashboard editor", "In progress", "Drag-and-drop editing and real dashboard rendering are active product work."],
  ["Connectors", "Next", "GitHub / GitLab and CI/CD integrations are the next major product step."],
  ["Private AI insights", "Designed", "AI is a product direction with synthetic examples, not a shipped production claim."],
  ["Plugin ecosystem", "Planned", "Marketplace-style extensibility is part of the long-term platform direction."],
  ["Billing / license", "Designed", "Paid plans require signed license activation and local app verification before GA claims."],
];

export const metadata = {
  title: "Documentation — Metraly",
  description:
    "Metraly public documentation for quick start, self-hosting, product status, demo, pricing, and claim-safe product boundaries.",
};

export default function DocsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.badge}>Docs · Public documentation</div>
        <h1 className={styles.heroTitle}>
          Understand Metraly
          <br />
          <span className={styles.gradientText}>before you connect data.</span>
        </h1>
        <p className={styles.heroSub}>
          Public documentation for the self-hosted engineering intelligence platform: quick start, demo, status, pricing, and safe product boundaries.
        </p>
        <div className={styles.heroActions}>
          <a href="#quick-start" className="btn-primary">
            Start reading →
          </a>
          <Link href="/demo" className="btn-ghost btn-large">
            Try synthetic demo
          </Link>
        </div>
      </section>

      <section className={styles.surface}>
        <div className={styles.section}>
          <div className={styles.eyebrow}>Documentation map</div>
          <h2 className={styles.title}>Start with the public docs.</h2>
          <p className={styles.sub}>
            These sections are copied and maintained in the website so readers do not need access to the private planning repository.
          </p>

          <div className={styles.grid3}>
            {docSections.map((doc) => (
              <a key={doc.title} href={doc.href} className={styles.card} style={{ textDecoration: "none", color: "inherit" }}>
                <div className={styles.cardHead}>
                  <h3 className={styles.cardTitle}>{doc.title}</h3>
                  <span className={styles.status}>{doc.label}</span>
                </div>
                <p className={styles.cardDesc}>{doc.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="quick-start">
        <div className={`${styles.section} ${styles.split}`}>
          <div>
            <div className={styles.eyebrow}>Quick start</div>
            <h2 className={styles.title}>Explore with synthetic data first.</h2>
            <p className={styles.sub}>
              Metraly is currently best evaluated through the public website, synthetic demo, and source repository. Live connectors and production data workflows are being built after the dashboard foundation.
            </p>
            <div className={styles.heroActions} style={{ justifyContent: "flex-start" }}>
              <Link href="/demo" className="btn-primary">Open demo</Link>
              <a href="https://github.com/getmetraly/metraly" target="_blank" rel="noreferrer" className="btn-ghost btn-large">View source</a>
            </div>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Current public baseline</h3>
            <p className={styles.cardDesc}>
              Metraly is being built as a self-hosted Engineering Intelligence platform for teams that cannot send engineering data to another SaaS. The current public experience uses real UI direction with synthetic data and status-labeled roadmap capabilities.
            </p>
          </div>
        </div>
      </section>

      <section id="self-hosting" className={styles.surface}>
        <div className={styles.section}>
          <div className={styles.eyebrow}>Self-hosting</div>
          <h2 className={styles.title}>Your engineering data stays under your control.</h2>
          <p className={styles.sub}>
            Metraly is designed around self-hosted deployment so repository, CI/CD, project, and team signals can be analyzed without routing sensitive engineering data through another SaaS platform.
          </p>
          <div className={styles.grid3}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Community core</h3>
              <p className={styles.cardDesc}>The core product is AGPLv3 open core. Community remains useful and auditable.</p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Synthetic demo first</h3>
              <p className={styles.cardDesc}>Use the demo sandbox before connecting any real repository, CI/CD, or team data.</p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Connectors next</h3>
              <p className={styles.cardDesc}>Live Git and CI/CD data integrations are the next product step after dashboard rendering and editor work.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="status">
        <div className={styles.section}>
          <div className={styles.eyebrow}>Product status</div>
          <h2 className={styles.title}>What exists. What is next.</h2>
          <p className={styles.sub}>
            Public docs use status labels so the website does not overclaim implementation readiness.
          </p>
          <div className={styles.grid3}>
            {statusRows.map(([area, status, note]) => (
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

      <section id="claims" className={styles.surface}>
        <div className={`${styles.section} ${styles.split}`}>
          <div>
            <div className={styles.eyebrow}>Claim policy</div>
            <h2 className={styles.title}>Docs describe direction. Code proves claims.</h2>
            <p className={styles.sub}>
              Public pages may describe real UI, synthetic data, self-hosted direction, planned connectors, designed AI, and pricing previews. They must not claim production-ready AI, live marketplace, finished billing, or enterprise compliance until verified in product code.
            </p>
          </div>
          <div className={`${styles.card} ${styles.cardAccent}`}>
            <h3 className={styles.cardTitle} style={{ marginBottom: 16 }}>Safe public wording</h3>
            <div style={{ display: "grid", gap: 12 }}>
              <p className={styles.cardDesc}>→ Real interface, synthetic data.</p>
              <p className={styles.cardDesc}>→ Dashboards are actively being developed.</p>
              <p className={styles.cardDesc}>→ Connectors are planned / next.</p>
              <p className={styles.cardDesc}>→ AI is designed / evolving.</p>
              <p className={styles.cardDesc}>→ Pro and Enterprise pricing are preview anchors until license activation works.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
