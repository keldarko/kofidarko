const skillCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Go", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "FastAPI", "GraphQL", "REST APIs"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Vercel", "PostgreSQL", "MongoDB"],
  },
];

export function Skills() {
  return (
    <section className="py-24 px-6 lg:px-0 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-semibold tracking-widest text-primary mb-12">
          SKILLS & TECHNOLOGIES
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-foreground font-medium">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
