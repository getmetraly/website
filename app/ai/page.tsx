import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

const cards = [
  {
    title: "Private by design",
    text: "Metraly AI is being designed around local models, BYO providers, and controlled data exposure — not default SaaS data sharing.",
    label: "Designed",
  },
  {
    title: "Engineering-context insights",
    text: "The goal is to explain bottlenecks across PRs, CI, incidents, and delivery flow using engineering context rather than generic chat output.",
    label: "Direction",
  },
  {
    title: "Synthetic examples first",
    text: "Early AI examples use synthetic data so the product can demonstrate direction before real connectors and live pipelines are available.",
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
      <main>
        <section
          style={{
            minHeight: "72vh",
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
              top: "-120px",
              left: "50%",
              transform: "translateX(-50%)",
              width: 820,
              height: 520,
              background: "radial-gradient(ellipse at center, rgba(168,85,247,0.16) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderRadius: 20,
              background: "rgba(168,85,247,0.12)",
              border: "1px solid rgba(168,85,247,0.28)",
              color: "var(--purple)",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 0.3,
              marginBottom: 28,
              position: "relative",
              zIndex: 1,
            }}
          >
            AI SOON · Designed, not shipped
          </div>

          <h1
            style={{
              fontSize: "clamp(44px, 6vw, 76px)",
              lineHeight: 1.05,
              letterSpacing: "-2.5px",
              fontWeight: 800,
              maxWidth: 980,
              marginBottom: 24,
              position: "relative",
              zIndex: 1,
            }}
          >
            AI insights for private
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, var(--cyan) 0%, var(--purple) 60%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              engineering data.
            </span>
          </h1>

          <p
            style={{
              fontSize: 19,
              lineHeight: 1.65,
              color: "var(--text-secondary)",
              maxWidth: 760,
              marginBottom: 34,
              position: "relative",
              zIndex: 1,
            }}
          >
            Metraly is being designed to explain delivery bottlenecks, CI failures, review queues, and operational risk without sending sensitive engineering data to another default SaaS AI layer.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center", position: "relative", zIndex: 1 }}>
            <Link href="/" className="btn-primary">Back to homepage</Link>
            <Link href="/docs" className="btn-ghost btn-large">Read docs</Link>
          </div>
        </section>

        <section style={{ background: "var(--bg-surface)", padding: "90px 32px" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <div className="section-eyebrow">Principles</div>
            <h2 className="section-title">Designed to explain, not expose.</h2>
            <p className="section-sub">
              The AI layer is a product direction. Until connectors, live data pipelines, and evaluation are ready, all examples should stay synthetic and status-labeled.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {cards.map((card) => (
                <div key={card.title} className="feature-card">
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 12 }}>
                    <h3 className="feature-title">{card.title}</h3>
                    <span className="status-tag">{card.label}</span>
                  </div>
                  <p className="feature-desc">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "90px 32px" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "center" }}>
            <div>
              <div className="section-eyebrow">Synthetic preview</div>
              <h2 className="section-title">What an insight could look like.</h2>
              <p className="section-sub">
                Example only. The goal is to connect engineering signals into an actionable explanation while keeping data-control boundaries explicit.
              </p>
            </div>

            <div className="feature-card" style={{ borderColor: "rgba(168,85,247,0.28)" }}>
              <div style={{ color: "var(--purple)", fontSize: 12, fontWeight: 700, marginBottom: 10 }}>Synthetic insight example</div>
              <h3 style={{ fontSize: 20, marginBottom: 12 }}>Review queue increased this sprint</h3>
              <p className="feature-desc" style={{ marginBottom: 16 }}>
                Likely bottleneck: two overloaded reviewers are assigned across multiple high-risk services. Review wait time is increasing faster than implementation time.
              </p>
              <div style={{ color: "var(--text-muted)", fontSize: 12 }}>
                Based on synthetic data. Not a live AI inference.
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: "var(--bg-surface)", padding: "90px 32px" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <div className="section-eyebrow">Roadmap</div>
            <h2 className="section-title">AI follows the data foundation.</h2>
            <p className="section-sub">
              AI should not overtake the product foundation. It depends on dashboard rendering, connectors, real pipelines, and evaluation.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 }}>
              {roadmap.map(([stage, text]) => (
                <div key={stage} className="feature-card">
                  <h3 className="feature-title">{stage}</h3>
                  <p className="feature-desc">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "90px 32px", textAlign: "center" }}>
          <h2 className="section-title">AI is coming after the foundation is real.</h2>
          <p className="section-sub" style={{ marginLeft: "auto", marginRight: "auto" }}>
            Follow the build-in-public roadmap from synthetic dashboards to real integrations and validated insights.
          </p>
          <Link href="/" className="btn-primary">View homepage →</Link>
        </section>
      </main>
    </SiteShell>
  );
}
