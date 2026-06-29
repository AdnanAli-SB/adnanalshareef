import { useReveal } from '../hooks/useReveal.js'
import ProjectCard from './ProjectCard.jsx'
import { projects, hasCategory } from '../data/projects.js'

export default function ProjectsSection({ id, category, tag, color, heading, blurb }) {
  const [ref, shown] = useReveal()
  const list = projects
    .filter((p) => hasCategory(p, category))
    .sort((a, b) => Number(b.cardMeta[1]) - Number(a.cardMeta[1]))

  return (
    <section id={id}>
      <div className="wrap">
        <div ref={ref} className={`sec-head reveal ${shown ? 'in' : ''}`}>
          <span className="sec-tag mono">
            <span className="dot" style={{ background: color }} />
            {tag}
          </span>
          <h2>{heading}</h2>
          {blurb && <p>{blurb}</p>}
        </div>
        <div className="grid">
          {list.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
