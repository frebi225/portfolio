"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navLinks = [
    { name: "Accueil", id: "home" },
    { name: "À Propos", id: "about" },
    { name: "Projets", id: "projects" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className={cn("text-2xl font-bold transition-colors", isScrolled ? "text-blue-900" : "text-white")}
          >
            A<span className="text-orange-500">.</span>FREBI
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  "font-medium transition-colors hover:text-orange-500",
                  isScrolled ? "text-gray-700" : "text-white",
                )}
              >
                {link.name}
              </button>
            ))}
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Télécharger CV</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className={isScrolled ? "text-blue-900" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-blue-900" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-700 font-medium py-2 hover:text-orange-500 text-left"
                >
                  {link.name}
                </button>
              ))}
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">Télécharger CV</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

