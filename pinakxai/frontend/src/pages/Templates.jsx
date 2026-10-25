import { useState } from 'react'
import { useViewTransitionState } from 'react-router-dom'
import { Link } from '../components/Link.jsx'
import { ArrowRight, Eye, MousePointerClick, Palette, Rocket } from 'lucide-react'
import { CtaBand, PageHero, Reveal } from '../components/ui.jsx'
import TemplateThumb from '../components/TemplateThumb.jsx'
import { palettes, templateCategories, templates } from '../data/templates.js'

const steps = [
  { icon: MousePointerClick, title: 'Choose a template', text: 'Browse live, fully interactive designs.' },
  { icon: Palette, title: 'Pick your colours', text: 'Switch palettes and light/dark in one click.' },
  { icon: Rocket, title: 'We deliver', text: 'We add your content and brand, then go live.' },
]

function TemplateCard({ t }) {
  const [palette, setPalette] = useState(t.palette)
  const qs = `palette=${palette}&mode=${t.mode}`
  const transitioning = useViewTransitionState(`/templates/${t.id}`)
  return (
    <article className="tcard">
      <Link
        to={`/templates/${t.id}?${qs}`}
        className="tcard__thumb"
        aria-label={`Preview ${t.name}`}
        style={transitioning ? { viewTransitionName: 'tpl-shot' } : undefined}
      >
        <TemplateThumb id={t.id} palette={palette} mode={t.mode} />
        <span className="tcard__hover">
          <Eye size={16} /> Live preview
        </span>
      </Link>
      <div className="tcard__body">
        <div className="tcard__row">
          <div>
            <h3>{t.name}</h3>
            <small>{t.tagline}</small>
          </div>
          <span className="tcard__cat">{t.category}</span>
        </div>
        <p>{t.desc}</p>
        <div className="swatches" role="radiogroup" aria-label={`${t.name} colours`}>
          {palettes.map((p) => (
            <button
              key={p.id}
              role="radio"
              aria-checked={palette === p.id}
              aria-label={p.name}
              title={p.name}
              className={palette === p.id ? 'on' : ''}
              style={{ '--c1': p.p, '--c2': p.p2 }}
              onClick={() => setPalette(p.id)}
            />
          ))}
        </div>
        <div className="tcard__actions">
          <Link to={`/templates/${t.id}?${qs}`} className="btn btn--outline btn--sm">
            Preview
          </Link>
          <Link to={`/contact?template=${t.id}&${qs}`} className="btn btn--gold btn--sm">
            Choose <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function Templates() {
  const [cat, setCat] = useState('All')
  const shown = cat === 'All' ? templates : templates.filter((t) => t.category === cat)

  return (
    <>
      <PageHero
        row
        eyebrow="Website templates"
        title={
          <>
            Pick a template. Choose your colours. <em>We deliver.</em>
          </>
        }
        sub="Professionally designed, fully responsive websites. Preview them live, match them to your brand colours, and we will customise and launch yours."
      >
        <div className="chips" role="tablist" aria-label="Filter templates">
          {templateCategories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={cat === c}
              className={`chip ${cat === c ? 'on' : ''}`}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <h2 className="sr-only">Choose a template</h2>
          <ol className="how">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="icon-tile icon-tile--sm">
                  <s.icon size={18} />
                </span>
                <div>
                  <strong>
                    {i + 1}. {s.title}
                  </strong>
                  <small>{s.text}</small>
                </div>
              </li>
            ))}
          </ol>
          <div className="grid grid--3 tgrid">
            {shown.map((t, i) => (
              <Reveal key={t.id} delay={(i % 3) * 80}>
                <TemplateCard t={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need something fully custom?"
        text="Every template is a starting point — we can also design and build from scratch."
        label="Talk to us"
        compact
      />
    </>
  )
}
