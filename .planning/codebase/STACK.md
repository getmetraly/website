# Technology Stack

**Analysis Date:** 2026-05-05

## Languages

**Primary:**
- HTML5 - All current pages are standalone documents: `index.html`, `pricing.html`, `docs.html`, `login.html`, `privacy.html`, `terms.html`.
- CSS - Each page embeds its own style block; there is no shared stylesheet yet.
- JavaScript - Small shared theme runtime in `theme.js`; page-local scripts in `index.html` and `login.html`.

**Secondary / Adjacent:**
- React 18.3.1 - Referenced from CDN in `index.html` for a missing `tweaks-panel.jsx`; also used by the adjacent application in `../app/ui`.
- TypeScript 5.6.2 - Used in `../app/ui`, which is the likely source for the future clickable demo surface.

## Runtime

**Environment:**
- Browser-only static site at present. Opening the HTML files directly works for current pages.
- No local server, package manager, bundler, or install step exists in this repository.
- Future demo integration will likely need a dev/build/runtime boundary because `../app/ui` is a Vite React app.

**Package Manager:**
- None in `website`.
- Adjacent app uses npm with `../app/ui/package.json` and `../app/ui/package-lock.json`.

## Frameworks

**Core:**
- No framework in `website`; pages are hand-authored static HTML.
- `../app/ui` uses Vite + React and should be treated as the implementation source for the app-like demo experience.

**Testing:**
- No test framework in `website`.
- `../app/ui/package.json` has no test script. Browser verification will need to be added when the site gains a demo shell or build process.

**Build/Dev:**
- No build tool in `website`.
- `../app/ui` uses Vite 5.2.0 with scripts: `npm run dev`, `npm run build`, `npm run preview`.

## Key Dependencies

**Current website:**
- `theme.js` - Shared light/dark mode persistence using `localStorage` and `data-theme`.
- Google Fonts - Plus Jakarta Sans and JetBrains Mono loaded from `fonts.googleapis.com`.
- React/ReactDOM/Babel CDN in `index.html` - Intended for `tweaks-panel.jsx`, but that file is not present.

**Adjacent demo candidate (`../app/ui`):**
- `react` 18.3.1 - UI framework for the real app screens.
- `react-dom` 18.3.1 - Browser rendering.
- `axios` 1.15.2 - API client dependency.
- `vite` 5.2.0 - Development server and production build.
- `typescript` 5.6.2 - Type checking/source language for many UI modules.

## Configuration

**Environment:**
- Current static pages have no environment variables.
- Demo mode will need an explicit configuration contract for whether it uses mock data, embedded static data, or a running `../app` API.

**Build:**
- No build config currently exists in `website`.
- If the project evolves into a bundled site, add `package.json`, a bundler config, and document the boundary between marketing pages and embedded demo code.

## Platform Requirements

**Development:**
- Any environment with a browser can inspect current pages.
- Editing is manual HTML/CSS/JS.
- For future app demo work, Node.js/npm requirements should match `../app/ui`.

**Production:**
- Current production target can be any static host.
- If demo mode routes to a live app instance, production will need routing, asset hosting, and possibly a mocked API/data bundle.

---
*Stack analysis: 2026-05-05*
*Update after adding a build system, demo runtime, or shared styling layer*
