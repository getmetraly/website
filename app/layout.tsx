import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./shell-polish.css";

const plusJakarta = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const jetBrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const siteUrl = "https://www.metraly.io";
const siteTitle = "Metraly — Engineering Intelligence That Doesn't Leak";
const siteDescription =
  "Self-hosted Engineering Intelligence for privacy-conscious teams, starting with real UI, synthetic demo data, and a claim-safe roadmap toward connectors, AI insights, and plugin extensibility.";

export const viewport: Viewport = {
  themeColor: "#0B0F14",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Metraly",
  },
  description: siteDescription,
  applicationName: "Metraly",
  creator: "Metraly",
  publisher: "Metraly",
  category: "DeveloperApplication",
  keywords: [
    "Metraly",
    "engineering intelligence",
    "self-hosted engineering analytics",
    "DORA metrics",
    "developer productivity analytics",
    "CI/CD analytics",
    "engineering dashboard",
    "private engineering data",
    "open core developer tools",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/icon.svg"],
    apple: ["/icon.svg"],
  },
  openGraph: {
    title: siteTitle,
    description: "Explore Metraly with synthetic engineering data and status-labeled roadmap capabilities.",
    type: "website",
    url: siteUrl,
    siteName: "Metraly",
    locale: "en_US",
    images: [
      {
        url: "/images/vp-dashboard.png",
        width: 2240,
        height: 1260,
        alt: "Metraly VP Engineering dashboard using synthetic data",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/vp-dashboard.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" className={`${plusJakarta.variable} ${jetBrainsMono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  var STORAGE_KEY = 'metraly-theme';
  function getPreferred() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
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
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
