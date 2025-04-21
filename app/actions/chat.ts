"use server"

import { createClient } from "@/lib/supabase/server"
import { sendChatNotification } from "@/lib/email"

export async function saveConversation(conversationId: string, sender: string, message: string) {
  try {
    // Créer le client Supabase
    const supabase = createClient()

    // Vérifier si la table chat_conversations existe, sinon la créer
    const { error: tableCheckError } = await supabase.from("chat_conversations").select("id").limit(1).maybeSingle()

    if (tableCheckError) {
      // La table n'existe probablement pas, on la crée
      await supabase.rpc("create_chat_tables")
    }

    // Enregistrer le message dans la base de données
    const { error } = await supabase.from("chat_conversations").insert([
      {
        conversation_id: conversationId,
        sender,
        message,
        timestamp: new Date().toISOString(),
      },
    ])

    if (error) {
      console.error("Erreur lors de l'enregistrement de la conversation:", error)
      return { success: false, error: error.message }
    }

    // Si c'est un message du visiteur, envoyer une notification par email
    if (sender === "Visiteur") {
      await sendChatNotification({
        conversationId,
        message,
        timestamp: new Date().toISOString(),
      })
    }

    return { success: true }
  } catch (error) {
    console.error("Erreur dans saveConversation:", error)
    return { success: false, error: "Une erreur est survenue" }
  }
}

export async function getConversations() {
  try {
    const supabase = createClient()

    const { data, error } = await supabase
      .from("chat_conversations")
      .select("*")
      .order("timestamp", { ascending: true })

    if (error) {
      console.error("Erreur lors de la récupération des conversations:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Erreur dans getConversations:", error)
    return { success: false, error: "Une erreur est survenue" }
  }
}
