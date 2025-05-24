"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MailCheck } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="rounded-lg bg-gradient-to-br from-purple to-palatinate p-6">
      {!submitted ? (
        <>
          <h3 className="text-xl font-semibold mb-2">Stay Updated on AI Trends</h3>
          <p className="text-gray-200 mb-4 text-sm">
            Subscribe to my newsletter for the latest insights on AI innovation, industry trends, and practical tips.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex h-10 w-full rounded-md border border-purple/50 bg-purple-2/30 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-caribbean focus:ring-offset-2 focus:ring-offset-palatinate"
              required
            />
            <Button
              type="submit"
              disabled={loading}
              className="whitespace-nowrap bg-caribbean hover:bg-midnight text-white"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          <p className="text-xs text-gray-300 mt-2">I respect your privacy. Unsubscribe at any time.</p>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-4">
          <MailCheck className="h-12 w-12 text-caribbean mb-3" />
          <h3 className="text-xl font-semibold mb-1">Thanks for subscribing!</h3>
          <p className="text-gray-200 text-center">You'll receive the latest AI insights directly to your inbox.</p>
        </div>
      )}
    </div>
  )
}
