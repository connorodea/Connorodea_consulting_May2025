"use client"

import { useEffect, useState } from "react"
import { Github, Code, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import Link from "next/link"

interface GitHubRepo {
  id: number
  name: string
  description: string
  url: string
  stars: number
  language: string
  topics: string[]
  updatedAt: string
}

export default function GitHubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [languages, setLanguages] = useState<string[]>([])

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setIsLoading(true)
        const response = await fetch("/api/github")

        if (!response.ok) {
          throw new Error("Failed to fetch repositories")
        }

        const data = await response.json()
        setRepos(data.repos)

        // Extract unique languages for filtering
        const uniqueLanguages = Array.from(
          new Set(data.repos.map((repo: GitHubRepo) => repo.language).filter(Boolean)),
        ) as string[]

        setLanguages(uniqueLanguages)
        setError(null)
      } catch (err) {
        setError("Unable to load GitHub projects. Please try again later.")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchRepos()
  }, [])

  const filteredRepos = activeFilter ? repos.filter((repo) => repo.language === activeFilter) : repos

  const handleFilterClick = (language: string) => {
    setActiveFilter(activeFilter === language ? null : language)
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="h-12 w-12 text-caribbean animate-spin mb-4" />
        <p className="text-gray-300">Loading GitHub projects...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Something went wrong</h3>
        <p className="text-gray-300 mb-4">{error}</p>
        <Button onClick={() => window.location.reload()} className="bg-caribbean hover:bg-midnight text-white">
          Try Again
        </Button>
      </div>
    )
  }

  return (
    <div>
      {languages.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {languages.map((language) => (
            <Button
              key={language}
              variant="outline"
              size="sm"
              className={`border-purple-2/30 ${
                activeFilter === language
                  ? "bg-caribbean text-white hover:bg-midnight border-caribbean"
                  : "bg-transparent text-white hover:bg-purple-2/20"
              }`}
              onClick={() => handleFilterClick(language)}
            >
              <Code className="mr-1 h-4 w-4" />
              {language}
            </Button>
          ))}
        </div>
      )}

      {filteredRepos.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredRepos.map((repo, index) => (
            <ProjectCard
              key={repo.id}
              name={repo.name}
              description={repo.description}
              language={repo.language}
              stars={repo.stars}
              url={repo.url}
              colorClass={
                index % 3 === 0
                  ? "from-purple to-purple-2"
                  : index % 3 === 1
                    ? "from-purple-2 to-palatinate"
                    : "from-palatinate to-purple"
              }
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-300">No repositories found with the selected filter.</p>
          {activeFilter && (
            <Button
              onClick={() => setActiveFilter(null)}
              variant="link"
              className="text-caribbean hover:text-white mt-2"
            >
              Clear filter
            </Button>
          )}
        </div>
      )}

      <div className="flex justify-center mt-10">
        <Link href="https://github.com/connorodea" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="gap-2 border-purple-2 text-white hover:bg-purple-2/20">
            <Github className="h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </Link>
      </div>
    </div>
  )
}
