import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  colorClass?: string
  popular?: boolean
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  colorClass = "from-midnight-2 to-charcoal",
  popular = false,
}: PricingCardProps) {
  return (
    <Card
      className={`flex flex-col h-full overflow-hidden transition-all duration-200 hover:shadow-lg bg-gradient-to-br ${colorClass} border-none text-white relative`}
    >
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-caribbean text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">Most Popular</div>
        </div>
      )}
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{name}</CardTitle>
        <div className="mt-2">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Custom" && <span className="text-sm text-gray-300 ml-1">/month</span>}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-gray-200 mb-6">{description}</CardDescription>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-caribbean mt-0.5 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-2">
        <Link href="#contact" className="w-full">
          <Button
            className={`w-full ${
              popular
                ? "bg-caribbean hover:bg-midnight text-white"
                : "bg-transparent border border-white/30 hover:bg-white/10 text-white"
            }`}
          >
            Get Started
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
