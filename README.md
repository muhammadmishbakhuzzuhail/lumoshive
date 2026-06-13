# Lumoshive — Rebuild & Redesign

Modern rebuild + redesign of **two** Lumoshive sites in a single Next.js app:

- **Marketing** — [lumoshive.com](https://www.lumoshive.com/) at `/`
- **Academy** — [academy.lumoshive.com](https://academy.lumoshive.com/) at `/academy`

Content and section structure mirror the originals; the visual layer is fully redesigned (brand tokens, motion, glass navbars, premium cards).

## Tech stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first config in `globals.css`)
- **shadcn/ui** on the `@base-ui` primitive set — composition uses the `render` prop, **not** `asChild`
- **framer-motion** — scroll reveal / stagger / carousels + hero animation
- **lucide-react** — icons (brand glyphs are custom, see `components/common/icons.tsx`)
- Fonts via `next/font`: **Sora** (headings) + **Inter** (body)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes prerender static)
npm start        # serve the production build
npm run lint     # eslint
```

## Architecture (domain-based)

```
src/
  app/
    layout.tsx               # root: html/body + fonts only
    globals.css              # Tailwind v4 tokens + brand palette
    (marketing)/             # route group — marketing chrome (TopBar/Navbar/Footer/WA)
      layout.tsx, page.tsx   # home
      technology/ projects/ product-services/ contact-us/ about-us/
    academy/                 # academy chrome (own navbar/footer/WA)
      layout.tsx, page.tsx   # academy home
      program/ about-us/ beasiswa/ blog/
  components/
    ui/                      # shadcn (shared)
    common/                  # reveal, section-heading, page-hero, icons (shared)
    marketing/{layout,sections,cards}/
    academy/{layout,sections}/
  data/
    marketing/               # features, activities, testimonials, tech-stack, products, projects, team
    academy/                 # benefits, testimonials, faq, alumni, blog, about
  lib/
    site.ts                  # marketing constants (contact, socials, nav, offices)
    academy.ts               # academy constants (nav, address, course categories)
    utils.ts
public/assets/
  …                          # marketing assets (mirror of assets/newUI/…)
  academy/{ui,storage}/      # academy assets
```

Marketing URLs are unaffected by the `(marketing)` route group (groups don't appear in the path).

## Design decisions

- **Brand palette** sampled from the logo: **black `#161616`** (primary) + **gold `#f8c212`** (accent) on white — the brand is black/gold/white, not blue. Tokens live in `src/app/globals.css`; a dark theme is included (add `.dark` on `<html>`).
- **Typography**: Sora for headings, Inter for body.
- **Motion**: reveal-on-scroll + staggered grids; glassmorphism navbars; animated hero. The marketing hero video has baked-in text, so it's blurred/darkened into an ambient backdrop.

## Assets

**163** assets downloaded with **0 failures**:
- **113** marketing assets across home/technology/projects/product-services/contact-us/about-us → `public/assets/` (mirrors `assets/newUI/…`). Teaser videos renamed to drop spaces (`teaser-lumoshive.mp4`, `teaser-livre.mp4`).
- **50** academy assets (UI + uploaded blog/graduate/mentor images) → `public/assets/academy/`.

## Notes

- Newsletter and contact forms are **UI-only** (no backend wired).
- The academy course catalog and member login require the academy backend; with no API the catalog faithfully shows the original "no class available" empty state, and Get Started / login links point to `academy.lumoshive.com/member/login`.
- All branding/copy belongs to Lumoshive. To reuse for another brand, replace assets in `public/assets/` and content in `src/data/` + `src/lib/{site,academy}.ts`.
