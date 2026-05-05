# Codebase Concerns

**Analysis Date:** 2026-05-05

## Tech Debt

**Stale pricing and license model:**
- Issue: `pricing.html`, `terms.html`, and `index.html` describe Functional Source License (FSL), source-available conversion, and broad free feature availability.
- Files: `pricing.html`, `terms.html`, `index.html`.
- Why: Existing files came from a Claude design/prototype pass.
- Impact: Conflicts with `../docs/decisions/2026-05-04.md`, `../docs/strategy/monetization-v2.md`, and `../app/.planning`, which establish AGPLv3 open-core with Community, Pro, and Enterprise.
- Fix approach: Rewrite pricing/license/legal/site copy from `../docs`, preserving two-layer rule where internal decisions and published docs can intentionally differ.

**No source-of-truth sync for docs content:**
- Issue: `docs.html` is a static page disconnected from `../docs`.
- Why: Prototype is standalone.
- Impact: Website documentation can drift from canonical product, status, roadmap, legal, and technical docs.
- Fix approach: Add a documented sync/generation process or implement a manual content reconciliation phase with explicit source references.

**Duplicated styling across pages:**
- Issue: Each HTML page embeds its own CSS variables, navigation, footer, and component styles.
- Why: Fast static prototype.
- Impact: Theme, layout, accessibility, and branding changes require multi-file edits and can drift.
- Fix approach: Extract shared CSS and possibly shared HTML fragments/build tooling before larger changes.

**Missing demo implementation:**
- Issue: `login.html` simulates login and redirects to `index.html#demo`, but no real demo route exists.
- Why: Current site is a visual mock.
- Impact: Users cannot actually click through Metraly with mock data, which is now a project requirement.
- Fix approach: Build a demo shell using `../app/ui` screens and deterministic mock data, or route to a hosted demo app with clear synthetic-data labeling.

**Missing referenced asset:**
- Issue: `index.html` references `tweaks-panel.jsx`, but the file is not present.
- Why: Design export left an unfinished React/Babel customization panel hook.
- Impact: Browser console error and dead code path on the main page.
- Fix approach: Remove the reference or add the missing file intentionally; avoid Babel-in-browser for production.

## Known Bugs

**Demo login is fake and lands nowhere useful:**
- Symptoms: Submitting demo login shows progress text and redirects to `index.html#demo`.
- Trigger: Submit the form in `login.html`.
- Workaround: None; user returns to the marketing page.
- Root cause: No demo route/shell implemented.

**Potential console error on home page:**
- Symptoms: Browser attempts to load `tweaks-panel.jsx` and may report a 404.
- Trigger: Open `index.html` in a browser.
- Workaround: Ignore console error.
- Root cause: Missing file referenced by a script tag.

**Legal/license inconsistency:**
- Symptoms: Terms and pricing claim FSL while current docs and app planning say AGPLv3/open-core.
- Trigger: Read `terms.html`, `pricing.html`, `index.html` footer/open-source sections.
- Workaround: Treat `../docs` as canonical until website is corrected.
- Root cause: Prototype content is stale.

## Security Considerations

**Hard-coded demo credentials:**
- Risk: If `login.html` later points to a real demo backend, hard-coded credentials and fake auth flow may create confusion or unsafe defaults.
- Current mitigation: No real authentication happens today.
- Recommendations: Keep synthetic demo credentials clearly labeled, resettable, and separated from any production auth.

**External browser dependencies:**
- Risk: Google Fonts and unpkg CDN requests disclose visitor metadata to third parties and may conflict with privacy-first positioning.
- Current mitigation: None beyond normal browser behavior.
- Recommendations: Self-host fonts and bundle scripts for production; document any external requests in privacy policy.

**Legal claims:**
- Risk: Incorrect license or pricing statements can create commercial/legal confusion.
- Current mitigation: None in website; `../docs` has better canonical material.
- Recommendations: Treat pricing/license/legal rewrite as a blocking phase before public launch.

