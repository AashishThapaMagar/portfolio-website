import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "../data";

const links = [
  { href: "#game", label: "Who Won?" },
  { href: "#projects", label: "Projects" },
  { href: "#story", label: "Story" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

/** Thin gold reading-progress bar along the very top. */
export function ScrollBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });
  return <motion.div className="scrollbar" style={{ scaleX }} aria-hidden="true" />;
}

/** A soft spotlight that follows the pointer on devices that have one. */
export function Spotlight() {
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce || !window.matchMedia("(pointer: fine)").matches) return;
    const root = document.documentElement;
    let frame = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--mx", `${e.clientX}px`);
        root.style.setProperty("--my", `${e.clientY}px`);
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame);
    };
  }, [reduce]);
  return <div className="spotlight" aria-hidden="true" />;
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${solid ? "solid" : ""}`}>
      <a href="#top" className="brand" aria-label="Aashish Thapa Magar, home">
        <span className="mark">
          <b>A</b>
          <b>T</b>
          <b>M</b>
          <i />
        </span>
        <span className="brand-name">Aashish Thapa Magar</span>
      </a>

      <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Primary">
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a className="nav-cta" href={profile.resume} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
          <Download size={15} /> Résumé
        </a>
      </nav>

      <button className="nav-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={open}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}
