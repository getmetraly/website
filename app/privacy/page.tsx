import { SiteShell } from "@/components/site-shell";
import { ContentPage, Highlight, Note, Prose } from "@/components/ui/primitives";

export const metadata = {
  title: "Privacy Policy — Metraly",
  description:
    "Metraly Privacy Policy for the website, synthetic demo, communications, and self-hosted product boundaries.",
};

export default function PrivacyPage() {
  return (
    <SiteShell>
      <ContentPage>
        <Prose>
          <div className="page-label">Legal · Draft pending legal review</div>
          <h1>Privacy Policy</h1>
          <div className="updated">Last updated: May 2026</div>
        </Prose>

        <Highlight>
          <Prose>
            <p>
              <strong>Summary:</strong> Metraly is being built as a self-hosted
              Engineering Intelligence platform. This policy explains the website,
              synthetic demo, communications, commercial/support workflows, and
              the intended boundary for self-hosted deployments.
            </p>
          </Prose>
        </Highlight>

        <Prose>
          <h2>1. Scope of this policy</h2>
          <p>This policy applies to:</p>
          <ul>
            <li>the Metraly marketing website;</li>
            <li>the public synthetic demo and demo-app surfaces;</li>
            <li>contact forms, emails, waitlists, early access and pilot inquiries;</li>
            <li>future commercial conversations, support and licensing workflows.</li>
          </ul>
          <p>
            This policy does <strong>not</strong> automatically give Metraly
            access to data inside a self-hosted Metraly deployment. If you run
            Metraly on your own infrastructure, the engineering data inside that
            deployment is intended to remain under your control unless you
            explicitly choose to send information to Metraly, for example through
            a support request, future opt-in product telemetry, or a commercial
            support process.
          </p>

          <h2>2. Data we may collect on the website</h2>
          <p>When you visit the website, we may collect limited website data such as:</p>
          <ul>
            <li>pages viewed;</li>
            <li>referrer information;</li>
            <li>approximate region or country;</li>
            <li>device/browser type;</li>
            <li>basic operational logs needed to keep the website available and secure.</li>
          </ul>
          <p>
            If analytics are used, they should be privacy-conscious and should
            avoid advertising pixels, retargeting, cross-site tracking and
            invasive fingerprinting.
          </p>
          <p>
            Website analytics should not collect source code, repository data,
            commit messages, issue titles, engineering metrics, secrets or product
            data from a self-hosted Metraly deployment.
          </p>

          <h2>3. Data you provide to us</h2>
          <p>
            If you contact us, join early access, request a pilot, or ask about
            commercial terms, we may collect:
          </p>
          <ul>
            <li>name;</li>
            <li>email address;</li>
            <li>company or organization;</li>
            <li>role/title;</li>
            <li>message content;</li>
            <li>commercial interest, pilot requirements or support context;</li>
            <li>scheduling and communication history.</li>
          </ul>
          <p>
            Do not send secrets, credentials, private repository data, customer
            data or sensitive production information through public website forms
            or demo surfaces.
          </p>

          <h2>4. Synthetic demo</h2>
          <p>The public demo is intended to use synthetic data only.</p>
          <p>You should not enter:</p>
          <ul>
            <li>real company data;</li>
            <li>real credentials;</li>
            <li>source tokens;</li>
            <li>personal information;</li>
            <li>private repository names;</li>
            <li>customer data;</li>
            <li>production secrets;</li>
            <li>confidential incident details.</li>
          </ul>
          <p>
            The demo may be reset, changed or removed at any time. It is not a
            production environment and should not be used to store or process real
            operational data.
          </p>

          <h2>5. Self-hosted Metraly deployments</h2>
          <p>
            Metraly is designed for customer-controlled deployments. By default, a
            self-hosted deployment should not require sending customer engineering
            data to Metraly to function.
          </p>
          <p>Customer engineering data may include:</p>
          <ul>
            <li>repository and pull request metadata;</li>
            <li>commit and review patterns;</li>
            <li>issue/project data;</li>
            <li>build and deployment events;</li>
            <li>incident and reliability data;</li>
            <li>team and workflow metrics;</li>
            <li>AI prompts or outputs derived from engineering data.</li>
          </ul>
          <p>
            This data should remain under the customer&apos;s control unless the
            customer explicitly chooses otherwise.
          </p>

          <h2>6. Product telemetry</h2>
          <p>Metraly has a no-hidden-telemetry policy.</p>
          <p>If outbound product telemetry is introduced, it must be:</p>
          <ul>
            <li>opt-in or default-off;</li>
            <li>visible to an administrator;</li>
            <li>documented;</li>
            <li>previewable where practical;</li>
            <li>disableable;</li>
            <li>limited to minimal aggregated diagnostics;</li>
            <li>forbidden from collecting sensitive engineering data.</li>
          </ul>
          <p>Product telemetry must not collect:</p>
          <ul>
            <li>source code;</li>
            <li>repository names;</li>
            <li>organization names;</li>
            <li>commit messages;</li>
            <li>PR or issue titles/descriptions/comments;</li>
            <li>personal data about developers;</li>
            <li>secrets, tokens or credentials;</li>
            <li>raw LLM prompts;</li>
            <li>raw customer logs;</li>
            <li>customer hostnames or internal system names unless explicitly approved.</li>
          </ul>
          <p>
            If telemetry is not implemented in the app, the website should not
            claim that telemetry controls are implemented. It may say that
            telemetry policy is defined.
          </p>

          <h2>7. AI and model providers</h2>
          <p>
            Metraly may support different AI modes in the future, such as local
            models, bring-your-own provider keys or external model providers.
            The privacy impact depends on the mode selected by the customer.
          </p>
          <p>Metraly should clearly distinguish between:</p>
          <ul>
            <li>local AI execution;</li>
            <li>customer-provided AI provider credentials;</li>
            <li>any external model provider path;</li>
            <li>AI disabled mode.</li>
          </ul>
          <p>
            Public AI examples should use synthetic data unless a customer
            explicitly approves otherwise.
          </p>

          <h2>8. Billing, licensing and commercial data</h2>
          <p>
            If Metraly offers paid pilots, Pro or Enterprise plans, we may process
            commercial information such as billing contact, plan or subscription
            details, invoice/payment status, license entitlement records, support
            entitlement records, and contract or procurement communications.
          </p>
          <p>
            Payment card data should be handled by a payment processor or billing
            provider. Metraly should not store raw payment card numbers in the
            product or website. License data should contain entitlement
            information, not customer engineering data.
          </p>

          <h2>9. Support bundles and diagnostics</h2>
          <p>
            If a customer asks for support, they may choose to send diagnostics or
            support bundles. Support bundles should be customer-initiated,
            reviewable before sending where practical, limited to what is needed
            for support, redacted for secrets and sensitive data where possible,
            and retained only as long as needed for support or legal obligations.
          </p>

          <h2>10. How we use information</h2>
          <p>We may use collected information to:</p>
          <ul>
            <li>operate and secure the website;</li>
            <li>respond to inquiries;</li>
            <li>manage early access or pilot conversations;</li>
            <li>provide support;</li>
            <li>improve documentation and onboarding;</li>
            <li>understand aggregate website interest;</li>
            <li>manage billing, licensing and commercial communications;</li>
            <li>comply with legal obligations.</li>
          </ul>
          <p>We should not sell personal data to advertisers.</p>

          <h2>11. Sharing information</h2>
          <p>
            We may share information with service providers that help us operate
            the website, communications, hosting, billing, analytics, support or
            security processes. Provider use should be limited to the purpose for
            which the provider is used.
          </p>

          <h2>12. Retention</h2>
          <p>Recommended retention policy:</p>
          <ul>
            <li>contact and early access inquiries: up to 24 months unless deletion is requested or a longer business/legal need exists;</li>
            <li>website analytics: aggregated where possible, raw logs retained for a short operational/security period;</li>
            <li>support communications: as long as needed for support and business records;</li>
            <li>billing/licensing records: as required for accounting, tax, contract and legal obligations;</li>
            <li>support bundles: delete when no longer needed for the support case, subject to legal/commercial obligations.</li>
          </ul>
          <p>Final retention windows should be confirmed before production publication.</p>

          <h2>13. Your rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct or
            delete personal data, object to or restrict processing, request
            portability, or withdraw consent where processing is based on consent.
            To make a request, contact <a href="mailto:privacy@metraly.io">privacy@metraly.io</a>.
          </p>

          <h2>14. Security</h2>
          <p>
            We use reasonable technical and organizational measures to protect
            website, communication and commercial data. No website or service can
            be guaranteed completely secure. Do not send secrets, credentials or
            sensitive production data through public forms or demo surfaces.
          </p>
          <p>
            Security reports should be sent to <a href="mailto:security@metraly.io">security@metraly.io</a>.
          </p>

          <h2>15. International users</h2>
          <p>
            Metraly may be accessed by users in different countries. Personal data
            may be processed in locations where Metraly or its providers operate.
            If Metraly targets EU/UK users or customers, appropriate privacy and
            data transfer measures should be reviewed before commercial launch.
          </p>

          <h2>16. Children&apos;s privacy</h2>
          <p>
            Metraly is not intended for children. We do not knowingly collect
            personal data from children.
          </p>

          <h2>17. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy as the product, website, demo,
            telemetry, billing or support processes evolve. When we make material
            changes, we will update the date at the top of the page.
          </p>

          <h2>18. Contact</h2>
          <p>
            Privacy requests: <a href="mailto:privacy@metraly.io">privacy@metraly.io</a>
            <br />
            Security reports: <a href="mailto:security@metraly.io">security@metraly.io</a>
            <br />
            Support: <a href="mailto:support@metraly.io">support@metraly.io</a>
            <br />
            Enterprise inquiries: <a href="mailto:enterprise@metraly.io">enterprise@metraly.io</a>
            <br />
            General inquiries: <a href="mailto:hello@metraly.io">hello@metraly.io</a>
          </p>
        </Prose>

        <Note>
          This page is a public draft and should be reviewed by legal counsel
          before production/commercial use.
        </Note>
      </ContentPage>
    </SiteShell>
  );
}
