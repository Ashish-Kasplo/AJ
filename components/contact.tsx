"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Send, Linkedin, Github, ExternalLink } from "lucide-react"
import { contactLinks, profile, socialLinks } from "@/lib/portfolio"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error("Failed to send message")

      setSubmitSuccess(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Error sending message:", error)
      alert("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitSuccess(false), 3000)
    }
  }

  return (
    <section
      id="contact"
      className="border-t border-border/60 bg-muted/40 py-20 text-foreground"
      aria-label="Contact section"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-300/80">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let’s build the next polished frontend experience.
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Reach out for product work, frontend collaboration or opportunities aligned with your experience.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="border-border bg-card text-card-foreground shadow-2xl shadow-cyan-950/10 backdrop-blur">
            <CardContent className="space-y-6 p-8">
              <div className="space-y-2">
                <Badge className="border border-cyan-400/20 bg-cyan-400/10 text-cyan-700 hover:bg-cyan-400/15 dark:text-cyan-100">
                  Open to frontend roles
                </Badge>
                <h3 className="text-2xl font-semibold text-card-foreground">{profile.name}</h3>
                <p className="text-muted-foreground">{profile.role}</p>
              </div>

              <div className="grid gap-4">
                {contactLinks.map((item) => {
                  const icon =
                    item.title === "Email" ? <Mail className="h-5 w-5" /> :
                    item.title === "Phone" ? <Phone className="h-5 w-5" /> :
                    item.title === "LinkedIn" ? <Linkedin className="h-5 w-5" /> :
                    <Github className="h-5 w-5" />

                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      target={item.title === "Email" || item.title === "Phone" ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-background px-4 py-4 transition hover:border-cyan-300/30 hover:bg-accent/40"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                          {icon}
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.title}</p>
                          <p className="font-medium text-card-foreground">{item.value}</p>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </a>
                  )
                })}
              </div>

              <div className="rounded-2xl border border-border bg-background p-4 text-sm leading-6 text-muted-foreground">
                Based in {profile.location}. Available for frontend, product and enterprise SaaS collaboration.
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-cyan-500 text-slate-950 hover:bg-cyan-400">
                  <a href={socialLinks.resume} download="Ashish_Jadhav_Full_Stack.pdf">
                    Download Resume
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground">
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card text-card-foreground shadow-2xl shadow-cyan-950/10 backdrop-blur">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ashish"
                      required
                      className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      required
                      className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Frontend project or collaboration"
                    required
                    className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about the role or product you want to build."
                    rows={7}
                    required
                    className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-cyan-500 text-slate-950 hover:bg-cyan-400 md:w-auto"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>

                {submitSuccess && (
                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-center text-emerald-200">
                    Your message has been sent successfully.
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
