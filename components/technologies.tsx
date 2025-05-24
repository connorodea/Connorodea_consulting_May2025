import { Card } from "@/components/ui/card"

export default function Technologies() {
  const techCategories = [
    {
      name: "Machine Learning",
      technologies: ["TensorFlow", "PyTorch", "scikit-learn", "Keras", "XGBoost"],
    },
    {
      name: "Natural Language Processing",
      technologies: ["GPT-4", "BERT", "Llama", "Hugging Face", "spaCy", "NLTK"],
    },
    {
      name: "Computer Vision",
      technologies: ["OpenCV", "YOLO", "TensorFlow Vision", "MediaPipe", "Detectron2"],
    },
    {
      name: "Cloud & Infrastructure",
      technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
    },
    {
      name: "Data Engineering",
      technologies: ["Apache Spark", "Airflow", "Kafka", "dbt", "Snowflake"],
    },
    {
      name: "Development",
      technologies: ["Python", "JavaScript", "TypeScript", "React", "Node.js", "FastAPI"],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {techCategories.map((category) => (
        <Card key={category.name} className="bg-gradient-to-br from-space to-purple-2 border-none text-white p-6">
          <h3 className="text-lg font-semibold mb-3">{category.name}</h3>
          <div className="flex flex-wrap gap-2">
            {category.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-white/10 rounded-full text-xs font-medium hover:bg-caribbean/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
