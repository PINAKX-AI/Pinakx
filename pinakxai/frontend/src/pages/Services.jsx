import { Link } from '../components/Link.jsx'
import { ArrowRight } from 'lucide-react'
import { CtaBand, PageHero, Reveal, SectionHead } from '../components/ui.jsx'
import { engagement, process, services } from '../data/site.js'
import { spotlight } from '../hooks.js'

export default function Services() {
  return (
    <>
      <PageHero
        row
        eyebrow="Services"
        title={
          <>
            Complete digital solutions <em>under one roof</em>
          </>
        }
        sub="From idea to execution, we design, build and grow digital products — so you work with one accountable team instead of five vendors."
      >
        <div className="chips" aria-label="Jump to a service">
          {services.map((s) => (
            <a key={s.slug} href={`#${s.slug}`} className="chip">
              {s.title}
            </a>
          ))}
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          {services.map((s, i) => (
            <Reveal key={s.slug} as="article" id={s.slug} className="svc-detail">
              <div className="svc-detail__head">
                <span className="svc-row__n">{String(i + 1).padStart(2, '0')}</span>
                <h2>{s.title}</h2>
                <p>{s.summary}</p>
                <Link to="/contact" className="btn btn--secondary btn--sm">
                  Discuss this service <ArrowRight size={15} />
                </Link>
              </div>
              <div className="svc-detail__body">
                <p>{s.description}</p>
                <h3>What you get</h3>
                <ul className="ticks">
                  {s.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <h3>Tools & technology</h3>
                <div className="tags">
                  {s.stack.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="svc-meta">
                  <div>
                    <small>Typical timeline</small>
                    <strong>{s.timeline}</strong>
                  </div>
                  <div>
                    <small>Starting from</small>
                    <strong>{s.from}</strong>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead
            align="split"
            eyebrow="Our process"
            title={
              <>
                Four steps from idea <em>to launch</em>
              </>
            }
            sub="Scope and price are agreed in writing before work starts, and you see working progress every week."
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

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Ways to work together"
            title={
              <>
                Flexible engagement, <em>clear terms</em>
              </>
            }
          />
          <div className="models">
            {engagement.map((m, i) => (
              <Reveal key={m.title} delay={i * 90} className="card model spot" onPointerMove={spotlight}>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
                <small>
                  Best for: <b>{m.best}</b>
                </small>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
