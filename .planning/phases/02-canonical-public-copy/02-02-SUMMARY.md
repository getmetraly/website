# Task 02-02 Summary: Home Page Canonical Copy

## Status

Completed.

## Files Changed

- `index.html`

## What Changed

- Replaced FSL / Apache conversion messaging with AGPLv3 open-core positioning.
- Reframed the hero and demo CTA as an alpha demo preview instead of a live production instance.
- De-risked AI, plugin, and Enterprise claims by marking planned or preview capabilities explicitly.
- Updated the open-source section to describe Community, Pro, and Enterprise editions consistently with canonical pricing.
- Updated footer license and brand copy to match the AGPLv3 core model.

## Verification

- `rg -n "FSL|Functional Source|source-available|Apache 2.0|FSL License|Production-grade from<br />day one" index.html` returned no matches.
- `rg -n "AGPLv3|open-core|self-hosted|privacy|Community|Pro|Enterprise|preview|planned" index.html` returned expected canonical matches.
