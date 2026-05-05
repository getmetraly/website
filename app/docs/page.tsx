import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export const metadata = {
  title: "Documentation — Metraly",
  description:
    "Full documentation for Metraly — self-hosted engineering metrics platform. Getting started, API reference, integrations, AI configuration, and more.",
};

export default function DocsPage() {
  return (
    <SiteShell>
      <main id="main-content" style={{ maxWidth: "800px", margin: "0 auto", padding: "96px 32px 80px" }}>
        <div className="page-label">Documentation</div>
        <h1>Documentation</h1>
        <div className="updated" style={{ marginBottom: "40px" }}>
          Last updated: May 2, 2026 · Phase 5 will bring full docs reconciliation
        </div>

        <div
          style={{
            background: "rgba(0,229,204,0.06)",
            border: "1px solid rgba(0,229,204,0.2)",
            borderRadius: "10px",
            padding: "24px 28px",
            marginBottom: "40px",
          }}
        >
          <p style={{ marginBottom: "12px", fontWeight: 600, color: "var(--cyan)" }}>
            📖 Documentation restructuring in progress
          </p>
          <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.6 }}>
            This page is a structural placeholder. Phase 5 will synchronize the
            full documentation from <code>../docs</code> with the canonical source
            material including strategy, product, legal, technical, and status
            documents.
          </p>
        </div>

        <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "16px" }}>
          Quick Links
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
          <a
            href="https://github.com/getmetraly/metraly/blob/main/docs/README.md"
            target="_blank"
            rel="noopener"
            style={{ color: "var(--cyan)", fontSize: "15px" }}
          >
            → GitHub: Main Documentation README ↗
          </a>
          <Link href="/pricing" style={{ color: "var(--cyan)", fontSize: "15px" }}>
            → Pricing & License
          </Link>
          <Link href="/demo" style={{ color: "var(--cyan)", fontSize: "15px" }}>
            → Try Demo Preview
          </Link>
          <a
            href="https://github.com/getmetraly/metraly"
            target="_blank"
            rel="noopener"
            style={{ color: "var(--cyan)", fontSize: "15px" }}
          >
            → GitHub Repository ↗
          </a>
        </div>

        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "10px",
            padding: "20px 24px",
          }}
        >
          <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-muted)", marginBottom: "8px" }}>
            Current Phase Status
          </div>
          <div style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.6 }}>
            Phase 3: Next.js Vercel Foundation — in progress.
            <br />
            Phase 5: Documentation Surface — will reconcile <code>../docs</code>{" "}
            canonical content with the website.
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
