# Performance & Accessibility Guardrails

## Performance targets
Aim for excellent Core Web Vitals on real mobile hardware.

### Media
- AVIF/WebP for images where supported;
- responsive `srcset`/sizes;
- videos have posters;
- lazy-load below fold;
- do not preload every project preview;
- keep hero video optional to first render.

### JS
- do not ship heavy animation code site-wide if only one route uses it;
- split motion modules by route/section;
- avoid continuous pointer listeners on mobile;
- clean up observers/listeners on unmount.

## Accessibility
- semantic headings in logical order;
- all controls keyboard operable;
- visible focus states;
- no essential hover-only information;
- sufficient contrast;
- labels stay associated with inputs;
- captions/transcripts for meaningful spoken video;
- reduced motion honored;
- autoplay video muted;
- decorative video/image marked appropriately.

## Motion QA
Test keyboard navigation while animations are running. Focus must not jump to visually hidden/offscreen content.
