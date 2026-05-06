import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import {
  ButtonLink,
  Card,
  CardHeader,
  CardText,
  Grid,
  Icon,
  Note,
  Page,
  Prose,
  Section,
  Stack,
} from "@/components/ui/primitives";

export const metadata = {
  title: "Trust — Metraly",
  description:
    "Trust principles for Metraly: self-hosted engineering intelligence, synthetic demo data, no-hidden-telemetry policy, benchmark-gated AI claims, and plugin marketplace review gates.",
};

const heroBadgeStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "6px 14px",
  borderRadius: 20,
  background: "color-mix(in srgb, var(--purple) 12%, transparent)",
  border: "1px solid color-mix(in srgb, var(--purple) 24%, transparent)",
  color: "var(--purple)",
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: 0.3,
  marginBottom: 28,
  position: "relative" as const,
  zIndex: 1,
};

const eyebrowStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  color: "var(--cyan)",
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: 1,
  marginBottom: 0,
  textTransform: "uppercase" as const,
};

const headingStyle = {
  marginTop: 14,
};

const listIconStyle = {
  width: 18,
  height: 18,
  flex: "0 0 auto",
  marginTop: 4,
  color: "color-mix(in srgb, var(--cyan) 82%, white)",
};

const listItemStyle = {
  display: "flex",
  alignItems: "flex-start",
  gap: 8,
  paddingLeft: 0,
};

function Eyebrow({ children }: { children: string }) {
  return (
    <div style={eyebrowStyle}>
      <span style={{ width: 20, height: 2, borderRadius: 999, background: "linear-gradient(90deg, var(--cyan), var(--purple))" }} />
      {children}
    </div>
  );
}

function ArrowItem({ children }: { children: string }) {
  return (
    <li style={listItemStyle}>
      <Icon name="arrowRight" style={listIconStyle} />
      <span>{children}</span>
    </li>
  );
}

const principles = [
  [
    "Self-hosted first",
    "Metraly is designed around customer-controlled deployment, so engineering-system data can stay inside your environment instead of being routed through another SaaS by default.",
    "Design principle",
  ],
  [
    "Synthetic demo by default",
    "The public demo uses synthetic engineering data only. No login, no credentials, no real company data.",
    "Live website behavior",
  ],
  [
    "No hidden telemetry policy",
    "Outbound product telemetry, if introduced, must be opt-in/default-off, admin-visible, documented, and forbidden from collecting sensitive engineering data.",
    "Policy defined",
  ],
  [
    "AI claims are benchmark-gated",
    "AI is a product direction, not a blanket claim. Public AI quality and safety claims require benchmark evidence for correctness, grounding, usefulness, privacy leakage, and prompt-injection resistance.",
    "Benchmark pending",
  ],
  [
    "Plugins require review gates",
    "A plugin marketplace is a trust product, not just a distribution page. Marketplace claims require manifests, permissions, signing, review, update controls, and revocation.",
    "Policy defined",
  ],
  [
    "Claims stay status-labeled",
    "Metraly uses public status labels so designed, planned, in-progress, and implemented capabilities are not mixed together.",
    "Governance",
  ],
];

