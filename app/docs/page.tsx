import { SiteShell } from "@/components/site-shell";
import styles from "@/components/marketing/marketing.module.css";
import {
  ButtonLink,
  Card,
  CardHeader,
  CardLink,
  CardText,
  Grid,
  Icon,
  Page,
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
    title: "Brandbook",
    desc: "Review the canonical Metraly visual direction, telemetry-first design language, pulse-wave system and component standards.",
    href: "https://github.com/getmetraly/brandbook",
    label: "Design",
    external: true,
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

const quickStartActionsStyle = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap" as const,
  alignItems: "center",
  marginTop: 20,
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
    "Metraly public documentation for quick start, self-hosting, product status, demo, pricing, brandbook, and claim-safe product boundaries.",
};

export default function DocsPage() {
  return (
    <SiteShell footerClassName={styles.docsFooter}>
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
            Public documentation for the self-hosted engineering intelligence platform: quick start, demo, status, pricing, brandbook, and safe product boundaries.
          </p>
          <div className={styles.heroActions}>
            <ButtonLink href="#quick-start">Start reading <Icon name="arrowRight" /></ButtonLink>
            <ButtonLink href="/demo" variant="ghost">
              Try synthetic demo
            </ButtonLink>
          </div>
        </section>

        <div className={styles.docsBody}>
          <div className={styles.docsContent}>
          <Stack>
            <div id="documentation-map" className={styles.docsPanelSurface}>
              <div className={styles.docsPanelInner}>
                <SectionHeader
                  eyebrow="Documentation map"
                  title="Start with the public docs."
                  description="These sections are copied and maintained in the website so readers do not need access to the private planning repository."
                />

                <Grid columns={3}>
                  {docSections.map((doc) => (
                    <CardLink
                      key={doc.title}
                      href={doc.href}
                      target={doc.external ? "_blank" : undefined}
                      rel={doc.external ? "noopener noreferrer" : undefined}
                    >
                      <CardHeader title={doc.title} status={doc.label} />
                      <CardText>{doc.desc}</CardText>
                    </CardLink>
                  ))}
                </Grid>
              </div>
            </div>
          </Stack>
          </div>
        </div>
      </Page>
    </SiteShell>
  );
}
