# Contradiction Matrix: Metraly Website

**Phase:** 01-source-truth-foundation
**Created:** 2026-05-05
**Purpose:** Severity-ranked source-of-truth gaps to resolve in later phases.

## Severity Legend

| Severity | Meaning |
|----------|---------|
| BLOCKER | Public launch blocker; legal/commercial/trust risk. |
| HIGH | Major product-truth or conversion risk; must resolve before launch. |
| MEDIUM | Accuracy/drift issue; resolve in planned phase. |
| LOW | Cleanup or verification item. |

## Matrix

| Severity | Category | Website Anchor | Current Claim | Canonical Target | Source | Impact | Resolving Phase |
|----------|----------|----------------|---------------|------------------|--------|--------|-----------------|
| BLOCKER | License | `pricing.html:211-214`, `terms.html:80-87`, `index.html:1227-1237` | Metraly uses Functional Source License, source-available terms, and converts to Apache/MIT. | AGPLv3 core with open-core Pro/Enterprise modules unless canonical docs change. | `../docs/decisions/2026-05-04.md`, `../docs/strategy/monetization-v2.md`, `../docs/PROGRESS.md` | Legal/commercial contradiction; undermines trust and may misstate rights. | Phase 2, Phase 4 |
| BLOCKER | Pricing | `pricing.html:126-200` | No seat fees, no data caps, no feature gating; all features free. | Community is free with volume limits; Pro is `$99/mo` up to 10 active users + `$15/dev/mo` above 10; Enterprise starts `$15K/year` up to 50 dev + `$120/dev/year` above 50. | `../docs/strategy/monetization-v2.md`, `../docs/PROGRESS.md` | Wrong commercial offer and wrong upgrade model. | Phase 2 |
| BLOCKER | Demo | `login.html:72-84`, `login.html:121-129` | Live demo instance with hard-coded credentials; login redirects to `index.html#demo`. | User wants a real clickable synthetic-data app demo; no real credentials/company data. | User request, `../docs/product/onboarding.md`, `../app/ui` | CTA fails; demo promise is false. | Phase 3 |
| HIGH | Product readiness | `index.html:967-1032`, `docs.html:653-668` | AI appears available through built-in/BYO/local modes. | AI system is deeply specified but implementation status must be labeled from `../docs/STATUS.md`; avoid shipped implication if not true. | `../docs/STATUS.md`, `../docs/tech/ai-system.md`, `../docs/product/ai-assistant.md` | Over-promises strategic Pro feature. | Phase 2, Phase 4 |
| HIGH | Plugin readiness | `index.html:1102-1158`, `docs.html:676-696` | GitHub/GitLab/Jira plugins marked stable; plugin SDK described as partially stable. | Plugin system is planned/specified; actual implementation status must come from `../docs/STATUS.md` and `../app`. | `../docs/STATUS.md`, `../docs/product/plugin-system.md`, `../docs/tech/plugin-system.md` | Misleads prospects about available integrations/ecosystem. | Phase 2, Phase 4 |
| HIGH | Enterprise/compliance | `index.html:851`, `index.html:1167-1212`, `docs.html:703-723` | SOC 2 compatible, production-grade from day one, air-gapped/enterprise capabilities. | Enterprise readiness is planned/sequenced; compliance claims require careful legal/status support. | `../docs/STATUS.md`, `../docs/legal/legal-risks-and-compliance.md`, `../app/.planning/ROADMAP.md` | Creates compliance/legal credibility risk. | Phase 2, Phase 4 |
| HIGH | Social proof | `index.html:1436-1471` | Testimonials from named early adopters and production-like deployments. | Remove or replace unless backed by real approved references. | `../docs/STATUS.md`, investor honesty notes in `../docs/PROGRESS.md` | Fabricated/unsupported traction risk. | Phase 2 |
| HIGH | Documentation/API | `docs.html:591-596` | AI/plugin API endpoints are documented as usable. | Verify actual API state; mark stub/planned/designed using `../docs/STATUS.md` and `../app/cmd/api`. | `../docs/STATUS.md`, `../app` | Developers may follow broken docs. | Phase 4 |
| MEDIUM | Quickstart/TTFI | `index.html:1271-1318`, `docs.html:388-426`, `login.html:101-104` | Up and running/demo data in 5 minutes. | TTFI < 5 minutes is target from onboarding docs; current status/proof must be verified. | `../docs/product/onboarding.md`, `../docs/STATUS.md`, `../app/Makefile` | Good positioning but needs evidence/caveat. | Phase 2, Phase 4, Phase 5 |
| MEDIUM | Privacy/external services | `privacy.html:73-80`, `index.html` script/font tags | Privacy-first/no tracking posture while site loads Google Fonts and unpkg CDN scripts. | Either self-host/remove external assets or explain website-only dependencies consistently. | `../docs/strategy/positioning-uvp.md`, `../docs/legal/legal-risks-and-compliance.md`, `.planning/codebase/INTEGRATIONS.md` | Privacy message can look inconsistent. | Phase 5 |
| MEDIUM | Docs license FAQ | `docs.html:824-825` | FSL explanation in FAQ. | AGPLv3/open-core explanation. | `../docs/decisions/2026-05-04.md`, `../docs/strategy/monetization-v2.md` | Same license issue appears in docs surface. | Phase 4 |
| MEDIUM | Roadmap dates/status | `docs.html`, `index.html` feature sections | Current pages mix future, designed, beta, and shipped claims without consistent labels. | Use `../docs/STATUS.md`; respect later roadmap reality-check/published-docs policy in `../docs/PROGRESS.md`. | `../docs/STATUS.md`, `../docs/PROGRESS.md`, `../docs/product/roadmap.md` | Users cannot tell what exists now. | Phase 2, Phase 4 |
| LOW | Missing asset | `index.html:1553` | Loads absent `tweaks-panel.jsx`. | Remove or implement intentionally. | `.planning/codebase/CONCERNS.md` | Console error; not source-truth but launch-quality issue. | Phase 5 |
| LOW | Blog placeholders | `index.html:1360-1390` | Dated blog cards appear published. | Link to real content or remove/mark coming soon. | `../docs` content inventory | Cosmetic credibility issue. | Phase 2 |

## Required Resolution Order

1. **Phase 2** must resolve license, pricing, unsupported marketing, social proof, and home-page readiness language before any public launch.
2. **Phase 3** must replace the fake demo entry with a safe synthetic-data experience or rewrite CTA copy to avoid a live-demo promise.
3. **Phase 4** must rebuild or reconcile `docs.html` against `../docs`, especially API/AI/plugin/license claims.
4. **Phase 5** must address missing assets, external dependencies, and browser verification.

## Canonical Target Snapshot

- **License:** AGPLv3 core plus open-core paid modules, per `../docs/decisions/2026-05-04.md` and `../docs/strategy/monetization-v2.md`.
- **Pricing:** Community free; Pro `$99/mo` up to 10 active users + `$15/dev/mo` above 10; Enterprise `$15K/year` up to 50 dev + `$120/dev/year` above 50, unless canonical docs change.
- **Status:** `../docs/STATUS.md` governs shipped/designed/strategy/missing labels.
- **Demo:** synthetic Sandbox Inc. data, no real credentials/company data; target behavior described in `../docs/product/onboarding.md`.
- **Positioning:** self-hosted Engineering Intelligence that does not leak, with privacy-first AI and plugin/runtime moat claims only where status supports them.

---
*Contradiction matrix complete: 2026-05-05*
