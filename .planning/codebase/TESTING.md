# Testing Patterns

**Analysis Date:** 2026-05-05

## Test Framework

**Runner:**
- None in `website`.
- No `package.json`, test command, browser test config, or CI exists.

**Assertion Library:**
- None.

**Run Commands:**
```bash
# No test commands currently exist for website.
```

## Test File Organization

**Location:**
- No test files exist.
- No `tests/`, `e2e/`, `__tests__/`, or `*.test.*` files exist in `website`.

**Adjacent app:**
- `../app/ui` has a Vite/React codebase but no UI test script in `../app/ui/package.json`.
- `../app` contains Go tests for backend entry/router behavior, but those do not test the website.

## Test Structure

**Current:**
- Manual browser inspection only.
- Static pages can be opened directly.
- There is no automated validation for links, accessibility, layout, or console errors.

**Recommended first pattern:**
```typescript
// Future Playwright smoke shape
test('home page has primary CTA and no console errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', message => {
    if (message.type() === 'error') errors.push(message.text());
  });

  await page.goto('/');
  await expect(page.getByRole('link', { name: /try demo/i })).toBeVisible();
  expect(errors).toEqual([]);
});
```

## Mocking

**Framework:**
- None.

**Current mock data:**
- `login.html` hard-codes demo credentials and simulates successful login.
- `index.html` and `login.html` claim seeded metrics/demo data without rendering actual app data.
- `../app/ui/src/types/mocks/*` and `../app/ui/src/api/mockApi.ts` are the better source for future demo mocks.

**What to Mock:**
- Demo app API responses if the website embeds `../app/ui`.
- Time/date for deterministic demo dashboards.
- External links/forms where browser tests should avoid real navigation.

**What NOT to Mock:**
- Content consistency against `../docs` should be checked against actual source files, not mocked.
- Theme behavior can be tested against real `localStorage` in the browser context.

## Fixtures and Factories

**Current:**
- No fixtures.

**Recommended:**
- Use deterministic demo fixtures from `../app/ui/src/types/mocks/*` where possible.
- Keep Sandbox Inc. demo data aligned with `../docs/product/onboarding.md` and `../app/.planning/REQUIREMENTS.md`.

## Coverage

**Requirements:**
- No coverage target exists.
- For a marketing/demo site, prioritize smoke coverage and visual/accessibility checks over unit coverage at first.

**Configuration:**
- None.

**View Coverage:**
```bash
# Not available.
```

## Test Types

**Unit Tests:**
- Useful only after extracting `theme.js`, docs sync, or demo helpers into modules.
- Candidate: theme selection/persistence behavior.

**Integration Tests:**
- Needed when docs/pricing pages are generated or synced from `../docs`.
- Candidate: assert pricing/license text matches canonical docs.

**E2E / Browser Tests:**
- Highest priority once demo mode exists.
- Should verify home, pricing, docs, legal, theme toggle, demo entry, and embedded app flows.
- Should check console errors; currently `index.html` likely fails because `tweaks-panel.jsx` is missing.

**Visual Tests:**
- Needed before public launch because pages are design-heavy and static CSS is duplicated.
- Mobile and desktop screenshots should be checked after major layout changes.

## Common Patterns To Add

**Static link check:**
```bash
# Future: run a link checker against generated/static output.
```

**Accessibility smoke:**
```bash
# Future: run axe or Playwright accessibility checks on all top-level pages.
```

**Docs consistency check:**
```bash
# Future: compare visible pricing/license claims against ../docs canonical values.
```

---
*Testing analysis: 2026-05-05*
*Update when the first test runner or demo test harness is added*
