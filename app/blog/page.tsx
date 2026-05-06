import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import styles from "@/components/marketing/marketing.module.css";

const posts = [
  {
    title: "Why engineering intelligence should not leak by default",
    desc: "A build-in-public note on self-hosted engineering metrics, synthetic demos, and data boundaries.",
    status: "Drafting",
  },
  {
    title: "From synthetic dashboards to real engineering signals",
    desc: "How Metraly is staging product maturity before live Git, CI/CD, and workflow integrations are connected.",
    status: "Planned",
  },
  {
    title: "What claim-safe roadmap writing looks like",
    desc: "A practical approach to describing AI, plugins, and enterprise direction without overclaiming production readiness.",
    status: "Planned",
  },
];

export const metadata = {
  title: "Blog — Metraly",
  description:
    "Build-in-public notes about self-hosted engineering intelligence, product maturity, synthetic demos, and privacy-first engineering data workflows.",
};

export default function BlogPage() {
  return (
    <SiteShell>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.badge}>Blog · Build in public</div>
          <h1 className={styles.heroTitle}>
            Notes on building
            <br />
            <span className={styles.gradientText}>engineering intelligence.</span>
          </h1>
          <p className={styles.heroSub}>
            Product notes, roadmap thinking, trust boundaries, and lessons from building Metraly in the open.
          </p>
          <div className={styles.heroActions}>
            <Link href="/docs" className="btn-primary">Read docs →</Link>
            <Link href="/demo" className="btn-ghost btn-large">Try synthetic demo</Link>
          </div>
        </section>

        <section className={styles.surface}>
          <div className={styles.section}>
            <div className={styles.eyebrow}>Upcoming posts</div>
            <h2 className={styles.title}>The blog is being prepared.</h2>
            <p className={styles.sub}>
              The public blog surface is live so navigation does not dead-end. Long-form posts will be published as the documentation, demo, and product roadmap mature.
            </p>

            <div className={styles.grid3}>
              {posts.map((post) => (
                <article key={post.title} className={styles.card}>
                  <div className={styles.cardHead}>
                    <h3 className={styles.cardTitle}>{post.title}</h3>
                    <span className={styles.status}>{post.status}</span>
                  </div>
                  <p className={styles.cardDesc}>{post.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
