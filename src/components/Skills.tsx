import { profile } from "../data/profile";

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-head">
        <div>
          <p className="eyebrow">Main skills</p>
          <h2>The stack I ship with.</h2>
        </div>
        <p>
          The three pillars on my Workana profile — Flutter, React, and Python — sit beside iOS,
          WordPress, and Shopify when the brief needs them.
        </p>
      </div>
      <div className="skill-grid">
        {profile.skills.map((skill, index) => (
          <article className="skill-card" key={skill.name}>
            <em>0{index + 1}</em>
            <h3>{skill.name}</h3>
            <strong>{skill.years}</strong>
            <p>{skill.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
