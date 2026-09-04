# Page Spec — Contact `/contact`

## Job of the page
Make starting a project feel easy and exciting while collecting enough information to qualify the inquiry.

## Sections
1. Header
2. Contact Hero
3. Project Brief Form
4. Direct Contact / socials
5. What happens next
6. Footer

## Form fields
Required:
- Name
- Work email
- Company / brand
- What do you need? (multi-select)
- Project summary

Optional:
- Budget range
- Desired launch window
- Reference link / file upload (only if backend supports securely)

## Success state
Replace the form with a clear confirmation. Keep an alternate email link visible.

## Spam/privacy
Add server-side validation, rate limiting, and a concise privacy note.

## Definition of done
- Layout follows the relevant section specs in `03-sections/`.
- Works with keyboard and touch.
- Reduced-motion state is intentional.
- No layout shift from media loading.
- Route has unique title/description/OG metadata.
- Mobile composition is reviewed separately rather than auto-stacked blindly.
