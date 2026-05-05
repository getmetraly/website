import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { StatusTag } from "@/components/status-tag";
import styles from "./homepage-v3.module.css";

const features = [
  ["📊", "DORA metrics", "Track deployment frequency, lead time, change failure rate, and MTTR across teams.", "Preview", "iconCyan"],
  ["⚡", "CI/CD insights", "Understand build health, pipeline friction, recovery patterns, and delivery risk.", "Preview", "iconGreen"],
  ["🔀", "Team bottlenecks", "See where work slows down across PRs, reviews, CI, and handoffs.", "Preview", "iconPurple"],
  ["🧩", "Dashboard editor", "Drag-and-drop dashboard editing and real rendering are actively being developed.", "In progress", "iconIndigo"],
  ["✦", "Private AI insights", "Designed for local models, BYO providers, and controlled data exposure.", "Designed", "iconPurple"],
  ["🔌", "Plugin ecosystem", "A future extensibility layer for connectors and custom engineering workflows.", "Planned", "iconOrange"],
];

const roadmap = [
  ["Now", ["Multi-role dashboards", "Metrics explorer", "UI system", "Synthetic workflows", "Early insight patterns"]],
  ["Next", ["Dashboard editor", "Drag & drop layout", "Real dashboard rendering", "Demo environment", "Data modeling layer"]],
  ["Then", ["GitHub / GitLab connectors", "CI/CD integrations", "Real data pipelines", "First production use cases"]],
  ["Later", ["AI insights layer", "Plugin ecosystem", "Enterprise deployment patterns"]],
];

function SectionHeader({ eyebrow, title, children, center = false }: { eyebrow: string; title: string; children: React.ReactNode; center?: boolean }) {
  return (
    <div className={center ? styles.center : undefined}>
      <div className={styles.eyebrow}>{eyebrow}</div>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <p className={styles.sectionSub}>{children}</p>
    </div>
  );
}

