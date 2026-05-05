# Coding Conventions

**Analysis Date:** 2026-05-05

## Naming Patterns

**Files:**
- Static pages use lowercase simple names: `index.html`, `pricing.html`, `docs.html`, `login.html`, `privacy.html`, `terms.html`.
- Shared JavaScript uses lowercase: `theme.js`.
- No component/module naming convention exists yet because there is no source directory or build system.

**Functions:**
- Browser functions use camelCase.
- Example: `getPreferred()`, `apply()`, `toggle()` in `theme.js`; `handleLogin(e)` in `login.html`.
- Event handlers currently use inline `onclick`/`onsubmit` attributes.

**Variables:**
- JavaScript variables use camelCase for local variables and UPPER_SNAKE_CASE for constants.
- Examples: `STORAGE_KEY`, `stored`, `current`, `btn`.

**CSS:**
- Classes use kebab-case: `nav-logo`, `theme-toggle`, `pricing-card`, `demo-badge`.
- CSS custom properties use kebab-case: `--bg-base`, `--text-primary`, `--cyan`.
- Theme state is controlled through `data-theme` on the root element.

## Code Style

**Formatting:**
- Existing HTML uses two-space indentation in most markup, with compact CSS declarations in `<style>` blocks.
- CSS is minified/compact in legal pages and more spacious in larger marketing pages.
- JavaScript is plain ES5/ES6 compatible browser code.
- No formatter config exists.

**Linting:**
- No lint tool exists.
- No HTML validator, CSS linter, ESLint, or Prettier setup exists.

## Import Organization

**Current pattern:**
1. `<link rel="preconnect">` and font stylesheet links in `<head>`.
2. Shared `theme.js` loaded in `<head>` to avoid theme flash.
3. Page-specific scripts near end of `<body>` when present.
4. `index.html` loads CDN React/ReactDOM/Babel near the bottom.

**Path Aliases:**
- None.

## Error Handling

**Patterns:**
- Minimal guard checks in `theme.js`, such as checking whether queried theme icon elements exist.
- `login.html` assumes the login button exists when the form is submitted.
- Missing external scripts/assets are not handled.

**Recommendations:**
- For current static code, keep defensive DOM checks around optional elements.
- If adding demo mode, avoid silent fake success; show clear synthetic data/demo state.
- If adding build tooling, move JS out of inline handlers and make error paths testable.

## Logging

**Framework:**
- None.
- No `console.log` usage was identified as an application pattern.

**Patterns:**
- Browser console may show errors for missing `tweaks-panel.jsx` from `index.html`.

## Comments

**Current usage:**
- `theme.js` has a short comment explaining immediate theme application.
- `pricing.html` uses section comments such as `<!-- Self-hosted Free -->`.
- No project-level comment convention exists.

**Recommendations:**
- Use comments sparingly for non-obvious behavior, especially demo data boundaries and docs sync assumptions.
- Avoid comments that restate obvious markup.

## Function Design

**Current:**
- Very small functions.
- `theme.js` exposes only the functions needed by pages.
- `login.html` has one page-local handler.

**Recommendations:**
- Keep shared behavior in external JS files rather than adding more inline scripts.
- If the demo grows, introduce modules/build tooling instead of expanding global functions.

## Module Design

**Exports:**
- Current pattern is a browser global: `window.MetralyTheme`.
- No ES modules are used in `website`.

**Barrel Files:**
- None.

**Future direction:**
- If reusing `../app/ui`, prefer a real module boundary and avoid copying large React code into inline scripts.
- If docs are generated from `../docs`, keep generation scripts separate from static output.

---
*Convention analysis: 2026-05-05*
*Update after introducing formatting, linting, build tooling, or React components*
