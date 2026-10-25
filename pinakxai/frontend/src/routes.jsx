import { createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import { NotFound, RouteFallback } from './components/Fallbacks.jsx'
import { loaders } from './pageLoaders.js'

/**
 * Route table. Home ships in the main bundle (it is the landing page and LCP). Every other page is
 * its own chunk, loaded by the router before the transition starts — so the old page stays on
 * screen until the new one is ready, and View Transitions always have real content to animate to.
 */
const route = (key, pick = (m) => m.default) => ({
  lazy: async () => ({ Component: pick(await loaders[key]()) }),
})

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    HydrateFallback: RouteFallback,
    children: [
      { index: true, Component: Home },
      { path: 'services', ...route('services') },
      { path: 'work', ...route('work') },
      { path: 'work/:id', ...route('caseStudy') },
      { path: 'templates', ...route('templates') },
      { path: 'templates/:id', ...route('preview') },
      { path: 'pricing', ...route('pricing') },
      { path: 'about', ...route('about') },
      { path: 'blog', ...route('blog') },
      { path: 'blog/:slug', ...route('article') },
      { path: 'contact', ...route('contact') },
      { path: 'privacy', ...route('legal', (m) => m.Privacy) },
      { path: 'terms', ...route('legal', (m) => m.Terms) },
      { path: '*', Component: NotFound },
    ],
  },
])
