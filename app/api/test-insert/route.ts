import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET(request: Request) {
  try {
    // Créer le client Supabase
    const supabase = createClient()

    // Générer un ID de test
    const testId = `test_${Date.now()}`
    const timestamp = new Date().toISOString()

    // Tenter d'insérer un enregistrement de test
    const { data, error } = await supabase
      .from("conversations")
      .insert({
        conversation_id: testId,
        messages: [{ sender: "Test", content: "Message de test", timestamp }],
        last_message: "Message de test",
        last_sender: "Test",
        last_timestamp: timestamp,
        created_at: timestamp,
        updated_at: timestamp,
      })
      .select()

    if (error) {
      return NextResponse.json(
        {
          success: false,
          error: error.message,
          details: {
            code: error.code,
            hint: error.hint,
            details: error.details,
          },
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      success: true,
      insertedRecord: data,
    })
  } catch (error: any) {
    console.error("Erreur dans l'API de test:", error)
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
