import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export const metadata = {
  title: "Privacy Policy — Metraly",
  description:
    "Metraly Privacy Policy — a self-hosted platform where your data never leaves your infrastructure.",
};

export default function PrivacyPage() {
  return (
    <SiteShell>
      <main>
        <div className="page-label">Legal</div>
        <h1>Privacy Policy</h1>
        <div className="updated">
          Last updated: May 2, 2026 · Effective: May 2, 2026
        </div>

        <div className="highlight">
          <p>
            <strong style={{ color: "var(--cyan)" }}>TL;DR:</strong> Metraly
            is a self-hosted product. When you self-host Metraly, your data
            never leaves your infrastructure. We have no access to your metrics,
            repositories, or team data whatsoever. This policy primarily covers
            our website (getmetraly.com) and synthetic demo preview.
          </p>
        </div>

        <h2>1. About Metraly</h2>
        <p>
          Metraly (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is an
          open-source, self-hosted engineering metrics platform. The core
          product — which you deploy on your own infrastructure — collects no
          data on our behalf. This Privacy Policy covers:
        </p>
        <ul>
          <li>Our marketing website at getmetraly.com</li>
          <li>Our synthetic demo preview</li>
          <li>Email communications with our team</li>
        </ul>
        <p>
          It does <strong>not</strong> cover data within your self-hosted
          Metraly deployment — that data is entirely yours.
        </p>

        <h2>2. Data we collect (website only)</h2>
        <p>On our marketing website, we may collect:</p>
        <ul>
          <li>
            <strong>Contact information</strong> — if you email us or fill
            out a contact form (name, email, company)
          </li>
          <li>
            <strong>Basic analytics</strong> — page views, referrer, country
            (anonymised, no IP stored). We use privacy-first analytics with
            no cross-site tracking
          </li>
          <li>
            <strong>GitHub Auth</strong> — if you star or interact with our
            GitHub repository, GitHub&apos;s own privacy policy applies
          </li>
        </ul>
        <p>
          We do not use advertising pixels, retargeting cookies, or
          third-party tracking scripts.
        </p>

        <h2>3. Self-hosted Metraly</h2>
        <p>When you self-host Metraly on your own infrastructure:</p>
        <ul>
          <li>Zero data is sent to us. Ever.</li>
          <li>No telemetry, no crash reports, no usage analytics</li>
          <li>
            No &quot;phone home&quot; on startup or during operation
          </li>
          <li>
            AI features only connect to the endpoint you configure (your
            own LLM or a provider you choose)
          </li>
          <li>
            Alert notifications are sent directly from your servers to your
            configured channels
          </li>
        </ul>
        <p>
          You can verify all of this by auditing the source code at{" "}
          <a
            href="https://github.com/getmetraly/metraly"
            target="_blank"
            rel="noopener"
          >
            github.com/getmetraly/metraly
          </a>.
        </p>

        <h2>4. Demo preview</h2>
        <p>
          The demo preview contains only fictional, synthetic mock data. Do
          not enter real company data, real credentials, or personal
          information into the demo preview. Preview login fields are
          placeholders and are not intended for real authentication.
        </p>

        <h2>5. Data retention</h2>
        <p>
          Contact inquiries: retained for up to 2 years or until you
          request deletion. Anonymised analytics: aggregated monthly, raw
          data deleted after 30 days. Synthetic preview interactions are
          not a place to store real user or company data.
        </p>

        <h2>6. Your rights</h2>
        <p>
          You have the right to access, correct, or delete any personal
          data we hold about you. To exercise these rights, email us at{" "}
          <a href="mailto:privacy@metraly.io">privacy@metraly.io</a>. We
          will respond within 30 days.
        </p>

        <h2>7. Contact</h2>
        <p>
          Privacy questions:{" "}
          <a href="mailto:privacy@metraly.io">privacy@metraly.io</a>
          <br />
          General:{" "}
          <a href="mailto:hello@metraly.io">hello@metraly.io</a>
        </p>
      </main>
    </SiteShell>
  );
}
