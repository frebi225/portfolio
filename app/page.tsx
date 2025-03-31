"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, Github, Linkedin, Mail, Twitter, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ProjectCard } from "@/components/project-card"
import { ServiceCard } from "@/components/service-card"
import { ContactForm } from "@/components/contact-form"
import { ParticlesBackground } from "@/components/particles-background"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <ParticlesBackground />
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Salut, moi c'est <span className="text-orange-500">AUDREY FREBI</span> 👋
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Développeuse Full Stack Junior passionnée par le code propre, les solutions performantes et l'innovation
                digitale.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 hover:scale-105 transition-all text-white"
                  onClick={() => {
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Voir mes projets <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-blue-900 hover:text-white transition-all"
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Me contacter <Mail className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20">
                <Image
                  src="/moi.png?height=200&width=300"
                  alt="Portrait"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <ArrowRight className="h-8 w-8 text-white rotate-90" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">
            <span className="text-orange-500"></span> Mon Parcours et Compétences
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-900">Mon Parcours</h3>
              <p className="text-gray-700 leading-relaxed">
                Après une formation intensive en développement web, j'ai travaillé sur divers projets allant des
                applications web aux systèmes backend complexes. Ma passion pour l'apprentissage continu m'a permis de
                maîtriser plusieurs langages et frameworks.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Mon approche du développement repose sur trois piliers : l'efficacité du code, la créativité dans la
                résolution de problèmes, et la collaboration étroite avec les équipes et clients.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-900">Mes Compétences</h3>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Go</span>
                    <span className="text-orange-500">55%</span>
                  </div>
                  <Progress value={55} className="h-2 bg-gray-200" indicatorClassName="bg-orange-500" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">JavaScript</span>
                    <span className="text-orange-500">55%</span>
                  </div>
                  <Progress value={55} className="h-2 bg-gray-200" indicatorClassName="bg-orange-500" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">SQL</span>
                    <span className="text-orange-500">30%</span>
                  </div>
                  <Progress value={30} className="h-2 bg-gray-200" indicatorClassName="bg-orange-500" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">PHP</span>
                    <span className="text-orange-500">35%</span>
                  </div>
                  <Progress value={35} className="h-2 bg-gray-200" indicatorClassName="bg-orange-500" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Docker</span>
                    <span className="text-orange-500">70%</span>
                  </div>
                  <Progress value={70} className="h-2 bg-gray-200" indicatorClassName="bg-orange-500" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Git</span>
                    <span className="text-orange-500">50%</span>
                  </div>
                  <Progress value={50} className="h-2 bg-gray-200" indicatorClassName="bg-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">
            <span className="text-orange-500"></span> Mes Réalisations Clés
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Sikabôlô 💰"
              description="Solution digitale de scoring de crédit, réalisée en Next.js pour un hackathon Digifemmes & Ecobank."
              image="/boum.jpeg?height=200&width=300"
              tags={["Next.js", "API REST", "SQL"]}
              fullDescription="Sikabôlô est une solution digitale innovante de scoring de crédit développée lors d'un hackathon organisé par Digifemmes et Ecobank. Cette application permet d'évaluer la solvabilité des demandeurs de crédit en analysant diverses données financières et comportementales. J'ai utilisé Next.js pour le frontend et le backend, avec une API REST pour communiquer avec une base de données SQL."
              githubUrl="https://github.com/audreyfrebi/sikabolo"
              liveUrl="https://sikabolo.vercel.app"
            />

            <ProjectCard
              title="Jawondi 🎨"
              description="Conception d'une maquette Figma pour une plateforme digitale."
              image="/placeholder.svg?height=200&width=300"
              tags={["UI/UX Design", "Figma"]}
              fullDescription="Jawondi est un projet de conception UI/UX pour une plateforme digitale. J'ai créé l'ensemble des maquettes sur Figma, en mettant l'accent sur l'expérience utilisateur et l'esthétique moderne. Le projet comprend des wireframes, des prototypes interactifs et une documentation complète du design system. Cette maquette a ensuite été utilisée comme référence pour le développement de la plateforme."
              liveUrl="https://www.figma.com/file/jawondi-project"
            />

            <ProjectCard
              title="Golden Instinct 🛍️"
              description="Site internet e-commerce développé avec PHP et TailwindCSS."
              image="/placeholder.svg?height=200&width=300"
              tags={["PHP", "SQL", "TailwindCSS"]}
              fullDescription="Golden Instinct est un site e-commerce complet développé avec PHP et stylisé avec TailwindCSS. Le site comprend un catalogue de produits, un système de panier, une gestion des utilisateurs et un processus de paiement sécurisé. J'ai également implémenté une base de données SQL pour stocker les informations des produits, des utilisateurs et des commandes. L'interface utilisateur est responsive et optimisée pour tous les appareils."
              githubUrl="https://github.com/audreyfrebi/golden-instinct"
              liveUrl="https://golden-instinct.com"
            />

            <ProjectCard
              title="Groupie Trackers 🎵"
              description="Web app affichant des données d'artistes via une API."
              image="/placeholder.svg?height=200&width=300"
              tags={["Go", "JavaScript", "API REST"]}
              fullDescription="Groupie Trackers est une application web qui utilise une API pour afficher des informations détaillées sur des artistes musicaux. L'application permet aux utilisateurs de rechercher des artistes, de voir leurs dates de concert, leurs albums et d'autres informations pertinentes. J'ai développé cette application en utilisant Go pour le backend et JavaScript pour le frontend."
              githubUrl="https://github.com/audreyfrebi/groupie-trackers"
              liveUrl="https://groupie-trackers.audreyfrebi.com"
            />

            <ProjectCard
              title="Forum en temps réel 💬"
              description="Plateforme interactive avec WebSockets pour des discussions instantanées."
              image="/placeholder.svg?height=200&width=300"
              tags={["Go", "SQLite", "JavaScript"]}
              fullDescription="Ce forum en temps réel permet aux utilisateurs de discuter instantanément grâce à l'utilisation de WebSockets. Les messages sont mis à jour en temps réel sans avoir besoin de rafraîchir la page. J'ai utilisé Go pour le backend avec une base de données SQLite pour stocker les messages et les informations des utilisateurs. Le frontend est développé en JavaScript pur pour une expérience légère et rapide."
              githubUrl="https://github.com/audreyfrebi/real-time-forum"
            />

            <ProjectCard
              title="ASCII Art 🎨"
              description="Outil CLI convertissant du texte en ASCII art avec plusieurs styles."
              image="/placeholder.svg?height=200&width=300"
              tags={["Go", "Shell"]}
              fullDescription="ASCII Art Converter est un outil en ligne de commande qui permet de convertir du texte en art ASCII avec différents styles et polices. L'outil prend en charge plusieurs options de personnalisation comme la taille, l'alignement et les couleurs. Développé entièrement en Go, cet outil peut être utilisé dans des scripts shell ou directement dans le terminal."
              githubUrl="https://github.com/audreyfrebi/ascii-art"
            />

            <ProjectCard
              title="Make Your Game 🎮"
              description="Jeu solo optimisé 60 FPS, avec gestion du score et niveaux progressifs."
              image="/placeholder.svg?height=200&width=300"
              tags={["JavaScript", "DOM Manipulation"]}
              fullDescription="Ce jeu JavaScript est un jeu d'arcade solo optimisé pour fonctionner à 60 FPS. Il comprend une gestion de score, plusieurs niveaux de difficulté progressive et des effets sonores. J'ai développé ce jeu en utilisant uniquement JavaScript vanilla et la manipulation du DOM pour créer une expérience de jeu fluide et réactive sans dépendances externes."
              githubUrl="https://github.com/audreyfrebi/js-game"
              liveUrl="https://game.audreyfrebi.com"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-blue-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            <span className="text-orange-500"></span> Ce que je propose en Freelance
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Développement Web"
              description="Création de sites web modernes, optimisés et performants. Frontend & Backend avec Go, JavaScript et SQL."
              icon={<Code className="h-10 w-10 text-orange-500" />}
            />

            <ServiceCard
              title="Optimisation de Code"
              description="Analyse et amélioration des performances d'une application existante. Debugging, refactoring et optimisation algorithmique."
              icon={<Zap className="h-10 w-10 text-orange-500" />}
            />

            <ServiceCard
              title="Gestion de Projet Tech"
              description="Mise en place d'un workflow Agile/Trello. Accompagnement technique et conseils en structuration de projet."
              icon={<ArrowRight className="h-10 w-10 text-orange-500" />}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">
            <span className="text-orange-500"></span> Restons Connectés
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-900">Parlons de votre projet</h3>
              <p className="text-gray-700 leading-relaxed">
                Un projet en tête ? Parlons-en ensemble et construisons quelque chose d'incroyable !
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-700">audreyfrebi900@gmail.com</span>
                </div>

                <div className="flex gap-4">
                  <Link
                    href="https://github.com"
                    target="_blank"
                    className="text-gray-700 hover:text-orange-500 transition-colors"
                  >
                    <Github className="h-6 w-6" />
                    <span className="sr-only">https://github.com/frebi225</span>
                  </Link>

                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    className="text-gray-700 hover:text-orange-500 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">https://www.linkedin.com/in/audrey-komenan</span>
                  </Link>

                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    className="text-gray-700 hover:text-orange-500 transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} AUDREY FREBI - Développeuse Full Stack Junior. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  )
}

