import { posts, projects } from './data/site.js'

/** Canonical origin for absolute URLs (canonical link, Open Graph, sitemap). Override with VITE_SITE_URL. */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://pinakxai.com').replace(/\/$/, '')
export const SITE_NAME = 'PinakXAI'

const pages = {
  '/': {
    title: 'PinakXAI — Digital products for a brighter tomorrow',
    description:
      'PinakXAI is a digital product studio in India. We design and build websites, mobile apps and AI solutions — and run the marketing that helps them grow.',
  },
  '/services': {
    title: 'Services',
    description:
      'Website development, mobile apps, AI-powered solutions, digital marketing and branding — designed, built and supported by one accountable team.',
  },
  '/work': {
    title: 'Our work',
    description:
      'Selected websites, apps and AI tools PinakXAI has designed and built — an HRMS platform, an invoice-extraction tool and sites for growing businesses.',
  },
  '/templates': {
    title: 'Website templates',
    description:
      'Preview professionally designed website templates live, choose your colours and light or dark mode, and PinakXAI will customise and launch yours.',
  },
  '/pricing': {
    title: 'Pricing',
    description:
      'Transparent pricing for websites, apps and marketing. Plans from ₹19,999 with fixed written quotes, weekly demos and full ownership of your code.',
  },
  '/about': {
    title: 'About',
    description:
      'PinakXAI is a compact team of developers, designers and strategists helping businesses grow with well-made, easy-to-use technology.',
  },
  '/blog': {
    title: 'Insights',
    description:
      'Practical writing on websites, mobile apps, AI automation, SEO and branding for founders and teams making technology decisions.',
  },
  '/contact': {
    title: 'Contact',
    description:
      'Tell PinakXAI about your project. We reply to every enquiry within one business day with next steps and an honest estimate.',
  },
  '/privacy': {
    title: 'Privacy policy',
    description: 'How PinakXAI collects, uses and protects information you share with us.',
  },
  '/terms': {
    title: 'Terms of service',
    description: 'The terms that apply to using the PinakXAI website and its template previews.',
  },
}

/** Everything the document head needs for a given pathname. */
export function metaFor(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/'
  let entry = pages[clean]
  let type = 'website'
  let jsonLd = null
  const [, section, id] = clean.split('/')

  if (!entry && section === 'work') {
    const p = projects.find((x) => x.id === id)
    if (p) entry = { title: `${p.title} — case study`, description: p.summary }
  }
  if (!entry && section === 'blog') {
    const post = posts.find((x) => x.slug === id)
    if (post) {
      entry = { title: post.title, description: post.excerpt }
      type = 'article'
      jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        author: { '@type': 'Organization', name: SITE_NAME },
        publisher: { '@type': 'Organization', name: SITE_NAME },
        mainEntityOfPage: `${SITE_URL}${clean}`,
      }
    }
  }
  if (!entry && section === 'templates')
    entry = { title: 'Template preview', description: pages['/templates'].description }
  const known = !!entry
  if (!entry) entry = { title: 'Page not found', description: pages['/'].description }

  const title = clean === '/' || entry.title.includes(SITE_NAME) ? entry.title : `${entry.title} — ${SITE_NAME}`
  return { title, description: entry.description, url: `${SITE_URL}${clean === '/' ? '' : clean}`, type, jsonLd, known }
}

function setMeta(selector, attr, value, create) {
  let el = document.head.querySelector(selector)
  if (!el && create) {
    el = document.createElement(create.tag)
    Object.entries(create.attrs).forEach(([k, v]) => el.setAttribute(k, v))
    document.head.appendChild(el)
  }
  el?.setAttribute(attr, value)
}

/** Applies title, description, canonical, Open Graph / Twitter tags and JSON-LD for the route. */
export function applyMeta(pathname) {
  const m = metaFor(pathname)
  document.title = m.title
  setMeta('meta[name="description"]', 'content', m.description, { tag: 'meta', attrs: { name: 'description' } })
  setMeta('link[rel="canonical"]', 'href', m.url, { tag: 'link', attrs: { rel: 'canonical' } })
  const og = {
    'og:title': m.title,
    'og:description': m.description,
    'og:url': m.url,
    'og:type': m.type,
    'og:site_name': SITE_NAME,
    'og:image': `${SITE_URL}/og.png`,
  }
  for (const [k, v] of Object.entries(og)) {
    setMeta(`meta[property="${k}"]`, 'content', v, { tag: 'meta', attrs: { property: k } })
  }
  setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image', {
    tag: 'meta',
    attrs: { name: 'twitter:card' },
  })
  setMeta('meta[name="robots"]', 'content', m.known ? 'index,follow' : 'noindex', {
    tag: 'meta',
    attrs: { name: 'robots' },
  })

  let ld = document.getElementById('ld-page')
  if (m.jsonLd) {
    if (!ld) {
      ld = document.createElement('script')
      ld.id = 'ld-page'
      ld.type = 'application/ld+json'
      document.head.appendChild(ld)
    }
    ld.textContent = JSON.stringify(m.jsonLd)
  } else {
    ld?.remove()
  }
  return m
}
