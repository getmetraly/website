# Requirements: Metraly Website

**Defined:** 2026-05-05
**Core Value:** The website must make Metraly's privacy-first self-hosted value credible by showing accurate product information and a working synthetic-data demo.

## v1 Requirements

v1 here means the first launch-ready website baseline: canonical public content, clickable mock-data demo, docs surface, and verification.

### Source Of Truth

- [x] **TRUTH-01**: Website planning records `../docs` as canonical for pricing, plans, license, product status, roadmap, legal, and documentation.
- [x] **TRUTH-02**: Website planning records `../app` as canonical for product implementation status and app/demo UI source.
- [x] **TRUTH-03**: Each public page that describes product facts is reconciled against explicit source documents in `../docs`.
- [x] **TRUTH-04**: Content that describes future or designed capabilities is labeled honestly and does not imply shipped functionality.

### Pricing And License

- [ ] **PRICE-01**: `pricing.html` no longer describes FSL/source-available licensing unless canonical docs are changed first.
- [ ] **PRICE-02**: Pricing page presents Community, Pro, and Enterprise tiers consistent with `../docs/strategy/monetization-v2.md`.
- [ ] **PRICE-03**: Pro pricing shows `$99/mo` for up to 10 active users plus `$15/dev/mo` above 10, unless canonical docs change.
- [ ] **PRICE-04**: Enterprise pricing shows `$15K/year` base up to 50 dev plus `$120/dev/year` above 50, unless canonical docs change.
- [ ] **PRICE-05**: Terms and footer license links no longer contradict AGPLv3/open-core positioning.

### Marketing Content

- [ ] **MKT-01**: Home page headline and supporting copy reflect the canonical self-hosted/private Engineering Intelligence positioning.
- [ ] **MKT-02**: Feature claims are split into shipped, preview, designed, and future where needed using `../docs/STATUS.md`.
- [ ] **MKT-03**: Social proof/testimonials are removed, replaced, or clearly labeled if they are not backed by real customer evidence.
- [ ] **MKT-04**: Quickstart copy matches the current Community Preview stack and does not require deferred dependencies such as ClickHouse.
- [ ] **MKT-05**: Open-source/community copy reflects AGPLv3 and DCO/community strategy from `../docs`.

### Demo Mode

- [ ] **DEMO-01**: "Try Demo" opens a real clickable demo surface instead of only simulating login.
- [ ] **DEMO-02**: Demo uses synthetic/mock data and labels it as synthetic Sandbox Inc. data.
- [ ] **DEMO-03**: Demo includes at least overview/dashboard, metrics, AI insight, onboarding/setup, and marketplace/plugin surfaces where feasible from `../app/ui`.
- [ ] **DEMO-04**: Demo state cannot collect real credentials, real company data, or personal information.
- [ ] **DEMO-05**: Demo content aligns with `../docs/product/onboarding.md` and `../app/ui` mock data structures.

### Documentation Surface

- [ ] **DOCS-01**: `docs.html` is reconciled with canonical `../docs` content.
- [ ] **DOCS-02**: Documentation page clearly distinguishes installation, product docs, technical architecture, legal/compliance, and roadmap/status.
- [ ] **DOCS-03**: Documentation links either point to valid website sections or valid repository/docs paths.
- [ ] **DOCS-04**: Stale or unsupported docs claims are removed or marked as planned.

### Site Engineering

- [ ] **SITE-01**: Missing `tweaks-panel.jsx` reference is removed or intentionally implemented.
- [ ] **SITE-02**: Shared styling/theme/navigation/footer patterns are consolidated enough to avoid multi-page drift.
- [ ] **SITE-03**: External CDN/font usage is reviewed and adjusted to preserve privacy-first positioning.
- [ ] **SITE-04**: Project has a local run/build path appropriate for the chosen architecture.
- [ ] **SITE-05**: Project has automated checks for links, console errors, core browser flows, and responsive layout smoke.

## v2 Requirements

Deferred beyond the first launch-ready baseline.

### Growth And Content

- **GROW-01**: Website includes competitor comparison pages such as Metraly vs LinearB and Metraly vs DevLake.
- **GROW-02**: Website includes ROI calculator based on canonical pricing.
- **GROW-03**: Website includes blog/content system sourced from versioned content files.
- **GROW-04**: Website includes localized market pages for UK/EU/DACH/FR after US-first baseline is stable.

### Advanced Demo

- **ADVDEMO-01**: Demo can run as an isolated hosted app instance with reset schedule.
- **ADVDEMO-02**: Demo can switch between guided tour and free exploration.
- **ADVDEMO-03**: Demo can capture opt-in qualified leads without violating privacy positioning.

## Out of Scope

| Feature | Reason |
|---------|--------|
| Backend implementation inside `website` | Product runtime belongs in `../app` |
| Real production demo auth in first milestone | Synthetic demo is safer and sufficient for website validation |
| New canonical monetization decisions in website | Canonical pricing/license decisions belong in `../docs` |
| FSL/source-available website copy | Conflicts with current AGPLv3/open-core direction |
| Full managed SaaS positioning | Conflicts with self-hosted/privacy-first core for this milestone |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| TRUTH-01 | Phase 1 | Complete |
| TRUTH-02 | Phase 1 | Complete |
| TRUTH-03 | Phase 1 | Complete |
| TRUTH-04 | Phase 1 | Complete |
| PRICE-01 | Phase 2 | Pending |
| PRICE-02 | Phase 2 | Pending |
| PRICE-03 | Phase 2 | Pending |
| PRICE-04 | Phase 2 | Pending |
| PRICE-05 | Phase 2 | Pending |
| MKT-01 | Phase 2 | Pending |
| MKT-02 | Phase 2 | Pending |
| MKT-03 | Phase 2 | Pending |
| MKT-04 | Phase 2 | Pending |
| MKT-05 | Phase 2 | Pending |
| DEMO-01 | Phase 3 | Pending |
| DEMO-02 | Phase 3 | Pending |
| DEMO-03 | Phase 3 | Pending |
| DEMO-04 | Phase 3 | Pending |
| DEMO-05 | Phase 3 | Pending |
| DOCS-01 | Phase 4 | Pending |
| DOCS-02 | Phase 4 | Pending |
| DOCS-03 | Phase 4 | Pending |
| DOCS-04 | Phase 4 | Pending |
| SITE-01 | Phase 5 | Pending |
| SITE-02 | Phase 5 | Pending |
| SITE-03 | Phase 5 | Pending |
| SITE-04 | Phase 5 | Pending |
| SITE-05 | Phase 5 | Pending |

**Coverage:**
- v1 requirements: 28 total
- Mapped to phases: 28
- Unmapped: 0

---
*Requirements defined: 2026-05-05*
*Last updated: 2026-05-05 after Phase 1 verification*
