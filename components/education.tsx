import { GraduationCap, Award } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-border"></div>
            <h2 className="text-3xl font-bold font-mono">
              <span className="text-primary">//</span> Educação
            </h2>
            <div className="h-px flex-1 bg-border"></div>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">Bacharelado em Ciência da Computação</h3>
                  <p className="text-primary font-medium mt-1">Centro Universitário Newton Paiva</p>
                  <p className="text-muted-foreground text-sm mt-2">Jun 2023 - Presente (em andamento)</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">Certificações & Cursos</h3>
                </div>
              </div>
              <ul className="space-y-2 ml-16">
                <li className="text-muted-foreground text-sm flex gap-2">
                  <span className="text-primary">▹</span>
                  <span>Cloud Computing – AWS Discovery Day (Estácio)</span>
                </li>
                <li className="text-muted-foreground text-sm flex gap-2">
                  <span className="text-primary">▹</span>
                  <span>Cloud Computing Training – Phase 2 (Estácio)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
