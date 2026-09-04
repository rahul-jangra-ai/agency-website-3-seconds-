# 3seconds Design System

## Art direction
**Editorial speed + internet culture + production craft.** The interface should feel like a magazine cover collided with a post-production timeline.

## Color
Use a restrained shell so project media can dominate.

- `Ink`: #0B0B0B — primary dark background/text
- `Paper`: #F2EFE7 — warm off-white
- `Signal`: #FF4F19 — high-energy accent / CTA / hover
- `Flash`: #D8FF36 — sparing secondary accent for tags/status
- `Mid`: #8E8E88 — secondary text

Rules:
- Never use Signal + Flash everywhere at once.
- Most pages should be 70–85% Ink/Paper.
- Project media owns its native palette.
- Text contrast must meet WCAG AA.

## Typography
Use 2 families maximum.

### Display
A bold grotesk or condensed variable sans. Desired feeling: loud, compact, poster-like.
- Hero desktop: `clamp(72px, 10vw, 180px)`
- Page title: `clamp(64px, 8vw, 144px)`
- Section title: `clamp(42px, 5vw, 88px)`
- Tight line-height: 0.85–0.98
- Slight negative tracking for large display only

### Text/UI
Neutral grotesk/sans.
- Body desktop: 18–22px
- Body mobile: 16–18px
- Labels: 12–14px uppercase or all-caps only when short

## Grid
Desktop:
- 12 columns
- max content width: 1600px
- page padding: 32–48px
- gutter: 20–28px

Mobile:
- 4 columns
- padding: 16–20px
- gutter: 12px

## Corners
Prefer square / 2–6px radius. Avoid generic 24px SaaS cards.

## Buttons
Primary CTA should look like a graphic device, not a default pill.
- solid Signal background on Paper pages;
- Paper/Ink inversion on dark pages;
- 44px minimum hit target;
- hover can compress text slightly + move arrow 4–8px.

## Media treatment
- Mix 16:9, 4:5, 1:1, and ultra-wide crops intentionally.
- Do not round every media block.
- Use edge-to-edge media for key beats.
- Video should default muted, playsinline, poster-first, lazy loaded.

## Graphic motifs
Original 3seconds motifs:
- countdown numerals 3 → 2 → 1;
- timecode labels (`00:00:03`);
- crop marks / frame brackets;
- fast-forward chevrons;
- tiny red recording dot;
- timeline ticks.

Use them as punctuation, not decoration on every element.
