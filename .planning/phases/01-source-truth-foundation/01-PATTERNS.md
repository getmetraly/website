# Phase 1 Patterns: Source Truth Foundation

**Phase:** 01-source-truth-foundation
**Date:** 2026-05-05

## Existing Artifact Patterns

### GSD Planning Documents

- `.planning/PROJECT.md` uses concise sections with requirements, context, constraints, key decisions, and evolution.
- `.planning/REQUIREMENTS.md` uses requirement IDs grouped by category and a traceability table.
- `.planning/ROADMAP.md` uses phases, success criteria, and plan IDs.
- `.planning/codebase/*.md` uses source-backed markdown references with explicit file paths.

**Use for Phase 1 outputs:** Markdown tables with explicit paths and source references.

### Source Reference Pattern

Use inline file paths and line numbers where possible:

- `pricing.html:211` - current FSL heading.
- `terms.html:81` - current FSL software license claim.
- `index.html:1227` - current FSL open-source copy.
- `login.html:129` - comment saying real deployment would redirect to demo instance.

**Use for Phase 1 outputs:** one claim per row; avoid prose-only inventories.

### Canonical Source Pattern

Use docs paths, not copied long quotes:

- `../docs/strategy/monetization-v2.md` - pricing/tier model.
- `../docs/decisions/2026-05-04.md` - AGPLv3 and roadmap reality check.
- `../docs/PROGRESS.md` - published-docs policy.
- `../docs/STATUS.md` - maturity/status.
- `../docs/product/onboarding.md` - Sandbox Inc. demo target.

**Use for Phase 1 outputs:** identify exact source doc and section/topic, then summarize target state.

## Files To Create

- `.planning/phases/01-source-truth-foundation/01-CONTENT-INVENTORY.md`
- `.planning/phases/01-source-truth-foundation/01-CONTRADICTIONS.md`
- `.planning/phases/01-source-truth-foundation/01-DEMO-DOCS-APPROACH.md`

## Files Not To Modify In Phase 1

- `index.html`
- `pricing.html`
- `docs.html`
- `login.html`
- `privacy.html`
- `terms.html`
- `theme.js`

## Verification Pattern

Use shell checks:

```bash
test -s .planning/phases/01-source-truth-foundation/01-CONTENT-INVENTORY.md
test -s .planning/phases/01-source-truth-foundation/01-CONTRADICTIONS.md
test -s .planning/phases/01-source-truth-foundation/01-DEMO-DOCS-APPROACH.md
rg -n "pricing.html|index.html|docs.html|login.html|terms.html|privacy.html" .planning/phases/01-source-truth-foundation/01-CONTENT-INVENTORY.md
rg -n "FSL|AGPL|Pro|Enterprise|demo|docs" .planning/phases/01-source-truth-foundation/01-CONTRADICTIONS.md
rg -n "../app/ui|../docs|recommended" .planning/phases/01-source-truth-foundation/01-DEMO-DOCS-APPROACH.md
```

---
*Pattern mapping complete: 2026-05-05*
