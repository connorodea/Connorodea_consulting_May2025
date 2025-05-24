import { NextResponse } from "next/server"

// GitHub API types
interface GitHubRepo {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string
  stargazers_count: number
  language: string
  fork: boolean
  created_at: string
  updated_at: string
  topics: string[]
}

export async function GET() {
  try {
    // GitHub username from the URL query
    const username = "connorodea"

    // Fetch repositories from GitHub API
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        // Add GitHub token if available to increase rate limit
        ...(process.env.GITHUB_TOKEN && {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        }),
      },
      // Cache the response for 1 hour to avoid hitting GitHub's rate limits
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`)
    }

    const repos: GitHubRepo[] = await response.json()

    // Filter out forked repositories and transform the data
    const filteredRepos = repos
      .filter((repo) => !repo.fork)
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || "No description provided",
        url: repo.html_url,
        stars: repo.stargazers_count,
        language: repo.language || "Unknown",
        topics: repo.topics || [],
        updatedAt: repo.updated_at,
      }))

    return NextResponse.json({ repos: filteredRepos })
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error)
    return NextResponse.json({ error: "Failed to fetch GitHub repositories" }, { status: 500 })
  }
}
