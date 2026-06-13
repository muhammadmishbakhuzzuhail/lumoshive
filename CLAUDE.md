# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

A rebuilt + redesigned marketing site for **Lumoshive** (PT. Lumos Inisiatif Indonesia), recreated from the live `lumoshive.com` in Next.js. Content/sections mirror the original; the UI is a custom redesign. There is no backend — every route prerenders to static HTML.

## Commands

```bash
npm run dev      # dev server (Turbopack) on :3000
npm run build    # production build — must pass clean (TS + static gen)
npm start        # serve the production build
npm run lint     # eslint (flat config, next/core-web-vitals)
```

There is no test suite. Treat `npm run build` + `npm run lint` as the gate before considering work done.

## Stack-specific gotchas

- **Next.js 16 + React 19, Tailwind v4.** Read `AGENTS.md` — the bundled docs in `node_modules/next/dist/docs/` are the source of truth for this Next version, which differs from older training data.
- **shadcn/ui here is built on `@base-ui` primitives, not Radix.** This is the single biggest trap. Components compose via the **`render` prop**, NOT Radix's `asChild`. To render a `Button`/`SheetTrigger`/`SheetClose` as a link:
  ```tsx
  <Button render={<Link href="/x" />}>Label</Button>   // ✅
  <Button asChild><Link href="/x">Label</Link></Button> // ❌ type error
  ```
  Children of the wrapper become the rendered element's children. For nested composition, prefer a `Link` styled with `buttonVariants()` over double-nesting `render`.
- **lucide-react ships no brand icons.** `Facebook`, `Instagram`, `Linkedin`, X, WhatsApp do not exist as imports — use the custom SVGs in `src/components/icons.tsx`.
- **Tailwind v4 uses CSS-first config.** No `tailwind.config.js`; tokens and `@theme` live in `src/app/globals.css`. Brand colors (`--primary` navy `#15294e`, `--accent` gold `#f8c212`) and custom utilities (`.container-px`, `.bg-mesh`) are defined there.

## Architecture

- **Content is data-driven.** Editable copy/lists live in `src/data/*.ts` (features, activities, testimonials, tech-stack, products, projects, team) and site-wide constants (contact, socials, nav, offices) in `src/lib/site.ts`. Change content there, not in JSX.
- **Chrome is global.** `src/app/layout.tsx` renders `TopBar → Navbar → {children} → Footer → WhatsAppFab` around every page. Page files only return their own sections.
- **Server vs client split:** pages and most sections are Server Components. Interactive pieces are Client Components (`"use client"`): `Navbar` (scroll/glass + mobile Sheet), `Hero` (video + intro animation), `Testimonials` (carousel), `ProjectsGrid` (category filter), `ContactForm`. Animation primitives in `src/components/reveal.tsx` (`Reveal`, `Stagger`, `StaggerItem`) are client wrappers reused by server sections.
- **Reusable building blocks:** `SectionHeading`, `PageHero`, and the `*Card` components enforce consistent spacing/typography. New sections should compose these rather than re-style from scratch.

## Assets & branding

- All images/video live under `public/assets/` mirroring the original site's `assets/newUI/...` paths, referenced via `next/image` (SVG optimization is enabled in `next.config.ts` via `dangerouslyAllowSVG`).
- Logos, client marks, videos, and copy are Lumoshive's. Reusing for another brand means replacing assets in `public/assets/` and content in `src/data/` + `src/lib/site.ts`.
