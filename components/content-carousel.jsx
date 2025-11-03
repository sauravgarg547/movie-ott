"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function ContentCarousel({ title, items }) {
  const [scroll, setScroll] = useState(0)

  const handleScroll = (direction) => {
    const container = document.getElementById(`carousel-${title}`)
    if (container) {
      const scrollAmount = 300
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
        setScroll(scroll - scrollAmount)
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" })
        setScroll(scroll + scrollAmount)
      }
    }
  }

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-white mb-4 px-4 md:px-8">{title}</h2>
      <div className="relative group">
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronLeft size={24} />
        </button>

        <div
          id={`carousel-${title}`}
          className="flex gap-4 overflow-x-auto scroll-smooth px-4 md:px-8 pb-4"
          style={{ scrollBehavior: "smooth" }}
        >
          {items.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-40 md:w-48 cursor-pointer group/item">
              <div className="relative overflow-hidden rounded-lg h-60">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover/item:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-sm font-semibold truncate opacity-0 group-hover/item:opacity-100 transition">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => handleScroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}
