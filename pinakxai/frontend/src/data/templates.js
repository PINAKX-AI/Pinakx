/**
 * Template catalogue + colour palettes.
 * A palette only supplies the accent colours; light/dark "mode" supplies the
 * neutrals, so any template × palette × mode combination stays balanced.
 */
export const palettes = [
  { id: 'ocean', name: 'Ocean Blue', p: '#2563eb', p2: '#38bdf8', ink: '#ffffff', tl: '#1d4ed8', td: '#7db3ff' },
  { id: 'emerald', name: 'Emerald', p: '#059669', p2: '#34d399', ink: '#ffffff', tl: '#047857', td: '#4ade9f' },
  { id: 'violet', name: 'Royal Violet', p: '#7c3aed', p2: '#c084fc', ink: '#ffffff', tl: '#6d28d9', td: '#b794ff' },
  { id: 'gold', name: 'Midnight Gold', p: '#e8960f', p2: '#ffd98a', ink: '#1a1204', tl: '#a8680a', td: '#f6bd4b' },
  { id: 'crimson', name: 'Crimson', p: '#dc2626', p2: '#fb7185', ink: '#ffffff', tl: '#b91c1c', td: '#ff8a8a' },
  { id: 'sunset', name: 'Sunset', p: '#ea580c', p2: '#fbbf24', ink: '#ffffff', tl: '#c2410c', td: '#ffa05c' },
]

export const modes = {
  light: {
    '--t-bg': '#ffffff',
    '--t-surface': '#f5f6f9',
    '--t-surface-2': '#e9ecf2',
    '--t-text': '#0f1218',
    '--t-muted': '#5a6173',
    '--t-line': 'rgba(15, 18, 24, 0.1)',
    '--t-shadow': '0 18px 40px -22px rgba(15, 18, 24, 0.35)',
  },
  dark: {
    '--t-bg': '#0a0c11',
    '--t-surface': '#12151c',
    '--t-surface-2': '#1b1f2a',
    '--t-text': '#f2f3f6',
    '--t-muted': '#9aa1b0',
    '--t-line': 'rgba(255, 255, 255, 0.1)',
    '--t-shadow': '0 24px 50px -24px rgba(0, 0, 0, 0.8)',
  },
}

export function themeVars(paletteId, mode) {
  const p = palettes.find((x) => x.id === paletteId) || palettes[0]
  return {
    ...(modes[mode] || modes.light),
    '--t-p': p.p,
    '--t-p2': p.p2,
    '--t-ink': p.ink,
    '--t-a': mode === 'dark' ? p.td : p.tl,
  }
}

export const templateCategories = ['All', 'Business', 'SaaS', 'Real Estate', 'Restaurant', 'Portfolio', 'E-commerce']

export const templates = [
  {
    id: 'apex',
    name: 'Apex',
    category: 'Business',
    tagline: 'Corporate & consulting',
    desc: 'A confident, trust-building site for consultancies, agencies and professional services.',
    mode: 'light',
    palette: 'ocean',
    features: ['Lead-capture hero', 'Services & process', 'Case-study stats', 'Testimonials'],
    pages: ['Home', 'About', 'Services', 'Contact'],
  },
  {
    id: 'nimbus',
    name: 'Nimbus',
    category: 'SaaS',
    tagline: 'Startup & software product',
    desc: 'Product-led landing page with a dashboard showcase, bento features, pricing and FAQ.',
    mode: 'dark',
    palette: 'violet',
    features: ['Product showcase', 'Bento feature grid', 'Pricing toggle', 'FAQ accordion'],
    pages: ['Home', 'Pricing', 'Docs', 'Contact'],
  },
  {
    id: 'foundry',
    name: 'Foundry',
    category: 'Real Estate',
    tagline: 'Construction & property',
    desc: 'Bold project showcase for builders, architects and real-estate developers with enquiry flow.',
    mode: 'light',
    palette: 'sunset',
    features: ['Enquiry search bar', 'Filterable projects', 'Build process', 'Site-visit booking'],
    pages: ['Home', 'Projects', 'About', 'Contact'],
  },
  {
    id: 'saffron',
    name: 'Saffron',
    category: 'Restaurant',
    tagline: 'Restaurant & café',
    desc: 'Warm, appetising layout with a tabbed menu, gallery mosaic and table reservation.',
    mode: 'dark',
    palette: 'gold',
    features: ['Tabbed menu', 'Table reservation', 'Gallery mosaic', 'Opening hours'],
    pages: ['Home', 'Menu', 'Reservations', 'Contact'],
  },
  {
    id: 'studio',
    name: 'Studio',
    category: 'Portfolio',
    tagline: 'Creative & freelancer',
    desc: 'Editorial portfolio with oversized type, hover-reveal case studies and a bold contact CTA.',
    mode: 'light',
    palette: 'crimson',
    features: ['Animated headline', 'Hover-reveal work list', 'Services grid', 'Big CTA'],
    pages: ['Home', 'Work', 'About', 'Contact'],
  },
  {
    id: 'bazaar',
    name: 'Bazaar',
    category: 'E-commerce',
    tagline: 'Online store',
    desc: 'Conversion-focused storefront with product grid, working cart, wishlist and promo banners.',
    mode: 'light',
    palette: 'emerald',
    features: ['Add-to-cart & wishlist', 'Category tiles', 'Promo banners', 'Newsletter'],
    pages: ['Home', 'Shop', 'Product', 'Cart'],
  },
]

export const getTemplate = (id) => templates.find((t) => t.id === id)
export const getPalette = (id) => palettes.find((p) => p.id === id) || palettes[0]
