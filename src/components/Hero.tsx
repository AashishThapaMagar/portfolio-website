import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { profile, stats, techTicker } from "../data";
import { Counter, GithubIcon, LinkedinIcon, Reveal } from "./ui";

/** Types a phrase, holds, deletes, then moves to the next. */
function useTypewriter(phrases: string[], enabled: boolean) {
  const [text, setText] = useState(enabled ? "" : phrases[0]);
  useEffect(() => {
    if (!enabled) return;
    let i = 0;
    let n = 0;
    let deleting = false;
    let timer = 0;
    const tick = () => {
      const phrase = phrases[i];
      n += deleting ? -1 : 1;
      setText(phrase.slice(0, n));
      let wait = deleting ? 28 : 55;
      if (!deleting && n === phrase.length) {
        deleting = true;
        wait = 1700;
      } else if (deleting && n === 0) {
        deleting = false;
        i = (i + 1) % phrases.length;
        wait = 350;
      }
      timer = window.setTimeout(tick, wait);
    };
    timer = window.setTimeout(tick, 600);
    return () => window.clearTimeout(timer);
  }, [phrases, enabled]);
  return text;
}

/** A running timecode, like the burn-in on a camera monitor. */
function Timecode() {
  const [frames, setFrames] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const id = window.setInterval(() => setFrames(Math.floor(((performance.now() - start) / 1000) * 24)), 80);
    return () => window.clearInterval(id);
  }, []);
  const pad = (v: number) => String(v).padStart(2, "0");
  const ff = frames % 24;
  const s = Math.floor(frames / 24) % 60;
  const m = Math.floor(frames / 24 / 60);
  return <span>{`${pad(m)}:${pad(s)}:${pad(ff)}`}</span>;
}

export function Hero() {
  const reduce = useReducedMotion();
  const typed = useTypewriter(profile.roles, !reduce);

  return (
    <section id="top" className="hero">
      <div className="hero-bar top" aria-hidden="true">
        <span className="rec">
          <i /> REC
        </span>
        <span>
          TC <Timecode />
        </span>
        <span className="hide-sm">SCENE 01 · INTRO</span>
      </div>

      <div className="hero-grid">
        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Software engineer · AI builder · Filmmaker
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <span>Aashish</span>
            <span className="gold">Thapa Magar</span>
          </motion.h1>

          <motion.p
            className="typed"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I build <em>{typed}</em>
            <b className="caret" aria-hidden="true" />
          </motion.p>

          <motion.p
            className="hero-text"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            Computer science senior at UNT with two years of industry experience. I built the AI tagging pipeline for an
            award-winning capstone, made a seven-fighter 3D game from scratch, and direct short films that win festivals.
          </motion.p>

          <motion.div
            className="cta-row"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a className="btn primary" href="#game">
              Watch the reel <ArrowDown size={16} />
            </a>
            <a className="btn ghost" href={profile.resume} target="_blank" rel="noreferrer">
              <Download size={16} /> Résumé
            </a>
            <a className="icon-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
          </motion.div>
        </div>

        <motion.figure
          className="frame"
          initial={reduce ? false : { opacity: 0, scale: 0.94, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <div className="sprockets" aria-hidden="true">
            {Array.from({ length: 9 }, (_, i) => (
              <i key={i} />
            ))}
          </div>
          <img src="/profile.webp" alt="Portrait of Aashish Thapa Magar" width={560} height={560} fetchPriority="high" />
          <figcaption>
            <span>ROLL 07 · FRAME 12</span>
            <span>Irving, TX</span>
          </figcaption>
          <div className="badge b1">
            <b>UNT Senior Design Award</b>
            <span>MYRA · 2026</span>
          </div>
          <div className="badge b2">
            <b>Best Micro Short Film</b>
            <span>Golden Lion · 2026</span>
          </div>
        </motion.figure>
      </div>

      <div className="hero-bar bottom" aria-hidden="true">
        <span>OPEN TO INTERNSHIPS &amp; NEW-GRAD ROLES</span>
        <span className="scroll-cue">
          SCROLL <ArrowDown size={13} />
        </span>
      </div>
    </section>
  );
}

export function Ticker() {
  const items = [...techTicker, ...techTicker];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((t, i) => (
          <span key={`${t}-${i}`}>
            {t}
            <i />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="stats" aria-label="At a glance">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08} className="stat">
          <strong>
            <Counter value={s.value} decimals={s.decimals} />
          </strong>
          <span>{s.label}</span>
          <small>{s.note}</small>
        </Reveal>
      ))}
    </section>
  );
}

export function ArrowLink({ href, children }: { href: string; children: string }) {
  return (
    <a className="arrow-link" href={href} target="_blank" rel="noreferrer">
      {children} <ArrowUpRight size={15} />
    </a>
  );
}
