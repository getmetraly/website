import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { ContentPage, Note, Prose } from "@/components/ui/primitives";

export const metadata = {
  title: "Terms of Service — Metraly",
  description:
    "Terms for using the Metraly website, synthetic demo, documentation, and commercial inquiry surfaces.",
};

export default function TermsPage() {
  return (
    <SiteShell>
      <ContentPage>
        <Prose>
          <div className="page-label">Legal · Draft pending legal review</div>
          <h1>Terms of Service</h1>
          <div className="updated">Last updated: May 2026</div>
        </Prose>

        <Note>
          These Terms govern use of the Metraly website, public documentation,
          synthetic demo and commercial inquiry surfaces. They do not replace the
          open-source software license for the Metraly core software, and they do
          not create commercial Pro or Enterprise rights unless a separate
          written agreement, order form or license applies.
        </Note>

        <Prose>
          <h2>1. Acceptance</h2>
          <p>
            By accessing or using the Metraly website, documentation, synthetic
            demo or related public surfaces, you agree to these Terms. If you do
            not agree, do not use these services.
          </p>

          <h2>2. What these Terms cover</h2>
          <p>These Terms cover:</p>
          <ul>
            <li>the Metraly marketing website;</li>
            <li>public documentation pages;</li>
            <li>the synthetic demo and demo-app surfaces;</li>
            <li>contact forms, early-access forms and commercial inquiry flows;</li>
            <li>website content, logos, copy, screenshots and design assets;</li>
            <li>communications related to website/demo use.</li>
          </ul>
          <p>These Terms do not automatically cover:</p>
          <ul>
            <li>your use of the open-source Metraly core software under its repository license;</li>
            <li>separate Pro or Enterprise commercial modules;</li>
            <li>paid pilots, support contracts or enterprise agreements;</li>
            <li>third-party services or model providers.</li>
          </ul>
          <p>Those may be governed by separate licenses, contracts or provider terms.</p>

          <h2>3. Open-source software license</h2>
          <p>
            The Metraly core software is licensed separately under the license
            published in the Metraly source repository. The website Terms do not
            grant additional rights to the software beyond the applicable software
            license.
          </p>
          <p>
            If the repository license is AGPLv3, your rights and obligations for
            that software are governed by AGPLv3 and the repository&apos;s license
            files. Future Pro or Enterprise modules may be offered under separate
            commercial terms.
          </p>
          <p>
            See the <a href="https://github.com/getmetraly/metraly/blob/main/LICENSE" target="_blank" rel="noopener">repository license</a> and the <Link href="/pricing">pricing preview</Link> for more context.
          </p>

          <h2>4. Synthetic demo</h2>
          <p>
            The demo is provided for evaluation and educational purposes only. The
            demo may include synthetic engineering dashboards, mock metrics,
            simulated roles, preview UI, non-production AI or plugin examples, and
            placeholder workflows.
          </p>
          <p>You must not enter into the demo:</p>
          <ul>
            <li>real company data;</li>
            <li>real credentials;</li>
            <li>source tokens;</li>
            <li>private repository names;</li>
            <li>production secrets;</li>
            <li>customer data;</li>
            <li>personal information;</li>
            <li>confidential incident or security data.</li>
          </ul>
          <p>
            The demo is not a production environment. It may be changed, reset,
            removed or become unavailable at any time.
          </p>

          <h2>5. Permitted use</h2>
          <p>You may use the website and demo to:</p>
          <ul>
            <li>learn about Metraly;</li>
            <li>evaluate the product direction using synthetic data;</li>
            <li>read documentation;</li>
            <li>compare pricing or packaging previews;</li>
            <li>contact the Metraly team;</li>
            <li>contribute to or evaluate the open-source project;</li>
            <li>inquire about early access, paid pilots or commercial support.</li>
          </ul>

          <h2>6. Prohibited use</h2>
          <p>You may not:</p>
          <ul>
            <li>attack, disrupt or overload the website or demo;</li>
            <li>attempt unauthorized access to systems or accounts;</li>
            <li>upload or enter real secrets, credentials or sensitive company data into demo surfaces;</li>
            <li>scrape or harvest data in a way that harms service availability;</li>
            <li>misrepresent your affiliation with Metraly;</li>
            <li>use the Metraly name or branding to deceive others;</li>
            <li>reverse engineer non-open-source commercial services except where law allows;</li>
            <li>use the website or demo for unlawful, harmful or abusive purposes.</li>
          </ul>

          <h2>7. Product status and no production guarantee</h2>
          <p>Metraly is an early-stage project.</p>
          <p>Some capabilities shown or described on the website may be:</p>
          <ul>
            <li>implemented;</li>
            <li>prototype/partial;</li>
            <li>synthetic demo only;</li>
            <li>designed but not implemented;</li>
            <li>planned;</li>
            <li>benchmark-gated;</li>
            <li>commercial/pilot-only.</li>
          </ul>
          <p>
            The website should use status labels and claim-safe wording, but you
            should not treat website previews, demo flows or roadmap items as
            production guarantees.
          </p>

          <h2>8. Pricing, Pro and Enterprise</h2>
          <p>
            Pricing pages may describe planned packaging, pricing previews, paid
            pilots or future commercial plans. Unless explicitly stated in a
            separate written agreement, order form or active checkout flow,
            pricing previews are not binding offers.
          </p>
          <p>
            Pro may not be generally available, Enterprise terms require separate
            agreement, paid pilots may be handled manually, and license activation
            may require a signed license or separate process. Commercial use,
            support, Pro modules, Enterprise features or paid pilots may be
            subject to separate terms.
          </p>

          <h2>9. AI, plugins and integrations</h2>
          <p>
            AI, plugin and integration capabilities may be shown as product
            direction, synthetic examples or roadmap items. Unless explicitly
            marked as implemented and available, AI assistant functionality may be
            designed or preview-only, AI quality and safety claims may be
            benchmark-pending, plugin marketplace functionality may be planned
            rather than live, and connectors may be roadmap items rather than
            production features.
          </p>
          <p>Do not rely on preview AI, plugin or integration descriptions as production commitments.</p>

          <h2>10. Intellectual property</h2>
          <p>
            The Metraly name, logo, website design, copy, screenshots and brand
            assets are owned by Metraly or its licensors, except where otherwise
            stated. The open-source Metraly software is governed by its repository
            license. Third-party names and trademarks belong to their respective
            owners.
          </p>

          <h2>11. Feedback</h2>
          <p>
            If you send feedback, suggestions, ideas or bug reports, you grant
            Metraly permission to use them to improve the project, documentation,
            website and product without obligation to compensate you, unless
            separately agreed. Do not send confidential information as feedback
            unless a separate agreement allows it.
          </p>

          <h2>12. Third-party services</h2>
          <p>
            The website, demo or product may link to or interact with third-party
            services such as hosting providers, GitHub, payment processors,
            analytics providers, AI providers or communication tools. Third-party
            services are governed by their own terms and policies. Metraly is not
            responsible for third-party services outside its control.
          </p>

          <h2>13. Privacy</h2>
          <p>
            Use of the website and demo is also governed by the <Link href="/privacy">Metraly Privacy Policy</Link>.
          </p>

          <h2>14. Disclaimers</h2>
          <p>
            The website, documentation and demo are provided “as is” and “as
            available.” To the maximum extent permitted by law, Metraly disclaims
            warranties of merchantability, fitness for a particular purpose,
            non-infringement, availability, accuracy and reliability. The demo is
            not intended for production use.
          </p>

          <h2>15. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, Metraly will not be liable for
            indirect, incidental, special, consequential, exemplary or punitive
            damages, or for lost profits, lost data, business interruption or loss
            of goodwill arising from use of the website, documentation or demo.
            Some jurisdictions do not allow certain limitations, so some
            limitations may not apply to you.
          </p>

          <h2>16. Changes</h2>
          <p>
            We may update these Terms as the website, demo, product, commercial
            offerings or legal requirements evolve. When we make material changes,
            we will update the date at the top of the page.
          </p>

          <h2>17. Contact</h2>
          <p>
            Admin/legal questions: <a href="mailto:admin@metraly.io">admin@metraly.io</a>
            <br />
            Security reports: <a href="mailto:security@metraly.io">security@metraly.io</a>
            <br />
            Support: <a href="mailto:support@metraly.io">support@metraly.io</a>
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
