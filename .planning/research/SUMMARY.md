# Research Summary: Metraly Website

**Analysis Date:** 2026-05-05
**Sources:** current `website` files, `.planning/codebase/`, `../app/.planning`, `../docs`

## Canonical Product Truth

- Metraly is a self-hosted Engineering Intelligence platform for engineering leaders and teams that need metrics, dashboards, and private AI without sending engineering data to third-party SaaS.
- The core value from `../app/.planning/PROJECT.md` is: Metraly must give teams a trustworthy self-hosted view of engineering delivery health without leaking sensitive engineering data.
- `../docs/STATUS.md` is the canonical maturity/status source.
- The current product state is prototype/preview: the backend/UI foundations and many specs exist, but several website claims describe future or designed capabilities as if they are shipped.

## Pricing And License Findings

- Current website pages mention Functional Source License (FSL), source-available conversion, no feature gating, and broad "all features free" claims.
- Canonical docs and decisions currently point to AGPLv3 open-core, not FSL.
- `../docs/strategy/monetization-v2.md` defines:
  - Always Free / Community: $0, self-hosted, volume limits.
  - Pro: `$99/mo` for up to 10 active users plus `$15/dev/mo` above 10.
  - Enterprise: `$15K/year` base up to 50 dev plus `$120/dev/year` above that, with $100K+ regulated vertical potential.
- `../docs/decisions/2026-05-04.md` says founder is open to market-tested Pro pricing models, but `../docs/PROGRESS.md` records a later two-layer rule: published docs keep monetization-v2 pricing as external commitment unless founder explicitly changes it.

## Demo Findings

- `login.html` currently simulates a login and redirects to `index.html#demo`; there is no real demo route.
- User explicitly wants a demo mode where visitors can open the app with mock data and click around.
- `../app/ui/src` contains real app screens and mock-data structures that should be reused or treated as the source of demo truth:
  - `features/dashboard/DashboardScreen.tsx`
  - `features/metricsExplorer/MetricsScreen.tsx`
  - `features/aiAssistant/AIScreen.tsx`
  - `features/marketplace/PluginScreen.tsx`
  - `features/onboarding/WizardScreen.tsx`
  - `api/mockApi.ts`
  - `types/mocks/*`
- `../docs/product/onboarding.md` defines Sandbox Inc. demo behavior and TTFI < 5 minutes as product direction.

## Website Codebase Findings

- Current repo is static HTML/CSS/JS only.
- There is no build, test, lint, deploy, docs generation, or package setup.
- CSS and layout patterns are duplicated across pages.
- `index.html` references missing `tweaks-panel.jsx`.
- External Google Fonts and unpkg CDN scripts should be reviewed against privacy-first positioning.

## Roadmap Implications

- First phase should not start with visual redesign; it should reconcile product truth and remove incorrect public claims.
- Demo mode requires an architecture decision: static embedded demo, bundled `../app/ui` subset, or hosted demo app.
- Documentation should not be copied ad hoc forever; add either a generation/sync process or explicit source traceability.
- Verification must include content consistency, link checks, console-error checks, and browser smoke tests before launch.

---
*Research synthesized inline because `gsd-sdk` and automatic GSD researcher orchestration are unavailable in this environment.*