export default function HomepageV3() {
  return (
    <SiteShell>
      <div className={styles.page}>
        <section className={styles.hero} aria-label="Hero">
          <div className={styles.heroGlow1} />
          <div className={styles.heroGlow2} />
          <div className={styles.heroGlow3} />

          <div className={styles.badge} role="status"><div className={styles.badgeDot} />Alpha · AGPLv3 Open Core · Self-Hosted</div>
          <h1 className={styles.heroTitle}>Engineering intelligence<br /><span className={styles.gradientText}>that doesn&apos;t leak.</span></h1>
          <p className={styles.heroSub}>Understand delivery, bottlenecks, and engineering health on your own infrastructure — with a platform designed for private data and evolving AI insights.</p>

          <div className={styles.heroActions}>
            <Link href="/demo" className="btn-demo">Try synthetic demo →</Link>
            <Link href="/docs" className="btn-ghost btn-large">Self-host with Docker</Link>
            <Link href="/pricing" className="btn-ghost btn-large">View pricing</Link>
          </div>

          <div className={styles.heroStats}>
            <div>No login</div><div className={styles.heroDivider} /><div>No real company data</div><div className={styles.heroDivider} /><div>Synthetic Sandbox Inc. metrics</div><div className={styles.heroDivider} /><div>v0.1.0-alpha</div>
          </div>

          <div className={styles.dashboardImageWrap}>
            <img src="/images/vp-dashboard.png" alt="Metraly VP Engineering dashboard using synthetic data" className={styles.dashboardImage} />
            <div className={styles.insightOverlay}>
              <div className={styles.insightCard}>
                <div className={styles.insightLabel}>Synthetic insight</div>
                <div className={styles.insightTitle}>Review queue increased this sprint</div>
                <div className={styles.insightDesc}>Likely bottleneck: overloaded reviewers</div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.surface}>
          <div className={styles.sectionSmall}>
            <SectionHeader eyebrow="Build in public" title="Metraly is being built in the open." center>
              The interface you see is real. Dashboards are actively being developed. Data integrations and real-world workflows are the next step.
            </SectionHeader>
          </div>
        </section>

        <section id="features">
          <div className={styles.section}>
            <SectionHeader eyebrow="Product" title="Understand how engineering actually delivers.">
              A focused engineering intelligence surface for delivery health, bottlenecks, dashboards, and privacy-first AI direction.
            </SectionHeader>
            <div className={styles.grid3}>
              {features.map(([icon, title, desc, status, color]) => (
                <div className={styles.card} key={title}>
                  <div className={`${styles.icon} ${styles[color as keyof typeof styles]}`} aria-hidden="true">{icon}</div>
                  <div className={styles.cardHead}><div className={styles.cardTitle}>{title}</div><StatusTag>{status}</StatusTag></div>
                  <div className={styles.cardDesc}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.surface}>
          <div className={styles.section}>
            <div className={styles.split}>
              <div>
                <SectionHeader eyebrow="Data Sovereignty" title="Your engineering data stays under your control.">
                  Metraly is designed to run on your infrastructure, so repository, CI/CD, project, and team signals can be analyzed without routing sensitive engineering data through another SaaS platform.
                </SectionHeader>
              </div>
              <div className={styles.card}>
                <div className={styles.bullets}>
                  <div className={styles.bullet}><div className={styles.bulletIcon}>🏛️</div><div><div className={styles.cardTitle}>Deploy where your team works</div><div className={styles.cardDesc}>Start locally or in your own VPC. Enterprise deployment patterns are being designed for regulated and restricted environments.</div></div></div>
                  <div className={styles.bullet}><div className={styles.bulletIcon}>🔍</div><div><div className={styles.cardTitle}>Open-core auditability</div><div className={styles.cardDesc}>The core platform is AGPLv3 open-core, so the code path that handles engineering metrics can be reviewed and audited.</div></div></div>
                </div>
                <div className={styles.tags}><StatusTag>Audit-friendly</StatusTag><StatusTag>GDPR-aware design</StatusTag><StatusTag>Restricted-environment roadmap</StatusTag></div>
              </div>
            </div>
          </div>
        </section>

        <section id="roles">
          <div className={styles.section}>
            <SectionHeader eyebrow="Role-based views" title="Different teams need different signal.">
              Metraly is structured around the way engineering organizations actually operate: leadership, team execution, platform health, and delivery risk.
            </SectionHeader>
            <div className={styles.grid4}>
              {[["VP Engineering", "Track delivery health, risk, sprint predictability, and cross-team bottlenecks."], ["CTO", "Understand strategic engineering health without asking every team for manual updates."], ["Tech Lead", "See PR queues, review latency, flaky tests, and blocked work before they become incidents."], ["DevOps / Platform", "Watch CI/CD health, MTTR, operational friction, and recovery patterns."]].map(([title, desc]) => (
                <div className={styles.card} key={title}><div className={styles.cardTitle}>{title}</div><p className={styles.cardDesc}>{desc}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section id="ai" className={styles.surface}>
          <div className={styles.section}>
            <div className={styles.split}>
              <div>
                <SectionHeader eyebrow="Private AI Direction" title="AI insights designed for private engineering data.">
                  Metraly is built to support local models, BYO providers, and controlled data exposure. The AI layer is part of the product direction and should stay status-labeled as it evolves.
                </SectionHeader>
                <div className={styles.tags}><StatusTag>Designed</StatusTag><StatusTag>Pro roadmap</StatusTag><StatusTag>Synthetic examples</StatusTag></div>
              </div>
              <div className={styles.aiMock}>
                <div className={styles.aiHeader}><div>Synthetic insight preview</div><StatusTag>Designed</StatusTag></div>
                <div className={styles.aiBody}>
                  <div className={styles.aiMsg}><div className={styles.aiAvatar}>✦</div><div className={styles.aiBubble}>Review queue time increased this sprint. The likely bottleneck is overloaded reviewers on a critical service.</div></div>
                  <div className={styles.aiMsg}><div className={styles.aiAvatar}>i</div><div className={styles.aiBubble}>Example output only. AI features should be labeled by implementation status before launch.</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="integrations">
          <div className={styles.section}>
            <SectionHeader eyebrow="Integrations" title="Designed to connect with your engineering stack.">
              Connectors and live data pipelines are the next major product step after the dashboard editor and rendering work are complete.
            </SectionHeader>
            <div className={styles.grid3}>
              {[["Git providers", "GitHub and GitLab connectors are planned for real repository and PR workflows.", "Then"], ["CI/CD systems", "Pipeline and build data integrations are planned for delivery health and operational insight.", "Then"], ["Plugin ecosystem", "A marketplace-style extension layer is part of the long-term platform direction.", "Later"]].map(([title, desc, status]) => (
                <div className={styles.card} key={title}><div className={styles.cardHead}><div className={styles.cardTitle}>{title}</div><StatusTag>{status}</StatusTag></div><div className={styles.cardDesc}>{desc}</div></div>
              ))}
            </div>
          </div>
        </section>

        <section id="roadmap" className={styles.surface}>
          <div className={styles.section}>
            <SectionHeader eyebrow="Roadmap" title="What exists. What’s next. What we’re validating.">
              The website should make the current maturity visible: real UI and synthetic workflows now, dashboard editing next, connectors and real user cases after that.
            </SectionHeader>
            <div className={styles.grid4}>
              {roadmap.map(([stage, items]) => (
                <div className={styles.card} key={stage as string}><div className={styles.cardTitle}>{stage}</div><ul style={{ display: "grid", gap: 10, listStyle: "none", marginTop: 14 }}>{(items as string[]).map((item) => (<li key={item} className={styles.cardDesc}>→ {item}</li>))}</ul></div>
              ))}
            </div>
          </div>
        </section>

        <section id="demo-cta">
          <div className={`${styles.sectionSmall} ${styles.cta}`}>
            <h2 className={styles.sectionTitle}>Explore Metraly with synthetic data.</h2>
            <p className={styles.sectionSub} style={{ marginLeft: "auto", marginRight: "auto" }}>See real workflows before live integrations are available. No login, no real company data, no credentials.</p>
            <Link href="/demo" className={styles.demoCtaLink}>Open synthetic demo →</Link>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
