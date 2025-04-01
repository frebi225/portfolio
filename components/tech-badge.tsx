interface TechBadgeProps {
  name: string
  value: number
}

export function TechBadge({ name, value }: TechBadgeProps) {
  // Déterminer la couleur de fond en fonction de la valeur
  const getBgColor = (val: number) => {
    if (val >= 70) return "from-green-100 to-green-200 text-green-800 border-green-300"
    if (val >= 50) return "from-blue-100 to-blue-200 text-blue-800 border-blue-300"
    if (val >= 30) return "from-yellow-100 to-yellow-200 text-yellow-800 border-yellow-300"
    return "from-gray-100 to-gray-200 text-gray-800 border-gray-300"
  }

  return (
    <div
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border bg-gradient-to-r ${getBgColor(value)} shadow-sm hover:shadow-md transition-all hover:-translate-y-1`}
    >
      {name}
      <span className="ml-2 text-xs opacity-80 font-bold">{value}%</span>
    </div>
  )
}

