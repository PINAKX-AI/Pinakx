import { useId } from 'react'
import { Link } from './Link.jsx'

export function LogoMark({ size = 28 }) {
  const id = `lm-${useId().replace(/:/g, '')}`
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="32" y2="32">
          <stop style={{ stopColor: 'var(--logo-a)' }} />
          <stop offset="1" style={{ stopColor: 'var(--logo-b)' }} />
        </linearGradient>
      </defs>
      <path d="M16 2 28 9v14l-12 7L4 23V9l12-7Z" stroke={`url(#${id})`} strokeWidth="1.6" strokeLinejoin="round" />
      <path
        d="M11 22V11h6a3.5 3.5 0 0 1 0 7h-6"
        stroke={`url(#${id})`}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="22.5" cy="21.5" r="1.4" fill={`url(#${id})`} />
    </svg>
  )
}

export default function Logo({ stacked = false }) {
  return (
    <Link to="/" className={`logo ${stacked ? 'logo--stacked' : ''}`} aria-label="PinakXAI home">
      <LogoMark size={stacked ? 34 : 28} />
      <span className="logo__text">
        <span className="logo__name">
          Pinak<b>XAI</b>
        </span>
        {stacked && <small>Build · Grow · Scale</small>}
      </span>
    </Link>
  )
}
