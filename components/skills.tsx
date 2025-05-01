"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const [activeTab, setActiveTab] = useState("frontend")

  const skillCategories = {
    frontend: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Material UI", level: 85 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Redux", level: 80 },
    ],
    backend: [
      { name: "Go", level: 90 },
      { name: "Node.js", level: 75 },
      { name: "PHP", level: 65 },
      { name: "Java", level: 80 },
      { name: "Microservices", level: 70 },
      { name: "Scalable APIs", level: 85 },
      { name: "RabbitMQ", level: 70 },
    ],
    databases: [
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "ClickHouse", level: 75 },
      { name: "Cassandra", level: 70 },
    ],
    tools: [
      { name: "Git", level: 95 },
      { name: "Postman", level: 100 },
      { name: "Browserstack", level: 80 },
      { name: "JIRA", level: 95 },
      { name: "JMeter", level: 85 },
      { name: "Jenkins", level: 75 },
    ],
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">My Skills</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world. Here's an overview of my technical
            skills.
          </p>
        </div>

        <Tabs defaultValue="frontend" className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8 flex-wrap">
            <TabsList className="mb-2">
              <TabsTrigger value="frontend" onClick={() => setActiveTab("frontend")}>
                Frontend
              </TabsTrigger>
              <TabsTrigger value="backend" onClick={() => setActiveTab("backend")}>
                Backend
              </TabsTrigger>
              <TabsTrigger value="databases" onClick={() => setActiveTab("databases")}>
                Databases
              </TabsTrigger>
              <TabsTrigger value="tools" onClick={() => setActiveTab("tools")}>
                Tools & Others
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(skillCategories).map(([category, skills]) => (
            <TabsContent key={category} value={category} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill) => (
                  <Card key={skill.name} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">{skill.name}</h3>
                        <Badge variant="outline">{skill.level}%</Badge>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div
                          className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: activeTab === category ? `${skill.level}%` : "0%",
                          }}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
