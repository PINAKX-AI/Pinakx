import { useState } from 'react'
import { Link } from '../components/Link.jsx'
import { PageHero, Reveal } from '../components/ui.jsx'
import { PostCard, PostMeta } from '../components/Cards.jsx'
import Cover from '../components/Cover.jsx'
import { blogFilters, posts } from '../data/site.js'

export default function Blog() {
  const [filter, setFilter] = useState('All')
  const [featured, ...rest] = posts
  const shown = filter === 'All' ? rest : posts.filter((p) => p.category === filter)

  return (
    <>
      <PageHero
        row
        eyebrow="Insights"
        title={
          <>
            Ideas and <em>growth strategies</em>
          </>
        }
        sub="Practical writing on websites, apps, AI and marketing — for founders and teams who want to make better decisions about technology."
      />

      <section className="section">
        <div className="container">
          {filter === 'All' && (
            <Reveal>
              <Link to={`/blog/${featured.slug}`} className="post-featured">
                <Cover kind={featured.art} label={featured.title} />
                <div>
                  <span className="post__cat">Latest · {featured.category}</span>
                  <h2>{featured.title}</h2>
                  <p>{featured.excerpt}</p>
                  <PostMeta post={featured} />
                </div>
              </Link>
            </Reveal>
          )}

          <h2 className="sr-only">All articles</h2>
          <div className="chips" role="tablist" aria-label="Filter articles" style={{ marginBottom: 48 }}>
            {blogFilters.map((f) => (
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

          {shown.length ? (
            <div className="grid grid--3 blog-grid">
              {shown.map((p, i) => (
                <Reveal key={`${filter}-${p.slug}`} delay={(i % 3) * 80}>
                  <PostCard post={p} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="empty">No articles in this category yet.</p>
          )}
        </div>
      </section>
    </>
  )
}
