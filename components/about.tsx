export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-border"></div>
            <h2 className="text-3xl font-bold font-mono">
              <span className="text-primary">//</span> Sobre Mim
            </h2>
            <div className="h-px flex-1 bg-border"></div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Sou um desenvolvedor backend focado em extração de dados em larga escala, desenvolvimento de APIs e deploy
              na AWS. Tenho experiência prática com TypeScript/NestJS, MySQL, Docker e práticas DevOps.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Gosto de aprendizado contínuo, escrever código limpo e entregar soluções que criam valor real para o
              negócio. Atualmente trabalho na Devnology como Desenvolvedor Crawler Júnior, onde desenvolvo e mantenho
              crawlers TypeScript para coletar dados de múltiplas fontes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Disponível para trabalho presencial/híbrido em Belo Horizonte ou remoto. Possuo CNH categoria B.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
