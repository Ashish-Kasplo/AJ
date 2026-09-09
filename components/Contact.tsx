"use client";
import { useState, type FormEvent } from "react";
import { ArrowRight, Github, Linkedin, Mail, Send } from "lucide-react";
import { profile } from "@/data/portfolio";
export function Contact() {
  const [messageState, setMessageState] = useState<"idle" | "draft">("idle");
  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Portfolio enquiry from ${String(form.get("name")).trim()}`;
    const body = `${String(form.get("message")).trim()}\n\nFrom: ${form.get("name")} <${form.get("email")}>`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMessageState("draft");
  };

  return (
    <section id="contact" className="section contact-grid">
      <div>
        <div className="eyebrow">{"// contact"}</div>
        <h2>Let&apos;s build something great together.</h2>
        <p className="section-copy">
          Open to interesting frontend, product engineering and architecture
          opportunities.
        </p>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>
            <Mail size={16} /> {profile.email}
          </a>
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          )}
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Github size={16} /> GitHub
            </a>
          )}
          {profile.resume && (
            <a href={profile.resume} target="_blank" rel="noopener noreferrer">
              View resume <ArrowRight size={16} />
            </a>
          )}
        </div>
      </div>
      <form className="contact-form panel" onSubmit={submitContact}>
        <label htmlFor="contact-name">Your name</label>
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          required
          maxLength={100}
          placeholder="Your name"
        />
        <label htmlFor="contact-email">Email address</label>
        <input
          id="contact-email"
          name="email"
          autoComplete="email"
          required
          type="email"
          maxLength={254}
          placeholder="you@example.com"
        />
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          required
          maxLength={5000}
          placeholder="Tell me about your project or opportunity"
          rows={5}
        />
        <p className="form-note">
          Opens a draft in your email app. Review it and send when you’re ready.
        </p>
        <button className="primary-btn">
          Create email draft <Send size={16} />
        </button>
        <p className="form-note" role="status">
          {messageState === "draft"
            ? `Your email app was requested. If it didn’t open, email ${profile.email} directly. Nothing has been sent by this site.`
            : ""}
        </p>
      </form>
    </section>
  );
}
