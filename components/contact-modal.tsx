"use client"

import { useState } from "react"
import { X, Mail, MessageCircle, Phone } from "lucide-react"
import EmailForm from "./email-form"

type ContactType = "email" | "whatsapp" | "phone" | null

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [contactType, setContactType] = useState<ContactType>(null)

  if (!isOpen) return null

  const handleBackClick = () => {
    if (contactType) {
      setContactType(null)
    } else {
      onClose()
    }
  }

  const handleWhatsApp = () => {
    const phoneNumber = "+919876543210" // Replace with your WhatsApp number
    const message = encodeURIComponent("Hi! I'd like to inquire about your software development services.")
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${message}`, "_blank")
    onClose()
  }

  const handlePhone = () => {
    window.location.href = "tel:+919876543210" // Replace with your phone number
    onClose()
  }

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm animate-fade-in" onClick={handleBackClick} />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4 animate-scale-in">
        <div className="bg-card border border-border rounded-2xl shadow-2xl p-8">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition"
          >
            <X className="w-6 h-6" />
          </button>

          {!contactType ? (
            <>
              <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
              <p className="text-muted-foreground mb-6">Choose how you'd like to contact us</p>

              {/* Contact Options */}
              <div className="space-y-3">
                {/* Email Option */}
                <button
                  onClick={() => setContactType("email")}
                  className="w-full p-4 border border-border rounded-lg hover:bg-secondary/10 hover:border-accent transition flex items-center gap-3 text-left group"
                >
                  <Mail className="w-5 h-5 text-accent group-hover:scale-110 transition" />
                  <div>
                    <p className="font-semibold">Email Form</p>
                    <p className="text-sm text-muted-foreground">Send us a detailed message</p>
                  </div>
                </button>

                {/* WhatsApp Option */}
                <button
                  onClick={handleWhatsApp}
                  className="w-full p-4 border border-border rounded-lg hover:bg-green-500/10 hover:border-green-500 transition flex items-center gap-3 text-left group"
                >
                  <MessageCircle className="w-5 h-5 text-green-500 group-hover:scale-110 transition" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">Chat with us on WhatsApp</p>
                  </div>
                </button>

                {/* Phone Option */}
                <button
                  onClick={handlePhone}
                  className="w-full p-4 border border-border rounded-lg hover:bg-blue-500/10 hover:border-blue-500 transition flex items-center gap-3 text-left group"
                >
                  <Phone className="w-5 h-5 text-blue-500 group-hover:scale-110 transition" />
                  <div>
                    <p className="font-semibold">Phone Call</p>
                    <p className="text-sm text-muted-foreground">Call us directly</p>
                  </div>
                </button>
              </div>
            </>
          ) : contactType === "email" ? (
            <>
              <div className="flex items-center gap-2 mb-6">
                <button onClick={() => setContactType(null)} className="text-accent hover:text-accent/80 transition">
                  ←
                </button>
                <h2 className="text-2xl font-bold">Send us an Email</h2>
              </div>
              <EmailForm
                onSuccess={() => {
                  onClose()
                  setContactType(null)
                }}
              />
            </>
          ) : null}
        </div>
      </div>
    </>
  )
}
