import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link, NavLink } from './Link.jsx'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import { navLinks } from '../data/site.js'

export default function Navbar() {
  const { pathname } = useLocation()
  // the drawer is open *for a given path*, so navigating closes it with no effect needed
  const [openFor, setOpenFor] = useState(null)
  const open = openFor === pathname
  const [scrolled, setScrolled] = useState(() => typeof window !== 'undefined' && window.scrollY > 12)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Escape closes the drawer (scroll-lock itself is CSS: html:has(.nav.is-open))
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpenFor(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container nav__inner">
        <Logo />
        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav__actions">
          <ThemeToggle />
          <Link to="/contact" className="btn btn--primary btn--sm nav__cta">
            Start a project
          </Link>
          <button
            type="button"
            className="nav__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="nav-drawer"
            onClick={() => setOpenFor(open ? null : pathname)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className="nav__drawer" id="nav-drawer" inert={!open}>
        <nav aria-label="Mobile">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="btn btn--primary btn--lg">
          Start a project
        </Link>
      </div>
    </header>
  )
}
