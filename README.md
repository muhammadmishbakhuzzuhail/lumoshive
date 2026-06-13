# Lumoshive — Rebuild & Redesign

Modern rebuild of [lumoshive.com](https://www.lumoshive.com/) in **Next.js (App Router) + TypeScript + Tailwind v4 + shadcn/ui**, with a fully redesigned, professional company-website UI. Content and section structure mirror the original site; the visual layer is upgraded (brand tokens, motion, glass navbar, premium cards).

## Tech stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** (Button, Card, Sheet, Carousel, Accordion, Badge, Input, …) on the `@base-ui` primitive set
- **framer-motion** — scroll reveal / stagger / carousel + hero animation
- **lucide-react** — icons (brand glyphs are custom, see `src/components/icons.tsx`)
- Fonts via `next/font`: **Sora** (display/headings) + **Inter** (body)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes prerender static)
npm start        # serve the production build
npm run lint     # eslint
```

## Project structure

```
src/
  app/
    layout.tsx              # fonts, metadata, TopBar + Navbar + Footer + WhatsApp FAB
    page.tsx               # home (Hero, About, TeamCta, Activity, Testimonials)
    technology/            # tech stack + Section 42
    projects/              # filterable portfolio + clients + analysis tools
    product-services/      # problems + pricing plans + products
    about-us/              # mission + solutions + achievements + leadership
    contact-us/            # contact form + office info
  components/
    layout/                # top-bar, navbar, footer, whatsapp-fab
    sections/              # page sections (hero, about, projects-grid, ...)
    ui/                    # shadcn components
    reveal.tsx             # framer-motion Reveal / Stagger helpers
    section-heading.tsx, feature-card.tsx, activity-card.tsx, testimonial-card.tsx
    page-hero.tsx          # reusable inner-page hero
    icons.tsx              # custom brand SVGs (X, WhatsApp, Facebook, Instagram, LinkedIn)
  data/                    # editable content: features, activities, testimonials,
                           # tech-stack, products, projects, team
  lib/site.ts              # site constants (contact, socials, nav, offices)
public/assets/             # logos, icons, images, video (downloaded from the live site)
```

## Design decisions

- **Brand color** sampled from `public/assets/logo.png`: deep navy `#15294e` (primary) + gold `#f8c212` (accent). Wired into Tailwind tokens in `src/app/globals.css`; a dark theme is included (flip `.dark` on `<html>`).
- **Typography**: Sora for headings (modern, geometric), Inter for body (clean, legible).
- **Motion**: reveal-on-scroll + staggered grids; glassmorphism navbar on scroll; animated hero with video background.

## Assets

All **113** visual assets referenced across the home, technology, projects, product-services, contact-us, and about-us pages were downloaded into `public/assets/` (mirroring the original `assets/newUI/...` layout). **0 failures.** Hero/teaser videos were renamed to drop spaces (`teaser-lumoshive.mp4`, `teaser-livre.mp4`).

## Notes

- The newsletter and contact forms are **UI-only** (no backend wired). Hook them to an API/route handler to make them live.
- Branding (logo, client logos, videos, copy) belongs to Lumoshive. **If reusing this for another brand, replace all branded assets in `public/assets/` and the copy in `src/data/` + `src/lib/site.ts`.**
