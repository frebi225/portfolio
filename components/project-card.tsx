"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

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
          "overflow-hidden transition-all duration-300 border-none shadow-md h-full",
          isHovered && "shadow-xl scale-[1.02]",
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg?height=200&width=300"}
            alt={title}
            fill
            className={cn("object-cover transition-transform duration-500", isHovered && "scale-110")}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-end p-4">
            <div className="flex gap-2">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                >
                  <Github className="h-5 w-5 text-white" />
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                >
                  <ExternalLink className="h-5 w-5 text-white" />
                </a>
              )}
            </div>
          </div>
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-blue-900">{title}</DialogTitle>
            <DialogDescription className="flex flex-wrap gap-1 mt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-1 mb-1"
                >
                  {tag}
                </span>
              ))}
            </DialogDescription>
          </DialogHeader>

          <div className="relative h-64 w-full my-4 rounded-md overflow-hidden">
            <Image src={image || "/placeholder.svg?height=200&width=300"} alt={title} fill className="object-cover" />
          </div>

          <div className="space-y-4">
            <p className="text-gray-700">{fullDescription || description}</p>

            <div className="flex flex-wrap gap-3 pt-2">
              {githubUrl && (
                <Button variant="outline" className="gap-2" onClick={() => window.open(githubUrl, "_blank")}>
                  <Github className="h-4 w-4" />
                  Code Source
                </Button>
              )}

              {liveUrl && (
                <Button
                  className="gap-2 bg-orange-500 hover:bg-orange-600"
                  onClick={() => window.open(liveUrl, "_blank")}
                >
                  <ExternalLink className="h-4 w-4" />
                  Voir le projet
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

