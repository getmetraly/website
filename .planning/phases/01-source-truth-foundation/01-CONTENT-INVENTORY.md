# Content Inventory: Metraly Website

**Phase:** 01-source-truth-foundation
**Created:** 2026-05-05
**Purpose:** Page-by-page inventory of public product claims before copy rewrite.

## Source Precedence

1. `../docs/PROGRESS.md` - later founder/published-docs policy and completed sync decisions.
2. `../docs/STATUS.md` - canonical product readiness/status.
3. `../docs/strategy/monetization-v2.md` - published pricing and tiers.
4. `../docs/decisions/2026-05-04.md` - internal decisions where not superseded by published-docs policy.
5. `../docs/strategy/positioning-uvp.md` and `../docs/strategy/positioning.md` - positioning and public messaging.
6. `../docs/product/onboarding.md` - Sandbox Inc. demo/onboarding target.
7. `../app/.planning/*` and `../app/ui` - implementation/demo source context.
8. Current `website` HTML - audited surface, not canonical truth.

## Claim Status Legend

| Status | Meaning |
|--------|---------|
| Keep | Claim appears aligned with canonical docs and can likely remain. |
| Rewrite | Claim has the right area but wrong wording, certainty, license/pricing, or readiness. |
| Remove | Claim should be removed unless evidence/source appears. |
| Verify | Claim might be true but needs explicit canonical or implementation support. |

## `index.html`

| Area | Anchor | Current Claim | Canonical Source | Target State | Action | Owner |
|------|--------|---------------|------------------|--------------|--------|-------|
| Positioning | `index.html:7` | "only open-source engineering metrics platform... FSL licensed" | `../docs/strategy/positioning-uvp.md`, `../docs/decisions/2026-05-04.md` | Self-hosted Engineering Intelligence with privacy-first/private AI; AGPLv3/open-core, not FSL. | Rewrite | Phase 2 |
| CTA/demo | `index.html:639`, `index.html:686` | "Try Demo" links to `login.html`; "Deploy in 5 minutes" | `../docs/product/onboarding.md`, `../docs/STATUS.md` | Demo CTA should lead to a real synthetic-data demo; 5-minute claims need status/proof caveat. | Rewrite | Phase 2/3 |
| Tech stack | `index.html:702`, `index.html:1292` | Go + PostgreSQL + TimescaleDB; quickstart uses no ClickHouse | `../app/.planning/PROJECT.md`, `../app/.planning/ROADMAP.md` | This matches current Community Preview direction; keep but verify command accuracy before launch. | Verify | Phase 2 |
| Privacy | `index.html:813` | "No SaaS vendor ever sees or stores your metrics" | `../docs/strategy/positioning-uvp.md`, `../docs/legal/legal-risks-and-compliance.md` | Keep privacy-first concept; ensure external website dependencies do not contradict it. | Rewrite | Phase 2/5 |
| License | `index.html:825`, `index.html:1227`, `index.html:1231`, `index.html:1236`, `index.html:1487`, `index.html:1524` | FSL, source-available, Apache/MIT conversion, commercial license required | `../docs/decisions/2026-05-04.md`, `../docs/strategy/monetization-v2.md`, `../docs/PROGRESS.md` | Replace with AGPLv3 open-core and Community/Pro/Enterprise model unless canonical docs change. | Rewrite | Phase 2 |
| Feature readiness | `index.html:967-1032` | AI Assistant appears productized; built-in provider/BYO/local options | `../docs/STATUS.md`, `../docs/tech/ai-system.md`, `../docs/product/ai-assistant.md` | Label AI as designed/planned/Pro depending on canonical status; do not imply fully shipped. | Rewrite | Phase 2 |
| Plugins | `index.html:1096-1158` | GitHub/GitLab/Jira "Stable", Jenkins/Linear beta, SDK coming soon | `../docs/STATUS.md`, `../docs/product/plugin-system.md`, `../docs/tech/plugin-system.md` | Reclassify by real status: code skeleton/spec/planned; avoid stable labels without implementation proof. | Rewrite | Phase 2 |
| Enterprise/compliance | `index.html:851`, `index.html:1167-1212`, `index.html:1198` | SOC 2 compatible, production-grade day one, air-gapped, JWT details | `../docs/STATUS.md`, `../docs/legal/legal-risks-and-compliance.md`, `../app/.planning/ROADMAP.md` | Keep as roadmap/Enterprise direction only where not implemented; avoid production-ready proof claims. | Rewrite | Phase 2 |
| Blog cards | `index.html:1360-1390` | Blog articles with dates and details | `../docs` has no matching published blog system | Treat as placeholders unless real articles exist. | Verify/Remove | Phase 2 |
| Social proof | `index.html:1436-1471` | Testimonials from named early adopters | `../docs/STATUS.md`, `../docs/investors/pitch-deck.md` honesty rules | Remove or label as illustrative unless real permission/evidence exists. | Remove | Phase 2 |
| Missing asset | `index.html:1553` | Loads `tweaks-panel.jsx` | `.planning/codebase/CONCERNS.md` | Remove reference or implement intentionally. | Verify | Phase 5 |

