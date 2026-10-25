# PinakXAI website

Marketing site and website-template showroom for PinakXAI — a digital product studio (websites, mobile apps, AI solutions, marketing).

**Stack:** React 19 · React Router 7 (data router, lazy routes, View Transitions) · Vite 8 · plain modern CSS (cascade layers, design tokens, container queries, subgrid, scroll-driven animations). No UI framework, no CSS-in-JS.

## Commands

```bash
npm install
npm run dev        # local dev server
npm run build      # production build -> dist/  (also regenerates sitemap.xml + robots.txt)
npm run preview    # serve the production build locally
npm run lint       # oxlint
npm run format     # prettier
```

## Configuration

Create a `.env` (or set variables in your host) — both are optional:

| Variable | Purpose |
| --- | --- |
| `VITE_SITE_URL` | Your public origin, e.g. `https://pinakxai.com`. Used for canonical links, Open Graph, sitemap and robots. |
| `VITE_FORM_ENDPOINT` | Where the contact form POSTs JSON — e.g. a [Formspree](https://formspree.io) / Getform / Basin endpoint or your own API. **If unset, the form opens the visitor's email app with the message pre-filled** (it never pretends to have sent anything). |

Other things to replace before launch: phone number and social links in `src/data/site.js`, the real project screenshots (see _Portfolio screens_), and the legal copy in `src/pages/Legal.jsx` (generic starting point — have it reviewed).

## Where things live

```
src/
  data/site.js          all site copy: services, case studies, articles, FAQs, pricing, socials
  data/templates.js     template catalogue + colour palettes
  styles/               layered CSS — see below
  pages/                one file per route (lazy-loaded)
  components/           shared UI (nav, cards, FAQ, theme toggle, product screens…)
  templates/            the six sellable website templates + their stylesheet
  routes.jsx            route table      pageLoaders.js   dynamic imports (also used for idle prefetch)
  seo.js                per-route title / description / canonical / Open Graph / JSON-LD
  theme.js              light/dark store (no flash, remembered, circular-reveal transition)
scripts/generate-seo.mjs  builds public/sitemap.xml + robots.txt from the data files
public/fonts/           self-hosted Inter, Instrument Serif, Playfair Display (OFL)
```

## CSS architecture

`src/styles` is split into **cascade layers**, declared once in `layers.css`:

`tokens → base → layout → components → pages → utilities → motion`

- **Tokens first.** No component hard-codes a colour. Tints use channels (`rgb(var(--fg-rgb) / .08)`), so the whole site — including every hairline and glow — follows the theme.
- **Themes.** Dark is the brand default; light is `<html data-theme="light">`. The choice is stored in `localStorage` and applied by an inline script before first paint.
- **Template previews and product screens are deliberately _unlayered_** (`templates/templates.css`, `components/screens/screens.css`): they are self-contained design systems that site styles must never override.
- **Progressive enhancement.** View Transitions, scroll-driven animations, `:has()` focus effects, `field-sizing`, subgrid etc. are all gated (`@supports`, `prefers-reduced-motion`, `hover: hover`). Browsers without them get the static design.
- Print, `prefers-contrast` and `forced-colors` are handled in `utilities.css` / `tokens.css`.

## Templates

Each template is a React component in `src/templates/` driven by `--t-*` CSS variables (palette × light/dark), and it lays itself out from **its own width** with container queries — which is why the desktop / tablet / mobile preview is truthful.

To add one: create `src/templates/MyTemplate.jsx`, add its styles to `templates.css`, register it in `templates/index.jsx` and add an entry to `data/templates.js`. The gallery, preview page, contact prefill and sitemap pick it up automatically.

## Portfolio screens

Case-study images are real UI rendered at 1280×800 and scaled (`components/screens/Screens.jsx`), so they stay crisp and themeable. To use a real screenshot instead, replace the matching entry in `Screens.jsx` with an `<img>`.

## Deployment

It is a single-page app with client-side routing, so the host must serve `index.html` for unknown paths.

- **Netlify / Cloudflare Pages:** `public/_redirects` already does this.
- **Vercel:** add `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }` to `vercel.json`.
- **nginx:** `try_files $uri /index.html;`

Serve `/fonts/*` and `/assets/*` with long-lived cache headers (file names are content-hashed).

## Quality checks used while building

Accessibility is audited with axe-core on every route in both themes; layout shift is 0 on the home and pricing pages; the production build splits each page into its own chunk (home ≈ 95 KB gzipped JS).
