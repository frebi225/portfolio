import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { sendChatNotification } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const { conversationId, sender, message } = await request.json()

    // Validation des données
    if (!conversationId || !sender || !message) {
      return NextResponse.json({ success: false, error: "Données incomplètes" }, { status: 400 })
    }

    // Créer le client Supabase
    const supabase = createClient()

    // Enregistrer le message dans la base de données
    const { error } = await supabase.from("chat_logs").insert([
      {
        conversation_id: conversationId,
        sender,
        message,
        timestamp: new Date().toISOString(),
      },
    ])

    if (error) {
      console.error("Erreur lors de l'enregistrement du message:", error)
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    // Si c'est un message du visiteur, envoyer une notification par email
    if (sender === "Visiteur") {
      try {
        await sendChatNotification({
          conversationId,
          message,
          timestamp: new Date().toISOString(),
        })
      } catch (notifError) {
        console.error("Erreur lors de l'envoi de la notification:", notifError)
        // Ne pas bloquer la réponse si la notification échoue
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erreur dans l'API chat-log:", error)
    return NextResponse.json({ success: false, error: "Une erreur est survenue" }, { status: 500 })
  }
}
