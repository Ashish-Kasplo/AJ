"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl?: string
  githubUrl?: string
  category: string[]
}

export function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Transactional Mailing Application",
      description:
        "A robust platform for sending transactional emails with tracking, analytics, and delivery optimization.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Go", "Redis", "RabbitMQ"],
      demoUrl: "https://app.kasplo.com/auth/signin",
      githubUrl: "https://github.com",
      category: ["frontend", "backend", "fullstack"],
    },
    {
      id: 6,
      title: "Review Applictaion",
      description: "An interactive platform for online learning with course management and progress tracking.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Go", "MongoDB", "Shopify"],
      demoUrl: "https://apps.shopify.com/kasplo-reviews",
      githubUrl: "https://github.com",
      category: [ "backend"],
    },
    {
      id: 2,
      title: "Email Intelligence Application",
      description:
        "An analytics platform providing insights into email performance, deliverability, and user engagement.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "TypeScript", "Go", "ClickHouse"],
      demoUrl: "https://app.kasplo.com/auth/signin",
      githubUrl: "https://github.com",
      category: ["frontend", "fullstack"],
    },
    {
      id: 3,
      title: "Marketing Platform",
      description: "A comprehensive marketing automation platform with campaign management and analytics.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Redux", "Go", "Clickhouse"],
      demoUrl: "https://app.kasplo.com/auth/signin",
      githubUrl: "https://github.com",
      category: ["frontend", "backend", "fullstack"],
    },
    {
      id: 4,
      title: "Omni Channel Sender Configurations",
      description: "A system for configuring and managing multi-channel communication settings and preferences.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Go", "React", "MongoDB", "Docker"],
      demoUrl: "https://webhook.kasplo.com/users/login",
      githubUrl: "https://github.com",
      category: ["backend", "fullstack"],
    },
    {
      id: 5,
      title: "Admin Panel Dashboards",
      description: "Powerful admin interfaces for managing user data, configurations, and system settings.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Material UI", "TypeScript", "Chart.js"],
      demoUrl: "https://admin.kasplo.com/",
      githubUrl: "https://github.com",
      category: ["frontend"],
    },
  
    {
      id: 7,
      title: "E-commerce Site",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment integration.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Jenkins"],
      demoUrl: "https://app.kasplo.com/auth/signin",
      githubUrl: "https://github.com",
      category: ["frontend", "backend", "fullstack"],
    },
    {
      id: 8,
      title: "Dashboard Analytics",
      description: "A comprehensive analytics dashboard providing real-time insights, data visualization, and performance metrics. Features include customizable widgets, interactive charts, and automated reporting functionality.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Jenkins", "Chart.js"],
      demoUrl: "https://webhook.kasplo.com/users/login",
      githubUrl: "https://github.com",
      category: ["frontend", "backend", "fullstack"],
    },
    {
      id: 9,
      title: "Deaf and Dumb Application",
      description: "An assistive technology application designed to help deaf and mute individuals communicate effectively. Features include sign language recognition, text-to-sign conversion, and real-time communication tools.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "Express.js", "Tailwind CSS"],
      demoUrl: "https://app.kasplo.com/auth/signin",
      githubUrl: "https://github.com",
      category: ["frontend", "backend", "fullstack"],
    },
  ]

  const [filter, setFilter] = useState("all")

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true
    return project.category.includes(filter)
  })

  const filters = [
    { value: "all", label: "All Projects" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "fullstack", label: "Full Stack" },
  ]

  return (
    <TooltipProvider>
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">My Projects</h2>
            <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each project represents different skills and technologies.
            </p>
          </div>

          <div className="flex justify-center flex-wrap gap-2 mb-10">
            {filters.map((item) => (
              <Button
                key={item.value}
                variant={filter === item.value ? "default" : "outline"}
                onClick={() => setFilter(item.value)}
                className="mb-2"
              >
                {item.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between p-6 pt-0">
                  {project.githubUrl && (
                    <Tooltip delayDuration={100}>
                      <TooltipTrigger asChild>
                        <div>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            disabled
                            className="opacity-50 cursor-not-allowed"
                          >
                            <span className="flex items-center gap-1">
                              <Github className="h-4 w-4" />
                              Code
                            </span>
                          </Button>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-secondary text-secondary-foreground px-3 py-1.5">
                        <p>Private Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  )}
                  {project.demoUrl && (
                    <Button size="sm" asChild>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  )
}
