"use client"

export default function TechStackSection() {
  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "AWS", icon: "☁️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "☸️" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "GraphQL", icon: "◆" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technology Stack We Master</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We work with cutting-edge technologies to deliver next-gen solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">{tech.icon}</span>
              <p className="text-sm font-semibold text-center">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
