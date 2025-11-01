import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-mono text-primary">Desenvolvedor Backend</p>
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                Olá, eu sou <span className="text-primary">Gabriel Marliere</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                Especialista em TI & Desenvolvedor Full-Stack | Pragmático, profissional orientado a entregas
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Desenvolvedor backend focado em extração de dados em larga escala, desenvolvimento de APIs e deploy na
              AWS. Experiência prática com TypeScript/NestJS, MySQL, Docker e práticas DevOps.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/Gabrielmarlier3" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com/in/gabrielmsa" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:gabrielmarliere2005@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="tel:+5531994990939">
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
            </div>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="text-4xl font-bold text-primary font-mono">2+</div>
              <div className="text-sm text-muted-foreground mt-2">Anos de Experiência</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="text-4xl font-bold text-primary font-mono">10+</div>
              <div className="text-sm text-muted-foreground mt-2">Projetos Realizados</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="text-4xl font-bold text-primary font-mono">3</div>
              <div className="text-sm text-muted-foreground mt-2">Empresas</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="text-4xl font-bold text-primary font-mono">100%</div>
              <div className="text-sm text-muted-foreground mt-2">Dedicação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
