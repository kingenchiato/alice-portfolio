import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section className="cta" id="contact">
      <div className="cta-panel">
        <p className="eyebrow">Let&apos;s work together</p>
        <h2>Bring the idea. I&apos;ll handle the details.</h2>
        <p>
          Share your objectives, the main features, your timeline, and any references you already
          have. I will clarify scope, deliverables, and schedule before we begin, so we move forward
          with the same picture of the work.
        </p>
        <div className="cta-actions">
          <a className="btn btn-primary" href={profile.workana} target="_blank" rel="noreferrer">
            Contact Alice on Workana
          </a>
          <a className="btn btn-ghost" href="#work">
            Review the portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
