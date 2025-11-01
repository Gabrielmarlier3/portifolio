import { Card } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Sistema de Web Scraping",
    description:
      "Solução automatizada para extração e organização de dados da web utilizando TypeScript e Puppeteer, com processamento em larga escala.",
    tags: ["TypeScript", "Web Scraping", "AWS", "Docker"],
    github: "#",
    demo: "#",
  },
  {
    title: "API RESTful com NestJS",
    description:
      "API robusta desenvolvida com NestJS e MySQL, implementando autenticação JWT, validação de dados e documentação Swagger.",
    tags: ["NestJS", "TypeScript", "MySQL", "Docker"],
    github: "#",
    demo: "#",
  },
  {
    title: "Sistema de Automação",
    description:
      "Plataforma de automação de processos com integração a múltiplas APIs, deploy na AWS com CI/CD via GitLab.",
    tags: ["TypeScript", "AWS", "GitLab CI", "Microserviços"],
    github: "#",
    demo: "#",
  },
]

export function Projects() {
  return (
    <section id="projetos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Meus <span className="text-primary">Projetos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Alguns dos projetos que desenvolvi aplicando tecnologias modernas e boas práticas de desenvolvimento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-border">
                  <Button variant="outline" size="sm" className="flex-1 group/btn bg-transparent" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2 group-hover/btn:text-primary transition-colors" />
                      Código
                    </a>
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 group/btn bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>

              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
