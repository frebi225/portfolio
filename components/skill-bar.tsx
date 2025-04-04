"use client"

import { useEffect, useState } from "react"

interface SkillBarProps {
  name: string
  value: number
}

export function SkillBar({ name, value }: SkillBarProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 300)
    return () => clearTimeout(timer)
  }, [value])

  return (
    <div className="space-y-1 transition-all duration-300 hover:translate-x-1">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-gray-700">{name}</span>
        <span className="text-orange-500 font-semibold">{value}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-600 to-orange-500" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  )
}

