import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { StatusTag } from "@/components/status-tag";

const card: React.CSSProperties = {
  background: "var(--bg-card)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius-lg)",
  padding: "28px",
};

const muted: React.CSSProperties = {
  color: "var(--text-secondary)",
  lineHeight: 1.65,
};

function SectionHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "48px" }}>
      <div className="section-eyebrow">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      <p className="section-sub">{children}</p>
    </div>
  );
}

export default function HomepageV3() {
  const features = [
    ["DORA metrics", "Track deployment frequency, lead time, change failure rate, and MTTR across teams.", "Preview", "📊"],
    ["CI/CD insights", "Understand build health, pipeline friction, recovery patterns, and delivery risk.", "Preview", "⚡"],
    ["Team bottlenecks", "See where work slows down across PRs, reviews, CI, and handoffs.", "Preview", "🔀"],
    ["Dashboard editor", "Drag-and-drop dashboard editing and real rendering are actively being developed.", "In progress", "🧩"],
    ["Private AI insights", "Designed for local models, BYO providers, and controlled data exposure.", "Designed", "✦"],
    ["Plugin ecosystem", "A future extensibility layer for connectors and custom engineering workflows.", "Planned", "🔌"],
  ];

  const roadmap = [
    ["Now", ["Multi-role dashboards", "Metrics explorer", "UI system", "Synthetic workflows", "Early insight patterns"]],
    ["Next", ["Dashboard editor", "Drag & drop layout", "Real dashboard rendering", "Demo environment", "Data modeling layer"]],
    ["Then", ["GitHub / GitLab connectors", "CI/CD integrations", "Real data pipelines", "First production use cases"]],
    ["Later", ["AI insights layer", "Plugin ecosystem", "Enterprise deployment patterns"]],
  ];

  return (
    <SiteShell>
      <section
        id="hero"
        aria-label="Hero"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 32px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "500px",
            background: "radial-gradient(ellipse at center, rgba(99,102,241,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "200px",
            right: "12%",
            width: "420px",
            height: "420px",
            background: "radial-gradient(ellipse at center, rgba(0,229,204,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          role="status"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 14px",
            borderRadius: "20px",
            background: "rgba(34,197,94,0.1)",
            border: "1px solid rgba(34,197,94,0.25)",
            color: "var(--green)",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.3px",
            marginBottom: "28px",
          }}
        >
          Alpha · AGPLv3 Open Core · Self-Hosted
        </div>

        <h1
          style={{
            fontSize: "clamp(44px, 6vw, 78px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-2.5px",
            maxWidth: "960px",
            marginBottom: "24px",
          }}
        >
          Engineering intelligence
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, var(--cyan) 0%, var(--purple) 60%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            that doesn&apos;t leak.
          </span>
        </h1>

        <p
          style={{
            fontSize: "19px",
            lineHeight: 1.65,
            color: "var(--text-secondary)",
            maxWidth: "720px",
            marginBottom: "34px",
          }}
        >
          Understand delivery, bottlenecks, and engineering health on your own infrastructure — with a platform designed for private data and evolving AI insights.
        </p>

        <div style={{ display: "flex", gap: "14px", marginBottom: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/demo" className="btn-primary" style={{ padding: "13px 28px", fontSize: "16px" }}>Try synthetic demo →</Link>
          <Link href="/docs" className="btn-ghost" style={{ padding: "13px 28px", fontSize: "16px" }}>Self-host with Docker</Link>
          <Link href="/pricing" className="btn-ghost" style={{ padding: "13px 28px", fontSize: "16px" }}>View pricing</Link>
        </div>

        <p style={{ color: "var(--text-muted)", fontSize: "13px", marginBottom: "32px" }}>
          No login. No real company data. Explore with synthetic Sandbox Inc. metrics.
        </p>

        <div style={{ width: "100%", maxWidth: "1120px", position: "relative", marginTop: "18px" }}>
          <div style={{ position: "relative", borderRadius: "18px", overflow: "hidden", border: "1px solid var(--border-bright)", background: "var(--bg-card)", boxShadow: "0 40px 90px rgba(0,0,0,0.5), 0 0 70px rgba(99,102,241,0.14)" }}>
            <img
              src="/images/vp-dashboard.png"
              alt="VP Engineering dashboard using synthetic data"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
            <div style={{ position: "absolute", top: 18, left: 18, padding: "6px 10px", borderRadius: "8px", background: "rgba(10,14,20,0.82)", border: "1px solid rgba(255,255,255,0.1)", fontSize: "12px", fontWeight: 700 }}>
              VP Engineering View
            </div>
            <div style={{ position: "absolute", right: 24, bottom: 24, maxWidth: "280px", textAlign: "left" }}>
              <div style={{ background: "rgba(10,14,20,0.9)", border: "1px solid rgba(0,229,204,0.22)", borderRadius: "12px", padding: "14px 16px", boxShadow: "0 8px 30px rgba(0,0,0,0.35)" }}>
                <div style={{ fontWeight: 700, fontSize: "13px", marginBottom: "6px" }}>Review queue increased this sprint</div>
                <div style={{ fontSize: "13px", color: "var(--text-secondary)" }}>Likely bottleneck: overloaded reviewers</div>
                <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "8px" }}>Synthetic insight example</div>
              </div>
            </div>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "12px", marginTop: "14px" }}>
            Real interface. Synthetic data. Dashboards are functional. Data integrations are in progress.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--bg-surface)", padding: "70px 32px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", textAlign: "center" }}>
          <div className="section-eyebrow" style={{ justifyContent: "center" }}>Build in public</div>
          <h2 className="section-title">Metraly is being built in the open.</h2>
          <p className="section-sub" style={{ marginLeft: "auto", marginRight: "auto", marginBottom: 0 }}>
            The interface you see is real. Dashboards are actively being developed. Data integrations and real-world workflows are the next step.
          </p>
        </div>
      </section>

      <section id="features" style={{ padding: "100px 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeader eyebrow="Product" title="Understand how engineering actually delivers.">
            Metraly is a focused engineering intelligence surface for delivery health, bottlenecks, dashboards, and privacy-first AI direction.
          </SectionHeader>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {features.map(([title, description, status, icon]) => (
              <div key={title} style={card}>
                <div style={{ fontSize: "24px", marginBottom: "14px" }}>{icon}</div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "center", marginBottom: "12px" }}>
                  <h3>{title}</h3>
                  <StatusTag>{status}</StatusTag>
                </div>
                <p style={muted}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sovereignty" style={{ background: "var(--bg-surface)", padding: "100px 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", alignItems: "center" }}>
          <div>
            <div className="section-eyebrow">Data Sovereignty</div>
            <h2 className="section-title">Your engineering data stays under your control.</h2>
            <p className="section-sub">
              Metraly is designed to run on your infrastructure, so repository, CI/CD, project, and team signals can be analyzed without routing sensitive engineering data through another SaaS platform.
            </p>
          </div>
          <div style={card}>
            <div style={{ display: "grid", gap: "18px" }}>
              <div>
                <h3 style={{ marginBottom: "6px" }}>Deploy where your team already works</h3>
                <p style={muted}>Start locally or in your own VPC. Enterprise deployment patterns are being designed for regulated and restricted environments.</p>
              </div>
              <div>
                <h3 style={{ marginBottom: "6px" }}>Open-core auditability</h3>
                <p style={muted}>The core platform is AGPLv3 open-core, so the code path that handles engineering metrics can be reviewed and audited.</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <StatusTag>Audit-friendly</StatusTag>
                <StatusTag>GDPR-aware design</StatusTag>
                <StatusTag>Restricted-environment roadmap</StatusTag>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="roles" style={{ padding: "100px 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeader eyebrow="Role-based views" title="Different teams need different signal.">
            Metraly is structured around the way engineering organizations actually operate: leadership, team execution, platform health, and delivery risk.
          </SectionHeader>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              ["VP Engineering", "Track delivery health, risk, sprint predictability, and cross-team bottlenecks."],
              ["CTO", "Understand strategic engineering health without asking every team for manual updates."],
              ["Tech Lead", "See PR queues, review latency, flaky tests, and blocked work before they become incidents."],
              ["DevOps / Platform", "Watch CI/CD health, MTTR, operational friction, and recovery patterns."],
            ].map(([title, description]) => (
              <div key={title} style={card}>
                <h3 style={{ marginBottom: "10px" }}>{title}</h3>
                <p style={muted}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ai" style={{ background: "var(--bg-surface)", padding: "100px 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", alignItems: "center" }}>
          <div>
            <div className="section-eyebrow">Private AI Direction</div>
            <h2 className="section-title">AI insights designed for private engineering data.</h2>
            <p className="section-sub">
              Metraly is built to support local models, BYO providers, and controlled data exposure. The AI layer is part of the product direction and should stay status-labeled as it evolves.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <StatusTag>Designed</StatusTag>
              <StatusTag>Pro roadmap</StatusTag>
              <StatusTag>Synthetic examples</StatusTag>
            </div>
          </div>
          <div style={card}>
            <p style={{ color: "var(--text-muted)", fontSize: "12px", marginBottom: "14px", fontFamily: "var(--font-mono)" }}>Synthetic insight preview</p>
            <p style={{ ...muted, fontSize: "16px" }}>“Review queue time increased this sprint. The likely bottleneck is overloaded reviewers on a critical service.”</p>
            <p style={{ color: "var(--text-muted)", fontSize: "12px", marginTop: "14px" }}>Example output only. AI features should be labeled by implementation status before launch.</p>
          </div>
        </div>
      </section>

      <section id="integrations" style={{ padding: "100px 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeader eyebrow="Integrations" title="Designed to connect with your engineering stack.">
            Connectors and live data pipelines are the next major product step after the dashboard editor and rendering work are complete.
          </SectionHeader>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {[
              ["Git providers", "GitHub and GitLab connectors are planned for real repository and PR workflows.", "Then"],
              ["CI/CD systems", "Pipeline and build data integrations are planned for delivery health and operational insight.", "Then"],
              ["Plugin ecosystem", "A marketplace-style extension layer is part of the long-term platform direction.", "Later"],
            ].map(([title, description, status]) => (
              <div key={title} style={card}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "center", marginBottom: "12px" }}>
                  <h3>{title}</h3>
                  <StatusTag>{status}</StatusTag>
                </div>
                <p style={muted}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" style={{ background: "var(--bg-surface)", padding: "100px 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeader eyebrow="Roadmap" title="What exists. What’s next. What we’re validating.">
            The website should make the current maturity visible: real UI and synthetic workflows now, dashboard editing next, connectors and real user cases after that.
          </SectionHeader>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {roadmap.map(([stage, items]) => (
              <div key={stage as string} style={card}>
                <h3 style={{ marginBottom: "14px" }}>{stage}</h3>
                <ul style={{ display: "grid", gap: "10px", listStyle: "none" }}>
                  {(items as string[]).map((item) => (
                    <li key={item} style={{ color: "var(--text-secondary)", lineHeight: 1.45 }}>→ {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="demo-cta" style={{ padding: "100px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="section-title">Explore Metraly with synthetic data.</h2>
          <p className="section-sub" style={{ marginLeft: "auto", marginRight: "auto" }}>
            See real workflows before live integrations are available. No login, no real company data, no credentials.
          </p>
          <Link href="/demo" className="btn-primary" style={{ padding: "13px 28px", fontSize: "16px" }}>Open synthetic demo →</Link>
        </div>
      </section>
    </SiteShell>
  );
}
