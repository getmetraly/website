import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

const cardStyle: React.CSSProperties = {
  background: "var(--bg-card)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius-lg)",
  padding: "28px",
};

const tagStyle: React.CSSProperties = {
  display: "inline-flex",
  padding: "3px 9px",
  borderRadius: "5px",
  fontSize: "11px",
  fontWeight: 700,
  fontFamily: "var(--font-mono)",
  background: "rgba(0,229,204,0.1)",
  color: "var(--cyan)",
  border: "1px solid rgba(0,229,204,0.2)",
};

function StatusTag({ children }: { children: React.ReactNode }) {
  return <span style={tagStyle}>{children}</span>;
}

export default function HomepageV2() {
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
            top: "180px",
            right: "14%",
            width: "360px",
            height: "360px",
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
            maxWidth: "940px",
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
            maxWidth: "680px",
            marginBottom: "34px",
            fontWeight: 400,
          }}
        >
          Track DORA metrics, CI/CD performance, and team bottlenecks on your
          own infrastructure — with privacy-first AI designed for sensitive
          engineering data.
        </p>

        <div
          style={{
            display: "flex",
            gap: "14px",
            marginBottom: "18px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link href="/demo" className="btn-primary" style={{ padding: "13px 28px", fontSize: "16px" }}>
            Try the synthetic demo →
          </Link>
          <Link href="/docs" className="btn-ghost" style={{ padding: "13px 28px", fontSize: "16px" }}>
            Self-host with Docker
          </Link>
          <Link href="/pricing" className="btn-ghost" style={{ padding: "13px 28px", fontSize: "16px" }}>
            View pricing
          </Link>
        </div>

        <p style={{ color: "var(--text-muted)", fontSize: "13px", marginBottom: "26px" }}>
          No login. No real company data. Explore with synthetic Sandbox Inc. metrics.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            color: "var(--text-muted)",
            fontSize: "13px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <span>Self-hosted</span>
          <span>·</span>
          <span>AGPLv3 open-core</span>
          <span>·</span>
          <span>Synthetic demo</span>
          <span>·</span>
          <span>Privacy-first AI design</span>
          <span>·</span>
          <span style={{ color: "var(--orange)", fontFamily: "var(--font-mono)", fontWeight: 700 }}>v0.1.0-alpha</span>
        </div>
      </section>

      <section id="sovereignty" style={{ background: "var(--bg-surface)", padding: "100px 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px", alignItems: "center" }}>
          <div>
            <div className="section-eyebrow">Data Sovereignty</div>
            <h2 className="section-title">Your engineering data stays under your control.</h2>
            <p className="section-sub">
              Metraly is designed to run on your infrastructure, so repository,
              CI/CD, project, and team signals can be analyzed without routing
              sensitive engineering data through another SaaS platform.
            </p>
          </div>
          <div style={cardStyle}>
            <div style={{ display: "grid", gap: "16px" }}>
              <div>
                <h3 style={{ marginBottom: "6px" }}>Deploy where your team already works</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  Start locally or in your own VPC. Enterprise deployment patterns
                  are being designed for regulated and restricted environments.
                </p>
              </div>
              <div>
                <h3 style={{ marginBottom: "6px" }}>Open-core auditability</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  The core platform is AGPLv3 open-core, so the code path that
                  handles engineering metrics can be reviewed and audited.
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <StatusTag>Audit-friendly</StatusTag>
                <StatusTag>GDPR-aware design</StatusTag>
                <StatusTag>Air-gapped roadmap</StatusTag>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" style={{ padding: "100px 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="section-eyebrow">Product</div>
          <h2 className="section-title">Understand how your engineering actually delivers.</h2>
          <p className="section-sub">
            A focused engineering intelligence surface for delivery health,
            bottlenecks, team dashboards, and privacy-first AI direction.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {[
              ["DORA metrics", "Track deployment frequency, lead time, change failure rate, and MTTR across teams.", "Preview"],
              ["CI/CD intelligence", "See build health, pipeline friction, and recovery patterns without stitching tools together.", "Preview"],
              ["Team bottlenecks", "Understand where work slows down across PRs, reviews, CI, and handoffs.", "Preview"],
              ["Role-based dashboards", "Give engineering leaders, team leads, and platform teams the signal they need.", "Preview"],
              ["Private AI insights", "Designed for local/BYO/provider AI flows that reduce exposure of raw engineering data.", "Designed"],
              ["Plugin ecosystem", "Designed around extensibility so teams can connect their own engineering stack.", "Designed"],
            ].map(([title, desc, status]) => (
              <div key={title} style={cardStyle}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "center", marginBottom: "12px" }}>
                  <h3>{title}</h3>
                  <StatusTag>{status}</StatusTag>
                </div>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ai" style={{ background: "var(--bg-surface)", padding: "100px 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px", alignItems: "center" }}>
          <div>
            <div className="section-eyebrow">Private AI Direction</div>
            <h2 className="section-title">AI insights designed for private engineering data.</h2>
            <p className="section-sub">
              Metraly&apos;s AI system is designed to support local models, BYO API
              keys, and approved providers while reducing exposure of raw engineering data.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <StatusTag>Designed</StatusTag>
              <StatusTag>Pro roadmap</StatusTag>
              <StatusTag>Local/BYO model direction</StatusTag>
            </div>
          </div>
          <div style={cardStyle}>
            <p style={{ color: "var(--text-muted)", fontSize: "12px", marginBottom: "14px", fontFamily: "var(--font-mono)" }}>
              Synthetic AI insight preview
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
              “Deployment frequency is healthy, but review queue time increased
              31% this sprint. The likely bottleneck is two overloaded reviewers
              on the payments service.”
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "12px", marginTop: "14px" }}>
              Example output only. AI features should be labeled by implementation status before launch.
            </p>
          </div>
        </div>
      </section>

      <section id="demo-cta" style={{ padding: "100px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="section-title">Explore Metraly with synthetic data.</h2>
          <p className="section-sub" style={{ marginLeft: "auto", marginRight: "auto" }}>
            Open a safe demo surface with mock engineering data and explore the
            product direction without entering credentials or real company information.
          </p>
          <Link href="/demo" className="btn-primary" style={{ padding: "13px 28px", fontSize: "16px" }}>
            Open synthetic demo →
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
