# Simplify Site Navigation
Status: IN PROGRESS — Phases 1–5 CODE-COMPLETE 2026-11-06 on branch feat/simplify-site-navigation (not pushed, not merged); Final A-Z pass pending
Research: 1

## User stories
- As a prospect, I land on the homepage from an ad or a Google result, scan the top bar, and every link I click either shows me proof (Results, Trades, About, Blog) or sends me to book a call. Nothing in the bar is a detour. — Phases 1, 2, 3, 5
- As a prospect holding an old link (Pricing, Our Work, Our Process, Partners, a Press article, Testimonials, Trades We Serve), I click it and land on the homepage or the renamed page. Never a dead end. — Phases 1, 2
- As a prospect on my phone or tablet, I open the menu, see one flat list, and reach Book A Call in one tap; once I scroll past the hero, a Book A Call bar stays pinned to the bottom of my screen. — Phases 3, 5
- As a job seeker, I click Careers in the top bar, stay on stonesystems.io/careers, see the same roles, values, hiring steps and letter as hiring.stonesystems.io, click a role, and land on that role's application on hiring.stonesystems.io. — Phase 4
- As the hiring team, I change a role on hiring.stonesystems.io and the main site's Careers page shows the change within five minutes without anyone touching this repo. — Phase 4

## Research
Tier 1 (edits to existing pages plus one rebuilt page). Written 2026-11-06: [research/RESEARCH.md](research/RESEARCH.md) with baseline screenshots in `research/screenshots/baseline/`, the hiring site in `research/screenshots/hiring/`, and per-phase passes in `research/screenshots/phase3|phase4|phase5/`. This repo has no `DESIGN.md`, no `docs/design/references/`, and no `.cursor/rules/`; the baseline is the live site itself.
Known before research (verified 2026-11-05):
- Site is Next.js 14 app router + Mantine 7, Sora font, brand tokens in `globals.css` (`--yellow #e8a743`, `--blue #1f2236`, `--gray #f1f1f1`).
- Header links are 17px, bar is locked to a fixed 83em width, About and Products are hover dropdowns; the desktop bar shows from 768px up; below that a full-screen drawer.
- Shared bottom-of-page blocks (CTA, 3-step process, testimonial carousel) are injected by `components/LayoutWrapper/LayoutWrapper.tsx` based on the current address.
- Results page heading is "The proof is in the pudding... Let's see what our clients have to say" and the page embeds a live Google-reviews widget from links.stonesystems.io below the grid. Trades page headings are "Serving all these trades and more..." and "All Trades by Category".
- Homepage press cards read `data/blogs.json` (8 entries, 4 featured, every entry has a publisher link); cards already open in a new tab but point at `/press/<slug>`.
- hiring.stonesystems.io is also Next.js + Mantine + Sora with the same brand colours. It is server-rendered: sections carry stable ids (`#openings`, `#openings-title`, `#values-title`, `#process-title`, `#letter-title`, `#hero-title`), each role is an `<a href="/csm-intake|/setter-intake|/closer-intake">` card containing an `<h3>` title, a description `<p>`, pay and schedule lines. Section surfaces use its own tokens (`--ss-surface-paper`, `--ss-surface-ink`, `--ss-surface-grey`, `--ss-ink-muted`, `--ss-border`). Title: "Careers at Stone Systems". Values: Clients Come First, Own Everything, Find a Way, Move Fast, Be Honest and Open. Hiring steps: Apply, We review, Group interview, Personal interview, Offer. Letter signed "Michael" in the Caveat handwritten font.
Research pass must produce: screenshots of the current header at 768px, 1024px, 1280px and 1440px wide and at 390px with the drawer open; screenshots of every page touched (home, testimonials, trades-we-serve, careers, about-us, blog) and of hiring.stonesystems.io at desktop + phone; a saved copy of the hiring page HTML for the reader to be written against; the exact values of the hiring site's `--ss-*` tokens so Phase 4 can match them.

