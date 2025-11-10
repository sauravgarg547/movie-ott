"use client"

export default function TechStackSection() {
  const technologies = [
    // Frontend
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Next.js", icon: "▲", category: "Frontend" },
    { name: "TypeScript", icon: "📘", category: "Frontend" },
    { name: "Tailwind", icon: "🎨", category: "Frontend" },
    // Backend
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "Express", icon: "⚡", category: "Backend" },
    { name: "Python", icon: "🐍", category: "Backend" },
    // Database
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "Firebase", icon: "🔥", category: "Database" },
    // Cloud Platforms
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "Azure", icon: "🔵", category: "Cloud" },
    { name: "Google Cloud", icon: "📊", category: "Cloud" },
    // DevOps & Container
    { name: "Docker", icon: "🐳", category: "DevOps" },
    { name: "Kubernetes", icon: "☸️", category: "DevOps" },
    { name: "Jenkins", icon: "🔨", category: "DevOps" },
    { name: "ArgoCD", icon: "🔄", category: "DevOps" },
    // Infrastructure & IaC
    { name: "Terraform", icon: "🏗️", category: "Infrastructure" },
    { name: "Ansible", icon: "🤖", category: "Infrastructure" },
    { name: "VPS Server", icon: "💾", category: "Infrastructure" },
    // Monitoring & Logging
    { name: "Prometheus", icon: "📈", category: "Monitoring" },
    { name: "Grafana", icon: "📊", category: "Monitoring" },
    // APIs & Tools
    { name: "GraphQL", icon: "◆", category: "APIs" },
    { name: "REST API", icon: "🌐", category: "APIs" },
    { name: "Git", icon: "📦", category: "Tools" },
    { name: "VS Code", icon: "💻", category: "Tools" },
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

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">{tech.icon}</span>
              <p className="text-sm font-semibold text-center">{tech.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{tech.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
