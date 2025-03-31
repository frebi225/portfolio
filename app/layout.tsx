import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AUDREY FREBI - Développeuse Full Stack Junior",
  description:
    "Portfolio d'AUDREY FREBI, développeuse Full Stack Junior passionnée par le code propre et l'innovation digitale",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'