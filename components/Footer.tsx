"use client";
import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile, projects } from "@/data/portfolio";
import { useTheme } from "@/components/Providers";
import { scrollToSection } from "@/lib/navigation";
export function Footer() {
  const { changeTheme } = useTheme();
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "Type `help` to explore the portfolio.",
  ]);

  const runCommand = (event: FormEvent) => {
    event.preventDefault();
    const command = terminalInput.trim().toLowerCase();
    if (!command) return;

    const commandMap: Record<string, string> = {
      help: "Commands: about, projects, experience, resume, github, linkedin, theme light, theme dark, clear",
      about:
        "Frontend Engineer focused on architecture, complex SaaS, workflow systems and performance.",
      projects: projects.map((project) => project.name).join(" · "),
      experience:
        "Software Engineer → Junior Software Engineer → Software Intern",
      resume:
        profile.resume ||
        "Resume available on request. Use the contact section.",
      github: profile.github || "GitHub profile has not been shared yet.",
      linkedin: profile.linkedin || "LinkedIn profile has not been shared yet.",
      "theme light": "Switching to editor mode... ✓",
      "theme dark": "Switching to terminal mode... ✓",
    };

    if (command === "clear") {
      setTerminalOutput([]);
    } else {
      if (command === "theme light") changeTheme("light");
      if (command === "theme dark") changeTheme("dark");
      if (["about", "projects", "experience"].includes(command))
        scrollToSection(command);
      const link =
        command === "resume"
          ? profile.resume
          : command === "github"
            ? profile.github
            : command === "linkedin"
              ? profile.linkedin
              : "";
      if (link) window.open(link, "_blank", "noopener,noreferrer");
      setTerminalOutput((prev) => [
        ...prev.slice(-98),
        `$ ${terminalInput}`,
        commandMap[command] ?? `command not found: ${command}`,
      ]);
    }
    setTerminalInput("");
  };

  return (
    <footer className="section footer-terminal panel">
      <div className="footer-copy">
        <div className="eyebrow">{"// end"}</div>
        <h2>Thanks for visiting.</h2>
        <p>Not just a portfolio — a developer experience.</p>
        <div className="social-row">
          <a href={`mailto:${profile.email}`} aria-label="Email Ashish">
            <Mail size={18} />
          </a>
          {profile.github && (
            <a href={profile.github} aria-label="GitHub">
              <Github size={18} />
            </a>
          )}
          {profile.linkedin && (
            <a href={profile.linkedin} aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          )}
        </div>
      </div>
      <div className="terminal-console">
        <div
          className="terminal-output"
          role="log"
          aria-label="Terminal output"
        >
          {terminalOutput.map((line, index) => (
            <p key={`${line}-${index}`}>{line}</p>
          ))}
        </div>
        <form onSubmit={runCommand}>
          <span>ashish@portfolio:~$</span>
          <input
            value={terminalInput}
            onChange={(e) => setTerminalInput(e.target.value)}
            aria-label="Terminal command"
          />
        </form>
      </div>
    </footer>
  );
}
