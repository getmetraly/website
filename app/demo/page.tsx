import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export const metadata = {
  title: "Demo Preview — Metraly",
  description:
    "Preview Metraly with synthetic mock data before self-hosting the engineering metrics platform.",
};

export default function DemoPage() {
  return (
    <SiteShell>
      <div className="container">
        <div className="logo-wrap">
          <div className="logo-icon" aria-hidden="true">
            M
          </div>
          <div className="logo-name">Metraly</div>
          <div className="logo-sub">Engineering Metrics · Self-hosted</div>
        </div>

        <div className="card">
          <div className="demo-badge">
            <div className="demo-dot" aria-hidden="true"></div>
            {" "}Synthetic Demo Preview
          </div>
          <h2>Open the demo preview</h2>
          <p className="card-desc">
            Explore Metraly with synthetic mock data: 5 teams, 90 days of
            metrics, and DORA dashboard examples.
          </p>

          <div className="demo-creds">
            <strong>Preview credentials</strong>
            <br />
            Email: <code>admin@demo.metraly.io</code>
            <br />
            Password: <code>demo2026</code>
          </div>

          <div className="alert-info">
            <span aria-hidden="true">⚠️</span>
            <span>
              This preview uses mock data only. Do not enter real company
              data, real credentials, or personal information. For production
              use,{" "}
              <a href="#self-host" style={{ color: "var(--orange)" }}>
                self-host Metraly
              </a>{" "}
              on your own infrastructure.
            </span>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Demo preview is not yet deployed. To try Metraly locally:\n\ngit clone https://github.com/getmetraly/metraly.git\ncd metraly && make docker-up && make seed\n\nThen open http://localhost:3000"
              );
            }}
            noValidate
          >
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                defaultValue="admin@demo.metraly.io"
                autoComplete="email"
                placeholder="you@company.com"
                aria-required="true"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                defaultValue="demo2026"
                autoComplete="current-password"
                placeholder="••••••••"
                aria-required="true"
              />
            </div>
            <button type="submit" className="btn-login" id="login-btn">
              Open Demo Preview →
            </button>
          </form>

          <div className="divider">or</div>

          <div className="self-host-box" id="self-host">
            <div className="sh-title">
              🏠 Self-host Metraly (recommended)
            </div>
            <div className="sh-desc">
              Run Metraly on your own infrastructure. All your data stays
              private. Takes 5 minutes.
            </div>
            <div className="sh-code">
              <div>$ git clone https://github.com/getmetraly/metraly.git</div>
              <div>$ cd metraly &amp;&amp; make docker-up &amp;&amp; make seed</div>
              <div>→ Open http://localhost:3000</div>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <Link href="/">← Back to home</Link>
          <Link href="/docs">Documentation</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </SiteShell>
  );
}
