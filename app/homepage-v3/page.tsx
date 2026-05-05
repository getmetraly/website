import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { StatusTag } from "@/components/status-tag";

const features = [
  ["📊", "DORA metrics", "Track deployment frequency, lead time, change failure rate, and MTTR across teams.", "Preview", "cyan"],
  ["⚡", "CI/CD insights", "Understand build health, pipeline friction, recovery patterns, and delivery risk.", "Preview", "green"],
  ["🔀", "Team bottlenecks", "See where work slows down across PRs, reviews, CI, and handoffs.", "Preview", "purple"],
  ["🧩", "Dashboard editor", "Drag-and-drop dashboard editing and real rendering are actively being developed.", "In progress", "indigo"],
  ["✦", "Private AI insights", "Designed for local models, BYO providers, and controlled data exposure.", "Designed", "purple"],
  ["🔌", "Plugin ecosystem", "A future extensibility layer for connectors and custom engineering workflows.", "Planned", "orange"],
];

const roadmap = [
  ["Now", ["Multi-role dashboards", "Metrics explorer", "UI system", "Synthetic workflows", "Early insight patterns"]],
  ["Next", ["Dashboard editor", "Drag & drop layout", "Real dashboard rendering", "Demo environment", "Data modeling layer"]],
  ["Then", ["GitHub / GitLab connectors", "CI/CD integrations", "Real data pipelines", "First production use cases"]],
  ["Later", ["AI insights layer", "Plugin ecosystem", "Enterprise deployment patterns"]],
];

function SectionHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <>
      <div className="section-eyebrow">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      <p className="section-sub">{children}</p>
    </>
  );
}

function HeroDashboard() {
  return (
    <div className="hero-dashboard fade-up fade-up-4" aria-label="Metraly VP Engineering dashboard preview" role="img">
      <div className="hero-dashboard-frame" style={{ position: "relative" }}>
        <div className="dash-topbar">
          <div className="dash-dots">
            <div className="dash-dot dash-dot-r" />
            <div className="dash-dot dash-dot-y" />
            <div className="dash-dot dash-dot-g" />
          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <div className="dash-url">app.metraly.local/dashboards/vp-engineering</div>
          </div>
        </div>
        <div className="dash-body">
          <div className="dash-sidebar">
            <div className="dash-nav-section">Dashboards</div>
            <div className="dash-nav-item">Overview</div>
            <div className="dash-nav-item">CTO</div>
            <div className="dash-nav-item active">VP Engineering</div>
            <div className="dash-nav-item">Tech Lead</div>
            <div className="dash-nav-section">Analytics</div>
            <div className="dash-nav-item">Metrics Explorer</div>
            <div className="dash-nav-item special">AI Assistant ✦</div>
          </div>
          <div className="dash-main">
            <div className="dash-page-title">VP Engineering</div>
            <div className="dash-page-sub">Delivery health, team load, review queues</div>
            <div className="dash-tabs">
              <div className="dash-tab">Overview</div>
              <div className="dash-tab">CTO</div>
              <div className="dash-tab active">VP Eng</div>
              <div className="dash-tab">Tech Lead</div>
              <div className="dash-tab">DevOps</div>
            </div>
            <div className="metrics-row">
              <div className="metric-card"><div className="metric-label">Sprint Velocity</div><div className="metric-value cyan">76 pts</div></div>
              <div className="metric-card"><div className="metric-label">Avg PR Cycle Time</div><div className="metric-value orange">22h</div></div>
              <div className="metric-card"><div className="metric-label">At-Risk Deliverables</div><div className="metric-value purple">3</div></div>
              <div className="metric-card"><div className="metric-label">Open PRs</div><div className="metric-value purple">31</div></div>
            </div>
            <div className="charts-row">
              <div className="chart-card"><div className="chart-label">Sprint Velocity Trend</div><div className="chart-area"><svg viewBox="0 0 320 90" width="100%" height="100%"><polyline className="chart-line glow-line" fill="none" stroke="var(--cyan)" strokeWidth="3" points="8,66 38,44 62,24 88,68 116,34 142,58 168,30 196,72 226,38 258,22 306,48" /></svg></div></div>
              <div className="chart-card"><div className="chart-label">PR Cycle Time by Team</div><div className="chart-area"><div style={{ display: "grid", gap: 8, paddingTop: 10 }}><div style={{ width: "48%", height: 8, background: "var(--purple)", borderRadius: 4 }} /><div style={{ width: "68%", height: 8, background: "var(--purple)", borderRadius: 4 }} /><div style={{ width: "39%", height: 8, background: "var(--purple)", borderRadius: 4 }} /><div style={{ width: "82%", height: 8, background: "var(--purple)", borderRadius: 4 }} /></div></div></div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", right: 22, bottom: 22, maxWidth: 300, textAlign: "left" }}>
          <div style={{ background: "rgba(10,14,20,0.92)", border: "1px solid rgba(168,85,247,0.28)", borderRadius: 12, padding: "14px 16px", boxShadow: "0 12px 36px rgba(0,0,0,0.45)" }}>
            <div style={{ fontSize: 12, color: "var(--purple)", fontWeight: 700, marginBottom: 6 }}>Synthetic insight</div>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6 }}>Review queue increased this sprint</div>
            <div style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5 }}>Likely bottleneck: overloaded reviewers</div>
          </div>
        </div>
      </div>
      <p style={{ color: "var(--text-muted)", fontSize: 12, marginTop: 14, textAlign: "center" }}>
        Real interface. Synthetic data. Dashboards are functional. Data integrations are in progress.
      </p>
    </div>
  );
}

