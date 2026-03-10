import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const experiences = [
  {
    period: "2023 — Present",
    title: "Senior Software Engineer",
    company: "Tech Company",
    companyUrl: "#",
    description:
      "Build and maintain critical components used to construct frontend platforms. Work closely with cross-functional teams to implement and advocate for best practices in web development.",
    technologies: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    period: "2021 — 2023",
    title: "Software Engineer",
    company: "Startup Inc",
    companyUrl: "#",
    description:
      "Developed and shipped highly interactive web applications for diverse clients. Built reusable component libraries and established coding standards.",
    technologies: ["JavaScript", "React", "GraphQL", "Tailwind CSS", "AWS"],
  },
  {
    period: "2019 — 2021",
    title: "Frontend Developer",
    company: "Digital Agency",
    companyUrl: "#",
    description:
      "Collaborated with designers to translate mockups into responsive, accessible web pages. Optimized performance and improved Core Web Vitals across client sites.",
    technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "SCSS"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-semibold tracking-widest text-primary mb-12 lg:hidden">
          EXPERIENCE
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group grid lg:grid-cols-[200px_1fr] gap-4 p-4 -mx-4 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <div className="text-sm text-muted-foreground font-medium">
                {exp.period}
              </div>

              <div className="space-y-3">
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  <Link
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1"
                  >
                    {exp.title} · {exp.company}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 border-0"
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
            href="/resume.pdf"
            className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
          >
            View Full Résumé
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
