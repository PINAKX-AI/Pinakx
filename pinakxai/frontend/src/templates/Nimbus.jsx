import { useState } from 'react'
import { ArrowRight, BellRing, Bot, ChevronDown, Gauge, Layers, Lock, Plug, Sparkles, Workflow } from 'lucide-react'
import { Head, TplFooter, TplNav } from './parts.jsx'

const faqs = [
  {
    q: 'How long does setup take?',
    a: 'Most teams are live in under 15 minutes. Connect your tools, invite teammates and import data in one guided flow.',
  },
  {
    q: 'Can I change plans later?',
    a: 'Yes. Upgrade, downgrade or cancel at any time — billing is prorated automatically.',
  },
  {
    q: 'Is my data secure?',
    a: 'We are SOC 2 Type II compliant, encrypt data at rest and in transit, and support SSO & SCIM on Business.',
  },
  {
    q: 'Do you offer a free trial?',
    a: '14 days of Pro, no credit card required. Free plan stays free forever for small teams.',
  },
]

const plans = [
  {
    name: 'Starter',
    price: 0,
    text: 'For individuals exploring Nimbus.',
    feats: ['3 projects', 'Basic analytics', 'Community support'],
  },
  {
    name: 'Pro',
    price: 29,
    text: 'For growing teams that need more.',
    feats: ['Unlimited projects', 'AI copilot', 'Advanced analytics', 'Priority support'],
    hot: true,
  },
  {
    name: 'Business',
    price: 79,
    text: 'Security and control at scale.',
    feats: ['SSO & SCIM', 'Audit logs', 'Custom roles', 'Dedicated manager'],
  },
]

