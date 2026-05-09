import type { MetadataRoute } from "next";

const siteUrl = "https://www.metraly.io";
const lastModified = new Date("2026-05-10");

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/demo", priority: 0.9, changeFrequency: "weekly" },
  { path: "/docs", priority: 0.9, changeFrequency: "weekly" },
  { path: "/pricing", priority: 0.8, changeFrequency: "weekly" },
  { path: "/trust", priority: 0.8, changeFrequency: "monthly" },
  { path: "/ai", priority: 0.7, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
