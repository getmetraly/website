import { SiteShell } from "@/components/site-shell";
import {
  ButtonLink,
  Card,
  CardHeader,
  CardLink,
  CardText,
  Grid,
  Icon,
  Page,
  Section,
  SectionHeader,
  Stack,
  StatusPill,
} from "@/components/ui/primitives";

const posts = [
  {
    title: "Why engineering intelligence should be self-hosted",
    teaser:
      "A practical argument for keeping repository, CI/CD, incident, and team signals inside the customer's infrastructure boundary.",
    status: "Draft idea",
    date: "May 2026",
    href: "/blog/self-hosted-engineering-intelligence",
    tags: ["Self-hosted", "Trust", "Engineering intelligence"],
  },
  {
    title: "DORA metrics are useful, but they are not enough",
    teaser:
      "How delivery metrics become more actionable when connected with bottlenecks, review flow, CI health, and role-specific dashboards.",
    status: "Draft idea",
    date: "May 2026",
    href: "/blog/dora-metrics-not-enough",
    tags: ["DORA", "Delivery", "Metrics"],
  },
  {
    title: "Building Metraly in public: from synthetic demo to real connectors",
    teaser:
      "A transparent product-progress post about what exists now, what is synthetic, and what needs to become real before production claims.",
    status: "Planned",
    date: "May 2026",
    href: "/blog/building-metraly-in-public",
    tags: ["Build in public", "Roadmap", "Open core"],
  },
];

const ideas = [
  [
    "Founder notes",
    "Short, transparent updates about product decisions, claim safety, trust boundaries, and the path from preview to production readiness.",
    "X / LinkedIn",
  ],
  [
    "Deep dives",
    "Long-form technical articles about engineering metrics, data modeling, self-hosting, privacy-first AI, and plugin trust.",
    "Blog / Medium / Dev.to",
  ],
  [
    "Community prompts",
    "Discussion starters for Reddit, Hacker News-style communities, and engineering leadership groups.",
    "Reddit / communities",
  ],
];

const channels = [
  ["Website blog", "Canonical long-form posts, product thinking, and durable documentation-adjacent articles."],
  ["X.com", "Short build-in-public updates, launches, visuals, and opinionated engineering intelligence threads."],
  ["LinkedIn", "Leadership-oriented posts for CTOs, VPs Engineering, team leads, and platform leaders."],
  ["Reddit", "Careful discussion posts in relevant communities without overpromising or sounding promotional."],
  ["Dev.to / Medium", "Republished technical explainers and practical guides with canonical links back to Metraly."],
  ["GitHub Discussions", "Technical community feedback, roadmap discussions, and contribution-oriented threads."],
];

export const metadata = {
  title: "Blog — Metraly",
  description:
    "Metraly blog ideas, product notes, engineering intelligence posts, and community content planning.",
};

export default function BlogPage() {
  return (
    <SiteShell>
      <Page>
        <Section center>
          <SectionHeader
            eyebrow="Blog"
            title="Build trust before asking teams to connect engineering data."
            description="Metraly blog will collect product notes, technical explainers, community posts, and build-in-public updates about self-hosted engineering intelligence."
          />

          <Stack>
            <div>
              <ButtonLink href="/docs" variant="ghost">
                Read public docs
              </ButtonLink>{" "}
              <ButtonLink href="/demo">
                Try synthetic demo <Icon name="arrowRight" />
              </ButtonLink>
            </div>
          </Stack>
        </Section>

        <Section tone="surface">
          <SectionHeader
            eyebrow="Latest drafts"
            title="Article pipeline."
            description="Initial post ideas are intentionally status-labeled. Drafts should stay claim-safe until the matching product evidence exists."
          />

          <Grid columns={3}>
            {posts.map((post) => (
              <CardLink key={post.title} href={post.href}>
                <CardHeader title={post.title} status={post.status} />
                <CardText>{post.teaser}</CardText>
                <Stack>
                  <CardText>{post.date}</CardText>
                  <div>
                    {post.tags.map((tag) => (
                      <StatusPill key={tag}>{tag}</StatusPill>
                    ))}
                  </div>
                </Stack>
              </CardLink>
            ))}
          </Grid>
        </Section>

        <Section>
          <SectionHeader
            eyebrow="Content strategy"
            title="Three types of posts."
            description="The blog should make Metraly more recognizable without turning public content into unsupported product claims."
          />

          <Grid columns={3}>
            {ideas.map(([title, body, channel]) => (
              <Card key={title}>
                <CardHeader title={title} status={channel} />
                <CardText>{body}</CardText>
              </Card>
            ))}
          </Grid>
        </Section>

        <Section tone="surface">
          <SectionHeader
            eyebrow="Distribution"
            title="Where each article type should live."
            description="Long-form posts should live on the website first. Social and community channels should adapt the same idea into the right format."
          />

          <Grid columns={3}>
            {channels.map(([title, body]) => (
              <Card key={title}>
                <CardHeader title={title} />
                <CardText>{body}</CardText>
              </Card>
            ))}
          </Grid>
        </Section>

        <Section width="small" center>
          <SectionHeader
            title="Next: turn ideas into a two-week publishing plan."
            description="The next layer can add a status file, planned publishing dates, target channels, article briefs, and claim-safe review checkpoints."
          />
          <ButtonLink href="/docs" variant="ghost">
            Review claim-safe docs
          </ButtonLink>
        </Section>
      </Page>
    </SiteShell>
  );
}
