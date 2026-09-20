# Don Don Chinese Restaurant — Front-End Redesign

A modern, editorial-style homepage for Don Don Chinese Restaurant (Carnegie, PA).
Built with **Next.js 15 (App Router) · React 19 · Tailwind CSS 3 · Framer Motion · Lucide icons**.

> This is a **front-end only** redesign. There is no cart, checkout, accounts, or
> order management. Every "Order Online" button links to the restaurant's existing
> ordering system via one constant (see below).

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

Requires Node 18.18+ (Node 20 LTS recommended).

---

## The 3 things you'll most likely edit

### 1. Ordering URL — `src/config/site.ts`

```ts
export const ORDER_URL = "https://www.dondonchineserestaurant.com/menu";
export const ORDER_OPENS_IN_NEW_TAB = false; // true if ORDER_URL is off-domain
```

Every Order Online CTA (navbar, hero, final section, mobile menu) reads `ORDER_URL`
through the shared `OrderButton` component in `src/components/ui/Button.tsx`.
Change it once and all buttons update.

### 2. Restaurant details — `src/config/site.ts`

Name, address, phone, social links, navigation labels/links, menu URL, the six
menu-discovery categories and the customer reviews (`reviews`, `googleReviewsUrl`)
all live in this one file. Reviews are quoted verbatim from Google — keep them genuine. Star ratings per platform
(Google, DoorDash, Uber Eats) are in `ratingPlatforms`; drop official badges into
`public/images/logos/` and set each `logo` path to show them instead of text.

### 3. Photos — `public/images/`

| File | Used in | Recommended size |
| --- | --- | --- |
| `hero-general-tso.jpg` | Hero (right side) | ≥ 2000 × 1500, glossy sauced dish |
| `cat-*.jpg` (6 files) | Menu category circles | ≥ 600 × 600, square |
| `family-kids.jpg`, `family-harbor.jpg`, `family-waterfall.jpg` | Our Story collage | real family photos, ≥ 1200 px; two landscape + one portrait |
| `cta-dumplings.jpg` | Final "Hungry Yet?" section | ≥ 2400 × 1000, wide |
| `og-image.jpg` | Social sharing preview | 1200 × 630 |

The food photos are AI-generated placeholders supplied by the owner; the three `family-*.jpg` photos are real photos of the owners' family. Swap any photo for real
Don Don photography by keeping the filename (or update the paths in `src/config/site.ts`,
where alt text also lives).

---

## Project structure

```
src/
  app/
    layout.tsx        # fonts, <head> metadata, Open Graph, JSON-LD schema
    page.tsx          # assembles the homepage from components
    globals.css       # Tailwind layers, eyebrow label, reduced-motion rules
  components/
    Navbar.tsx        # sticky glass nav, mobile hamburger
    Hero.tsx          # hero with staggered entrance animation
    TrustBar.tsx      # logo + rating strip under the hero (Google / DoorDash / Uber Eats)
    MenuCategories.tsx# six circular categories, swipeable on mobile
    Story.tsx         # split-screen: family photo collage + background glyph
    Features.tsx      # "Why Don Don" four-up
    Testimonials.tsx  # review marquee (real Google reviews from config)
    FinalCTA.tsx      # "Hungry Yet?" conversion section
    Footer.tsx
    ui/
      Button.tsx      # Button + OrderButton (the ORDER_URL wrapper)
      Logo.tsx
      Seal.tsx        # red Chinese-inspired seal mark
  config/
    site.ts           # ALL restaurant-specific content
  lib/
    motion.ts         # shared Framer Motion variants / easing
public/images/        # photography (replaceable)
static-preview/       # dependency-free HTML mirror of the design (open in a browser, no build)
tailwind.config.ts    # design tokens (colors, fonts)
```

---

## Design tokens

Defined in `tailwind.config.ts`:

| Token | Value | Use |
| --- | --- | --- |
| `ink` | `#0B0D0C` | main background |
| `ink-soft` | `#131412` | secondary warm charcoal |
| `ink-lift` | `#1A1B18` | lighter charcoal for the menu section |
| `ivory` | `#F4F0E8` | primary text, primary button |
| `ivory-muted` | `#9C968C` | secondary text |
| `brand-red` | `#A52A1D` | seal, accents — used sparingly |
| `brand-gold` | `#B8975E` | handwritten note, hover glow |

Fonts (loaded via `next/font/google`, self-hosted at build time):
**Cormorant Garamond** (headlines) · **Manrope** (body/nav) · **Caveat** (handwritten accent).

---

## Animations & accessibility

- All motion is transform/opacity only (no layout animation).
- `prefers-reduced-motion` is respected: Framer Motion's `useReducedMotion()` disables
  entrance/parallax effects, and `globals.css` neutralises CSS transitions.
- Scroll reveals fire once (`viewport={{ once: true }}`) to keep scrolling cheap.
- Buttons/links have visible focus rings; icons are `aria-hidden`; images have alt text.
- Semantic structure: one `<h1>` (hero), `<h2>` per section, `<nav>`, `<main>`, `<footer>`, `<address>`.

---

## SEO

- Title, description, keywords, Open Graph and Twitter card in `src/app/layout.tsx`.
- `Restaurant` JSON-LD schema is injected in `layout.tsx` — add `openingHoursSpecification`,
  `priceRange`, `menu`, `acceptsReservations`, etc. as needed.
- Update `site.url` in `src/config/site.ts` to the production domain (drives `metadataBase`).

---

## Deploying

Standard Next.js app — deploys as-is to Vercel, Netlify, or any Node host
(`npm run build && npm start`). For a purely static host, add `output: "export"` to
`next.config.ts` and set `images.unoptimized = true` (Next Image optimisation
requires a server), then deploy the generated `out/` folder.

Section anchors (`#menu`, `#story`, `#catering`, `#contact`) are used by the nav on
this single-page home; swap them for real routes when About/Catering/Contact pages are built.
