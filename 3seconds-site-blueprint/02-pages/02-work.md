# Page Spec — Work `/work`

## Job of the page
Let work sell the agency with minimal friction.

## Sections
1. Header
2. Work Hero + live filter chips
3. Featured project — oversized
4. Project Grid
5. Services cross-link
6. Final CTA
7. Footer

## Filter model
Start simple:
- All
- Campaigns
- Social
- Film / Motion
- Brand / Design
- Creators
- AI / Experimental

Filters should update without page reload and animate reflow cleanly.

## Card data
Each card needs:
- title;
- client;
- year;
- tags;
- thumbnail image or short loop;
- case study URL.

## Avoid
- generic masonry where every card looks accidental;
- 20 tiny thumbnails above the fold;
- hidden project names only discoverable on hover.

## Definition of done
- Layout follows the relevant section specs in `03-sections/`.
- Works with keyboard and touch.
- Reduced-motion state is intentional.
- No layout shift from media loading.
- Route has unique title/description/OG metadata.
- Mobile composition is reviewed separately rather than auto-stacked blindly.
