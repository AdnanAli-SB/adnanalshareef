import { useReveal } from '../hooks/useReveal.js'

const stack = [
  'Figma',
  'Adobe XD',
  'Adobe After Effects',
  'Notion',
  'DGA Design System',
  'Build Design System',
  'Users Psychology',
  'User Research',
  'Accessibility',
  'React',
  'Advanced CSS',
  'TypeScript',
  'Next.js',
  'Tailwind',
  'Bootstrap',
  'Framer Motion',
  'Vite',
  'Git',
]

export default function About() {
  const [aRef, aShown] = useReveal()
  const [bRef, bShown] = useReveal()

  return (
    <section id="about">
      <div className="wrap about">
        <div className="about-grid">
          <div ref={aRef} className={`reveal ${aShown ? 'in' : ''}`}>
            <span className="sec-tag mono" style={{ marginBottom: 24, display: 'inline-flex' }}>
              <span className="dot" style={{ background: 'var(--ink)' }} />
              About
            </span>
            {/* EDIT: your bio */}
            <p>
              I’m a frontend developer and UI/UX designer who likes the messy middle —{' '}
              <span className="hl">where design decisions meet real code and real constraints.</span>
            </p>
            <p>
              I’ve spent the last few years moving fluidly between Figma, the codebase, and the
              articles I write about both, because I think the best products happen when those three
              aren’t handed off in silos.
            </p>

            <div className="stack">
              <span className="sec-tag mono" style={{ marginBottom: 14, display: 'inline-flex' }}>
                <span className="dot" style={{ background: 'var(--ink)' }} />
                Skills
              </span>
              <div className="chips">
                {stack.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div ref={bRef} className={`reveal ${bShown ? 'in' : ''}`}>
            {/* To use a real photo instead: put it in public/images/, replace this
            block with <img className="about-photo" src="/images/me.jpg" alt="Your name" /> */}
            <div className="about-photo-frame">
              <div className="about-quote">
                <span className="about-quote-mark" aria-hidden="true">“</span>
                <p className="about-quote-text">
                  Human knowledge is never contained in one person. It grows from the relationships we
                  create between each other and the world, and still it is never complete
                </p>
                <span className="about-quote-cite mono">— Paul Kalanithi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
