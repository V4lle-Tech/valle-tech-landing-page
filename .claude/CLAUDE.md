# Valle Tech Landing Page

## Overview
Landing page for Valle Tech, a technology consulting practice targeting
SMBs (PyMEs) in Mexico. Built with Astro, deployed to GitHub Pages at
https://v4lle.tech.

## Tech Stack
- **Framework**: Astro 5.x (static output)
- **Interactive components**: React 19 via @astrojs/react (islands architecture)
- **Styling**: Vanilla CSS with custom properties for theming (dark/light) — no Tailwind
- **Content**: JSON files in src/content/ (not Astro Content Collections)
- **Package manager**: Bun — do NOT use npm, yarn, or pnpm
- **Deployment**: GitHub Actions -> GitHub Pages with custom domain v4lle.tech

## Commands
- `bun install` — Install dependencies
- `bun run dev` — Dev server (default port 4321)
- `bun run build` — Production build to dist/
- `bun run preview` — Preview production build
- `bun run check` — Type-check .astro and .ts files

## Project Structure
- `src/layouts/Base.astro` — Main HTML layout with SEO meta, Open Graph,
  JSON-LD structured data, theme initialization script, favicon
- `src/components/*.astro` — Astro components: Nav (with theme toggle and
  fullscreen menu), Footer, VLogo (SVG)
- `src/components/*.jsx` — React island components: Accordion (expandable
  service list), Counter (animated number with IntersectionObserver).
  Used with `client:visible` directive for lazy hydration.
- `src/pages/` — File-based routing. Dynamic routes (`[slug].astro`) use
  `getStaticPaths()` with data from JSON content files.
- `src/content/*.json` — Content data: services.json (5 services),
  portfolio.json (4 case studies), posts.json (3 blog posts with inline HTML)
- `src/styles/global.css` — CSS reset, theme tokens on `:root` (dark default)
  and `[data-theme="light"]`, typography utility classes, shared component
  styles, keyframe animations

## Key Patterns
- **Astro-first**: Pages and layout components are .astro files. React is
  used only where client-side interactivity is required.
- **CSS custom properties for theming**: Dark is default. Light theme
  activates via `[data-theme="light"]` on `<html>`. Toggle persists to
  localStorage. Theme init script in Base.astro prevents flash.
- **Utility classes defined in global.css**: `.font-display` (Archivo),
  `.font-mono` (Fira Code), `.section-pad`, `.container`, `.btn-primary`,
  `.btn-outline`, `.card`, `.tag`, `.img-block`
- **Fonts**: Urbanist (body), Archivo (display/headings), Fira Code (mono)
  loaded via Google Fonts CDN
- **Images**: All from Unsplash URLs, no local image assets
- **Spanish language**: All user-facing content is in Spanish (es-MX)
- **Inline styles**: Used extensively for one-off spacing and sizing

## Conventions
- Component props defined with TypeScript interfaces in Astro frontmatter
- Scoped `<style>` blocks in .astro files; global styles in global.css only
- Spanish file/route names: sobre-mi, contacto, servicios, portafolio
- JSON content uses slug-based routing pattern
