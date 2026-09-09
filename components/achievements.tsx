import { Card, CardContent } from "@/components/ui/card"
import { achievements } from "@/lib/portfolio"
import { ArrowUpRight, Layers3, Sparkles, Zap } from "lucide-react"

const icons = [Zap, ArrowUpRight, Layers3, Sparkles]

export function Achievements() {
  return (
    <section id="achievements" className="border-t border-border/60 bg-muted/40 py-20 text-foreground">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-300/80">Highlights</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Measurable outcomes that show how the work landed.
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            These cards turn the strongest résumé outcomes into a clean portfolio summary.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((item, index) => {
            const Icon = icons[index % icons.length]

            return (
              <Card key={item.title} className="border-border bg-card text-card-foreground backdrop-blur">
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-300/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-2xl font-semibold text-card-foreground">{item.metric}</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-card-foreground">{item.title}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
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
