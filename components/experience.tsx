import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    company: "Devnology",
    role: "Desenvolvedor Crawler Júnior",
    period: "Out 2024 - Presente",
    description: [
      "Desenvolvo e mantenho crawlers TypeScript para coletar dados de múltiplas fontes, usando estratégias anti-bloqueio e filas assíncronas",
      "Integro dados em microsserviços NestJS, expondo APIs REST para produtos internos",
      "Automatizo pipelines de build/test/deploy com GitLab CI e faço deploy de containers na AWS",
      "Configuro métricas e alertas no Grafana, reduzindo incidentes",
    ],
  },
  {
    company: "ToFinance",
    role: "Estagiário de Desenvolvimento Backend",
    period: "Jul 2023 - Jun 2024",
    description: [
      "Apoiei a manutenção de serviços NestJS/Sequelize, corrigindo bugs e implementando novos endpoints",
      "Escrevi testes unitários básicos, aumentando a cobertura de código",
      "Colaborei em revisões de código e práticas de controle de versão no GitHub",
      "Otimizei consultas SQL simples para melhorar tempos de resposta",
    ],
  },
  {
    company: "Problems (YouTube)",
    role: "Roteirista e Produtor",
    period: "Jan 2023 - Mai 2023",
    description: ["Produzi e roteirizei conteúdo infantil interativo e inclusivo para o canal"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-border"></div>
            <h2 className="text-3xl font-bold font-mono">
              <span className="text-primary">//</span> Experiência
            </h2>
            <div className="h-px flex-1 bg-border"></div>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-primary mt-1">
                      <Briefcase className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
