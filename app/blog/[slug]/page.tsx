import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import {
  ContentPage,
  Prose,
  Section,
  SectionHeader,
  Stack,
  StatusPill,
} from "@/components/ui/primitives";
import { blogPosts, getBlogPost } from "@/content/blog/posts";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} — Metraly Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://metraly.io${post.canonicalPath}`,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <SiteShell>
      <ContentPage>
        <Section width="small">
          <Stack>
            <div>
              <StatusPill>{post.status}</StatusPill>
            </div>

            <SectionHeader
              eyebrow="Metraly Blog"
              title={post.title}
              description={post.excerpt}
            />

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <StatusPill>{post.date}</StatusPill>
              <StatusPill>{post.readingTime}</StatusPill>
              <StatusPill>{post.author}</StatusPill>
            </div>

            <Prose>
              <p>
                <strong>Audience:</strong> {post.audience}
              </p>

              {post.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Prose>
          </Stack>
        </Section>
      </ContentPage>
    </SiteShell>
  );
}
