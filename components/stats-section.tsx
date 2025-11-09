"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function StatsSection() {
  const statsRef = useRef(null)
  const countersRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!statsRef.current) return

    const stats = [
      { value: 12, label: "Years of Experience", suffix: "+" },
      { value: 50, label: "Successful Projects", suffix: "+" },
      { value: 99, label: "Client Satisfaction", suffix: "%" },
      { value: 100, label: "Quality Assurance", suffix: "%" },
    ]

    countersRef.current.forEach((counter, idx) => {
      if (!counter) return
      gsap.to(counter, {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        textContent: stats[idx].value,
        duration: 2,
        snap: { textContent: 1 },
        ease: "power2.out",
      })
    })
  }, [])

  return (
    <section ref={statsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Trusted by Leading Enterprises Across the Globe
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[0, 1, 2, 3].map((idx) => (
            <div key={idx} className="text-center p-6">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <span
                  ref={(el) => {
                    if (el) countersRef.current[idx] = el
                  }}
                >
                  0
                </span>
                {idx === 0 && "+"}
                {idx === 1 && "+"}
                {idx === 2 && "%"}
                {idx === 3 && "%"}
              </p>
              <p className="text-muted-foreground">
                {idx === 0 && "Years of Experience"}
                {idx === 1 && "Successful Projects"}
                {idx === 2 && "Client Satisfaction"}
                {idx === 3 && "Quality Assurance"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
