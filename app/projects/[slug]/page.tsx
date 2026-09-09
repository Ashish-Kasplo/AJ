import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { profile, projects } from "@/data/portfolio";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project
    ? {
        title: `${project.name} — ${profile.name}`,
        description: project.description,
      }
    : {};
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <main className="section detail-page">
      <Link className="text-link" href="/#projects">
        <ArrowLeft size={16} /> Back to projects
      </Link>
      <article className={`panel detail-card ${project.accent}`}>
        <div className="eyebrow">
          {"// projects/"}
          {project.slug}
        </div>
        <h1>{project.name}</h1>
        <h2>{project.subtitle}</h2>
        <p className="section-copy">{project.description}</p>
        <div className="project-external-links">
          {project.liveUrl && (
            <a
              className="secondary-btn"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live project <ArrowRight size={16} />
            </a>
          )}
          {project.sourceUrl && (
            <a
              className="secondary-btn"
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source code <ArrowRight size={16} />
            </a>
          )}
        </div>
        <h3>Built with</h3>
        <div className="pill-row">
          {project.stack.map((item) => (
            <span className="pill" key={item}>
              {item}
            </span>
          ))}
        </div>
        <a
          className="primary-btn"
          href={`mailto:${profile.email}?subject=${encodeURIComponent(`Tell me about ${project.name}`)}`}
        >
          Discuss this project <ArrowRight size={16} />
        </a>
      </article>
      <nav className="related-projects" aria-label="More projects">
        <h2>More projects</h2>
        {projects
          .filter((item) => item.slug !== slug)
          .map((item) => (
            <Link
              className="secondary-btn"
              key={item.slug}
              href={`/projects/${item.slug}`}
            >
              {item.name} <ArrowRight size={16} />
            </Link>
          ))}
      </nav>
    </main>
  );
}
