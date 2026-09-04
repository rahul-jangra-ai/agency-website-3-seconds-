# Motion & Scroll System

## Principle
Motion should communicate **speed, sequencing, and attention**. The user must never feel trapped in an intro or forced to wait.

## Global timing
- Micro interaction: 120–220ms
- Component transition: 250–450ms
- Section entrance: 450–700ms
- Page transition: 350–550ms
- Avoid transitions longer than 900ms unless tied directly to user scrolling.

## Easing
Use 2–3 consistent curves only:
- fast out / soft settle for UI;
- smooth ease for large media;
- linear for marquees.

## Scroll patterns

### Line-mask reveal
Headlines reveal line by line from below. Trigger once when ~15–25% enters viewport.

### Sticky chapter
A section can remain sticky while 3 concise beats swap media/text. Max sticky duration: around 2.5–3 viewport heights.

### Horizontal work rail
Vertical scrolling may translate a horizontal strip for 2–4 projects. Must degrade to a normal vertical list on touch/mobile if performance suffers.

### Parallax
Only on large visual assets; movement ratio 0.05–0.12 relative to page scroll. Never apply to body text.

### Counters
Animate real numeric outcomes once on first view; complete under ~900ms.

### Marquee
Use a continuous client/service ticker. Pause on hover/focus; respect reduced motion.

### Hover scrub
Desktop case-study thumbnails may scrub 6–12 preview frames or play a 2–4s muted loop.

## Brand-specific “3-second” moment
Hero can show a tiny sequence `03 / 02 / 01` as a **non-blocking overlay** during first 700–1000ms while the main content is already visible. Do not make the visitor wait three literal seconds.

## Reduced motion
When `prefers-reduced-motion: reduce`:
- disable parallax;
- stop marquees and display a static wrapped list;
- replace mask reveals with simple opacity or no animation;
- disable auto-playing decorative video when practical;
- keep all content accessible in normal document flow.

## Performance rules
- Animate `transform` and `opacity` whenever possible.
- Avoid scroll listeners that force layout every frame.
- Lazy-load below-the-fold media.
- Provide compressed AV1/WebM/MP4 where possible plus poster images.
- Aim for smooth 60fps on a mid-range phone.
