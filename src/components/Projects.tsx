import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState, type PointerEvent } from "react";
import { profile, projects, type Project } from "../data";
import { GithubIcon, SectionHead } from "./ui";

const filters = ["All", "AI", "Full-stack", "Civic tech"] as const;
type Filter = (typeof filters)[number];

/** Card with a spotlight that tracks the pointer across its surface. */
function Card({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--px", `${e.clientX - r.left}px`);
    el.style.setProperty("--py", `${e.clientY - r.top}px`);
  };

  return (
    <motion.article
      ref={ref}
      layout={!reduce}
      className={`card ${project.featured ? "featured" : ""}`}
      style={{ "--accent": project.accent } as React.CSSProperties}
      onPointerMove={onMove}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.07 }}
    >
      {project.image ? (
        <div className="card-media">
          <img src={project.image} alt={`${project.title} poster`} loading="lazy" />
        </div>
      ) : null}

      <div className="card-body">
        <div className="card-meta">
          <span className="kind">{project.kind}</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="blurb">{project.blurb}</p>
        <ul>
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        <div className="chips">
          {project.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <div className="card-links">
          {project.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
              {l.label === "Code" ? <GithubIcon size={15} /> : <ArrowUpRight size={15} />}
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const shown = projects.filter((p) => filter === "All" || p.kind === filter);

  return (
    <section id="projects" className="section">
      <SectionHead
        index="02"
        label="Selected work"
        title={
          <>
            Things I built to <span className="gold">solve real problems.</span>
          </>
        }
        lede="From a flood-warning system for Nepal to an AI wardrobe that won Senior Design. Each one shipped, runs, and has code you can read."
      />

      <div className="filters" role="tablist" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            className={filter === f ? "on" : ""}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid">
        <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <Card key={p.title} project={p} index={i} />
          ))}
        </AnimatePresence>
        {filter === "All" ? (
          <a className="more-card" href={profile.github} target="_blank" rel="noreferrer">
            <GithubIcon size={30} />
            <strong>More on GitHub</strong>
            <span>Every project here is open source. See the rest of what I&rsquo;m building.</span>
            <ArrowUpRight size={22} />
          </a>
        ) : null}
      </div>
    </section>
  );
}
