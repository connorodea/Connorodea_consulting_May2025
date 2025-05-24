import { NextResponse } from "next/server"

interface GitHubUser {
  login: string
  id: number
  avatar_url: string
  html_url: string
  name: string
  company: string
  blog: string
  location: string
  email: string
  bio: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

export async function GET() {
  try {
    const username = "connorodea"

    const response = await fetch(`https://api.github.com/users/${username}`, {
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

    const userData: GitHubUser = await response.json()

    return NextResponse.json({
      login: userData.login,
      name: userData.name,
      avatarUrl: userData.avatar_url,
      bio: userData.bio,
      publicRepos: userData.public_repos,
      followers: userData.followers,
      following: userData.following,
      url: userData.html_url,
    })
  } catch (error) {
    console.error("Error fetching GitHub user data:", error)
    return NextResponse.json({ error: "Failed to fetch GitHub user data" }, { status: 500 })
  }
}
