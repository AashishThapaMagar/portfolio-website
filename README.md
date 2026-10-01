# Aashish Thapa Magar — Portfolio

A cinematic, single-page portfolio built with React, TypeScript, Vite and Framer Motion.

**Sections:** hero with live timecode and typewriter, tech ticker, animated stats, the *Who Won?* game showcase
(in-engine gameplay reel and screenshots), filterable project cards, experience / education / awards, skills, contact.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run lint
```

## Where things live

| Path | What |
| --- | --- |
| `src/data.ts` | All content: projects, stats, awards, skills. Edit this to update the site. |
| `src/components/` | Hero, Showcase, Projects, Story, Contact and shared UI. |
| `src/styles.css` | Design tokens and styles (gold / crimson on near-black, Anton + Inter). |
| `public/media/` | Optimized images and the gameplay reel. |
| `resume/resume.html` | Source of the one-page résumé. Print it to PDF (Letter, no headers) and save it as `public/Aashish_Thapa_Magar_Resume.pdf`. |

Motion respects `prefers-reduced-motion`; the layout is responsive down to phone widths.
