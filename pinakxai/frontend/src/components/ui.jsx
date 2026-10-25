import { useId, useState } from 'react'
import { Link } from './Link.jsx'
import { ArrowRight } from 'lucide-react'
import { useInView, useCountUp } from '../hooks.js'

export function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag ref={ref} className={`reveal ${inView ? 'is-in' : ''} ${className}`} style={{ '--d': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}

export function Eyebrow({ children }) {
  return <span className="eyebrow">{children}</span>
}

/** align: 'left' (default, with optional action on the right) | 'center' | 'split' (title left, sub right) */
export function SectionHead({ eyebrow, title, sub, align = 'left', action }) {
  return (
    <Reveal className={`section-head section-head--${align}`}>
      <div>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2>{title}</h2>
        {sub && align !== 'split' && <p className="lead">{sub}</p>}
      </div>
      {align === 'split' && sub && <p className="lead">{sub}</p>}
      {action}
    </Reveal>
  )
}

export function PageHero({ eyebrow, title, sub, children, row = false }) {
  return (
    <section className="page-hero">
      <div className="page-hero__glow" aria-hidden="true" />
      <div className="container">
        <div className="enter">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          {row ? (
            <div className="page-hero__row">
              <h1>{title}</h1>
              {sub && <p className="lead">{sub}</p>}
            </div>
          ) : (
            <>
              <h1>{title}</h1>
              {sub && <p className="lead">{sub}</p>}
            </>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}

export function CtaBand({
  title = 'Have a project in mind?',
  text = 'Tell us what you are building. We will reply within one business day with next steps and an honest estimate.',
  to = '/contact',
  label = 'Start a project',
  compact,
}) {
  return (
    <section className="section section--tight">
      <div className="container">
        <Reveal className={`cta ${compact ? 'cta--compact' : ''}`}>
          <div>
            <h2>{title}</h2>
            {text && <p className="lead">{text}</p>}
          </div>
          <div className="cta__actions">
            <Link to={to} className="btn btn--primary btn--lg">
              {label} <ArrowRight size={17} />
            </Link>
            {!compact && (
              <Link to="/work" className="btn btn--secondary btn--lg">
                See our work
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Stat({ value, suffix, label }) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const n = useCountUp(value, inView)
  return (
    <div className="stat" ref={ref}>
      <strong>
        {n}
        <span>{suffix}</span>
      </strong>
      <small>{label}</small>
    </div>
  )
}

export function Faq({ items }) {
  const uid = useId()
  const [open, setOpen] = useState(0)
  return (
    <div className="faq">
      {items.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={f.q} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
            <button
              id={`${uid}-q-${i}`}
              className="faq__q"
              aria-expanded={isOpen}
              aria-controls={`${uid}-a-${i}`}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              {f.q}
              <span className="faq__icon" aria-hidden="true" />
            </button>
            <div
              className="faq__a"
              id={`${uid}-a-${i}`}
              role="region"
              aria-labelledby={`${uid}-q-${i}`}
              inert={!isOpen}
            >
              <div>
                <p>{f.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