export default function HomepageV3() {
  return (
    <SiteShell>
      <section id="hero" aria-label="Hero">
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />
        <div className="hero-glow-3" />
        <div className="hero-badge fade-up" role="status"><div className="hero-badge-dot" />Alpha · AGPLv3 Open Core · Self-Hosted</div>
        <h1 className="hero-title fade-up fade-up-1">Engineering intelligence<br /><span className="gradient-text">that doesn&apos;t leak.</span></h1>
        <p className="hero-sub fade-up fade-up-2">Understand delivery, bottlenecks, and engineering health on your own infrastructure — with a platform designed for private data and evolving AI insights.</p>
        <div className="hero-actions fade-up fade-up-3">
          <Link href="/demo" className="btn-demo">Try synthetic demo →</Link>
          <Link href="/docs" className="btn-ghost btn-large">Self-host with Docker</Link>
          <Link href="/pricing" className="btn-ghost btn-large">View pricing</Link>
        </div>
        <div className="hero-stats fade-up fade-up-4"><div>No login</div><div className="hero-divider" /><div>No real company data</div><div className="hero-divider" /><div>Synthetic Sandbox Inc. metrics</div><div className="hero-divider" /><div className="hero-version-badge">v0.1.0-alpha</div></div>
        <HeroDashboard />
      </section>

      <section style={{ background: "var(--bg-surface)" }}><div className="section section-sm" style={{ textAlign: "center" }}><div className="section-eyebrow" style={{ justifyContent: "center" }}>Build in public</div><h2 className="section-title">Metraly is being built in the open.</h2><p className="section-sub" style={{ marginLeft: "auto", marginRight: "auto", marginBottom: 0 }}>The interface you see is real. Dashboards are actively being developed. Data integrations and real-world workflows are the next step.</p></div></section>

      <section id="features"><div className="section"><SectionHeader eyebrow="Product" title="Understand how engineering actually delivers.">A focused engineering intelligence surface for delivery health, bottlenecks, dashboards, and privacy-first AI direction.</SectionHeader><div className="features-grid">{features.map(([icon, title, desc, status, color]) => (<div className="feature-card" key={title}><div className={`feature-icon ${color}`} aria-hidden="true">{icon}</div><div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}><div className="feature-title">{title}</div><StatusTag>{status}</StatusTag></div><div className="feature-desc">{desc}</div></div>))}</div></div></section>

      <section id="sovereignty" style={{ background: "var(--bg-surface)" }}><div className="section"><div className="sov-grid"><div><SectionHeader eyebrow="Data Sovereignty" title="Your engineering data stays under your control.">Metraly is designed to run on your infrastructure, so repository, CI/CD, project, and team signals can be analyzed without routing sensitive engineering data through another SaaS platform.</SectionHeader></div><div className="sov-diagram"><div className="sov-bullet"><div className="sov-bullet-icon">🏛️</div><div><div className="sov-bullet-title">Deploy where your team works</div><div className="sov-bullet-desc">Start locally or in your own VPC. Enterprise deployment patterns are being designed for regulated and restricted environments.</div></div></div><div className="sov-bullet"><div className="sov-bullet-icon">🔍</div><div><div className="sov-bullet-title">Open-core auditability</div><div className="sov-bullet-desc">The core platform is AGPLv3 open-core, so the code path that handles engineering metrics can be reviewed and audited.</div></div></div><div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}><StatusTag>Audit-friendly</StatusTag><StatusTag>GDPR-aware design</StatusTag><StatusTag>Restricted-environment roadmap</StatusTag></div></div></div></div></section>

      <section id="roles"><div className="section"><SectionHeader eyebrow="Role-based views" title="Different teams need different signal.">Metraly is structured around the way engineering organizations actually operate: leadership, team execution, platform health, and delivery risk.</SectionHeader><div className="roles-grid">{[["VP Engineering", "Track delivery health, risk, sprint predictability, and cross-team bottlenecks."], ["CTO", "Understand strategic engineering health without asking every team for manual updates."], ["Tech Lead", "See PR queues, review latency, flaky tests, and blocked work before they become incidents."], ["DevOps / Platform", "Watch CI/CD health, MTTR, operational friction, and recovery patterns."]].map(([title, desc]) => (<div className="role-card" key={title}><div className="role-title">{title}</div><p className="feature-desc">{desc}</p></div>))}</div></div></section>

      <section id="ai" style={{ background: "var(--bg-surface)" }}><div className="section"><div className="ai-grid"><div><SectionHeader eyebrow="Private AI Direction" title="AI insights designed for private engineering data.">Metraly is built to support local models, BYO providers, and controlled data exposure. The AI layer is part of the product direction and should stay status-labeled as it evolves.</SectionHeader><div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}><StatusTag>Designed</StatusTag><StatusTag>Pro roadmap</StatusTag><StatusTag>Synthetic examples</StatusTag></div></div><div className="ai-chat-mock"><div className="ai-chat-header"><div className="ai-chat-title">Synthetic insight preview</div><div className="ai-chat-badge">Designed</div></div><div className="ai-chat-body"><div className="ai-msg"><div className="ai-msg-avatar bot">✦</div><div className="ai-msg-bubble">Review queue time increased this sprint. The likely bottleneck is overloaded reviewers on a critical service.</div></div><div className="ai-msg"><div className="ai-msg-avatar user">i</div><div className="ai-msg-bubble user">Example output only. AI features should be labeled by implementation status before launch.</div></div></div></div></div></div></section>

      <section id="integrations"><div className="section"><SectionHeader eyebrow="Integrations" title="Designed to connect with your engineering stack.">Connectors and live data pipelines are the next major product step after the dashboard editor and rendering work are complete.</SectionHeader><div className="features-grid">{[["Git providers", "GitHub and GitLab connectors are planned for real repository and PR workflows.", "Then"], ["CI/CD systems", "Pipeline and build data integrations are planned for delivery health and operational insight.", "Then"], ["Plugin ecosystem", "A marketplace-style extension layer is part of the long-term platform direction.", "Later"]].map(([title, desc, status]) => (<div className="feature-card" key={title}><div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}><div className="feature-title">{title}</div><StatusTag>{status}</StatusTag></div><div className="feature-desc">{desc}</div></div>))}</div></div></section>

      <section id="roadmap" style={{ background: "var(--bg-surface)" }}><div className="section"><SectionHeader eyebrow="Roadmap" title="What exists. What’s next. What we’re validating.">The website should make the current maturity visible: real UI and synthetic workflows now, dashboard editing next, connectors and real user cases after that.</SectionHeader><div className="features-grid">{roadmap.map(([stage, items]) => (<div className="feature-card" key={stage as string}><div className="feature-title">{stage}</div><ul style={{ display: "grid", gap: 10, listStyle: "none", marginTop: 14 }}>{(items as string[]).map((item) => (<li key={item} className="feature-desc">→ {item}</li>))}</ul></div>))}</div></div></section>

      <section id="demo-cta"><div className="section section-sm" style={{ textAlign: "center" }}><h2 className="section-title">Explore Metraly with synthetic data.</h2><p className="section-sub" style={{ marginLeft: "auto", marginRight: "auto" }}>See real workflows before live integrations are available. No login, no real company data, no credentials.</p><Link href="/demo" className="btn-demo">Open synthetic demo →</Link></div></section>
    </SiteShell>
  );
}
