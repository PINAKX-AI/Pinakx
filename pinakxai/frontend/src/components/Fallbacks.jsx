import { ArrowRight } from 'lucide-react'
import { Link } from './Link.jsx'

export function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: '70vh' }}>
      <div className="page-hero__glow" aria-hidden="true" />
      <div className="container">
        <span className="eyebrow">Error 404</span>
        <h1>
          This page has <em>moved on</em>.
        </h1>
        <p className="lead">The page you are looking for does not exist or has been moved.</p>
        <div className="hero__actions">
          <Link to="/" className="btn btn--primary">
            Back to home <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="btn btn--secondary">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}

export function RouteFallback() {
  return (
    <div className="route-loading" role="status" aria-label="Loading page">
      <span />
    </div>
  )
}
