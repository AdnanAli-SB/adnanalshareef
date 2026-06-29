import { useReveal } from '../hooks/useReveal.js'

// EDIT: your writing. kind, title, blurb, date, and href (link).
const docs = [
  {
    kind: 'Article',
    title: 'The Magic of Color and Human Eyes',
    blurb: 'How color perception actually works, and why that matters when you’re making design decisions.',
    when: '',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7152631129726976002/',
  },
]

export default function Docs() {
  const [headRef, headShown] = useReveal()
  const [listRef, listShown] = useReveal()

  return (
    <section id="docs">
      <div className="wrap">
        <div ref={headRef} className={`sec-head reveal ${headShown ? 'in' : ''}`}>
          <span className="sec-tag mono">
            <span className="dot" style={{ background: 'var(--c-doc)' }} />
            Articles
          </span>
          <h2>Words, not just wireframes.</h2>
        </div>

        <div ref={listRef} className={`docs-list reveal ${listShown ? 'in' : ''}`}>
          {docs.map((d) => (
            <a className="doc-row" href={d.href} target="_blank" rel="noopener noreferrer" key={d.title}>
              <span className="kind">{d.kind}</span>
              <div>
                <h3>{d.title}</h3>
                <p>{d.blurb}</p>
              </div>
              <span className="when">{d.when}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
