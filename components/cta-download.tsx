import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CtaDownload() {
  return (
    <div className="bg-gradient-to-br from-midnight-2 to-midnight-3 rounded-lg p-8 text-center">
      <h3 className="text-2xl font-bold mb-3">Free AI Strategy Blueprint</h3>
      <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
        Download my comprehensive guide to developing an effective AI strategy for your business. Learn how to identify
        opportunities, plan implementations, and measure success.
      </p>
      <Link href="/downloads/ai-strategy-blueprint.pdf">
        <Button className="bg-caribbean hover:bg-midnight text-white">
          Download Now
          <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </Link>
      <p className="text-xs text-gray-400 mt-3">No email required. Instant download.</p>
    </div>
  )
}
