export const profile = {
  name: "Aashish Thapa Magar",
  email: "aashishthapa700@gmail.com",
  github: "https://github.com/AashishThapaMagar",
  linkedin: "https://www.linkedin.com/in/aashish-thapa-magar-09689a341/",
  location: "Irving, Texas",
  resume: "/Aashish_Thapa_Magar_Resume.pdf",
  roles: [
    "backend services that hold up.",
    "AI products people can use.",
    "3D games with real combat.",
    "cinematic stories on screen.",
  ],
};

export const stats = [
  { value: 3.66, decimals: 2, label: "GPA at UNT", note: "B.S. Computer Science, Dec 2026" },
  { value: 6, decimals: 0, label: "Projects shipped", note: "AI, full-stack, game and civic tech" },
  { value: 2, decimals: 0, label: "Years in industry", note: "Developer intern, Python and Java" },
  { value: 2, decimals: 0, label: "Awards won", note: "Senior Design and a film festival" },
];

export const techTicker = [
  "Python", "FastAPI", "Django", "Java", "TypeScript", "React", "Next.js", "React Native",
  "Node.js", "MongoDB", "PyTorch", "YOLO", "OpenCV", "LLMs", "Godot", "Blender", "GDScript",
  "SQLite", "Git", "Linux", "Vercel", "DaVinci Resolve",
];

export const game = {
  title: "Who Won?",
  tagline: "A 3D fighting game from Nepal's streets to the ring.",
  repo: "https://github.com/AashishThapaMagar/Who-Won",
  summary:
    "A fighting game I designed and built end to end: seven playable fighters, Tekken-style four-button combos, a cinematic story mode set in Nepal, and a custom pipeline that turns AI-generated characters into fully rigged, animated fighters.",
  points: [
    "Four-button combat (left/right punch, left/right kick) with per-fighter move tables, strings, launchers, finishers and frame-timed hit detection.",
    "Python + Blender pipeline: auto-rigs characters onto a shared skeleton, cleans skin weights, closes fists and exports T-poses for Mixamo animation packs.",
    "Profiled the renderer on integrated graphics and doubled the frame rate, from about 25 to 50 FPS, by trading MSAA for FXAA and simplifying scenery.",
    "29 automated test suites cover combat, combos, UI flow, story mode and the arenas.",
  ],
  facts: [
    { value: "7", label: "fighters" },
    { value: "4", label: "button combos" },
    { value: "50", label: "FPS on integrated GPU" },
    { value: "29", label: "test suites" },
  ],
  stack: ["Godot 4", "GDScript", "Blender", "Python", "Mixamo", "Git"],
  shots: [
    { src: "/media/ww-combo.webp", alt: "Who Won? combo counter during a fight", caption: "Combo counter" },
    { src: "/media/ww-ko.webp", alt: "Who Won? knockout burst", caption: "K.O. burst" },
    { src: "/media/ww-vs.webp", alt: "Who Won? versus intro card", caption: "VS intro" },
    { src: "/media/ww-select.webp", alt: "Who Won? character select", caption: "Character select" },
  ],
};

