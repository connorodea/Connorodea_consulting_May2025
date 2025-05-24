export default function ClientLogos() {
  const clients = [
    { name: "TechCorp", logo: "/logos/techcorp.png" },
    { name: "DataDrive", logo: "/logos/datadrive.png" },
    { name: "InnovateAI", logo: "/logos/innovateai.png" },
    { name: "FutureFinance", logo: "/logos/futurefinance.png" },
    { name: "HealthTech", logo: "/logos/healthtech.png" },
    { name: "RetailSmart", logo: "/logos/retailsmart.png" },
  ]

  return (
    <div className="py-12">
      <h3 className="text-center text-lg font-medium mb-8 text-gray-300">Trusted by Industry Leaders</h3>
      <div className="flex flex-wrap justify-center gap-8 items-center">
        {clients.map((client) => (
          <div
            key={client.name}
            className="bg-white/10 rounded-lg p-4 flex items-center justify-center h-16 w-32 backdrop-blur-sm"
          >
            <img
              src={client.logo || `/placeholder.svg?height=60&width=120&query=${client.name} logo`}
              alt={`${client.name} logo`}
              className="max-h-10 max-w-full opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
