"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface ProjectDialogProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    image: string
    tags: string[]
    fullDescription?: string
    githubUrl?: string
    liveUrl?: string
  }
}

export function ProjectDialog({ isOpen, onClose, project }: ProjectDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-900">{project.title}</DialogTitle>
          <DialogDescription className="text-gray-500">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </DialogDescription>
        </DialogHeader>

        <div className="relative h-64 w-full my-4 rounded-md overflow-hidden">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        </div>

        <div className="space-y-4">
          <p className="text-gray-700">{project.fullDescription || project.description}</p>

          <div className="flex flex-wrap gap-3 pt-2">
            {project.githubUrl && (
              <Button variant="outline" className="gap-2" onClick={() => window.open(project.githubUrl, "_blank")}>
                <Github className="h-4 w-4" />
                Code Source
              </Button>
            )}

            {project.liveUrl && (
              <Button
                className="gap-2 bg-orange-500 hover:bg-orange-600"
                onClick={() => window.open(project.liveUrl, "_blank")}
              >
                <ExternalLink className="h-4 w-4" />
                Voir le projet
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

