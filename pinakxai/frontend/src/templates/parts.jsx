import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Mark({ name, small }) {
  return (
    <span className={`t-brand ${small ? 't-brand--sm' : ''}`}>
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
        <path d="M12 2 21 7v10l-9 5-9-5V7l9-5Z" fill="var(--t-p)" opacity=".16" />
        <path d="M12 2 21 7v10l-9 5-9-5V7l9-5Z" stroke="var(--t-p)" strokeWidth="1.8" strokeLinejoin="round" />
        <path
          d="M8.5 15.5 12 8l3.5 7.5"
          stroke="var(--t-a)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <b>{name}</b>
    </span>
  )
}

export function TplNav({ brand, links, cta, className = '', extra }) {
  const [open, setOpen] = useState(false)
  return (
    <header className={`t-nav ${className}`}>
      <div className="t-wrap t-nav__in">
        <a href="#top" className="t-nav__brand">
          <Mark name={brand} />
        </a>
        <nav className={`t-nav__links ${open ? 'is-open' : ''}`}>
          {links.map((l, i) => (
            <a key={l} href="#top" className={i === 0 ? 'on' : ''}>
              {l}
            </a>
          ))}
        </nav>
        <div className="t-nav__right">
          {extra}
          {cta && (
            <a href="#top" className="t-btn t-btn--p t-btn--sm">
              {cta}
            </a>
          )}
          <button className="t-nav__burger" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export function TplFooter({ brand, blurb, cols, note }) {
  return (
    <footer className="t-footer">
      <div className="t-wrap t-footer__grid">
        <div>
          <Mark name={brand} />
          <p>{blurb}</p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h3>{c.title}</h3>
            <ul>
              {c.items.map((i) => (
                <li key={i}>
                  <a href="#top">{i}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="t-wrap t-footer__bar">
        <span>{note}</span>
        <span>Privacy · Terms</span>
      </div>
    </footer>
  )
}

export function Head({ eyebrow, title, sub, center }) {
  return (
    <div className={`t-head ${center ? 't-head--c' : ''}`}>
      {eyebrow && <span className="t-eyebrow">{eyebrow}</span>}
      <h2 className="t-h2">{title}</h2>
      {sub && <p className="t-lead">{sub}</p>}
    </div>
  )
}
