import { useEffect, useState } from "react";
import { profile } from "../data/profile";

const links = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <a className="brand" href="#top">
        <span className="brand-mark">
          <img src="/images/alice-avatar.png" alt="" />
        </span>
        Alice
      </a>
      <nav>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="mobile-hire">
            <a href={profile.workana} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              Hire on Workana
            </a>
          </li>
        </ul>
      </nav>
      <a className="nav-cta" href={profile.workana} target="_blank" rel="noreferrer">
        Hire on Workana
      </a>
      <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
        <span />
      </button>
    </header>
  );
}
