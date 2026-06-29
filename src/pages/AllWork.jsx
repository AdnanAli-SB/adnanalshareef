import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard.jsx'
import { Contact, Footer } from '../components/Contact.jsx'
import { projects, hasCategory } from '../data/projects.js'

const filters = [
  { key: 'all', label: 'All', color: 'var(--ink)' },
  { key: 'frontend', label: 'Frontend', color: 'var(--c-fe)' },
  { key: 'uiux', label: 'UI/UX', color: 'var(--c-ux)' },
]

export default function AllWork() {
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'All work — Adnan Alshareef'
  }, [])

  const list = projects
    .filter((p) => filter === 'all' || hasCategory(p, filter))
    .sort((a, b) => Number(b.cardMeta[1]) - Number(a.cardMeta[1]))

  return (
    <>
      <header className="topbar">
        <div className="topbar-in">
          <Link to="/" className="brand">
            Adnan
            <span className="brand-dots" aria-hidden="true">
              <span className="dot" style={{ background: 'var(--c-fe)' }} />
              <span className="dot" style={{ background: 'var(--c-ux)' }} />
              <span className="dot" style={{ background: 'var(--c-doc)' }} />
            </span>
            Alshareef
          </Link>
          <Link to="/" className="back">
            ← Home
          </Link>
        </div>
      </header>

      <main>
        <section style={{ borderTop: 0 }}>
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-tag mono">
                <span className="dot" style={{ background: 'var(--ink)' }} />
                All work
              </span>
              <h2>Everything I’ve shipped.</h2>
              <p>Every project, frontend and design, in one place — newest first.</p>
            </div>

            <div className="work-filters">
              {filters.map((f) => (
                <button
                  key={f.key}
                  className={`work-filter${filter === f.key ? ' active' : ''}`}
                  style={{ '--ac': f.color }}
                  onClick={() => setFilter(f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="grid">
              {list.map((p) => (
                <ProjectCard key={p.id} p={p} />
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  )
}
