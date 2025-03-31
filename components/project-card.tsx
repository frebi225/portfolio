"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ProjectDialog } from "./project-dialog"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  fullDescription?: string
  githubUrl?: string
  liveUrl?: string
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  fullDescription,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <Card
        className={cn(
          "overflow-hidden transition-all duration-300 border-none shadow-md",
          isHovered && "shadow-xl scale-[1.02]",
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className={cn("object-cover transition-transform duration-500", isHovered && "scale-110")}
          />
        </div>

        <CardContent className="p-5">
          <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>

          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span key={tag} className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        </CardContent>

        <CardFooter className="p-5 pt-0">
          <Button
            variant="ghost"
            className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 p-0 h-auto font-medium"
            onClick={() => setIsDialogOpen(true)}
          >
            Voir plus <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>

      <ProjectDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        project={{
          title,
          description,
          image,
          tags,
          fullDescription,
          githubUrl,
          liveUrl,
        }}
      />
    </>
  )
}

