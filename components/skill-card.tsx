import Image from "next/image"
import { cn } from "@/lib/utils"

interface SkillCardProps {
  title: string
  image: string
  className?: string
}

export function SkillCard({ title, image, className }: SkillCardProps) {
  return (
    <div className={cn("skill-card group h-64 md:h-80", className)}>
      <div className="relative w-full h-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300"></div>
        <h3 className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-primary">{title}</h3>
      </div>
    </div>
  )
}
