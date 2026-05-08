# Handoff

State of the site as of the most recent commit, plus the reasoning behind decisions that aren't obvious from the code.

## Stack

- Next.js 14 App Router, static export (`output: 'export'`)
- TypeScript, Tailwind CSS
- JetBrains Mono only — no sans, no serif. Inter and Instrument Serif were
  tried and removed
- Deployed as a container (nginx serving `/out`) via Argo CD; manifests
  live in a separate `k8s-manifests` repo

## Page

`app/page.tsx` is the only route besides `/simulation`. Sections, in
order:

1. `Hero`
2. `Experience` (01)
3. `Education` (02)
4. `Certifications` (03)
5. `GitHub` (04)
6. `Contributions` — labelled "Open source" (05)
7. `Articles` — labelled "Writing" (06)

`Footer` and `RevealOnScroll` mount once below `<main>`.

## Design philosophy

The owner iterated several times pushing back on "vibe-coded" attempts.
What survives reads as restrained-engineer; what was reverted reads as
template-y polish. Future changes should err toward removal.

### Keep

- Single accent (CSS var `--accent`: Catppuccin blue on dark, deep blue
  on light)
- Mono everywhere for body and headings
- Editorial list pattern for sequential content (Experience, Education,
  Open source, Writing) — date / tag / repo on the left in a 3-col, big
  title + body on the right in a 9-col, hairline rule between rows
- Cards only where parallel items genuinely benefit (Cert tiles, GitHub
  pinned repo grid). Thin border, hover = `border-ink-faint/70`. No
  shadows, no left rails, no glow.
- Brief copy. The hero subtitle is one sentence ("DevSecOps engineer.")
  on purpose

### Drop on sight

- Display serif italics on the name, gradient/shimmer text
- Multiple stacked radial gradients in the body background
- Drop shadows or coloured glows on cards / hover-lift with neon
- Marketing copy ("Let's build something resilient", "fastest reply by
  email", "built with Next · deployed via Argo")
- Live-indicator dots, "Available · London" chips, pulsing animations
- Big serif "01." section numbers as decoration
- Decorative ASCII art widgets (donut, fixed-corner pipelines)
- Brand-coloured left rails on cards (gone everywhere except the cert
  pending state, which uses 33%-opacity rail to mark it as in-progress)

## Theming

Light + dark, default to OS via `prefers-color-scheme`. There is no
toggle; that's intentional.

- All colour tokens are RGB-channel CSS custom properties in `:root`
  and overridden inside `@media (prefers-color-scheme: dark)` (see
  `app/globals.css`).
- `tailwind.config.ts` declares each token as
  `rgb(var(--token) / <alpha-value>)` so the existing opacity modifiers
  (`bg-bg-card/40`, `text-ink-faint/70`, etc.) keep working.
- Two components do their own theme detection because they paint
  outside Tailwind's reach:
  - `Constellation` — `prefers-color-scheme` listened in JS; particles
    repaint in #89b4fa (dark) or #2563eb (light)
  - `GitHub` graph — cell fills via `.gh-l0`–`.gh-l4` and axis text via
    `.gh-axis` defined in `globals.css` for both palettes

## Constellation

`components/Constellation.tsx`. Mounted once in `app/layout.tsx` as a
fixed full-viewport canvas behind a `relative z-10` content wrapper.

Important behaviours:

- **Skipped entirely on mobile / touch.** Early return from `useEffect`
  + `hidden md:block` on the canvas. iOS Safari's address-bar resize
  and the touch-drag compositor caused unfixable flicker during scroll.
- **Mouse interactivity gated on `(pointer: fine)` AND not mobile.** On
  desktop, particles are repelled from the cursor (force ~0.11), and
  links and dots near the cursor brighten (alpha boost up to ~0.4 / 0.45).
- **Always-on autonomous drift.** Each particle has a non-zero base
  velocity (uniform in [-0.275, 0.275] px/frame per axis) and decays
  toward it slowly (friction 0.985, base mix 0.015) so motion is
  visible at rest, not only when the mouse is near.
- Pauses on `document.hidden` via `visibilitychange`.

Tunables live as constants at the top of the file: `COUNT_DESKTOP`,
`LINK_DIST`, `MOUSE_RADIUS`. Don't reach for `MutationObserver` or
similar — the simpler the loop, the better it survives mobile.

## Open Source section (filtering)

`components/Contributions.tsx` is a client component (`'use client'`).
Filter buttons sit between the section header and the list, derived
from the contributions array (one button per unique `repo`, plus an
"All" entry, with counts).

**Beware**: items keep `className="reveal border-b border-line"` as a
constant literal and toggle visibility through `style.display`. This
was deliberate. Switching to a class-based ternary
(`hidden`/non-`hidden`) makes React rewrite the `class` attribute on
every filter click, which wipes the `is-visible` class that
`RevealOnScroll` attaches directly to the DOM. Items then render at
opacity 0 with no way to be re-revealed (the IO has already
unobserved them). Symptoms: cards disappear after the second filter
click; only refresh fixes it. If you change this, retest with two
filter clicks in a row.

The `Contribution.status?` field overrides the default `merged` label
in the left meta column. Currently used for the credited Prometheus
disclosure (`'credited'`) where the PR was authored by someone else.

## Certifications

`components/Certifications.tsx`. Real Credly / Microsoft Learn badge
images in `public/certs/` rendered with plain `<img>` (the
`@next/next/no-img-element` lint is suppressed on the line; the badges
are 80×80 from already-680×680 PNGs and `next/image` adds little).

The `accent` field on each cert sets a small dot before the issuer
name, not a left rail. Pending certs (no `url`) render as a `<div>`
not an `<a>`, with the badge image desaturated and dimmed
(`opacity-40 grayscale`), the issuer dot at 40% opacity, and the
"verify →" link replaced by "— pending".

## /simulation

**Do not modify** `app/simulation/`, `components/SimulationClient.tsx`,
`public/simulation/**`, or `public/simulation-py/**`. It's the
CPS7004 Hail Mary multi-agent coursework served from the same site.

When changing Tailwind tokens or `globals.css`, the values can change
but every key the simulation references must keep existing:

```
bg, bg-elevated, ink, ink-muted, ink-faint, accent, line, peach,
green, prompt
```

Removing any of these keys breaks the simulation page silently
(`bg-peach` etc. just won't render).

## Reload behaviour

`components/ScrollReset.tsx` mounts at body level and:

1. Sets `history.scrollRestoration = 'manual'` so the browser doesn't
   restore mid-page positions
2. Detects whether the load was a reload via
   `PerformanceNavigationTiming` and on reload only: strips any hash
   from the URL and scrolls to (0, 0)

First visits via deep link (e.g. someone shares
`alexmchugh.dev/#certs`) still land on the section.

## Memory and CLAUDE notes

Project-specific notes live in
`~/.claude/projects/-Users-alexmchugh-Documents-GitHub-alexmchugh-dev/memory/`.
The two persistent items there are the design-taste guidance above and
the /simulation untouchable rule. Update those if either drifts.

## Git / deploy

- `main` is the only long-lived branch
- Every push to `main` is built into a container via the repo's CI and
  the resulting tag is auto-bumped in the central `k8s-manifests` repo;
  Argo picks it up
- Don't add `Co-Authored-By: Claude` trailers — explicit standing
  preference on this repo
