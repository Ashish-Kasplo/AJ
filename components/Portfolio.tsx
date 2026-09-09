"use client";

import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/Projects";
import { scrollToSection } from "@/lib/navigation";
import { useTheme } from "@/components/Providers";
import { Dialog } from "@/components/Dialog";
import {
  profile,
  navItems,
  experience,
  skillGroups,
  articles,
  heroWords,
  stats,
  about,
} from "@/data/portfolio";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Command,
  Menu,
  Moon,
  Send,
  Sun,
  Terminal,
  X,
  Zap,
} from "lucide-react";

export default function Portfolio() {
  const { theme, changeTheme } = useTheme();
  const reducedMotion = useReducedMotion();
  const [query, setQuery] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const [years, setYears] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 24,
    mass: 0.3,
  });

  useEffect(() => {
    setYears(
      (
        Math.floor(
          ((Date.now() - Date.parse(profile.careerStart)) / 86400000 / 365.25) *
            10,
        ) / 10
      ).toFixed(1),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActiveSection(entry.target.id);
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    navItems.forEach((item) => {
      const section = document.getElementById(item.toLowerCase());
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((value) => !value);
      }
      if (event.key === "Escape") {
        setMenuOpen(false);
        setPaletteOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const [heroWord, setHeroWord] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(
      () => setHeroWord((value) => (value + 1) % heroWords.length),
      2400,
    );
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  return (
    <main className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-overlay" />

      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <header className="nav-wrap">
        <div className="nav panel">
          <button
            className="brand"
            onClick={() => scrollToSection("Home")}
            aria-label="Go home"
          >
            AJ
          </button>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                aria-current={
                  activeSection === item.toLowerCase() ? "location" : undefined
                }
              >
                <span>0{index + 1}.</span> {item}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <a href="#contact" className="availability">
              <span className="status-dot" />{" "}
              {profile.available ? "Available" : "Let’s connect"}
            </a>
            <button
              className="icon-btn"
              onClick={() => setPaletteOpen(true)}
              aria-label="Open command palette"
            >
              <Command size={17} />
            </button>
            <button
              className="icon-btn"
              onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              className="icon-btn mobile-only"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      <section id="home" className="hero section" tabIndex={-1}>
        <div className="hero-copy">
          <motion.div
            className="eyebrow"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Terminal size={15} /> {"// frontend engineer"}
          </motion.div>
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
          >
            <span className="code-muted">const ashish = &#123;</span>
            <br />
            <span className="indent">turnIdeasInto(</span>
            <br />
            <span className="hero-highlight indent-lg">
              “{heroWords[heroWord]}”
            </span>
            <span className="cursor">|</span>
            <br />
            <span className="indent">);</span>
            <br />
            <span className="code-muted">&#125;;</span>
          </motion.h1>
          <motion.p
            className="hero-description"
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Building scalable, high-performance web applications with React,
            Next.js and TypeScript — with a focus on architecture, workflow
            systems, real-time UX and product quality.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58 }}
          >
            <button
              className="primary-btn"
              onClick={() => scrollToSection("Projects")}
            >
              View my work <ArrowRight size={17} />
            </button>
            <button
              className="secondary-btn"
              onClick={() => scrollToSection("Contact")}
            >
              Let&apos;s connect <Send size={16} />
            </button>
          </motion.div>
          <div className="stats-grid">
            {[
              { value: years ? `${years}+` : "—", label: "Years Experience" },
              ...stats,
            ].map(({ value, label }) => {
              return (
                <div key={label} className="stat">
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <motion.div
          className="hero-visual panel"
          initial={false}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.42, duration: 0.8 }}
        >
          <div className="editor-tabs">
            <span className="active-tab">portfolio.tsx</span>
            <span>+</span>
          </div>
          <div className="editor-body">
            <div className="line">
              <span>01</span>
              <code>
                <b>import</b> Developer <b>from</b> <i>&quot;@/ashish&quot;</i>;
              </code>
            </div>
            <div className="line">
              <span>02</span>
              <code />
            </div>
            <div className="line">
              <span>03</span>
              <code>
                <b>const</b> developer = &#123;
              </code>
            </div>
            <div className="line">
              <span>04</span>
              <code>
                &nbsp;&nbsp;name: <i>&quot;{profile.name}&quot;</i>,
              </code>
            </div>
            <div className="line">
              <span>05</span>
              <code>
                &nbsp;&nbsp;role: <i>&quot;{profile.role}&quot;</i>,
              </code>
            </div>
            <div className="line">
              <span>06</span>
              <code>
                &nbsp;&nbsp;focus: [<i>&quot;Architecture&quot;</i>,{" "}
                <i>&quot;Performance&quot;</i>],
              </code>
            </div>
            <div className="line">
              <span>07</span>
              <code>
                &nbsp;&nbsp;builds: <i>&quot;Complex SaaS&quot;</i>,
              </code>
            </div>
            <div className="line">
              <span>08</span>
              <code>&#125;;</code>
            </div>
            <div className="line">
              <span>09</span>
              <code />
            </div>
            <div className="line">
              <span>10</span>
              <code>
                <em>{"// currently building things that scale"}</em>
              </code>
            </div>
          </div>
          <div className="terminal-panel">
            <div>
              <span className="terminal-symbol">$</span> npm run dev
            </div>
            <div className="terminal-success">✓ Ready on localhost:3000</div>
          </div>
          <motion.div
            className="floating-badge badge-one"
            animate={reducedMotion ? {} : { y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3.5 }}
          >
            <Code2 size={16} /> React
          </motion.div>
          <motion.div
            className="floating-badge badge-two"
            animate={reducedMotion ? {} : { y: [0, 9, 0] }}
            transition={{ repeat: Infinity, duration: 4.2 }}
          >
            <Zap size={16} /> Performance
          </motion.div>
        </motion.div>
      </section>

      <section id="about" className="section section-grid">
        <div>
          <div className="eyebrow">
            <Code2 size={15} /> {"// about.me"}
          </div>
          <h2>More than just code.</h2>
          <p className="section-copy">{about.description}</p>
          <div className="pill-row">
            {about.interests.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="about-card panel">
          <div className="avatar-shell">
            <div className="avatar-monogram">AJ</div>
          </div>
          <div className="about-code">
            <span>const</span> currentlyExploring = [<br />
            {about.exploring.map((item) => (
              <span className="exploring-item" key={item}>
                &nbsp;&nbsp;&quot;{item}&quot;,
                <br />
              </span>
            ))}
            ];
          </div>
        </div>
      </section>

      <Projects />

      <section id="experience" className="section section-grid experience-grid">
        <div>
          <div className="eyebrow">
            <Terminal size={15} /> {"// experience"}
          </div>
          <h2>git log --career</h2>
          <p className="section-copy">
            Career progression visualized as commits, not a generic timeline.
          </p>
        </div>
        <div className="git-log">
          {experience.map((item, index) => (
            <motion.div
              className="commit"
              key={item.date}
              initial={false}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="commit-dot" />
              <div className="commit-body">
                <span className="commit-date">{item.date}</span>
                <h3>{item.role}</h3>
                <strong>{item.company}</strong>
                {item.bullets.map((bullet) => (
                  <p key={bullet}>+ {bullet}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="eyebrow">
          <Code2 size={15} /> {"// skills"}
        </div>
        <h2>npm list --depth=0</h2>
        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div className="skill-panel panel" key={i}>
              {group.map((skill) => (
                <motion.span key={skill} whileHover={{ scale: 1.05, x: 4 }}>
                  {skill}
                  <small> installed ✓</small>
                </motion.span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="blog" className="section">
        <div className="section-heading-row">
          <div>
            <div className="eyebrow">{"// dev-notes"}</div>
            <h2>Sharing what I learn.</h2>
          </div>
          <span className="section-command">$ cat ./writing</span>
        </div>
        <div className="article-grid">
          {articles.map((article, index) => (
            <motion.article
              className="article-card panel"
              key={article.title}
              whileHover={{ y: -5 }}
            >
              <span>0{index + 1}.md</span>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              {article.url ? (
                <a
                  className="text-link"
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read article <ArrowRight size={15} />
                </a>
              ) : (
                <span className="draft-label">Planned article</span>
              )}
            </motion.article>
          ))}
        </div>
      </section>

      <Contact />

      <Footer />

      <Dialog
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        label="Navigation"
        className="mobile-dialog"
      >
        <div className="mobile-menu-head">
          <span className="brand">AJ</span>
          <button
            className="icon-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation"
          >
            <X size={18} />
          </button>
        </div>
        <nav className="dialog-nav">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </Dialog>
      <Dialog
        open={paletteOpen}
        onClose={() => {
          setPaletteOpen(false);
          setQuery("");
        }}
        label="Quick navigation"
        className="command-palette"
      >
        <div className="palette-search">
          <Command size={16} />
          <input
            autoFocus
            aria-label="Search sections"
            placeholder="Search sections…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button
            className="icon-btn"
            onClick={() => setPaletteOpen(false)}
            aria-label="Close command palette"
          >
            <X size={16} />
          </button>
        </div>
        <div className="dialog-nav">
          {navItems
            .filter((item) =>
              item.toLowerCase().includes(query.trim().toLowerCase()),
            )
            .map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => {
                  setPaletteOpen(false);
                  setQuery("");
                }}
              >
                /{item.toLowerCase()} <ArrowRight size={14} />
              </a>
            ))}
        </div>
        {!navItems.some((item) =>
          item.toLowerCase().includes(query.trim().toLowerCase()),
        ) && (
          <p className="empty-state" role="status">
            No sections found. Try “projects” or “contact”.
          </p>
        )}
      </Dialog>
    </main>
  );
}
