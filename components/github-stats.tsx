"use client"

import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"

interface GitHubStats {
  publicRepos: number
  followers: number
  totalStars: number
  totalForks: number
}

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setIsLoading(true)

        // Fetch user data
        const userResponse = await fetch("/api/github/user")
        if (!userResponse.ok) throw new Error("Failed to fetch user data")
        const userData = await userResponse.json()

        // Fetch stars and forks data
        const statsResponse = await fetch("/api/github/stats")
        if (!statsResponse.ok) throw new Error("Failed to fetch stats data")
        const statsData = await statsResponse.json()

        setStats({
          publicRepos: userData.publicRepos,
          followers: userData.followers,
          totalStars: statsData.totalStars,
          totalForks: statsData.totalForks,
        })
      } catch (error) {
        console.error("Error fetching GitHub stats:", error)
        // Set default values if there's an error
        setStats({
          publicRepos: 0,
          followers: 0,
          totalStars: 0,
          totalForks: 0,
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-24">
        <Loader2 className="h-6 w-6 text-caribbean animate-spin" />
      </div>
    )
  }

  // Fallback if stats are null
  const displayStats = stats || {
    publicRepos: 0,
    followers: 0,
    totalStars: 0,
    totalForks: 0,
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-midnight-3/30 rounded-lg p-4 text-center">
        <div className="text-2xl font-bold text-caribbean">{displayStats.publicRepos}</div>
        <div className="text-sm text-gray-300">Repositories</div>
      </div>
      <div className="bg-midnight-3/30 rounded-lg p-4 text-center">
        <div className="text-2xl font-bold text-caribbean">{displayStats.totalStars}</div>
        <div className="text-sm text-gray-300">Stars</div>
      </div>
      <div className="bg-midnight-3/30 rounded-lg p-4 text-center">
        <div className="text-2xl font-bold text-caribbean">{displayStats.totalForks}</div>
        <div className="text-sm text-gray-300">Forks</div>
      </div>
      <div className="bg-midnight-3/30 rounded-lg p-4 text-center">
        <div className="text-2xl font-bold text-caribbean">{displayStats.followers}</div>
        <div className="text-sm text-gray-300">Followers</div>
      </div>
    </div>
  )
}
