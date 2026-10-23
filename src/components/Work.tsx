import { useEffect, useMemo, useState } from "react";
import { filters, projects, type Project, type ProjectCategory } from "../data/profile";

export default function Work() {
  const [active, setActive] = useState<ProjectCategory>("all");
  const [open, setOpen] = useState<Project | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const visible = useMemo(
    () => (active === "all" ? projects : projects.filter((item) => item.category === active)),
    [active],
  );

  return (
    <section className="section" id="work">
      <div className="section-head">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2>Projects built with precision.</h2>
        </div>
        <p>
          Featured pieces from my Workana portfolio — Flutter, React, Python, commerce, and the
          operational systems that sit behind a polished product.
        </p>
      </div>

      <div className="filters">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`filter${active === filter.id ? " is-on" : ""}`}
            onClick={() => setActive(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className={`work-grid${active === "all" ? "" : " is-flat"}`}>
        {visible.map((project) => (
          <article className="card" key={project.slug} onClick={() => setOpen(project)}>
            <img src={project.image} alt={project.title} />
            <div className="card-shade" />
            <div className="card-meta">
              <span className="tag">{project.accent}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </div>
          </article>
        ))}
      </div>

      {open && (
        <div className="modal" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <button className="modal-close" onClick={() => setOpen(null)} aria-label="Close">
            ×
          </button>
          <div className="modal-card" onClick={(event) => event.stopPropagation()}>
            <img src={open.image} alt={open.title} />
            <div className="modal-body">
              <span className="tag">{open.date}</span>
              <h3>{open.title}</h3>
              <p>{open.description}</p>
              <ul>
                {open.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="stack-row" style={{ marginTop: 18 }}>
                {open.stack.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
