import { Award, Film } from "lucide-react";
import { awards, experience, festivals, skills } from "../data";
import { Reveal, SectionHead } from "./ui";

export function Story() {
  return (
    <section id="story" className="section">
      <SectionHead
        index="03"
        label="The story so far"
        title={
          <>
            Engineer by training, <span className="gold">storyteller by habit.</span>
          </>
        }
        lede="I came to software through building things for people, and to film through telling their stories. The two feed each other: the same eye for pacing and detail shows up in how I design interfaces and games."
      />

      <div className="story-grid">
        <Reveal className="timeline">
          <h3 className="mini">Experience</h3>
          {experience.map((e) => (
            <article key={e.role} className="job">
              <i aria-hidden="true" />
              <p className="job-dates">{e.dates}</p>
              <h4>{e.role}</h4>
              <p className="job-co">
                {e.company} · {e.place}
              </p>
              <ul>
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
          <article className="job">
            <i aria-hidden="true" />
            <p className="job-dates">Expected Dec 2026</p>
            <h4>B.S. Computer Science</h4>
            <p className="job-co">University of North Texas · GPA 3.66 / 4.0</p>
          </article>
          <article className="job">
            <i aria-hidden="true" />
            <p className="job-dates">Graduated May 2024</p>
            <h4>A.S. Dallas College</h4>
            <p className="job-co">Transferred to UNT with an associate degree</p>
          </article>
        </Reveal>

        <div className="awards">
          <h3 className="mini">
            <Award size={15} /> Recognition
          </h3>
          {awards.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <article className="award">
                <img src={a.image} alt={a.alt} loading="lazy" />
                <div>
                  <p className="award-kicker">{a.kicker}</p>
                  <h4>{a.title}</h4>
                  <p>{a.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
          <Reveal delay={0.12}>
            <div className="festivals">
              <h3 className="mini">
                <Film size={15} /> On the festival circuit
              </h3>
              <ul>
                {festivals.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHead
        index="04"
        label="Toolkit"
        title={
          <>
            What I <span className="gold">work with.</span>
          </>
        }
        lede="The tools I reach for, grouped by what I use them to build."
      />
      <div className="skill-grid">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 0.06} className="skill-card">
            <h3>{g.group}</h3>
            <div className="chips">
              {g.items.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
