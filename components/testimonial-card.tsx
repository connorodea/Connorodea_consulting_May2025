import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  company: string
  colorClass?: string
}

export default function TestimonialCard({
  quote,
  name,
  title,
  company,
  colorClass = "from-midnight-2 to-charcoal",
}: TestimonialCardProps) {
  return (
    <Card
      className={`flex flex-col h-full overflow-hidden transition-all duration-200 hover:shadow-lg bg-gradient-to-br ${colorClass} border-none text-white`}
    >
      <CardHeader className="pb-2">
        <Quote className="h-8 w-8 text-caribbean opacity-50" />
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <p className="text-gray-200 italic mb-6">{quote}</p>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-300">
            {title}, {company}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
