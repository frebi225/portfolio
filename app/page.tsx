"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, Download, Github, Linkedin, Mail, Twitter, Zap, Briefcase,GraduationCap, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { ServiceCard } from "@/components/service-card"
import { ContactForm } from "@/components/contact-form"
import { ParticlesBackground } from "@/components/particles-background"
import { SkillBar } from "@/components/skill-bar"
import { TechBadge } from "@/components/tech-badge"
import { EnhancedChatbot } from "@/components/enhanced-chatbot"
import { useEffect } from "react"
import { ProjectCarousel } from "@/components/project-carousel"
import { EmailLink } from "@/components/email-link"

export default function Home() {
  const handleContactClick = () => {
    // Vérifier si l'appareil est mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    const email = "audreyfrebi900@gmail.com"

    if (isMobile) {
      // Sur mobile, utiliser mailto: qui ouvrira l'application de messagerie par défaut
      window.location.href = `mailto:${email}`
    } else {
      // Sur desktop, ouvrir Gmail dans le navigateur
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank")
    }
  }

  useEffect(() => {
    console.log("Page principale montée, le chatbot devrait être visible")
  }, [])
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <ParticlesBackground />
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 space-y-6 animate-fadeIn">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Salut, moi c'est <span className="text-orange-500">AUDREY FREBI</span> 👋
              </h1>
              <p className="text-xl text-white/90 leading-relaxed text-justify">
              Formée au développement web et à la gestion agile, je conçois des solutions numériques avec passion, 
              en plaçant l’utilité et la collaboration au cœur de chaque projet.
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
                  className="border-white text-black hover:bg-blue-900 hover:text-white transition-all"
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Me contacter <Mail className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-fadeIn animate-delay-300">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                <Image src="portfo.jpg" alt="Portrait d'Audrey Frebi" fill className="object-cover" priority />
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
      <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fadeIn">
            <span className="bg-gradient-to-r from-blue-900 to-orange-500 bg-clip-text text-transparent">
              Mon Parcours et mes Compétences
            </span>
          </h2>

          {/* Parcours */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center">
              <span className="w-10 h-1 bg-orange-500 mr-3"></span>
              Mon Parcours
              <span className="w-10 h-1 bg-orange-500 ml-3"></span>
            </h3>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative w-72 h-72 rounded-lg overflow-hidden border-4 border-orange-500/20 shadow-xl">
                    <Image src="audrey.jpg" alt="Portrait d'Audrey Frebi" fill className="object-cover" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                    Issue d'une formation  initiale en microbiologie, j'ai progressivement élargi mes compétences vers le
                    développement web et la gestion de projets numériques. Curieuse et passionnée par la technologie,
                    j'ai suivi des formations intensives comme le programme Digifemmes et des ateliers professionnels en
                    gestion de projet et création de contenu numérique. Ces expériences m'ont permis d'acquérir des
                    compétences solides en développement full-stack, en gestion agile et en production de supports
                    digitaux. J'ai pu les mettre en pratique à travers divers projets collaboratifs mêlant conception
                    d'interfaces, manipulation de bases de données, interactions en temps réel et création de contenus
                    pédagogiques.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                    À travers mes projets, notamment Golden Instinct et d'autres plateformes interactives, j'ai pu
                    approfondir mes connaissances en back-end, en bases de données et en intégration d'interfaces
                    modernes. Je maîtrise des technologies comme PHP, Next.js, MongoDB et TailwindCSS, et j'adopte des
                    méthodologies agiles pour assurer le bon déroulement des projets.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    Mon approche est axée sur la résolution de problèmes et l'amélioration continue des solutions que je
                    développe. J'aime collaborer avec des équipes pluridisciplinaires et utiliser des méthodes
                    Agile/Scrum pour gérer efficacement les projets.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formations */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center">
              <span className="w-10 h-1 bg-orange-500 mr-3"></span>
              Formations
              <span className="w-10 h-1 bg-orange-500 ml-3"></span>
            </h3>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white mr-4 mt-1">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Programme Digifemmes Développeuse Web</h4>
                    <p className="text-gray-700">Formation intensive en développement web et mobile</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white mr-4 mt-1">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">We.Code — Formation Sécurité Numérique</h4>
                    <p className="text-gray-700">
                      Réseaux, bonnes pratiques, sécurisation sous Linux avec Wireshark et pare-feux
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white mr-4 mt-1">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">
                      Femmes Connectées — Formation intensive aux outils d'IA
                    </h4>
                    <p className="text-gray-700">
                      Outils d'intelligence artificielle pour la productivité, automatisation et génération d'idées
                      innovantes
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Formation en gestion de projet et montage vidéo</h4>
                    <p className="text-gray-700">Simplon / Ministère de la Jeunesse</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white mr-4 mt-1">
                    <Database className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Initiation à l'analyse de données</h4>
                    <p className="text-gray-700">CISCO</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Compétences */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center">
              <span className="w-10 h-1 bg-orange-500 mr-3"></span>
              Mes Compétences
              <span className="w-10 h-1 bg-orange-500 ml-3"></span>
            </h3>

            <div className="space-y-8">
              {/* Compétences Techniques */}
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 animate-fadeIn animate-delay-300">
                <h4 className="font-semibold text-blue-900 mb-6 inline-block relative">
                  <span className="text-xl">Compétences Techniques</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500/50"></span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <SkillBar name="Programmation élémentaire" value={75} />
                    <SkillBar name="Administration système" value={65} />
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
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 animate-fadeIn animate-delay-500">
                <h4 className="font-semibold text-blue-900 mb-6 inline-block relative">
                  <span className="text-xl">Technologies</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500/50"></span>
                </h4>
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
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 animate-fadeIn animate-delay-700">
                <h4 className="font-semibold text-blue-900 mb-6 inline-block relative">
                  <span className="text-xl">Autres Technologies</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500/50"></span>
                </h4>
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


              {/* Compétences transversales */}
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <h4 className="font-semibold text-blue-900 mb-6 inline-block relative">
                  <span className="text-xl">Compétences transversales</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500/50"></span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
                      <h5 className="font-medium text-blue-900 mb-2">Gestion de projet agile</h5>
                      <p className="text-gray-700 text-sm">
                        Utilisation de méthodes Scrum et Kanban pour planifier, organiser et suivre l'avancement des
                        projets.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
                      <h5 className="font-medium text-blue-900 mb-2">Création de contenus digitaux</h5>
                      <p className="text-gray-700 text-sm">
                        Production de vidéos pédagogiques, veille technologique, podcasts et contenus destinés aux
                        réseaux sociaux.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
                      <h5 className="font-medium text-blue-900 mb-2">Outils collaboratifs</h5>
                      <p className="text-gray-700 text-sm">
                        Maîtrise de Trello, Notion, Google Workspace pour le travail en équipe et le suivi des tâches.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
                      <h5 className="font-medium text-blue-900 mb-2">Communication & vulgarisation</h5>
                      <p className="text-gray-700 text-sm">
                        Intérêt pour la simplification des concepts techniques à travers des formats clairs et
                        accessibles, avec une forte volonté d'apprendre à partager ces savoirs de manière engageante
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
                      <h5 className="font-medium text-blue-900 mb-2">Autonomie et adaptabilité</h5>
                      <p className="text-gray-700 text-sm">
                        Capacité à évoluer dans des environnements variés (formation, projets tech, contenus créatifs).
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
                      <h5 className="font-medium text-blue-900 mb-2">Approche scientifique</h5>
                      <p className="text-gray-700 text-sm">
                        Capacité à aborder les problématiques complexes avec méthode et logique, issue de ma formation
                        en microbiologie, et à adapter cette approche aux défis techniques du développement web.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fadeIn">
            <span className="bg-gradient-to-r from-blue-900 to-orange-500 bg-clip-text text-transparent">
              Mes Réalisations Clés
            </span>
          </h2>

          <ProjectCarousel>
          <div className="h-full">
              <ProjectCard
                title="Sikabôlô 💰"
                description="Solution digitale de scoring de crédit, réalisée en Next.js pour un hackathon Digifemmes & Ecobank."
                image="/bim.png"
                tags={["Next.js", "API REST", "SQLite"]}
                fullDescription="Sikabôlô est une solution digitale innovante de scoring de crédit développée lors d'un hackathon organisé par Digifemmes et Ecobank. C'est une application mobile utilisant un modèle de scoring basé sur des données alternatives pour faciliter l'accès au crédit et l'intégration bancaire des femmes entrepreneures. Conçue pour répondre aux besoins des commerçantes informelles ivoiriennes souvent exclues du système bancaire faute de garanties et de documents financiers, elle permet aux institutions de mieux évaluer leur solvabilité et de leur offrir des solutions de financement adaptées."
                githubUrl="https://github.com/audreyfrebi/sikabolo"
                liveUrl="https://sikabolo.vercel.app"
              />
            </div>

            <div className="h-full">
              <ProjectCard
                title="Jawondi 🎨"
                description="Conception d'une maquette Figma pour une plateforme digitale."
                image="/jaw.png"
                tags={["UI/UX Design", "Figma"]}
                fullDescription="Jawondi est un projet de conception UI/UX pour une plateforme digitale. J'ai créé l'ensemble des maquettes sur Figma, en mettant l'accent sur l'expérience utilisateur et l'esthétique moderne. Le projet comprend des wireframes, des prototypes interactifs et une documentation complète du design system. Cette maquette a ensuite été utilisée comme référence pour le développement de la plateforme."
                liveUrl="https://www.figma.com/file/jawondi-project"
              />
            </div>

            <div className="h-full">
              <ProjectCard
                title="Orivie 🏥"
                description="Application mobile e-santé pour l'accès sécurisé au dossier médical numérique en Côte d'Ivoire."
                image="/orivie.png?height=200&width=300"
                tags={["Mobile", "E-santé", "CMU", "IA", "Géolocalisation"]}
                fullDescription="Orivie est une application mobile e-santé révolutionnaire destinée aux patients ivoiriens, permettant un accès sécurisé et centralisé au dossier médical numérique partout en Côte d'Ivoire, même en zone rurale. Elle facilite la prise en charge médicale, améliore la gestion des urgences et offre un suivi continu de la santé grâce à l'intégration du numéro CMU (13 chiffres) comme identifiant unique. L'application propose des fonctionnalités avancées comme l'inscription via numéro CMU, la connexion sécurisée par QR Code, un tableau de bord patient complet, la localisation des centres de santé acceptant la CMU, la Météo Santé avec alertes sanitaires locales, un chatbot IA santé (texte et vocal), et une visualisation cartographique des soins disponibles. Le projet intègre les données publiques ivoiriennes (data.gouv.ci, INS, Ministère de la Santé) et propose un modèle économique freemium pour les patients avec des abonnements professionnels pour les centres de santé."
                githubUrl="https://github.com/audreyfrebi/orivie"
                liveUrl="https://drive.google.com/file/d/1_M3na2DyJ88QRUiySiA0xHHCgMdWp7Xr/view?usp=sharing"
              />
            </div>

            <div className="h-full">
              <ProjectCard
                title="Golden Instinct 🛍️"
                description="Site internet e-commerce développé avec PHP et TailwindCSS."
                image="/golden.jpeg?height=100&width=200"
                tags={["PHP", "SQL", "TailwindCSS"]}
                fullDescription="Golden Instinct est un site complet développé avec PHP et stylisé avec TailwindCSS. J'ai principalement géré le back-end et la base de données du site web de Golden Instinct, une entreprise multiservices. En utilisant PHP pour la logique serveur et MongoDB pour la gestion des données, j'ai développé une architecture robuste et optimisée. Mon travail a inclus la mise en place d'une API sécurisée, la gestion des utilisateurs et des transactions, ainsi que l'optimisation des requêtes pour assurer des performances élevées. Ce projet m'a permis de renforcer mes compétences en développement back-end, gestion de bases de données NoSQL et sécurisation des applications web."
                githubUrl="https://github.com/audreyfrebi/golden-instinct"
                liveUrl="https://golden-instinct.com"
              />
            </div>

            <div className="h-full">
              <ProjectCard
                title="Groupie Trackers 🎵"
                description="Web app affichant des données d'artistes via une API."
                image="/groupie.png?height=200&width=300"
                tags={["Go", "JavaScript", "API REST"]}
                fullDescription="Groupie Trackers est une application web qui utilise une API pour afficher des informations détaillées sur des artistes musicaux. L'application permet aux utilisateurs de rechercher des artistes, de voir leurs dates de concert, leurs albums et d'autres informations pertinentes. J'ai développé cette application en utilisant Go pour le backend et JavaScript pour le frontend."
                githubUrl="https://github.com/audreyfrebi/groupie-trackers"
                liveUrl="https://groupie-trackers.audreyfrebi.com"
              />
            </div>

            <div className="h-full">
              <ProjectCard
                title="Allo Depann+ 🚗"
                description="Plateforme innovante qui connecte en temps réel les automobilistes en difficulté, les dépanneurs et les garages à Abidjan."
                image="/allo.png?height=200&width=300"
                tags={["Mobile", "Géolocalisation", "Temps réel"]}
                fullDescription="🚗 Allo Depann+ est une plateforme innovante qui connecte en temps réel les automobilistes en panne avec des dépanneurs et garages professionnels de proximité, offrant une assistance rapide, géolocalisée et fiable à Abidjan. 🚗⚡"
                githubUrl="https://github.com/audreyfrebi/allodepann"
                liveUrl="https://allodepann.com"
              />
            </div>

            <div className="h-full">
              <ProjectCard
                title="Make Your Game 🎮"
                description="Jeu vidéo développé en JavaScript avec Canvas, proposant une expérience de jeu immersive et interactive."
                image="/brik.png?height=200&width=300"
                tags={["JavaScript", "Canvas", "Game Dev"]}
                fullDescription="Brick Breaker est un jeu d'arcade en solo développé en JavaScript vanilla, optimisé pour fonctionner à 60 FPS. Le jeu comprend une gestion de score, plusieurs niveaux de difficulté croissante et des effets sonores pour enrichir l'expérience utilisateur. En utilisant exclusivement JavaScript et la manipulation du DOM, sans aucune dépendance externe, une expérience de jeu fluide et réactive a été créée, mettant en avant des compétences en programmation JavaScript, en logique de jeu et en gestion des interactions utilisateur."
                githubUrl="https://github.com/audreyfrebi/make-your-game"
                liveUrl="https://make-your-game.audreyfrebi.com"
              />
            </div>

            <div className="h-full">
              <ProjectCard
                title="Forum en temps réel 💬"
                description="Plateforme interactive avec WebSockets pour des discussions instantanées."
                image="/forum.jpeg?height=200&width=300"
                tags={["Go", "SQLite", "JavaScript"]}
                fullDescription="Ce forum en temps réel permet aux utilisateurs de discuter instantanément grâce à l'utilisation de WebSockets. Les messages sont mis à jour en temps réel sans avoir besoin de rafraîchir la page. J'ai utilisé Go pour le backend avec une base de données SQLite pour stocker les messages et les informations des utilisateurs. Le frontend est développé en JavaScript pur pour une expérience légère et rapide."
                githubUrl="https://github.com/audreyfrebi/real-time-forum"
              />
            </div>

            <div className="h-full">
              <ProjectCard
                title="ASCII Art 🎨"
                description="Outil CLI convertissant du texte en ASCII art avec plusieurs styles."
                image="/art.png?height=200&width=300"
                tags={["Go", "Shell"]}
                fullDescription="ASCII Art est un outil en ligne de commande qui permet de convertir du texte en art ASCII avec différents styles et polices. L'outil prend en charge plusieurs options de personnalisation comme la taille, l'alignement et les couleurs. Développé entièrement en Go, cet outil peut être utilisé dans des scripts shell ou directement dans le terminal."
                githubUrl="https://github.com/audreyfrebi/ascii-art"
                />
                </div>
              </ProjectCarousel>
            </div>
          </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-blue-900 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white animate-fadeIn">
            <span className="text-orange-500">Mes services (Freelance)</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 animate-fadeIn animate-delay-100">
                    <div className="flex-shrink-0 w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Création de sites vitrines</h3>
                      <p className="text-blue-100 text-sm">Pour particuliers ou petites entreprises</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 animate-fadeIn animate-delay-300">
                    <div className="flex-shrink-0 w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Développement d'interfaces responsives</h3>
                      <p className="text-blue-100 text-sm">Avec HTML, CSS, JavaScript</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 animate-fadeIn animate-delay-500">
                    <div className="flex-shrink-0 w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Déploiement rapide</h3>
                      <p className="text-blue-100 text-sm">De landing pages ou portails web</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 animate-fadeIn animate-delay-700">
                    <div className="flex-shrink-0 w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Maintenance de sites existants</h3>
                      <p className="text-blue-100 text-sm">Debug, amélioration, refonte</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20 text-center animate-fadeIn animate-delay-900">
                <p className="text-white text-lg leading-relaxed">
                  Je suis à l'écoute de vos besoins, avec <span className="text-orange-500 font-semibold">attention</span>
                  ,<span className="text-orange-500 font-semibold"> créativité</span>, et
                  <span className="text-orange-500 font-semibold"> envie d'apprendre</span>.
                </p>
                <div className="mt-6">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-md transition-all hover:scale-105"
                    onClick={() => {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Discutons de votre projet
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fadeIn">
            <span className="bg-gradient-to-r from-blue-900 to-orange-500 bg-clip-text text-transparent">
              Restons Connectés
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fadeIn animate-delay-300">
              <h3 className="text-2xl font-semibold text-blue-900">Parlons de votre projet</h3>
              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed">
                  Une idée de projet ? Une mission ? Ou juste une question ?
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Écris-moi ! Je suis ouverte aux échanges, collaborations et retours constructifs.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  N'hésite pas à me contacter via le formulaire ou directement par mail.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                {/* Remplacer le lien email dans la section Contact */}
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md transition-transform hover:translate-x-2">
                  <Mail className="h-5 w-5 text-orange-500" />
                  <EmailLink
                    email="audreyfrebi900@gmail.com"
                    className="text-gray-700 hover:text-orange-500 transition-colors"
                  >
                    audreyfrebi900@gmail.com
                  </EmailLink>
                </div>

                <div className="flex gap-4 p-4 bg-white rounded-lg shadow-md">
                  <Link
                    href="https://github.com/frebi1"
                    target="_blank"
                    className="text-gray-700 hover:text-orange-500 transition-colors p-2 hover:bg-gray-100 rounded-full"
                  >
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/audrey-komenan"
                    target="_blank"
                    className="text-gray-700 hover:text-orange-500 transition-colors p-2 hover:bg-gray-100 rounded-full"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>

                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    className="text-gray-700 hover:text-orange-500 transition-colors p-2 hover:bg-gray-100 rounded-full"
                  >
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>

                <div className="pt-4">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
                    onClick={() => window.open("/cv-audrey-frebi.pdf", "_blank")}
                  >
                    <Download className="h-5 w-5" />
                    Télécharger mon CV
                  </Button>
                </div>
              </div>
            </div>

            <div className="animate-fadeIn animate-delay-500">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} AUDREY FREBI - Développeuse Full-Stack Junior. Tous droits réservés.</p>
        </div>
      </footer>

      {/* Utiliser le chatbot amélioré - explicitement rendu ici */}
      <EnhancedChatbot />
    </main>
  )
}

