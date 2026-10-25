import { useState } from 'react'
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  HardHat,
  Home,
  MapPin,
  PencilRuler,
  Search,
  ShieldCheck,
  Star,
  Trees,
} from 'lucide-react'
import { Head, TplFooter, TplNav } from './parts.jsx'

const projects = [
  {
    name: 'Skyline Residency',
    type: 'Residential',
    place: 'Pune',
    status: 'Ongoing',
    art: 'a',
    meta: '3 & 4 BHK · 42 floors',
  },
  {
    name: 'Orchid Business Park',
    type: 'Commercial',
    place: 'Mumbai',
    status: 'Completed',
    art: 'b',
    meta: '1.2M sq ft office space',
  },
  {
    name: 'Greenfield Villas',
    type: 'Residential',
    place: 'Nashik',
    status: 'Completed',
    art: 'c',
    meta: '120 premium villas',
  },
  {
    name: 'Metro Plaza',
    type: 'Commercial',
    place: 'Thane',
    status: 'Ongoing',
    art: 'd',
    meta: 'Retail & co-working hub',
  },
  {
    name: 'Lakeview Heights',
    type: 'Residential',
    place: 'Lonavala',
    status: 'Upcoming',
    art: 'e',
    meta: 'Luxury lake-facing homes',
  },
  {
    name: 'Harbor Tower',
    type: 'Commercial',
    place: 'Navi Mumbai',
    status: 'Completed',
    art: 'a',
    meta: 'Grade-A corporate tower',
  },
]

const why = [
  { icon: ShieldCheck, title: 'RERA registered', text: 'Every project fully approved and transparent.' },
  { icon: HardHat, title: 'Quality engineering', text: 'In-house engineers on site, every day.' },
  { icon: PencilRuler, title: 'Thoughtful design', text: 'Award-winning architects and planners.' },
  { icon: Trees, title: 'Sustainable build', text: 'Green materials and energy-smart homes.' },
]

export default function Foundry() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? projects : projects.filter((p) => p.type === filter)

  return (
    <div className="fd" id="top">
      <TplNav brand="Foundry Builders" links={['Home', 'Projects', 'About', 'Gallery', 'Contact']} cta="Enquire Now" />

      <section className="fd-hero">
        <div className="t-art t-art--c fd-hero__art" aria-hidden="true" />
        <div className="t-wrap fd-hero__in">
          <span className="t-eyebrow">Since 1998 · 45+ projects delivered</span>
          <h1 className="t-h1">
            Building places people love to <em>live in</em>
          </h1>
          <p className="t-lead">
            Premium residential and commercial developments, crafted with precision and delivered on time.
          </p>
          <form className="fd-search" onSubmit={(e) => e.preventDefault()}>
            <label>
              <Home size={16} />
              <select defaultValue="Residential">
                <option>Residential</option>
                <option>Commercial</option>
              </select>
            </label>
            <label>
              <MapPin size={16} />
              <select defaultValue="Any location">
                <option>Any location</option>
                <option>Pune</option>
                <option>Mumbai</option>
              </select>
            </label>
            <label>
              <Building2 size={16} />
              <select defaultValue="Any budget">
                <option>Any budget</option>
                <option>₹50L – ₹1Cr</option>
                <option>₹1Cr+</option>
              </select>
            </label>
            <button className="t-btn t-btn--p">
              <Search size={16} /> Find projects
            </button>
          </form>
        </div>
      </section>

      <section className="fd-stats">
        <div className="t-wrap">
          {[
            ['25+', 'Years of experience'],
            ['45', 'Projects delivered'],
            ['6,000+', 'Happy families'],
            ['12M', 'Sq. ft. built'],
          ].map(([n, l]) => (
            <div key={l}>
              <strong>{n}</strong>
              <small>{l}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="t-sec">
        <div className="t-wrap">
          <div className="fd-head-row">
            <Head eyebrow="Our projects" title="Landmarks we are proud of" />
            <div className="t-chips">
              {['All', 'Residential', 'Commercial'].map((f) => (
                <button key={f} className={filter === f ? 'on' : ''} onClick={() => setFilter(f)}>
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="t-cols t-c3">
            {shown.map((p) => (
              <article key={p.name} className="fd-proj">
                <div className={`t-art t-art--${p.art} fd-proj__art`}>
                  <span className={`fd-tag fd-tag--${p.status.toLowerCase()}`}>{p.status}</span>
                </div>
                <div className="fd-proj__body">
                  <h3>{p.name}</h3>
                  <small>
                    <MapPin size={13} /> {p.place} · {p.type}
                  </small>
                  <p>{p.meta}</p>
                  <a href="#top" className="t-link">
                    View details <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="t-sec t-sec--alt">
        <div className="t-wrap">
          <Head eyebrow="Why Foundry" title="Built on trust, delivered on time" center />
          <div className="t-cols t-c4">
            {why.map((w) => (
              <article key={w.title} className="t-card">
                <span className="t-ico">
                  <w.icon size={22} />
                </span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="t-sec">
        <div className="t-wrap">
          <Head eyebrow="How it works" title="Your journey to a new home" center />
          <ol className="fd-steps">
            {['Enquire & shortlist', 'Site visit', 'Booking & agreement', 'Handover'].map((s, i) => (
              <li key={s}>
                <span>{i + 1}</span>
                <h3>{s}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="t-sec t-sec--alt">
        <div className="t-wrap fd-contact">
          <div>
            <Head
              eyebrow="Visit us"
              title="Book a free site visit"
              sub="Our team will guide you through the project, floor plans and payment options."
            />
            <ul className="fd-rating">
              <li>
                <Star size={16} fill="currentColor" /> 4.8 / 5 from 1,200+ buyers
              </li>
              <li>
                <CalendarCheck size={16} /> Flexible visit slots, 7 days a week
              </li>
            </ul>
          </div>
          <form className="t-card fd-form" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Full name" aria-label="Full name" />
            <input placeholder="Phone number" aria-label="Phone number" />
            <select aria-label="Project" defaultValue="">
              <option value="" disabled>
                Interested in…
              </option>
              {projects.map((p) => (
                <option key={p.name}>{p.name}</option>
              ))}
            </select>
            <button className="t-btn t-btn--p">
              Request site visit <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>

      <TplFooter
        brand="Foundry Builders"
        blurb="Premium residential and commercial developments since 1998."
        cols={[
          { title: 'Projects', items: ['Residential', 'Commercial', 'Upcoming', 'Completed'] },
          { title: 'Company', items: ['About', 'Careers', 'Gallery', 'Contact'] },
          { title: 'Visit', items: ['12 Business Bay, Pune', '+91 98765 43210', 'info@foundry.in'] },
        ]}
        note="© 2026 Foundry Builders · RERA registered"
      />
    </div>
  )
}
