import { Card, CardContent } from "@/components/ui/card"
import { BarChart, Clock, Code, Globe, Layout, ShoppingCart, Users } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Revenue Growth",
      description:
        "Increased company revenue by 4× through the successful launch and optimization of a proprietary email deliverability platform.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Performance Optimization",
      description:
        "Boosted website and API performance by optimizing backend logic and frontend rendering, reducing load times by up to 30%.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Cross-functional Leadership",
      description:
        "Led cross-functional product initiatives in email marketing, customer review systems, and e-learning platforms.",
    },
    {
      icon: <Layout className="h-10 w-10 text-primary" />,
      title: "Frontend Management",
      description:
        "Independently managed frontend development for multiple products, ensuring consistent design systems and responsiveness.",
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
      title: "Shopify App Development",
      description:
        "Designed and launched the company's first Shopify app for customer reviews, driving additional revenue streams and enhancing brand visibility.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Client Onboarding",
      description:
        "Spearheaded client onboarding, including domain configuration, integration, and tailored product demos — significantly improving activation rates.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Website Development",
      description:
        "Solely developed and maintained the company's main website, enhancing lead conversion through UI improvements and SEO strategies.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Admin Panel Development",
      description:
        "Built and managed powerful admin panels across various platforms, streamlining internal operations and improving client data management.",
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Key Achievements</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Highlights of my professional accomplishments and contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
