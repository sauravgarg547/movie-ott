"use client"

import type React from "react"

import { useState } from "react"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"

interface EmailFormProps {
  onSuccess: () => void
}

export default function EmailForm({ onSuccess }: EmailFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "web-development",
    projectDetails: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      console.log("[v0] Submitting form with data:", formData)

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      console.log("[v0] Response from API:", data)

      if (!response.ok) {
        throw new Error(data.message || "Failed to send email")
      }

      setIsSuccess(true)
      setTimeout(() => {
        onSuccess()
      }, 2000)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Something went wrong"
      console.log("[v0] Error submitting form:", errorMessage)
      setError(errorMessage)
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <CheckCircle2 className="w-12 h-12 text-green-500 mb-4" />
        <h3 className="text-xl font-bold mb-2">Email Sent Successfully!</h3>
        <p className="text-muted-foreground text-center">Thank you! We'll get back to you soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
          placeholder="your@email.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium mb-2">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
          placeholder="+1 (555) 000-0000"
        />
      </div>

      {/* Service Type */}
      <div>
        <label className="block text-sm font-medium mb-2">Service Type</label>
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
        >
          <option value="web-development">Web Development</option>
          <option value="app-development">App Development</option>
          <option value="cloud-solutions">Cloud Solutions</option>
          <option value="ai-solutions">AI Solutions</option>
          <option value="devops-consulting">DevOps Consulting</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Project Details */}
      <div>
        <label className="block text-sm font-medium mb-2">Project Details</label>
        <textarea
          name="projectDetails"
          value={formData.projectDetails}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-3 bg-destructive/10 border border-destructive rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-destructive text-sm font-semibold">Error</p>
            <p className="text-destructive text-sm">{error}</p>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 disabled:opacity-50 transition text-primary-foreground font-semibold rounded-lg flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  )
}
