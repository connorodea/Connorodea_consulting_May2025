import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ChevronRight } from "lucide-react"
import Link from "next/link"

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  slug: string
  colorClass?: string
}

export default function BlogCard({
  title,
  excerpt,
  date,
  category,
  image,
  slug,
  colorClass = "from-space to-purple",
}: BlogCardProps) {
  return (
    <Card
      className={`flex flex-col h-full overflow-hidden transition-all duration-200 hover:shadow-lg bg-gradient-to-br ${colorClass} border-none text-white`}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between text-sm text-gray-200 mb-2">
          <span className="bg-caribbean/20 px-2 py-1 rounded-full">{category}</span>
          <span className="flex items-center">
            <Calendar className="mr-1 h-3 w-3" />
            {date}
          </span>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-gray-200">{excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="pt-2">
        <Link
          href={`/blog/${slug}`}
          className="text-sm text-gray-200 hover:text-white transition-colors inline-flex items-center"
        >
          Read More
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}