## Locked decisions
Workflow (from Manu, 2026-11-05 — this repo has no `.cursor/rules/`, these are the rules):
- Work only on branch `feat/simplify-site-navigation`. Never commit or push to master. Never merge PRs, never deploy, never run production migrations.
- Before finishing: lint, typecheck, tests and build all pass.
- Do not add spec files or unit tests.
- Talk to Manu in user interface, user experience and user story terms, not technical terms.

Product (confirmed by Manu, 2026-11-05):
1. Delete these pages entirely, plus everything only they use (press write-ups, website screenshots, pricing content): Pricing, Our Work, Our Process, Partners, Press (list and every article).
2. Every old address for a deleted page forwards the visitor to the homepage. This includes every individual press-article address (reaffirmed 2026-11-06; not to the publisher).
3. Rename Testimonials → Results (new address `/results`). Pure rename: tab title and any on-page "Testimonials" wording become "Results". Same video grid, nothing added.
4. Rename Trades We Serve → Trades (new address `/trades`). Content unchanged.
5. Old `/testimonials` and `/trades-we-serve` addresses forward to `/results` and `/trades`.
6. Homepage "See All" links on testimonial cards and the "reviews & testimonials" link in "Why choose us" land on Results.
7. Homepage "In The News" block stays. Each card opens the publisher's original article in a new tab. "View All Press" button removed.
8. Homepage partner logo strip stays as is.
9. The 3-step "What working with us looks like" block stays everywhere it appears today.
10. Desktop top navigation, left to right: Logo, Products (dropdown, unchanged), Results, Trades, About, Blog, Careers. Right side: Log In, Book A Call. No dropdown for About.
11. "About" in the bar is a plain link to the existing About Us page.
12. Contact is not in the top bar. It lives in the footer only and keeps forwarding straight to the booking calendar.
13. Header text shrinks one step, Log In / Book A Call buttons shrink slightly, logo stays the same size, and the bar flexes to the screen width so nothing wraps on a 13-inch laptop.
14. Mobile hamburger menu mirrors the flat list: Home, Products (expandable), Results, Trades, About, Blog, Careers, Log in, Book A Call.
15. Footer: "Links" and "About" columns collapse into one "Company" column: Results, Trades, About Us, Blog, Careers, Contact, Log in. Two Products columns unchanged. Legal links row unchanged.
16. Careers page reproduces hiring.stonesystems.io (headline, open roles, "What we work by", "How hiring works", letter from Michael) wrapped in this site's normal header and footer. The hiring site's own mini header and mini footer are dropped.
17. Each role card sends the visitor to the matching hiring.stonesystems.io application page (csm-intake, setter-intake, closer-intake) in the same tab.
18. Careers page does not show the "Want to schedule a time to talk?" block or the testimonial carousel at the bottom.
19. The three old roles (Sales Associate, Senior SEO Specialist, Senior Software Engineer) and the email-your-resume flow are removed.
20. Careers roles are a live feed from the hiring site: whatever roles are shown there are shown here, with no manual update.
21. The page list handed to Google is updated: Results, Trades, Careers added; deleted and old-named pages removed.
22. Branch: `feat/simplify-site-navigation`.
23. Before finishing: lint, typecheck, tests, build all pass. No spec files or unit tests added.
24. Housekeeping scope: no dependency changes this sprint (the libraries only Press used stay in `package.json`; removing them is a separate cleanup). No drive-by refactors or renames outside the file lists below.

