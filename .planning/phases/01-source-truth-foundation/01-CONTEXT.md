# Phase 1: Source Truth Foundation - Context

**Gathered:** 2026-05-05
**Status:** Ready for planning
**Source:** Inline context from user request, `.planning/PROJECT.md`, `.planning/ROADMAP.md`, `.planning/codebase/`, `../docs`, and `../app`

<domain>
## Phase Boundary

Phase 1 does not rewrite public website pages yet. It creates the factual foundation required for safe edits in later phases:

- page-by-page content inventory for current HTML files;
- explicit contradiction matrix for pricing, license, roadmap, demo, and feature-readiness claims;
- documented source-of-truth mapping from website claims to `../docs`;
- documented app/demo source candidates from `../app/ui`;
- documented approach options for demo mode and docs synchronization.

</domain>

<decisions>
## Implementation Decisions

### Source Of Truth
- `../docs` is canonical for public product information: pricing, plans, legal/license, roadmap, product status, positioning, and docs.
- `../docs/STATUS.md` is canonical for product maturity/status.
- `../app` is canonical for implementation status and app/demo behavior.
- `../app/ui` is the first place to inspect for demo screens and mock data.
- `../app/.planning` provides product-level GSD context but should not override `../docs` for public copy where published docs intentionally differ from internal decision logs.

### Scope
- Create planning/reference artifacts only.
- Do not edit `index.html`, `pricing.html`, `docs.html`, `login.html`, `privacy.html`, `terms.html`, or `theme.js` in Phase 1.
- Do not invent canonical pricing/license decisions in `website`.
- Treat FSL/source-available website copy as a known contradiction unless canonical docs are changed.

### Outputs
- `01-CONTENT-INVENTORY.md` must list public pages, claim categories, current claims, source docs, and rewrite notes.
- `01-CONTRADICTIONS.md` must list concrete contradictions with file/line references and canonical target.
- `01-DEMO-DOCS-APPROACH.md` must define options and a recommended path for demo mode and docs synchronization.
- All outputs must be actionable enough that Phase 2 can rewrite public copy without re-discovering source truth.

### the agent's Discretion
- Exact table layouts and wording of planning artifacts.
- Whether to split large inventories by page or category inside one document.
- Whether to include non-blocking notes for visual/style concerns, as long as source-truth issues remain primary.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Planning
- `.planning/PROJECT.md` - Website project context and core value.
- `.planning/REQUIREMENTS.md` - Phase 1 requirement IDs and traceability.
- `.planning/ROADMAP.md` - Phase scope and success criteria.
- `.planning/STATE.md` - Decisions and workflow settings to preserve.
- `.planning/codebase/CONCERNS.md` - Known site contradictions and fragile areas.

### Website Source Files
- `index.html` - Primary marketing page with many product claims.
- `pricing.html` - Pricing/license page with FSL copy and old tier model.
- `docs.html` - Static docs surface with install/API/AI/plugin claims.
- `login.html` - Current fake demo login.
- `privacy.html` - Privacy/demo posture.
- `terms.html` - Terms and license claims.
- `theme.js` - Current shared behavior.

### Canonical Docs
- `../docs/STATUS.md` - Product maturity/status source.
- `../docs/PROGRESS.md` - Published-docs vs internal-decision rule and recent work log.
- `../docs/decisions/2026-05-04.md` - Founder decisions: AGPLv3, US-first, plugin runtime, roadmap reality check.
- `../docs/strategy/monetization-v2.md` - Current published pricing/tier model.
- `../docs/strategy/positioning-uvp.md` - Market positioning and hero/UVP copy.
- `../docs/strategy/positioning.md` - Top-level positioning.
- `../docs/product/onboarding.md` - Sandbox Inc. demo and TTFI target.
- `../docs/product/plugin-system.md` - Product-level plugin tiers/features.
- `../docs/product/roadmap.md` - Product roadmap, with caveat that `STATUS.md` and later progress notes may supersede old dates.
- `../docs/legal/legal-risks-and-compliance.md` - Legal/compliance context.

### App/Demo Sources
- `../app/.planning/PROJECT.md` - App product context and constraints.
- `../app/.planning/REQUIREMENTS.md` - Product requirements, including demo/onboarding/dashboard requirements.
- `../app/.planning/ROADMAP.md` - Product implementation roadmap.
- `../app/ui/src/App.jsx` - App shell candidate.
- `../app/ui/src/api/mockApi.ts` - Mock API candidate.
- `../app/ui/src/types/mocks/*` - Mock data candidate.
- `../app/ui/src/features/*` - Dashboard, AI, marketplace, metrics, onboarding screens.

</canonical_refs>

<specifics>
## Specific Ideas

- Start inventory by scanning exact terms: `FSL`, `Functional Source`, `AGPL`, `source-available`, `Apache`, `Free`, `Pro`, `Enterprise`, `demo`, `Sandbox`, `AI`, `plugin`, `ClickHouse`, `TimescaleDB`, `SOC 2`, `air-gapped`, `5 minutes`, `testimonial`.
- The contradiction matrix should include severity and downstream phase owner.
- The demo/docs approach should make a recommendation, not just list options.
- Good Phase 1 output should be useful even if Phase 2 starts in a separate session.

</specifics>

<deferred>
## Deferred Ideas

- Public HTML rewrite is deferred to Phase 2.
- Building demo mode is deferred to Phase 3.
- Rebuilding docs page is deferred to Phase 4.
- Build/test/tooling implementation is deferred to Phase 5.

</deferred>

---
*Phase: 01-source-truth-foundation*
*Context gathered: 2026-05-05 inline*
