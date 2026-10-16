# Alexa Dupin portfolio: project rules

Personal portfolio for **Product Specialist** and **asynchronous technical support** roles (tickets, email, chat; no phone support). Not a software engineering portfolio.

## Priorities

- Lead with understanding users, investigating technical issues, explaining solutions, improving workflows and preventing repeat problems.
- Technical knowledge is a differentiator, but the main story stays readable for non-engineer recruiters and hiring managers.
- Home answers "what does she do and how" first, through three strengths ("What I do best"), each linking to the case studies that prove it.
- Home case studies, in order: WeSwapCards login troubleshooting, Booking.com release bug triage, training international testers, production outage after a host upgrade.
- Other case studies are easy to find on the Case studies page without equal visual weight.

## Tech and code standards

- Next.js App Router, TypeScript strict. No `any`, no `@ts-ignore`, no unused code or commented-out blocks.
- **Ask before adding any package** beyond what `create-next-app` provides. CSS-only animations. Propose (don't add) test or browser-testing tools.
- `app/` routes and page composition only. `components/` reusable UI with **no hard-coded copy**. `content/` holds all text, metrics, links, case studies and shared types, including nav labels, button text, badges, category names, page titles, meta descriptions, alt text and footer copy. `lib/` small helpers.
- Case study data uses optional blocks (metric, before/after, steps, communication notes, excerpt). Components render a block only when its data exists.
- Function components, destructured props, small single-purpose components, custom hooks only where they remove real duplication. No duplicated markup.
- create-next-app ESLint config; fix warnings, never disable rules.
- Static rendering. No backend, database, accounts or env vars.
- Mobile-first, no horizontal scroll at phone width, semantic HTML, accessible contrast, visible focus states, alt text, `prefers-reduced-motion` respected.
- Real per-page titles and meta descriptions (e.g. "Alexa Dupin | Product Specialist & Technical Support").
- Optimize for mobile and ATS/recruiter search: semantic HTML, all key content as real text (never baked into images), headings that name roles and skills, and job-description keywords (e.g. technical support, troubleshooting, root cause analysis, ticketing, Jira, documentation, onboarding, user research) used only where the facts support them.
- Fast: pages load in under 3 seconds on mobile. Static pages, `next/font`, no client JS except where interaction needs it, no heavy images.
- Windows / PowerShell commands. Every file stays inside `C:\Users\Alexa\code\product-portfolio`.

## Commands (PowerShell)

- `npm run dev` · `npm run typecheck` (runs `next typegen` first) · `npm run lint` · `npm run build`
- Link check: `npm run build`, `npx next start -p 3123`, then `npm run check-links http://localhost:3123`
- Next.js 16 with Cache Components: read `node_modules/next/dist/docs/` before using unfamiliar APIs. Root layout sets `ensureStatic = "navigation"` so every page stays fully static (and unknown slugs return a real 404).
- PowerShell 5.1 writes UTF-8 with BOM, which breaks `package.json`. Edit JSON with the editor tools, not `Set-Content`.

## Security

- No secrets, `.env` files, contact form, email address or CV. Only contact: LinkedIn.
- No analytics, tracking, chat widgets or third-party scripts without approval.
- No `dangerouslySetInnerHTML`. New-tab external links use `rel="noopener noreferrer"`.
- Security headers in `next.config` (CSP for a static site, X-Content-Type-Options, Referrer-Policy, frame protection); verify fonts and images still load.
- Fonts via `next/font` only.
- Run `npm audit`, report high/critical. Never `npm audit fix --force` without asking.

## Links

- LinkedIn: https://www.linkedin.com/in/alexa-dupin/ · GitHub: https://github.com/AlexaDupin
- Developer portfolio: https://alexadupin.vercel.app (WeSwapCards deep-dive: /work/weswapcards)
- AI job search workflow: version history skipped for now (don't show the iterations section).

## Boundaries: stop and ask before

- Adding a package; design choices not covered by the mockups; deploying (Vercel, domains, publishing, purchases, production config); any Git commit or push; any fact marked `[CONFIRM]`.
- Never touch files outside this folder or the existing developer portfolio.

## Design (locked mockup "Home · Final (locked)")

- Fonts: Schibsted Grotesk headings (700–800, letter-spacing -0.02em), Public Sans body (400–600). No italics.
- Palette Rose & Sand: bg #FFFFFF · ink #2A1F27 · muted #5E5560 · borders #ECE7EA · soft gray #F4F1EC · section tint #FAF8F4 (very light warm band behind "What I do best", added 2026-10-16) · links/accents #8A2F63 · pills (changed 2026-10-16, owner's choice) white semibold text on a small same-hue gradient brighter toward the right: pink #9A3C6E → #BD5C8C, golden sand #CCA661 → #D8B672 (sand's right end kept subtle so white text stays readable). No glow, box-shadow or text-shadow. Known trade-off accepted by the owner: white on the sand pill is about 2:1, below WCAG AA · image placeholders #F6EEF2, #F4F2E6 · primary button #E6EE8E with ink text · dark sections #3B2333 · footer #2A1F27 · on dark: white, muted #EADDE6, eyebrow #F1F4C7.
- The hero gradient (`--hero-gradient` in globals.css) is the only large background gradient, used by the home hero and every inner page top. Exception: pills use a small same-hue gradient (see palette). Everything else flat.
- Buttons: hover only changes the background color (no lift, no halo).
- Numbers never colored (ink, or white on dark). One approved exception (2026-10-16): the home metrics strip figures use a "liquid glass" text effect (translucent plum fill clipped to the text, plus a drop shadow; no diagonal light band), with a plain `CanvasText` fallback in forced-colors mode. Don't extend it elsewhere without asking.
- No emojis, scribbles or handwritten elements.
- Cards white with thin border; color only from pills, buttons and dark sections.
- Inner page tops (changed 2026-10-16): the same hero gradient as Home, with white text and the light eyebrow color. Applies to About, What I build, Case studies, 404 and case studies without an image.
- Case study tops (changed 2026-10-16): when the case study's image has a `src`, it fills the hero under a flat plum overlay (rgba(42,31,39,0.74)) with white text, and isn't repeated in the page body. Screenshots (`device` set) are blurred so their own text doesn't compete with the headline. Case studies without an image use the hero gradient.
- Subtle hover only. Nav: transparent over home hero, sticky flat plum #3B2333 after scroll and on all other pages.
- "Coming soon" items: visible badge, not clickable, no link-like hover.
- Images: clearly labeled placeholders until real screenshots. No stock photos with text.

## Writing rules

- Plain, concrete, sober, confident without hype. Active voice, contractions, short paragraphs.
- No em dashes. No buzzwords ("passionate", "results-driven", "leverage", "synergy", "game-changer"), no slogans.
- Booking.com: public website/app screenshots only, captioned "(public version)". No internal tools, Jira tickets, betas, partner platform, internal guides or data. No logo use implying endorsement. Owner-approved exception (2026-10-16): the Booking.com logo (`public/images/booking-logo.png`, supplied by the owner) marks the Booking.com entry in the About page's "My path" timeline only, as on a CV.

## Factual accuracy

- Use only facts the user provided. Never strengthen a claim.
- Keep implemented changes distinct from measured outcomes; qualitative outcomes stay qualitative.
- Never imply a code change reduced user-reported incidents (login case: ~13 → 4 is **code paths**; legacy redirect flow with forced sign-out still exists).
- No invented metrics, quotes, conversations, testimonials, satisfaction scores or logos. Constructed examples are labeled as samples.
- Missing fact → `[CONFIRM: ...]`, visibly marked as unfinished.
- Never claim: CI/CD, AWS/GCP/Azure, serverless, coverage percentages, Postman, "QA tooling", releases shipped "on time", or team work on WeSwapCards (solo project).
- WeWard's later feature: state as fact only; never suggest it copied WeSwapCards. API traffic is "at peak". Don't list Render.
- AI job search workflow: Alexa reviews every result; never "applies automatically/in bulk". Keep it smaller than WeSwapCards; don't present her as an AI specialist.

## Definition of done

- All pages and internal links work (run the link-check script); external links listed and confirmed.
- "Coming soon" items visibly non-clickable.
- Mobile nav, keyboard nav, focus states, contrast and reduced motion checked.
- No placeholder text presented as finished content; every `[CONFIRM]` listed.
- Every case study editable through `content/` only.
- Type check, lint, production build and `npm audit` pass with no errors or warnings (report any).
- Security headers active and nothing blocked.
- Reviewer re-read of changed files: duplication, hard-coded copy, accessibility gaps, claims beyond content files.
- Final summary: built, verified, still needs input. Never claim a check that wasn't run.
