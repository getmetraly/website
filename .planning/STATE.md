---
gsd_state_version: 1.0
milestone: v1.0
milestone_name: milestone
status: Ready to plan
last_updated: "2026-05-05T12:11:28.650Z"
progress:
  total_phases: 7
  completed_phases: 3
  total_plans: 8
  completed_plans: 8
  percent: 100
---

# GSD State: Metraly Website

**Initialized:** 2026-05-05
**Current focus:** Phase 03 — nextjs-vercel-foundation

## Project Reference

See: `.planning/PROJECT.md` (updated 2026-05-05)

**Core value:** The website must make Metraly's privacy-first self-hosted value credible by showing accurate product information and a working synthetic-data demo.
**Canonical docs:** `../docs`
**Canonical status:** `../docs/STATUS.md`
**App/demo source:** `../app`, especially `../app/ui`
**Nearest milestone:** Website canonicalization plus clickable demo

## Workflow Settings

- Mode: YOLO
- Granularity: Coarse
- Execution: Parallel
- Commit planning docs: Yes
- Research: Yes
- Plan check: Yes
- Verifier: Yes
- Nyquist validation: No for coarse granularity
- Model profile: Inherit/current default

## Current Roadmap

| Phase | Status | Goal |
|-------|--------|------|
| 1 | Complete | Source Truth Foundation |
| 2 | Complete | Canonical Public Copy |
| 3 | Complete | Next.js Vercel Foundation (3/3 plans) |
| 4 | Pending | Clickable Demo Mode |
| 5 | Pending | Documentation Surface |
| 6 | Pending | Launch Verification |

## Decisions To Preserve

- Link this website project to `../app` and `../docs`.
- Use `../docs` as source-of-truth for pricing, plans, legal/license, product positioning, documentation, and public claims.
- Use `../app` and `../app/ui` as source-of-truth for app/demo behavior.
- Replace current FSL/source-available copy unless canonical docs are changed first.
- Convert the website to a Next.js app deployable on Vercel before building the clickable demo mode.
- Build a real synthetic-data demo mode instead of a fake login redirect.
- Use `../app` GSD settings for this project.

## Known Risks

- `docs.html` and `theme.js` are still untracked prototype files until the Next.js migration absorbs or replaces them.
- `gsd-sdk` is unavailable in PATH, so GSD artifacts were created manually.
- The website, app, and docs are separate git repositories; changes must not assume one commit spans all three.

## Next Action

Phase 3 Complete. Ready for Phase 4:

```text
$gsd-execute-phase 4
```

Phase 3, Plan 03 completed: Next.js site is now buildable and deployable to Vercel with legacy .html redirects.
