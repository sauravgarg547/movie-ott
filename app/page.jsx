"use client"

import { Navbar } from "@/components/navbar"
import { HeroSlider } from "@/components/hero-slider"
import { ContentCarousel } from "@/components/content-carousel"
import { Button } from "@/components/ui/button"

const mockContent = {
  popular: [
    { id: 1, title: "Raula", image: "https://placeholder.svg?height=300&width=200&query=bollywood drama" },
    { id: 2, title: "Khautan", image: "https://placeholder.svg?height=300&width=200&query=romance film" },
    { id: 3, title: "Kutti", image: "https://placeholder.svg?height=300&width=200&query=thriller movie" },
    { id: 4, title: "Loch", image: "https://placeholder.svg?height=300&width=200&query=mystery series" },
    { id: 5, title: "Midnight Echo", image: "https://placeholder.svg?height=300&width=200&query=action film" },
    { id: 6, title: "Quantum", image: "https://placeholder.svg?height=300&width=200&query=sci-fi movie" },
  ],
  upcoming: [
    { id: 7, title: "Summer Breeze", image: "https://placeholder.svg?height=300&width=200&query=romantic comedy" },
    { id: 8, title: "Dark Secrets", image: "https://placeholder.svg?height=300&width=200&query=thriller upcoming" },
    { id: 9, title: "Space Odyssey", image: "https://placeholder.svg?height=300&width=200&query=sci-fi adventure" },
    { id: 10, title: "Love Redux", image: "https://placeholder.svg?height=300&width=200&query=drama film" },
    { id: 11, title: "Night Chase", image: "https://placeholder.svg?height=300&width=200&query=action thriller" },
    { id: 12, title: "The Last Stand", image: "https://placeholder.svg?height=300&width=200&query=war movie" },
  ],
  blockbuster: [
    { id: 13, title: "Eternal Quest", image: "https://placeholder.svg?height=300&width=200&query=fantasy epic" },
    { id: 14, title: "City Nights", image: "https://placeholder.svg?height=300&width=200&query=noir film" },
    { id: 15, title: "Paradise Lost", image: "https://placeholder.svg?height=300&width=200&query=drama masterpiece" },
    { id: 16, title: "Crown of Kings", image: "https://placeholder.svg?height=300&width=200&query=historical epic" },
    { id: 17, title: "Silent Storm", image: "https://placeholder.svg?height=300&width=200&query=action blockbuster" },
    { id: 18, title: "Echoes", image: "https://placeholder.svg?height=300&width=200&query=psychological thriller" },
  ],
}

export default function Home() {
  return (
    <main className="w-full bg-background">
      <Navbar />
      <HeroSlider />

      <div className="max-w-7xl mx-auto">
        <ContentCarousel title="Popular Originals" items={mockContent.popular} />
        <ContentCarousel title="Hit Shows" items={mockContent.blockbuster} />
        <ContentCarousel title="Blockbuster Evergreen" items={mockContent.upcoming} />
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-8 border-t border-red-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-4">Have questions? Get in touch with our support team.</p>
              <p className="text-gray-400">
                Email: support@unistream.com
                <br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
            <div>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6">Send Message</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-red-900/30 py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center text-gray-400">
          <p>&copy; 2025 Unistream. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
