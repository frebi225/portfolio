"use client"

export function useEmail() {
  const openEmailClient = (email: string) => {
    // Vérifier si l'appareil est mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    if (isMobile) {
      // Sur mobile, utiliser mailto: qui ouvrira l'application de messagerie par défaut
      window.location.href = `mailto:${email}`
    } else {
      // Sur desktop, ouvrir Gmail dans le navigateur
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank")
    }
  }

  return { openEmailClient }
}

