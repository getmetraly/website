export type BlogPostStatus = "Draft idea" | "Planned" | "Drafting" | "Review" | "Published";

export type BlogPostSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

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
  sections: BlogPostSection[];
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
    sections: [
      {
        id: "why-the-boundary-matters",
        title: "Why the data boundary matters",
        paragraphs: [
          "Engineering intelligence depends on sensitive signals: repositories, pull requests, build failures, deployment events, incidents, team structure, and workflow bottlenecks.",
          "Those signals are useful precisely because they are close to the way a company builds software. They can reveal architecture, delivery risk, customer pressure, roadmap priority, operational maturity, and security work.",
        ],
      },
      {
        id: "self-hosted-first",
        title: "Self-hosted first as a product principle",
        paragraphs: [
          "Metraly is being built around a self-hosted first model so teams can evaluate engineering health without making another SaaS the default boundary for engineering data.",
          "This does not mean every team has the same deployment needs. It means the default product direction should respect customer-controlled infrastructure and avoid hidden data movement.",
        ],
      },
      {
        id: "what-is-real-now",
        title: "What is real now",
        paragraphs: [
          "The public demo uses synthetic data. Live connectors and production workflows should stay status-labeled until the product evidence exists.",
          "That separation keeps the public story honest while still letting teams understand the intended product direction before connecting real engineering systems.",
        ],
      },
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
    sections: [
      {
        id: "metrics-are-a-starting-point",
        title: "Metrics are a starting point",
        paragraphs: [
          "DORA metrics are a useful starting point for understanding software delivery. They help teams talk about deployment frequency, lead time, change failure rate, and recovery time.",
          "But the number itself rarely explains what to do next. Leaders still need context about where work is blocked and which systems are creating delivery friction.",
        ],
      },
      {
        id: "what-aggregates-hide",
        title: "What aggregate metrics hide",
        paragraphs: [
          "But metrics alone rarely explain why work slows down. Review queues, flaky pipelines, unclear ownership, and overloaded maintainers can all hide behind a single aggregate number.",
          "A delivery dashboard becomes more useful when it connects the metric with the bottleneck that a team can actually act on.",
        ],
      },
      {
        id: "toward-actionable-context",
        title: "Toward actionable context",
        paragraphs: [
          "Metraly is designed to connect delivery metrics with role-specific dashboards and workflow context, starting with synthetic examples and progressing toward real connectors.",
          "The goal is not to replace engineering judgment. The goal is to make the right bottlenecks visible earlier.",
        ],
      },
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
    sections: [
      {
        id: "why-build-in-public",
        title: "Why build in public",
        paragraphs: [
          "Metraly is being built in public with a deliberate distinction between real UI, synthetic demo data, implemented product paths, and roadmap capabilities.",
          "That distinction matters because engineering intelligence products can overclaim quickly. Public language should make maturity visible instead of hiding it.",
        ],
      },
      {
        id: "synthetic-before-real-data",
        title: "Synthetic before real data",
        paragraphs: [
          "The current website and demo are designed to show product direction without asking visitors to connect real company data.",
          "Synthetic data gives teams a safe way to inspect workflows, role dashboards, and product direction before live connectors are ready.",
        ],
      },
      {
        id: "turning-preview-into-product",
        title: "Turning preview into product",
        paragraphs: [
          "The next product step is to keep turning synthetic flows into verified implementation: dashboard editing, rendering, connectors, and production use cases.",
          "Each step should keep the same public discipline: say what exists, label what is planned, and avoid production claims before there is product evidence.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
