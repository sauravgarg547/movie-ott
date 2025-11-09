"use client"

import { useEffect } from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import FooterSection from "@/components/footer-section"
import { ArrowLeft, CheckCircle2, Cloud, Zap, Users, Rocket } from "lucide-react"

export default function CloudSolutionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const services = [
    "Cloud Architecture Design",
    "AWS Solutions",
    "Azure Cloud Services",
    "Google Cloud Platform",
    "Cloud Migration Services",
    "Infrastructure as Code",
    "Cloud Security & Compliance",
    "Cloud Cost Optimization",
  ]

  const features = [
    { icon: Cloud, title: "Scalable Infrastructure", desc: "Grow without limitations" },
    { icon: Zap, title: "High Availability", desc: "99.9% uptime guarantee" },
    { icon: Users, title: "Expert Support", desc: "24/7 dedicated support" },
    { icon: Rocket, title: "Fast Deployment", desc: "Quick cloud setup" },
  ]

  return (
    <div className="bg-background text-foreground">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-accent mb-8 transition">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">Cloud Solutions</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Transform your business with enterprise-grade cloud solutions. We provide end-to-end cloud consulting and
            implementation services.
          </p>
        </div>
      </div>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Cloud Services</h2>
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Cloud Services</h2>
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

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Move to the Cloud Today</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss your cloud strategy and how we can accelerate your digital transformation.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-accent transition"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
