# Demo And Docs Integration Approach

**Phase:** 01-source-truth-foundation
**Created:** 2026-05-05
**Purpose:** Define implementation direction for Phase 3 demo mode and Phase 4 documentation surface.

## Goals

- Demo mode should let a visitor click through Metraly with synthetic/mock data.
- Demo mode must not collect real credentials, company data, repository data, or personal information.
- Website docs should be sourced from `../docs`, not ad hoc static copy.
- Website should respect repository boundaries: `website`, `../app`, and `../docs` are separate git repositories.

## Demo Mode

### Current State

- `login.html` shows a "Live Demo Instance" and hard-coded credentials.
- `login.html` `handleLogin()` only simulates progress and redirects to `index.html#demo`.
- `../app/ui/src/App.jsx` already provides a navigable app shell with screens:
  - `DashboardScreen`
  - `MetricsScreen`
  - `AIScreen`
  - `PluginScreen`
  - `WizardScreen`
  - `DashboardWizardScreen`
- `../app/ui/src/api/mockApi.ts` contains deterministic fake data generation with seed `42`.
- `../app/ui/src/types/mocks/*` contains mock user/dashboard/metric/widget/AI source data.

### Non-Negotiable Demo Rules

- Use synthetic Sandbox Inc. or clearly synthetic equivalent data only.
- Do not collect real credentials. If a login screen remains, it must be a visual gate only and say no data is stored.
- Do not imply a hosted 24h-reset instance unless one actually exists.
- Demo UI should visibly label "Synthetic demo data" and offer "Connect sources" as a product path, not a working production integration unless implemented.
- Demo claims must respect `../docs/STATUS.md`.

### Option A: Static Demo Clone

**Shape:** Build `demo.html` or a `demo/` directory with static HTML/CSS/JS recreating core app screens.

**Sources:**
- Current `index.html` dashboard mock sections.
- `../docs/product/onboarding.md` for Sandbox Inc. narrative.
- `../app/ui/src/types/mocks/*` for metric names and values.

**Pros:**
- Fastest to implement.
- Keeps `website` build-free if desired.
- Avoids cross-repo dependency and npm setup.

**Cons:**
- Drifts from `../app/ui` quickly.
- Harder to keep interactions rich.
- Duplicates app UI/logic manually.

**Risks:**
- Visitors may see a polished fake that does not match the real app.
- Phase 3 could become a design rewrite instead of demo integration.

**Phase 3 implications:**
- Best fallback if `../app/ui` is too coupled or hard to build inside `website`.
- Should use explicit "static product tour" language if chosen.

### Option B: Bundled `../app/ui` Demo Subset

**Shape:** Add a small website build setup and embed/copy a demo bundle using selected `../app/ui` components and mock data.

**Sources:**
- `../app/ui/src/App.jsx` - app shell and route state.
- `../app/ui/src/api/mockApi.ts` - deterministic fake data.
- `../app/ui/src/features/dashboard/DashboardScreen.tsx`
- `../app/ui/src/features/metricsExplorer/MetricsScreen.tsx`
- `../app/ui/src/features/aiAssistant/AIScreen.tsx`
- `../app/ui/src/features/marketplace/PluginScreen.tsx`
- `../app/ui/src/features/onboarding/WizardScreen.tsx`
- `../app/ui/src/types/mocks/*`

**Pros:**
- Closest to the actual product UI.
- Reuses existing mock-data contracts.
- Produces a real clickable app experience.
- Reduces drift if integrated carefully.

**Cons:**
- Requires build tooling in `website` or a repeatable copy/build process from `../app/ui`.
- `../app/ui` currently uses mixed JS/TS/TSX and may have app-local CSS/runtime assumptions.
- Cross-repo imports are fragile unless explicitly managed.

**Risks:**
- Copying files creates drift; importing across repos complicates deployment.
- Bundling the whole UI may bring unwanted screens or broken dependencies.

**Phase 3 implications:**
- Recommended first path: spike a minimal demo bundle from `../app/ui` with dashboard, metrics, AI, marketplace, onboarding, and clear synthetic-data banner.
- If direct reuse is too expensive, fall back to Option A while preserving `../app/ui` data contracts.

### Option C: Hosted Demo App

**Shape:** Deploy a separate live app instance, reset data periodically, and route "Try Demo" to it.

**Sources:**
- Full `../app` backend/UI stack.
- Demo data from `../docs/product/onboarding.md` and `../app` seed work.

**Pros:**
- Closest to the real product.
- Can support richer eval and buyer exploration.
- Avoids duplicating app UI into website if deployment exists.

**Cons:**
- Requires hosting, reset jobs, auth/data isolation, observability, and abuse controls.
- Current product readiness may not support it yet.
- More operational surface than needed for first website milestone.

**Risks:**
- Users may enter sensitive data if demo looks too real.
- A broken hosted demo hurts trust more than no demo.

**Phase 3 implications:**
- Defer until after Community Preview runtime is stable.
- Do not use "24h reset live demo" copy until this exists.

### Recommended Demo Path

Use **Option B: bundled `../app/ui` demo subset** as the first Phase 3 target, with **Option A: static demo clone** as fallback.

Reasoning:

- User explicitly wants visitors to open the app with mock data and click around.
- `../app/ui` already has the app shell, mock API, screens, and synthetic response behavior.
- A hosted demo is operationally premature for this website milestone.
- A static clone is acceptable only if it is labeled as product tour and remains source-traced to `../app/ui`.