export default function Nimbus() {
  const [yearly, setYearly] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="nb" id="top">
      <TplNav
        brand="Nimbus"
        links={['Product', 'Solutions', 'Pricing', 'Docs']}
        cta="Start free"
        extra={
          <a href="#top" className="t-link nb-signin">
            Sign in
          </a>
        }
      />

      <section className="nb-hero">
        <div className="nb-hero__glow" aria-hidden="true" />
        <div className="t-wrap">
          <a href="#top" className="nb-pill">
            <Sparkles size={14} /> New: Nimbus AI copilot is here <ArrowRight size={13} />
          </a>
          <h1 className="t-h1">
            The workspace where teams <span className="t-grad">ship faster</span>
          </h1>
          <p className="t-lead">
            Plan, build and measure everything in one place. Nimbus replaces the tool sprawl with a single, beautifully
            fast platform.
          </p>
          <div className="t-actions t-actions--c">
            <a href="#top" className="t-btn t-btn--p">
              Start for free <ArrowRight size={16} />
            </a>
            <a href="#top" className="t-btn t-btn--o">
              Book a demo
            </a>
          </div>
          <small className="nb-note">No credit card · 14-day Pro trial · Cancel anytime</small>

          <div className="nb-app">
            <div className="nb-app__bar">
              <i />
              <i />
              <i />
              <span>app.nimbus.io/overview</span>
            </div>
            <div className="nb-app__body">
              <aside>
                {['Overview', 'Projects', 'Roadmap', 'Reports', 'Team'].map((x, i) => (
                  <span key={x} className={i === 0 ? 'on' : ''}>
                    {x}
                  </span>
                ))}
              </aside>
              <div className="nb-app__main">
                <div className="nb-kpis">
                  {[
                    ['Active users', '12,480', '+12%'],
                    ['MRR', '$48.2k', '+8.4%'],
                    ['Tasks shipped', '1,932', '+21%'],
                  ].map(([a, b, c]) => (
                    <div key={a}>
                      <small>{a}</small>
                      <strong>{b}</strong>
                      <em>{c}</em>
                    </div>
                  ))}
                </div>
                <div className="nb-chart">
                  <svg viewBox="0 0 400 120" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="nbg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="var(--t-p)" stopOpacity=".45" />
                        <stop offset="1" stopColor="var(--t-p)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 96 C40 90 60 60 100 66 S170 100 210 58 280 30 320 40 380 10 400 14 V120 H0Z"
                      fill="url(#nbg)"
                    />
                    <path
                      d="M0 96 C40 90 60 60 100 66 S170 100 210 58 280 30 320 40 380 10 400 14"
                      fill="none"
                      stroke="var(--t-p2)"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="nb-logos">
        <div className="t-wrap">
          <small>Trusted by teams at</small>
          {['Linear·ish', 'Orbit', 'Pulse', 'Vertex', 'Hexa'].map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      </section>

      <section className="t-sec">
        <div className="t-wrap">
          <Head eyebrow="Platform" title="Everything your team needs, nothing it doesn't" center />
          <div className="nb-bento">
            <article className="t-card nb-b1">
              <span className="t-ico">
                <Bot size={22} />
              </span>
              <h3>AI copilot</h3>
              <p>Summarise threads, draft updates and surface blockers automatically.</p>
              <div className="nb-chat">
                <span>Summarise this sprint</span>
                <b>12 tasks done, 2 blocked by QA.</b>
              </div>
            </article>
            <article className="t-card nb-b2">
              <span className="t-ico">
                <Workflow size={22} />
              </span>
              <h3>Automations</h3>
              <p>No-code workflows that run while you sleep.</p>
            </article>
            <article className="t-card nb-b3">
              <span className="t-ico">
                <Gauge size={22} />
              </span>
              <h3>Real-time analytics</h3>
              <p>Live dashboards that update the second your data does.</p>
            </article>
            <article className="t-card nb-b4">
              <span className="t-ico">
                <Plug size={22} />
              </span>
              <h3>120+ integrations</h3>
              <p>Slack, GitHub, Google, Stripe and more.</p>
            </article>
            <article className="t-card nb-b5">
              <span className="t-ico">
                <Lock size={22} />
              </span>
              <h3>Enterprise security</h3>
              <p>SOC 2, SSO, audit logs and granular permissions.</p>
            </article>
            <article className="t-card nb-b6">
              <span className="t-ico">
                <Layers size={22} />
              </span>
              <h3>Unlimited workspaces</h3>
              <p>Separate teams, shared standards.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="t-sec t-sec--alt">
        <div className="t-wrap">
          <Head eyebrow="Pricing" title="Simple pricing that scales with you" center />
          <div className="nb-toggle" role="group" aria-label="Billing period">
            <button className={!yearly ? 'on' : ''} onClick={() => setYearly(false)}>
              Monthly
            </button>
            <button className={yearly ? 'on' : ''} onClick={() => setYearly(true)}>
              Yearly <small>-20%</small>
            </button>
          </div>
          <div className="t-cols t-c3 nb-plans">
            {plans.map((p) => (
              <article key={p.name} className={`t-card nb-plan ${p.hot ? 'is-hot' : ''}`}>
                {p.hot && <span className="nb-plan__tag">Most popular</span>}
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                <div className="nb-price">
                  <strong>${yearly ? Math.round(p.price * 0.8) : p.price}</strong>
                  <small>/ user / mo</small>
                </div>
                <a href="#top" className={`t-btn ${p.hot ? 't-btn--p' : 't-btn--o'}`}>
                  Get started
                </a>
                <ul className="t-checks">
                  {p.feats.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="t-sec">
        <div className="t-wrap nb-faq">
          <Head eyebrow="FAQ" title="Questions, answered" center />
          {faqs.map((f, i) => (
            <div key={f.q} className={`nb-faq__item ${openFaq === i ? 'is-open' : ''}`}>
              <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}>
                {f.q} <ChevronDown size={18} />
              </button>
              <div className="nb-faq__a">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="t-sec">
        <div className="t-wrap">
          <div className="t-cta">
            <div>
              <h2 className="t-h2">Start building with Nimbus today</h2>
              <p>Join 8,000+ teams shipping faster.</p>
            </div>
            <a href="#top" className="t-btn t-btn--inv">
              <BellRing size={16} /> Get started free
            </a>
          </div>
        </div>
      </section>

      <TplFooter
        brand="Nimbus"
        blurb="The all-in-one workspace for modern teams."
        cols={[
          { title: 'Product', items: ['Features', 'Integrations', 'Changelog', 'Pricing'] },
          { title: 'Resources', items: ['Docs', 'Guides', 'API', 'Status'] },
          { title: 'Company', items: ['About', 'Careers', 'Contact'] },
        ]}
        note="© 2026 Nimbus Inc."
      />
    </div>
  )
}
