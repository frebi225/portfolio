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
import SkillBar from "@/components/ui/SkillBar"; // Vérifie le bon chemin


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
                Passionnée par le développement web et la gestion de projets numériques, je combine des compétences techniques et organisationnelles pour concevoir des solutions digitales performantes.

Titulaire d’une formation en développement full-stack, j’ai travaillé sur divers projets alliant PHP, JavaScript, Go, et des bases de données SQL/NoSQL. Mon expertise inclut la conception d’interfaces ergonomiques avec Tailwind CSS, la gestion de contenus via des CMS et l’optimisation SEO pour améliorer la visibilité en ligne.
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
            <span className="text-orange-500"></span> Mon Parcours et mes Compétences
          </h2>

          {/* Parcours */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">Mon Parcours</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
              Issue d’une formation en microbiologie, j’ai progressivement élargi mes compétences vers le développement web et la gestion de projets digitaux. Passionnée par la technologie et l’innovation, j’ai suivi plusieurs formations intensives qui m’ont permis d’acquérir une expertise en développement full-stack, en gestion agile et en production de contenus numériques.

À travers mes projets, notamment Golden Instinct et d'autres plateformes interactives, j’ai pu approfondir mes connaissances en back-end, en bases de données et en intégration d’interfaces modernes. Je maîtrise des technologies comme PHP, Next.js, MongoDB et TailwindCSS, et j’adopte des méthodologies agiles pour assurer le bon déroulement des projets.

Aujourd’hui, je combine mon esprit analytique issu des sciences avec mes compétences techniques pour concevoir des solutions numériques efficaces et adaptées aux besoins des utilisateurs. Mon objectif est de continuer à apprendre, innover et contribuer à des projets à fort impact.
              </p>
              <p className="text-gray-700 leading-relaxed">
              Mon approche est axée sur la résolution de problèmes et l’amélioration continue des solutions que je développe. J’aime collaborer avec des équipes pluridisciplinaires et utiliser des méthodes Agile/Scrum pour gérer efficacement les projets.

Toujours en quête d’innovation, je suis ouverte aux nouvelles opportunités et aux défis qui me permettront d’élargir mon champ de compétences dans le digital.
              </p>
            </div>
          </div>

          {/* Compétences */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">Mes Compétences</h3>

            <div className="space-y-8">
              {/* Compétences Techniques */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-4">Compétences Techniques</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <SkillBar name="Programmation élémentaire" value={75} />
                    <SkillBar name="Administration système" value={80} />
                    <SkillBar name="Algorithmes élémentaires" value={55} />
                    <SkillBar name="Front-end" value={55} />
                  </div>
                  <div className="space-y-4">
                    <SkillBar name="Back-end" value={55} />
                    <SkillBar name="TCP/IP" value={30} />
                    <SkillBar name="Statistiques" value={25} />
                    <SkillBar name="Programmation de jeux" value={23} />
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-4">Technologies</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <SkillBar name="Docker" value={70} />
                    <SkillBar name="Go" value={55} />
                    <SkillBar name="JavaScript" value={55} />
                  </div>
                  <div className="space-y-4">
                    <SkillBar name="HTML" value={55} />
                    <SkillBar name="Git" value={50} />
                    <SkillBar name="Rust" value={45} />
                  </div>
                  <div className="space-y-4">
                    <SkillBar name="Unix" value={45} />
                    <SkillBar name="CSS" value={40} />
                    <SkillBar name="Electron" value={40} />
                  </div>
                </div>
              </div>

              {/* Autres Technologies */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-4">Autres Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  <TechBadge name="Shell" value={35} />
                  <TechBadge name="PHP" value={35} />
                  <TechBadge name="SQL" value={30} />
                  <TechBadge name="C" value={30} />
                  <TechBadge name="Python" value={30} />
                  <TechBadge name="Laravel" value={30} />
                  <TechBadge name="Django" value={30} />
                  <TechBadge name="Ruby" value={25} />
                  <TechBadge name="Ruby on Rails" value={25} />
                  <TechBadge name="C++" value={20} />
                  <TechBadge name="GraphQL" value={20} />
                  <TechBadge name="Intelligence Artificielle" value={15} />
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
              image="/bim.jpeg?height=200&width=300"
              tags={["Next.js", "API REST", "SQL"]}
              fullDescription="Sikabôlô est une solution digitale innovante de scoring de crédit développée lors d'un hackathon organisé par Digifemmes et Ecobank. C'est une application mobile utilisant un modèle de scoring basé sur des données alternatives pour faciliter l’accès au crédit et l’intégration bancaire des femmes entrepreneures. Conçue pour répondre aux besoins des commerçantes informelles ivoiriennes souvent exclues du système bancaire faute de garanties et de documents financiers, elle permet aux institutions de mieux évaluer leur solvabilité et de leur offrir des solutions de financement adaptées."
              githubUrl="https://github.com/audreyfrebi/sikabolo"
              liveUrl="https://sikabolo.vercel.app"
            />

            <ProjectCard
              title="Jawondi 🎨"
              description="Conception d'une maquette Figma pour une plateforme digitale."
              image="/boum.svg?height=200&width=300"
              tags={["UI/UX Design", "Figma"]}
              fullDescription="Jawondi est un projet de conception UI/UX pour une plateforme digitale. J'ai créé l'ensemble des maquettes sur Figma, en mettant l'accent sur l'expérience utilisateur et l'esthétique moderne. Le projet comprend des wireframes, des prototypes interactifs et une documentation complète du design system. Cette maquette a ensuite été utilisée comme référence pour le développement de la plateforme."
              liveUrl="https://www.figma.com/file/jawondi-project"
            />

            <ProjectCard
              title="Golden Instinct 🛍️"
              description="Site internet e-commerce développé avec PHP et TailwindCSS."
              image="/placeholder.svg?height=200&width=300"
              tags={["PHP", "SQL", "TailwindCSS"]}
              fullDescription="Golden Instinct est un site complet développé avec PHP et stylisé avec TailwindCSS. J’ai principalement géré le back-end et la base de données du site web de Golden Instinct, une entreprise multiservices. En utilisant PHP pour la logique serveur et MongoDB pour la gestion des données, j’ai développé une architecture robuste et optimisée. Mon travail a inclus la mise en place d’une API sécurisée, la gestion des utilisateurs et des transactions, ainsi que l’optimisation des requêtes pour assurer des performances élevées. Ce projet m’a permis de renforcer mes compétences en développement back-end, gestion de bases de données NoSQL et sécurisation des applications web."
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
          <p>© {new Date().getFullYear()} AUDREY FREBI - Développeuse Junior. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  )
}

