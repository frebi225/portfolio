"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"

interface MessageEntry {
  sender: string
  content: string
  timestamp: string
}

interface Conversation {
  id: number
  conversation_id: string
  messages: MessageEntry[]
  last_message: string
  last_sender: string
  last_timestamp: string
  created_at: string
  updated_at: string
}

export default function AdminChatPage() {
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        setIsLoading(true)
        const supabase = createClient()

        const { data, error } = await supabase
          .from("conversations")
          .select("*")
          .order("updated_at", { ascending: false })

        if (error) {
          throw error
        }

        if (data) {
          setConversations(data)

          // Sélectionner la première conversation par défaut
          if (data.length > 0 && !selectedConversation) {
            setSelectedConversation(data[0].conversation_id)
          }
        }
      } catch (err) {
        console.error("Erreur lors de la récupération des conversations:", err)
        setError("Impossible de charger les conversations")
      } finally {
        setIsLoading(false)
      }
    }

    fetchConversations()

    // Rafraîchir les données toutes les 30 secondes
    const interval = setInterval(fetchConversations, 30000)
    return () => clearInterval(interval)
  }, [selectedConversation])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const selectedConversationData = conversations.find((conv) => conv.conversation_id === selectedConversation)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Chargement des conversations...</h1>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Historique des conversations</h1>
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p>{error}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Historique des conversations</h1>

        {conversations.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow">
            <p>Aucune conversation trouvée.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Liste des conversations */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4 bg-blue-900 text-white">
                <h2 className="font-semibold">Conversations</h2>
              </div>
              <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
                {conversations.map((conv) => (
                  <button
                    key={conv.conversation_id}
                    className={`w-full text-left p-4 hover:bg-gray-50 transition-colors ${
                      selectedConversation === conv.conversation_id ? "bg-blue-50" : ""
                    }`}
                    onClick={() => setSelectedConversation(conv.conversation_id)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="truncate flex-1">
                        <p className="font-medium">Conversation #{conv.conversation_id.substring(0, 8)}...</p>
                        <p className="text-sm text-gray-500 truncate">
                          <span className={conv.last_sender === "Visiteur" ? "font-semibold" : ""}>
                            {conv.last_sender}:
                          </span>{" "}
                          {conv.last_message}
                        </p>
                      </div>
                      <span className="text-xs text-gray-400 whitespace-nowrap ml-2">
                        {formatDate(conv.last_timestamp)}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Détail de la conversation */}
            <div className="bg-white rounded-lg shadow md:col-span-2">
              <div className="p-4 bg-blue-900 text-white">
                <h2 className="font-semibold">
                  {selectedConversationData
                    ? `Conversation #${selectedConversation?.substring(0, 8)}...`
                    : "Sélectionnez une conversation"}
                </h2>
              </div>

              {selectedConversationData ? (
                <div className="p-4 max-h-[600px] overflow-y-auto">
                  {selectedConversationData.messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`mb-4 p-3 rounded-lg max-w-[80%] ${
                        msg.sender === "Assistant"
                          ? "bg-blue-100 text-gray-800 mr-auto"
                          : "bg-orange-500 text-white ml-auto"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-sm">{msg.sender}</span>
                        <span className="text-xs opacity-70">{formatDate(msg.timestamp)}</span>
                      </div>
                      <p>{msg.content}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-gray-500">
                  Sélectionnez une conversation pour voir les messages
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
