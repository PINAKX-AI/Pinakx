import { useState } from 'react'
import { Navigate, useParams, useSearchParams, useViewTransitionState } from 'react-router-dom'
import { Link } from '../components/Link.jsx'
import { ArrowLeft, ArrowRight, Check, Monitor, Moon, Smartphone, Sun, Tablet } from 'lucide-react'
import { TemplateView } from '../templates/index.jsx'
import { TeaserCard } from '../components/Cards.jsx'
import { Reveal } from '../components/ui.jsx'
import { getPalette, getTemplate, palettes, templates } from '../data/templates.js'
import { withSwapTransition } from '../transitions.js'

const devices = [
  { id: 'desktop', label: 'Desktop', icon: Monitor, width: 1240 },
  { id: 'tablet', label: 'Tablet', icon: Tablet, width: 768 },
  { id: 'mobile', label: 'Mobile', icon: Smartphone, width: 390 },
]

export default function TemplatePreview() {
  const { id } = useParams()
  const t = getTemplate(id)
  const [params, setParams] = useSearchParams()
  const [device, setDevice] = useState('desktop')
  const transitioning = useViewTransitionState(`/templates/${id}`)

  if (!t) return <Navigate to="/templates" replace />

  const palette = getPalette(params.get('palette') || t.palette).id
  const rawMode = params.get('mode')
  const mode = rawMode === 'dark' || rawMode === 'light' ? rawMode : t.mode
  // Palette / mode changes cross-fade the whole preview instead of snapping (View Transitions, where supported).
  const update = (patch) =>
    withSwapTransition(() => setParams({ palette, mode, ...patch }, { replace: true, viewTransition: true }))
  const dev = devices.find((d) => d.id === device)
  const chosen = getPalette(palette)
  const choose = `/contact?template=${t.id}&palette=${palette}&mode=${mode}`

  return (
    <>
      <div className="pv-bar">
        <div className="container pv-bar__in">
          <div className="pv-bar__id">
            <Link to="/templates" className="round-btn" aria-label="Back to templates">
              <ArrowLeft size={16} />
            </Link>
            <div>
              <strong>{t.name}</strong>
              <small>{t.tagline}</small>
            </div>
          </div>

          <div className="pv-controls">
            <div className="swatches" role="radiogroup" aria-label="Colour palette">
              {palettes.map((p) => (
                <button
                  key={p.id}
                  role="radio"
                  aria-checked={palette === p.id}
                  aria-label={p.name}
                  title={p.name}
                  className={palette === p.id ? 'on' : ''}
                  style={{ '--c1': p.p, '--c2': p.p2 }}
                  onClick={() => update({ palette: p.id })}
                />
              ))}
            </div>
            <div className="seg" role="group" aria-label="Appearance">
              <button
                className={mode === 'light' ? 'on' : ''}
                onClick={() => update({ mode: 'light' })}
                aria-label="Light mode"
              >
                <Sun size={16} />
              </button>
              <button
                className={mode === 'dark' ? 'on' : ''}
                onClick={() => update({ mode: 'dark' })}
                aria-label="Dark mode"
              >
                <Moon size={16} />
              </button>
            </div>
            <div className="seg pv-devices" role="group" aria-label="Device">
              {devices.map((d) => (
                <button
                  key={d.id}
                  className={device === d.id ? 'on' : ''}
                  onClick={() => setDevice(d.id)}
                  aria-label={d.label}
                  title={d.label}
                >
                  <d.icon size={16} />
                </button>
              ))}
            </div>
          </div>

          <Link to={choose} className="btn btn--gold btn--sm">
            Choose this template <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <section className="pv-stage">
        <div
          className="pv-frame"
          style={{ '--w': `${dev.width}px`, viewTransitionName: transitioning ? 'tpl-shot' : undefined }}
          data-device={device}
        >
          <div className="pv-chrome">
            <i />
            <i />
            <i />
            <span>{t.name.toLowerCase()}-demo.com</span>
          </div>
          <div className="pv-scroll">
            <TemplateView id={t.id} palette={palette} mode={mode} />
          </div>
        </div>
        <p className="pv-hint">
          Interactive preview — scroll, click and try the colours. Your final site uses your own content and photos.
        </p>
      </section>

      <section className="section">
        <div className="container pv-info">
          <Reveal>
            <span className="eyebrow">{t.category}</span>
            <h2>
              {t.name} <em className="gold-text">template</em>
            </h2>
            <p className="lead">{t.desc}</p>
            <ul className="ticks pv-feats">
              {t.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100} className="pv-summary card">
            <h3>Your selection</h3>
            <dl>
              <div>
                <dt>Template</dt>
                <dd>{t.name}</dd>
              </div>
              <div>
                <dt>Palette</dt>
                <dd>
                  <i style={{ background: `linear-gradient(135deg, ${chosen.p2}, ${chosen.p})` }} /> {chosen.name}
                </dd>
              </div>
              <div>
                <dt>Mode</dt>
                <dd style={{ textTransform: 'capitalize' }}>{mode}</dd>
              </div>
              <div>
                <dt>Pages</dt>
                <dd>{t.pages.join(' · ')}</dd>
              </div>
            </dl>
            <Link to={choose} className="btn btn--gold btn--block">
              Get this website <ArrowRight size={16} />
            </Link>
            <small>
              <Check size={13} /> Content, logo and domain setup included in every plan.
            </small>
          </Reveal>
        </div>

        <div className="container pv-more">
          <h3 className="h3">More templates</h3>
          <div className="grid grid--3">
            {templates
              .filter((x) => x.id !== t.id)
              .slice(0, 3)
              .map((x) => (
                <TeaserCard key={x.id} t={x} morph={false} />
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
