interface TechBadgeProps {
  name: string
  value: number
}

export function TechBadge({ name, value }: TechBadgeProps) {
  // Déterminer la couleur de fond en fonction de la valeur
  const getBgColor = (val: number) => {
    if (val >= 70) return "bg-green-100 text-green-800"
    if (val >= 50) return "bg-blue-100 text-blue-800"
    if (val >= 30) return "bg-yellow-100 text-yellow-800"
    return "bg-gray-100 text-gray-800"
  }

  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getBgColor(value)}`}>
      {name}
      <span className="ml-2 text-xs opacity-80">{value}%</span>
    </div>
  )
}

