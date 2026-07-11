import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Grid2x2, Layers3, Sparkles, Workflow } from "lucide-react"
import { projects } from "@/lib/portfolio"

const projectAccents = [Sparkles, Workflow, Grid2x2, Layers3, Sparkles]

export function Projects() {
  return (
    <section id="projects" className="bg-background py-20 text-foreground">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-300/80">Projects</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Product work shaped around workflow, scale and clarity.
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            A concise portfolio view of the enterprise modules and product surfaces mentioned in your resume.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const Accent = projectAccents[index % projectAccents.length]

            return (
              <Card
                key={project.title}
                className="group border-border bg-card text-card-foreground shadow-2xl shadow-cyan-950/10 transition-transform duration-300 hover:-translate-y-1 hover:bg-accent/40 backdrop-blur"
              >
                <CardContent className="space-y-5 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-300/20">
                      <Accent className="h-5 w-5" />
                    </div>
                    <Badge className="border border-border bg-background text-foreground">
                      Enterprise Product
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-card-foreground">{project.title}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                      key={tag}
                      variant="secondary"
                      className="border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