export type Project = {
  title: string;
  kind: "AI" | "Full-stack" | "Civic tech";
  year: string;
  blurb: string;
  highlights: string[];
  stack: string[];
  links: { label: string; href: string }[];
  image?: string;
  featured?: boolean;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "MYRA — AI Wardrobe Assistant",
    kind: "AI",
    year: "2026",
    blurb:
      "Capstone that digitizes your closet and plans outfits from weather and calendar, with an AI tagging pipeline and 3D avatar try-on.",
    highlights: [
      "UNT Senior Design Award, 4-person team (QuadNet), sponsored by Dr. Stephanie Ludi.",
      "Computer-vision and LLM pipeline tags uploaded clothing automatically.",
      "React Native app, Node and FastAPI services, MongoDB Atlas, Cloudflare R2.",
    ],
    stack: ["React Native", "FastAPI", "Node.js", "MongoDB", "OpenAI"],
    links: [{ label: "Code", href: "https://github.com/cherry0722/Style-with-Ai" }],
    image: "/media/myra-poster.webp",
    featured: true,
    accent: "#f2b84b",
  },
  {
    title: "FlashFlood Watch",
    kind: "Civic tech",
    year: "2026",
    blurb:
      "A real-time flash-flood early-warning system on free public data. Alerts fire on how fast a river is rising, not only how high it is.",
    highlights: [
      "Polls USGS and Nepal DHM gauges; WATCH, WARNING and EMERGENCY levels from stage and rate of rise.",
      "Exports CAP 1.2 alerts and ships a FastAPI + Leaflet dashboard with an authorized manual-alert endpoint.",
      "Live on Render, with tests running in GitHub Actions.",
    ],
    stack: ["Python", "FastAPI", "SQLite", "APScheduler", "Leaflet"],
    links: [
      { label: "Live demo", href: "https://flashflood-watch.onrender.com" },
      { label: "Code", href: "https://github.com/AashishThapaMagar/flashflood-watch" },
    ],
    accent: "#4cc3ff",
  },
  {
    title: "Soccer Video Understanding",
    kind: "AI",
    year: "2025",
    blurb:
      "Detects players, goalkeepers, referees and the ball in match footage, builds a per-second timeline, and answers questions about the game with a local LLM.",
    highlights: [
      "Fine-tuned a YOLO model on 372 images: 0.95 mAP@50 for players, 0.66 overall, about 20 ms a frame.",
      "Llama 3.2 on Ollama answers questions about the timeline, fully offline.",
      "Trained on a single GTX 1650; limits and lessons documented.",
    ],
    stack: ["Python", "PyTorch", "YOLO", "OpenCV", "Ollama"],
    links: [{ label: "Code", href: "https://github.com/AashishThapaMagar/video-understanding" }],
    accent: "#5be3a0",
  },
  {
    title: "Mantix — AI Try-On Storefront",
    kind: "Full-stack",
    year: "2025",
    blurb: "A streetwear storefront with an AI virtual try-on powered by fal.ai, deployed on Vercel.",
    highlights: ["Next.js storefront with clean product presentation.", "Virtual try-on generated with fal.ai."],
    stack: ["Next.js", "TypeScript", "fal.ai", "Vercel"],
    links: [
      { label: "Live site", href: "https://mantix-ai-website.vercel.app/" },
      { label: "Code", href: "https://github.com/AashishThapaMagar/mantix-website" },
    ],
    accent: "#ff7a59",
  },
  {
    title: "Echoes — Ambient AI",
    kind: "AI",
    year: "2026",
    blurb: "Describe a feeling and Echoes turns it into a cinematic video with ambient audio.",
    highlights: ["React and Vite front end with an Express API.", "Kling AI video generation and Web Audio API sound design."],
    stack: ["React", "Vite", "Express", "Kling AI", "Web Audio"],
    links: [{ label: "Code", href: "https://github.com/AashishThapaMagar/Echoes" }],
    accent: "#b18cff",
  },
  {
    title: "UNT Degree Audit",
    kind: "Full-stack",
    year: "2026",
    blurb:
      "A student-built proposal to modernize degree audits for UNT's 46,000+ students: a visual player card, an AI advisor and a MyUNT portal mockup.",
    highlights: ["From weekend prototype to advising workspace with notes and downloadable summaries."],
    stack: ["JavaScript", "HTML/CSS", "Claude API"],
    links: [{ label: "Code", href: "https://github.com/AashishThapaMagar/UNT-degree-audit" }],
    accent: "#7bd88f",
  },
];

export const experience = [
  {
    role: "Software Developer Intern",
    company: "Visa Success Connect Pvt. Ltd.",
    place: "Kathmandu, Nepal",
    dates: "Jan 2021 – Jan 2023",
    points: [
      "Built and maintained backend services in Python and Java that streamlined client data management.",
      "Shipped full-stack web features with a cross-functional team, lifting client engagement by 25%.",
      "Debugged and optimized legacy code, cutting system errors by 15%.",
    ],
  },
];

export const awards = [
  {
    kicker: "University of North Texas · 2026",
    title: "Senior Design Award",
    text: "For MYRA, the AI-powered smart wardrobe assistant built by team QuadNet.",
    image: "/media/myra-poster.webp",
    alt: "The MYRA senior design poster",
    wide: true,
  },
  {
    kicker: "Golden Lion International Film Festival · 2026",
    title: "Best Micro Short Film",
    text: "Winner for The Wait, a short film I directed and edited.",
    image: "/media/the-wait.webp",
    alt: "Golden Lion International Film Festival certificate for The Wait",
    wide: false,
  },
];

export const festivals = [
  "CKF International Film Festival — Official Selection",
  "Lift-Off First-Time Filmmaker Sessions, Vol. 11 — Official Selection",
  "Directed and edited short films end to end; edit and colour grade in DaVinci Resolve",
];

export const skills = [
  { group: "Languages", items: ["Python", "Java", "TypeScript", "JavaScript", "GDScript", "C / C++", "SQL"] },
  { group: "Backend & APIs", items: ["FastAPI", "Django", "Node.js", "Express", "REST", "MongoDB", "SQLite"] },
  { group: "Frontend & Mobile", items: ["React", "Next.js", "React Native", "Vite", "HTML / CSS"] },
  { group: "AI & Vision", items: ["YOLO", "OpenCV", "PyTorch", "LLM integration", "Ollama", "Prompt engineering"] },
  { group: "Tools & Platforms", items: ["Git / GitHub", "GitHub Actions", "Linux / WSL2", "Vercel", "Render", "VS Code"] },
  { group: "Games & Creative", items: ["Godot", "Blender", "Mixamo", "Directing", "DaVinci Resolve", "Colour grading"] },
];
