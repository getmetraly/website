import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // Legacy .html routes → new App Router paths
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

export default nextConfig;
