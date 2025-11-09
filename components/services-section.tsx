"use client"

import { useEffect, useRef } from "react"
import { Code2, Database, Brain, BarChart3, Cloud } from "lucide-react"

export default function ServicesSection() {
  const sectionRef = useRef(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-fade-in-up")
            }, idx * 150)
          }
        })
      },
      { threshold: 0.1 },
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  const services = [
    { icon: Code2, title: "Software Engineering", desc: "Expert development solutions" },
    { icon: Database, title: "RFP Consulting", desc: "Strategic business guidance" },
    { icon: Brain, title: "Complete Business Solutions", desc: "End-to-end implementation" },
    { icon: BarChart3, title: "Digital Transformation", desc: "Modernize your operations" },
    { icon: Database, title: "Data & Intelligence", desc: "Unlock data insights" },
    { icon: Cloud, title: "Operations Management", desc: "Optimize workflows" },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">WHAT WE DELIVER</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Engineering Technology, Enabling Transformation</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Solutions designed to accelerate your digital journey and unlock new possibilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                ref={(el) => {
                  if (el) cardsRef.current[idx] = el
                }}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group cursor-pointer opacity-0"
              >
                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/40 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