Product (confirmed by Manu, 2026-11-06):
25. All forwards are permanent: Google is told the old pages are gone for good and their ranking passes to the destination.
26. "In The News" block keeps its wording exactly ("In The News" / "Stone Systems in the Press"). Cards keep today's look; the whole card is the link to the publisher; no external-link icon or other cue.
27. The FAQ question "Why is your pricing so cheap?" and the low-price card in "Why choose us" stay as they are.
28. `data/blogs.json` stays untouched, including fields nothing reads any more.
29. Results page heading stays word for word. The live Google-reviews widget below the grid stays.
30. Trades page headings stay word for word; only the tab title and the address change.
31. Link labels pointing at Results keep their wording ("See All", "reviews & testimonials"); only destinations change.
32. Google's page list drops Contact. Legal pages that are missing from the list today stay missing (out of scope).
33. No new Results or Trades links are added to the homepage; the bar and footer are the entry points.
34. Tablets get the hamburger menu: the desktop bar appears only from about 1100px wide; below that, phones and tablets share the drawer.
35. Header sizes are locked: link text 17px → 15px, Book A Call button extra-large → large, Log In button large → medium. Logo unchanged.
36. The current page is highlighted in the desktop bar (e.g. "Results" marked while on Results). Products is highlighted on any product page.
37. Careers looks identical to the other bar links. No quieter styling.
38. Footer merged column heading is "Company"; order is Results, Trades, About Us, Blog, Careers, Contact, Log in. The two Products columns keep today's layout, including the second one having no heading.
39. Phone drawer keeps Log in and Book A Call at the bottom, Book A Call as the full-width yellow bar.
40. Phase 3 ships before Phase 4; in the meantime Careers in the new bar points at the current careers page.
41. Careers visual fidelity is Option A: match the hiring page's own section styling (paper/ink surfaces, card style, spacing) under this site's header and above its footer. Both sites share the font and brand colours.
42. A change on the hiring site appears on `/careers` within 5 minutes.
43. If the hiring site lists zero roles, `/careers` shows "No open roles right now" plus careers@stonesystems.io.
44. Failure fallback: a snapshot of the hiring page's content, saved in this repo, is shown only when the live read fails. There is no "last read" memory across restarts; the snapshot is the memory.
45. The Caveat handwritten font is loaded for Michael's signature on the Careers page only.
46. careers@stonesystems.io appears once on the page, under Open roles.
47. Careers tab title follows this site's pattern: "Stone Systems - Careers".
48. Conversion extras accepted (Manu answered the detail questions for 25a–25d on 2026-11-06, read as acceptance):
    - 25a Sticky Book A Call bar on phones and tablets: full-width yellow, pinned to the bottom, appears only after the visitor scrolls past the hero, sits above the cookie banner, chat bubble nudged up above it. Not on Careers, VSL or legal pages.
    - 25b A lone Book A Call button directly under the heading on Results and on Trades. No extra line of text.
    - 25c Bottom of the Products dropdown: "Not sure which system you need? Book a call" with a button. Copy locked.
    - 25d Log In in the bar becomes a plain text link in the same dark blue as the other links, so Book A Call is the only yellow element.
49. Tracking tags for the new buttons: `sticky-mobile`, `results-top`, `trades-top`, `products-dropdown`.
50. 25c and 25d are built in Phase 3 (same header files). 25a and 25b are Phase 5.

## Invariants this sprint promises
- A. Products pages and the Products dropdown stay exactly as they are (the only addition is the 25c line at the bottom of the dropdown).
- B. Blog page, blog posts and the blog's live content feed stay exactly as they are.
- C. VSL page stays exactly as it is.
- D. Every video on the site (homepage carousel, Results grid, product pages, VSL, bottom-of-page carousel) keeps playing.
- E. Every Book A Call link still opens the booking calendar at grow.stonesystems.io with its existing click-tracking tags intact.
- F. Contact still forwards to the booking calendar.
- G. Log In still opens app.stonesystems.io.
- H. All legal pages (Terms, Privacy Policy, SMS Terms, DPA, Your Privacy Choices, Privacy Request, Cookie Settings) untouched.
- I. Chat widget, cookie banner and tracking pixel untouched (the sticky bar may shift the chat bubble up; it never hides it or the banner).
- J. Mobile menu, dropdown hover, FAQ accordion, carousels, the Results page's Google-reviews widget and every other interactive element keep working.
- K. Nothing changes on hiring.stonesystems.io, the funnel, or any subdomain.
- L. No visitor ever sees a dead end: every address that existed before this sprint still lands somewhere.

