"use server"

import { createClient } from "@/lib/supabase/server"

export async function submitContactForm(formData: FormData) {
  try {
    // Get form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    // Validate form data
    if (!name || !email || !message) {
      return {
        success: false,
        error: "Tous les champs sont requis",
      }
    }

    // Create Supabase client
    const supabase = createClient()

    // Insert data into contact_messages table
    const { error } = await supabase.from("contact_messages").insert([{ name, email, message }])

    if (error) {
      console.error("Error submitting contact form:", error)
      return {
        success: false,
        error: "Erreur lors de l'envoi du message",
      }
    }

    return {
      success: true,
    }
  } catch (error) {
    console.error("Error in submitContactForm:", error)
    return {
      success: false,
      error: "Une erreur est survenue",
    }
  }
}

