import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-border"></div>
            <h2 className="text-3xl font-bold font-mono">
              <span className="text-primary">//</span> Contato
            </h2>
            <div className="h-px flex-1 bg-border"></div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Vamos trabalhar juntos?</h3>
              <p className="text-muted-foreground">Estou disponível para novas oportunidades. Entre em contato!</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="mailto:gabrielmarliere2005@gmail.com"
                className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="text-foreground font-medium">gabrielmarliere2005@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+5531994990939"
                className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Telefone</div>
                  <div className="text-foreground font-medium">+55 31 99499-0939</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/gabrielmsa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">LinkedIn</div>
                  <div className="text-foreground font-medium">linkedin.com/in/gabrielmsa</div>
                </div>
              </a>

              <a
                href="https://github.com/Gabrielmarlier3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">GitHub</div>
                  <div className="text-foreground font-medium">github.com/Gabrielmarlier3</div>
                </div>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 p-4 bg-secondary/50 rounded-lg">
              <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <div className="text-sm text-muted-foreground">Localização</div>
                <div className="text-foreground">Belo Horizonte - MG, Brasil</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Disponível para trabalho presencial/híbrido ou remoto
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              © 2025 Gabriel Marliere de Souza. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
