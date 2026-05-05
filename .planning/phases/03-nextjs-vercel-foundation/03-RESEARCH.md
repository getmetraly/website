# Phase 3 Research: Next.js Vercel Foundation

**Phase:** 3 - Next.js Vercel Foundation
**Date:** 2026-05-05

## RESEARCH COMPLETE

## Local Findings

- The website currently has no `package.json`, build tool, framework, or local server.
- Public pages are standalone HTML documents with embedded CSS and some duplicated navigation/footer/theme code.
- `theme.js` is the only shared runtime file and is still untracked prototype content.
- `index.html` still contains a missing React/Babel `tweaks-panel.jsx` path in the prototype tail; a Next.js migration should remove that prototype-only dependency rather than preserve it.
- `docs.html` remains stale by design after Phase 2 and should be migrated structurally now, then reconciled in the later docs phase.

## Next.js / Vercel Findings

Fetched through ctx7 for `/vercel/next.js`:

- App Router uses an `app/layout` root layout that wraps route children and defines `<html>` and `<body>`.
- App Router routes are file-system based, with route pages such as `app/page.tsx` and nested route pages such as `app/pricing/page.tsx`.
- Next.js projects use scripts such as `next dev`, `next build`, and `next start` for local development and production build/start.
- Next.js supports public/static assets through the app/public asset model and Vercel can deploy a standard Next.js project without a custom server.

## Recommended Implementation Shape

- Add TypeScript-based Next.js App Router scaffold:
  - `package.json`
  - `next.config.ts`
  - `tsconfig.json`
  - `app/layout.tsx`
  - `app/globals.css`
  - route pages under `app/`
- Add reusable components:
  - `components/site-shell.tsx`
  - `components/site-nav.tsx`
  - `components/site-footer.tsx`
  - `components/theme-provider.tsx`
  - `components/theme-toggle.tsx`
- Keep the first migration pragmatic:
  - preserve Phase 2 copy;
  - extract shared styles incrementally into `app/globals.css`;
  - avoid a design-system rewrite;
  - make the build pass before polishing.
- Add route compatibility:
  - `/pricing.html` -> `/pricing`
  - `/docs.html` -> `/docs`
  - `/login.html` -> `/demo`
  - `/privacy.html` -> `/privacy`
  - `/terms.html` -> `/terms`
  - `/index.html` -> `/`

## Plan Split

- `03-01`: create Next.js scaffold, shared shell, theme primitives, and initial route skeleton.
- `03-02`: migrate existing page content into routes and remove `.html` link drift.
- `03-03`: add Vercel-compatible build baseline, redirects, smoke checks, and migration verification.

---
*Research complete: 2026-05-05*
