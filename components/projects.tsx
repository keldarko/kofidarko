"use client";

import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "City Gates London - Church",
    description:
      "A modern e-commerce platform for a London-based church, featuring a custom CMS, online donations, and event management. Built with a focus on accessibility and performance.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis"],
    github: "https://github.com",
    live: "https://citygates.london",
  },
  {
    title: "11 Plus Tution Platform",
    description:
      "A comprehensive online learning platform for 11 Plus students, offering interactive lessons, practice tests, and progress tracking. Designed to provide a personalized learning experience.",
    image: "/projects/taskapp.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Docker"],
    github: "https://github.com",
    live: "http://11plustuitions.com/",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered writing assistant that helps create blog posts, marketing copy, and social media content. Features custom fine-tuned models and a seamless writing experience.",
    image: "/projects/ai-content.jpg",
    technologies: ["Python", "FastAPI", "OpenAI", "React", "TailwindCSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Analytics Dashboard",
    description:
      "A comprehensive analytics platform with customizable widgets, real-time data visualization, and exportable reports. Designed for data-driven decision making.",
    image: "/projects/analytics.jpg",
    technologies: ["Vue.js", "D3.js", "GraphQL", "TimescaleDB"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-semibold tracking-widest text-primary mb-12 lg:hidden">
          PROJECTS
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group grid lg:grid-cols-[280px_1fr] gap-6 p-4 -mx-4 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              {/* Project Image */}
              <div className="relative aspect-video lg:aspect-[4/3] rounded-md overflow-hidden bg-secondary border border-border">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm font-mono">
                    {project.title.slice(0, 2).toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex items-center gap-4 pt-2">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </Link>
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`View ${project.title} live`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 border-0 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
          >
            View All Projects on GitHub
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
