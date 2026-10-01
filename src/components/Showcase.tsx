import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play, X } from "lucide-react";
import { useRef, useState } from "react";
import { game } from "../data";
import { ArrowLink } from "./Hero";
import { GithubIcon, Reveal, SectionHead } from "./ui";

/** The headline project: the game, shown like a film release. */
export function Showcase() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [open, setOpen] = useState<number | null>(null);

  const toggle = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section id="game" className="section showcase">
      <SectionHead
        index="01"
        label="Now playing"
        title={
          <>
            <span className="gold">Who Won?</span>
            <br />a fighting game, built from zero.
          </>
        }
        lede={game.summary}
      />

      <div className="showcase-grid">
        <Reveal className="cinema">
          <div className="cinema-frame">
            <video
              ref={video}
              src="/media/who-won-reel.mp4"
              poster="/media/who-won-reel-poster.webp"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Gameplay reel of the Who Won? fighting game"
            />
            <button className="play-toggle" onClick={toggle} aria-label={playing ? "Pause reel" : "Play reel"}>
              {playing ? <Pause size={16} /> : <Play size={16} />}
            </button>
            <span className="cinema-tag">GAMEPLAY REEL · RECORDED IN-ENGINE</span>
          </div>
        </Reveal>

        <Reveal className="showcase-copy" delay={0.1}>
          <ul className="facts">
            {game.facts.map((f) => (
              <li key={f.label}>
                <strong>{f.value}</strong>
                <span>{f.label}</span>
              </li>
            ))}
          </ul>
          <ul className="points">
            {game.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className="chips">
            {game.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
          <a className="btn primary" href={game.repo} target="_blank" rel="noreferrer">
            <GithubIcon size={16} /> View the code
          </a>
        </Reveal>
      </div>

      <Reveal className="shots" delay={0.05}>
        {game.shots.map((s, i) => (
          <button key={s.src} className="shot" onClick={() => setOpen(i)} aria-label={`Enlarge: ${s.caption}`}>
            <img src={s.src} alt={s.alt} loading="lazy" />
            <span>{s.caption}</span>
          </button>
        ))}
      </Reveal>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={game.shots[open].caption}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            onKeyDown={(e) => e.key === "Escape" && setOpen(null)}
          >
            <motion.img
              src={game.shots[open].src}
              alt={game.shots[open].alt}
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.94 }}
            />
            <button className="lightbox-close" aria-label="Close" onClick={() => setOpen(null)}>
              <X size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="showcase-foot">
        <ArrowLink href={game.repo}>Source, pipeline tools and tests on GitHub</ArrowLink>
      </p>
    </section>
  );
}
