import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import styles from "@/components/marketing/marketing.module.css";
import {
  Card,
  CardHeader,
  CardLink,
  CardText,
  DocsLayout,
  DocsNav,
  Grid,
  Icon,
  Page,
  Section,
  SectionHeader,
  Stack,
} from "@/components/ui/primitives";

const docSections = [
  {
    title: "Quick start",
    desc: "Run Metraly locally with `make up`, sign in with seeded preview credentials, and explore backend-backed dashboards before connecting real engineering data.",
    href: "#quick-start",
    label: "Start",
  },
  {
    title: "Self-hosting",
    desc: "Run Metraly on your own infrastructure and keep repository, CI/CD, project, and team signals under your control.",
    href: "#self-hosting",
    label: "Deploy",
  },
  {
    title: "Product status",
    desc: "Understand what is available now, what is in progress, and which capabilities are still planned or designed.",
    href: "#status",
    label: "Truth",
  },
  {
    title: "Trust",
    desc: "Understand Metraly's privacy, telemetry, AI, plugin and claim boundaries before connecting data.",
    href: "/trust",
    label: "Trust",
  },
  {
    title: "Pricing and license",
    desc: "Community is free. Pro and Enterprise pricing are public anchors for future signed-license activation and paid pilots.",
    href: "/pricing",
    label: "Pricing",
  },
  {
    title: "Demo sandbox",
    desc: "Explore role-based dashboards and synthetic engineering data before live integrations are available.",
    href: "/demo",
    label: "Demo",
  },
  {
    title: "Public claim policy",
    desc: "Metraly uses conservative public wording: real UI, backend-backed preview flows, synthetic data, and clear status labels for roadmap capabilities.",
    href: "#claims",
    label: "Policy",
  },
];

const docsNavLinks = [
  { href: "#documentation-map", label: "Documentation map" },
  { href: "#quick-start", label: "Quick start" },
  { href: "#self-hosting", label: "Self-hosting" },
  { href: "#status", label: "Product status" },
  { href: "#claims", label: "Claim policy" },
];

const statusRows = [
  ["Real product UI", "Preview", "Role dashboards and UI direction are visible using synthetic and backend-backed preview data."],
  ["Local preview auth", "Implemented", "Seeded local preview credentials exist for evaluation and onboarding flows."],
  ["Dashboard editor", "In progress", "Drag-and-drop editing and real dashboard rendering are active product work."],
  ["Connectors", "Next", "GitHub / GitLab and CI/CD integrations are the next major product step."],
  ["Private AI insights", "Designed", "AI is a product direction with synthetic examples, not a shipped production claim."],
  ["Plugin ecosystem", "Planned", "Marketplace-style extensibility is part of the long-term platform direction."],
];

const safeWording = [
  "Real interface and backend-backed preview flows.",
  "Dashboards are actively being developed.",
  "Connectors are planned / next.",
  "AI is designed / evolving.",
  "Pro and Enterprise pricing are preview anchors until license activation works.",
];

const pulseTextStyle = {
  display: "grid",
  gridTemplateColumns: "24px minmax(0, 1fr)",
  alignItems: "center",
  columnGap: 8,
};

const pulseIconStyle = {
  width: 22,
  height: 22,
  color: "color-mix(in srgb, var(--cyan) 82%, white)",
};

function PulseCardText({ children }: { children: React.ReactNode }) {
  return (
    <CardText style={pulseTextStyle}>
      <Icon name="arrowRight" style={pulseIconStyle} />
      <span>{children}</span>
    </CardText>
  );
}

export const metadata = {
  title: "Documentation — Metraly",
  description:
    "Metraly public documentation for quick start, self-hosting, product status, demo, pricing, and claim-safe product boundaries.",
};

