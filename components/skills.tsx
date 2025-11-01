const skillCategories = [
  {
    category: "Linguagens & Frameworks",
    skills: ["TypeScript", "JavaScript/Node.js", "NestJS", "Python", "Rust", "Go", "Angular"],
  },
  {
    category: "Web Scraping & Automação",
    skills: ["Puppeteer", "Playwright", "Axios/fetch", "Proxies", "Captcha handling"],
  },
  {
    category: "Bancos de Dados",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "DevOps & Cloud",
    skills: ["Docker", "GitLab CI", "AWS (EC2, S3, ECS)", "Grafana"],
  },
  {
    category: "Metodologias",
    skills: ["Scrum", "Kanban", "Git", "Code Review"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-border"></div>
            <h2 className="text-3xl font-bold font-mono">
              <span className="text-primary">//</span> Habilidades
            </h2>
            <div className="h-px flex-1 bg-border"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
              >
                <h3 className="text-lg font-bold text-primary mb-4 font-mono">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md border border-border hover:border-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
