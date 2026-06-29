import { Fragment, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProject, primaryCategory } from '../data/projects.js'

const paletteCategory = (name) => name.split('-')[0]

function groupPaletteByCategory(palette) {
  const order = []
  const groups = {}
  palette.forEach(([hex, name]) => {
    const cat = paletteCategory(name)
    if (!groups[cat]) {
      groups[cat] = []
      order.push(cat)
    }
    groups[cat].push([hex, name])
  })
  return order.flatMap((cat) => groups[cat])
}

function InfoNote({ text, link, linkLabel }) {
  if (!text) return null
  return (
    <div className="info-note">
      <span className="ico">i</span>
      <span>
        {text}
        {link && (
          <>
            {' '}
            <a href={link} target="_blank" rel="noopener noreferrer">
              {linkLabel || link}
            </a>
          </>
        )}
      </span>
    </div>
  )
}

export default function ProjectDetail() {
  const { id } = useParams()
  const p = getProject(id)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = p ? `${p.title} — Adnan Alshareef` : 'Project not found'
  }, [p])

  if (!p) {
    return (
      <>
        <TopBar />
        <main className="detail">
          <div className="detail-wrap missing">
            <h1>Project not found</h1>
            <p className="lede" style={{ margin: '0 auto 28px' }}>
              That project doesn’t exist (or the link is wrong).
            </p>
            <Link className="cta" to="/work">
              ← Back to all work
            </Link>
          </div>
        </main>
      </>
    )
  }

  const accent = p.palette?.[0]?.[0] || 'var(--c-fe)'
  const catColor = primaryCategory(p) === 'frontend' ? 'var(--c-fe)' : 'var(--c-ux)'

  return (
    <div style={{ '--accent': accent }}>
      <TopBar catColor={catColor} />
      <main className="detail">
        <div className="detail-wrap">
          <div className="p-meta mono">{p.meta}</div>
          <h1>{p.title}</h1>
          <p className="lede">{p.desc}</p>

          <div className="chips">
            {p.tags.map((t) => (
              <span className="chip" key={t}>
                {t}
              </span>
            ))}
          </div>

          {p.image ? (
            <img className="feature" src={p.image} alt={p.title} />
          ) : (
            <div className="feature placeholder" style={{ background: p.grad }}>
              {p.badge}
            </div>
          )}

          {p.video && (
            <section className="block">
              <h2>Walkthrough</h2>
              <video className="project-video" src={p.video} controls playsInline preload="metadata" />
            </section>
          )}

          {p.gallery?.length > 0 && (
            <section className="block">
              <h2>Screenshots</h2>
              <div className="shots-grid">
                {p.gallery.map(([src, caption], i) => (
                  <figure className="shot-fig" key={src + i}>
                    <img className="shot" src={src} alt={caption || `${p.title} screenshot`} loading="lazy" />
                    {caption && <figcaption className="mono">{caption}</figcaption>}
                  </figure>
                ))}
              </div>
            </section>
          )}

          {(p.palette?.length > 0 || p.paletteNote) && (
            <section className="block">
              <h2>Color palette</h2>
              {p.palette?.length > 0 && (
                <div className="palette-grid">
                  {groupPaletteByCategory(p.palette).map(([hex, name], i, sorted) => {
                    const isNewCategory = i > 0 && paletteCategory(name) !== paletteCategory(sorted[i - 1][1])
                    return (
                      <Fragment key={hex + name}>
                        {isNewCategory && <div className="pal-break" />}
                        <div className="pal">
                          <div className="swatch" style={{ background: hex }} />
                          <div className="pal-info">
                            <div className="pal-name">{name}</div>
                            <div className="pal-hex">{hex}</div>
                          </div>
                        </div>
                      </Fragment>
                    )
                  })}
                </div>
              )}
              <InfoNote text={p.paletteNote} link={p.paletteNoteLink} linkLabel="design.dga.gov.sa ↗" />
            </section>
          )}

          {(p.type?.some(([role, face]) => role || face) || p.typeNote) && (
            <section className="block">
              <h2>Typography</h2>
              {p.type?.some(([role, face]) => role || face) && (
                <div className="type-rows">
                  {p.type
                    .filter(([role, face]) => role || face)
                    .map(([role, face], i) => (
                      <div className="type-row" key={`${role}-${face}-${i}`}>
                        <span className="role">{role}</span>
                        <span className="face">{face}</span>
                      </div>
                    ))}
                </div>
              )}
              <InfoNote text={p.typeNote} link={p.typeNoteLink} linkLabel="design.dga.gov.sa ↗" />
            </section>
          )}

          {p.designNote && (
            <div className="block">
              <InfoNote text={p.designNote} link={p.designNoteLink} linkLabel="design.dga.gov.sa ↗" />
            </div>
          )}

          {p.link && p.link !== '#' && (
            <a className="cta" href={p.link} target="_blank" rel="noopener noreferrer">
              View live project ↗
            </a>
          )}
        </div>
      </main>

      <footer className="detail-foot">
        <div className="detail-foot-in">
          <span className="mono">© 2026 Adnan Alshareef</span>
          <Link className="mono" to="/">
            Back to portfolio →
          </Link>
        </div>
      </footer>
    </div>
  )
}

function TopBar({ catColor }) {
  return (
    <header className="topbar">
      <div className="topbar-in">
        {/* EDIT: your name */}
        <Link to="/" className="brand">
          Adnan
          {catColor && (
            <span className="brand-dots" aria-hidden="true">
              <span className="dot" style={{ background: catColor }} />
            </span>
          )}
          Alshareef
        </Link>
        <Link to="/work" className="back">
          ← All work
        </Link>
      </div>
    </header>
  )
}
