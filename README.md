# Biccas

Modernized landing page for **Biccas** (Taskio productivity dashboard), migrated from static HTML/CSS to **Next.js 16.2**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, and **pnpm**.

## Stack

- Next.js 16.2 (App Router, Server Components by default)
- TypeScript
- Tailwind CSS v4
- shadcn/ui (Sheet, Tabs, Form primitives)
- GSAP + ScrollTrigger (section reveals, parallax, hover)
- Lenis (smooth scroll, respects `prefers-reduced-motion`)

## Scripts

```bash
pnpm dev          # Development server (Turbopack)
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # ESLint
pnpm type-check   # TypeScript check
```

## Project structure

```
src/
  app/              # App Router pages & global styles
  components/
    layout/         # Header
    sections/       # Page sections (hero, features, footer, …)
    providers/      # Lenis + GSAP
    ui/             # shadcn/ui primitives
  lib/              # Utils & content constants
  styles/legacy.css # Original layout styles (visual fidelity)
public/img/         # Static assets
```

## Styling

- Layout styles live in `src/styles/legacy.css` (migrated from the original static site).
- `src/styles/compat.css` patches Tailwind preflight conflicts (scroll, images, footer, forms).
- Images use `LegacyImage` (`<img>`) and live in `public/img/`.
- Design tokens (`--color-brand`, etc.) are in `globals.css` for incremental Tailwind adoption.

## License

See repository license.
