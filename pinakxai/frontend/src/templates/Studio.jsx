import { ArrowUpRight, Layout, Megaphone, PenTool, Smartphone } from 'lucide-react'
import { Mark, TplNav } from './parts.jsx'

const work = [
  { n: '01', title: 'Lumen Skincare', tags: 'Brand identity · Packaging', year: '2026', art: 'a' },
  { n: '02', title: 'Orbit Finance', tags: 'Product design · Web app', year: '2025', art: 'b' },
  { n: '03', title: 'Terra Coffee Roasters', tags: 'Branding · E-commerce', year: '2025', art: 'c' },
  { n: '04', title: 'Pulse Fitness', tags: 'Mobile app · Campaign', year: '2024', art: 'd' },
]

const services = [
  { icon: PenTool, title: 'Brand identity', text: 'Strategy, naming, logos and complete visual systems.' },
  { icon: Layout, title: 'Web design', text: 'Fast, considered websites that turn visitors into customers.' },
  { icon: Smartphone, title: 'Product & app UI', text: 'Interfaces people understand instantly and love to use.' },
  { icon: Megaphone, title: 'Campaigns', text: 'Launch creative, social content and motion.' },
]

export default function Studio() {
  return (
    <div className="st" id="top">
      <TplNav brand="Studio." links={['Work', 'Services', 'About', 'Journal']} cta="Let’s talk" />

      <section className="st-hero">
        <div className="t-wrap">
          <span className="t-eyebrow">Independent design studio · Mumbai</span>
          <h1 className="st-title" aria-label="We craft brands, websites, products and stories people remember.">
            We craft{' '}
            <span className="st-rotor" aria-hidden="true">
              <b>brands</b>
              <b>websites</b>
              <b>products</b>
              <b>stories</b>
              <b>brands</b>
            </span>
            <br />
            people remember<span className="st-dot">.</span>
          </h1>
          <div className="st-hero__foot">
            <p className="t-lead">
              A small team of designers and developers helping ambitious companies look and feel unmistakably
              themselves.
            </p>
            <a href="#top" className="st-circle" aria-label="See our work">
              <ArrowUpRight size={26} />
            </a>
          </div>
        </div>
      </section>

      <div className="st-marquee" aria-hidden="true">
        <div>
          {[0, 1].map((k) => (
            <span key={k}>Branding ✦ Web Design ✦ Product ✦ Motion ✦ Strategy ✦ Development ✦ Packaging ✦</span>
          ))}
        </div>
      </div>

      <section className="t-sec">
        <div className="t-wrap">
          <div className="st-row-head">
            <h2 className="t-h2">Selected work</h2>
            <a href="#top" className="t-link">
              All projects <ArrowUpRight size={14} />
            </a>
          </div>
          <ul className="st-work">
            {work.map((w) => (
              <li key={w.n}>
                <a href="#top">
                  <span className="st-work__n">{w.n}</span>
                  <h3>{w.title}</h3>
                  <span className="st-work__tags">{w.tags}</span>
                  <span className="st-work__y">{w.year}</span>
                  <span className={`t-art t-art--${w.art} st-work__thumb`} />
                  <ArrowUpRight size={22} className="st-work__go" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="t-sec t-sec--alt">
        <div className="t-wrap">
          <div className="st-row-head">
            <h2 className="t-h2">What we do</h2>
          </div>
          <div className="t-cols t-c4 st-services">
            {services.map((s) => (
              <article key={s.title}>
                <s.icon size={26} />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="t-sec">
        <div className="t-wrap st-about">
          <h2 className="t-h2">Design is how it works, not just how it looks.</h2>
          <div>
            <p className="t-lead">
              Studio. is a team of eight working with founders, startups and established brands. We keep the process
              lean, the feedback loops short and the craft high.
            </p>
            <div className="st-nums">
              <div>
                <strong>8</strong>
                <small>Specialists</small>
              </div>
              <div>
                <strong>120+</strong>
                <small>Projects</small>
              </div>
              <div>
                <strong>14</strong>
                <small>Awards</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="st-cta">
        <div className="t-wrap">
          <span className="t-eyebrow">Have a project?</span>
          <a href="#top" className="st-mail">
            hello@studio.design <ArrowUpRight />
          </a>
        </div>
      </section>

      <footer className="t-footer st-footer">
        <div className="t-wrap t-footer__bar">
          <Mark name="Studio." small />
          <span>© 2026 · Instagram · Dribbble · LinkedIn</span>
        </div>
      </footer>
    </div>
  )
}
