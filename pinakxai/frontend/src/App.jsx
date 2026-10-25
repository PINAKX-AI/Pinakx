import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Outlet, useLocation, useNavigation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { applyMeta } from './seo.js'
import { loaders, preloadTemplates } from './pageLoaders.js'

/** Fetch every page chunk (and the template module) once the browser is idle, so clicks feel instant. */
function prefetchWhenIdle() {
  const run = () => {
    Object.values(loaders).forEach((load) => load().catch(() => {}))
    preloadTemplates().catch(() => {})
  }
  const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 1800))
  const start = () => idle(run, { timeout: 4000 })
  if (document.readyState === 'complete') start()
  else window.addEventListener('load', start, { once: true })
}

/**
 * Per-navigation housekeeping:
 *  - document title / description / canonical / Open Graph
 *  - reset scroll before the new view is captured (so view transitions look right)
 *  - move focus to <main> and announce the new page to screen readers (SPA best practice)
 */
function RouteEffects() {
  const { pathname, hash } = useLocation()
  const [announcement, setAnnouncement] = useState('')
  const first = useRef(true)

  // Layout effect: runs in the same commit as the new page, i.e. before a view transition
  // captures it — so scroll position and <title> are already correct in the snapshot.
  useLayoutEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: 'instant' })
    const meta = applyMeta(pathname)
    if (first.current) {
      first.current = false
      return
    }
    setAnnouncement(`Navigated to ${meta.title}`)
    if (!hash) document.getElementById('main')?.focus({ preventScroll: true })
  }, [pathname, hash])

  useEffect(() => {
    if (!hash) return undefined
    // wait a beat so the target section has rendered
    const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 80)
    return () => clearTimeout(t)
  }, [pathname, hash])

  useEffect(() => {
    prefetchWhenIdle()
  }, [])

  return (
    <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
      {announcement}
    </div>
  )
}

/** Thin progress line while a lazy page is being fetched (only shows if it takes a moment). */
function NavigationProgress() {
  const { state } = useNavigation()
  return <div className={`nav-progress ${state === 'loading' ? 'is-active' : ''}`} aria-hidden="true" />
}

export default function App() {
  return (
    <>
      <RouteEffects />
      <NavigationProgress />
      <a href="#main" className="skip">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
