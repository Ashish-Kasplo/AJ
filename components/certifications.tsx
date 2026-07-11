import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, GraduationCap } from "lucide-react"
import { education } from "@/lib/portfolio"

export function Education() {
  return (
    <section id="education" className="bg-background py-20 text-foreground">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-300/80">Education</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Formal education with an applied software foundation.
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="border-border bg-card text-card-foreground backdrop-blur">
            <CardContent className="space-y-4 p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-700 ring-1 ring-cyan-300/20 dark:text-cyan-300">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-card-foreground">{education.degree}</h3>
                <p className="mt-1 text-muted-foreground">{education.institution}</p>
              </div>
              <Badge className="border border-cyan-400/20 bg-cyan-400/10 text-cyan-700 hover:bg-cyan-400/15 dark:text-cyan-100">
                {education.period}
              </Badge>
              <p className="text-sm leading-6 text-muted-foreground">{education.note}</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card text-card-foreground backdrop-blur">
            <CardContent className="space-y-4 p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-700 ring-1 ring-cyan-300/20 dark:text-cyan-300">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-card-foreground">Portfolio note</h3>
                <p className="mt-1 text-muted-foreground">Your public-facing profile now matches the résumé tone and layout.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "BCA",
                  "Jain University",
                  "2020 - 2023",
                  "Frontend Engineering",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground">
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
