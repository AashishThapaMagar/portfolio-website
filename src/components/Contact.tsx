import { Check, Copy, Download, Mail } from "lucide-react";
import { useState } from "react";
import { profile } from "../data";
import { GithubIcon, LinkedinIcon, Reveal } from "./ui";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="section contact">
      <Reveal>
        <p className="chapter">
          <span>05</span>
          <i aria-hidden="true" />
          Final scene
        </p>
        <h2>
          Let&rsquo;s make something <span className="gold">people remember.</span>
        </h2>
        <p className="lede">
          I&rsquo;m looking for software engineering, backend and AI internships and new-grad roles starting 2026. If
          you&rsquo;re building something ambitious, I&rsquo;d love to hear about it.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="contact-actions">
        <button className="btn primary big" onClick={copy}>
          {copied ? <Check size={18} /> : <Mail size={18} />}
          {copied ? "Email copied" : profile.email}
          {copied ? null : <Copy size={15} className="dim" />}
        </button>
        <a className="btn ghost big" href={profile.resume} target="_blank" rel="noreferrer">
          <Download size={18} /> Résumé (PDF)
        </a>
      </Reveal>

      <Reveal delay={0.16} className="socials">
        <a href={profile.github} target="_blank" rel="noreferrer">
          <GithubIcon size={20} /> GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          <LinkedinIcon size={20} /> LinkedIn
        </a>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Aashish Thapa Magar</span>
      <span className="credits">
        <i /> THE END — NOW HIRING?
      </span>
      <span>Built with React, TypeScript &amp; Vite</span>
    </footer>
  );
}
