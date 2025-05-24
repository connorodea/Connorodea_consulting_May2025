import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  colorClass?: string
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  colorClass = "from-caribbean to-midnight-2",
}: ServiceCardProps) {
  return (
    <Card
      className={`flex flex-col h-full overflow-hidden transition-all duration-200 hover:shadow-lg bg-gradient-to-br ${colorClass} border-none text-white`}
    >
      <CardHeader className="pb-2">
        <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-gray-200">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
