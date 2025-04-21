"use client"

import type React from "react"

interface InfoItemProps {
  label: string
  value: string
  link?: string
}

export function InfoItem({ label, value, link }: InfoItemProps) {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>, email: string) => {
    e.preventDefault()

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

  return (
    <div className="mb-4">
      <p className="text-white/60 mb-1">{label} :</p>
      {link ? (
        link.includes("@") ? (
          <a
            href={`mailto:${link}`}
            onClick={(e) => handleEmailClick(e, link)}
            className="text-white hover:text-primary transition-colors"
          >
            {value}
          </a>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition-colors"
          >
            {value}
          </a>
        )
      ) : (
        <p className="text-white font-medium">{value}</p>
      )}
    </div>
  )
}
