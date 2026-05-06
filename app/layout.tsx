import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Metraly — Engineering Intelligence That Doesn't Leak",
  description:
    "Self-hosted Engineering Intelligence for privacy-conscious teams, starting with real UI, synthetic demo data, and a claim-safe roadmap toward connectors, AI insights, and plugin extensibility.",
  openGraph: {
    title: "Metraly — Engineering Intelligence That Doesn't Leak",
    description:
      "Explore Metraly with synthetic engineering data and status-labeled roadmap capabilities.",
    type: "website",
    url: "https://metraly.io",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" className={`${geistSans.variable} ${geistMono.variable}`}>
      <Script
        id="metraly-theme-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
(function() {
  var STORAGE_KEY = 'metraly-theme';

  function getPreferred() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') return stored;
    } catch (e) {}

    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {}
  }

  apply(getPreferred());

  window.MetralyTheme = {
    apply: apply,
    toggle: function() {
      var current = document.documentElement.getAttribute('data-theme') || 'dark';
      apply(current === 'dark' ? 'light' : 'dark');
    },
    get: function() {
      return document.documentElement.getAttribute('data-theme') || 'dark';
    }
  };
})();
          `,
        }}
      />
      <body>{children}</body>
    </html>
  );
}