import { Navigate, useParams } from 'react-router-dom'
import { Link } from '../components/Link.jsx'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import ProjectShot from '../components/screens/Screens.jsx'
import { CtaBand, Eyebrow, Reveal } from '../components/ui.jsx'
import { projects } from '../data/site.js'

export default function CaseStudy() {
  const { id } = useParams()
  const index = projects.findIndex((p) => p.id === id)
  if (index < 0) return <Navigate to="/work" replace />
  const p = projects[index]
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__glow" aria-hidden="true" />
        <div className="container">
          <Reveal>
            <Link to="/work" className="back-link">
              <ArrowLeft size={16} /> All work
            </Link>
            <Eyebrow>{p.kind}</Eyebrow>
            <h1>{p.title}</h1>
            <p className="lead">{p.summary}</p>
            <div className="cs-meta">
              <div>
                <small>Industry</small>
                <span>{p.industry}</span>
              </div>
              <div>
                <small>Services</small>
                <span>{p.services.join(', ')}</span>
              </div>
              <div>
                <small>Platform</small>
                <span>{p.platform}</span>
              </div>
              <div>
                <small>Year</small>
                <span>{p.year}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className="cs-shot" style={{ '--tint': p.tint }}>
            <ProjectShot id={p.id} />
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className="cs-block">
            <h2>The challenge</h2>
            <p>{p.challenge}</p>
          </Reveal>
          <Reveal className="cs-block">
            <h2>Our approach</h2>
            <p>{p.solution}</p>
          </Reveal>
          <Reveal className="cs-block">
            <h2>What we delivered</h2>
            <ul className="ticks">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Reveal>
          {p.stack && (
            <Reveal className="cs-block">
              <h2>Technology</h2>
              <div className="tags" style={{ alignSelf: 'center' }}>
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </Reveal>
          )}
          <Link to={`/work/${next.id}`} className="cs-next">
            <div>
              <small>Next project</small>
              <strong>{next.title}</strong>
            </div>
            <span className="round-btn" aria-hidden="true">
              <ArrowUpRight size={18} />
            </span>
          </Link>
        </div>
      </section>

      <CtaBand title="Have a similar project in mind?" />
    </>
  )
}
