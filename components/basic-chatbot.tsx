"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageSquare, X, Send } from "lucide-react"

type Message = {
  content: string
  isBot: boolean
}

export function BasicChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  // Focus sur l'input quand le chat s'ouvre
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  const toggleChat = () => {
    const newIsOpen = !isOpen
    setIsOpen(newIsOpen)

    // Message de bienvenue
    if (newIsOpen && messages.length === 0) {
      setMessages([{ content: "Bonjour ! Comment puis-je vous aider ?", isBot: true }])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!inputValue.trim()) return

    // Ajouter le message de l'utilisateur
    const userMessage = { content: inputValue, isBot: false }

    // Réponse simple du bot
    const botResponse = {
      content: "Merci pour votre message. Je vous répondrai dès que possible.",
      isBot: true,
    }

    setMessages((prev) => [...prev, userMessage, botResponse])
    setInputValue("")
  }

  return (
    <>
      {/* Bouton pour ouvrir le chat */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 z-50"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}

      {/* Fenêtre de chat */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 bg-white rounded-lg shadow-xl z-50 flex flex-col">
          {/* En-tête */}
          <div className="bg-blue-900 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-medium">Chat</h3>
            <button onClick={toggleChat} className="text-white hover:text-gray-200">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 h-64 overflow-y-auto bg-gray-50 flex-grow">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 p-3 rounded-lg max-w-[80%] ${
                  msg.isBot ? "bg-blue-100 text-gray-800 mr-auto" : "bg-orange-500 text-white ml-auto"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          {/* Formulaire d'entrée - version simplifiée */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 flex">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Écrivez votre message..."
              className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none"
              autoComplete="off"
            />
            <button type="submit" className="bg-orange-500 text-white p-2 rounded-r-md hover:bg-orange-600">
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
