import { notFound } from "next/navigation";
import { ReadingProgress } from "@/components/blog/reading-progress";
import { SiteShell } from "@/components/site-shell";
import {
  ContentPage,
  Icon,
  Prose,
  Section,
  SectionHeader,
  Stack,
  StatusPill,
} from "@/components/ui/primitives";
import { blogPosts, getBlogPost } from "@/content/blog/posts";
import styles from "../blog.module.css";

const SITE_URL = "https://metraly.io";

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
    alternates: {
      canonical: `${SITE_URL}${post.canonicalPath}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${SITE_URL}${post.canonicalPath}`,
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    datePublished: post.date,
    mainEntityOfPage: `${SITE_URL}${post.canonicalPath}`,
  };

  return (
    <SiteShell>
      <ReadingProgress targetId="article-body" />
      <ContentPage>
        <Section width="small">
          <Stack className={styles.articleLayout}>
            <script
              type="application/ld+json"
              className={styles.articleJsonLd}
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div>
              <StatusPill>{post.status}</StatusPill>
            </div>

            <SectionHeader
              eyebrow="Metraly Blog"
              title={post.title}
              description={post.excerpt}
            />

            <div className={styles.articleMeta}>
              <StatusPill>{post.date}</StatusPill>
              <StatusPill>{post.readingTime}</StatusPill>
              <StatusPill>{post.author}</StatusPill>
            </div>

            <div className={styles.articleToc}>
              <div className={styles.articleTocTitle}>Contents</div>
              <div className={styles.articleTocLinks}>
                {post.sections.map((section) => (
                  <a key={section.id} href={`#${section.id}`}>
                    {section.title}
                  </a>
                ))}
              </div>
            </div>

            <Prose className={styles.articleBody}>
              <div id="article-body">
                <p>
                  <strong>Audience:</strong> {post.audience}
                </p>

                {post.sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className={styles.articleSection}
                  >
                    <h2 className={styles.articleHeading}>
                      {section.title}
                      <a
                        href={`#${section.id}`}
                        className={styles.articleAnchor}
                        aria-label={`Link to ${section.title}`}
                      >
                        <Icon name="external" />
                      </a>
                    </h2>

                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </section>
                ))}
              </div>
            </Prose>
          </Stack>
        </Section>
      </ContentPage>
    </SiteShell>
  );
}