## `pricing.html`

| Area | Anchor | Current Claim | Canonical Source | Target State | Action | Owner |
|------|--------|---------------|------------------|--------------|--------|-------|
| Meta description | `pricing.html:7` | Free to self-host under FSL | `../docs/strategy/monetization-v2.md`, `../docs/decisions/2026-05-04.md` | AGPLv3/open-core; Community free with limits, Pro/Enterprise paid. | Rewrite | Phase 2 |
| Hero | `pricing.html:125-126` | "Simple, honest open-source pricing" + FSL/no caps/no lock-in | `../docs/strategy/monetization-v2.md` | Present Community, Pro, Enterprise with honest limits and license posture. | Rewrite | Phase 2 |
| Self-hosted card | `pricing.html:133-149` | Free, all features included, no artificial limits, AI/SSO/plugins/air-gap included | `../docs/strategy/monetization-v2.md`, `../docs/STATUS.md` | Community is free but volume-limited; Pro/Enterprise unlock paid modules/capabilities. | Rewrite | Phase 2 |
| Commercial support card | `pricing.html:154-170` | Custom annual support and FSL commercial use license | `../docs/strategy/monetization-v2.md` | Replace with Pro plan: `$99/mo` up to 10 active users + `$15/dev/mo` above 10, unless docs change. | Rewrite | Phase 2 |
| Enterprise card | `pricing.html:174-191` | Custom Enterprise | `../docs/strategy/monetization-v2.md` | Enterprise from `$15K/year` up to 50 dev + `$120/dev/year` above 50; regulated verticals may be higher. | Rewrite | Phase 2 |
| Comparison note | `pricing.html:199-200` | No per-seat pricing, no data caps, no feature gating | `../docs/strategy/monetization-v2.md` | Replace: Free limited by volume/retention/users/connectors; Pro buys scale/time/AI/plugins. | Rewrite | Phase 2 |
| License section | `pricing.html:205-239` | Functional Source License, FSL-1.1-MIT, Apache/MIT conversion | `../docs/decisions/2026-05-04.md` | Replace with AGPLv3 core + proprietary Pro/Enterprise modules. | Rewrite | Phase 2 |
| FAQ | `pricing.html:251-268` | FSL internal use/commercial restriction/conversion/free trial | `../docs/strategy/monetization-v2.md`, `../docs/PROGRESS.md` | Rewrite FAQ around Community limits, Pro formula, Enterprise, privacy, self-hosted/offline license. | Rewrite | Phase 2 |
| Footer | `pricing.html:281` | "FSL License" | canonical license docs | AGPLv3/open-core. | Rewrite | Phase 2 |

## `docs.html`

| Area | Anchor | Current Claim | Canonical Source | Target State | Action | Owner |
|------|--------|---------------|------------------|--------------|--------|-------|
| Getting started | `docs.html:388-426` | Running instance with demo data in under 5 minutes | `../docs/product/onboarding.md`, `../docs/STATUS.md` | Keep TTFI as target; label current implementation status honestly. | Rewrite | Phase 4 |
| Commands | `docs.html:414-471` | `make docker-up`, `make seed`, migrations automatic | `../app/Makefile`, `../app/.planning/ROADMAP.md`, `../docs/STATUS.md` | Verify against app repo before publishing. | Verify | Phase 4 |
| AI config | `docs.html:505-510`, `docs.html:653-668` | Built-in provider/BYO/local modes, example env vars | `../docs/tech/ai-system.md`, `../docs/STATUS.md` | Present as designed/planned unless implemented; avoid real key-looking examples. | Rewrite | Phase 4 |
| API reference | `docs.html:591-596` | AI/plugin endpoints exist | `../docs/STATUS.md`, `../app/cmd/api` | Verify actual endpoints; mark planned/stub if not implemented. | Rewrite | Phase 4 |
| Plugin docs | `docs.html:676-696` | Plugin SDK under development; data-source stable | `../docs/product/plugin-system.md`, `../docs/tech/plugin-system.md`, `../docs/STATUS.md` | Align with 3-tier runtime and actual implementation status. | Rewrite | Phase 4 |
| Enterprise docs | `docs.html:703-723` | OIDC/RBAC/audit trails | `../docs/STATUS.md`, `../docs/legal/legal-risks-and-compliance.md` | Label implemented/designed/planned accurately. | Rewrite | Phase 4 |
| FAQ license | `docs.html:824-825` | FSL license meaning | canonical license docs | Replace with AGPLv3/open-core explanation. | Rewrite | Phase 4 |
| Search index | `docs.html:845-857` | Search content repeats AI/plugin/enterprise/FSL terms | same as page content | Update after docs rewrite. | Rewrite | Phase 4 |

