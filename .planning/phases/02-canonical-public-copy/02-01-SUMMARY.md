---
phase: 02-canonical-public-copy
plan: 01
subsystem: pricing-legal-copy
tags: [pricing, license, legal]
key-files:
  - pricing.html
  - terms.html
metrics:
  tasks_completed: 3
---

# Summary: Plan 02-01

## Completed

- Rewrote `pricing.html` from the old FSL/support-contract model to Community / Pro / Enterprise.
- Added canonical Pro pricing: `$99/mo` up to 10 active users plus `$15/dev/mo` above 10.
- Added canonical Enterprise pricing: `$15K/year` up to 50 developers plus `$120/dev/year` above 50.
- Replaced license copy with AGPLv3 open-core language.
- Rewrote `terms.html` software-license references away from FSL and toward repository AGPLv3 plus commercial module terms.

## Verification

- `pricing.html` and `terms.html` no longer contain `FSL`, `Functional Source`, `source-available`, `Apache 2.0`, or `FSL License`.
- `pricing.html` and `terms.html` contain AGPLv3 / Community / Pro / Enterprise language.

## Deviations

None.

## Self-Check: PASSED

Plan satisfies PRICE-01 through PRICE-05.

---
*Plan complete: 2026-05-05*
