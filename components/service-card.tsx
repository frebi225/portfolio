"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Card
      className={cn(
        "bg-blue-800 border-none transition-all duration-300",
        isHovered && "bg-blue-700 transform -translate-y-1",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6 pt-8">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-blue-100 text-sm">{description}</p>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          variant="outline"
          className="mt-4 border-white/20 bg-white text-blue-900 hover:bg-orange-500 hover:text-white hover:border-transparent w-full font-medium"
          onClick={handleContact}
        >
          Me contacter
        </Button>
      </CardFooter>
    </Card>
  )
}

