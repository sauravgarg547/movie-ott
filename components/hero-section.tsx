"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const heroRef = useRef(null)

  useEffect(() => {
    const title = heroRef.current?.querySelector(".hero-title")
    const subtitle = heroRef.current?.querySelector(".hero-subtitle")
    const buttons = heroRef.current?.querySelectorAll(".cta-button")

    if (title) title.classList.add("animate-fade-in-up")
    if (subtitle) {
      setTimeout(() => subtitle.classList.add("animate-fade-in-up"), 200)
    }
    if (buttons) {
      buttons.forEach((btn, i) => {
        setTimeout(() => btn.classList.add("animate-fade-in-up"), 400 + i * 200)
      })
    }
  }, [])

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
            YOUR TRUSTED DIGITAL TRANSFORMATION PARTNER
          </p>

          <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight opacity-0">
            Transform Your Data With{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Our Big Advantage
            </span>
          </h1>

          <p className="hero-subtitle text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed opacity-0">
            We transform scattered information into strategic intelligence, optimizing operations, predicting risks, and
            powering decisions that actually move the needle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="cta-button px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold flex items-center gap-2 hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105 active:scale-95 opacity-0">
              Know More
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="cta-button px-8 py-4 border-2 border-primary text-primary rounded-full font-bold hover:bg-primary/10 transition-all duration-300 opacity-0">
              Learn More
            </button>
          </div>

          {/* Stats preview */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="p-4 bg-card/50 backdrop-blur rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
              <p className="text-2xl font-bold text-primary">24x7</p>
              <p className="text-sm text-muted-foreground">Big Data Support</p>
            </div>
            <div className="p-4 bg-card/50 backdrop-blur rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
              <p className="text-2xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">In-house Code</p>
            </div>
            <div className="p-4 bg-card/50 backdrop-blur rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
              <p className="text-2xl font-bold text-primary">30+</p>
              <p className="text-sm text-muted-foreground">Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