export default function DocsPage() {
  return (
    <SiteShell>
      <Page>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.badge}>Docs · Public documentation</div>
          <h1 className={styles.heroTitle}>
            Understand Metraly
            <br />
            <span className={styles.gradientText}>before you connect data.</span>
          </h1>
          <p className={styles.heroSub}>
            Public documentation for the self-hosted engineering intelligence platform: quick start, demo, status, pricing, and safe product boundaries.
          </p>
          <div className={styles.heroActions}>
            <a href="#quick-start" className="btn-primary">
              Start reading <Icon name="arrowRight" />
            </a>
            <Link href="/demo" className="btn-ghost btn-large">
              Try synthetic demo
            </Link>
          </div>
        </section>

        <Section tone="surface">
          <DocsLayout>
            <DocsNav links={docsNavLinks} />

            <Stack>
              <div id="documentation-map">
                <SectionHeader
                  eyebrow="Documentation map"
                  title="Start with the public docs."
                  description="These sections are copied and maintained in the website so readers do not need access to the private planning repository."
                />

                <Grid columns={3}>
                  {docSections.map((doc) => (
                    <CardLink key={doc.title} href={doc.href}>
                      <CardHeader title={doc.title} status={doc.label} />
                      <CardText>{doc.desc}</CardText>
                    </CardLink>
                  ))}
                </Grid>
              </div>

              <div id="quick-start">
                <SectionHeader
                  eyebrow="Quick start"
                  title="Run the local preview path."
                  description="The current canonical preview flow uses seeded authentication and backend-backed dashboards for local evaluation. Dashboard data should still be treated as synthetic/preview until live connectors are verified publicly."
                />

                <Grid columns={2}>
                  <Card>
                    <CardHeader title="Current local baseline" />
                    <Stack>
                      <PulseCardText>Start locally with <code>make up</code></PulseCardText>
                      <PulseCardText>App preview: <code>http://localhost:3000</code></PulseCardText>
                      <PulseCardText>Login: <code>admin@metraly.local</code> / <code>admin123</code></PulseCardText>
                      <PulseCardText><code>make docker-up</code> remains a legacy compatibility alias</PulseCardText>
                    </Stack>
                  </Card>

                  <Card accent>
                    <CardHeader title="Validate locally" status="Recommended" />
                    <Stack>
                      <PulseCardText>Use <code>npm ci</code> for website dependencies.</PulseCardText>
                      <PulseCardText>Use <code>npm run ci</code> before publishing copy or UI changes.</PulseCardText>
                      <PulseCardText>Keep public website claims status-labeled.</PulseCardText>
                    </Stack>
                  </Card>
                </Grid>

                <div className={styles.heroActions}>
                  <a href="https://github.com/getmetraly/metraly" target="_blank" rel="noreferrer" className="btn-primary">View source ↗</a>
                  <Link href="/demo" className="btn-ghost btn-large">Open synthetic demo</Link>
                </div>
              </div>

              <div id="self-hosting">
                <SectionHeader
                  eyebrow="Self-hosting"
                  title="Your engineering data stays under your control."
                  description="Metraly is designed around self-hosted deployment so repository, CI/CD, project, and team signals can be analyzed without routing sensitive engineering data through another SaaS platform."
                />

                <Grid columns={3}>
                  <Card>
                    <CardHeader title="Community core" />
                    <CardText>The core product is AGPLv3 open core. Community remains useful and auditable.</CardText>
                  </Card>
                  <Card>
                    <CardHeader title="Seeded local preview" />
                    <CardText>The current local preview path includes seeded authentication and backend-backed dashboards for onboarding and evaluation.</CardText>
                  </Card>
                  <Card>
                    <CardHeader title="Connectors next" />
                    <CardText>Live Git and CI/CD data integrations are the next product step after dashboard rendering and editor work.</CardText>
                  </Card>
                </Grid>
              </div>

              <div id="status">
                <SectionHeader
                  eyebrow="Product status"
                  title="What exists. What is next."
                  description="Public docs use status labels so the website does not overclaim implementation readiness."
                />

                <Grid columns={3}>
                  {statusRows.map(([area, status, note]) => (
                    <Card key={area}>
                      <CardHeader title={area} status={status} />
                      <CardText>{note}</CardText>
                    </Card>
                  ))}
                </Grid>
              </div>

              <div id="claims">
                <SectionHeader
                  eyebrow="Claim policy"
                  title="Docs describe direction. Code proves claims."
                  description="Public pages may describe real UI, backend-backed preview flows, synthetic data, self-hosted direction, planned connectors, designed AI, and pricing previews. They must not claim production-ready AI, live marketplace, finished billing, or enterprise compliance until verified in product code."
                />

                <Card accent>
                  <CardHeader title="Safe public wording" />
                  <Stack>
                    {safeWording.map((item) => (
                      <PulseCardText key={item}>{item}</PulseCardText>
                    ))}
                  </Stack>
                </Card>
              </div>
            </Stack>
          </DocsLayout>
        </Section>
      </Page>
    </SiteShell>
  );
}
