import { Search, Lightbulb, Code, BarChart, Rocket, RefreshCw } from "lucide-react"

export default function ProcessSteps() {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      description: "We analyze your business needs and identify opportunities for AI implementation.",
    },
    {
      icon: Lightbulb,
      title: "Strategy",
      description: "Develop a tailored AI strategy aligned with your business goals and technical capabilities.",
    },
    {
      icon: Code,
      title: "Development",
      description: "Build custom AI solutions using cutting-edge technologies and best practices.",
    },
    {
      icon: BarChart,
      title: "Testing",
      description: "Rigorous testing to ensure accuracy, reliability, and performance of AI models.",
    },
    {
      icon: Rocket,
      title: "Deployment",
      description: "Seamless integration of AI solutions into your existing systems and workflows.",
    },
    {
      icon: RefreshCw,
      title: "Optimization",
      description: "Continuous monitoring and refinement to improve performance and adapt to changing needs.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {steps.map((step, index) => {
        const Icon = step.icon
        return (
          <div
            key={step.title}
            className="bg-midnight-3/30 backdrop-blur-sm rounded-lg p-6 border border-midnight-2/30 hover:border-caribbean/30 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-caribbean to-midnight flex items-center justify-center mb-4">
              <Icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <span className="text-caribbean mr-2">{index + 1}.</span> {step.title}
            </h3>
            <p className="text-gray-300 text-sm">{step.description}</p>
          </div>
        )
      })}
    </div>
  )
}
