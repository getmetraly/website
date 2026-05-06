import type { ReactNode } from "react";
import { ArticleToc } from "@/components/blog/article-toc";
import { Icon, Prose, SectionHeader, Stack, StatusPill } from "@/components/ui/primitives";
import type { BlogPost } from "@/content/blog/posts";
import styles from "./article-shell.module.css";

type ArticlePost = BlogPost & { readingTime: string };

export function ArticleShell({ children }: { children: ReactNode }) {
  return <Stack className={styles.articleLayout}>{children}</Stack>;
}

export function ArticleJsonLd({ value }: { value: object }) {
  return (
    <script
      type="application/ld+json"
      className={styles.articleJsonLd}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(value) }}
    />
  );
}

export function ArticleHeader({ post }: { post: ArticlePost }) {
  return (
    <>
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
    </>
  );
}

export function ArticleContents({ post }: { post: BlogPost }) {
  return <ArticleToc sections={post.sections.map(({ id, title }) => ({ id, title }))} />;
}

export function ArticleBody({ post }: { post: BlogPost }) {
  return (
    <Prose className={styles.articleBody}>
      <div id="article-body">
        <p className={styles.articleAudience}>
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
  );
}
