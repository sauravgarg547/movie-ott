"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import ContactModal from "./contact-modal"

export default function Navbar() {
  const navRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const services = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "App Development", href: "/services/app-development" },
    { name: "Cloud Solutions", href: "/services/cloud-solutions" },
    { name: "AI Solutions", href: "/services/ai-solutions" },
    { name: "DevOps Consulting", href: "/services/devops-consulting" },
  ]

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center font-bold text-white">
                T
              </div>
              <span className="font-bold text-lg hidden sm:inline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                TechCorp
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {/* Home */}
              <Link href="/" className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors text-sm font-medium">
                  Services
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-0 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Links */}
              <Link
                href="/projects"
                className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
              >
                Projects
              </Link>
              <Link
                href="/resources"
                className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
              >
                Resources
              </Link>
              <Link
                href="/about"
                className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
              >
                Who We Are
              </Link>
            </div>

            {/* Contact Button */}
            <button
              onClick={() => setIsContactOpen(true)}
              className="hidden md:block px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105 text-sm"
            >
              Contact Us
            </button>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-2">
              <Link href="/" className="px-4 py-2 text-foreground/80 hover:text-primary transition-colors text-sm">
                Home
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
                  className="w-full text-left px-4 py-2 text-foreground/80 hover:text-primary transition-colors text-sm flex justify-between items-center"
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${openDropdown === "services" ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === "services" && (
                  <div className="bg-secondary/50 rounded pl-4">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-foreground/80 hover:text-primary transition-colors text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/projects"
                className="px-4 py-2 text-foreground/80 hover:text-primary transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/resources"
                className="px-4 py-2 text-foreground/80 hover:text-primary transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 text-foreground/80 hover:text-primary transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                Who We Are
              </Link>
              <button
                onClick={() => {
                  setIsContactOpen(true)
                  setIsOpen(false)
                }}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold w-full text-sm mt-2"
              >
                Contact Us
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}
