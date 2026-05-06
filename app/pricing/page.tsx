import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { Icon } from "@/components/ui/primitives";
import styles from "@/components/marketing/marketing.module.css";

const plans = [
  {
    name: "Community",
    status: "Always free",
    price: "$0",
    note: "Self-hosted · AGPLv3 core",
    desc: "For evaluation, OSS projects, small teams, and privacy-first buyers who want to inspect the platform before paid modules exist.",
    cta: "Get the source",
    href: "https://github.com/getmetraly/metraly",
    featured: false,
    features: [
      "Self-hosted AGPLv3 core",
      "DORA metrics and role dashboards",
      "Basic widgets and dashboard templates",
      "Up to 10 users target",
      "1 team target",
      "3 active connectors target",
      "3 custom dashboards target",
      "90-day retention target",
      "Community support",
    ],
  },
  {
    name: "Pro",
    status: "Planned / paid pilot",
    price: "$99/mo",
    note: "Includes 10 active users · +$15/dev/mo above 10",
    desc: "For growing teams that want self-hosted engineering intelligence with more scale, longer history, private AI direction, plugins, alerts, and exports.",
    cta: "Join Pro waitlist",
    href: "mailto:hello@metraly.io?subject=Metraly%20Pro%20waitlist",
    featured: true,
    features: [
      "Everything in Community",
      "Higher user and team limits",
      "365-day retention target",
      "Drag-and-drop dashboard builder roadmap",
      "Private AI chat and insights roadmap",
      "Plugin marketplace UI roadmap",
      "Slack / Teams / PagerDuty alerts roadmap",
      "PDF / Notion / Google Docs exports roadmap",
      "Email support target",
    ],
  },
  {
    name: "Enterprise",
    status: "Contact / pilot",
    price: "From $15K/yr",
    note: "Includes 50 active users · +$120/dev/year above 50",
    desc: "For regulated or larger organizations that need procurement fit, deployment guidance, custom agreements, and support for sensitive engineering data.",
    cta: "Discuss Enterprise",
    href: "mailto:enterprise@metraly.io?subject=Metraly%20Enterprise",
    featured: false,
    features: [
      "Everything in Pro",
      "Manual paid pilot license path",
      "Dedicated support path",
      "Custom agreements and procurement support",
      "SSO / SAML / LDAP roadmap",
      "Custom RBAC roadmap",
      "Audit export and SIEM roadmap",
      "Restricted-environment deployment roadmap",
      "Compliance evidence support roadmap",
    ],
  },
];

const lifecycle = [
  "Payment or contract",
  "Signed license",
  "App verification",
  "Feature gates",
  "Renewal / downgrade / recovery",
];

export const metadata = {
  title: "Pricing — Metraly",
  description:
    "Claim-safe pricing preview for Metraly Community, Pro, and Enterprise editions.",
};

const featureListStyle = {
  display: "grid",
  gap: 10,
  listStyle: "none",
  margin: "0 0 24px",
  padding: 0,
};

const featureItemStyle = {
  display: "grid",
  gridTemplateColumns: "24px minmax(0, 1fr)",
  alignItems: "center",
  columnGap: 8,
};

const featureIconStyle = {
  width: 22,
  height: 22,
  color: "color-mix(in srgb, var(--cyan) 82%, white)",
};

