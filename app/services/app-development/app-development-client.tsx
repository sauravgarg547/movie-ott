"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, Smartphone, Zap, Users, Rocket } from "lucide-react"

export default function AppDevelopmentClientPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const services = [
    "iOS App Development",
    "Android App Development",
    "Cross-platform Solutions",
    "Native Mobile Applications",
    "App UI/UX Design",
    "App Testing & QA",
    "App Maintenance & Support",
    "App Store Optimization",
  ]

  const features = [
    { icon: Smartphone, title: "Multi-Platform", desc: "iOS, Android, and cross-platform" },
    { icon: Zap, title: "Fast & Responsive", desc: "Lightning-fast performance" },
    { icon: Users, title: "User-Centric", desc: "Focused on user experience" },
    { icon: Rocket, title: "Scalable", desc: "Grows with your business" },
  ]

  return (
    <div>
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-accent mb-8 transition">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">Mobile App Development</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Build powerful, user-engaging mobile applications for iOS and Android. Our expert developers create apps
            that users love and businesses trust.
          </p>
        </div>
      </div>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Our App Services</h2>
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
          <h2 className="text-3xl font-bold mb-12 text-center">Why Partner With Us</h2>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Launch Your App?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today to discuss your mobile app requirements.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-accent transition"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  )
}
