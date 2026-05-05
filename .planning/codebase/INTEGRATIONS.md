# External Integrations

**Analysis Date:** 2026-05-05

## APIs & External Services

**Fonts:**
- Google Fonts - Loads Plus Jakarta Sans and JetBrains Mono in HTML `<link>` tags.
  - Integration method: browser CSS request to `https://fonts.googleapis.com`.
  - Files: `index.html`, `pricing.html`, `docs.html`, `login.html`, `privacy.html`, `terms.html`.
  - Risk: external request affects privacy/performance; consider self-hosting fonts for a privacy-first product.

**CDN Scripts:**
- unpkg - `index.html` loads React 18.3.1, ReactDOM 18.3.1, and Babel standalone 7.29.0.
  - Integration method: browser `<script>` tags with SRI attributes.
  - Purpose: intended to render `tweaks-panel.jsx`.
  - Issue: `tweaks-panel.jsx` is referenced but absent from the repository.

**Repository Links:**
- GitHub - Marketing links point to `https://github.com/getmetraly/metraly`.
  - Files: `index.html`, `pricing.html`, `privacy.html`, `terms.html`.
  - Purpose: source, discussions, license links, quickstart clone command.

**Email Links:**
- Mailto links for `hello@metraly.io`, `enterprise@metraly.io`, `privacy@metraly.io`, and `legal@metraly.io`.
  - Files: `pricing.html`, `privacy.html`, `terms.html`.
  - No form backend exists.

## Data Storage

**Website:**
- Browser `localStorage` stores theme preference under key `metraly-theme`.
  - File: `theme.js`.
  - No server-side storage, cookies, analytics database, or CMS exists.

**Adjacent app:**
- The real app in `../app` is planned around PostgreSQL/TimescaleDB and Redis.
  - Current website does not connect to those services.
  - Future demo mode must decide whether to embed mock data, proxy a demo API, or launch `../app/ui` against a mock adapter.

## Authentication & Identity

**Website demo login:**
- `login.html` is a static mock form with hard-coded demo credentials.
  - Email: `admin@demo.metraly.io`.
  - Password: `demo2026`.
  - `handleLogin()` only changes button text and redirects after a timeout; it does not authenticate.

**Adjacent app:**
- `../app` contains planned auth/access work with local login, RS256 JWT, refresh tokens, RBAC, and optional OIDC.
  - The website has no integration with that auth flow yet.

## Monitoring & Observability

**Current:**
- No analytics, error tracking, logging, or monitoring integrations exist in `website`.
- `privacy.html` claims privacy-first analytics may be collected, but no analytics script is present.

**Future:**
- Any website analytics must preserve the privacy positioning documented in `../docs/strategy/positioning-uvp.md` and `../docs/legal/legal-risks-and-compliance.md`.

## CI/CD & Deployment

**Hosting:**
- No deployment config is present.
- Static hosting is sufficient for current pages.

**CI Pipeline:**
- No CI workflow is present in `website`.
- No automated validation exists for links, HTML validity, accessibility, or visual regressions.

## Environment Configuration

**Development:**
- No required env vars.
- No `.env` or `.env.example`.
- No package install required for current static pages.

**Production:**
- Unknown hosting platform.
- Demo routing is not implemented. Decide whether `login.html` should open an embedded mock demo, a hosted demo app, or a local/self-host quickstart path.

## Webhooks & Callbacks

**Incoming:**
- None.

**Outgoing:**
- None, except browser navigation to external links and mail clients.

---
*Integration audit: 2026-05-05*
*Update when adding demo hosting, analytics, forms, or docs generation*
