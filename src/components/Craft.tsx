import { profile } from "../data/profile";

export default function Craft() {
  return (
    <>
      <section className="section" id="craft">
        <div className="section-head">
          <div>
            <p className="eyebrow">Working style</p>
            <h2>Attention to detail is the point.</h2>
          </div>
          <p>
            A task is not complete because it appears to work. I want to know that it works correctly,
            that the experience is intuitive, and that the implementation can be maintained.
          </p>
        </div>
        <div className="strengths">
          {profile.strengths.map((item, index) => (
            <article className="strength" key={item.title}>
              <em>0{index + 1}</em>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="process">
        <div className="section-head">
          <div>
            <p className="eyebrow">How I work</p>
            <h2>A project starts before the first line of code.</h2>
          </div>
          <p>
            Choosing a freelancer is about finding someone who understands the need, respects your
            time, and takes responsibility for the work.
          </p>
        </div>
        <div className="process-grid">
          {profile.process.map((step) => (
            <article className="step" key={step.n}>
              <b>{step.n}</b>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <ul className="expect">
          {profile.expect.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section experience-section" id="experience">
        <p className="eyebrow">Experience</p>
        <h2 className="experience-title">History of the work.</h2>
        <div className="experience">
          <div>
            <div className="when">
              {profile.experience.start} — {profile.experience.current ? "Present" : ""}
            </div>
            <div className="experience-company">{profile.experience.company}</div>
          </div>
          <div>
            <h3>{profile.experience.position}</h3>
            <h4>{profile.tagline}</h4>
            <ul>
              {profile.experience.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
