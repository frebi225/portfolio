"use client"

import type React from "react"

import { useState } from "react"
import { MessageSquare, X, Send } from "lucide-react"
import Image from "next/image"

type Message = {
  content: string
  isBot: boolean
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([])

  // Ouvrir/fermer le chatbot
  const toggleChat = () => {
    const newIsOpen = !isOpen
    setIsOpen(newIsOpen)

    // Ajouter un message de bienvenue si c'est la première ouverture
    if (newIsOpen && messages.length === 0) {
      setMessages([
        {
          content: "Bonjour ! Je suis l'assistant virtuel d'Audrey. Comment puis-je vous aider aujourd'hui ?",
          isBot: true,
        },
      ])
    }
  }

  // Envoyer un message
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    // Ajouter le message de l'utilisateur
    const userMessage = { content: input, isBot: false }

    // Préparer la réponse du bot
    let botResponse = ""
    const lowerInput = input.toLowerCase()

    // Logique de réponse simple
    if (lowerInput.includes("bonjour") || lowerInput.includes("salut") || lowerInput.includes("hello")) {
      botResponse = "Bonjour ! Comment puis-je vous aider à en savoir plus sur Audrey ?"
    } else if (lowerInput.includes("cv") || lowerInput.includes("curriculum")) {
      botResponse =
        "Vous pouvez télécharger le CV d'Audrey en cliquant sur le bouton 'Télécharger CV' en haut de la page."
    } else if (lowerInput.includes("contact") || lowerInput.includes("email")) {
      botResponse = "Vous pouvez contacter Audrey par email à audreyfrebi900@gmail.com ou via le formulaire de contact."
    } else if (lowerInput.includes("compétence") || lowerInput.includes("technologie")) {
      botResponse = "Audrey maîtrise plusieurs technologies comme Go, JavaScript, PHP, Docker et GraphisteQL."
    } else if (lowerInput.includes("projet") || lowerInput.includes("portfolio")) {
      botResponse = "Audrey a travaillé sur plusieurs projets comme Sikabôlô, Allo Depann+, et Golden Instinct."
    } else {
      botResponse =
        "Je suis là pour répondre à vos questions sur Audrey. N'hésitez pas à me demander des informations spécifiques !"
    }

    // Mettre à jour les messages avec la question et la réponse
    setMessages((prev) => [...prev, userMessage, { content: botResponse, isBot: true }])

    // Réinitialiser l'input
    setInput("")
  }

  if (!isOpen) {
    return (
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-blue-900 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 z-50"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 md:w-96 bg-white rounded-lg shadow-xl z-50">
      {/* Header */}
      <div className="bg-blue-900 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-white">
            <Image src="/moi.png" alt="Audrey Frebi" width={40} height={40} className="object-cover" />
          </div>
          <div>
            <h3 className="font-medium">Assistant d'Audrey</h3>
            <p className="text-xs text-blue-100">En ligne</p>
          </div>
        </div>
        <button onClick={toggleChat} className="text-white hover:text-gray-200">
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="p-4 h-80 overflow-y-auto bg-gray-50">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-3 p-3 rounded-lg max-w-[80%] ${
              msg.isBot
                ? "bg-white text-gray-800 mr-auto rounded-bl-none shadow-sm"
                : "bg-blue-500 text-white ml-auto rounded-br-none"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Posez une question..."
          className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-900 text-white p-2 rounded-r-md hover:bg-blue-800"
          disabled={!input.trim()}
        >
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  )
}
