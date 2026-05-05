---
phase: 01-source-truth-foundation
plan: 02
subsystem: demo-docs-approach
tags:
  - demo
  - docs
  - source-traceability
key-files:
  - .planning/phases/01-source-truth-foundation/01-DEMO-DOCS-APPROACH.md
metrics:
  tasks_completed: 2
---

# Summary: Plan 01-02

## Completed

| Task | Result |
|------|--------|
| Document demo architecture options | Added static demo clone, bundled `../app/ui` subset, and hosted demo app options with recommendation. |
| Document docs synchronization approach | Added manual reconciliation, generated static docs, and source-index options with source map and recommendation. |

## Key Decisions

- Recommended Phase 3 path: bundled `../app/ui` demo subset first, static demo clone as fallback, hosted demo deferred.
- Recommended Phase 4 path: manual reconciliation with explicit source map first, generated docs later if/when build tooling exists.
- Demo must use synthetic Sandbox Inc. or equivalent data and must not collect real credentials/company data.

## Verification

- `01-DEMO-DOCS-APPROACH.md` exists.
- It references `../app/ui`, `mockApi`, synthetic/Sandbox Inc. demo requirements, and recommended path.
- It references `../docs/STATUS.md`, `monetization-v2`, `positioning-uvp`, onboarding, legal, AI, and plugin source docs.
- Public HTML files were not modified.

## Deviations

None.

## Self-Check: PASSED

Plan outputs satisfy TRUTH-02, TRUTH-03, and TRUTH-04 for Phase 1 planning purposes.

---
*Plan complete: 2026-05-05*
