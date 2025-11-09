"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CheckCircle2 } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function FeaturesSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    gsap.to(".feature-item", {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    })
  }, [])

  const features = [
    "Expert team with 10+ years experience",
    "24/7 dedicated support",
    "Agile development methodology",
    "Custom solutions for your needs",
    "Latest technologies & frameworks",
    "Transparent pricing & timelines",
  ]

  return (
    <section id="features" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Choose Us?</h2>
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <div key={idx} className="feature-item opacity-0 translate-x-[-20px] flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2">500+</div>
                <p className="text-foreground">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