## Performance Bottlenecks

**Large standalone HTML:**
- Problem: `index.html` is 1663 lines with extensive embedded CSS/JS.
- Measurement: No performance benchmark yet.
- Cause: Design export bundles all content and styles into one file.
- Improvement path: Extract shared assets, remove unused CDN/Babel path, and measure Lighthouse once served.

**External fonts/CDN:**
- Problem: Multiple remote requests before text/script availability.
- Measurement: Not measured.
- Cause: Google Fonts and unpkg dependencies.
- Improvement path: Self-host fonts, bundle or remove React/Babel dependency, add caching headers through static host.

## Fragile Areas

**Theme implementation across duplicated CSS:**
- Why fragile: Each page defines its own theme variables and theme button class variants.
- Common failures: A new page or CSS token fails to respond to `data-theme`.
- Safe modification: Consolidate shared CSS variables and theme button markup.
- Test coverage: None.

**Pricing page copy:**
- Why fragile: Pricing, limits, and license are still evolving across `../docs/strategy/monetization-v2.md`, `../docs/decisions/2026-05-04.md`, and published-docs rules.
- Common failures: Mixing internal caveats with external commitments.
- Safe modification: Cite source docs during edits and document which layer is being published.
- Test coverage: None.

**Demo source boundary:**
- Why fragile: The future demo may copy from `../app/ui` or embed it; either can drift from real app behavior.
- Common failures: mock data shape mismatch, stale screens, broken styling, false product claims.
- Safe modification: Define whether demo is a forked static showcase, bundled app subset, or hosted app instance before implementation.
- Test coverage: None.

## Scaling Limits

**Static-only architecture:**
- Current capacity: Good for simple marketing pages.
- Limit: Becomes hard to maintain when adding docs generation, demo app, search, routing, or many pages.
- Symptoms at limit: duplicated edits, stale claims, no tests, fragile navigation.
- Scaling path: introduce a small static-site build pipeline or migrate to an app framework after planning.

## Dependencies at Risk

**Babel standalone in browser:**
- Risk: Heavy development-time dependency loaded in production-like HTML.
- Impact: Slower page load and a missing local JSX file.
- Migration plan: Remove it or adopt a proper build step.

**Manual docs copy:**
- Risk: Not a package dependency, but a process dependency on humans remembering to sync `../docs`.
- Impact: Public claims drift from product truth.
- Migration plan: Add docs sync scripts/checks or make docs pages generated.

## Missing Critical Features

**Clickable demo mode:**
- Problem: Required by user; absent from current site.
- Current workaround: fake `login.html`.
- Blocks: Prospects cannot experience Metraly with mock data.
- Implementation complexity: Medium; depends on chosen integration with `../app/ui`.

**Canonical content reconciliation:**
- Problem: Website contains stale claims about price, plans, license, product readiness, and demo behavior.
- Current workaround: manual reading of `../docs`.
- Blocks: Public launch readiness.
- Implementation complexity: Medium; requires product/content pass across all pages.

**Build/test/deploy path:**
- Problem: No package scripts or CI.
- Current workaround: open HTML files directly.
- Blocks: reliable demo integration and regression prevention.
- Implementation complexity: Low-to-medium depending on chosen stack.

## Test Coverage Gaps

**All pages:**
- What's not tested: rendering, links, theme toggle, console errors, mobile layout, accessibility.
- Risk: broken public pages go unnoticed.
- Priority: High before launch.
- Difficulty to test: Low once a local server/build command exists.

**Content consistency:**
- What's not tested: pricing/license/docs claims against `../docs`.
- Risk: incorrect commercial/legal information.
- Priority: High.
- Difficulty to test: Medium; requires a canonical data model or targeted assertions.

---
*Concerns audit: 2026-05-05*
*Update as concerns are fixed or new risks appear*
