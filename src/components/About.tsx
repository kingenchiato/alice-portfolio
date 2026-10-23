import { profile } from "../data/profile";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="about">
        <div className="about-visual">
          <img src="/images/alice-about.jpg" alt="Alice in a development studio" />
          <div className="about-note">
            <strong>27 · Female IT professional · United Kingdom</strong>
            <div className="about-note-text">
              A calm, exacting developer who treats every brief as a commitment.
            </div>
          </div>
        </div>
        <div>
          <p className="eyebrow">About me</p>
          <h2>Developer first. Then the details that make it feel finished.</h2>
          <p>
            Hello — I&apos;m Alice, a 27-year-old IT professional based in the United Kingdom. I care
            about technology that actually helps people and businesses: software that is reliable,
            practical, and professionally finished.
          </p>
          <p>
            Excellent development is not only about making something run. It is about understanding
            the client&apos;s vision, noticing the smallest inconsistencies, anticipating problems, and
            delivering work you can trust. I work across Flutter and iOS, Python, React, and
            WordPress, and I stay organized from the first conversation through testing and handover.
          </p>
          <p>
            As a woman in this industry I bring technical knowledge together with logical thinking,
            creativity, and a strong commitment to quality. My style is calm and disciplined. I like
            elegant solutions, clean presentation, and the satisfaction of knowing every reasonable
            effort has been made.
          </p>
          <blockquote className="quote">{profile.quote}</blockquote>
          <div className="lang-list">
            {profile.languages.map((lang) => (
              <div className="lang" key={lang.name}>
                <strong>{lang.name}</strong>
                <div className="bar">
                  <i style={{ width: `${lang.score}%` }} />
                </div>
                <span>{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
