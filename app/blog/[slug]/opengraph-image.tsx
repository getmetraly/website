import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getBlogPost } from "@/content/blog/posts";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          color: "#f8fafc",
          background:
            "radial-gradient(circle at 20% 0%, rgba(168,85,247,0.35), transparent 34%), radial-gradient(circle at 86% 18%, rgba(0,229,204,0.22), transparent 30%), linear-gradient(135deg, #070a12 0%, #0f172a 58%, #151123 100%)",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 44,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 12,
                background: "linear-gradient(135deg, #00e5cc, #a855f7)",
                color: "#050816",
                fontSize: 24,
                fontWeight: 900,
              }}
            >
              M
            </div>
            <div style={{ fontSize: 28, fontWeight: 800 }}>Metraly</div>
          </div>
          <div
            style={{
              display: "flex",
              padding: "8px 14px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.16)",
              color: "#9fb3c8",
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            {post.status}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ color: "#00e5cc", fontSize: 22, fontWeight: 800, letterSpacing: 1.4, textTransform: "uppercase" }}>
            Metraly Blog · {post.readingTime}
          </div>
          <div style={{ maxWidth: 980, fontSize: 66, lineHeight: 1.02, letterSpacing: -3.2, fontWeight: 900 }}>
            {post.title}
          </div>
          <div style={{ maxWidth: 900, color: "#b8c4d6", fontSize: 25, lineHeight: 1.35 }}>
            {post.excerpt}
          </div>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {post.tags.slice(0, 3).map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "8px 12px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#dbe7f6",
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
