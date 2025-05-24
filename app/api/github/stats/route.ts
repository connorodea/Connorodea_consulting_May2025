import { NextResponse } from "next/server"

interface GitHubRepo {
  id: number
  name: string
  stargazers_count: number
  forks_count: number
  fork: boolean
}

export async function GET() {
  try {
    const username = "connorodea"
    let page = 1
    let hasMoreRepos = true
    let allRepos: GitHubRepo[] = []

    // Fetch all repositories (paginated)
    while (hasMoreRepos) {
      const response = await fetch(`https://api.github.com/users/${username}/repos?page=${page}&per_page=100`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
          }),
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      })

      if (!response.ok) {
        throw new Error(`GitHub API responded with status: ${response.status}`)
      }

      const repos: GitHubRepo[] = await response.json()

      if (repos.length === 0) {
        hasMoreRepos = false
      } else {
        allRepos = [...allRepos, ...repos]
        page++
      }
    }

    // Filter out forked repositories
    const ownRepos = allRepos.filter((repo) => !repo.fork)

    // Calculate total stars and forks
    const totalStars = ownRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0)
    const totalForks = ownRepos.reduce((sum, repo) => sum + repo.forks_count, 0)

    return NextResponse.json({
      totalRepos: ownRepos.length,
      totalStars,
      totalForks,
    })
  } catch (error) {
    console.error("Error fetching GitHub stats:", error)
    return NextResponse.json({ error: "Failed to fetch GitHub stats" }, { status: 500 })
  }
}
