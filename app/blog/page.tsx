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
import { blogPosts } from "@/content/blog/posts";

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
  const [heroPost, ...draftPosts] = blogPosts;

  return (
    <SiteShell>
      <Page>
        <Section hero center>
          <Stack>
            <div>
              <StatusPill>Blog</StatusPill>
            </div>
          </Stack>

          <SectionHeader
            title={
              <>
                Build trust before asking teams
                <br />
                to connect engineering data.
              </>
            }
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

        {heroPost ? (
          <Section tone="surface">
            <SectionHeader
              eyebrow="Featured draft"
              title="Start with one clear public argument."
              description="The first article acts like a public-facing hero post before the publishing pipeline becomes automated."
            />

            <CardLink href={heroPost.canonicalPath} featured accent>
              <CardHeader title={heroPost.title} status={heroPost.status} />
              <CardText>{heroPost.excerpt}</CardText>

              <Stack>
                <CardText>
                  {heroPost.date} · {heroPost.readingTime}
                </CardText>

                <div>
                  {heroPost.tags.map((tag) => (
                    <StatusPill key={tag}>{tag}</StatusPill>
                  ))}
                </div>
              </Stack>
            </CardLink>
          </Section>
        ) : null}

        <Section>
          <SectionHeader
            eyebrow="Latest drafts"
            title="Article pipeline."
            description="Initial post ideas are intentionally status-labeled. Drafts should stay claim-safe until the matching product evidence exists."
          />

          <Grid columns={3}>
            {draftPosts.map((post) => (
              <CardLink key={post.slug} href={post.canonicalPath}>
                <CardHeader title={post.title} status={post.status} />
                <CardText>{post.excerpt}</CardText>

                <Stack>
                  <CardText>
                    {post.date} · {post.readingTime}
                  </CardText>

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

        <Section tone="surface">
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

        <Section>
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

        <Section width="small" center tone="surface">
          <SectionHeader
            title="Next: turn ideas into a two-week publishing plan."
            description="The next layer can add planned publishing dates, target channels, article briefs, and claim-safe review checkpoints."
          />

          <ButtonLink href="/docs" variant="ghost">
            Review claim-safe docs
          </ButtonLink>
        </Section>
      </Page>
    </SiteShell>
  );
}
