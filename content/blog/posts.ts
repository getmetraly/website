export type BlogPostStatus = "Draft idea" | "Planned" | "Drafting" | "Review" | "Published";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  status: BlogPostStatus;
  date: string;
  updated?: string;
  author: string;
  readingTime: string;
  tags: string[];
  canonicalPath: string;
  audience: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "self-hosted-engineering-intelligence",
    title: "Why engineering intelligence should be self-hosted",
    excerpt:
      "A practical argument for keeping repository, CI/CD, incident, and team signals inside the customer's infrastructure boundary.",
    status: "Draft idea",
    date: "May 2026",
    author: "Metraly team",
    readingTime: "5 min read",
    tags: ["Self-hosted", "Trust", "Engineering intelligence"],
    canonicalPath: "/blog/self-hosted-engineering-intelligence",
    audience: "CTOs, VPs Engineering, platform leaders, and privacy-conscious engineering teams.",
    body: [
      "Engineering intelligence depends on sensitive signals: repositories, pull requests, build failures, deployment events, incidents, team structure, and workflow bottlenecks.",
      "Those signals are useful precisely because they are close to the way a company builds software. They can reveal architecture, delivery risk, customer pressure, roadmap priority, operational maturity, and security work.",
      "Metraly is being built around a self-hosted first model so teams can evaluate engineering health without making another SaaS the default boundary for engineering data.",
      "The public demo uses synthetic data. Live connectors and production workflows should stay status-labeled until the product evidence exists.",
    ],
  },
  {
    slug: "dora-metrics-not-enough",
    title: "DORA metrics are useful, but they are not enough",
    excerpt:
      "How delivery metrics become more actionable when connected with bottlenecks, review flow, CI health, and role-specific dashboards.",
    status: "Draft idea",
    date: "May 2026",
    author: "Metraly team",
    readingTime: "6 min read",
    tags: ["DORA", "Delivery", "Metrics"],
    canonicalPath: "/blog/dora-metrics-not-enough",
    audience: "Engineering leaders and teams that want metrics to drive better execution conversations.",
    body: [
      "DORA metrics are a useful starting point for understanding software delivery. They help teams talk about deployment frequency, lead time, change failure rate, and recovery time.",
      "But metrics alone rarely explain why work slows down. Review queues, flaky pipelines, unclear ownership, and overloaded maintainers can all hide behind a single aggregate number.",
      "Metraly is designed to connect delivery metrics with role-specific dashboards and workflow context, starting with synthetic examples and progressing toward real connectors.",
      "The goal is not to replace engineering judgment. The goal is to make the right bottlenecks visible earlier.",
    ],
  },
  {
    slug: "building-metraly-in-public",
    title: "Building Metraly in public: from synthetic demo to real connectors",
    excerpt:
      "A transparent product-progress post about what exists now, what is synthetic, and what needs to become real before production claims.",
    status: "Planned",
    date: "May 2026",
    author: "Metraly team",
    readingTime: "4 min read",
    tags: ["Build in public", "Roadmap", "Open core"],
    canonicalPath: "/blog/building-metraly-in-public",
    audience: "Early users, contributors, design partners, and community members following product progress.",
    body: [
      "Metraly is being built in public with a deliberate distinction between real UI, synthetic demo data, implemented product paths, and roadmap capabilities.",
      "That distinction matters because engineering intelligence products can overclaim quickly. Public language should make maturity visible instead of hiding it.",
      "The current website and demo are designed to show product direction without asking visitors to connect real company data.",
      "The next product step is to keep turning synthetic flows into verified implementation: dashboard editing, rendering, connectors, and production use cases.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
