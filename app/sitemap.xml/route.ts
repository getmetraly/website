import { blogPosts } from "@/content/blog/posts";

const SITE_URL = "https://metraly.io";

const staticRoutes = [
  "",
  "/pricing",
  "/docs",
  "/blog",
  "/demo",
  "/ai",
  "/trust",
  "/privacy",
  "/terms",
];

function urlEntry(path: string, priority: string) {
  return `
    <url>
      <loc>${SITE_URL}${path}</loc>
      <changefreq>weekly</changefreq>
      <priority>${priority}</priority>
    </url>`;
}

export function GET() {
  const staticEntries = staticRoutes
    .map((path) => urlEntry(path || "/", path === "" ? "1.0" : "0.8"))
    .join("");

  const blogEntries = blogPosts
    .map((post) => urlEntry(post.canonicalPath, post.status === "Published" ? "0.8" : "0.5"))
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticEntries}
      ${blogEntries}
    </urlset>`;

  return new Response(xml.trim(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
