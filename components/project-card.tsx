import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Star } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  name: string
  description: string
  language: string
  stars: number
  url: string
  colorClass?: string
}

export default function ProjectCard({
  name,
  description,
  language,
  stars,
  url,
  colorClass = "from-purple to-purple-2",
}: ProjectCardProps) {
  return (
    <Card
      className={`flex flex-col h-full overflow-hidden transition-all duration-200 hover:shadow-lg bg-gradient-to-br ${colorClass} border-none text-white`}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{name}</CardTitle>
        <div className="flex items-center gap-2 text-sm text-gray-200">
          <span className="flex items-center">
            <span className="mr-1 h-3 w-3 rounded-full bg-caribbean"></span>
            {language}
          </span>
          <span className="flex items-center">
            <Star className="mr-1 h-3 w-3 text-yellow-300" />
            {stars}
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-gray-200">{description}</CardDescription>
      </CardContent>
      <CardFooter className="pt-2">
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm text-gray-200 hover:text-white transition-colors"
        >
          <Github className="mr-1 h-4 w-4" />
          View on GitHub
        </Link>
      </CardFooter>
    </Card>
  )
}
