import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "AUDREY FREBI - Développeuse Full Stack Junior",
  description:
    "Portfolio d'AUDREY FREBI, développeuse Full Stack Junior passionnée par le code propre et l'innovation digitale",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${poppins.className} bg-[#121212] text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navigation />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

