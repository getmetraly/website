import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export const metadata = {
  title: "Terms of Service — Metraly",
  description:
    "Metraly Terms of Service — governing use of the website, demo instance, and commercial support.",
};

export default function TermsPage() {
  return (
    <SiteShell>
      <main>
        <div className="page-label">Legal</div>
        <h1>Terms of Service</h1>
        <div className="updated">
          Last updated: May 2, 2026 · Effective: May 2, 2026
        </div>

        <div className="note">
          These Terms govern use of the Metraly website (getmetraly.com) and
          demo surfaces. They do not replace the software license in the Metraly
          repository. The core platform is AGPLv3, with separate commercial
          terms for Pro and Enterprise modules.
        </div>

        <h2>1. Acceptance</h2>
        <p>
          By accessing getmetraly.com or the Metraly demo instance, you
          agree to these Terms. If you disagree, do not use these services.
        </p>

        <h2>2. Permitted Use</h2>
        <p>You may use our website and demo to:</p>
        <ul>
          <li>Learn about the Metraly project</li>
          <li>Evaluate the product using synthetic demo data</li>
          <li>Access documentation and contribute to the open-source project</li>
          <li>Contact us regarding commercial support or licensing</li>
        </ul>

        <h2>3. Prohibited Use</h2>
        <p>You may not:</p>
        <ul>
          <li>
            Enter real company data, real credentials, or personal information
            into the demo instance
          </li>
          <li>
            Attempt to disrupt, overload, or attack our website or demo
            infrastructure
          </li>
          <li>
            Use automated scrapers or bots against our services without
            prior written consent
          </li>
          <li>
            Misrepresent your affiliation with Metraly or use our brand
            to deceive others
          </li>
        </ul>

        <h2>4. The Software License</h2>
        <p>
          The Metraly core software is licensed separately under{" "}
          <strong>AGPLv3</strong>. These website Terms of Service do not
          grant additional rights to the software. Refer to the{" "}
          <Link href="/pricing">Pricing &amp; License page</Link> and the{" "}
          <a
            href="https://github.com/getmetraly/metraly/blob/main/LICENSE"
            target="_blank"
            rel="noopener"
          >
            LICENSE file
          </a>{" "}
          in the repository for software license terms. Pro and Enterprise
          modules may be provided under separate commercial terms.
        </p>

        <h2>5. Demo Instance</h2>
        <p>
          The demo instance is provided as-is, with no uptime guarantees.
          Data is reset every 24 hours. It is intended for evaluation only.
          Do not use it for any production workload or to store any
          sensitive information.
        </p>

        <h2>6. Intellectual Property</h2>
        <p>
          The Metraly name, logo, and website design are our intellectual
          property. The core software source code is available under AGPLv3.
          Third-party trademarks mentioned (GitHub, Slack, Jira, etc.) belong
          to their respective owners.
        </p>

        <h2>7. Disclaimer of Warranties</h2>
        <p>
          Our website and demo are provided &quot;as is&quot; without warranty
          of any kind. We make no guarantees about availability, accuracy, or
          fitness for a particular purpose.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Metraly shall not be
          liable for any indirect, incidental, or consequential damages arising
          from use of our website or demo instance.
        </p>

        <h2>9. Changes</h2>
        <p>
          We may update these Terms at any time. Material changes will be
          noted on this page with an updated effective date. Continued use of
          our services constitutes acceptance of the updated Terms.
        </p>

        <h2>10. Contact</h2>
        <p>
          Legal questions:{" "}
          <a href="mailto:legal@metraly.io">legal@metraly.io</a>
          <br />
          General:{" "}
          <a href="mailto:hello@metraly.io">hello@metraly.io</a>
        </p>
      </main>
    </SiteShell>
  );
}
