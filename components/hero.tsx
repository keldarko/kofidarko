"use client";

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-0">
      <div className="max-w-4xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          {/* Left Column - Identity */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Kofi Darko
              </h1>
              <p className="text-xl text-primary mt-2 font-medium">
                Full Stack Developer
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I build accessible, pixel-perfect digital experiences for the web.
            </p>

            {/* Navigation */}
            <nav className="hidden lg:flex flex-col gap-3 pt-8">
              {[
                { label: "ABOUT", href: "#about" },
                { label: "EXPERIENCE", href: "#experience" },
                { label: "PROJECTS", href: "#projects" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-4 text-sm tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-8 lg:pt-16">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:hello@kofidarko.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Column - About */}
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              {"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}
            </p>

            <p>
              Currently, I specialize in building full-stack applications using{" "}
              <span className="text-foreground font-medium">React</span>,{" "}
              <span className="text-foreground font-medium">Next.js</span>, and{" "}
              <span className="text-foreground font-medium">TypeScript</span>.
              I contribute to creating scalable, maintainable codebases that
              power modern web experiences.
            </p>

            <p>
              {"In my spare time, I'm usually exploring new technologies,"}
              {" contributing to open source, or building side projects that "}
              {"solve interesting problems."}
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex justify-center mt-20 animate-bounce">
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
