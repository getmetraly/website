import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { StatusTag } from "@/components/status-tag";
import styles from "./homepage.module.css";

const features = [
  ["📊", "DORA metrics", "Preview DORA-style metrics such as deployment frequency, lead time, change failure rate, and MTTR across synthetic team data.", "Preview", "iconCyan"],
  ["⚡", "CI/CD insights", "Preview build health, pipeline friction, recovery patterns, and delivery risk before live CI/CD integrations are connected.", "Preview", "iconGreen"],
  ["🔀", "Team bottlenecks", "Preview where work slows down across synthetic PR, review, CI, and handoff patterns.", "Preview", "iconPurple"],
  ["🧩", "Dashboard editor", "Drag-and-drop dashboard editing and real rendering are actively being developed.", "In progress", "iconIndigo"],
  ["✦", "Private AI insights", "Designed for local models, BYO providers, and controlled data exposure.", "Designed", "iconPurple"],
  ["🔌", "Plugin ecosystem", "A planned extensibility layer for connectors and custom workflows, gated by plugin review, signing, and revocation controls.", "Planned", "iconOrange"],
];

const roadmap = [
  ["Available today", "Real UI and synthetic workflows", ["Role dashboards", "Metrics explorer", "Workflow simulation", "Engineering trend signals"]],
  ["In progress", "Dashboard editing and rendering", ["Dashboard editor", "Drag-and-drop layouts", "Real dashboard rendering", "Demo environment alignment"]],
  ["Validation phase", "Real integrations and use cases", ["GitHub / GitLab connectors", "CI/CD integrations", "Real data pipelines", "First production pilots"]],
  ["Future direction", "Enterprise and AI expansion", ["Private AI insights", "Plugin ecosystem", "Enterprise deployment patterns"]],
] as const;

function SectionHeader({ eyebrow, title, children, center = false }: { eyebrow: string; title: string; children: React.ReactNode; center?: boolean }) {
  return (
    <div className={center ? styles.center : undefined}>
      <div className={styles.eyebrow}>{eyebrow}</div>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <p className={styles.sectionSub}>{children}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <SiteShell>
      <div className={styles.page}>
        <section className={styles.hero} aria-label="Hero">
          <div className={styles.heroGlow1} />
          <div className={styles.heroGlow2} />
          <div className={styles.heroGlow3} />

          <div className={styles.badge} role="status"><div className={styles.badgeDot} />Alpha · AGPLv3 Open Core · Self-Hosted</div>
          <h1 className={styles.heroTitle}>Engineering intelligence<br /><span className={styles.gradientText}>that doesn&apos;t leak.</span></h1>
          <p className={styles.heroSub}>Understand delivery flow, bottlenecks, and engineering health without making another SaaS your default data boundary — starting with real UI, synthetic data, and status-labeled roadmap capabilities.</p>

          <div className={styles.heroActions}>
            <Link href="/demo" className={styles.heroPrimaryCta}>Try synthetic Demo <Icon name="arrowRight" /></Link>
            <Link href="/docs" className="btn-ghost btn-large">Read docs</Link>
            <Link href="/pricing" className="btn-ghost btn-large">View pricing preview</Link>
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
                  Metraly is designed to support local models, BYO providers, and controlled data exposure. The AI layer is part of the product direction and should stay status-labeled as it evolves.
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
              {[["Git providers", "GitHub and GitLab connectors are planned for real repository and PR workflows.", "Then"], ["CI/CD systems", "Pipeline and build data integrations are planned for delivery health and operational insight.", "Then"], ["Plugin ecosystem", "A marketplace-style extension layer is part of the long-term platform direction and requires review, signing, and revocation controls before public launch.", "Later"]].map(([title, desc, status]) => (
                <div className={styles.card} key={title}><div className={styles.cardHead}><div className={styles.cardTitle}>{title}</div><StatusTag>{status}</StatusTag></div><div className={styles.cardDesc}>{desc}</div></div>
              ))}
            </div>
          </div>
        </section>

        <div className={styles.grid4}>
          {roadmap.map(([stage, summary, items], index) => (
            <div className={styles.roadmapCard} key={stage}>
              <div className={styles.roadmapStep}>0{index + 1}</div>
              <div className={styles.roadmapStage}>{stage}</div>
              <p className={styles.roadmapSummary}>{summary}</p>
              <ul className={styles.roadmapList}>
                {items.map((item) => (
                  <li key={item} className={styles.roadmapItem}>
                    <span />{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section id="demo-cta">
          <div className={`${styles.sectionSmall} ${styles.cta}`}>
            <h2 className={styles.sectionTitle}>Explore Metraly with synthetic data.</h2>
            <p className={styles.sectionSub} style={{ marginLeft: "auto", marginRight: "auto" }}>See real workflows before live integrations are available. No login, no real company data, no credentials.</p>
            <Link href="/demo" className={styles.demoCtaLink}>Open Demo <Icon name="arrowRight" /></Link>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
