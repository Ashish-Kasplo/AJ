import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experiences } from "@/lib/portfolio"

export function Experience() {
  return (
    <section id="experience" className="border-t border-border/60 bg-muted/40 py-20 text-foreground">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-300/80">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Building enterprise frontend systems end to end.
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            These are the roles and responsibilities reflected in your resume, rewritten to read cleanly on the site.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-400/70 via-border to-transparent" />
          <div className="space-y-8">
            {experiences.map((experience) => (
              <div key={`${experience.title}-${experience.company}`} className="relative pl-14">
                <div className="absolute left-1.5 top-6 h-4 w-4 rounded-full border border-cyan-200 bg-cyan-400" />
                <Card className="border-border bg-card text-card-foreground shadow-2xl shadow-cyan-950/10 backdrop-blur">
                  <CardHeader className="space-y-3">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-2xl font-semibold text-card-foreground">{experience.title}</h3>
                        <p className="mt-1 text-muted-foreground">{experience.company}</p>
                      </div>
                      <Badge className="border border-cyan-400/20 bg-cyan-400/10 text-cyan-700 hover:bg-cyan-400/15 dark:text-cyan-100">
                        {experience.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
                      {experience.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
