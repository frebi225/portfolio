"use server"

interface NotificationEmailProps {
  name: string
  email: string
  message: string
}

interface ChatNotificationProps {
  conversationId: string
  message: string
  timestamp: string
}

export async function sendNotificationEmail({ name, email, message }: NotificationEmailProps) {
  try {
    // Récupérer l'adresse email de destination depuis les variables d'environnement
    const destinationEmail = "audreyfrebi900@gmail.com"

    // Construire le corps de l'email
    const emailBody = `
      Nouveau message de contact reçu sur votre portfolio:
      
      Nom: ${name}
      Email: ${email}
      
      Message:
      ${message}
      
      Ce message a été envoyé depuis votre formulaire de contact.
    `

    // Utiliser l'API Resend pour envoyer l'email
    // Note: Dans un environnement de production, vous devriez utiliser un service d'email comme Resend, SendGrid, etc.
    // Pour cette démonstration, nous allons simplement logger le message
    console.log("Email de notification qui serait envoyé:", {
      to: destinationEmail,
      subject: `Nouveau message de contact de ${name}`,
      body: emailBody,
    })

    // Dans un environnement réel, vous utiliseriez un code comme celui-ci:
    /*
    const { error } = await resend.emails.send({
      from: 'Portfolio <noreply@votredomaine.com>',
      to: [destinationEmail],
      subject: `Nouveau message de contact de ${name}`,
      text: emailBody,
    });
    
    if (error) {
      throw new Error(`Erreur lors de l'envoi de l'email: ${error.message}`);
    }
    */

    return { success: true }
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email de notification:", error)
    return { success: false, error }
  }
}

export async function sendChatNotification({ conversationId, message, timestamp }: ChatNotificationProps) {
  try {
    // Récupérer l'adresse email de destination depuis les variables d'environnement
    const destinationEmail = "audreyfrebi900@gmail.com"

    // Formater la date pour l'affichage
    const formattedDate = new Date(timestamp).toLocaleString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

    // Construire le corps de l'email
    const emailBody = `
      Nouvelle question reçue sur le chatbot de votre portfolio:
      
      Date: ${formattedDate}
      ID de conversation: ${conversationId}
      
      Message du visiteur:
      "${message}"
      
      Vous pouvez consulter l'historique complet de cette conversation dans votre espace d'administration.
    `

    // Utiliser l'API Resend pour envoyer l'email
    // Note: Dans un environnement de production, vous devriez utiliser un service d'email comme Resend, SendGrid, etc.
    // Pour cette démonstration, nous allons simplement logger le message
    console.log("Email de notification de chat qui serait envoyé:", {
      to: destinationEmail,
      subject: `Nouvelle question sur votre chatbot`,
      body: emailBody,
    })

    // Dans un environnement réel, vous utiliseriez un code comme celui-ci:
    /*
    const { error } = await resend.emails.send({
      from: 'Portfolio Chatbot <noreply@votredomaine.com>',
      to: [destinationEmail],
      subject: `Nouvelle question sur votre chatbot`,
      text: emailBody,
    });
    
    if (error) {
      throw new Error(`Erreur lors de l'envoi de l'email: ${error.message}`);
    }
    */

    return { success: true }
  } catch (error) {
    console.error("Erreur lors de l'envoi de la notification de chat:", error)
    return { success: false, error }
  }
}
