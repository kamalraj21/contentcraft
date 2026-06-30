# Claude Code Brief — Ship the portfolio redesign to `kamalraj21/contentcraft`

Paste this whole file (or point Claude Code at it) from inside a local clone of the repo.

---

## Goal
Replace the current light-blue Astro site with the **warm editorial redesign** in this folder, then commit and push so the existing GitHub Action deploys it to `https://kamalraj21.github.io/contentcraft`.

## What's in this folder
- `README.md` — full design spec: tokens, fonts, motion, screen-by-screen breakdown, data shapes. **Read it first.**
- `Portfolio.dc.html`, `case-study.dc.html`, `CV.dc.html` — the prototypes (visual + behavior reference). These are *references*, not files to copy into the repo. They use custom `<sc-for>`/`renderVals()` syntax — treat as pseudo-code for layout + data.

## Repo facts (already verified)
- **Astro + Tailwind**, `output: "static"`, `site: https://kamalraj21.github.io`, `base: /contentcraft`.
- Integrations: `@astrojs/react`, `@astrojs/tailwind`, `@astrojs/mdx`.
- Homepage `src/pages/index.astro` composes `src/components/Hero.astro`, `Projects.astro`, `About.astro`, `Contact.astro`, `Footer.astro`.
- Content collections under `src/content/` (incl. `projects/*.md`).
- Deploy: `.github/workflows/astro-deploy.yml` runs on push to `main` → `npm run build` → uploads `./dist` → Pages. **No manual deploy step needed — just push to main.**

## Tasks
1. **Fonts:** add Google Fonts **Newsreader** (serif display, 400–600 + italic) and **Hanken Grotesk** (UI, 400–700). Remove Inter/old fonts. Wire into the Tailwind config (`fontFamily.serif = Newsreader`, `fontFamily.sans = Hanken Grotesk`) and the base layout `<head>`.
2. **Theme:** apply the palette from `README.md` (paper `#F4EEE3`, ink `#211C17`, rust accent `#B4471F`, hairline rules, dark contact band `#1A1714`). Put the colors in `tailwind.config` as named tokens. No gradients, no glow shadows — structure is hairline rules.
3. **Rebuild components** to match the prototype, section for section:
   - `Hero.astro` — eyebrow (Staff Technical Writer · Developer Docs & AI Tooling), serif H1 with one rust-italic phrase, value paragraph, two CTAs, 2×2 ledger stat block with count-up.
   - `Projects.astro` — featured card (Salesforce CX AI Content Suite) + an editorial **row list** of the other 4 projects (not cards).
   - `About.astro` — sticky H2 + 3 narrative paragraphs + 2-col capability list. Add an **Experience** timeline (8 roles) — new `Experience.astro` is fine.
   - `Contact.astro` — dark band, contact rows (email, LinkedIn, CV) + working form (wire to Formspree or a mailto fallback).
   - `Footer.astro` — wordmark + role + links + copyright "© 2026 Kamal Raj. All rights reserved." **No location anywhere.**
4. **CV route:** create `src/pages/cv.astro` from `CV.dc.html` — print-ready A4 with a "Download / Print PDF" button (`window.print()`) and `@media print` styles. Link every "Download CV" to `/contentcraft/cv`.
5. **Case study route:** create `src/pages/projects/salesforce-cx-ai-content-suite.astro` (or a `[slug]` route fed by the projects collection) from `case-study.dc.html`.
6. **Content:** update `src/content/projects/*` front-matter to the corrected, résumé-accurate copy and metrics in `README.md` (and in the prototype `renderVals()` data). 18 years; titles/dates exactly as listed.
7. **Icons:** use `lucide-react` (or `@lucide/astro`). LinkedIn has no Lucide glyph — use an inline brand `<svg>` (the path is in the prototypes) or `simple-icons`.
8. **Motion:** scroll-reveal (IntersectionObserver or a small Astro/React island) with a fallback that forces visibility; count-up numbers seeded to their final value so they never show 0; CSS marquee for the tech ticker; nav condenses on scroll. Respect `prefers-reduced-motion`.
9. **Links/base:** all internal links must respect Astro's `base` (`/contentcraft`). Use `import.meta.env.BASE_URL` rather than hardcoding.

## Acceptance checks
- `npm run dev` renders all sections with the new fonts/colors; no console errors.
- `npm run build` succeeds; `dist/` contains `index.html`, `cv/index.html`, and the case-study route.
- Count-up never shows a row of zeros; LinkedIn icon renders; no "Bengaluru/location" text anywhere; no em dashes, no AI-cliché phrasing.
- Internal links work under the `/contentcraft` base.

## Ship it
```bash
git checkout -b redesign
# ...implement...
npm run build      # confirm clean
git add -A
git commit -m "Redesign: warm editorial portfolio + CV + case study"
git push -u origin redesign
```
Open a PR and merge to `main` (or push straight to `main` if preferred) — the `astro-deploy.yml` Action will build and publish to GitHub Pages automatically. Verify the live site at `https://kamalraj21.github.io/contentcraft` after the Action finishes.
