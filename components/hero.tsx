"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { heroStats, heroTags, profile, socialLinks } from "@/lib/portfolio"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 text-foreground">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.12),_transparent_24%),linear-gradient(180deg,_rgba(255,255,255,0.9)_0%,_rgba(248,250,252,0.95)_45%,_rgba(241,245,249,1)_100%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.28),_transparent_34%),radial-gradient(circle_at_80%_20%,_rgba(14,165,233,0.18),_transparent_24%),linear-gradient(180deg,_#040816_0%,_#081120_45%,_#040816_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[url('/images/cover.png')] bg-cover bg-center opacity-10 mix-blend-multiply dark:opacity-12 dark:mix-blend-screen" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-card-foreground shadow-lg backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            {profile.role} | React | Next.js | TypeScript
          </div>

          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.38em] text-cyan-700 dark:text-cyan-200/80">
              Building scalable digital experiences
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Clean, performant frontend systems for products that need to scale.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              {profile.headline}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-cyan-500 text-slate-950 hover:bg-cyan-400">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground">
              <a href={socialLinks.resume} download="Ashish_Jadhav_Full_Stack.pdf">
                Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-foreground hover:bg-accent hover:text-accent-foreground">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border bg-card p-4 backdrop-blur">
                <div className="text-2xl font-semibold text-card-foreground">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {heroTags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="border border-border bg-background px-3 py-1 text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-300" />
              {profile.location}
            </span>
            <a className="inline-flex items-center gap-2 hover:text-foreground" href={socialLinks.email}>
              <Mail className="h-4 w-4 text-cyan-300" />
              {profile.email}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-cyan-500/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/80 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.18)] backdrop-blur-xl dark:bg-slate-950/65 dark:shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/images/cover.png"
                alt="Ashish Jadhav portfolio cover"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/70 to-transparent dark:from-slate-950 dark:via-slate-950/55" />

              <div className="absolute left-3 right-3 top-3 max-w-[260px] rounded-2xl border border-border bg-card/85 p-4 text-sm text-card-foreground shadow-lg backdrop-blur dark:bg-slate-950/70 sm:left-5 sm:right-auto">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-700 dark:text-cyan-200/80">Focus</p>
                <p className="mt-2 leading-6">
                  Enterprise SaaS, component systems, workflow builders and polished product UI.
                </p>
              </div>

              <div className="absolute left-3 right-3 bottom-3 rounded-2xl border border-border bg-card/90 p-4 shadow-lg backdrop-blur dark:bg-slate-950/80 sm:left-auto sm:right-5 sm:w-[330px]">
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-cyan-300/70">
                    <Image
                      src="/images/profile-linkedin.png"
                      alt="Ashish Jadhav LinkedIn profile photo"
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-card-foreground">{profile.name}</p>
                    <p className="text-sm text-muted-foreground">{profile.role}</p>
                    <p className="mt-1 text-xs text-cyan-700 dark:text-cyan-200/80">{profile.location}</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Redux Toolkit",
                    "Tailwind CSS",
                    "Material UI",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-xl border border-border bg-background px-3 py-2 text-xs text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-3 border-t border-border pt-4 sm:grid-cols-3">
              {[
                "Reusable frontend architecture",
                "AI-assisted editor experiences",
                "Performance-focused delivery",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-border bg-background p-4 text-sm text-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-3 text-muted-foreground">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs uppercase tracking-[0.3em] text-foreground backdrop-blur transition hover:bg-accent hover:text-accent-foreground"
      >
        <ArrowDown className="h-4 w-4" />
        Scroll
      </a>
    </section>
  )
}
