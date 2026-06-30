# Handoff: Kamal Raj — Portfolio Website Redesign

## Overview
A personal portfolio site for **Kamal Raj**, a staff technical writer & AI tooling builder (18 years; Salesforce, Intel, and earlier roles from 2008). Headline title used on the site is **Staff Technical Writer** with the specialty line **Developer Documentation & AI Tooling**. Location is intentionally omitted from the public site and CV. The site positions him to hiring managers: a value-first hero, a "Selected Work" list linking to case studies, an About section, a full Experience timeline, and a contact section with a working form. The visual language is **warm editorial** — a parchment paper canvas, a high-contrast serif display face, a clean grotesque for UI, a single rust accent, and rule/hairline-based layout (no glowy cards, no gradients). Motion is restrained: a serif italic accent, an animated stat block, a slow tech ticker, hover row-shifts, and a nav that condenses on scroll.

There are three views:
1. **Homepage** (`Portfolio.dc.html`) — single page: nav → hero → tech ticker → work → about → experience → contact → footer.
2. **Case-study template** (`case-study.dc.html`) — a detail page (Salesforce flagship built out as the worked example).
3. **CV / résumé** (`CV.dc.html`) — a print-ready A4 résumé with a "Download / Print PDF" button (`window.print()`), wired to every "Download CV" link on the site. Print styles hide the toolbar and drop shadows so Cmd/Ctrl-P produces a clean PDF.

---

## About the Design Files
These are **design references created in HTML** — prototypes showing the intended look, layout, and behavior. They are **not production code to copy verbatim.**

> Format note: authored as "Design Components" (`.dc.html`). The markup is standard HTML with inline styles, but control flow uses custom tags (`<sc-for>` loops, `<sc-if>` conditionals) and a `renderVals()` JS class supplies the data. Treat that as pseudo-code for *what data drives the UI*. The repeated markup + the `projects` / `capabilities` / `roles` / `metrics` / `steps` arrays in each `<script>` tell you exactly which fields each component needs.
>
> **Reveal-on-scroll:** elements carry a `data-reveal` attribute and the prototype runtime animates them in. In the real build, implement this yourself (IntersectionObserver, `framer-motion` `whileInView`, or a CSS `@keyframes` entrance) — and always include a fallback that forces visibility so content can never get stuck hidden.

> **Content accuracy:** all roles, dates, titles, and metrics come from Kamal's résumé and are correct as of mid-2026. Do not reintroduce earlier placeholder claims (a "standing ovation at two AI Expos", "2M+ downloads", "17 years", a fabricated testimonial) — they were removed deliberately. Copy is written in a plain human voice with **no em dashes and no AI-cliché phrasing**; keep it that way.

**Your task:** recreate these in the target codebase using its patterns. Map inline styles to the chosen styling system; map `<sc-for>` to `.map()`; move `renderVals()` data into content/constants.

> **Target codebase:** the existing **`kamalraj21/contentcraft`** repo — an **Astro + Tailwind** site (`@astrojs/react`, `lucide-react`) whose homepage is `src/pages/index.astro` composed of `Hero.astro`, `Projects.astro`, `About.astro`, `Contact.astro`, `Footer.astro`. This redesign replaces the current theme. Rebuild each section as its matching `.astro` component, move data into `src/content/` collections (update existing `src/content/projects/*.md` front-matter to the corrected copy/metrics here), swap the Google Fonts in, and add a `/cv` route plus a `/projects/[slug]` case-study route.

---

## Fidelity
**High-fidelity.** Colors, typography, spacing, motion, and copy are intentional. Recreate faithfully.

---

