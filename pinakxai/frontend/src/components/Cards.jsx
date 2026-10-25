import { useViewTransitionState } from 'react-router-dom'
import { Link } from './Link.jsx'
import TemplateThumb from './TemplateThumb.jsx'
import { ArrowUpRight } from 'lucide-react'
import ProjectShot from './screens/Screens.jsx'
import Cover from './Cover.jsx'
import { spotlight } from '../hooks.js'

export function ServiceRow({ service, index }) {
  return (
    <Link to={`/services#${service.slug}`} className="svc-row">
      <span className="svc-row__n">{String(index + 1).padStart(2, '0')}</span>
      <div>
        <h3>{service.title}</h3>
        <p>{service.summary}</p>
      </div>
      <span className="round-btn" aria-hidden="true">
        <ArrowUpRight size={17} />
      </span>
    </Link>
  )
}

export function CaseCard({ project, feature = false, level = 3 }) {
  const Heading = `h${level}`
  return (
    <Link
      to={`/work/${project.id}`}
      className={`case-card spot ${feature ? 'case-card--feature' : ''}`}
      style={{ '--tint': project.tint }}
      onPointerMove={spotlight}
    >
      <div className="case-card__shot">
        <ProjectShot id={project.id} />
      </div>
      <div className="case-card__meta">
        <div>
          <Heading>{project.title}</Heading>
          <p>{project.summary}</p>
          <div className="tags">
            <span>{project.kind}</span>
            <span>{project.year}</span>
          </div>
        </div>
        <span className="round-btn" aria-hidden="true">
          <ArrowUpRight size={17} />
        </span>
      </div>
    </Link>
  )
}

export function PostMeta({ post }) {
  return (
    <div className="post__meta">
      <span>{post.date}</span>
      <i />
      <span>{post.read} min read</span>
    </div>
  )
}

export function PostCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="post">
      <Cover kind={post.art} label={post.title} />
      <span className="post__cat">{post.category}</span>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <PostMeta post={post} />
    </Link>
  )
}

/**
 * A template card with a live thumbnail. When `morph` is on, the thumbnail becomes a shared element
 * that expands into the preview frame on the template's page (View Transitions API).
 */
export function TeaserCard({ t, morph = true }) {
  const to = `/templates/${t.id}`
  const transitioning = useViewTransitionState(to)
  return (
    <Link to={`${to}?palette=${t.palette}&mode=${t.mode}`} className="tcard tcard--mini spot" onPointerMove={spotlight}>
      <div className="tcard__thumb" style={morph && transitioning ? { viewTransitionName: 'tpl-shot' } : undefined}>
        <TemplateThumb id={t.id} palette={t.palette} mode={t.mode} />
      </div>
      <div className="tcard__body">
        <strong>{t.name}</strong>
        <small>{t.tagline}</small>
      </div>
    </Link>
  )
}
