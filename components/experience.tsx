import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Kasplo Pvt Ltd",
      period: "March 2024 – May 2025",
      responsibilities: [
        "Led full-stack development initiatives, delivering end-to-end solutions across both frontend and backend.",
        "Spearheaded major frontend product features using modern frameworks (e.g., React, Material-UI, Tailwind CSS).",
        "Automated and optimized message queue processes (e.g., RabbitMQ), ensuring efficient communication between services and reducing system downtime.",
        "Collaborated closely with cross-functional teams to implement scalable architecture for client-facing platforms.",
      ],
    },
    {
      title: "Junior Software Engineer",
      company: "Kasplo Pvt Ltd",
      period: "Dec 2023 – March 2024",
      responsibilities: [
        "Developed robust, user-friendly Admin Panels for managing client data and product configurations.",
        "Designed and launched the company's official website using modern frontend technologies, improving brand visibility and client onboarding experience.",
        "Worked with design and backend teams to ensure seamless user experience and data integration.",
      ],
    },
    {
      title: "Software Intern",
      company: "Parinitha Technologies",
      period: "July 2023 – Nov 2023",
      responsibilities: [
        "Contributed to complex web applications using the MERN Stack (MongoDB, Express.js, React.js, Node.js).",
        "Focused on building responsive and dynamic frontend components to enhance user experience.",
        "Participated in code reviews, debugging sessions, and agile sprint planning, gaining hands-on exposure to real-world development workflows.",
      ],
    },
  ]

  const education = [
    {
      degree: "Bachelors in Computer Application Technology",
      institution: "Jain University Bangalore",
      period: "2017 – 2020",
    },
    {
      degree: "Pre University in Computer Science",
      institution: "Jain University",
      period: "2017 – 2020",
    },
    {
      degree: "High Schooling",
      institution: "Geetha Shishu Shikshana Sangha [GSSS] Mysore",
      period: "2017 – 2020",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Experience & Education</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Work Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <h4 className="text-xl font-semibold">{exp.title}</h4>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <Badge variant="outline">{exp.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left mt-8 md:mt-0">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                      <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      <Badge variant="outline">{edu.period}</Badge>
                    </div>
                    <p className="text-muted-foreground">{edu.institution}</p>
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
