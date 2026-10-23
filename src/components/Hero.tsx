import { useEffect, useRef } from "react";
import { profile } from "../data/profile";
import Particles from "./Particles";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const onMove = (event: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const mx = ((event.clientX - rect.left) / rect.width) * 100;
      const my = ((event.clientY - rect.top) / rect.height) * 100;
      node.style.setProperty("--mx", `${mx}%`);
      node.style.setProperty("--my", `${my}%`);
      node.style.setProperty("--tx", `${(mx - 50) / 18}px`);
      node.style.setProperty("--ty", `${(my - 50) / 22}px`);
    };
    node.addEventListener("mousemove", onMove);
    return () => node.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="hero" id="top" ref={ref}>
      <Particles />
      <div className="hero-aurora" />
      <div className="hero-orb a" />
      <div className="hero-orb b" />
      <div className="hero-orb c" />
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="hero-vignette" />

      <div className="hero-copy">
        <div className="kicker reveal">
          <span className="pulse" />
          {profile.availability} · {profile.location}
        </div>
        <p className="ghost">developer</p>
        <h1>Alice</h1>
        <p className="hero-title">
          Professional IT Developer
          <span> &amp; Technology Specialist</span>
        </p>
        <p className="lead">{profile.headline}</p>
        <div className="stack-row">
          {profile.stack.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#work">
            View selected work
          </a>
          <a className="btn btn-ghost" href={profile.workana} target="_blank" rel="noreferrer">
            Open Workana profile
          </a>
        </div>
        <div className="hero-facts">
          <div>
            <strong>+10 years</strong>
            Flutter &amp; React
          </div>
          <div>
            <strong>5–10 years</strong>
            Python / data
          </div>
          <div>
            <strong>EN · JA · ES</strong>
            Native English
          </div>
        </div>
        <div className="terminal">
          <div>
            <b>alice@uk</b>:~$ status --verbose
          </div>
          <div className="ok">available · freelance · united kingdom</div>
          <div>stack: flutter · ios · python · react · wordpress</div>
          <div>strength: attention.toDetail()</div>
        </div>
      </div>

      <div className="portrait-wrap">
        <div className="portrait-ring" />
        <div className="portrait-bloom" />
        <div className="float-chip a">const quality = "non-negotiable"</div>
        <div className="float-chip b">flutter build --release</div>
        <div className="float-chip c">useMemo(() =&gt; craft, [care])</div>
        <figure className="portrait">
          <img
            src="/images/alice-hero.jpg"
            alt="Alice, professional IT developer based in the United Kingdom"
          />
          <figcaption className="portrait-caption">
            <span>Alice</span>
            <small>IT Developer · United Kingdom</small>
          </figcaption>
        </figure>
        <div className="cameo">
          <img src="/images/alice-avatar.png" alt="Alice's Workana portrait" />
        </div>
        <aside className="stat-card">
          <small>Freelance rate</small>
          <strong>{profile.rate}</strong>
          <div className="stat-note">Workana · {profile.level} profile</div>
        </aside>
      </div>

      <a className="scroll-cue" href="#work">
        <span />
        Selected work
      </a>
    </section>
  );
}
