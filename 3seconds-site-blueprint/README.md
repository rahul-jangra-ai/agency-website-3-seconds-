# 3seconds — Creative Media Agency Website Blueprint

This folder is the planning source-of-truth for building the **3seconds** agency website entirely with code in Antigravity IDE using Gemini models / AI-assisted development.

## Core idea
3seconds is built around one belief: **attention is won or lost in the first three seconds.** The website should demonstrate that belief rather than merely state it.

The experience should feel fast, editorial, playful, culturally aware, image/video-led, and deliberately kinetic. It takes inspiration from the *energy and storytelling approach* of Creativefuel's public website, but all layouts, copy systems, branding, motion concepts, and interaction rules here are designed as an original direction for 3seconds.

## How to use this folder
1. Read `00-reference-study/creativefuel-visual-study.md` for reference observations.
2. Lock the site structure in `01-foundation/sitemap.md`.
3. Give Gemini the relevant file in `02-pages/` before building a route.
4. For every section on that route, also provide its matching file from `03-sections/`.
5. Keep `01-foundation/design-system.md` and `01-foundation/motion-scroll-system.md` in context during all frontend work.
6. Use `04-build-guides/build-order.md` as the implementation sequence.
7. Use the acceptance criteria in every file as the definition of done.

## Proposed routes
- `/` — Home
- `/work` — Work index
- `/work/[slug]` — Case study detail
- `/services` — Services
- `/about` — About
- `/contact` — Contact / project brief
- `/careers` — Careers
- `/404` — Error state

## Non-goals
- Do not copy Creativefuel's HTML/CSS/JS, text, imagery, logos, or exact layouts.
- Do not create a three-second blocking intro animation. The brand promise is speed, so content should appear immediately.
- Do not rely on animation to communicate essential information.
- Do not sacrifice mobile performance for decorative effects.
