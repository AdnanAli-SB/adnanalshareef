import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal.js'
import { primaryCategory } from '../data/projects.js'

export default function ProjectCard({ p }) {
  const [ref, shown] = useReveal()
  const cat = primaryCategory(p)
  const accent = cat === 'frontend' ? 'var(--c-fe)' : 'var(--c-ux)'
  const cta = 'View project'
  return (
    <Link ref={ref} to={`/project/${p.id}`} className={`card reveal ${shown ? 'in' : ''}`}>
      <div className={`thumb${p.image ? ' has-image' : ''}`} style={p.image ? undefined : { background: p.grad }}>
        {p.image ? <img className="thumb-img" src={p.image} alt={p.title} loading="lazy" /> : p.badge}
      </div>
      <div className="card-body">
        <div className="meta mono">
          <span>{p.cardMeta[0]}</span>
          <span>{p.cardMeta[1]}</span>
        </div>
        <h3>{p.title}</h3>
        <p>{p.cardDesc}</p>
        <div className="chips">
          {p.tags.map((t) => (
            <span className="chip" key={t}>
              {t}
            </span>
          ))}
        </div>
        <span className="card-link" style={{ color: accent }}>
          {cta} <span className="arr">↗</span>
        </span>
      </div>
    </Link>
  )
}
