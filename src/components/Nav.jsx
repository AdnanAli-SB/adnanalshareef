import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const sections = [
  { id: "frontend", label: "Frontend", color: "var(--c-fe)" },
  { id: "design", label: "UI/UX", color: "var(--c-ux)" },
  { id: "docs", label: "Articles", color: "var(--c-doc)" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const heroCta = document.getElementById("hero-main-cta");
    if (!heroCta) return;
    // once the hero's solid-black CTA scrolls out of view, fill the
    // navbar CTA with the primary accent so it keeps the same visual weight
    const io = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { rootMargin: "-64px 0px 0px 0px" },
    );
    io.observe(heroCta);
    return () => io.disconnect();
  }, []);

  const scrollToId = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="nav">
      <div className="nav-in">
        {/* EDIT: your name */}
        <a href="#top" className="brand" onClick={scrollToId("top")}>
          Adnan
          <span className="brand-dots" aria-hidden="true">
            {sections.map((s) => (
              <span key={s.id} className="dot" style={{ background: s.color }} />
            ))}
          </span>
          Alshareef
        </a>

        <nav className={`nav-links${open ? " open" : ""}`}>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? "active" : ""}
              onClick={scrollToId(s.id)}
            >
              <span className="dot" style={{ background: s.color }} />
              {s.label}
            </a>
          ))}
          <Link to="/work" onClick={() => setOpen(false)}>
            All work
          </Link>
          <a
            href="/resume.pdf"
            download="Adnan_Alshareef-UIUX.pdf"
            className={`nav-cta${pastHero ? " nav-cta-prim" : ""}`}
            onClick={() => setOpen(false)}
          >
            Download resume
          </a>
        </nav>

        <button
          className="burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
