# Phase 2: Canonical Public Copy - Context

**Gathered:** 2026-05-05
**Status:** Ready for execution planning
**Source:** Phase 1 inventory, contradiction matrix, roadmap, requirements, and canonical docs.

## Phase Boundary

Phase 2 updates public website copy to remove the highest-risk stale claims:

- pricing/license/legal copy;
- home-page positioning and feature readiness;
- unsupported proof points, quickstart over-certainty, and footer license language;
- demo copy only where needed to avoid promising a real live demo before Phase 3.

Phase 2 does not build the clickable demo and does not rebuild `docs.html`; those are Phase 3 and Phase 4.

## Locked Decisions

- Replace FSL/source-available/Apache conversion language with AGPLv3/open-core language.
- Use `../docs/strategy/monetization-v2.md` pricing unless canonical docs change:
  - Community: $0 self-hosted with volume limits.
  - Pro: `$99/mo` up to 10 active users + `$15/dev/mo` above 10.
  - Enterprise: `$15K/year` up to 50 dev + `$120/dev/year` above 50.
- Claims about AI/plugins/Enterprise must be status-aware and must not imply fully shipped capabilities when `../docs/STATUS.md` says designed/planned.
- Remove or de-risk unsupported testimonials/social proof.
- Keep self-hosted/privacy-first positioning.

## Canonical References

- `.planning/phases/01-source-truth-foundation/01-CONTENT-INVENTORY.md`
- `.planning/phases/01-source-truth-foundation/01-CONTRADICTIONS.md`
- `.planning/phases/01-source-truth-foundation/01-DEMO-DOCS-APPROACH.md`
- `../docs/strategy/monetization-v2.md`
- `../docs/strategy/positioning-uvp.md`
- `../docs/decisions/2026-05-04.md`
- `../docs/PROGRESS.md`
- `../docs/STATUS.md`
- `../docs/product/onboarding.md`
- `../docs/legal/legal-risks-and-compliance.md`

## Deferred

- Clickable demo implementation.
- Full docs page reconciliation.
- Build/test/tooling.

---
*Context gathered: 2026-05-05*
