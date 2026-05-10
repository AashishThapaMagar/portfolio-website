import { motion } from "framer-motion";
import "./App.css";

const projects = [
  {
    title: "MYRA – Personal Style Assistant",
    category: "AI Mobile App",
    description:
      "A React Native wardrobe assistant that lets users scan clothing, build a digital closet, and receive weather-aware outfit suggestions through an AI-powered backend.",
    tech: ["React Native", "Expo", "Node.js", "FastAPI", "MongoDB"],
    link: "https://github.com/cherry0722/Style-with-Ai",
  },
  {
    title: "Mantix Website – In Development",
    category: "Brand Website",
    description:
      "A developing apparel brand website focused on designed t-shirts, clean product presentation, and future AI-driven business features. The project is currently being improved through design, branding, and frontend updates.",
    tech: ["React", "Vercel", "GitHub", "Frontend", "Branding"],
    link: "https://mantix-ai-website.vercel.app/",
  },
  {
    title: "Personal Portfolio Website",
    category: "Developer Portfolio",
    description:
      "A professional portfolio website built to present my projects, technical skills, resume, and contact information for software internship and job applications.",
    tech: ["React", "TypeScript", "CSS", "Vite", "Vercel"],
    link: "#",
  },
];

const skills = [
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "React Native",
  "Expo",
  "Node.js",
  "Express",
  "FastAPI",
  "Django",
  "MongoDB",
  "Git",
  "GitHub",
  "VS Code",
  "Vercel",
];

const awards = [
  {
    title: "Senior Design Winner",
    organization: "MYRA – AI-Powered Smart Wardrobe Assistant",
    description:
      "Won Senior Design recognition for MYRA, an AI-powered smart wardrobe assistant that supports wardrobe digitization, smart outfit recommendations, weather-aware suggestions, calendar planning, and 3D avatar visualization.",
    image: "/myra-poster.png",
    type: "capstone",
  },
  {
    title: "Best Micro Short Film",
    organization: "Golden Lion International Film Festival – GLIFF Award 2026",
    description:
      "Won Best Micro Short Film for The Wait, recognizing my work in storytelling, direction, and visual presentation as an emerging filmmaker.",
    image: "/the-wait-award.jpg",
    type: "film",
  },
];

const stats = [
  { number: "3+", label: "Major Projects" },
  { number: "15+", label: "Technical Skills" },
  { number: "AI", label: "Focused Builder" },
];

export default function App() {
  return (
    <main className="site">
      <div className="background-glow one" />
      <div className="background-glow two" />

      <nav className="navbar">
        <a href="#home" className="logo">
          <span>AT</span>
          Aashish Thapa Magar
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
         <a href="#projects">Projects</a>
<a href="#awards">Awards</a>
<a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero section">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">Computer Science Student • Software Developer • Builder</p>

          <h1>
            I build software that feels clean, useful, and ready for the real world.
          </h1>

          <p className="hero-text">
            I’m Aashish Thapa Magar, a Computer Science student focused on mobile apps,
            backend systems, AI-powered applications, and practical digital products. My work
            combines engineering, design thinking, and a creator mindset.
          </p>

          <div className="button-row">
            <a className="btn primary" href="#projects">Explore My Work</a>
            <a className="btn secondary" href="/resume.pdf" target="_blank" rel="noreferrer">
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="profile-top">
          <img className="avatar-img" src="/profile.webp" alt="Aashish Thapa Magar" />
            <div>
              <h2>Aashish Thapa Magar</h2>
              <p>Software Developer Portfolio</p>
            </div>
          </div>

          <div className="status-card">
            <span className="pulse" />
            Open to software engineering, web, mobile, backend, and AI internship opportunities.
          </div>

          <div className="mini-list">
            <span>📍 Dallas / Irving, Texas</span>
            <span>🎓 Computer Science Student</span>
            <span>⚙️ React Native • Node.js • Python • MongoDB</span>
          </div>
        </motion.div>
      </section>

      <section className="stats section-small">
        {stats.map((item) => (
          <div className="stat-card" key={item.label}>
            <h3>{item.number}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      <section id="about" className="about section">
        <div>
          <p className="section-kicker">About Me</p>
          <h2>Developer mindset with creator energy.</h2>
        </div>

        <div className="about-text">
          <p>
            I am a Computer Science student with hands-on experience in software development,
            mobile applications, backend APIs, database integration, and team-based project work.
            I enjoy building products that are not only functional, but also feel clear and useful
            for real users.
          </p>

          <p>
            My technical background includes React Native, Node.js, Python, FastAPI, Django,
            MongoDB, Git, and GitHub. I am especially interested in internships where I can apply
            engineering fundamentals, learn from experienced teams, and contribute to meaningful
            software projects.
          </p>
        </div>
      </section>

      <section id="awards" className="section awards-section">
  <div className="section-heading">
    <p className="section-kicker">Awards & Recognition</p>
    <h2>
      Recognition across senior design, software development, and creative
      storytelling.
    </h2>
  </div>

  <div className="featured-awards">
    {awards.map((award) => (
      <article className={`featured-award ${award.type}`} key={award.title}>
        <div className="award-content">
          <p className="award-org">{award.organization}</p>
          <h3>{award.title}</h3>
          <p>{award.description}</p>
        </div>

        <div className="award-image-wrap">
          <img src={award.image} alt={award.title} />
        </div>
      </article>
    ))}
  </div>
</section>

  <section id="projects" className="section">
        <div className="section-heading">
          <p className="section-kicker">Selected Work</p>
          <h2>Projects that show how I think, build, and solve.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-list">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                View Project →
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-heading">
          <p className="section-kicker">Technical Toolkit</p>
          <h2>Skills I use to turn ideas into working software.</h2>
        </div>

        <div className="skills-list">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-card">
          <p className="section-kicker">Contact</p>
          <h2>Let’s build something useful.</h2>
          <p>
  I am currently open to internship opportunities related to software engineering,
  full-stack development, mobile app development, backend systems, and AI-powered products.
</p>

<p className="email-text">
  Email: aashishthapa700@gmail.com
</p>

          <div className="button-row">
            <a className="btn primary" href="mailto:your-aashishthapa700@gmail.com">Email Me</a>
            <a className="btn secondary" href="https://github.com/AashishThapaMagar" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
  className="btn secondary"
  href="https://www.linkedin.com/in/aashish-thapa-magar-09689a341/"
  target="_blank"
  rel="noreferrer"
>
  LinkedIn
</a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Aashish Thapa Magar. Designed and built for professional opportunities.</p>
      </footer>
    </main>
  );
}
