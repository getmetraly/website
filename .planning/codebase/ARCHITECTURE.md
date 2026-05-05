# Architecture

**Analysis Date:** 2026-05-05

## Pattern Overview

**Overall:** Static marketing website prototype with page-local styles and a small shared theme script.

**Key Characteristics:**
- Flat set of standalone HTML pages.
- No build step, routing framework, component system, CMS, or server.
- Shared behavior is limited to `theme.js`.
- Content is currently duplicated and partly stale relative to `../docs`.
- Future scope requires an app-like demo mode connected to `../app/ui` mock data.

## Layers

**Document Layer:**
- Purpose: Render complete pages directly in the browser.
- Contains: markup, page-specific CSS, page-local JavaScript.
- Files: `index.html`, `pricing.html`, `docs.html`, `login.html`, `privacy.html`, `terms.html`.
- Depends on: browser APIs, external fonts, and in one case CDN React/Babel scripts.

**Shared Theme Layer:**
- Purpose: Apply and persist light/dark theme state.
- Contains: `getPreferred()`, `apply()`, `toggle()`, and `window.MetralyTheme`.
- File: `theme.js`.
- Depends on: `localStorage`, `document.documentElement`, `window.matchMedia`.
- Used by: theme toggle buttons across pages.

**Content Source Layer (external to repo):**
- Purpose: Canonical product truth and documentation source.
- Contains: `../docs/STATUS.md`, strategy, monetization, positioning, legal, product, and tech docs.
- Used by: future docs/pricing/positioning sync.
- Current state: manually copied/contradictory content in HTML.

**Demo Source Layer (external to repo):**
- Purpose: Real app screens and mock data that can power a clickable product demo.
- Contains: `../app/ui/src/App.jsx`, feature screens, mock types/data, chart/widget components.
- Current state: not connected to `website`.

## Data Flow

**Static Page Load:**
1. Browser requests an HTML file.
2. HTML loads Google Fonts and `theme.js`.
3. `theme.js` immediately applies the stored or preferred theme to `document.documentElement`.
4. Page-specific CSS renders the layout.
5. Page-local scripts add small interactions, such as login redirect simulation in `login.html`.

**Theme Toggle:**
1. User clicks a button with `onclick="MetralyTheme.toggle()"`.
2. `theme.js` flips `data-theme` between `dark` and `light`.
3. CSS variables update page colors.
4. Theme choice is written to `localStorage`.

**Mock Login Flow:**
1. User submits `login.html` form.
2. `handleLogin(event)` prevents default submit.
3. Button text changes to "Authenticating..." then "Redirecting to demo...".
4. Browser navigates to `index.html#demo`.
5. There is no real demo route or application state.

**Future Demo Flow:**
1. User clicks "Try Demo".
2. Site opens a demo route/shell, not a fake login dead end.
3. Demo shell renders selected `../app/ui` screens with deterministic mock data.
4. Data source is clearly labeled as synthetic and aligned with `../docs/product/onboarding.md` and `../app/.planning`.

## Key Abstractions

**Page:**
- Purpose: Complete standalone screen.
- Examples: `index.html` for marketing, `pricing.html` for pricing/license, `docs.html` for documentation, `login.html` for demo entry.
- Pattern: one file owns its markup, styling, and page-specific behavior.

**Theme Runtime:**
- Purpose: Shared visual mode state.
- Example: `window.MetralyTheme`.
- Pattern: global browser object exposed by an IIFE.

**Canonical Product Source:**
- Purpose: Avoid stale marketing claims.
- Examples: `../docs/STATUS.md`, `../docs/strategy/monetization-v2.md`, `../docs/decisions/2026-05-04.md`, `../app/.planning/PROJECT.md`.
- Pattern: external documentation repository is source-of-truth; website must import or manually sync from it.

**Demo Surface:**
- Purpose: Let users click through Metraly with mock data.
- Examples: `../app/ui/src/features/dashboard/DashboardScreen.tsx`, `../app/ui/src/features/aiAssistant/AIScreen.tsx`, `../app/ui/src/features/marketplace/PluginScreen.tsx`, `../app/ui/src/features/onboarding/WizardScreen.tsx`.
- Pattern: likely extracted/bundled React app or embedded static demo.

## Entry Points

**Home / Marketing:**
- Location: `index.html`.
- Triggers: browser navigation to home.
- Responsibilities: explain product, features, quickstart, community, social proof, footer navigation.

**Pricing:**
- Location: `pricing.html`.
- Triggers: nav/footer pricing links.
- Responsibilities: explain tiers and license. Current content is stale versus `../docs`.

**Docs:**
- Location: `docs.html`.
- Triggers: nav/footer docs links.
- Responsibilities: render documentation-like content. Needs sync with `../docs`.

**Demo Login:**
- Location: `login.html`.
- Triggers: "Try Demo" links.
- Responsibilities: currently simulated login; should become a real demo entry.

**Legal:**
- Location: `privacy.html`, `terms.html`.
- Triggers: footer/legal links.
- Responsibilities: website/demo policy text. Current terms mention FSL and must be reconciled with AGPL/open-core docs.

## Error Handling

**Strategy:** Minimal browser-default behavior.

**Patterns:**
- `login.html` prevents form submit and simulates state transitions; it does not validate credentials.
- Missing assets such as `tweaks-panel.jsx` fail in the browser console.
- No centralized error reporting or fallback UI.

## Cross-Cutting Concerns

**Content Truth:**
- Treat `../docs/STATUS.md` and related strategy docs as canonical.
- Pricing and license text must be corrected before public use.

**Privacy:**
- External fonts and CDN scripts conflict with the "no external SaaS ever sees your metrics" tone if not explained.
- Demo must never imply real customer data or real production readiness unless backed by `../app`.

**Accessibility:**
- Some skip links and labels exist.
- Full keyboard/focus/contrast validation is not automated.

**Visual Consistency:**
- CSS variables are repeated per file, so theme and layout changes are drift-prone.
- A shared stylesheet or component build would reduce inconsistencies.

---
*Architecture analysis: 2026-05-05*
*Update when introducing build, routing, docs sync, or app demo shell*
