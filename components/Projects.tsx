"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { profile, projects } from "@/data/portfolio";
export function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [caseTab, setCaseTab] = useState("Overview");
  return (
    <>
      <section id="projects" className="section">
        <div className="section-heading-row">
          <div>
            <div className="eyebrow">
              <Sparkles size={15} /> {"// featured_projects"}
            </div>
            <h2>Real products. Real engineering.</h2>
          </div>
          <span className="section-command">$ ls ./projects</span>
        </div>
        <div className="filter-row" aria-label="Filter projects">
          {[
            "All",
            ...new Set(projects.flatMap((project) => project.stack)),
          ].map((tag) => (
            <button
              key={tag}
              className="pill"
              aria-pressed={filter === tag}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <p className="results-count" aria-live="polite">
          {
            projects.filter(
              (project) => filter === "All" || project.stack.includes(filter),
            ).length
          }{" "}
          projects
        </p>
        <div className="project-grid">
          {projects
            .filter(
              (project) => filter === "All" || project.stack.includes(filter),
            )
            .map((project, index) => (
              <motion.article
                key={project.name}
                className={`project-card panel ${project.accent}`}
                whileHover={{
                  y: -8,
                  rotateX: 1.5,
                  rotateY: index % 2 ? -1.5 : 1.5,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <div className="project-window">
                  <div className="window-top">
                    <span>{project.id}</span>
                    <span>•••</span>
                  </div>
                  <div className="project-visual-lines">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="project-node node-a" />
                  <div className="project-node node-b" />
                  <div className="project-node node-c" />
                </div>
                <h3>{project.name}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p>{project.description}</p>
                <div className="pill-row">
                  {project.stack.map((item) => (
                    <span className="pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <Link className="text-link" href={`/projects/${project.slug}`}>
                  Explore project <ChevronRight size={15} />
                </Link>
              </motion.article>
            ))}
        </div>
      </section>

      <section className="section case-study panel">
        <div className="case-sidebar" aria-label="Project overview sections">
          {["Overview", "Technology", "Experience"].map((tab) => (
            <button
              key={tab}
              className={caseTab === tab ? "active-file" : ""}
              aria-pressed={caseTab === tab}
              onClick={() => setCaseTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="case-main">
          <label className="eyebrow" htmlFor="case-project">
            {"// project explorer"}
          </label>
          <select
            id="case-project"
            value={selectedProject.slug}
            onChange={(event) =>
              setSelectedProject(
                projects.find(
                  (project) => project.slug === event.target.value,
                )!,
              )
            }
          >
            {projects.map((project) => (
              <option key={project.slug} value={project.slug}>
                {project.name}
              </option>
            ))}
          </select>
          <div aria-live="polite">
            <h2>{selectedProject.name}</h2>
            {caseTab === "Overview" && (
              <>
                <h3>{selectedProject.subtitle}</h3>
                <p className="section-copy">{selectedProject.description}</p>
                <Link
                  className="text-link"
                  href={`/projects/${selectedProject.slug}`}
                >
                  Explore project <ArrowRight size={15} />
                </Link>
              </>
            )}
            {caseTab === "Technology" && (
              <div className="pill-row">
                {selectedProject.stack.map((tech) => (
                  <span className="pill" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            )}
            {caseTab === "Experience" && (
              <>
                <p className="section-copy">
                  Interested in the engineering behind {selectedProject.name}?
                </p>
                <a
                  className="text-link"
                  href={`mailto:${profile.email}?subject=${encodeURIComponent(`Tell me about ${selectedProject.name}`)}`}
                >
                  Let’s discuss the project <ArrowRight size={15} />
                </a>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
