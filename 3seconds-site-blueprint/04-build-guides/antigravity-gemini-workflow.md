# Antigravity + Gemini Workflow

## Recommended working method

### 1. Start with foundations
Provide Gemini:
- `01-foundation/sitemap.md`
- `01-foundation/design-system.md`
- `01-foundation/motion-scroll-system.md`
- `01-foundation/responsive-behavior.md`

Ask it to create tokens, layout primitives, media utilities, and route shell before page-specific work.

### 2. Build one vertical slice
Build Home Hero + Header + one Work card completely across desktop/mobile/reduced-motion before creating the entire site.

This validates:
- typography;
- grid;
- video handling;
- animation approach;
- responsive behavior.

### 3. Implement routes one at a time
For each route, provide the page spec plus only the section files used on that page. Avoid dumping the whole blueprint into every prompt.

### 4. Ask for plan first, then code
For a complex section, prompt Gemini to output:
- component tree;
- content/data model;
- motion states;
- responsive changes;
- accessibility considerations;
then implement.

### 5. Review against acceptance criteria
Do not accept "looks close". Compare each section against its file's requirements.

## Suggested stack direction
Choose based on your existing Antigravity project, but a modern React framework with route-level rendering, optimized images/video, and a deliberate animation layer fits this project well.

Possible pieces:
- Next.js / React;
- CSS variables + Tailwind or CSS Modules;
- GSAP + ScrollTrigger **or** Motion/Framer Motion for motion (avoid stacking multiple animation frameworks unnecessarily);
- Lenis only if smooth scrolling truly adds value and does not break accessibility/native behavior;
- a headless CMS later if the portfolio changes frequently.

## Agent instruction
Tell Gemini explicitly: **Do not invent client names, campaign metrics, testimonials, or agency facts. Use clearly marked placeholders.**
