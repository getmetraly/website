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
            Simple, honest
            <br />
            <span className="gradient-text">open-core pricing.</span>
          </h1>
          <p className="hero-sub">
            Metraly Community is free to self-host under AGPLv3. Pro adds
            scale, private AI, plugins, alerts, and longer retention. Enterprise adds
            compliance, air-gap, and dedicated support.
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
                Run Metraly on your own infrastructure for evaluation, startups,
                internal teams, and OSS projects.
              </div>
              <ul className="pricing-features">
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
              <div className="pricing-featured-badge">Most Popular</div>
              <div className="pricing-plan">Pro</div>
              <div className="pricing-price" style={{ color: "var(--purple)" }}>
                $99<sub>/mo</sub>
              </div>
              <div className="pricing-price-note">
                Up to 10 active users · then +$15/dev/mo
              </div>
              <div className="pricing-desc">
                For growing teams that need private AI, plugins, alerting, exports,
                and more history without giving up self-hosting.
              </div>
              <ul className="pricing-features">
                <li>Everything in Community</li>
                <li>Private AI assistant and AI insights</li>
                <li>Plugin marketplace and custom widgets</li>
                <li>Slack, Teams, Telegram, PagerDuty alert targets</li>
                <li>Unlimited users and up to 10 teams target</li>
                <li>365-day metric retention target</li>
                <li>PDF, CSV, Notion, and Google Docs exports</li>
                <li>Email support with 24h response target</li>
              </ul>
              <a
                href="mailto:hello@metraly.io"
                className="pricing-cta primary"
              >
                Contact us →
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
                For large organisations with compliance requirements, custom
                integrations, and dedicated infra needs.
              </div>
              <ul className="pricing-features">
                <li>Everything in Pro</li>
                <li>Dedicated support engineer</li>
                <li>Custom plugin development options</li>
                <li>Air-gapped deployment support</li>
                <li>SIEM &amp; audit log integration</li>
                <li>Custom data residency requirements</li>
                <li>SSO, SAML, LDAP, and advanced RBAC roadmap</li>
                <li>NDA &amp; custom MSA available</li>
              </ul>
              <a
                href="mailto:enterprise@metraly.io"
                className="pricing-cta outline-cyan"
              >
                Talk to us →
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
                Free core. Paid scale and commercial modules.
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                }}
              >
                Community stays useful and auditable. Pro buys time-saving AI,
                plugins, retention, exports, and team scale. Enterprise buys
                compliance, procurement fit, and deployment assurance.
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
                <h2>AGPLv3 open-core</h2>
                <p className="body-text">
                  Metraly&apos;s core is AGPLv3. You can inspect, self-host,
                  modify, and contribute to the core platform while keeping your
                  engineering data inside your own infrastructure.
                </p>
                <p className="body-text">
                  Commercial Pro and Enterprise modules fund long-term
                  development: private AI, plugin marketplace workflows,
                  compliance tooling, Enterprise deployment support, and customer
                  operations.
                </p>
                <p className="body-text">
                  The guiding rule is simple: the Community core should remain
                  useful. Paid plans add scale, automation, support, and
                  regulated deployment capabilities.
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
                      Private AI, plugins, exports, alerts, and higher limits
                      for teams that need more scale.
                    </div>
                  </div>
                  <div className="license-item">
                    <div className="license-kicker">Enterprise</div>
                    <div className="license-title">
                      Compliance and deployment assurance
                    </div>
                    <div className="license-desc">
                      Air-gapped support, audit integrations, procurement
                      documents, and deployment guidance for regulated teams.
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
                  self-hosted deployments do not need to send engineering metrics,
                  repositories, or team data to Metraly.
                  <br />
                  <br />
                  <strong style={{ color: "var(--orange)" }}>
                    Commercial boundary:
                  </strong>{" "}
                  paid plans unlock proprietary Pro and Enterprise modules,
                  support, and higher operating limits.
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
              Choose Pro when the team needs private AI insights, plugin
              workflows, more history, exports, alert destinations, and higher
              team limits. Pro is $99/month for up to 10 active users, then $15
              per additional active developer per month.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What does Enterprise add?</div>
            <div className="faq-a">
              Enterprise is for regulated and large organizations that need
              SSO/SAML/LDAP paths, audit evidence, air-gapped deployment
              support, SIEM integration, procurement terms, and dedicated
              support. The baseline is $15K/year up to 50 developers, then
              $120 per additional developer per year.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-q">
              Do you offer a managed/hosted version?
            </div>
            <div className="faq-a">
              Not currently. Metraly is designed to be self-hosted. We
              believe data sovereignty is a feature, not an obstacle. A
              managed tier may be offered in the future with explicit opt-in
              data controls.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-q">
              Can pricing change after design-partner feedback?
            </div>
            <div className="faq-a">
              The public baseline is Community / Pro / Enterprise. We will
              validate details with design partners, but the current published
              model keeps pricing predictable and self-hosting central.
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
