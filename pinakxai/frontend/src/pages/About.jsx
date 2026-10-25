import { Link } from '../components/Link.jsx'
import { ArrowRight } from 'lucide-react'
import { CtaBand, Eyebrow, PageHero, Reveal, SectionHead, Stat } from '../components/ui.jsx'
import { commitments, principles, stats } from '../data/site.js'

export default function About() {
  return (
    <>
      <PageHero
        row
        eyebrow="About PinakXAI"
        title={
          <>
            A team that builds <em>with purpose</em>
          </>
        }
        sub="We are developers, designers and strategists who help businesses grow through technology that is well made, easy to use and built to last."
      />

      <section className="section">
        <div className="container story">
          <Reveal>
            <Eyebrow>Our story</Eyebrow>
            <h2>
              Technology. Creativity. <em>Real business growth.</em>
            </h2>
            <p className="lead">
              PinakXAI started with a simple observation: growing businesses need more than a website. They need a
              partner who understands design, engineering, AI and marketing — and how they fit together.
            </p>
            <p className="lead">
              Today we are a compact team based in India, working with startups, small businesses and established
              companies to plan, build and grow digital products — from a first website to AI tools that take repetitive
              work off their teams.
            </p>
            <div style={{ marginTop: 36 }}>
              <Link to="/work" className="btn btn--secondary">
                See our work <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120} as="figure" className="globe-card">
            <div className="globe-card__fallback" />
            <figcaption>
              <span>
                Based in <b>India</b>
              </span>
              <span>
                Working with clients <b>everywhere</b>
              </span>
            </figcaption>
          </Reveal>
        </div>
        <div className="container">
          <div className="stats">
            {stats.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead
            align="split"
            eyebrow="What we believe"
            title={
              <>
                Principles that shape <em>every project</em>
              </>
            }
            sub="They are the reason clients stay with us long after launch."
          />
          <Reveal className="principles">
            {principles.map((p, i) => (
              <div key={p.title} className="principle">
                <span>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container offer">
          <div className="offer__main">
            <Eyebrow>Working with us</Eyebrow>
            <h2>
              Four promises we make <em>to every client</em>
            </h2>
            <p className="lead">
              Whether it is a five-page website or a long-term product partnership, the way we work does not change.
            </p>
            <Link to="/contact" className="btn btn--primary">
              Start a conversation <ArrowRight size={16} />
            </Link>
          </div>
          <div className="offer__list">
            <h3>Our commitments</h3>
            <ul className="ticks">
              {commitments.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        title="Want to work with us?"
        text="We would love to hear about your idea and how we can help bring it to life."
        label="Get in touch"
      />
    </>
  )
}
