"use client"

import { useEffect } from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import FooterSection from "@/components/footer-section"
import { ArrowLeft, Users, Target, Award, Zap } from "lucide-react"

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      desc: "Delivering excellence through innovation and continuous improvement",
    },
    {
      icon: Users,
      title: "People First",
      desc: "Building strong relationships with clients and team members",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      desc: "Committed to the highest standards in everything we do",
    },
    {
      icon: Zap,
      title: "Innovation",
      desc: "Embracing cutting-edge technologies and methodologies",
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

          <h1 className="text-5xl md:text-6xl font-bold mb-6">Who We Are</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We are a leading software development company transforming businesses through innovative technology
            solutions.
          </p>
        </div>
      </div>

      {/* About Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Founded with a vision to revolutionize digital transformation, TechCorp has been at the forefront of
                innovation for over a decade. We've helped hundreds of businesses across the globe achieve their digital
                goals through cutting-edge technology solutions and strategic consulting.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of expert developers, architects, and consultants are dedicated to delivering exceptional
                results. We combine technical excellence with business acumen to create solutions that drive real value
                for our clients.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Why Choose TechCorp</h2>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>10+ years of experience in software development and technology consulting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>300+ successful projects delivered across multiple industries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>50+ expert professionals including architects and senior engineers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>ISO 9001 and ISO 27001 certified</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>24/7 support and dedicated account management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div key={idx} className="p-6 bg-card border border-border rounded-lg">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">300+</div>
              <p className="text-muted-foreground">Projects Delivered</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Expert Team Members</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8">Ready to transform your business? Contact us today.</p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-accent transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
