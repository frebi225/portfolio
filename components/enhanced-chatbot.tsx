"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { MessageSquare, X, Send } from "lucide-react"
import Image from "next/image"

type Message = {
  content: string
  isBot: boolean
}

export function EnhancedChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [conversationId, setConversationId] = useState<string>("")
  const [userName, setUserName] = useState<string>("")
  const [askedForName, setAskedForName] = useState(false)
  const [nameConfirmed, setNameConfirmed] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Générer un ID de conversation unique au premier rendu
  useEffect(() => {
    setConversationId(`conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`)
  }, [])

  // Fonction pour ouvrir/fermer le chat
  const toggleChat = () => {
    const newIsOpen = !isOpen
    setIsOpen(newIsOpen)

    // Ajouter un message de bienvenue si c'est la première ouverture
    if (newIsOpen && messages.length === 0) {
      const welcomeMessage = {
        content: "Bonjour ! Je suis l'assistant virtuel d'Audrey. Comment vous appelez-vous ?",
        isBot: true,
      }
      setMessages([welcomeMessage])
      setAskedForName(true)

      // Enregistrer le message de bienvenue
      logChatMessage("Assistant", welcomeMessage.content)
    }
  }

  // Fonction pour enregistrer un message dans la base de données
  const logChatMessage = async (sender: string, messageContent: string) => {
    try {
      console.log("Envoi du message à l'API:", { conversationId, sender, message: messageContent })

      const response = await fetch("/api/chat-log", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          conversationId,
          sender,
          message: messageContent,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        console.error("Erreur lors de l'enregistrement du message:", data)
      } else {
        console.log("Message enregistré avec succès:", data)
      }
    } catch (error) {
      console.error("Erreur lors de l'enregistrement du message:", error)
      // Ne pas bloquer l'expérience utilisateur si l'enregistrement échoue
    }
  }

  // Faire défiler automatiquement vers le bas lorsque de nouveaux messages sont ajoutés
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Gérer la soumission du message
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!message.trim()) return

    // Ajouter le message de l'utilisateur
    const userMessage = { content: message, isBot: false }
    setMessages((prev) => [...prev, userMessage])

    // Enregistrer le message de l'utilisateur
    logChatMessage("Visiteur", message)

    // Réinitialiser le champ de saisie
    const currentMessage = message
    setMessage("")

    // Simuler la réponse du bot
    setIsTyping(true)

    setTimeout(async () => {
      let botResponse = ""

      // Si nous avons demandé le nom et que l'utilisateur n'a pas encore confirmé son nom
      if (askedForName && !nameConfirmed) {
        // Extraire le nom de la réponse de l'utilisateur
        const extractedName = extractName(currentMessage)

        if (extractedName) {
          setUserName(extractedName)
          botResponse = `Ravi de vous rencontrer, ${extractedName} ! Comment puis-je vous aider aujourd'hui ? Vous pouvez me poser des questions sur Audrey, ses compétences, ses projets ou sa formation.`
          setAskedForName(false)
          setNameConfirmed(true)
        } else {
          botResponse = "Je n'ai pas bien compris votre nom. Pourriez-vous me le donner à nouveau, s'il vous plaît ?"
        }
      } else {
        // Générer une réponse personnalisée avec le nom de l'utilisateur
        botResponse = generateResponse(currentMessage)
      }

      setMessages((prev) => [...prev, { content: botResponse, isBot: true }])
      setIsTyping(false)

      // Enregistrer la réponse du bot
      logChatMessage("Assistant", botResponse)
    }, 1000)
  }

  // Le reste du code reste inchangé...
  // Extraire le nom de la réponse de l'utilisateur
  const extractName = (input: string): string | null => {
    // Nettoyer l'entrée
    const cleanInput = input.trim()

    // Liste de mots à exclure (mots communs qui ne sont pas des noms)
    const commonWords = [
      "je",
      "tu",
      "il",
      "elle",
      "nous",
      "vous",
      "ils",
      "elles",
      "suis",
      "es",
      "est",
      "sommes",
      "êtes",
      "sont",
      "le",
      "la",
      "les",
      "un",
      "une",
      "des",
      "du",
      "de",
      "ce",
      "cette",
      "ces",
      "mon",
      "ma",
      "mes",
      "ton",
      "ta",
      "tes",
      "son",
      "sa",
      "ses",
      "notre",
      "nos",
      "votre",
      "bonsoir",
      "salut",
      "bonne nuit",
      "bonne journée",
      "bonne",
      "nuit",
      "journée",
      "jour",
      "vos",
      "leur",
      "leurs",
      "et",
      "ou",
      "mais",
      "donc",
      "car",
      "ni",
      "or",
      "que",
      "qui",
      "quoi",
      "comment",
      "pourquoi",
      "quand",
      "où",
      "combien",
      "bonjour",
      "salut",
      "hello",
      "hi",
      "hey",
      "coucou",
      "oui",
      "non",
      "peut-être",
      "merci",
      "svp",
      "s'il vous plaît",
      "bien",
      "mal",
      "bon",
      "mauvais",
      "super",
      "nul",
      "ici",
      "là",
      "maintenant",
      "aujourd'hui",
      "demain",
      "hier",
    ]

    // Patterns pour extraire le nom
    const namePatterns = [
      /je m'appelle\s+([A-Za-zÀ-ÿ]+)/i,
      /mon nom est\s+([A-Za-zÀ-ÿ]+)/i,
      /c'est\s+([A-Za-zÀ-ÿ]+)/i,
      /appelle[r]? moi\s+([A-Za-zÀ-ÿ]+)/i,
      /je suis\s+([A-Za-zÀ-ÿ]+)/i,
    ]

    // Essayer d'extraire le nom avec les patterns
    for (const pattern of namePatterns) {
      const match = cleanInput.match(pattern)
      if (match && match[1]) {
        const potentialName = match[1]

        // Vérifier que le nom potentiel n'est pas un mot commun
        if (!commonWords.includes(potentialName.toLowerCase())) {
          return potentialName.charAt(0).toUpperCase() + potentialName.slice(1).toLowerCase()
        }
      }
    }

    // Si aucun pattern ne correspond, vérifier si l'entrée est un seul mot qui pourrait être un nom
    if (cleanInput.split(/\s+/).length === 1 && !commonWords.includes(cleanInput.toLowerCase())) {
      return cleanInput.charAt(0).toUpperCase() + cleanInput.slice(1).toLowerCase()
    }

    // Si l'entrée contient plusieurs mots, prendre le premier mot qui n'est pas dans la liste des mots communs
    const words = cleanInput.split(/\s+/)
    for (const word of words) {
      if (word.length > 1 && !commonWords.includes(word.toLowerCase())) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      }
    }

    // Si tout échoue, retourner null pour indiquer qu'aucun nom n'a été trouvé
    return null
  }

  // Générer une réponse personnalisée
  const generateResponse = (userInput: string): string => {
    const input = userInput.toLowerCase().trim()
    const greeting = userName ? `${userName}, ` : ""

    // Tableau de correspondances entre mots-clés et réponses
    const responses = [
      {
        keywords: ["open source", "opensource", "open-source", "github", "contribution"],
        response: `${greeting}oui, Audrey a travaillé sur des projets open-source. Vous pouvez retrouver ses contributions sur son profil GitHub (https://github.com/frebi225). Elle a notamment partagé des projets comme ASCII Art, un outil CLI pour convertir du texte en art ASCII, et d'autres projets personnels qu'elle a rendus publics pour la communauté.`,
      },
      {
        keywords: [
          "compétence",
          "competence",
          "technologie",
          "savoir faire",
          "connaissance",
          "maîtrise",
          "maitrise",
          "skill",
          "langage",
          "framework",
          "outil",
        ],
        response: `${greeting}Audrey maîtrise plusieurs technologies comme Go, JavaScript, PHP, Docker et GraphisteQL. Elle a également des compétences en administration système (80%), développement front-end (55%) et back-end (55%). Elle travaille aussi avec HTML, CSS, Git, et d'autres technologies comme Python, SQL et Ruby.`,
      },
      {
        keywords: [
          "projet",
          "portfolio",
          "réalisation",
          "realisation",
          "travail",
          "développé",
          "developpe",
          "créé",
          "cree",
          "application",
        ],
        response: `${greeting}Audrey a travaillé sur plusieurs projets comme Sikabôlô (scoring de crédit), Allo Depann+ (assistance routière), et Golden Instinct (e-commerce). Elle a également développé Make Your Game (jeu vidéo en JavaScript), Groupie Trackers (API REST), et un Forum en temps réel. Vous pouvez voir tous ses projets dans la section 'Réalisations'.`,
      },
      {
        keywords: [
          "formation",
          "parcours",
          "étude",
          "etude",
          "école",
          "ecole",
          "diplôme",
          "diplome",
          "éducation",
          "education",
        ],
        response: `${greeting}Audrey est issue d'une formation en microbiologie et a progressivement élargi ses compétences vers le développement web et la gestion de projets digitaux. Elle a suivi plusieurs formations intensives en développement full-stack pour acquérir son expertise actuelle.`,
      },
      {
        keywords: ["service", "freelance", "offre", "proposition", "prestation"],
        response: `${greeting}Audrey propose trois principaux services en freelance : développement web (création de sites modernes avec Go, JavaScript et SQL), optimisation de code (amélioration des performances d'applications existantes), et gestion de projet tech (mise en place de workflows Agile/Trello). Vous pouvez en savoir plus dans la section 'Services'.`,
      },
      {
        keywords: ["expérience", "experience", "professionnelle", "emploi", "job", "carrière", "carriere"],
        response: `${greeting}Audrey a acquis de l'expérience à travers divers projets comme Golden Instinct où elle a géré le back-end et la base de données. Elle a également participé à des hackathons comme celui où elle a développé Sikabôlô, une solution de scoring de crédit pour Digifemmes et Ecobank.`,
      },
      {
        keywords: [
          "disponible",
          "disponibilité",
          "disponibilite",
          "quand",
          "délai",
          "delai",
          "commencer",
          "début",
          "debut",
        ],
        response: `${greeting}Audrey est actuellement disponible pour de nouvelles missions freelance. Pour discuter de votre projet et de sa disponibilité précise, n'hésitez pas à la contacter via le formulaire de contact ou directement par email.`,
      },
      {
        keywords: ["tarif", "prix", "coût", "cout", "facturation", "budget", "devis", "estimation"],
        response: `${greeting}les tarifs d'Audrey varient selon la nature et la complexité de votre projet. Elle propose des tarifs à la journée ou au forfait selon vos besoins. Pour obtenir un devis personnalisé, veuillez la contacter directement via le formulaire de contact ou par email.`,
      },
      {
        keywords: ["méthode", "methode", "méthodologie", "methodologie", "processus", "approche", "agile", "scrum"],
        response: `${greeting}Audrey adopte une approche axée sur la résolution de problèmes et l'amélioration continue. Elle utilise des méthodologies Agile/Scrum pour gérer efficacement les projets et aime collaborer avec des équipes pluridisciplinaires. Sa méthode de travail est structurée, avec des points réguliers pour assurer que le projet avance dans la bonne direction.`,
      },
      {
        keywords: ["langue", "parle", "anglais", "français", "francais", "communication"],
        response: `${greeting}Audrey parle couramment français et possède un bon niveau d'anglais professionnel, ce qui lui permet de travailler sur des projets internationaux et de communiquer efficacement avec des clients ou collaborateurs anglophones.`,
      },
      {
        keywords: ["bonjour", "salut", "hello", "hi", "hey", "coucou"],
        response: userName
          ? `Bonjour ${userName} ! Comment puis-je vous aider à en savoir plus sur Audrey ?`
          : `Bonjour ! Comment puis-je vous aider à en savoir plus sur Audrey ?`,
      },
      {
        keywords: ["cv", "curriculum", "resume", "télécharger"],
        response: `${greeting}vous pouvez télécharger le CV d'Audrey en cliquant sur le bouton 'Télécharger CV' en haut de la page ou en bas dans la section contact.`,
      },
      {
        keywords: ["contact", "email", "mail", "joindre", "contacter", "téléphone", "telephone"],
        response: `${greeting}vous pouvez contacter Audrey par email à audreyfrebi900@gmail.com ou via le formulaire de contact en bas de page. Elle vous répondra dans les plus brefs délais.`,
      },
      {
        keywords: ["qui", "qui est", "présentation", "presentation", "à propos", "a propos", "audrey", "personne"],
        response: `${greeting}Audrey Frebi est une développeuse Full Stack Junior passionnée par le code propre et l'innovation digitale. Issue d'une formation en microbiologie, elle s'est reconvertie dans le développement web et la gestion de projets numériques.`,
      },
    ]

    // Traitement spécial pour les questions de genre (il/elle)
    if (
      input.includes("il") &&
      !input.includes("elle") &&
      (input.includes("travail") || input.includes("fait") || input.includes("est"))
    ) {
      return `${greeting}je dois préciser qu'Audrey est une femme, donc on utilise 'elle' pour parler d'elle. Pour répondre à votre question, oui, elle a travaillé sur plusieurs projets, notamment des projets open-source que vous pouvez retrouver sur son GitHub (https://github.com/frebi225).`
    }

    // Chercher une correspondance dans le tableau de réponses
    for (const item of responses) {
      if (item.keywords.some((keyword) => input.includes(keyword))) {
        return item.response
      }
    }

    // Réponse par défaut si aucune correspondance n'est trouvée
    return `${greeting}je suis là pour répondre à vos questions sur Audrey. Vous pouvez me demander des informations sur son parcours, ses compétences, ses projets, sa formation, ses services en freelance, ou comment la contacter. N'hésitez pas à être plus précis dans votre question !`
  }

  // Gérer la touche Entrée
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  // Fonction pour détecter si l'utilisateur écrit
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setMessage(value)
  }

  if (!isOpen) {
    return (
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-blue-900 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 z-[9999] transition-all duration-300 hover:scale-110"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 md:w-96 bg-white rounded-lg shadow-xl z-[9999] overflow-hidden">
      {/* Header */}
      <div className="bg-blue-900 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-white flex-shrink-0">
            <Image src="/moi.png" alt="Audrey Frebi" width={40} height={40} className="object-cover" />
          </div>
          <div>
            <h3 className="font-medium">Assistant d'Audrey</h3>
            <p className="text-xs text-blue-100">{userName ? `Discussion avec ${userName}` : "En ligne"}</p>
          </div>
        </div>
        <button onClick={toggleChat} className="text-white hover:text-gray-200 transition-colors">
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <div id="messages-container" className="p-4 h-80 overflow-y-auto bg-gray-50">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-3 p-3 rounded-lg max-w-[80%] ${
              msg.isBot
                ? "bg-white text-gray-800 mr-auto rounded-bl-none shadow-sm border border-gray-100"
                : "bg-blue-500 text-white ml-auto rounded-br-none"
            }`}
          >
            {msg.content}
          </div>
        ))}
        {isTyping && (
          <div className="mb-3 p-3 rounded-lg max-w-[80%] bg-white text-gray-800 mr-auto rounded-bl-none shadow-sm border border-gray-100">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <textarea
              value={message}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={askedForName ? "Entrez votre nom..." : "Posez une question sur Audrey..."}
              className="flex-1 p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-800"
              rows={2}
              style={{ minHeight: "50px" }}
            />
            <button
              type="submit"
              className="bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 h-10 w-10 flex items-center justify-center flex-shrink-0 transition-colors"
              disabled={!message.trim() || isTyping}
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
          <div className="text-xs text-gray-500 text-center">
            {askedForName
              ? "Veuillez entrer votre nom pour commencer"
              : "Posez des questions sur les compétences, projets ou parcours d'Audrey"}
          </div>
        </div>
      </form>
    </div>
  )
}
