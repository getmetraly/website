import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}