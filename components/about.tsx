import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Sparkles, Target, Workflow } from "lucide-react"
import { aboutPoints, profile, socialLinks } from "@/lib/portfolio"

export function About() {
  return (
    <section id="about" className="border-t border-border/60 bg-background py-20 text-foreground">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-300/80">About</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Frontend engineering with product thinking and clean execution.
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            {profile.summary}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="border-border bg-card text-card-foreground shadow-2xl shadow-cyan-950/10 backdrop-blur">
            <CardContent className="space-y-6 p-8">
              {aboutPoints.map((point, index) => (
                <div key={point} className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-700 dark:text-cyan-300">
                    {index === 0 ? <Workflow className="h-5 w-5" /> : index === 1 ? <Sparkles className="h-5 w-5" /> : <Target className="h-5 w-5" />}
                  </div>
                  <p className="text-base leading-7 text-muted-foreground">{point}</p>
                </div>
              ))}

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild className="bg-cyan-500 text-slate-950 hover:bg-cyan-400">
                  <a href={socialLinks.resume} download="Ashish_Jadhav_Full_Stack.pdf">
                    <FileText className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground">
                  <a href="#contact">Work With Me</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            {[
              {
                label: "Role",
                value: profile.role,
                note: "Focused on scalable frontend systems and product delivery.",
              },
              {
                label: "Stack",
                value: "React, Next.js, TypeScript",
                note: "Core tools used across enterprise SaaS products.",
              },
              {
                label: "Strength",
                value: "Performance + UX",
                note: "Balances speed, clarity and polished interactions.",
              },
            ].map((item) => (
              <Card key={item.label} className="border-border bg-card text-card-foreground backdrop-blur">
                <CardContent className="p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-700 dark:text-cyan-300/80">{item.label}</p>
                  <p className="mt-2 text-xl font-semibold text-card-foreground">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
