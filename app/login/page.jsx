"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signInWithPopup, signOut } from "firebase/auth"
import { auth, googleProvider } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)
  const [error, setError] = useState("")

  const handleGoogleLogin = async () => {
    try {
      setLoading(true)
      setError("")
      const result = await signInWithPopup(auth, googleProvider)
      setUser(result.user)
      console.log("[v0] User logged in:", result.user.email)
      // Redirect to home after successful login
      setTimeout(() => {
        router.push("/")
      }, 1500)
    } catch (err) {
      console.log("[v0] Login error:", err.message)
      setError(err.message || "Failed to login with Google")
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      setLoading(true)
      await signOut(auth)
      setUser(null)
      console.log("[v0] User logged out")
    } catch (err) {
      console.log("[v0] Logout error:", err.message)
      setError(err.message || "Failed to logout")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center mb-8">
          <div className="text-4xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            Unistream
          </div>
        </Link>

        {/* Login Card */}
        <div className="bg-gray-900/50 border border-red-900/30 rounded-lg p-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-400 mb-8">Sign in to continue to Unistream</p>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg mb-6">{error}</div>
          )}

          {user ? (
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Logged in as</p>
                <p className="text-white font-semibold">{user.email}</p>
                <p className="text-gray-500 text-sm mt-2">{user.displayName}</p>
              </div>
              <div className="space-y-2">
                <Button
                  onClick={() => router.push("/")}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
                >
                  Continue to Home
                </Button>
                <Button
                  onClick={handleLogout}
                  disabled={loading}
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white"
                >
                  {loading ? "Logging out..." : "Logout"}
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <Button
                onClick={handleGoogleLogin}
                disabled={loading}
                className="w-full h-12 bg-white hover:bg-gray-100 text-black font-semibold flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                {loading ? "Signing in..." : "Sign in with Google"}
              </Button>

              <p className="text-gray-400 text-center text-sm">
                Don't have an account? Google login will create one automatically
              </p>
            </div>
          )}

          {/* Back to Home */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <Link href="/" className="text-red-500 hover:text-red-400 text-center block text-sm font-semibold">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
