import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export const metadata = {
  title: "Pricing & License — Metraly",
  description:
    "Metraly pricing for the AGPLv3 open-core, self-hosted Engineering Intelligence platform: Community, Pro, and Enterprise.",
};

export default function PricingPage() {
  return (
    <SiteShell>
      <main id="main">
        <div className="hero">
          <div className="eyebrow">Pricing &amp; License</div>
          <h1>
            Start self-hosted.
            <br />
            <span className="gradient-text">Scale when trust matters.</span>
          </h1>
          <p className="hero-sub">
            Community is free and AGPLv3 open-core. Pro adds team scale,
            longer history, exports, alerts, and private AI/plugin capabilities
            as they become available. Enterprise is for regulated teams that
            need procurement, deployment assurance, and dedicated support.
          </p>
        </div>

        <div className="pricing-section">
          <div className="pricing-grid">
            {/* Community */}
            <div className="pricing-card">
              <div className="pricing-plan">Community</div>
              <div className="pricing-price" style={{ color: "var(--cyan)" }}>
                Free
              </div>
              <div className="pricing-price-note">
                $0 · self-hosted · AGPLv3 core
              </div>
              <div className="pricing-desc">
                For evaluation, small teams, OSS projects, and buyers who want
                to inspect the core platform before committing to paid modules.
              </div>
              <ul className="pricing-features">
                <li>Self-hosted AGPLv3 core</li>
                <li>DORA dashboards and core delivery metrics</li>
                <li>Git, CI/CD, PM, and metrics connectors as they ship</li>
                <li>System dashboard templates</li>
                <li>Local auth and built-in RBAC roles</li>
                <li>90-day metric retention target</li>
                <li>Up to 10 users and 1 team target</li>
                <li>Up to 3 active connectors and 3 custom dashboards target</li>
                <li className="limited">
                  Community support through GitHub Issues
                </li>
              </ul>
              <a
                href="https://github.com/getmetraly/metraly"
                className="pricing-cta ghost"
                target="_blank"
                rel="noopener"
              >
                Get the source →
              </a>
            </div>

            {/* Pro */}
            <div className="pricing-card featured">
              <div className="pricing-featured-badge">For growing teams</div>
              <div className="pricing-plan">Pro</div>
              <div className="pricing-price" style={{ color: "var(--purple)" }}>
                $99<sub>/mo</sub>
              </div>
              <div className="pricing-price-note">
                Up to 10 active users · then +$15/dev/mo
              </div>
              <div className="pricing-desc">
                For engineering teams that want self-hosted intelligence with
                more scale, more history, exports, alerts, and advanced modules
                without moving data into another SaaS.
              </div>
              <ul className="pricing-features">
                <li>Everything in Community</li>
                <li>Higher team and user limits</li>
                <li>365-day metric retention target</li>
                <li>Exports for leadership and operating reviews</li>
                <li>Alert destinations for Slack, Teams, Telegram, and PagerDuty</li>
                <li>Private AI assistant and AI insights roadmap</li>
                <li>Plugin marketplace and custom widgets roadmap</li>
                <li>Email support with 24h response target</li>
              </ul>
              <a
                href="mailto:hello@metraly.io?subject=Metraly%20Pro"
                className="pricing-cta primary"
              >
                Talk about Pro →
              </a>
            </div>

            {/* Enterprise */}
            <div className="pricing-card">
              <div className="pricing-plan">Enterprise</div>
              <div className="pricing-price" style={{ color: "var(--orange)" }}>
                $15K<sub>/yr</sub>
              </div>
              <div className="pricing-price-note">
                Up to 50 dev · then +$120/dev/year
              </div>
              <div className="pricing-desc">
                For regulated or larger organizations that need procurement fit,
                deployment guidance, custom integrations, and support around
                sensitive engineering data.
              </div>
              <ul className="pricing-features">
                <li>Everything in Pro</li>
                <li>Dedicated support path</li>
                <li>Custom plugin development options</li>
                <li>Deployment guidance for restricted environments</li>
                <li>SIEM and audit log integration roadmap</li>
                <li>Custom data residency requirements review</li>
                <li>SSO, SAML, LDAP, and advanced RBAC roadmap</li>
                <li>Compliance evidence and security review support roadmap</li>
                <li>NDA and custom MSA available</li>
              </ul>
              <a
                href="mailto:enterprise@metraly.io?subject=Metraly%20Enterprise"
                className="pricing-cta outline-cyan"
              >
                Discuss Enterprise →
              </a>
            </div>
          </div>

          {/* Comparison note */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "24px 28px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ fontSize: "28px" }} aria-hidden="true">
              ⚖️
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  marginBottom: "6px",
                }}
              >
                Free core. Paid scale. No forced SaaS migration.
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                }}
              >
                Community stays useful and auditable. Pro pays for scale,
                automation, history, exports, and advanced modules. Enterprise
                pays for procurement fit, deployment assurance, and regulated-team
                support.
              </div>
            </div>
          </div>
        </div>

        {/* LICENSE SECTION */}
        <div className="license-section">
          <div className="license-inner">
            <div className="license-grid">
              <div>
                <div className="section-eyebrow">The License</div>
                <h2>AGPLv3 open-core, without hiding the boundary.</h2>
                <p className="body-text">
                  Metraly&apos;s core is AGPLv3. You can inspect, self-host,
                  modify, and contribute to the core platform while keeping your
                  engineering data inside your own infrastructure.
                </p>
                <p className="body-text">
                  Commercial Pro and Enterprise modules fund long-term
                  development: advanced AI workflows, plugin ecosystem work,
                  exports, alerting, compliance tooling, customer operations,
                  and enterprise deployment support.
                </p>
                <p className="body-text">
                  The rule is simple: Community should remain useful. Paid plans
                  add scale, automation, support, and regulated deployment
                  capabilities without turning self-hosting into an upsell trap.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    marginTop: "24px",
                    flexWrap: "wrap",
                  }}
                >
                  <a
                    href="https://github.com/getmetraly/metraly/blob/main/LICENSE"
                    className="btn-ghost"
                    target="_blank"
                    rel="noopener"
                    style={{ fontSize: "13px" }}
                  >
                    View our LICENSE ↗
                  </a>
                </div>
              </div>
              <div>
                <div className="license-list">
                  <div className="license-item">
                    <div className="license-kicker">Community</div>
                    <div className="license-title">AGPLv3 core</div>
                    <div className="license-desc">
                      Self-host the core platform, audit the code, and contribute
                      improvements back to the project.
                    </div>
                  </div>
                  <div className="license-item">
                    <div className="license-kicker">Pro</div>
                    <div className="license-title">Commercial modules</div>
                    <div className="license-desc">
                      Scale, retention, exports, alerts, and advanced AI/plugin
                      capabilities as paid modules mature.
                    </div>
                  </div>
                  <div className="license-item">
                    <div className="license-kicker">Enterprise</div>
                    <div className="license-title">
                      Procurement and deployment assurance
                    </div>
                    <div className="license-desc">
                      Support path, deployment guidance, procurement documents,
                      custom agreements, and regulated-team roadmap capabilities.
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "28px",
                    background: "rgba(0,229,204,0.06)",
                    border: "1px solid rgba(0,229,204,0.2)",
                    borderRadius: "10px",
                    padding: "16px 18px",
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                  }}
                >
                  <strong style={{ color: "var(--cyan)" }}>
                    Privacy posture:
                  </strong>{" "}
                  self-hosted product deployments are designed so engineering
                  metrics, repositories, CI/CD logs, and team data stay in the
                  customer&apos;s infrastructure.
                  <br />
                  <br />
                  <strong style={{ color: "var(--orange)" }}>
                    Roadmap boundary:
                  </strong>{" "}
                  AI, plugin, compliance, and restricted-environment capabilities
                  should be labeled by implementation status until shipped.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="faq-section">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>
              FAQ
            </div>
            <h2 style={{ textAlign: "center" }}>Pricing questions</h2>
          </div>
          <div className="faq-item">
            <div className="faq-q">Can I start with Metraly for free?</div>
            <div className="faq-a">
              Yes. Community is the free self-hosted core. It is intended for
              evaluation, OSS projects, small teams, and privacy-first buyers
              who want to inspect the platform before upgrading.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-q">When should a team choose Pro?</div>
            <div className="faq-a">
              Choose Pro when the team wants more scale, longer retention,
              exports, alert destinations, support, and access to advanced
              paid modules such as private AI and plugin workflows as they
              become available. Pro is $99/month for up to 10 active users,
              then $15 per additional active developer per month.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What does Enterprise add?</div>
            <div className="faq-a">
              Enterprise is for regulated and larger organizations that need
              procurement terms, a dedicated support path, deployment guidance,
              custom agreements, and roadmap capabilities such as SSO/SAML/LDAP,
              audit integrations, restricted-environment deployment, and
              compliance evidence support. The baseline is $15K/year up to 50
              developers, then $120 per additional developer per year.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-q">
              Do you offer a managed/hosted version?
            </div>
            <div className="faq-a">
              Not currently. Metraly is designed around self-hosting and data
              sovereignty. A managed tier may be offered in the future only with
              explicit opt-in data controls.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-q">
              Can pricing change after design-partner feedback?
            </div>
            <div className="faq-a">
              The public baseline is Community / Pro / Enterprise. Details may
              be validated with design partners, but the model keeps pricing
              predictable and self-hosting central.
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
