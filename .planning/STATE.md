# GSD State: Metraly Website

**Initialized:** 2026-05-05
**Current focus:** Phase 1 - Source Truth Foundation

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
| 1 | Pending | Source Truth Foundation |
| 2 | Pending | Canonical Public Copy |
| 3 | Pending | Clickable Demo Mode |
| 4 | Pending | Documentation Surface |
| 5 | Pending | Launch Verification |

## Decisions To Preserve

- Link this website project to `../app` and `../docs`.
- Use `../docs` as source-of-truth for pricing, plans, legal/license, product positioning, documentation, and public claims.
- Use `../app` and `../app/ui` as source-of-truth for app/demo behavior.
- Replace current FSL/source-available copy unless canonical docs are changed first.
- Build a real synthetic-data demo mode instead of a fake login redirect.
- Use `../app` GSD settings for this project.

## Known Risks

- Current HTML files are untracked prototype files and contain stale claims.
- `gsd-sdk` is unavailable in PATH, so GSD artifacts were created manually.
- The website, app, and docs are separate git repositories; changes must not assume one commit spans all three.

## Next Action

Plan Phase 1:

```text
$gsd-plan-phase 1
```
