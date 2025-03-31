"use client"

import { Progress } from "@/components/ui/progress"

interface SkillBarProps {
  name: string
  value: number
}

export function SkillBar({ name, value }: SkillBarProps) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-gray-700">{name}</span>
        <span className="text-orange-500">{value}%</span>
      </div>
      <Progress value={value} className="h-2 bg-gray-200" indicatorClassName="bg-orange-500" />
    </div>
  )
}