## Tech / Libraries in the prototype
- **Fonts (Google Fonts):** `Newsreader` (display/serif — the personality of the design; use the optical-size axis, weights 400–600, plus italic) and `Hanken Grotesk` (UI/body, weights 400–700). No Inter, no Roboto, no Syne.
- **Icons:** [Lucide](https://lucide.dev) (`lucide-react` in the app). Used: `arrow-right`, `arrow-up-right`, `arrow-left`, `arrow-down-to-line`, `bookmark`, `mail`, `phone`, `map-pin`, `linkedin`, `file-text`, `printer`, `send`, `check-circle-2`, `bot`, `network`, `git-branch`, `book-open`, `brain`, `pen-tool`, `database`, `plug`, `search`, `shield-check`.
- **Motion:** scroll reveals + count-up numbers + a CSS marquee (`@keyframes`, ~44s linear) + scroll-condensing nav. All hand-rollable.

---

## Design Tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| Paper (canvas) | `#F4EEE3` | Page background |
| Paper raised | `#FBF7EF` | Featured card / pull-quote fill |
| CV sheet | `#FFFFFF` on `#E6DECF` backdrop | Résumé page |
| Ink | `#211C17` | Primary text, dark buttons, dark contact band |
| Ink (contact band) | `#1A1714` | Dark contact section background |
| Ink soft | `#3A332B` / `#4A443B` | Body copy |
| Muted | `#6B6358` | Secondary copy |
| Faint | `#8A8175` / `#9C9286` | Labels, captions, meta |
| Rust (accent) | `#B4471F` | Links, accents, primary buttons, serif italic highlight |
| Rust hover | `#8F3415` | Button hover |
| Rust on dark | `#E0764A` | Accent on the dark contact band |
| Hairline | `rgba(33,28,23,0.12–0.18)` | Rules, dividers, card borders, stat grids |
| Success | `#8FCB9B` | Form success message (on dark) |

> No gradients as backgrounds. No glow shadows. Elevation is a single soft shadow (`0 12px 48px rgba(31,27,22,0.16)` on the CV sheet; `0 18px 44px rgba(33,28,23,0.13)` on the featured card hover). Structure comes from hairline rules, not boxes.

### Typography
| Role | Font | Weight / Style | Size | Notes |
|---|---|---|---|---|
| Display H1 | Newsreader | 400 | `clamp(44px, 6.4vw, 86px)` | `-0.022em`, line-height 1.02; one phrase set in **italic 400 rust** |
| Section H2 | Newsreader | 400 | `clamp(32px, 4.4vw, 56px)` | `-0.02em` |
| Card / role titles | Newsreader | 400–500 | 21–33px | `-0.015em` |
| Stat numbers | Newsreader | 400 | 30–46px | `-0.02em`, line-height ~0.95 |
| Eyebrows / labels | Hanken Grotesk | 600 | 12px | `0.16–0.18em`, UPPERCASE, rust or faint |
| Lead paragraph | Hanken Grotesk | 400 | 19–20px | line-height ~1.62 |
| Body | Hanken Grotesk | 400 | 14–16px | line-height ~1.55 |
| Pull-quote | Newsreader italic | 400 | 22px | on `#FBF7EF` with a 2px rust left rule |

Pairing logic: **Newsreader carries all the personality** (display, numbers, titles, quotes); Hanken Grotesk is the neutral workhorse for everything functional. This serif-display / grotesque-body split is what makes the site not look template-generated.

### Spacing & shape
- Content `max-width: 1180px` (homepage), `920px` (case study), gutter `44px`. Section vertical rhythm ~`104–108px`.
- **Radius:** small chips `6px`, buttons/inputs `9–11px`, cards `16–18px`, CV sheet `3px`. Nothing pill-shaped except none — avoid stadium shapes.
- **Borders:** `1px` hairlines in `rgba(33,28,23,0.12–0.18)`. Stat blocks are built from top+left hairlines on a grid (each cell adds right+bottom), giving a ledger look.

### Motion
- **Scroll reveal:** opacity 0→1 + `translateY(20px)→0`, ~720ms `cubic-bezier(0.16,1,0.3,1)`, staggered via `data-reveal-delay` (60/120/180/220 ms). Fire on enter; **always** force-reveal fallback.
- **Count-up:** stat numbers animate 0→target over ~1400ms cubic ease-out, once, on enter.
- **Ticker:** tech terms scroll infinitely, ~44s linear, duplicated track, edge fade masks. Dot separators.
- **Hover:** primary buttons `translateY(-3px)` + darken; work-list rows increase horizontal padding (text nudges inward) + faint tint; contact rows shift `translateX(4px)` + accent border.
- **Press:** buttons `scale(0.98)`.
- **Nav:** transparent at top; on scroll >24px gains `rgba(244,238,227,0.86)` + `blur(12px)`, a bottom hairline, tighter padding.
- Respect `prefers-reduced-motion` in production.

---

## Screens / Views

### 1. Homepage — `Portfolio.dc.html`
**Nav (fixed):** left wordmark "Kamal Raj" (Newsreader) + a tiny uppercase "Content & AI" tag. Right: Work / About / Experience / Contact + a dark **Download CV** button (`arrow-down-to-line`) linking to `CV.dc.html`. Condenses on scroll.

**Hero:** an eyebrow row (role · hairline · location). A large Newsreader H1 with one phrase in **rust italic** ("actually trust"). Then a two-column row: left a 3-sentence value paragraph + two CTAs (rust "View selected work", ghost "Get in touch"); right a 2×2 **ledger stat block** (hairline grid) with count-up numbers — 18 years, 10 AI assistants, 80% faster first drafts, 70% shorter review cycles.

**Tech ticker:** full-bleed hairline-bordered band, infinite marquee of uppercase terms (RAG · MCP · Agentic Search · Python · C++ · DITA · Sphinx · reStructuredText · Markdown · GitHub Actions · CI/CD · Oxygen XML · Perforce), edge fades.

**Work:** eyebrow "Selected work" + H2 + one-line note. A **featured card** (`#FBF7EF`, hairline, radius 18): "Flagship case study" label, H3 "Salesforce CX AI Content Suite", role line, paragraph, tech chips, and a 2×2 ledger stat grid (10 / 80% / 75% / 700+). Links to the case study. Below, an **editorial row list** (not cards): four projects as `48px num / title+role / blurb / stats+arrow` grid rows separated by hairlines; hover expands row padding. Projects: Intel OpenVINO & Tiber Edge AI, DocPilot, Axon Networks DITA Pipeline, Token Mastery — all link out (`target="_blank"`) to their real artifact.

**About:** two-column `1fr / 1.3fr`; left a **sticky** eyebrow + H2 ("I make complicated platforms make sense."); right three narrative paragraphs, then a 2-column **capability list** (6 items, hairline-divided): each = small rust icon + title + one line. Capabilities: AI tooling, Information architecture, Docs-as-code, Technical writing, Agentic systems, Content strategy.

**Experience:** eyebrow + a hairline-divided **timeline**: each row = mono date range (left, 170px col) + title + rust company + a one-line note. Eight roles, Salesforce (Jan 2025–Present) down to Phantasm Games Studio (Aug 2008–May 2010). Driven by `roles[]`.

**Contact (dark band):** background flips to `#1A1714`, paper text, rust-on-dark accent. Left: eyebrow + H2 ("Let's talk about your documentation.") + paragraph + three rows (email / LinkedIn / Download CV). Right: a **contact form** (Name / Email / Message + submit) with dark inputs, uppercase labels, rust focus border; on submit shows a green success line and flips the button to "Sent" (prototype intercepts + clears — wire to a real endpoint in production).

**Footer:** wordmark + role; Email / LinkedIn / CV links; hairline + copyright line ("© 2026 Kamal Raj. All rights reserved.").

### 2. Case study — `case-study.dc.html`
Fixed nav ("← Back to portfolio" + dark "Get in touch"). Hero: "Flagship case study" label + org/date, big Newsreader H1, lead paragraph, meta row (Role / Timeline / Stack). A hairline **metric band** (4 Newsreader stats: 10 / 80% / 75% / 700+). Body is a repeating `1fr / 2.1fr` pattern with a **sticky left label** ("The challenge" / "The approach" / "The outcome"); the approach is a hairline-divided list of icon+title+body steps (RAG retrieval, MCP agents, agentic search, constraint-bound output); the outcome ends with a rust-ruled pull-quote (Newsreader italic). Centered CTA band + minimal footer. Reuse this layout per project; only copy/metrics change.

### 3. CV — `CV.dc.html`
A print-ready **A4 sheet** centered on a warm backdrop. Sticky screen-only toolbar: "← Back to portfolio" + a rust "Download / Print PDF" button calling `window.print()`. Sheet: header (name, role, contact column with icons) over a 2px ink rule; an italic Newsreader summary; a 4-cell ledger of headline metrics; a full **Experience** section (detailed bullets for Salesforce, Intel, Rakuten, Oracle, plus a condensed "Earlier:" line); then a two-column footer block — Independent Projects + Education on the left, Skills + Certifications on the right. Print CSS (`@page { size: A4 }`, `@media print`) hides the toolbar, removes shadows, and avoids breaking role blocks across pages. **All data is résumé-accurate**; keep it the single source of truth and have the live "Download CV" links point here (or to an exported PDF of it).

---

## Interactions & Behavior
- Nav links smooth-scroll to `#work` / `#about` / `#experience` / `#contact`.
- "Download CV" (nav, contact, footer) → `CV.dc.html`; the CV's button prints to PDF. In production you may instead link a pre-exported `Kamal-Raj-CV.pdf`.
- Work entries open the case study (internal) or the real external artifact (`target="_blank" rel="noopener"`).
- Scroll reveals + count-ups fire once on enter, with fallback.
- Form: all required; prototype prevents default, clears, shows success. Replace with real submission (Formspree / serverless / mailto).
- **Responsive:** desktop-first with fluid `clamp()` type. Below ~900px: collapse the hero, about, and contact to single column; let the work-list rows stack (num inline, stats wrap); make the case-study `1fr/2.1fr` rows stacked; convert nav to a menu. The CV sheet already scales (`max-width: calc(100% - 32px)`).

## State Management
Minimal. Only the contact form needs local state (`name`, `email`, `message`, `sent`). Everything else is static data, lift into content/constants:
- `projects[]`: `{ num, title, role, blurb, href, target, stats:[{value,label}] }`
- `capabilities[]`: `{ icon, title, body }`
- `roles[]`: `{ dates, title, company, note }` (most recent first)
- CV: `highlights[]`, `roles[]` (with `points[]`), `projects[]`, `skills[]`
- Case study: `metrics[]`, `steps[]`

## Assets
- **No raster images / photos** — type + rule based, on-brand and intentional.
- **Fonts:** Newsreader + Hanken Grotesk (Google Fonts).
- **Icons:** Lucide (`lucide-react`); LinkedIn via Lucide or `simple-icons`.
- **Real contact details:** email `kamal.raj2181@gmail.com`, phone `+91 98806 77291` (CV only), LinkedIn `linkedin.com/in/kamal-raj-75b389b`. Location is deliberately not shown. Verify before launch.

## Files
- `Portfolio.dc.html` — homepage (all sections + nav/counter/form logic).
- `case-study.dc.html` — case-study detail template.
- `CV.dc.html` — print-ready résumé (the canonical, accurate work history).

Open any file directly in a browser to see the intended result and behavior before porting.
