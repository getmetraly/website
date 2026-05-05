# Roadmap: Metraly Website

**Created:** 2026-05-05
**Scope:** marketing website, documentation surface, and clickable demo mode
**Canonical sources:** `../docs`, `../app`, `../app/.planning`

## Overview

The website should move from a static design prototype to a trustworthy public surface in five coarse phases. First it establishes source-of-truth rules, then fixes public product/pricing/legal claims, then adds a real mock-data demo, then syncs documentation, and finally adds the engineering checks needed to keep the site reliable.

## Phases

- [x] **Phase 1: Source Truth Foundation** - Lock website source-of-truth rules and content inventory.
- [x] **Phase 2: Canonical Public Copy** - Rewrite pricing, license, marketing, and legal claims from `../docs`.
- [ ] **Phase 3: Clickable Demo Mode** - Replace fake demo login with a synthetic-data app experience sourced from `../app/ui`.
- [ ] **Phase 4: Documentation Surface** - Reconcile `docs.html` with `../docs` and establish a sync path.
- [ ] **Phase 5: Launch Verification** - Add shared site structure and checks for links, console errors, responsiveness, and privacy-sensitive dependencies.

## Phase Details

### Phase 1: Source Truth Foundation
**Goal**: Make source-of-truth and content drift visible before editing public pages.
**Depends on**: Codebase map complete
**Requirements**: TRUTH-01, TRUTH-02, TRUTH-03, TRUTH-04
**Success Criteria** (what must be TRUE):
  1. A page-by-page content inventory lists which `../docs` files govern each claim.
  2. Pricing, license, roadmap, demo, and feature-readiness contradictions are explicitly documented.
  3. `../app/ui` demo source candidates and mock-data sources are documented.
  4. The next implementation phase can update copy without guessing what is canonical.
**Plans**: 2 plans

Plans:
- [ ] 01-01: Build content inventory and contradiction matrix
- [ ] 01-02: Define demo/docs integration approach

### Phase 2: Canonical Public Copy
**Goal**: Replace stale prototype claims with accurate public website copy.
**Depends on**: Phase 1
**Requirements**: PRICE-01, PRICE-02, PRICE-03, PRICE-04, PRICE-05, MKT-01, MKT-02, MKT-03, MKT-04, MKT-05
**Success Criteria** (what must be TRUE):
  1. Pricing page describes Community, Pro, and Enterprise consistently with canonical docs.
  2. Home page and footer no longer mention FSL/source-available conversion.
  3. Feature and roadmap claims are honest about current status vs planned capabilities.
  4. Legal pages no longer contradict the license and demo/data posture.
**Plans**: 3 plans

Plans:
- [x] 02-01: Rewrite pricing/license/legal copy
- [x] 02-02: Rewrite home-page positioning and feature readiness
- [x] 02-03: Clean unsupported proof points, quickstart, and footer links

### Phase 3: Clickable Demo Mode
**Goal**: Let visitors click through a realistic Metraly app demo with synthetic data.
**Depends on**: Phase 2
**Requirements**: DEMO-01, DEMO-02, DEMO-03, DEMO-04, DEMO-05
**Success Criteria** (what must be TRUE):
  1. "Try Demo" opens a usable demo surface rather than redirecting back to the marketing page.
  2. Demo screens show synthetic Sandbox Inc. data and clearly label it as synthetic.
  3. Demo includes core surfaces from `../app/ui` or a faithful static/mock equivalent.
  4. Demo does not accept or imply storage of real credentials/company data.
**Plans**: 3 plans

Plans:
- [ ] 03-01: Choose and scaffold demo architecture
- [ ] 03-02: Wire mock data and core demo screens
- [ ] 03-03: Add demo safety labels, navigation, and reset/entry behavior

### Phase 4: Documentation Surface
**Goal**: Make website docs reflect `../docs` instead of stale copied prose.
**Depends on**: Phase 3
**Requirements**: DOCS-01, DOCS-02, DOCS-03, DOCS-04
**Success Criteria** (what must be TRUE):
  1. `docs.html` content maps to canonical docs sections or valid repository links.
  2. Unsupported installation/API/architecture claims are removed or labeled as planned.
  3. Docs navigation separates quickstart, product docs, tech docs, roadmap/status, legal/compliance.
  4. A repeatable sync process or manual checklist exists for future docs updates.
**Plans**: 2 plans

Plans:
- [ ] 04-01: Rebuild docs page content model from `../docs`
- [ ] 04-02: Add docs link validation and source traceability

### Phase 5: Launch Verification
**Goal**: Give the website a maintainable engineering baseline before public launch.
**Depends on**: Phase 4
**Requirements**: SITE-01, SITE-02, SITE-03, SITE-04, SITE-05
**Success Criteria** (what must be TRUE):
  1. Missing assets and console errors are resolved.
  2. Shared styling/theme/nav/footer drift is reduced.
  3. External CDN/font usage is either removed, self-hosted, or explicitly justified.
  4. Local run/build commands exist if needed by the chosen demo architecture.
  5. Automated checks cover core links, demo entry, theme toggle, and responsive smoke.
**Plans**: 3 plans

Plans:
- [ ] 05-01: Consolidate shared site assets and remove missing references
- [ ] 05-02: Add local run/build/test checks
- [ ] 05-03: Run browser verification and final launch audit

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Source Truth Foundation | 2/2 | Complete | 2026-05-05 |
| 2. Canonical Public Copy | 3/3 | Complete | 2026-05-05 |
| 3. Clickable Demo Mode | 0/3 | Not started | - |
| 4. Documentation Surface | 0/2 | Not started | - |
| 5. Launch Verification | 0/3 | Not started | - |

## Next Phase

**Phase 3: Clickable Demo Mode** should be planned next.

Recommended next command:

```text
$gsd-plan-phase 3
```
