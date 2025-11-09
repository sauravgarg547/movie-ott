"use client"

import { useEffect } from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import FooterSection from "@/components/footer-section"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      desc: "Full-stack e-commerce solution with payment integration",
      tech: "React, Node.js, MongoDB",
    },
    {
      id: 2,
      title: "Fitness Mobile App",
      category: "App Development",
      desc: "iOS & Android fitness tracking application",
      tech: "React Native, Firebase",
    },
    {
      id: 3,
      title: "Cloud Migration Project",
      category: "Cloud Solutions",
      desc: "Enterprise migration to AWS infrastructure",
      tech: "AWS, Docker, Kubernetes",
    },
    {
      id: 4,
      title: "AI Content Generator",
      category: "Web Development",
      desc: "AI-powered content generation platform",
      tech: "Next.js, OpenAI API, Python",
    },
    {
      id: 5,
      title: "Real Estate Portal",
      category: "Web Development",
      desc: "Property listing and management system",
      tech: "React, Express, PostgreSQL",
    },
    {
      id: 6,
      title: "Social Media App",
      category: "App Development",
      desc: "Cross-platform social networking application",
      tech: "Flutter, Firebase, APIs",
    },
    {
      id: 7,
      title: "Healthcare Management",
      category: "Web Development",
      desc: "Patient management and appointment system",
      tech: "Vue.js, Laravel, MySQL",
    },
    {
      id: 8,
      title: "Banking App",
      category: "App Development",
      desc: "Secure mobile banking application",
      tech: "Swift, Kotlin, Spring Boot",
    },
    {
      id: 9,
      title: "IoT Dashboard",
      category: "Cloud Solutions",
      desc: "Real-time IoT device monitoring dashboard",
      tech: "React, AWS IoT, Grafana",
    },
    {
      id: 10,
      title: "Video Streaming Service",
      category: "Web Development",
      desc: "Scalable video streaming platform",
      tech: "React, Node.js, AWS S3",
    },
    {
      id: 11,
      title: "Enterprise CRM",
      category: "Web Development",
      desc: "Customer relationship management system",
      tech: "Angular, .NET, SQL Server",
    },
    {
      id: 12,
      title: "Delivery Tracking App",
      category: "App Development",
      desc: "Real-time delivery tracking system",
      tech: "React Native, Google Maps API",
    },
    {
      id: 13,
      title: "Analytics Platform",
      category: "Web Development",
      desc: "Business intelligence and analytics dashboard",
      tech: "React, D3.js, BigQuery",
    },
    {
      id: 14,
      title: "Gaming Platform",
      category: "Web Development",
      desc: "Multiplayer online gaming platform",
      tech: "WebGL, Node.js, Socket.io",
    },
    {
      id: 15,
      title: "Learning Management System",
      category: "Web Development",
      desc: "Online education platform with video streaming",
      tech: "React, Django, PostgreSQL",
    },
    {
      id: 16,
      title: "Ride-sharing App",
      category: "App Development",
      desc: "Transportation mobile application",
      tech: "React Native, Node.js, MongoDB",
    },
    {
      id: 17,
      title: "SaaS Dashboard",
      category: "Web Development",
      desc: "Multi-tenant SaaS management platform",
      tech: "Next.js, Prisma, Stripe",
    },
    {
      id: 18,
      title: "Booking System",
      category: "Web Development",
      desc: "Hotel and restaurant booking platform",
      tech: "React, Express, GraphQL",
    },
    {
      id: 19,
      title: "Microservices Architecture",
      category: "Cloud Solutions",
      desc: "Enterprise microservices deployment",
      tech: "Kubernetes, Docker, Spring Cloud",
    },
    {
      id: 20,
      title: "AI Chatbot",
      category: "Web Development",
      desc: "Intelligent customer support chatbot",
      tech: "NLP, Python, React",
    },
    {
      id: 21,
      title: "Blockchain Wallet",
      category: "Web Development",
      desc: "Cryptocurrency wallet application",
      tech: "Web3.js, Solidity, React",
    },
    {
      id: 22,
      title: "HR Management System",
      category: "Web Development",
      desc: "Employee and payroll management",
      tech: "React, Node.js, PostgreSQL",
    },
  ]

  return (
    <div className="bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-accent mb-8 transition">
            <ArrowLeft className="w-4 h-4" />
            Back Home
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Explore our portfolio of successful projects. We've helped businesses across various industries achieve
            their digital transformation goals.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition opacity-0 group-hover:opacity-100" />
                </div>
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.desc}</p>
                <p className="text-xs text-primary/70 font-mono">{project.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Next Project</h2>
          <p className="text-lg text-muted-foreground mb-8">Have an idea? Let's bring it to life together.</p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-accent transition"
          >
            Contact Us Now
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
