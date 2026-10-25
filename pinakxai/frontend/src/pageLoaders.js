/**
 * Dynamic imports for every lazy page. Shared by the router (which awaits them before a
 * navigation commits) and by the idle prefetcher in App.jsx.
 */
export const preloadTemplates = () => import('./templates/index.jsx')

export const loaders = {
  services: () => import('./pages/Services.jsx'),
  work: () => import('./pages/Work.jsx'),
  caseStudy: () => import('./pages/CaseStudy.jsx'),
  templates: () => import('./pages/Templates.jsx'),
  preview: () => import('./pages/TemplatePreview.jsx'),
  pricing: () => import('./pages/Pricing.jsx'),
  about: () => import('./pages/About.jsx'),
  blog: () => import('./pages/Blog.jsx'),
  article: () => import('./pages/Article.jsx'),
  contact: () => import('./pages/Contact.jsx'),
  legal: () => import('./pages/Legal.jsx'),
}
