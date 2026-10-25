import { useState } from 'react'
import { CtaBand, PageHero, Reveal } from '../components/ui.jsx'
import { CaseCard } from '../components/Cards.jsx'
import { projects, workFilters } from '../data/site.js'

export default function Work() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <>
      <PageHero
        row
        eyebrow="Our work"
        title={
          <>
            Projects that create <em>real impact</em>
          </>
        }
        sub="A selection of websites, apps and AI tools we have designed and built for businesses across India."
      >
        <div className="chips" role="tablist" aria-label="Filter projects">
          {workFilters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              className={`chip ${filter === f ? 'on' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="work-grid">
            {shown.map((p, i) => (
              <Reveal key={`${filter}-${p.id}`} delay={(i % 2) * 100}>
                <CaseCard project={p} level={2} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Let’s build your success story"
        text="We are always excited to work on new and ambitious projects."
      />
    </>
  )
}
