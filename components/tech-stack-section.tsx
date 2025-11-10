"use client"

const LogoIcons = {
  React: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 9.861A2.139 2.139 0 1 0 12 14.139A2.139 2.139 0 1 0 12 9.861M12 7.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7Zm6.705-1.497c-.679-.264-1.646.605-2.133 1.88-.488 1.276-.12 2.467.559 2.731.679.264 1.646-.605 2.133-1.88.488-1.275.12-2.467-.559-2.731ZM5.295 7.003c-.679.264-1.047 1.455-.559 2.731.488 1.276 1.455 2.144 2.133 1.88.679-.264 1.047-1.455.559-2.731-.488-1.275-1.455-2.144-2.133-1.88Zm11.41 10.494c.679.264 1.646-.605 2.133-1.88.488-1.276.12-2.467-.559-2.731-.679-.264-1.646.605-2.133 1.88-.488 1.275-.12 2.467.559 2.731ZM5.295 16.997c.679.264 1.646-.605 2.133-1.88.488-1.276.12-2.467-.559-2.731-.679-.264-1.646.605-2.133 1.88-.488 1.275-.12 2.467.559 2.731Z"
        fill="#61DAFB"
      />
    </svg>
  ),
  "Next.js": (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.5725 0c5.687 0 10.84 3.898 10.84 8.9026a7.654 7.654 0 0 1-3.1197 6.216c-.5135.479-.454.708-.454 1.26v5.727c0 .891-.895.8923-1.342.6765a48.285 48.285 0 0 1-10.564-32.6425c0-5.922 5.畫53-8.9026 10.84-8.9026zm-4.4925 21.8368c0 .5733-.454.766-.872.766-.467 0-.767-.3087-.767-.766s.3-.766.767-.766c.418 0 .872.2927.872.766z" />
    </svg>
  ),
  TypeScript: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#3178C6">
      <rect width="24" height="24" fill="#3178C6" />
      <path
        d="M9.6 8.4h2.1V17h-2.1V8.4zm4.8 8.1c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5-.7-1.5-1.5-1.5-1.5.7-1.5 1.5z"
        fill="white"
      />
    </svg>
  ),
  Tailwind: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#06B6D4">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m-4 10c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z" />
    </svg>
  ),
  "Node.js": (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#339933">
      <path d="M12 21.985c-.275 0-.55-.073-.788-.219l-2.5-1.477c-.375-.209-.192-.284-.07-.327.512-.178.61-.217 1.15-.525.058-.032.135-.02.196.013l1.92 1.138c.074.042.178.042.252 0l7.49-4.33c.074-.042.122-.127.122-.22V8.203c0-.092-.048-.177-.122-.219l-7.49-4.33c-.074-.042-.178-.042-.252 0l-7.49 4.33c-.074.042-.122.127-.122.219v8.66c0 .093.048.178.122.22l2.05 1.183c1.113.557 1.797-.099 1.797-.765V8.968c0-.13.105-.235.235-.235h1.025c.13 0 .235.105.235.235v8.569c0 1.499-.817 2.361-2.239 2.361-.437 0-.78 0-1.736-.471l-1.965-1.132A1.448 1.448 0 0 1 2 17.863V9.203c0-.566.288-1.092.762-1.383l7.49-4.33a1.446 1.446 0 0 1 1.456 0l7.49 4.33c.474.29.762.817.762 1.383v8.66c0 .566-.288 1.092-.762 1.382l-7.49 4.33c-.238.147-.513.22-.788.22z" />
    </svg>
  ),
  Express: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12a12 12 0 1 1-24 0 12 12 0 0 1 24 0zM6.5 9l2.5 3L6.5 15h2l2-2.5L10.5 15h2l-2.5-3 2.5-3h-2l-2 2.5L8.5 9h-2z" />
    </svg>
  ),
  Python: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#3776AB">
      <path d="M12 2c-5.523 0-10 3.134-10 7s3.134 7 7 7h3v2c0 1.657 1.343 3 3 3s3-1.343 3-3v-2h3c5.523 0 10-3.134 10-7s-4.477-7-10-7z" />
    </svg>
  ),
  MongoDB: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#13AA52">
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8z" />
    </svg>
  ),
  PostgreSQL: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#336791">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" fill="#336791" />
    </svg>
  ),
  Firebase: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FFA726">
      <path d="M6 17l3.8-8.4L7 2l11 19z" />
    </svg>
  ),
  AWS: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FF9900">
      <path d="M6 12c0 3.314 2.239 6.129 5.25 6.945v2.387A9.004 9.004 0 0 1 3 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10v-2.387c3.011-.816 5.25-3.631 5.25-6.945" />
    </svg>
  ),
  Azure: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#0078D4">
      <path d="M3 3h6l8 14H3z" />
      <path d="M9 3h12l-8 14z" />
    </svg>
  ),
  "Google Cloud": (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#EA4335">
      <circle cx="12" cy="12" r="10" fill="#EA4335" />
      <path d="M12 5c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7z" fill="white" opacity="0.2" />
    </svg>
  ),
  Docker: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#2496ED">
      <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.186V9.006a.186.186 0 0 0-.186-.186h-2.119a.186.186 0 0 0-.186.186v1.886c0 .102.083.186.186.186m-2.954-5.438h2.118a.186.186 0 0 0 .186-.186V3.568a.186.186 0 0 0-.186-.186h-2.118a.186.186 0 0 0-.186.186v1.886c0 .102.083.186.186.186m0 2.716h2.118a.186.186 0 0 0 .186-.186V6.284a.186.186 0 0 0-.186-.186h-2.118a.186.186 0 0 0-.186.186v1.886c0 .102.083.186.186.186m-2.953 0h2.118a.186.186 0 0 0 .186-.186V6.284a.186.186 0 0 0-.186-.186H8.076a.186.186 0 0 0-.186.186v1.886c0 .102.083.186.186.186m-2.953-2.716h2.118a.186.186 0 0 0 .186-.186V3.568a.186.186 0 0 0-.186-.186H5.123a.186.186 0 0 0-.186.186v1.886c0 .102.083.186.186.186m5.389-2.716h2.118a.186.186 0 0 0 .186-.186V3.568a.186.186 0 0 0-.186-.186h-2.118a.186.186 0 0 0-.186.186v1.886c0 .102.083.186.186.186" />
    </svg>
  ),
  Kubernetes: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#326CE5">
      <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z" fill="#326CE5" />
    </svg>
  ),
  Jenkins: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#D33C3C">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#D33C3C" />
      <text x="12" y="15" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
        J
      </text>
    </svg>
  ),
  ArgoCD: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#0066CC">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#0066CC" />
      <path d="M12 7l3 5h-6z" fill="white" />
      <path d="M12 17l-3-5h6z" fill="white" />
    </svg>
  ),
  Terraform: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#844FCC">
      <path d="M7 2v8H1V2h6zm8 0v8h-6V2h6zm8 0v8h-6V2h6zM7 12v8H1v-8h6zm8 0v8h-6v-8h6zm8 0v8h-6v-8h6z" fill="#844FCC" />
    </svg>
  ),
  Ansible: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#EE0000">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#EE0000" />
      <path d="M12 7l2 4h-4z" fill="white" />
      <path d="M12 17l-2-4h4z" fill="white" />
    </svg>
  ),
  "VPS Server": (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#4A90E2">
      <rect x="3" y="4" width="18" height="16" rx="1" stroke="#4A90E2" strokeWidth="2" fill="none" />
      <line x1="6" y1="8" x2="18" y2="8" stroke="#4A90E2" strokeWidth="1" />
      <circle cx="6" cy="12" r="1" fill="#4A90E2" />
      <circle cx="6" cy="15" r="1" fill="#4A90E2" />
      <line x1="9" y1="12" x2="18" y2="12" stroke="#4A90E2" strokeWidth="1" />
      <line x1="9" y1="15" x2="18" y2="15" stroke="#4A90E2" strokeWidth="1" />
    </svg>
  ),
  Prometheus: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#E6522C">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#E6522C" />
      <circle cx="12" cy="12" r="3" fill="white" />
      <circle cx="12" cy="6" r="1" fill="white" />
      <circle cx="12" cy="18" r="1" fill="white" />
      <circle cx="6" cy="12" r="1" fill="white" />
      <circle cx="18" cy="12" r="1" fill="white" />
    </svg>
  ),
  Grafana: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FF9830">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#FF9830" />
      <path d="M12 7v5m-3 0h6" stroke="white" strokeWidth="2" fill="none" />
    </svg>
  ),
  GraphQL: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#E535AB">
      <path d="M12 2L2 8v8l10 6 10-6V8L12 2z" fill="#E535AB" />
    </svg>
  ),
  "REST API": (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#4CAF50">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#4CAF50" />
      <line x1="6" y1="12" x2="18" y2="12" stroke="white" strokeWidth="2" />
      <circle cx="6" cy="12" r="1" fill="white" />
      <circle cx="18" cy="12" r="1" fill="white" />
    </svg>
  ),
  Git: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#F1502F">
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z"
        fill="#F1502F"
      />
    </svg>
  ),
  "VS Code": (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#007ACC">
      <path d="M2 3h20v18H2V3zm2 2v14h16V5H4zm13 2l-6 4 6 4v-8z" fill="#007ACC" />
    </svg>
  ),
}

