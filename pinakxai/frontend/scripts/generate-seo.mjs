// Generates public/sitemap.xml and public/robots.txt from the site's own data, so they never go stale.
// Runs automatically before `npm run build` (see the "prebuild" script). Set VITE_SITE_URL to your domain.
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { posts, projects } from '../src/data/site.js'
import { templates } from '../src/data/templates.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const SITE = (process.env.VITE_SITE_URL || 'https://pinakxai.com').replace(/\/$/, '')
const today = new Date().toISOString().slice(0, 10)

const paths = [
  ['/', 1.0],
  ['/services', 0.9],
  ['/work', 0.9],
  ['/templates', 0.9],
  ['/pricing', 0.8],
  ['/about', 0.6],
  ['/blog', 0.7],
  ['/contact', 0.8],
  ...projects.map((p) => [`/work/${p.id}`, 0.6]),
  ...templates.map((t) => [`/templates/${t.id}`, 0.5]),
  ...posts.map((p) => [`/blog/${p.slug}`, 0.6]),
  ['/privacy', 0.2],
  ['/terms', 0.2],
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    ([p, prio]) =>
      `  <url><loc>${SITE}${p === '/' ? '' : p}</loc><lastmod>${today}</lastmod><priority>${prio.toFixed(1)}</priority></url>`,
  )
  .join('\n')}
</urlset>
`

writeFileSync(join(root, 'public', 'sitemap.xml'), xml)
writeFileSync(join(root, 'public', 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`)
console.log(`seo: wrote sitemap.xml (${paths.length} urls) and robots.txt for ${SITE}`)
