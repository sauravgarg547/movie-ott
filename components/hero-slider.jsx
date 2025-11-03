"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroSlides = [
  {
    id: 1,
    title: "The Midnight Chronicles",
    image: "https://placeholder.svg?height=600&width=1200&query=dark thriller movie poster",
    description: "Experience an epic journey through darkness and mystery",
  },
  {
    id: 2,
    title: "Quantum Escape",
    image: "https://placeholder.svg?height=600&width=1200&query=sci-fi action movie",
    description: "A mind-bending adventure in alternate dimensions",
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % heroSlides.length)
  const prev = () => setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  return (
    <div className="relative w-full h-[600px] mt-16 overflow-hidden">
      {heroSlides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 max-w-2xl">{slide.title}</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-xl">{slide.description}</p>
            <div className="flex gap-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white gap-2 px-8 py-6 text-lg">
                <Play size={20} />
                Play
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 gap-2 px-8 py-6 text-lg bg-transparent"
              >
                <Info size={20} />
                More Info
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition ${idx === current ? "bg-red-500 w-8" : "bg-white/50 w-2"}`}
          />
        ))}
      </div>
    </div>
  )
}
