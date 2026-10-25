import { Link } from '../components/Link.jsx'
import { ArrowRight } from 'lucide-react'
import { CtaBand, Eyebrow, Faq, PageHero, Reveal, SectionHead } from '../components/ui.jsx'
import Icon from '../components/Icon.jsx'
import { addons, included, pricing, pricingFaqs } from '../data/site.js'

export default function Pricing() {
  return (
    <>
      <PageHero
        row
        eyebrow="Pricing"
        title={
          <>
            Simple, transparent <em>pricing</em>
          </>
        }
        sub="Choose a plan that suits your business. Every project is confirmed with a fixed written quote — custom solutions are available for larger projects."
      />

      <section className="section">
        <div className="container">
          <h2 className="sr-only">Plans</h2>
          <div className="plans">
            {pricing.map((p, i) => (
              <Reveal key={p.name} delay={i * 90} className={`plan ${p.popular ? 'plan--popular' : ''}`}>
                <div className="plan__inner">
                  <div className="plan__head">
                    <h3>{p.name}</h3>
                    {p.popular && <span className="plan__badge">Most popular</span>}
                  </div>
                  <p className="plan__blurb">{p.blurb}</p>
                  <div className="plan__price">
                    <strong>{p.price}</strong>
                    <small>{p.note}</small>
                  </div>
                  <ul className="ticks">
                    {p.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`btn ${p.popular ? 'btn--primary' : 'btn--secondary'}`}>
                    {p.cta} <ArrowRight size={16} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="muted" style={{ marginTop: 28, fontSize: '0.88rem', textAlign: 'center' }}>
            Prices are exclusive of GST. Hosting, domains and third-party services are quoted separately.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead
            eyebrow="Included with every plan"
            title={
              <>
                The way we work, <em>whatever the budget</em>
              </>
            }
          />
          <Reveal className="included">
            {included.map((x) => (
              <div key={x.title}>
                <Icon name={x.icon} size={22} />
                <h3>{x.title}</h3>
                <p>{x.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            align="split"
            eyebrow="Add-on services"
            title={
              <>
                Extend any plan, <em>any time</em>
              </>
            }
            sub="Add pages, an app, branding or ongoing marketing whenever you are ready."
          />
          <Reveal className="addons">
            {addons.map((a) => (
              <div key={a.name} className="addon">
                <span className="icon-tile icon-tile--sm">
                  <Icon name={a.icon} size={17} />
                </span>
                <div>
                  <strong>{a.name}</strong>
                  <small>{a.price}</small>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container faq-layout">
          <Reveal>
            <Eyebrow>Pricing FAQ</Eyebrow>
            <h2>
              Good <em>questions</em>
            </h2>
            <p className="lead">Anything else you would like to know about cost or payment? Just ask.</p>
          </Reveal>
          <Reveal delay={100}>
            <Faq items={pricingFaqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Need a custom plan?"
        text="We will put together a tailored proposal for exactly what your business needs."
        label="Let’s discuss"
      />
    </>
  )
}
