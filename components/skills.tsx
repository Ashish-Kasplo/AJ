import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { skillGroups } from "@/lib/portfolio"

export function Skills() {
  return (
    <section id="skills" className="bg-background py-20 text-foreground">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-300/80">Skills</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            A focused frontend stack with the breadth to ship real product work.
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            The toolset below mirrors the systems and product layers highlighted in your résumé.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <Card key={group.title} className="border-border bg-card text-card-foreground shadow-2xl shadow-cyan-950/10 backdrop-blur">
              <CardHeader className="space-y-2">
                <h3 className="text-2xl font-semibold text-card-foreground">{group.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{group.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="border border-border bg-background px-3 py-1.5 text-sm text-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