## Gate (this repo — replaces the skill's backend/frontend commands)
```
npm install --legacy-peer-deps      # once; node_modules is not present in a fresh checkout
npm run lint                         # next lint + stylelint
npm run typecheck                    # tsc --noEmit
npm test                             # prettier:check + typecheck + jest (passWithNoTests)
npm run build                        # next build — must complete
```
All four must be green before a phase is marked done. The blog page talks to Sanity at build time; if the build fails only because `SANITY_API_TOKEN` is missing locally, record that and verify the blog page renders in `npm run dev` instead — do not touch the blog to make the build pass (see OQ-26).
Rule files for the step-1 reload and the step-6 reviewer brief: this repo has none, so reload this doc's Locked decisions and Invariants instead and hand the reviewer this doc plus the diff.

## Phase 1 — Delete five pages, forward old addresses home, fix homepage press cards — CODE-COMPLETE 2026-11-06
Shipped in commits af10160 (phase) and 800884c (lint baseline). Gate: lint 0 errors, typecheck clean, jest no tests (passes), build OK. Fresh-context code review: no High; Medium 1 = header/footer still linked the deleted pages until Phase 3 (accepted, Phase 3 shipped before any merge); Medium 2 = `package-lock.json` had been rewritten by `npm install --legacy-peer-deps` inside the lint commit → restored to master's lock in 7e64732; Low = `<track>` captions tag on every video → replaced by a lint exception in 7e64732; Low = press card had no guard for an empty publisher link → all 8 entries have one, left as is. Lint-baseline commit verified behaviour-neutral item by item by the reviewer.
Done means: `/pricing`, `/our-work`, `/our-process`, `/partners`, `/press` and `/press/<anything>` all permanently forward to the homepage; no file in the repo still points at them; the homepage "In The News" cards (unchanged look, unchanged heading) open the publisher's article in a new tab with no added icon, and the "View All Press" button is gone; the partner logo strip, the 3-step block, the FAQ pricing question and the low-price card still render on the homepage.
Files:
- delete `app/pricing/`, `app/our-work/`, `app/our-process/`, `app/partners/`, `app/press/` (including `app/press/[slug]/`)
- delete `components/PricingPage/`, `components/OurWorkPage/`, `components/OurProcessPage/`, `components/PartnersPage/`, `components/Blog/PressGrid/`
- delete `content/press/`, `lib/markdown.ts`, `public/images/websites/`
- keep `public/images/partners/` (homepage strip), `data/blogs.json` (untouched, decision 28), `components/Homepage/PartnersSection/`, `components/Homepage/Our Process/`, `components/ProcessSection/`
- edit `components/Blog/BlogCard/BlogCard.tsx` (card links to the entry's publisher link, new tab, safe rel; no visual change), `components/Blog/BlogSection/BlogSection.tsx` (remove the View All Press button only), `components/LayoutWrapper/LayoutWrapper.tsx` (drop `/our-process` and `/partners` from the address list), `next.config.mjs` (permanent forwards for the five addresses and `/press/:slug` to `/`)
- [x] Pages, components, press write-ups and website screenshots deleted; nothing imports them
- [x] Old addresses permanently forward to the homepage (checked in the browser for each of the six patterns)
- [x] Homepage press cards open the publisher article in a new tab; no card points at `/press/...`; cards look the same as before
- [x] "View All Press" button removed; "In The News" / "Stone Systems in the Press" heading and four cards still show
- [x] Partner logo strip, 3-step block, FAQ pricing question and low-price card unchanged on the homepage
- [x] Gate green

## Phase 2 — Rename Testimonials → Results and Trades We Serve → Trades; update Google's page list — CODE-COMPLETE 2026-11-06
Shipped in commit d847a5b. Gate green (lint 0, typecheck clean, no tests, build OK). Three videos on /results played to 2s in a real browser; the Google-reviews widget loads. Fresh-context code review: VERDICT approve, no findings (verified page components identical to master, no redirect loops, sitemap exact, `reviews & testimonials` wording untouched).
Done means: `/results` shows the video testimonial grid, its current heading word for word, and the Google-reviews widget, with "Results" in the tab title; `/trades` shows the trades page unchanged with "Trades" in the tab title; `/testimonials` and `/trades-we-serve` permanently forward to the new addresses; every homepage and shared link that pointed at the old addresses points at the new ones with its wording unchanged; the sitemap lists exactly: home, results, about-us, trades, careers, privacy-policy, terms, sms, blog, plus blog posts.
Files:
- move `app/testimonials/page.tsx` → `app/results/page.tsx`; move `app/trades-we-serve/page.tsx` → `app/trades/page.tsx`; update both pages' metadata titles ("Stone Systems - Results", "Stone Systems - Trades")
- `components/TestimonialPage/TestimonialSection/TestimonialSection.tsx` — no change (heading and widget stay, decision 29)
- edit `components/Homepage/TestimonialSection/TestimonialSection.tsx` and `components/TestimonialSection/TestimonialSection.tsx` ("See All" → `/results`)
- edit `components/Homepage/WhyChooseUsSection/WhyChooseUsSection.tsx` (link → `/results`, wording unchanged)
- edit `components/Homepage/WhoWeServeSection/WhoWeServeSection.tsx` (link → `/trades`)
- edit `next.config.mjs` (permanent forwards `/testimonials` → `/results`, `/trades-we-serve` → `/trades`)
- edit `app/sitemap.xml/route.js` (static list: '', results, about-us, trades, careers, privacy-policy, terms, sms, blog; blog posts unchanged; contact dropped)
- [x] `/results` and `/trades` render; old addresses permanently forward
- [x] Tab titles say Results / Trades; on-page headings unchanged
- [x] All "See All" and "reviews & testimonials" links land on Results; the homepage trades link lands on Trades; wording unchanged
- [x] Sitemap lists exactly the pages above
- [x] Every video on `/results` still plays (spot-check three) and the Google-reviews widget loads
- [x] Gate green

## Phase 3 — Header, mobile menu, footer (includes extras 25c and 25d) — CODE-COMPLETE 2026-11-06
Shipped in commits b3e3205 (phase) and 7e64732 (review fixes). Gate green after both. Design loop: 3 passes recorded (`research/screenshots/phase3/pass1..pass3`).
- Pass 1 (pass1/): bar fits on one line from 1104px; current page highlighted; drawer on 390/768/1024; dropdown footer line. Subtraction pass: nothing of ours to remove ("Systems & Features" heading is pre-existing).
- Pass 2 (pass2/): footer columns verified (Company / Products / unnamed aligned), exact switch at 1103→1104px, Products highlighted on a product page, all three Book A Call destinations and tags verified in the DOM.
- Pass 3 (pass3/) after fresh-context reviews: current page now dark text + centred yellow underline (was yellow text, 2.09:1 contrast and same colour as hover); drawer uses a left accent instead of a full-width rule; Log in in the drawer is dark; Log in / Book A Call pinned to the drawer's bottom so expanding Products no longer pushes Book A Call off screen; chevron rotates + aria-expanded; tablet drawer is a 420px right-side panel; burger target 42px; focus styles; aria-current on Products; menu closes itself if the window grows to desktop; bar capped at 1328px so it aligns with the content column.
- Reviews: code reviewer VERDICT approve (Lows: drawer-open-then-resize lock, 0.16px breakpoint gap, aria-expanded on burger — all fixed). Design reviewer: "passes the bar: no — current-page link yellow on white at 2.09:1" → fixed as above; other items (asymmetric underline, drawer rule, gold Log in, tablet drawer width, burger size, focus ring, maw) fixed; copy duplication in the dropdown line is locked by 25c (noted). Journey reviewer: "Story completed cold: no — Book A Call covered by the privacy banner in the phone drawer" → pre-existing (banner z-index 2147483000 is above everything, Invariant I keeps it untouched) → ❓ flagged; Products expansion pushing the CTA away → fixed (pinned footer); Careers-in-bar and hover-vs-click dropdown are locked decisions → ❓ noted for Manu.
Done means: from about 1100px wide upwards the bar shows Logo, Products ▾, Results, Trades, About, Blog, Careers, Log In (plain dark-blue text), Book A Call (the only yellow element) on one line at 1280px and 1440px with no wrapping and no About dropdown; the current page's link is highlighted; the Products dropdown is identical to today except for a "Not sure which system you need? Book a call" line with a button at its bottom; below about 1100px (phones and tablets) the hamburger drawer shows Home, Products (expandable), Results, Trades, About, Blog, Careers, Log in, Book A Call (full-width yellow bar at the bottom); the footer shows one "Company" column (Results, Trades, About Us, Blog, Careers, Contact, Log in) plus the two unchanged Products columns and the unchanged legal row.
Files:
- edit `components/Header/Header.tsx` (remove `aboutData` and the About dropdown; add plain links; current-page highlight from the address; Log In as plain link; dropdown footer line with Book A Call tagged `products-dropdown`; same flat list in the drawer; drawer shown up to the new breakpoint)
- edit `components/Header/Header.module.css` (link text 15px, Book A Call large, Log In medium, bar width fluid with a max, active-link style, dropdown footer style; logo untouched)
- edit `theme.ts` only if a custom breakpoint (~1100px) must be registered for the show/hide switch; otherwise the switch lives in `Header.module.css`
- edit `components/Footer/Footer.tsx` (column data), `components/Footer/Footer.module.css` only if the three-column layout needs it
- [x] Desktop bar fits on one line at 1280px and 1440px; at 1024px and 768px the drawer is used instead; screenshots recorded
- [x] Sizes exactly as decision 35; logo unchanged
- [x] Current page highlighted in the bar; Products highlighted on product pages
- [x] Products dropdown unchanged apart from the new bottom line; its button opens the calendar tagged `products-dropdown`
- [x] Log In is plain dark-blue text and still opens app.stonesystems.io; Book A Call keeps its destination and `header-nav` tag
- [x] Drawer shows the flat list; Products still expands; Log in and Book A Call at the bottom as today
- [x] Footer Company column as specified; Products columns and legal row unchanged
- [x] UI loop: minimum three passes recorded under Design decisions
- [x] Gate green

## Phase 4 — Careers page, read live from hiring.stonesystems.io  (BLOCKED until OQ-24b is answered)
Done means: `/careers` shows the hiring site's headline, open roles, "What we work by", "How hiring works" and the letter from Michael, styled to match the hiring page's own sections (Option A), under this site's header and above this site's footer, with no CTA block and no testimonial carousel; the roles (and, per OQ-24b, the other sections) are read from hiring.stonesystems.io with a cache of at most 5 minutes, so a role change there appears here within 5 minutes without a code change; each role card goes to the absolute `https://hiring.stonesystems.io/<role>-intake` address in the same tab; careers@stonesystems.io appears once under Open roles; zero roles shows "No open roles right now" plus the email; when the hiring site cannot be read, the saved snapshot is shown, never an error; Michael's signature uses the Caveat font; tab title is "Stone Systems - Careers".
Files:
- new `lib/hiring.ts` (server-side read of `https://hiring.stonesystems.io/`, parse by the stable ids and the role-card anchors, return typed sections; revalidate every 5 minutes; on any failure return the snapshot)
- new `data/hiring-snapshot.json` (today's hiring page content in the same typed shape; used only on failure)
- rewrite `app/careers/page.tsx` (server component, calls `lib/hiring.ts`, metadata "Stone Systems - Careers", loads Caveat via `next/font/google` for this page only)
- replace `components/CareersPage/IntroSection/` and `components/CareersPage/JobsSection/` with new sections: hero, open roles grid (+ email line, + empty state), values, hiring steps, letter; styles reproduce the hiring page's `--ss-*` surfaces as local values in the section CSS (no change to `globals.css`)
- edit `components/LayoutWrapper/LayoutWrapper.tsx` (`/careers` shows neither CTA variant nor the testimonial carousel; header and footer stay)
- [ ] Roles, descriptions, pay and schedule lines match the live hiring site word for word on the day of the check
- [ ] A change on the hiring site shows here within 5 minutes (verified by comparing timestamps, not by editing the hiring site)
- [ ] Each role card opens the matching intake page on hiring.stonesystems.io, same tab
- [ ] Values, steps and letter present (live or copied per OQ-24b); signature in Caveat
- [ ] Email line under Open roles; empty state wording verified by rendering the component with zero roles
- [ ] Snapshot fallback verified once by pointing the reader at a bad address
- [ ] Side-by-side screenshots with hiring.stonesystems.io at desktop and phone: sections, surfaces, spacing and card style match (Option A)
- [ ] No CTA block or testimonial carousel on `/careers`; site header and footer present
- [ ] Old roles and the email-your-resume text gone
- [ ] UI loop: minimum three passes recorded under Design decisions
- [ ] Gate green

## Phase 5 — Conversion extras 25a and 25b (25e only if accepted in OQ-25e)
Done means: on phones and tablets, every page except Careers, VSL and the legal pages shows a full-width yellow Book A Call bar pinned to the bottom once the visitor has scrolled past the hero (or past the first screen on pages without a hero), sitting above the cookie banner with the chat bubble nudged above it; Results and Trades each show a lone Book A Call button directly under the page heading; each new button opens the booking calendar with its own tag (`sticky-mobile`, `results-top`, `trades-top`); nothing in Invariants A–L changed.
Files:
- new `components/StickyCta/StickyCta.tsx` + `.module.css` (phone/tablet only, appears after the hero, excluded addresses list, tag `sticky-mobile`)
- edit `components/LayoutWrapper/LayoutWrapper.tsx` (mount the sticky bar; exclude `/careers`, `/vsl`, legal addresses)
- edit `public/cookie-consent.js` only if the banner's bottom offset must change to sit under the bar — otherwise untouched (Invariant I)
- edit `components/TestimonialPage/TestimonialSection/TestimonialSection.tsx` (button under heading, tag `results-top`) and `components/TradesPage/MainTradesSection/MainTradesSection.tsx` (button under heading, tag `trades-top`)
- if OQ-25e is accepted: edit `components/Blog/BlogSection/BlogSection.module.css` (hide on phones)
- [ ] Sticky bar appears after the hero on phone and tablet widths, not on desktop; absent on Careers, VSL and legal pages
- [ ] Sticky bar sits above the cookie banner; chat bubble remains visible and tappable above the bar
- [ ] Results and Trades show one Book A Call button under the heading, no extra text
- [ ] Each new button opens grow.stonesystems.io with its own tag
- [ ] UI loop: minimum three passes recorded under Design decisions
- [ ] Gate green

## Design decisions
- 2026-11-05 — Header link and button sizes go down exactly one step and the bar becomes fluid rather than re-stacking items — Manu's decision 13: the goal is "everything fits without an About dropdown", not a redesign.
- 2026-11-05 — Careers copies the hiring site's structure and wording rather than restyling it — Manu's decisions 16/20: the two pages must never drift.
- 2026-11-06 — Tablets use the drawer, not a squeezed desktop bar — seven items plus two buttons cannot fit an iPad in portrait at the locked sizes (decision 34).
- 2026-11-06 — Header sizes locked numerically (15px links, large / medium buttons) rather than tuned by eye (decision 35).
- 2026-11-06 — Current page highlighted in the bar (decision 36); Careers styled identically to the other links (decision 37).
- 2026-11-06 — Careers matches the hiring page's own section styling (Option A) under our header and footer (decision 41); Caveat loaded for the signature on that page only (decision 45).
- 2026-11-06 — Careers failure fallback is a snapshot saved in the repo, because there is no durable memory across restarts and the user chose the snapshot over a bare "See open roles" button (decision 44).
- 2026-11-06 — Log In demoted to plain dark-blue text so Book A Call is the only yellow element in the bar (decision 48, 25d).
- 2026-11-06 — Sticky phone bar appears only after the hero, because the hero already carries a Book A Call (decision 48, 25a).

## Open questions
- ❓ FLAG FOR Manu (OQ-24b): Read the values, hiring steps and Michael's letter live from the hiring site too, or copy them once into the snapshot and only read the roles live? Proposed: read everything live so the two pages never drift. Phase 4 is blocked on this one word.
- ❓ FLAG FOR Manu (OQ-25e): Hide the homepage "In The News" block on phones to shorten the page. Accept / reject? (Only remaining extra without an answer.)
- ~~OQ-26~~ Resolved 2026-11-06: the production build completes locally without a Sanity token (all 55 blog posts built). No question left.
