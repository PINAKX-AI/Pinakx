import { Navigate, useParams } from 'react-router-dom'
import { Link } from '../components/Link.jsx'
import { ArrowLeft } from 'lucide-react'
import Cover from '../components/Cover.jsx'
import { PostCard, PostMeta } from '../components/Cards.jsx'
import { CtaBand, Reveal } from '../components/ui.jsx'
import { posts } from '../data/site.js'

function Block({ b }) {
  if (b.t === 'h2') return <h2>{b.v}</h2>
  if (b.t === 'lede') return <p className="lede">{b.v}</p>
  if (b.t === 'ul')
    return (
      <ul>
        {b.v.map((li) => (
          <li key={li}>{li}</li>
        ))}
      </ul>
    )
  return <p>{b.v}</p>
}

export default function Article() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return <Navigate to="/blog" replace />
  const related = posts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__glow" aria-hidden="true" />
        <div className="container">
          <Reveal className="article-head">
            <Link to="/blog" className="back-link">
              <ArrowLeft size={16} /> All articles
            </Link>
            <span className="post__cat" style={{ display: 'block' }}>
              {post.category}
            </span>
            <h1>{post.title}</h1>
            <PostMeta post={post} />
          </Reveal>
          <Reveal delay={100} className="article-cover">
            <Cover kind={post.art} label={post.title} />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="prose">
            {post.body.map((b, i) => (
              <Block key={i} b={b} />
            ))}
            <p>
              <em>Written by the PinakXAI team.</em> Want help applying this to your business?{' '}
              <Link to="/contact">Get in touch</Link>.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="h3">Keep reading</h2>
          <div className="grid grid--3 blog-grid">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
