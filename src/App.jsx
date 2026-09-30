import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Globe,
  Mail,
  Menu,
  Smartphone,
  X,
} from "lucide-react";
import "./index.css";

const projects = [
  {
    title: "JMS Study",
    category: "Education Platform",
    image: "/projects/jms-study.jpeg",
    description:
      "A focused learning platform for Class 9 & 10 students with notes, previous-year papers, test series and study resources.",
    tech: ["React", "JavaScript", "Firebase", "PWA"],
    live: "https://jmsstudy.site",
    featured: true,
  },
  {
    title: "Stylish Khata",
    category: "Android Application",
    image: "/projects/stylish-khata.jpeg",
    description:
      "A digital ledger experience for managing customers, transactions, dues and account records from one place.",
    tech: ["Kotlin", "Android", "Firebase"],
  },
  {
    title: "Student Companion",
    category: "Student Productivity",
    image: "/projects/student-companion.jpeg",
    description:
      "An all-in-one study companion for planning, practice, learning tools, quizzes and everyday student productivity.",
    tech: ["Android", "Kotlin", "Jetpack Compose"],
  },
  {
    title: "Automatic LPG Detection",
    category: "IoT & Safety System",
    image: "/projects/lpg-detection.jpeg",
    description:
      "An IoT safety system that detects LPG leakage and flame, triggers local alerts and sends remote notifications.",
    tech: ["ESP8266", "MQ-2", "IoT", "Telegram"],
  },
  {
    title: "MediKiosk",
    category: "Healthcare Technology",
    image: "/projects/medikiosk.jpeg",
    description:
      "A healthcare workflow platform connecting patient, doctor and staff experiences through a structured digital interface.",
    tech: ["React", "Vite", "AI/ML", "Node.js"],
  },
];

const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "HTML", "CSS", "Vite"],
  },
  {
    title: "Backend & Data",
    items: ["Node.js", "Express", "Firebase", "MongoDB"],
  },
  {
    title: "Mobile",
    items: ["Kotlin", "Android", "Jetpack Compose"],
  },
  {
    title: "Tools & Core",
    items: ["C", "Git", "GitHub"],
  },
];

const journey = [
  {
    date: "2026 — Present",
    title: "B.Tech — Computer Science Engineering",
    text: "Building deeper foundations in software engineering, databases, web development and modern application architecture.",
  },
  {
    date: "2023 — 2026",
    title: "Diploma — Mechanical Engineering",
    text: "Government Polytechnic Chhapra. Completed the diploma with hands-on engineering and project experience.",
  },
  {
    date: "2025 — Present",
    title: "Software & App Development",
    text: "Building practical projects across React, Android, Firebase, Node.js, IoT and AI-assisted workflows.",
  },
];

