"use client"

import type React from "react"

import { useEmail } from "@/hooks/use-email"

interface EmailLinkProps {
  email: string
  children: React.ReactNode
  className?: string
}

export function EmailLink({ email, children, className = "" }: EmailLinkProps) {
  const { openEmailClient } = useEmail()

  return (
    <a
      href={`mailto:${email}`}
      onClick={(e) => {
        e.preventDefault()
        openEmailClient(email)
      }}
      className={className}
    >
      {children}
    </a>
  )
}

