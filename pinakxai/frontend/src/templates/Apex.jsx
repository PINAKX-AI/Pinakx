import { ArrowRight, BarChart3, Check, Compass, LineChart, Quote, ShieldCheck, Target, Users } from 'lucide-react'
import { Head, TplFooter, TplNav } from './parts.jsx'

const services = [
  {
    icon: Compass,
    title: 'Business Strategy',
    text: 'Market entry, positioning and multi-year growth roadmaps built on real data.',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    text: 'Dashboards and KPIs that show exactly where revenue is won or lost.',
  },
  {
    icon: Users,
    title: 'Organisation Design',
    text: 'Right-sizing teams, roles and processes to scale without the chaos.',
  },
  {
    icon: ShieldCheck,
    title: 'Risk & Compliance',
    text: 'Practical frameworks that keep you audit-ready and operations resilient.',
  },
  {
    icon: LineChart,
    title: 'Financial Advisory',
    text: 'Budgeting, forecasting and fundraising support from seasoned CFOs.',
  },
  {
    icon: Target,
    title: 'Digital Transformation',
    text: 'Modernise legacy systems and workflows with measurable outcomes.',
  },
]

const steps = ['Discover', 'Diagnose', 'Design', 'Deliver']

const quotes = [
  {
    q: 'Apex gave us a clear plan and then stayed to make sure it happened. Revenue is up 38% in a year.',
    n: 'Anita Rao',
    r: 'COO, Northline Logistics',
  },
  {
    q: 'The most commercially minded advisors we have worked with. No jargon, just results.',
    n: 'David Chen',
    r: 'Founder, Brightpath',
  },
  {
    q: 'Their analytics work changed how our leadership team makes decisions every week.',
    n: 'Maria Costa',
    r: 'CEO, Veridian Health',
  },
]

export default function Apex() {
  return (
    <div className="ap" id="top">
      <div className="ap-top">
        <div className="t-wrap">
          <span>Mon – Fri · 9:00 – 18:00</span>
          <span>+1 (555) 014-2290 · hello@apexadvisory.com</span>
        </div>
      </div>
      <TplNav brand="Apex Advisory" links={['Home', 'About', 'Services', 'Insights', 'Contact']} cta="Book a Call" />

      <section className="ap-hero">
        <div className="ap-hero__bg" aria-hidden="true" />
        <div className="t-wrap ap-hero__in">
          <div>
            <span className="t-eyebrow">Management consulting</span>
            <h1 className="t-h1">
              Strategy that moves your business <em>forward</em>
            </h1>
            <p className="t-lead">
              We help ambitious companies make sharper decisions, build resilient operations and grow with confidence.
            </p>
            <div className="t-actions">
              <a href="#top" className="t-btn t-btn--p">
                Book a free consultation <ArrowRight size={16} />
              </a>
              <a href="#top" className="t-btn t-btn--o">
                Our services
              </a>
            </div>
            <ul className="ap-trust">
              <li>
                <Check size={15} /> 15+ years of experience
              </li>
              <li>
                <Check size={15} /> 200+ clients served
              </li>
            </ul>
          </div>
          <div className="ap-visual">
            <div className="t-art t-art--a ap-visual__main" />
            <div className="ap-float ap-float--1">
              <small>Average client growth</small>
              <strong>+42%</strong>
              <svg viewBox="0 0 100 28" preserveAspectRatio="none">
                <path
                  d="M0 24 L18 18 L36 21 L54 10 L72 13 L100 2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="ap-float ap-float--2">
              <span className="t-ico">
                <ShieldCheck size={18} />
              </span>
              <div>
                <strong>ISO 27001</strong>
                <small>Certified process</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ap-logos">
        <div className="t-wrap">
          {['Northline', 'Brightpath', 'Veridian', 'Kestrel', 'Lumen&Co'].map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      </section>

      <section className="t-sec">
        <div className="t-wrap">
          <Head
            eyebrow="What we do"
            title="Advisory built around your goals"
            sub="Six practice areas, one integrated team."
          />
          <div className="t-cols t-c3">
            {services.map((s) => (
              <article key={s.title} className="t-card">
                <span className="t-ico">
                  <s.icon size={22} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <a href="#top" className="t-link">
                  Learn more <ArrowRight size={14} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="t-sec t-sec--alt">
        <div className="t-wrap ap-about">
          <div className="t-art t-art--b ap-about__art">
            <div className="ap-badge">
              <strong>15+</strong>
              <small>
                years of
                <br />
                experience
              </small>
            </div>
          </div>
          <div>
            <Head eyebrow="Why Apex" title="Senior experts. Measurable outcomes." />
            <ul className="t-checks">
              <li>Partners stay involved from day one to delivery</li>
              <li>Fixed-scope engagements with transparent pricing</li>
              <li>Playbooks refined across 200+ engagements</li>
              <li>Knowledge transfer so your team owns the result</li>
            </ul>
            <div className="ap-nums">
              <div>
                <strong>200+</strong>
                <small>Clients</small>
              </div>
              <div>
                <strong>38%</strong>
                <small>Avg. revenue lift</small>
              </div>
              <div>
                <strong>96%</strong>
                <small>Retention</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="t-sec">
        <div className="t-wrap">
          <Head eyebrow="Our process" title="From insight to impact" center />
          <ol className="ap-steps">
            {steps.map((s, i) => (
              <li key={s}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <h3>{s}</h3>
                <p>A focused phase with clear deliverables and sign-off.</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="t-sec t-sec--alt">
        <div className="t-wrap">
          <Head eyebrow="Testimonials" title="Trusted by leadership teams" center />
          <div className="t-cols t-c3 ap-quotes">
            {quotes.map((q) => (
              <figure key={q.n} className="t-card ap-quote">
                <Quote size={22} />
                <blockquote>{q.q}</blockquote>
                <figcaption>
                  <strong>{q.n}</strong>
                  <small>{q.r}</small>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="t-sec">
        <div className="t-wrap">
          <div className="t-cta">
            <div>
              <h2 className="t-h2">Ready to make your next move?</h2>
              <p>Book a no-obligation call with one of our partners.</p>
            </div>
            <a href="#top" className="t-btn t-btn--inv">
              Book a Call <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <TplFooter
        brand="Apex Advisory"
        blurb="Strategy, analytics and transformation for growing companies."
        cols={[
          { title: 'Company', items: ['About', 'Careers', 'Insights', 'Contact'] },
          { title: 'Services', items: ['Strategy', 'Analytics', 'Advisory', 'Transformation'] },
          { title: 'Contact', items: ['hello@apexadvisory.com', '+1 (555) 014-2290', 'New York · London'] },
        ]}
        note="© 2026 Apex Advisory"
      />
    </div>
  )
}
