# Homepage Content Truth Pass

**Phase:** 04-canonical-homepage-copy
**Created:** 2026-05-05
**Scope:** current Next.js homepage (`app/page.tsx`), not the legacy `index.html`

## Context

The website has moved from the legacy static `index.html` prototype to a Next.js 15 App Router site. Legacy `.html` URLs now redirect to App Router routes, and the latest build verifies `/`, `/demo`, `/docs`, `/pricing`, `/privacy`, and `/terms`.

This means homepage copy updates should target `app/page.tsx` and related components, not the old `index.html` file.

## Preserve

The existing Claude design direction is strong and should be kept:

- Dark-first, high-contrast cyber/privacy aesthetic.
- Cyan/purple gradient identity.
- Hero dashboard mockup.
- Data sovereignty section.
- Role-based sections for CTO/VP Eng, Team Lead, Platform/DevOps, IC.
- AI assistant mock conversation section.
- Current visual rhythm, section density, and card-based layout.
- Current AGPLv3/open-core direction in metadata and hero badge.

## Main Problem

The homepage currently looks polished, but some wording is stronger than the current canonical product status supports. The page should stay confident, but the claims need to be more truth-safe until `docs/STATUS.md` and implementation reality prove them.

## Required Copy Changes

### 1. Hero positioning

Current direction:

```text
Engineering metrics on your infrastructure.
```

Recommended stronger direction:

```text
Engineering intelligence that doesn't leak.
```

Alternative if we want to keep infrastructure explicitly in the headline:

```text
Self-hosted engineering intelligence that doesn't leak.
```

Recommended sub-head:

```text
Track DORA metrics, CI/CD performance, and team bottlenecks on your own infrastructure — with privacy-first AI designed for sensitive engineering data.
```

Why:

- Stronger than “engineering metrics”.
- Matches canonical positioning from `docs/strategy/positioning-uvp.md`.
- Keeps self-hosted/privacy differentiation.
- Does not imply every AI feature is shipped today.

### 2. CTA safety

Current issue:

```text
Deploy in 5 minutes
```

This should not be stated as a fact until setup-time benchmark exists.

Replace with:

```text
Self-host with Docker
```

or:

```text
View self-hosting docs
```

Demo CTA should become:

```text
Try the synthetic demo
```

Optional helper text under buttons:

```text
No login. No real company data. Explore with synthetic Sandbox Inc. metrics.
```

### 3. Hero stats

Current issue:

```text
20 API endpoints
```

This is too implementation-specific and risky unless synced with actual API state.

Replace with truth-safe trust strip:

```text
Self-hosted · AGPLv3 open-core · Synthetic demo · Privacy-first AI design · Go + PostgreSQL + TimescaleDB
```

or keep the visual stat layout but use:

```text
100% Self-hosted
AGPLv3 Open Core
Synthetic Demo Data
v0.1.0-alpha
```

### 4. Data sovereignty section

Current risky phrases:

```text
No SaaS vendor ever sees or stores your metrics.
You own every byte.
Air-gapped Ready.
No telemetry, no callbacks home.
Zero external data exposure. Full compliance.
GDPR Ready.
Air-gapped.
Zero Telemetry.
```

Recommended replacements:

```text
Metraly is designed to run on your infrastructure so your engineering data stays under your control.
```

```text
Deploy locally, in your own VPC, or in restricted environments as the product matures.
```

```text
The core platform is AGPLv3 open-core, so the code path that handles engineering metrics can be reviewed and audited.
```

```text
Enterprise deployment patterns are being designed for regulated and restricted environments.
```

Tag replacements:

- `GDPR Ready` → `GDPR-aware design`
- `Audit-friendly` → keep
- `Air-gapped` → `Air-gapped roadmap`
- `Zero Telemetry` → `No required telemetry target`

### 5. Features section

Current issue: many feature cards sound fully shipped.

Recommended status-tag pattern:

- DORA Metrics — `Preview`
- CI/CD Intelligence — `Preview`
- PR & Code Review — `Preview`
- Sprint & Team Velocity — `Preview`
- Custom Dashboards — `Designed`
- Metrics Explorer — `Preview`

Examples:

```text
Track deployment frequency, lead time, change failure rate, and MTTR across your teams.
```

Avoid:

```text
DORA Elite benchmarks built-in.
```

unless verified.

Custom Dashboards should avoid “drag-and-drop widget builder” unless implemented:

```text
Designed for configurable dashboards and role-specific views as the product matures.
```

### 6. Role cards

Keep role cards. They are useful.

Tone changes:

- Replace hard promises with outcome-oriented “see”, “track”, “understand”, “designed to”.
- For IC card, avoid implying AI recommendations are already live.

Example:

```text
AI-generated recommendations to unblock yourself
```

should become:

```text
Planned AI-assisted recommendations for blocked work
```

### 7. AI section

Keep AI section visually. It is strategically important.

Current direction is mostly improved already because it says:

```text
AI-assisted analysis is planned for paid editions...
```

Need ensure all AI mock chat and tags use “planned/designed/preview” language.

Recommended title:

```text
AI insights designed for private engineering data.
```

Recommended paragraph:

```text
Metraly is designed to support local models, BYO API keys, and approved providers while reducing exposure of raw engineering data.
```

Avoid:

- `AI that works for you` if it reads as shipped.
- `secure AI` without proof.
- `immune` unless explicitly tied to designed architecture and not implementation.

### 8. Privacy/CDN wording

Because the website currently uses external frontend dependencies and may still use hosted assets, avoid absolute website-level phrasing like:

```text
no external dependencies
zero external exposure
```

Use product-deployment wording instead:

```text
Metraly product deployments are designed so engineering data stays in your infrastructure.
```

This separates marketing website behavior from self-hosted product behavior.

## Proposed Final Hero Copy

```text
Alpha · AGPLv3 Open Core · Self-Hosted

Engineering intelligence that doesn't leak.

Track DORA metrics, CI/CD performance, and team bottlenecks on your own infrastructure — with privacy-first AI designed for sensitive engineering data.

[Try the synthetic demo] [Self-host with Docker] [Read the docs]

No login. No real company data. Explore with synthetic Sandbox Inc. metrics.

Self-hosted · AGPLv3 open-core · Synthetic demo · Privacy-first AI design · v0.1.0-alpha
```

## Implementation Notes

Apply these changes in `app/page.tsx`:

1. Update `<h1>` hero text.
2. Update hero paragraph.
3. Rename demo CTA.
4. Replace `Deploy in 5 minutes` CTA.
5. Replace hero stats with truth-safe trust strip.
6. Soften data sovereignty text.
7. Add or rename feature tags to show `Preview`, `Designed`, `Roadmap`.
8. Soften role and AI copy where it implies shipped behavior.

## Why this is the right balance

This does not make the page timid. It keeps the strong Metraly angle:

- self-hosted
- privacy-first
- engineering intelligence
- AI direction
- open-core
- demo

But it removes claims that could hurt trust before launch:

- fake 5-minute benchmark
- production-like air-gapped/compliance claims
- stable integrations
- shipped AI implication
- unsupported API endpoint counts

## Follow-up

After this pass, the next PR should modify `app/page.tsx` directly and run:

```bash
npm run build
```

Then update planning summary for the phase.
