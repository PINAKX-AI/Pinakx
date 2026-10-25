import { lazy, Suspense } from 'react'
import { useInView } from '../hooks.js'

/**
 * Template thumbnails render the *real* templates — a lot of code and CSS — so they are loaded
 * on demand: only once the thumbnail is close to the viewport (and the module is prefetched
 * when the browser is idle, see App.jsx). Until then a quiet skeleton holds the space.
 */
const Thumb = lazy(() => import('../templates/index.jsx').then((m) => ({ default: m.TemplateThumb })))
const NEAR = { rootMargin: '700px 0px', threshold: 0 }

export default function TemplateThumb({ ratio = 0.62, ...props }) {
  const [ref, near] = useInView(NEAR)
  const skeleton = <div className="tpl-skeleton" style={{ aspectRatio: `1 / ${ratio}` }} aria-hidden="true" />
  return (
    <div ref={ref}>
      {near ? (
        <Suspense fallback={skeleton}>
          <Thumb ratio={ratio} {...props} />
        </Suspense>
      ) : (
        skeleton
      )}
    </div>
  )
}
