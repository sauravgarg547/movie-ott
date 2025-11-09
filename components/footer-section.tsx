"use client"

import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react"
import { useState } from "react"
import ContactModal from "./contact-modal"

export default function FooterSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

      <footer id="contact" className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">T</span>
                </div>
                <span className="font-bold text-lg">TechCorp</span>
              </div>
              <p className="text-muted-foreground text-sm">Building tomorrow's digital solutions today.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-accent transition">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition">
                    Cloud Solutions
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-accent transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="flex items-center gap-2 hover:text-accent transition w-full group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition" />
                  <span className="group-hover:underline">Get in Touch</span>
                </button>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="border-t border-border pt-8 flex justify-between items-center flex-col md:flex-row gap-4">
            <p className="text-sm text-muted-foreground">© 2025 TechCorp. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
