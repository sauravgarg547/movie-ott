"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useState } from "react"
import { Search, Globe, LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SubscriptionModal } from "@/components/subscription-modal"
import { useAuth } from "@/components/auth-context"
import { signOut } from "firebase/auth"
import { auth } from "@/lib/firebase"

export function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const { user, loading } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [subscriptionModalOpen, setSubscriptionModalOpen] = useState(false)

  const handleSubscribeClick = (e) => {
    e.preventDefault()
    setSubscriptionModalOpen(true)
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      router.push("/")
    } catch (error) {
      console.log("[v0] Logout error:", error.message)
    }
  }

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Unistream
              </div>
            </Link>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className={`transition ${pathname === "/" ? "text-red-500" : "text-white hover:text-red-500"}`}
              >
                Home
              </Link>
              <Link href="/#upcoming" className="text-white hover:text-red-500 transition">
                Upcoming
              </Link>
              <button onClick={handleSubscribeClick} className="text-white hover:text-red-500 transition">
                <Button variant="outline" className="border-red-500/50 hover:bg-red-500/10 text-red-500 bg-transparent">
                  Subscribe
                </Button>
              </button>
              <Link href="/#contact" className="text-white hover:text-red-500 transition">
                Contact Us
              </Link>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-4">
              <button className="text-white hover:text-red-500 transition">
                <Search size={20} />
              </button>
              <button className="text-white hover:text-red-500 transition">
                <Globe size={20} />
              </button>

              {!loading && user ? (
                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex items-center gap-2">
                    <img
                      src={user.photoURL || "/placeholder.svg?height=32&width=32"}
                      alt={user.displayName}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-white text-sm hidden lg:inline">{user.displayName}</span>
                  </div>
                  <Button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white gap-2">
                    <LogOut size={16} />
                    LOGOUT
                  </Button>
                </div>
              ) : (
                <Link href="/login">
                  <Button className="bg-red-600 hover:bg-red-700 text-white gap-2">LOGIN</Button>
                </Link>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white hover:text-red-500 transition"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-4">
              <Link href="/" className="block text-white hover:text-red-500 transition">
                Home
              </Link>
              <Link href="/#upcoming" className="block text-white hover:text-red-500 transition">
                Upcoming
              </Link>
              <button
                onClick={handleSubscribeClick}
                className="block w-full text-left text-white hover:text-red-500 transition"
              >
                Subscribe
              </button>
              <Link href="/#contact" className="block text-white hover:text-red-500 transition">
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </nav>

      <SubscriptionModal open={subscriptionModalOpen} onOpenChange={setSubscriptionModalOpen} />
    </>
  )
}
