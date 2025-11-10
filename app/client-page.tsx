"use client"

import { useEffect, useRef, useState } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import BenefitsSection from "@/components/benefits-section"
import TechStackSection from "@/components/tech-stack-section"
import StatsSection from "@/components/stats-section"
import FeaturesSection from "@/components/features-section"
import FooterSection from "@/components/footer-section"

export default function ClientHomePage() {
  const containerRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingSkeleton />
  }

  return (
    <div ref={containerRef} className="bg-background text-foreground overflow-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <TechStackSection />
      <StatsSection />
      <FeaturesSection />
      <FooterSection />
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navbar Skeleton */}
      <div className="h-20 bg-card border-b border-border sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
          <div className="w-24 h-8 skeleton rounded"></div>
          <div className="hidden md:flex gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-16 h-4 skeleton rounded"></div>
            ))}
          </div>
          <div className="w-20 h-10 skeleton rounded-full hidden md:block"></div>
        </div>
      </div>

      {/* Hero Skeleton */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 pt-20">
        <div className="max-w-3xl w-full text-center">
          <div className="w-full h-16 skeleton rounded mb-6 md:h-20"></div>
          <div className="w-full h-12 skeleton rounded mb-4"></div>
          <div className="w-3/4 h-8 skeleton rounded mb-8 mx-auto"></div>
          <div className="flex gap-4 justify-center">
            <div className="w-40 h-12 skeleton rounded-full"></div>
            <div className="w-40 h-12 skeleton rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
