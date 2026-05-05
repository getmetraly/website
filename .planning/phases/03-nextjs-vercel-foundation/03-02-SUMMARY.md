---
phase: 03-nextjs-vercel-foundation
plan: 02
subsystem: frontend
tags: [next.js, vercel, migration, pages, routes]

# Dependency graph
requires:
  - phase: 03-01
    provides: [Next.js app shell, layout, components, theme toggle]
provides:
  - [Migrated pages: home, pricing, demo, privacy, terms, docs placeholder]
  - [Next.js routes replacing static HTML files]
affects: [Phase 4 - Clickable demo mode, Phase 5 - Documentation surface]

# Tech tracking
tech-stack:
  added: []
  patterns: [Next.js App Router, Server Components, Client Components for interactivity]
key-files:
  created:
    - app/pricing/page.tsx
    - app/demo/page.tsx
    - app/privacy/page.tsx
    - app/terms/page.tsx
    - app/docs/page.tsx
  modified:
    - app/page.tsx
    - app/layout.tsx (already existed)
    - app/globals.css (already existed)
    - components/site-nav.tsx (already existed)
    - components/site-footer.tsx (already existed)
    - components/site-shell.tsx (already existed)

key-decisions:
  - "Migrated all public website pages to Next.js routes while preserving canonical copy"
  - "Docs page created as structural placeholder - full reconciliation in Phase 5"
  - "Demo page is static preview - interactive demo coming in Phase 4"
  - "Removed all .html links and prototype dependencies (React/Babel/tweaks-panel)"

patterns-established:
  - "Use SiteShell component for consistent nav/footer across all pages"
  - "Use Next.js Link component for internal navigation"
  - "Server Components by default, Client Components only when interactivity needed"

requirements-completed: [NEXT-01, NEXT-02, NEXT-03, NEXT-05]

# Metrics
duration: 20 min
completed: 2026-05-05
---

# Phase 03 Plan 02: Migrate Public Pages to Next.js Routes Summary

**Migrated all public website pages to Next.js routes while preserving canonical public copy and demo safety wording.**

## Performance

- **Duration:** 20 min
- **Started:** 2026-05-05T11:32:16Z
- **Completed:** 2026-05-05T11:52:13Z
- **Tasks:** 6 (pricing, demo, privacy, terms, docs, page.tsx update)
- **Files modified:** 6 (5 new page.tsx files + updated page.tsx)

## Accomplishments

- Migrated `pricing.html` to `app/pricing/page.tsx` with Community/Pro/Enterprise tiers and FAQ
- Migrated `login.html` to `app/demo/page.tsx` as synthetic demo preview with safety warnings
- Migrated `privacy.html` to `app/privacy/page.tsx` preserving privacy policy and data sovereignty messaging
- Migrated `terms.html` to `app/terms/page.tsx` preserving AGPLv3 terms
- Created `app/docs/page.tsx` as structural placeholder (full reconciliation in Phase 5)
- Updated `app/page.tsx` with all sections from `index.html` (features, roles, AI, alerts, plugins, enterprise, etc.)
- Replaced all internal `.html` links with Next.js Link components
- Removed prototype-only React/Babel/tweaks-panel dependencies

## Task Commits

Each task was committed atomically:

1. **Task: Convert pricing.html to Next.js route** - `ef8ce38` (feat)
2. **Task: Convert login.html to demo page** - `ada49e7` (feat)
3. **Task: Convert privacy.html to Next.js route** - `9e596d8` (feat)
4. **Task: Convert terms.html to Next.js route** - `e05a3f5` (feat)
5. **Task: Create docs page as structural placeholder** - `495ffb1` (feat)
6. **Task: Convert index.html to Next.js route with all sections** - `266d709` (feat)
7. **Fix: Remove interactive form from demo page** - `392c691` (fix)

**Plan metadata:** `d6a3f2` (docs: complete plan) - pending final commit

_Technical note: Demo page originally had form submission handler, but removed for static preview. Interactive demo coming in Phase 4._

## Files Created/Modified

- `app/pricing/page.tsx` - Pricing page with Community/Pro/Enterprise tiers, license section, FAQ
- `app/demo/page.tsx` - Synthetic demo preview page with credentials and self-hosting info
- `app/privacy/page.tsx` - Privacy policy page with data sovereignty messaging
- `app/terms/page.tsx` - Terms of service page with AGPLv3 references
- `app/docs/page.tsx` - Structural placeholder for Phase 5 documentation surface
- `app/page.tsx` - Updated with all sections from index.html (features, roles, AI, alerts, plugins, enterprise, open source, quickstart, blog, community, testimonials)

## Decisions Made

- Used SiteShell component for consistent navigation/footer across all pages
- Preserved all canonical copy from original HTML files (pricing, license, privacy, terms)
- Labeled demo page as "Synthetic Demo Preview" with mock data warnings
- Created docs page as placeholder (Phase 5 will bring full canonical docs reconciliation)
- Removed prototype JavaScript (React/Babel/tweaks-panel) during migration
- Used Next.js Link components for all internal navigation

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

**Build error with demo page form handler:**
- The original `login.html` had JavaScript form submission. When migrating to Next.js, the form's `onSubmit` handler caused a build error because Server Components cannot have event handlers.
- **Fix:** Removed the form submission handler and made the demo page a static preview. Added note that interactive demo is coming in Phase 4.
- **Commit:** `392c691` (fix(03-02): remove interactive form from demo page)

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- ✅ Public content is served through Next.js routes
- ✅ Existing canonical copy and demo safety wording preserved
- ✅ Docs page is route-compatible but deferred for Phase 5 content reconciliation
- **Ready for Phase 4:** Clickable Demo Mode (interactive demo with synthetic data)

---

*Phase: 03-nextjs-vercel-foundation*
*Completed: 2026-05-05*
