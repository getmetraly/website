import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import heroStyles from "@/components/marketing/marketing.module.css";
import {
  CardHeader,
  CardLink,
  CardText,
  Grid,
  Page,
  Section,
  SectionHeader,
} from "@/components/ui/primitives";

const roleCards = [
  {
    title: "VP Engineering",
    desc: "Delivery flow, review queues, DORA metrics, and execution bottlenecks.",
    href: "/demo-app/#/dash-vp",
  },
  {
    title: "CTO",
    desc: "Engineering health, organizational risk, platform visibility, and investment signals.",
    href: "/demo-app/#/dash-cto",
  },
  {
    title: "Tech Lead",
    desc: "Team execution, service ownership, PR throughput, and operational load.",
    href: "/demo-app/#/dash-tl",
  },
  {
    title: "DevOps",
    desc: "CI/CD health, incidents, deployment quality, and infrastructure visibility.",
    href: "/demo-app/#/dash-devops",
  },
  {
    title: "Individual Contributor",
    desc: "My PRs, review queue, workload, and personal delivery insights.",
    href: "/demo-app/#/dash-ic",
  },
  {
    title: "Dashboard Wizard",
    desc: "Synthetic dashboard setup and layout generation experience.",
    href: "/demo-app/#/dash-wizard",
  },
];

const advancedAreas = [
  {
    title: "Metric Explorer",
    desc: "Inspect delivery metrics, trend shifts, lead time distribution, and synthetic DORA analytics.",
    status: "Preview",
    href: "/demo-app/#/metrics",
  },
  {
    title: "AI Workspace",
    desc: "Explore synthetic engineering AI flows, local-model direction, and explainability patterns.",
    status: "Designed",
    href: "/demo-app/#/ai",
  },
  {
    title: "Plugins",
    desc: "Preview plugin governance, review gates, permissions, and extensibility concepts.",
    status: "Planned",
    href: "/demo-app/#/plugins",
  },
  {
    title: "Connector Wizard",
    desc: "Simulated GitHub and CI/CD connector onboarding before real integrations are connected.",
    status: "Next",
    href: "/demo-app/#/wizard",
  },
];

export const metadata = {
  title: "Synthetic Demo — Metraly",
  description:
    "Explore Metraly using synthetic engineering dashboards and sandbox preview environments. No login, credentials, or real company data required.",
};

export default function DemoPage() {
  return (
    <SiteShell>
      <Page>
        <section className={heroStyles.hero}>
          <div className={heroStyles.heroGlow} />

          <div className={heroStyles.badge}>
            SYNTHETIC DEMO · No real company data
          </div>

          <h1 className={heroStyles.heroTitle}>
            Explore the Metraly
            <br />
            <span className={heroStyles.gradientText}>engineering sandbox.</span>
          </h1>

          <p className={heroStyles.heroSub}>
            Role-based dashboards and preview engineering insights built on synthetic data. No login, credentials, or real company data required.
          </p>

          <div className={heroStyles.heroActions}>
            <a href="/demo-app/" className="btn-primary">
              Open sandbox →
            </a>
            <Link href="/" className="btn-ghost btn-large">
              Back to homepage
            </Link>
          </div>
        </section>

        <Section tone="surface">
          <SectionHeader
            eyebrow="Role dashboards"
            title="Explore engineering perspectives."
            description="Each dashboard is built on synthetic engineering data to demonstrate how different roles could interact with Metraly."
          />

          <Grid columns={3}>
            {roleCards.map((card) => (
              <CardLink key={card.title} href={card.href}>
                <CardHeader title={card.title} status="Demo" />
                <CardText>{card.desc}</CardText>
              </CardLink>
            ))}
          </Grid>
        </Section>

        <Section>
          <SectionHeader
            eyebrow="Advanced areas"
            title="Beyond dashboards."
            description="Explore additional synthetic product areas including metrics, AI workflows, plugins, and connector setup experiences."
          />

          <Grid columns={4}>
            {advancedAreas.map((item) => (
              <CardLink key={item.title} href={item.href} accent>
                <CardHeader title={item.title} status={item.status} />
                <CardText>{item.desc}</CardText>
              </CardLink>
            ))}
          </Grid>
        </Section>

        <Section width="small" center>
          <SectionHeader
            title="Synthetic demo environment."
            description="This environment uses mock engineering data and preview functionality to demonstrate product direction before live integrations are connected. Do not enter real credentials, source tokens, repository names, customer data, secrets, or personal information."
          />

          <div>
            <a href="/demo-app/" className="btn-primary">
              Launch sandbox →
            </a>
          </div>
        </Section>
      </Page>
    </SiteShell>
  );
}
