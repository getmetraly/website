import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Metraly — Engineering Metrics, On Your Infrastructure",
  description:
    "Metraly is an AGPLv3 open-core engineering metrics platform where Git, CI/CD, and project data stays on your own infrastructure.",
  openGraph: {
    title: "Metraly — Engineering Metrics, On Your Infrastructure",
    description:
      "Track DORA metrics, CI/CD performance, and team velocity without sending a byte to someone else's cloud.",
    images: ["https://placeholder.metraly.io/og-image.png"],
    type: "website",
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
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
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
                window.MetralyTheme = { apply: apply, toggle: function() {
                  var current = document.documentElement.getAttribute('data-theme') || 'dark';
                  apply(current === 'dark' ? 'light' : 'dark');
                }, get: function() {
                  return document.documentElement.getAttribute('data-theme') || 'dark';
                }};
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
