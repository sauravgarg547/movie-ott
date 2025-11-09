"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import FooterSection from "@/components/footer-section"
import { ArrowLeft, CheckCircle2, Code2, Zap, Users, Rocket } from "lucide-react"

export default function WebDevelopmentPage() {
  const sectionRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const services = [
    "Custom Web Application Development",
    "E-commerce Solutions",
    "Content Management Systems",
    "Progressive Web Apps (PWA)",
    "API Development & Integration",
    "Database Design & Optimization",
    "Frontend Frameworks (React, Vue, Angular)",
    "Backend Services (Node.js, Python, Java)",
  ]

  const features = [
    { icon: Code2, title: "Modern Technologies", desc: "Latest frameworks and tools" },
    { icon: Zap, title: "High Performance", desc: "Optimized for speed and scalability" },
    { icon: Users, title: "Collaborative", desc: "Work closely with your team" },
    { icon: Rocket, title: "Fast Deployment", desc: "Quick time-to-market" },
  ]

  return (
    <div className="bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-accent mb-8 transition">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">Web Development Services</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Transform your digital presence with our comprehensive web development solutions. We build scalable, secure,
            and user-friendly web applications tailored to your business needs.
          </p>
        </div>
      </div>

      {/* Services List */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="p-6 bg-card border border-border rounded-lg">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help transform your business with web development.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-accent transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
