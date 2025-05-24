import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, CheckCircle } from "lucide-react"
import Link from "next/link"

interface CaseStudyCardProps {
  title: string
  client: string
  description: string
  results: string[]
  image: string
  colorClass?: string
}

export default function CaseStudyCard({
  title,
  client,
  description,
  results,
  image,
  colorClass = "from-caribbean to-midnight-3",
}: CaseStudyCardProps) {
  return (
    <Card
      className={`flex flex-col h-full overflow-hidden transition-all duration-200 hover:shadow-lg bg-gradient-to-br ${colorClass} border-none text-white`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6">
          <CardHeader className="p-0 pb-2">
            <div className="text-sm text-gray-300 mb-1">{client}</div>
            <CardTitle className="text-xl">{title}</CardTitle>
          </CardHeader>
          <CardContent className="p-0 pt-4">
            <CardDescription className="text-sm text-gray-200 mb-4">{description}</CardDescription>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Key Results:</h4>
              <ul className="space-y-1">
                {results.map((result, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-caribbean mt-0.5 flex-shrink-0" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="#"
              className="inline-flex items-center text-caribbean hover:text-white transition-colors mt-4 text-sm"
            >
              Read Full Case Study
              <ArrowUpRight className="ml-1 h-3 w-3" />
            </Link>
          </CardContent>
        </div>
        <div className="h-full">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
    </Card>
  )
}
