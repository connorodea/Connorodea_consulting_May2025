import { Award } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      name: "TensorFlow Developer Certificate",
      issuer: "Google",
      year: "2024",
    },
    {
      name: "AWS Certified Machine Learning Specialist",
      issuer: "Amazon Web Services",
      year: "2023",
    },
    {
      name: "Professional Data Scientist",
      issuer: "Data Science Council of America",
      year: "2023",
    },
    {
      name: "Azure AI Engineer Associate",
      issuer: "Microsoft",
      year: "2022",
    },
    {
      name: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      year: "2022",
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      {certifications.map((cert) => (
        <div
          key={cert.name}
          className="flex items-start gap-3 bg-midnight-3/30 p-3 rounded-lg border border-midnight-2/30"
        >
          <Award className="h-5 w-5 text-caribbean flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-white">{cert.name}</h3>
            <p className="text-sm text-gray-300">
              {cert.issuer} · {cert.year}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
