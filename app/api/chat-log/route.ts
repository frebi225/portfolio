import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  try {
    const { conversationId, sender, message } = await request.json()

    // Validation des données
    if (!conversationId || !sender || !message) {
      return NextResponse.json({ success: false, error: "Données incomplètes" }, { status: 400 })
    }

    // Créer le client Supabase
    const supabase = createClient()

    // Ajouter des logs pour le débogage
    console.log("Données reçues:", { conversationId, sender, message })

    const timestamp = new Date().toISOString()
    const newMessageEntry = {
      sender,
      content: message,
      timestamp,
    }

    // Vérifier si la conversation existe déjà
    const { data: existingConversation, error: fetchError } = await supabase
      .from("conversations")
      .select("*")
      .eq("conversation_id", conversationId)
      .maybeSingle()

    console.log("Résultat de la recherche:", { existingConversation, fetchError })

    // Si une erreur autre que "not found" se produit
    if (fetchError && fetchError.code !== "PGSQL_NGRX_0002") {
      console.error("Erreur lors de la vérification de la conversation:", fetchError)
      return NextResponse.json({ success: false, error: fetchError.message }, { status: 500 })
    }

    let result

    if (!existingConversation) {
      // Créer une nouvelle conversation
      console.log("Création d'une nouvelle conversation")

      result = await supabase.from("conversations").insert({
        conversation_id: conversationId,
        messages: [newMessageEntry],
        last_message: message,
        last_sender: sender,
        last_timestamp: timestamp,
        created_at: timestamp,
        updated_at: timestamp,
      })
    } else {
      // Mettre à jour la conversation existante
      console.log("Mise à jour d'une conversation existante")

      const updatedMessages = [...(existingConversation.messages || []), newMessageEntry]

      result = await supabase
        .from("conversations")
        .update({
          messages: updatedMessages,
          last_message: message,
          last_sender: sender,
          last_timestamp: timestamp,
          updated_at: timestamp,
        })
        .eq("conversation_id", conversationId)
    }

    if (result.error) {
      console.error("Erreur lors de l'opération sur la conversation:", result.error)
      return NextResponse.json(
        {
          success: false,
          error: result.error.message,
          details: {
            code: result.error.code,
            hint: result.error.hint,
            details: result.error.details,
          },
        },
        { status: 500 },
      )
    }

    console.log("Opération réussie:", result)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Erreur dans l'API chat-log:", error)
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        stack: error.stack,
      },
      { status: 500 },
    )
  }
}
