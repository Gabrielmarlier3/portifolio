"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-mono font-bold text-foreground hover:text-primary transition-colors"
          >
            Gabriel<span className="text-primary">.</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Experiência
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-left text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Experiência
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-left text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="text-left text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
