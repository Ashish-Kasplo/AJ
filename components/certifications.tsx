import { Card, CardContent } from "@/components/ui/card"
import { Award, Globe } from "lucide-react"

export function Certifications() {
  const certifications = [
    {
      title: "Core Java",
      issuer: "Oracle",
    },
    {
      title: "Fundamentals of Security",
      issuer: "Cybersecurity Institute",
    },
    {
      title: "Mastery of Full Stack Development",
      issuer: "Web Development Academy",
    },
    {
      title: "Fundamentals of Coding",
      issuer: "Verzeo Institute",
    },
    {
      title: "GPRC , Go Backend Mastey",
      issuer: "Udemy",
    },
  ]

  const languages = [
    { language: "English", proficiency: "Proficient" },
    { language: "Hindi", proficiency: "Proficient" },
    { language: "Marathi", proficiency: "Native" },
    { language: "Kannada", proficiency: "Native" },
    { language: "Tamil", proficiency: "Intermediate" },
  ]

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold">Certifications</h2>
              <div className="mt-2 h-1 w-16 bg-primary mx-auto"></div>
            </div>
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex items-center gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold">Languages</h2>
              <div className="mt-2 h-1 w-16 bg-primary mx-auto"></div>
            </div>
            <div className="grid gap-4">
              {languages.map((lang, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex items-center gap-4">
                    <Globe className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{lang.language}</h3>
                      <p className="text-sm text-muted-foreground">{lang.proficiency}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