export default function TrustPage() {
  return (
    <SiteShell>
      <Page>
        <Section hero center>
          <Prose className="content-hero-centered">
            <div style={heroBadgeStyle}>Trust · Self-hosted by design · Claim-safe roadmap</div>

            <h1>Trust starts with keeping engineering data under your control.</h1>
            <p>
              Metraly is being built as a self-hosted Engineering Intelligence
              platform for teams that need visibility without making another SaaS
              the default boundary for repository, CI/CD, project and team signals.
            </p>

            <Stack>
              <div>
                <ButtonLink href="/privacy">Read the privacy policy</ButtonLink>
                <ButtonLink href="/demo" variant="ghost">Explore the synthetic demo</ButtonLink>
              </div>
            </Stack>
          </Prose>
        </Section>

        <Section tone="surface">
          <Prose>
            <Eyebrow>Principles</Eyebrow>
            <h2 style={headingStyle}>Trust principles</h2>
          </Prose>

          <Grid columns={3}>
            {principles.map(([title, body, status]) => (
              <Card key={title}>
                <CardHeader title={title} status={status} />
                <CardText>{body}</CardText>
              </Card>
            ))}
          </Grid>
        </Section>

        <Section>
          <Prose>
            <Eyebrow>Data control</Eyebrow>
            <h2 style={headingStyle}>What stays under your control</h2>
            <p>
              Engineering data can expose architecture, customers, roadmap,
              incidents and security work. Metraly is designed so sensitive
              engineering signals can be analyzed in customer-controlled
              environments rather than sent to a SaaS analytics backend by default.
            </p>
            <ul>
              <ArrowItem>Repository and pull request metadata</ArrowItem>
              <ArrowItem>Commit and review patterns</ArrowItem>
              <ArrowItem>Issue and project signals</ArrowItem>
              <ArrowItem>Build and deployment events</ArrowItem>
              <ArrowItem>Incident and recovery data</ArrowItem>
              <ArrowItem>Team and workflow metrics</ArrowItem>
            </ul>
          </Prose>

          <Note>
            The public website and demo do not process real customer engineering
            data. The demo uses synthetic Sandbox Inc. data only.
          </Note>
        </Section>

        <Section tone="surface">
          <Prose>
            <Eyebrow>Private AI</Eyebrow>
            <h2 style={headingStyle}>AI should explain engineering data without becoming a data leak.</h2>
            <p>
              Metraly is designed around privacy-first AI patterns such as local
              models, bring-your-own providers and controlled data exposure. AI
              features remain status-labeled and benchmark-gated until implementation
              and evaluation results exist.
            </p>
            <ul>
              <ArrowItem>Designed Dual-LLM architecture</ArrowItem>
              <ArrowItem>Synthetic examples first</ArrowItem>
              <ArrowItem>Prompt-injection tests planned in the AI benchmark</ArrowItem>
              <ArrowItem>Sensitive-data leakage checks required before public AI safety claims</ArrowItem>
              <ArrowItem>Local, BYO and external model modes treated as different trust models</ArrowItem>
            </ul>
          </Prose>
        </Section>

        <Section>
          <Prose>
            <Eyebrow>Plugin trust</Eyebrow>
            <h2 style={headingStyle}>Plugin trust needs more than a marketplace page.</h2>
            <p>
              Metraly has a designed plugin architecture and a plugin review policy
              for future marketplace trust. A public plugin marketplace should not be
              claimed until manifest validation, permission review, package signing,
              update controls, revocation and install flows are implemented.
            </p>
            <ul>
              <ArrowItem>Plugin manifest requirements defined</ArrowItem>
              <ArrowItem>Permission model defined</ArrowItem>
              <ArrowItem>Signing and package integrity policy defined</ArrowItem>
              <ArrowItem>Revocation policy defined</ArrowItem>
              <ArrowItem>Marketplace launch gates documented</ArrowItem>
            </ul>
          </Prose>
        </Section>

        <Section tone="surface">
          <Prose>
            <Eyebrow>Telemetry</Eyebrow>
            <h2 style={headingStyle}>No hidden telemetry is a product requirement, not a slogan.</h2>
            <p>
              Metraly documentation defines a no-hidden-telemetry policy. Outbound
              product telemetry, if introduced, must be opt-in/default-off,
              admin-visible, previewable and limited to minimal aggregated
              diagnostics.
            </p>
            <p>Product telemetry must not collect:</p>
            <ul>
              <ArrowItem>source code, repository names or organization names;</ArrowItem>
              <ArrowItem>commit messages, PR or issue titles;</ArrowItem>
              <ArrowItem>personal data, secrets, tokens or credentials;</ArrowItem>
              <ArrowItem>raw LLM prompts or raw customer logs.</ArrowItem>
            </ul>
          </Prose>
        </Section>

        <Section>
          <Prose>
            <Eyebrow>Compliance</Eyebrow>
            <h2 style={headingStyle}>Compliance wording</h2>
            <p>
              Metraly is designed for privacy-conscious and regulated teams, and the
              project has early trust artefacts: threat model, telemetry policy,
              plugin review policy and claim policy.
            </p>
          </Prose>

          <Note>
            Metraly should not be described as SOC2-ready, HIPAA-ready,
            GDPR-compliant, or Enterprise-ready unless formal controls, legal
            review and implementation evidence support the exact claim.
          </Note>
        </Section>

        <Section tone="surface">
          <Prose>
            <Eyebrow>Resources</Eyebrow>
            <h2 style={headingStyle}>Useful links</h2>
            <ul>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/docs">Public docs</Link></li>
              <li><Link href="/demo">Synthetic demo</Link></li>
              <li><Link href="/ai">AI direction</Link></li>
            </ul>
          </Prose>
        </Section>
      </Page>
    </SiteShell>
  );
}