## `login.html`

| Area | Anchor | Current Claim | Canonical Source | Target State | Action | Owner |
|------|--------|---------------|------------------|--------------|--------|-------|
| Demo positioning | `login.html:72-84` | Live Demo Instance, shared reset every 24h | `../docs/product/onboarding.md`, user request | Demo must be real clickable synthetic-data experience or clearly "coming soon"; not fake live instance. | Rewrite | Phase 3 |
| Credentials | `login.html:78-94` | Hard-coded demo email/password | `../docs/product/onboarding.md`, `../docs/legal/legal-risks-and-compliance.md` | For mock demo, avoid collecting real credentials; credentials can be illustrative only if no backend auth. | Rewrite | Phase 3 |
| Self-host box | `login.html:101-104` | 5-minute self-host recommendation | `../docs/product/onboarding.md`, `../docs/STATUS.md` | Keep target but verify current app commands/status. | Verify | Phase 2/3 |
| Submit behavior | `login.html:121-129` | Simulates auth and redirects to `index.html#demo` | user request, `../app/ui` | Replace with real demo route/shell in Phase 3. | Rewrite | Phase 3 |

## `privacy.html`

| Area | Anchor | Current Claim | Canonical Source | Target State | Action | Owner |
|------|--------|---------------|------------------|--------------|--------|-------|
| Self-host privacy | `privacy.html:61-91` | Customer data stays in customer infra; no access to metrics/repos/team data | `../docs/strategy/positioning-uvp.md`, `../docs/legal/legal-risks-and-compliance.md` | Concept aligned; adjust if external dependencies/analytics are added. | Keep/Verify | Phase 2/5 |
| Website analytics | `privacy.html:73-80` | Privacy-first analytics, no ad pixels | actual website implementation | No analytics code currently exists; keep only if true or mark planned. | Verify | Phase 5 |
| Demo instance | `privacy.html:93-94` | demo.metraly.io synthetic data, reset every 24h | user request, `../docs/product/onboarding.md` | Align with actual Phase 3 demo architecture. | Rewrite | Phase 3 |
| AI features | `privacy.html:88` | AI connects only to configured endpoint | `../docs/tech/ai-system.md`, `../docs/STATUS.md` | Keep as product design, but avoid implying implemented if not. | Verify | Phase 4 |

## `terms.html`

| Area | Anchor | Current Claim | Canonical Source | Target State | Action | Owner |
|------|--------|---------------|------------------|--------------|--------|-------|
| Terms scope | `terms.html:57` | Software covered by FSL, self-hosting subject to FSL | `../docs/decisions/2026-05-04.md`, `../docs/strategy/monetization-v2.md` | Replace FSL references with AGPLv3/open-core wording and/or link to repository license. | Rewrite | Phase 2 |
| Permitted use | `terms.html:63-68` | Website/demo/docs/contact uses | `../docs/legal/legal-risks-and-compliance.md` | Broadly fine; review with final demo architecture. | Keep/Verify | Phase 2/3 |
| Prohibited demo use | `terms.html:71-78` | Do not enter real company data/credentials | `../docs/product/onboarding.md`, legal docs | Keep for synthetic demo; ensure UI behavior supports it. | Keep | Phase 3 |
| Software license | `terms.html:80-87` | FSL software, source code under FSL | canonical license docs | Replace with AGPLv3 core + proprietary paid modules where accurate. | Rewrite | Phase 2 |
| Demo disclaimer | `terms.html:83-84` | Demo reset every 24h, evaluation only | actual demo implementation | Keep only if Phase 3 implements hosted reset; otherwise rewrite for static mock demo. | Verify | Phase 3 |

## Cross-Page Claims To Resolve

| Claim | Pages | Canonical Target | Action |
|-------|-------|------------------|--------|
| FSL/source-available/Apache conversion | `index.html`, `pricing.html`, `docs.html`, `terms.html` | AGPLv3/open-core from `../docs/decisions/2026-05-04.md` and `../docs/strategy/monetization-v2.md` | Rewrite in Phase 2/4 |
| All features free/no feature gating | `pricing.html`, indirectly `index.html` | Community free with volume limits; Pro/Enterprise paid modules | Rewrite in Phase 2 |
| Live demo exists | `login.html`, `privacy.html`, `terms.html` | Phase 3 must decide actual demo architecture; synthetic data only | Rewrite/build in Phase 3 |
| AI/plugins/enterprise shipped confidence | `index.html`, `docs.html`, `pricing.html` | `../docs/STATUS.md` status labels | Rewrite in Phase 2/4 |
| 5-minute setup/TTFI | `index.html`, `docs.html`, `login.html` | Target from `../docs/product/onboarding.md`; needs proof/status | Verify and caveat in Phase 2/4 |

---
*Inventory complete: 2026-05-05*
