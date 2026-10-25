import { Link } from './Link.jsx'
import Logo from './Logo.jsx'
import { Social } from './Icon.jsx'
import { brand, services, socials } from '../data/site.js'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo stacked />
          <p>A digital product studio designing and building websites, apps and AI tools for growing businesses.</p>
          <div className="footer__social">
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.href}
                aria-label={s.label}
                {...(s.href !== '#' && { target: '_blank', rel: 'noreferrer' })}
              >
                <Social name={s.id} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="footer__title">Company</h2>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/templates">Templates</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer__title">Services</h2>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services#${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer__title">Get in touch</h2>
          <ul>
            <li>
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
            </li>
            <li>
              <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a>
            </li>
            <li>{brand.hours}</li>
            <li>{brand.location}</li>
          </ul>
        </div>
      </div>

      <div className="footer__word" aria-hidden="true">
        <span>PinakXAI</span>
      </div>

      <div className="container footer__bar">
        <span>© {YEAR} PinakXAI. All rights reserved.</span>
        <span className="footer__legal">
          <Link to="/privacy">Privacy policy</Link>
          <Link to="/terms">Terms of service</Link>
        </span>
      </div>
    </footer>
  )
}
