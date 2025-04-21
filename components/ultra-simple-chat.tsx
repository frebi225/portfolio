"use client"

import type React from "react"

import { useState } from "react"
import { MessageSquare, X } from "lucide-react"

export function UltraSimpleChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<string[]>([])
  const [debugInfo, setDebugInfo] = useState("")

  // Fonction pour ouvrir/fermer le chat
  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      // Ajouter un message de bienvenue
      setMessages(["Bonjour ! Comment puis-je vous aider ?"])
    }
  }

  // Fonction pour envoyer un message
  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, `Vous: ${message}`, "Bot: Merci pour votre message!"])
      setMessage("")
    }
  }

  // Gérer la touche Entrée
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  // Fonction de débogage
  const logInputState = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDebugInfo(`Valeur: "${e.target.value}", Type: ${typeof e.target.value}`)
    setMessage(e.target.value)
  }

  if (!isOpen) {
    return (
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-full shadow-lg z-50"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-white rounded-lg shadow-xl z-50 flex flex-col">
      {/* En-tête */}
      <div className="bg-blue-900 text-white p-4 rounded-t-lg flex justify-between items-center">
        <h3 className="font-medium">Chat Ultra Simple</h3>
        <button onClick={toggleChat} className="text-white hover:text-gray-200">
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="p-4 h-64 overflow-y-auto bg-gray-50">
        {messages.map((msg, index) => (
          <div key={index} className="mb-3 p-2 bg-blue-100 rounded">
            {msg}
          </div>
        ))}
      </div>

      {/* Zone de débogage */}
      <div className="px-3 py-1 text-xs text-gray-500 border-t border-gray-200">{debugInfo}</div>

      {/* Zone de saisie ultra simplifiée */}
      <div className="p-3 border-t border-gray-200">
        <div className="flex flex-col gap-2">
          <textarea
            value={message}
            onChange={logInputState}
            onKeyDown={handleKeyDown}
            placeholder="Écrivez votre message..."
            className="w-full p-2 border border-gray-300 rounded-md h-20 resize-none"
            style={{ minHeight: "60px" }}
          />
          <button onClick={sendMessage} className="w-full bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600">
            Envoyer
          </button>
        </div>
      </div>
    </div>
  )
}
