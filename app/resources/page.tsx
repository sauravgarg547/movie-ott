"use client"

import { useEffect } from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import FooterSection from "@/components/footer-section"
import { ArrowLeft, FileText, BookOpen, Code2 } from "lucide-react"

export default function ResourcesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const resources = [
    {
      category: "Documentation",
      icon: FileText,
      items: [
        { title: "API Documentation", desc: "Complete API reference and integration guide" },
        { title: "Development Guide", desc: "Best practices for development" },
        { title: "Deployment Guide", desc: "Step-by-step deployment instructions" },
      ],
    },
    {
      category: "Learning",
      icon: BookOpen,
      items: [
        { title: "Technology Insights", desc: "Latest trends in web and cloud technology" },
        { title: "Case Studies", desc: "Real-world project implementations" },
        { title: "Best Practices", desc: "Industry-leading development practices" },
      ],
    },
    {
      category: "Tools & Libraries",
      icon: Code2,
      items: [
        { title: "Open Source Projects", desc: "Contribute to our open-source initiatives" },
        { title: "Code Snippets", desc: "Reusable code examples and templates" },
        { title: "Development Tools", desc: "Custom tools for faster development" },
      ],
    },
  ]

  return (
    <div className="bg-background text-foreground">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-accent mb-8 transition">
            <ArrowLeft className="w-4 h-4" />
            Back Home
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">Resources</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive resources, documentation, and guides to help you succeed with our services.
          </p>
        </div>
      </div>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((section, idx) => {
              const Icon = section.icon
              return (
                <div key={idx}>
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold">{section.category}</h2>
                  </div>
                  <div className="space-y-4">
                    {section.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition cursor-pointer group"
                      >
                        <h3 className="font-semibold mb-1 group-hover:text-primary transition">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need More Help?</h2>
          <p className="text-lg text-muted-foreground mb-8">Our support team is here to assist you.</p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-accent transition"
          >
            Get Support
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
