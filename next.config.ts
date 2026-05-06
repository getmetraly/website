import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import { remarkCodeBlocks } from "./mdx/remark-code-blocks.mjs";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],

  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/pricing.html",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/docs.html",
        destination: "/docs",
        permanent: true,
      },
      {
        source: "/login.html",
        destination: "/demo",
        permanent: true,
      },
      {
        source: "/privacy.html",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/terms.html",
        destination: "/terms",
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/demo-app",
        destination: "/demo-app/index.html",
      },
      {
        source: "/demo-app/",
        destination: "/demo-app/index.html",
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkCodeBlocks],
  },
});

export default withMDX(nextConfig);
