"use client"

import type React from "react"

import { useState } from "react"
import { HelpCircle, X, Send } from "lucide-react"

export function SimpleHelp() {
  const [isOpen, setIsOpen] = useState(false)
  const [question, setQuestion] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim()) return

    // Marquer comme soumis pour afficher le message de confirmation
    setSubmitted(true)

    // Réinitialiser après 5 secondes
    setTimeout(() => {
      setIsOpen(false)
      setQuestion("")
      setSubmitted(false)
    }, 5000)
  }

  return (
    <>
      {/* Bouton d'aide */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 z-50"
        >
          <HelpCircle className="h-6 w-6" />
        </button>
      )}

      {/* Formulaire d'aide */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 bg-white rounded-lg shadow-xl z-50 overflow-hidden">
          <div className="bg-blue-900 text-white p-4 flex justify-between items-center">
            <h3 className="font-medium">Besoin d'aide ?</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-4">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-sm text-gray-600">Posez votre question et Audrey vous répondra dès que possible.</p>
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Votre question..."
                  className="w-full p-2 border border-gray-300 rounded-md h-24 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Envoyer
                </button>
              </form>
            ) : (
              <div className="text-center py-6">
                <div className="text-green-500 font-bold mb-2">Message envoyé !</div>
                <p className="text-sm text-gray-600">
                  Merci pour votre question. Audrey vous répondra dès que possible.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