export default function PricingPage() {
  return (
    <SiteShell>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.badge}>Pricing preview · Billing/licensing in design</div>
          <h1 className={styles.heroTitle}>
            Start free.
            <br />
            <span className={styles.gradientText}>Scale when trust matters.</span>
          </h1>
          <p className={styles.heroSub}>
            Community is the free self-hosted core. Pro and Enterprise pricing are public anchors for paid pilots and future signed-license activation, not a self-service checkout launch.
          </p>
          <div className={styles.heroActions}>
            <a href="https://github.com/getmetraly/metraly" className="btn-primary" target="_blank" rel="noreferrer">
              Get Community <Icon name="arrowRight" />
            </a>
            <Link href="/demo" className="btn-ghost btn-large">
              Try synthetic demo
            </Link>
          </div>
        </section>

        <section className={styles.surface}>
          <div className={styles.section}>
            <div className={styles.eyebrow}>Plans</div>
            <h2 className={styles.title}>Open core pricing without a SaaS trap.</h2>
            <p className={styles.sub}>
              Free stays useful. Paid plans add scale, automation, support, and regulated deployment paths as billing and license activation mature.
            </p>

            <p className={styles.notice}>
              Limits are packaging targets until enforced in the app. Pro and Enterprise remain preview/pilot offers until the signed-license flow works end to end.
            </p>

            <div className={styles.grid3} style={{ alignItems: "stretch" }}>
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`${styles.card} ${plan.featured ? styles.cardAccent : ""}`}
                  style={{ display: "flex", flexDirection: "column", height: "100%" }}
                >
                  <div className={styles.cardHead}>
                    <h3 className={styles.cardTitle}>{plan.name}</h3>
                    <span className={styles.status}>{plan.status}</span>
                  </div>
                  <div style={{ fontSize: 38, fontWeight: 800, letterSpacing: -1.2, marginBottom: 6 }}>
                    {plan.price}
                  </div>
                  <div className={styles.note} style={{ marginBottom: 18 }}>{plan.note}</div>
                  <p className={styles.cardDesc} style={{ marginBottom: 22 }}>{plan.desc}</p>
                  <ul style={featureListStyle}>
                    {plan.features.map((feature) => (
                      <li key={feature} className={styles.cardDesc} style={featureItemStyle}>
                        <Icon name="arrowRight" style={featureIconStyle} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: "auto", paddingTop: 8 }}>
                    <a
                      href={plan.href}
                      className={plan.featured ? "btn-primary" : "btn-ghost btn-large"}
                      target={plan.href.startsWith("http") ? "_blank" : undefined}
                      rel={plan.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {plan.cta} <Icon name="arrowRight" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className={`${styles.section} ${styles.split}`}>
            <div>
              <div className={styles.eyebrow}>License boundary</div>
              <h2 className={styles.title}>Billing is not the license.</h2>
              <p className={styles.sub}>
                Billing decides whether a customer paid. The self-hosted app needs a signed license to unlock paid entitlements locally.
              </p>
            </div>
            <div className={`${styles.card} ${styles.cardAccent}`}>
              <h3 className={styles.cardTitle} style={{ marginBottom: 16 }}>Pro is not GA until this works end-to-end</h3>
              <div style={{ display: "grid", gap: 12 }}>
                {lifecycle.map((item, index) => (
                  <div key={item} className={styles.cardDesc}>
                    {index + 1}. {item}
                  </div>
                ))}
              </div>
              <p className={styles.note} style={{ marginTop: 18 }}>
                Current public wording should say pricing preview, planned Pro, paid pilots, or designed billing/license flow — not live Pro availability.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.surface}>
          <div className={styles.section}>
            <div className={styles.eyebrow}>FAQ</div>
            <h2 className={styles.title}>Pricing questions.</h2>
            <div className={styles.grid3}>
              {[
                ["Can I start for free?", "Yes. Community is the free self-hosted core for evaluation, small teams, OSS, and privacy-first buyers."],
                ["When should a team choose Pro?", "When the team needs more scale, longer retention, exports, alerts, private AI direction, plugins, and support."],
                ["What does Enterprise add?", "Procurement support, custom agreements, dedicated support, and roadmap capabilities for regulated or restricted environments."],
                ["Is checkout live today?", "No. Billing and license activation are being implemented in phases. Paid pilots should use manually issued signed licenses first."],
                ["Do you offer hosted SaaS?", "Not currently. Metraly is designed around self-hosting and data sovereignty."],
                ["Can prices change?", "The public model is Community / Pro / Enterprise. These are anchor prices while pilot terms, packaging, and willingness-to-pay are validated with design partners."],
              ].map(([q, a]) => (
                <div className={styles.card} key={q}>
                  <h3 className={styles.cardTitle}>{q}</h3>
                  <p className={styles.cardDesc}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
