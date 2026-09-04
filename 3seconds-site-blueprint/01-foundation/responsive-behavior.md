# Responsive Behavior

## Breakpoint philosophy
Design fluidly; use breakpoints only where composition changes.
Suggested anchors: ~640, ~900, ~1200, ~1600px.

## Desktop
- Strong asymmetric editorial layouts are encouraged.
- Custom cursor effects are allowed only if they add value and never replace native affordances.
- Hover previews and scrub interactions can be enabled.

## Tablet
- Reduce overlapping text/media.
- Convert complex sticky sections into shorter sticky sequences or normal flow.
- Keep touch targets >=44px.

## Mobile
- Prioritize first contentful paint and video poster quality.
- No cursor-dependent information.
- Avoid horizontal page overflow.
- Convert multi-column proof grids to 2-column or stacked.
- Keep page titles expressive but avoid 1–2 character orphan lines unless intentional.
- Case-study video should fit device width with native controls available when audio matters.

## Content order
DOM order should always match logical reading order even when desktop visuals overlap or rearrange.