### Phase 3 First Checks

Before implementation, Phase 3 should verify:

1. Whether `../app/ui` builds cleanly on its own.
2. Whether selected screens can run without backend/API.
3. Whether `mockApi.ts` is enough or needs a website-local adapter.
4. Whether CSS from `../app/ui/src/index.css` can coexist with website styles.
5. Whether demo route should replace `login.html`, add `demo.html`, or introduce a build-routed `/demo`.

## Documentation Surface

### Current State

- `docs.html` is a static docs-like page with internal section switching and search.
- It includes claims about install commands, API endpoints, AI config, plugin SDK, enterprise features, and FSL.
- It is not generated from or linked systematically to `../docs`.

### Documentation Source Map

| Topic | Canonical Source | Website Use |
|-------|------------------|-------------|
| Product status/readiness | `../docs/STATUS.md` | Labels for shipped/designed/planned/missing claims. |
| Pricing/tier model | `../docs/strategy/monetization-v2.md`, `../docs/PROGRESS.md` | Pricing page and docs pricing references. |
| Positioning/UVP | `../docs/strategy/positioning-uvp.md`, `../docs/strategy/positioning.md` | Home hero, feature pillars, market language. |
| Onboarding/demo | `../docs/product/onboarding.md` | Demo banner, Sandbox Inc. behavior, TTFI copy. |
| AI | `../docs/tech/ai-system.md`, `../docs/tech/ai-insights-system.md`, `../docs/product/ai-assistant.md` | AI docs and feature readiness labels. |
| Plugins | `../docs/product/plugin-system.md`, `../docs/tech/plugin-system.md`, `../docs/tech/plugin-runtime-decision.md` | Plugin docs, marketplace claims, feature tiers. |
| Legal/privacy/compliance | `../docs/legal/legal-risks-and-compliance.md`, `../docs/SECURITY.md` | Terms, privacy, enterprise/compliance caveats. |
| Roadmap | `../docs/product/roadmap.md`, `../docs/decisions/2026-05-04.md`, `../docs/PROGRESS.md` | Roadmap/status language with date caveats. |
| App commands/API | `../app/Makefile`, `../app/README.md`, `../app/.planning/ROADMAP.md`, `../docs/STATUS.md` | Quickstart and API docs verification. |

### Option 1: Manual Reconciliation

**Shape:** Rewrite `docs.html` manually from the source map and maintain a checklist.

**Pros:**
- Fastest to execute in Phase 4.
- Fits current static architecture.
- No build tooling required.

**Cons:**
- Drift remains possible.
- Large manual edits can be error-prone.

**Phase 4 implications:**
- Good first step if the website remains static through launch.
- Must include source comments/checklist in `.planning` so future updates know where content came from.

### Option 2: Generated Static Docs

**Shape:** Add a script/build step that reads selected `../docs` markdown files and generates website docs sections.

**Pros:**
- Reduces drift.
- Can preserve source traceability.
- Scales better for larger docs.

**Cons:**
- Requires parser/rendering decisions.
- Cross-repo path dependency complicates local and deployment environments.
- Needs content curation because `../docs` includes internal/founder-facing material not suitable for public pages.

**Phase 4 implications:**
- Better long-term, but likely too much for the first docs repair unless build tooling is already introduced for demo mode.

### Option 3: Source Index / Link-Out Docs

**Shape:** Make `docs.html` a curated source index that links to canonical GitHub/docs files and summarizes status.

**Pros:**
- Very low drift.
- Clear source transparency.
- Fast to implement.

**Cons:**
- Less polished product docs experience.
- May expose internal/founder docs if links are not curated.

**Phase 4 implications:**
- Good fallback if full docs rewrite is risky.
- Useful as an interim "documentation is being consolidated" page.

### Recommended Docs Path

Use **Option 1: manual reconciliation with explicit source map** for Phase 4, then consider Option 2 after the site has a build system.

Reasoning:

- The current site is static.
- Some `../docs` files are internal strategy/founder material and should not be blindly published.
- Manual reconciliation can quickly remove FSL/API/status contradictions.
- The source map above gives enough traceability to prevent undocumented copy drift.

### Phase 4 First Checks

1. Verify install commands against `../app/Makefile` and `../app/README.md`.
2. Verify API endpoints against `../app/cmd/api` and `../docs/STATUS.md`.
3. Remove or re-label AI/plugin/enterprise docs that are designed but not implemented.
4. Replace FSL FAQ with AGPLv3/open-core language.
5. Add a visible "status" or "preview" label where docs describe Community Preview targets.

## Repository Boundary Guidance

- Do not commit `../app` or `../docs` changes from `website` phase execution unless explicitly requested.
- If Phase 3 copies code from `../app/ui`, record copied source paths and sync expectations.
- If Phase 4 copies text from `../docs`, keep summaries concise and avoid copying internal/founder-only material into public pages.
- A future build pipeline should make cross-repo inputs explicit rather than relying on accidental relative paths.

## Recommended Sequence

1. Phase 2 fixes public copy and removes the highest-risk contradictions.
2. Phase 3 introduces demo route/shell using `../app/ui` subset where feasible.
3. Phase 4 reconciles docs using the source map above.
4. Phase 5 adds tests/build checks to prevent regressions and drift.

---
*Approach complete: 2026-05-05*
