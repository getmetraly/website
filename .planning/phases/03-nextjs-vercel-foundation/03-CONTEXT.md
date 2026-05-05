# Phase 3: Next.js Vercel Foundation - Context

**Gathered:** 2026-05-05
**Status:** Ready for execution planning
**Source:** User request, Phase 2 completion, roadmap correction, codebase map, and current Next.js docs fetched through ctx7.

## Phase Boundary

Phase 3 converts the website repository from standalone HTML prototype files into a Next.js application that can be deployed on Vercel.

This phase delivers:

- Next.js App Router project scaffold;
- reusable site layout, theme, navigation, footer, and style primitives;
- migrated public pages for home, pricing, docs, demo preview, privacy, and terms;
- route compatibility for current `.html` entry points where needed;
- local build/dev scripts and Vercel-compatible build baseline.

This phase does not build the full clickable product demo. It only preserves the current synthetic demo preview route and creates the application foundation needed for Phase 4.

## Locked Decisions

- Use Next.js App Router, not a generic static bundler, because the user explicitly asked for a Next.js application deployable on Vercel.
- Keep canonical public copy already completed in Phase 2.
- Preserve current public surfaces: home, pricing, docs, demo preview, privacy, and terms.
- Do not require secrets, a backend, or `../app` at Vercel build time.
- Treat `docs.html` content as a temporary migrated page; full docs reconciliation remains Phase 5.
- Route links should move away from `.html` URLs, but compatibility redirects should avoid breaking old entry points.
- Demo route remains a synthetic preview until Phase 4 replaces it with a real clickable app demo.

## Canonical References

- `.planning/ROADMAP.md`
- `.planning/REQUIREMENTS.md`
- `.planning/STATE.md`
- `.planning/phases/02-canonical-public-copy/02-VERIFICATION.md`
- `.planning/codebase/STACK.md`
- `.planning/codebase/STRUCTURE.md`
- `index.html`
- `pricing.html`
- `docs.html`
- `login.html`
- `privacy.html`
- `terms.html`
- `theme.js`
- `../docs/STATUS.md`
- `../docs/product/onboarding.md`

## Framework References

- ctx7 library result: `/vercel/next.js`
- ctx7 docs fetched for: App Router layout/pages, static assets, migration, install scripts, and production build path.

## Deferred

- Clickable app demo sourced from `../app/ui`.
- Full docs content reconciliation from `../docs`.
- Deep browser automation and launch QA beyond the build/smoke checks needed for migration.

---
*Context gathered: 2026-05-05*
