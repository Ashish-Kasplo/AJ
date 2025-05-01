"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const [typedText, setTypedText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const texts = [
    "Full Stack Developer",
    "Problem Solver",
    "System Architect",
    "Innovation Driver"
  ]

  useEffect(() => {
    let currentIndex = 0
    let currentText = texts[currentTextIndex]
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= currentText.length) {
        setTypedText(currentText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        // Wait for 2 seconds before starting to type the next text
        setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          currentIndex = 0
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [currentTextIndex])

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-primary">Ashish Jadhav</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium">
            <span className="text-muted-foreground">I'm a </span>
            <span className="text-primary">{typedText}</span>
            <span className="animate-blink">|</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-md">
            Dynamic Software Developer with expertise in frontend and backend solutions, recognized for successfully
            delivering responsive UI/UX designs and automating message queues.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <a href="#contact">Get in touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View my work</a>
            </Button>
          </div>
          <div className="flex gap-4 pt-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/Ashish-Kasplo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://in.linkedin.com/in/ashish-s-jadhav-560909204" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:ashishbox13@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              src="/placeholder.svg?height=320&width=320"
              alt="Ashish Jadhav"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" asChild>
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6" />
          </a>
        </Button>
      </div>
    </section>
  )
}
