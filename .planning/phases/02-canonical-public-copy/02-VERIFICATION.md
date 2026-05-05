# Phase 2 Verification: Canonical Public Copy

**Verified:** 2026-05-05
**Verdict:** PASS

## Goal

Replace stale prototype claims with accurate public website copy based on `../docs` and current product status.

## Evidence

- `pricing.html` now presents Community, Pro, and Enterprise tiers from `../docs/strategy/monetization-v2.md`.
- `terms.html`, `pricing.html`, home page footer, and home open-core section no longer describe FSL/source-available licensing or Apache conversion.
- Home page AI, plugin, and Enterprise copy now labels roadmap and preview capabilities instead of implying mature shipped functionality.
- Unsupported testimonials were replaced with design partner validation copy.
- `login.html` and `privacy.html` now describe the demo as a synthetic mock-data preview instead of a live shared instance.

## Checks Run

```text
rg -n "FSL|Functional Source|source-available|Apache 2.0|FSL License" pricing.html terms.html
rg -n "\$99|\$15/dev|\$15K|\$120/dev|AGPLv3|Community|Pro|Enterprise" pricing.html terms.html
rg -n "FSL|Functional Source|source-available|Apache 2.0|FSL License|Production-grade from<br />day one" index.html
rg -n "AGPLv3|open-core|self-hosted|privacy|Community|Pro|Enterprise|preview|planned" index.html
rg -n "Live Demo Instance|Trusted by engineering teams|SOC 2 auditors|AWS GovCloud|Data resets every 24h" index.html login.html privacy.html
rg -n "synthetic|preview|Community Preview|design partners|mock data" index.html login.html privacy.html
```

Negative checks returned no stale-copy matches. Positive checks returned expected canonical pricing, AGPLv3, preview, and synthetic demo references.

## Requirement Coverage

- PRICE-01: Complete
- PRICE-02: Complete
- PRICE-03: Complete
- PRICE-04: Complete
- PRICE-05: Complete
- MKT-01: Complete
- MKT-02: Complete
- MKT-03: Complete
- MKT-04: Complete
- MKT-05: Complete

## Residual Risks

- `docs.html` remains a stale prototype and is intentionally deferred to Phase 4.
- `theme.js` and `docs.html` are still untracked prototype files.
- Phase 3 still needs to replace the demo preview placeholder with a clickable mock-data app experience.
