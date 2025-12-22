"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative max-w-6xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
            Full Stack MERN Developer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Crafting seamless web experiences with MongoDB, Express, React, and Node.js
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" onClick={() => scrollToSection("contact")} className="group">
            Get In Touch
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollToSection("projects")}>
            View Projects
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4 pt-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:hello@example.com" className="p-2 hover:text-primary transition-colors" aria-label="Email">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
