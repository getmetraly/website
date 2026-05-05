# Metraly Website

## What This Is

Metraly Website is the public website for Metraly: a marketing, pricing, documentation, legal, and demo entry surface for the self-hosted Engineering Intelligence platform. The site must use `../docs` as the canonical source for product truth and `../app` as the source for the real app/demo experience.

The current codebase is a static HTML prototype from a Claude design pass. The next work is to turn it into an honest, synchronized site that can explain Metraly clearly and let visitors click through a mock-data demo.

## Core Value

The website must make Metraly's privacy-first self-hosted value credible by showing accurate product information and a working synthetic-data demo.

## Requirements

### Validated

- ✓ Static HTML pages exist for home, pricing, docs, demo login, privacy, and terms — existing
- ✓ A shared theme toggle exists in `theme.js` — existing
- ✓ The website is a separate git repository from `../app` and `../docs` — existing
- ✓ Codebase map exists in `.planning/codebase/` — Phase 0 / initialization
- ✓ `../app` has existing GSD planning and a React/Vite UI that can inform the demo — existing
- ✓ `../docs` has canonical strategy, product, legal, technical, and status documents — existing

### Active

- [ ] Website content uses `../docs` and `../app/.planning` as source-of-truth for pricing, plans, license, product status, roadmap, and docs.
- [ ] All stale FSL/source-available claims are replaced with the current AGPLv3 open-core positioning unless the founder explicitly changes the canonical docs.
- [ ] Pricing page presents Community, Pro, and Enterprise consistently with `../docs/strategy/monetization-v2.md` and the later published-docs rule in `../docs/PROGRESS.md`.
- [ ] Demo entry opens a clickable Metraly app experience with synthetic/mock data instead of a fake login redirect.
- [ ] Demo mode clearly labels synthetic Sandbox Inc. data and avoids implying production readiness that `../docs/STATUS.md` does not support.
- [ ] Documentation page is synchronized with or explicitly sourced from `../docs`.
- [ ] Website has enough build/test/verification structure to prevent broken links, console errors, stale content, and mobile layout regressions.

### Out of Scope

- Implementing the Metraly backend inside `website` — source of product runtime remains `../app`.
- Real production authentication for demo visitors in the first website milestone — demo should use synthetic data and safe mock/demo boundaries.
- Creating new canonical pricing, license, or roadmap decisions in the website repo — canonical changes belong in `../docs`.
- Rewriting the full `../app` product as part of website initialization — only demo-facing integration is in scope.
- Keeping FSL copy unless canonical docs are changed — current canonical direction is AGPLv3/open-core.

## Context

- User requested `$gsd-new-project` for the website and explicitly said the project must be linked to `../app` and `../docs`.
- User confirmed codebase mapping should happen first because the site needs more than a business-card page: it needs a demo mode where visitors can open the app with mock data and click around.
- User confirmed GSD settings should be taken from `../app`.
- `gsd-sdk` is unavailable in PATH, so GSD artifacts are maintained manually in this session.
- Current `website` files are untracked design-export/prototype files. Planning commits should not accidentally stage or modify them unless implementation explicitly starts.
- `../docs/STATUS.md` is the canonical maturity/status source for what is real, designed, strategic, or missing.
- `../docs/PROGRESS.md` records that published documents can intentionally differ from internal decision logs; for website copy, prefer external/published commitments unless the founder requests a change.
- `../docs/product/onboarding.md` describes the desired Sandbox Inc. demo behavior and TTFI target.
- `../app/ui` contains the app screens and mock data most likely needed for the demo.

## Constraints

- **Source of truth**: Use `../docs` first for public product information; use `../app/.planning` and codebase state for implementation/status context.
- **License copy**: Do not publish FSL/source-available claims while canonical docs say AGPLv3/open-core.
- **Demo safety**: Demo data must be synthetic and visibly labeled.
- **Privacy positioning**: External fonts/CDNs/analytics must be reviewed against privacy-first messaging.
- **Repository boundary**: `website`, `../app`, and `../docs` are separate repositories; do not assume a monorepo commit boundary.
- **Workflow**: Use app defaults: YOLO, coarse granularity, parallel execution preference, commit planning docs, research, plan check, verifier, no Nyquist validation for coarse.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Map codebase before project initialization | Existing static prototype plus future demo/docs integration needs a baseline map | Good |
| Use `../app` GSD defaults | User explicitly requested "take from ../app" | Pending |
| Treat `../docs` as canonical for public content | User requested pricing/plans/info be updated from docs | Pending |
| Treat current website as prototype, not product truth | Multiple pages conflict with docs on license/pricing/readiness | Pending |
| Build demo from `../app`/mock data rather than fake login | User explicitly wants visitors to click through app with mock data | Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `$gsd-transition`):
1. Requirements invalidated? -> Move to Out of Scope with reason
2. Requirements validated? -> Move to Validated with phase reference
3. New requirements emerged? -> Add to Active
4. Decisions to log? -> Add to Key Decisions
5. "What This Is" still accurate? -> Update if drifted

**After each milestone** (via `$gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check -> still the right priority?
3. Audit Out of Scope -> reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-05-05 after initialization*
