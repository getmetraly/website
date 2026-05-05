# Phase 1 Research: Source Truth Foundation

**Phase:** 1 - Source Truth Foundation
**Date:** 2026-05-05
**Question:** What do we need to know to plan this phase well?

## RESEARCH COMPLETE

## Key Findings

### 1. This phase is documentation/inventory work, not implementation

The website currently contains untracked static HTML prototype files. Phase 1 should produce planning/reference artifacts only so later phases can make precise public-page edits. Editing HTML during this phase would blur discovery and implementation.

### 2. Public copy has several high-risk contradiction categories

Known categories from `.planning/codebase/CONCERNS.md` and source scans:

- **License**: website says FSL/source-available/Apache conversion; canonical docs say AGPLv3 open-core.
- **Pricing**: website says all features free/custom support; canonical pricing says Community/Pro/Enterprise with specific Pro and Enterprise formulas.
- **Feature readiness**: website presents AI, plugins, enterprise, air-gap, SOC2-compatible, and testimonials more confidently than `../docs/STATUS.md` supports.
- **Demo**: `login.html` claims a live demo instance but implements only a fake redirect.
- **Docs**: `docs.html` contains static API/config/plugin/AI claims detached from canonical docs.

### 3. Source precedence matters

Use this precedence for Phase 1 outputs:

1. `../docs/PROGRESS.md` where it records explicit founder/published-docs policy after previous docs were created.
2. `../docs/STATUS.md` for shipped/designed/strategy status.
3. `../docs/strategy/monetization-v2.md` for published pricing.
4. `../docs/decisions/2026-05-04.md` for internal decisions where no later published-docs rule supersedes them.
5. `../app/.planning/*` for app implementation context and product requirements.
6. Current website HTML as the object being audited, not as source of truth.

### 4. Phase 1 artifacts should be grep-friendly

Later phases need to edit static files. Each contradiction should include:

- website file path;
- line number or grep anchor;
- current claim;
- canonical source;
- target state;
- severity;
- downstream phase owner.

### 5. Demo approach needs an early architecture recommendation

User wants a clickable app demo with mock data. Phase 1 should document candidate approaches:

- **Static demo clone**: fastest, but drifts from `../app/ui`.
- **Bundled `../app/ui` subset**: higher setup cost, lower drift if components are reused.
- **Hosted demo app**: closest to product, but requires deployment/auth/reset/data handling and is not needed for first website milestone.

Recommended default to test in Phase 3: bundled or copied `../app/ui` demo shell only after inspecting dependency and styling coupling. If too expensive, build a clearly labeled static demo using `../app/ui` visual/data contracts.

### 6. Plan split

Two independent plans are enough:

- Plan 01-01: content inventory and contradiction matrix.
- Plan 01-02: demo/docs integration approach.

They can run in parallel because they write different artifacts and read the same source files.

## Planning Guidance

- Avoid new external dependencies in Phase 1.
- Prefer `rg`/line references for inventory work.
- Do not modify website pages yet.
- Produce artifacts that are stable inputs for Phase 2 and Phase 3.
- Commit planning artifacts only; leave untracked prototype HTML untouched unless execution phase explicitly edits them later.

---
*Research complete: 2026-05-05*
