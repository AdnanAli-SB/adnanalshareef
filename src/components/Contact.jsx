// EDIT: your email and social links
const socials = [
  { label: "Email →", href: "mailto:dnnlshrf@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adnan-alshareef-a73153199" },
];

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <span
          className="sec-tag mono"
          style={{ justifyContent: "center", display: "inline-flex" }}
        >
          <span className="pulse" />
          Open to opportunities
        </span>
        <h2>
          Let’s build
          <br />
          something good.
        </h2>
        <div className="socials">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <span className="mono">© 2026 Adnan Alshareef</span>
        <span className="mono">'I may die young'</span>
      </div>
    </footer>
  );
}
