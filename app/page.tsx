import { SiteShell } from "@/components/site-shell";

export default function HomePage() {
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
          position: "relative" as const,
          overflow: "hidden",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(44px, 6vw, 78px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-2.5px",
            maxWidth: "860px",
            marginBottom: "24px",
          }}
        >
          Engineering metrics
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, var(--cyan) 0%, var(--purple) 60%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            } as React.CSSProperties}
          >
            on your infrastructure.
          </span>
        </h1>

        <p
          style={{
            fontSize: "19px",
            lineHeight: 1.65,
            color: "var(--text-secondary)",
            maxWidth: "580px",
            marginBottom: "40px",
            fontWeight: 400,
          }}
        >
          Track DORA metrics, CI/CD performance, and team velocity across all
          your teams — without sending a single byte to someone else&apos;s cloud.
        </p>

        <div
          style={{
            display: "flex",
            gap: "14px",
            marginBottom: "40px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a href="/login" className="btn-demo">
            ▶ Try Demo Preview
          </a>
          <a href="#quickstart" className="btn-ghost btn-large">
            Deploy in 5 minutes
          </a>
          <a href="/docs" className="btn-ghost btn-large">
            Read the docs
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
