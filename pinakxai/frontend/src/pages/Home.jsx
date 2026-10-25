import { Link } from '../components/Link.jsx'
import { ArrowRight, ArrowUpRight, Check, Quote } from 'lucide-react'
import HeroScene from '../components/HeroScene.jsx'
import Icon from '../components/Icon.jsx'
import { CaseCard, ServiceRow, TeaserCard } from '../components/Cards.jsx'
import { trackPointer } from '../hooks.js'
import { CtaBand, Eyebrow, Faq, Reveal, SectionHead, Stat } from '../components/ui.jsx'
import { clients, homeFaqs, process, projects, proofPoints, services, stats, testimonial } from '../data/site.js'
import { templates } from '../data/templates.js'

const featured = ['hrms', 'helpglow', 'invoice'].map((id) => projects.find((p) => p.id === id))
const teaser = ['nimbus', 'saffron', 'bazaar'].map((id) => templates.find((t) => t.id === id))

export default function Home() {
  return (
    <>
      <section className="hero" onPointerMove={trackPointer}>
        <HeroScene />
        <div className="container hero__inner">
          <div className="hero__copy enter">
            <span className="hero__pill">
              <i aria-hidden="true" /> Accepting new projects
            </span>
            <h1>
              Digital products for a brighter <em>tomorrow</em>.
            </h1>
            <p className="lead">
              We design and build websites, mobile apps and AI solutions — and run the marketing that helps them grow.
              One accountable team, from first idea to launch and beyond.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--primary btn--lg">
                Start your project <ArrowRight size={17} />
              </Link>
              <Link to="/work" className="btn btn--secondary btn--lg">
                View our work
              </Link>
            </div>
            <ul className="hero__proof">
              {proofPoints.map((p) => (
                <li key={p}>
                  <Check size={15} /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="clients">
          <div className="container clients__in">
            <small>Trusted by growing businesses</small>
            <ul>
              {clients.map((c) => (
                <li key={c.name}>
                  <Icon name={c.icon} size={18} /> {c.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container svc-layout">
          <Reveal className="svc-layout__intro">
            <Eyebrow>What we do</Eyebrow>
            <h2>
              End-to-end digital <em>solutions</em>
            </h2>
            <p className="lead">
              Everything you need to establish, grow and scale your business online — designed, built and supported by
              one team.
            </p>
            <Link to="/services" className="link-arrow">
              Explore all services <ArrowUpRight size={16} />
            </Link>
          </Reveal>
          <Reveal delay={120} className="svc-list">
            {services.map((s, i) => (
              <ServiceRow key={s.slug} service={s} index={i} />
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead
            eyebrow="Featured work"
            title={
              <>
                Real projects. <em>Real results.</em>
              </>
            }
            action={
              <Link to="/work" className="btn btn--secondary">
                View all projects <ArrowRight size={16} />
              </Link>
            }
          />
          <div className="work-grid">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i ? (i - 1) * 100 : 0} className={i === 0 ? 'span-all' : ''}>
                <CaseCard project={p} feature={i === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            align="split"
            eyebrow="How we work"
            title={
              <>
                A clear process, <em>no surprises</em>
              </>
            }
            sub="Every engagement follows the same four steps, so you always know what is happening, what comes next and what it costs."
          />
          <Reveal className="steps">
            {process.map((s, i) => (
              <div key={s.title} className="step" style={{ '--d': `${i * 150}ms` }}>
                <span className="step__when">{s.when}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal className="offer">
            <div className="offer__main">
              <Eyebrow>Startup launch package</Eyebrow>
              <h2>
                Launch your startup in <em>7 days</em>
              </h2>
              <p className="lead">
                Get your website, app setup and marketing support in place to start your business online — fast, and
                without cutting corners.
              </p>
              <Link to="/contact" className="btn btn--primary">
                Get started <ArrowRight size={16} />
              </Link>
            </div>
            <div className="offer__list">
              <h3>What’s included</h3>
              <ul className="ticks">
                <li>Professional, mobile-ready website</li>
                <li>Domain, hosting and business email setup</li>
                <li>App setup for bookings, orders or enquiries</li>
                <li>Google Business Profile and analytics</li>
                <li>Launch marketing support</li>
              </ul>
            </div>
          </Reveal>
          <div className="stats">
            {stats.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Website templates"
            title={
              <>
                Start from a template. <em>Make it yours.</em>
              </>
            }
            sub="Preview professionally designed websites live, choose your colours, and we will customise and launch yours."
            action={
              <Link to="/templates" className="btn btn--secondary">
                Browse templates <ArrowRight size={16} />
              </Link>
            }
          />
          <div className="grid grid--3">
            {teaser.map((t, i) => (
              <Reveal key={t.id} delay={i * 90}>
                <TeaserCard t={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal as="figure" className="quote-block">
            <Quote size={34} className="quote-block__mark" aria-hidden="true" />
            <blockquote>“{testimonial.quote}”</blockquote>
            <figcaption>
              <span aria-hidden="true">{testimonial.initials}</span>
              <div>
                <strong>{testimonial.name}</strong>
                <small>{testimonial.role}</small>
              </div>
            </figcaption>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container faq-layout">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2>
              Questions, <em>answered</em>
            </h2>
            <p className="lead">Can’t find what you are looking for? We are happy to talk it through.</p>
            <Link to="/contact" className="link-arrow">
              Ask us anything <ArrowUpRight size={16} />
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <Faq items={homeFaqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
