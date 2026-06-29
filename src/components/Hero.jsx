import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero" style={{ borderTop: 0 }} id="top">
      <div className="wrap">
        <div className="eyebrow mono">
          <span className="pulse" aria-hidden="true" />
          <span>Available for work · 2026</span>
          <span style={{ opacity: 0.5 }}>—</span>
          {/* EDIT: your location */}
          <span>Based in Riyadh</span>
        </div>

        <h1>
          I <span className="w design">design</span>,{' '}
          <span className="w build">build</span> &amp;{' '}
          <span className="w document">explain</span> interfaces people actually understand.
        </h1>

        {/* EDIT: your one-line pitch */}
        <p className="lede">
          Frontend developer and UI/UX designer who turns research into shipped product — and
          writes the articles that keep it usable.
        </p>

        <div className="hero-cta">
          <Link id="hero-main-cta" to="/work" className="btn btn-solid">
            All work →
          </Link>
        </div>
      </div>
    </section>
  )
}
