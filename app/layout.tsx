import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./shell-polish.css";

const siteUrl = "https://www.metraly.io";
const defaultTitle = "Metraly — Self-Hosted Engineering Intelligence";
const defaultDescription =
  "Self-hosted engineering intelligence for privacy-conscious teams that need delivery flow, DORA metrics, CI/CD health, bottleneck analysis, and controlled engineering data boundaries.";
const dashboardPreviewImage = "/images/vp-dashboard.png";

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

export const viewport: Viewport = {
  themeColor: "#0B0F14",
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Metraly",
  },
  description: defaultDescription,
  applicationName: "Metraly",
  authors: [{ name: "Metraly" }],
  creator: "Metraly",
  publisher: "Metraly",
  category: "DeveloperApplication",
  keywords: [
    "self-hosted engineering intelligence",
    "DORA metrics dashboard",
    "developer productivity analytics",
    "engineering analytics",
    "CI/CD analytics",
    "pull request bottlenecks",
    "engineering data sovereignty",
    "privacy-first engineering analytics",
  ],
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
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    siteName: "Metraly",
    type: "website",
    locale: "en_US",
    url: "/",
    images: [
      {
        url: dashboardPreviewImage,
        width: 2240,
        height: 1260,
        alt: "Metraly VP Engineering dashboard using synthetic engineering data",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [dashboardPreviewImage],
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
      <body>{children}</body>
    </html>
  );
}