function BrandIcon({ type }) {
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .7a11.3 11.3 0 0 0-3.58 22.02c.57.1.78-.25.78-.55v-2.13c-3.18.69-3.85-1.34-3.85-1.34-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.54-.29-5.2-1.27-5.2-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.03 0 0 .96-.31 3.12 1.17A10.9 10.9 0 0 1 12 6.05c.97 0 1.95.13 2.86.38 2.16-1.48 3.12-1.17 3.12-1.17.62 1.57.23 2.74.11 3.03.73.8 1.18 1.82 1.18 3.07 0 4.4-2.67 5.36-5.22 5.64.41.35.78 1.04.78 2.1v3.12c0 .3.21.66.79.55A11.3 11.3 0 0 0 12 .7Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {type === "linkedin" ? (
        <path
          fill="currentColor"
          d="M5.04 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 .04-5ZM2.8 9.75h4.45V21H2.8V9.75Zm7.2 0h4.27v1.54h.06c.59-1.12 2.04-2.3 4.2-2.3 4.49 0 5.32 2.95 5.32 6.78V21h-4.44v-4.64c0-1.11-.02-2.54-1.55-2.54-1.56 0-1.8 1.21-1.8 2.46V21H10V9.75Z"
        />
      ) : (
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          d="M7.4 2.8h9.2A4.6 4.6 0 0 1 21.2 7.4v9.2a4.6 4.6 0 0 1-4.6 4.6H7.4a4.6 4.6 0 0 1-4.6-4.6V7.4a4.6 4.6 0 0 1 4.6-4.6Z"
        />
      )}
      {type === "instagram" && (
        <>
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="17.5" cy="6.7" r="1" fill="currentColor" />
        </>
      )}
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <Navbar open={menuOpen} setOpen={setMenuOpen} closeMenu={closeMenu} />

      <main>
        <section className="hero section" id="home">
          <div className="hero-content reveal-up">
            <p className="eyebrow">HELLO, I'M ANIKET RAJ <span>✦</span></p>
            <h1>
              I build <span>web & mobile</span> experiences that feel useful.
            </h1>
            <p className="hero-description">
              Computer Science Engineering student and developer focused on
              building practical web apps, mobile products and intelligent
              digital solutions.
            </p>

            <div className="hero-meta">
              <span><i></i> Open to learning & building</span>
              <span>Based in Bihar, India</span>
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary">
                Explore Projects <ArrowUpRight size={18} />
              </a>
              <a href="mailto:raj051635@gmail.com" className="btn secondary">
                <Mail size={18} /> Contact Me
              </a>
            </div>

            <div className="socials" aria-label="Social links">
              <SocialLink href="https://jmsstudy.site" label="Website"><Globe size={19} /></SocialLink>
              <SocialLink href="https://www.instagram.com/call_me_mr_aniket/" label="Instagram"><BrandIcon type="instagram" /></SocialLink>
              <SocialLink href="https://www.instagram.com/jmsstudy_app/" label="JMS Study Instagram"><BrandIcon type="instagram" /></SocialLink>
              <SocialLink href="https://www.linkedin.com/in/aniket-raj-679644435/" label="LinkedIn"><BrandIcon type="linkedin" /></SocialLink>
              <SocialLink href="https://github.com/" label="GitHub"><BrandIcon type="github" /></SocialLink>
            </div>
          </div>

          <div className="hero-visual reveal-scale">
            <div className="hero-orbit orbit-one"></div>
            <div className="hero-orbit orbit-two"></div>
            <div className="glow"></div>

            <div className="profile-card">
              <div className="profile-image">
                <img src="/profile.jpeg" alt="Aniket Raj" />
                <div className="profile-badge">AVAILABLE TO BUILD</div>
              </div>
              <div className="profile-info">
                <div>
                  <strong>Aniket Raj</strong>
                  <span>Developer · Builder · Learner</span>
                </div>
                <ArrowUpRight size={18} />
              </div>
            </div>

            <div className="floating-card card-one"><Code2 size={17} /><span>Clean Code</span></div>
            <div className="floating-card card-two"><Globe size={17} /><span>Web Development</span></div>
            <div className="floating-card card-three"><Smartphone size={17} /><span>App Development</span></div>
          </div>

          <a className="scroll-hint" href="#about">
            <span>Scroll to explore</span><ArrowDown size={15} />
          </a>
        </section>

        <section className="section about" id="about">
          <SectionHeading number="01" title="About Me" />
          <div className="about-grid">
            <div>
              <h2 className="display-copy">
                Turning ideas into <span>working products.</span>
              </h2>
              <div className="stats-grid">
                <Stat value="05+" label="Projects" />
                <Stat value="04" label="Development Areas" />
                <Stat value="2026" label="B.Tech Journey" />
              </div>
            </div>
            <div className="about-copy">
              <p>
                I'm Aniket Raj, a Computer Science Engineering student who likes
                turning ideas into practical software.
              </p>
              <p>
                I work across web development, Android apps, IoT and AI-assisted
                products. My goal is simple: build things that are useful,
                understandable and pleasant to use.
              </p>
              <a className="text-link" href="#projects">See what I've built <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <SectionHeading number="02" title="Skills & Technologies" />
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <div className="skill-group-title"><Code2 size={16} /> {group.title}</div>
                <div className="skill-pills">
                  {group.items.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <SectionHeading number="03" title="Selected Projects" />

          <div className="featured-project">
            <div className="featured-image-wrap" onClick={() => setSelectedProject(projects[0])} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && setSelectedProject(projects[0])}>
              <img src={projects[0].image} alt="JMS Study project preview" />
              <div className="image-overlay"><span>View full preview</span><ArrowUpRight size={18} /></div>
            </div>
            <div className="featured-content">
              <div className="project-kicker"><span>01</span> FEATURED PROJECT</div>
              <h3>JMS Study</h3>
              <p>{projects[0].description}</p>
              <div className="tech-list">
                {projects[0].tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <div className="featured-actions">
                <a className="btn primary small" href={projects[0].live} target="_blank" rel="noreferrer">Open Website <ArrowUpRight size={16} /></a>
                <button className="btn ghost small" onClick={() => setSelectedProject(projects[0])}>View Preview <ExternalLink size={16} /></button>
              </div>
            </div>
          </div>

          <div className="projects-grid">
            {projects.slice(1).map((project, index) => (
              <ProjectCard key={project.title} project={project} number={String(index + 2).padStart(2, "0")} onOpen={() => setSelectedProject(project)} />
            ))}
          </div>
        </section>

        <section className="section journey-section" id="experience">
          <SectionHeading number="04" title="Education & Journey" />
          <div className="timeline">
            {journey.map((item) => (
              <div className="timeline-item" key={item.title}>
                <span className="timeline-date">{item.date}</span>
                <div className="timeline-content">
                  <span className="timeline-dot"></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-box">
            <div className="contact-glow"></div>
            <span className="eyebrow">LET'S CONNECT</span>
            <h2>Have an idea?<br /><span>Let's build it.</span></h2>
            <p>I'm always interested in learning, building and working on meaningful projects.</p>
            <div className="contact-actions">
              <a href="mailto:raj051635@gmail.com" className="btn primary">Get In Touch <Mail size={18} /></a>
              <a href="https://www.linkedin.com/in/aniket-raj-679644435/" target="_blank" rel="noreferrer" className="btn secondary">Connect on LinkedIn <ArrowUpRight size={18} /></a>
            </div>
            <div className="contact-email">raj051635@gmail.com</div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><strong>ANIKET RAJ<span>.</span></strong><small>Developer · CSE Student</small></div>
        <div className="footer-links">
          <a href="#home">Back to top</a>
          <a href="https://jmsstudy.site" target="_blank" rel="noreferrer">JMS Study</a>
          <a href="mailto:raj051635@gmail.com">Email</a>
        </div>
        <p>© 2026 Aniket Raj</p>
      </footer>

      {selectedProject && (
        <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && setSelectedProject(null)}>
          <div className="project-modal" role="dialog" aria-modal="true" aria-label={selectedProject.title}>
            <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close preview"><X size={20} /></button>
            <div className="modal-image"><img src={selectedProject.image} alt={`${selectedProject.title} full preview`} /></div>
            <div className="modal-details">
              <span className="project-kicker">{selectedProject.category}</span>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
              <div className="tech-list">{selectedProject.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
              {selectedProject.live && <a className="btn primary small" href={selectedProject.live} target="_blank" rel="noreferrer">Open Live Project <ArrowUpRight size={16} /></a>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Navbar({ open, setOpen, closeMenu }) {
  return (
    <header className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>AR<span>.</span></a>
      <nav className={open ? "nav-open" : ""}>
        {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase() === "experience" ? "experience" : item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
        ))}
      </nav>
      <a href="#contact" className="nav-button" onClick={closeMenu}>Let's Talk <ArrowUpRight size={16} /></a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X size={22} /> : <Menu size={22} />}</button>
    </header>
  );
}

function SectionHeading({ number, title }) {
  return <div className="section-heading"><span>{number}</span><h2>{title}</h2></div>;
}

function Stat({ value, label }) {
  return <div className="stat"><strong>{value}</strong><span>{label}</span></div>;
}

function SocialLink({ href, label, children }) {
  return <a href={href} target="_blank" rel="noreferrer" title={label} aria-label={label}>{children}</a>;
}

function ProjectCard({ project, number, onOpen }) {
  return (
    <article className="project-card">
      <button className="project-image-button" onClick={onOpen} aria-label={`View ${project.title} preview`}>
        <div className="project-image"><img src={project.image} alt={`${project.title} project preview`} /><span>View preview <ArrowUpRight size={16} /></span></div>
      </button>
      <div className="project-top"><span className="project-number">{number}</span><button className="icon-button" onClick={onOpen} aria-label={`Open ${project.title}`}><ExternalLink size={18} /></button></div>
      <span className="project-category">{project.category}</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tech-list">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
    </article>
  );
}

export default App;
