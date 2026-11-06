# Research — Simplify Site Navigation (Tier 1)
Date: 2026-11-06. Baseline captured from the local dev server on the untouched code (same as master at 7df8c6b) and from the live hiring site.

## 1. Baseline screenshots (`screenshots/baseline/`)
- `home-{390,768,1024,1280,1440}-top.jpg` — header at each width. `home-390-drawer.jpg` — phone drawer open. `home-1440-products-dropdown.jpg`, `home-1440-about-dropdown.jpg` — the two hover menus. `*-full.jpg` — full homepage and careers page.
- Pages touched: `testimonials`, `trades-we-serve`, `careers`, `about-us`, `blog` at every width.
- Finding: at 768px (the width where the desktop bar switches on today) the bar already breaks — the links wrap under the logo and Log In / Book A Call drop onto the hero. At 1024px it fits only because About and the rest are short. Decision 34 (drawer up to ~1100px) is confirmed as necessary, not optional.
- Finding: `/results` and `/trades` return 404 today (expected; Phase 2 creates them).
- Finding: the phone drawer is a plain vertical list; the cookie banner overlaps its bottom (pre-existing, untouched).

## 2. In-repo precedent
- Plain top-bar link: `components/Header/Header.tsx` `classes.link` (17px, weight 500, dark blue, yellow on hover). New links reuse it.
- Button under a page heading: none exists on Results/Trades today; the homepage hero `classes.control` (Book A Call, size xl, yellow) is the precedent for Phase 5's `results-top` / `trades-top` buttons.
- Sticky element: `components/Header/Header.module.css` `.stickyHeader` (position sticky, z-index 100, white, soft shadow) is the precedent for the Phase 5 sticky bar.
- Cards with image + title: `components/Blog/BlogCard/BlogCard.tsx` (press cards; already `target="_blank"`, href `/press/<slug>`; switch to `externalUrl`).

## 3. Hiring site (`screenshots/hiring/`, `hiring-{390,1440}-full.jpg`)
- Structure in order: hero (white, 80px padding, h1 "Own the work. Find a way." 50px/800 + muted subtitle) → `#openings` (grey #f1f1f1, "Open roles" h2, 3 role cards in a 3-col grid) → values (white, "What we work by", 5 columns) → process (white, "How hiring works", 5 numbered columns 01–05) → letter (grey, "A letter from Michael" centred, paper card max 760px with a left-bordered orange quote and a Caveat signature) → ink footer.
- Role card: white, 1px `#dee2e6` border, 10px radius, 20px padding, no shadow; hover: orange border + 2px lift; whole card is the link; title h3, muted description, two icon lines (pay with a coin icon, schedule with a calendar icon), "See the role →" in 600 weight.
- Tokens (light): `--ss-surface-paper #ffffff`, `--ss-surface-grey #f1f1f1`, `--ss-surface-ink #1f2236`, `--ss-ink-muted #5c6075`, `--ss-border #dee2e6`, `--ss-section 40px` (doubled at ≥62em), `--ss-reading-column 760px`, `--ss-title-desktop 50px`, `--ss-title-phone 28px`, `--ss-signature-size 36px`, `--ss-radius-sm 5px`, `--ss-focus #e8a743`. These are the same brand values this site already has in `globals.css` (`--gray`, `--blue`, `--white`), so Phase 4 reproduces them as local section CSS.
- Fonts: Sora everywhere (same as here); signature in Caveat 600 (`next/font/google`).
- Reader contract (Phase 4): the page is server-rendered HTML; roles are `<a href="/<slug>-intake">` inside `#openings`, each with one `<h3>`, one `<p>`, and `<li>` lines for pay and schedule. Values and process steps are `<li>` items with a bold title and a body under `[aria-labelledby=values-title]` / `[aria-labelledby=process-title]`; the letter is under `[aria-labelledby=letter-title]`. No JSON feed exists; the reader parses HTML with no new dependency (decision 24), validates it found ≥1 role with a title and an intake link, and otherwise falls back to `data/hiring-snapshot.json`.

## 4. Reference designs
None in this repo. The hiring site itself is the reference for Phase 4 (decision 41). For Phases 3 and 5 the reference is the current site, one step smaller (decision 35).

## 5. Gate baseline (before any change)
- typecheck: clean. prettier: clean. jest: no tests (passes).
- ESLint: 242 errors on master (quotes, unescaped entities, unused imports), 2 warnings. stylelint: 218 errors (211 auto-fixable). Both are pre-existing; CI does not run lint (`eslint.ignoreDuringBuilds` is on). Manu's rule requires lint to pass, so the baseline is cleaned once, in its own commit, after the Phase 1 deletions — mechanical `--fix` plus hand edits for the handful that cannot be auto-fixed. Recorded as ❓ in the overview.