export default function TechStackSection() {
  const technologies = [
    // Frontend
    { name: "React", icon: "React", category: "Frontend" },
    { name: "Next.js", icon: "Next.js", category: "Frontend" },
    { name: "TypeScript", icon: "TypeScript", category: "Frontend" },
    { name: "Tailwind", icon: "Tailwind", category: "Frontend" },
    // Backend
    { name: "Node.js", icon: "Node.js", category: "Backend" },
    { name: "Express", icon: "Express", category: "Backend" },
    { name: "Python", icon: "Python", category: "Backend" },
    // Database
    { name: "MongoDB", icon: "MongoDB", category: "Database" },
    { name: "PostgreSQL", icon: "PostgreSQL", category: "Database" },
    { name: "Firebase", icon: "Firebase", category: "Database" },
    // Cloud Platforms
    { name: "AWS", icon: "AWS", category: "Cloud" },
    { name: "Azure", icon: "Azure", category: "Cloud" },
    { name: "Google Cloud", icon: "Google Cloud", category: "Cloud" },
    // DevOps & Container
    { name: "Docker", icon: "Docker", category: "DevOps" },
    { name: "Kubernetes", icon: "Kubernetes", category: "DevOps" },
    { name: "Jenkins", icon: "Jenkins", category: "DevOps" },
    { name: "ArgoCD", icon: "ArgoCD", category: "DevOps" },
    // Infrastructure & IaC
    { name: "Terraform", icon: "Terraform", category: "Infrastructure" },
    { name: "Ansible", icon: "Ansible", category: "Infrastructure" },
    { name: "VPS Server", icon: "VPS Server", category: "Infrastructure" },
    // Monitoring & Logging
    { name: "Prometheus", icon: "Prometheus", category: "Monitoring" },
    { name: "Grafana", icon: "Grafana", category: "Monitoring" },
    // APIs & Tools
    { name: "GraphQL", icon: "GraphQL", category: "APIs" },
    { name: "REST API", icon: "REST API", category: "APIs" },
    { name: "Git", icon: "Git", category: "Tools" },
    { name: "VS Code", icon: "VS Code", category: "Tools" },
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
              <div className="text-primary mb-2 group-hover:scale-110 transition-transform">
                {LogoIcons[tech.icon] || <span>{tech.icon}</span>}
              </div>
              <p className="text-sm font-semibold text-center">{tech.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{tech.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
