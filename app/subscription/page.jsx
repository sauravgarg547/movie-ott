"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useState, useEffect } from "react"

const plans = [
  {
    name: "Monthly",
    price: "99",
    period: "per month",
    features: [
      "Unlimited streaming",
      "HD quality (720p)",
      "1 device at a time",
      "Ad-free experience",
      "Download on 1 device",
      "Cancel anytime",
    ],
    popular: false,
  },
  {
    name: "6 Months",
    price: "499",
    period: "for 6 months",
    features: [
      "Unlimited streaming",
      "Full HD quality (1080p)",
      "2 devices at a time",
      "Ad-free experience",
      "Download on 2 devices",
      "Cancel anytime",
      "Exclusive early access",
    ],
    popular: true,
  },
  {
    name: "1 Year",
    price: "999",
    period: "for 12 months",
    features: [
      "Unlimited streaming",
      "4K quality (Ultra HD)",
      "4 devices at a time",
      "Ad-free experience",
      "Download on 4 devices",
      "Cancel anytime",
      "Exclusive early access",
      "Premium support",
      "Family sharing",
    ],
    popular: false,
  },
]

export default function SubscriptionPage() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const handleSubscribeClick = async (plan) => {
    if (typeof window.Razorpay === "undefined") {
      alert("Razorpay script is not loaded yet. Please try again.")
      return
    }

    setLoading(true)
    try {
      console.log("[v0] Starting payment for plan:", plan.name)

      const options = {
        key: "rzp_test_KcCkybYsHeBXrV",
        amount: Number(plan.price) * 100,
        currency: "INR",
        name: "Unistream",
        description: `${plan.name} Subscription Plan`,
        handler: (response) => {
          console.log("[v0] Payment successful:", response)
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`)
          setLoading(false)
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#dc2626",
        },
        modal: {
          ondismiss: () => {
            console.log("[v0] Payment modal closed")
            setLoading(false)
          },
        },
      }

      console.log("[v0] Opening Razorpay with options:", options)
      const rzp = new window.Razorpay(options)
      rzp.open()
    } catch (error) {
      console.error("[v0] Payment error:", error)
      alert("Payment failed. Please try again.")
      setLoading(false)
    }
  }

  return (
    <main className="w-full bg-background min-h-screen">
      <Navbar />

      <div className="pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4">Choose Your Plan</h1>
            <p className="text-xl text-gray-300">Select the perfect plan for your entertainment needs</p>
          </div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-xl overflow-hidden transition transform hover:scale-105 ${
                  plan.popular ? "ring-2 ring-red-500 md:scale-105 shadow-2xl shadow-red-500/20" : "bg-card"
                }`}
              >
                {plan.popular && (
                  <div className="bg-red-600 text-white text-center py-2 font-semibold">Most Popular</div>
                )}

                <div className={`p-8 ${plan.popular ? "bg-card" : ""}`}>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-red-500">₹{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleSubscribeClick(plan)}
                    disabled={loading}
                    className="w-full bg-red-600 hover:bg-red-700 text-white mb-8 py-6"
                  >
                    {loading ? "Processing..." : "Subscribe Now"}
                  </Button>

                  <div className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* What You Get Section */}
          <div className="bg-card rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-8">What You Get With Your Subscription</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-500 mb-4">Exclusive Content</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Thousands of movies and shows</li>
                  <li>✓ Original series and documentaries</li>
                  <li>✓ New releases every week</li>
                  <li>✓ Bollywood blockbusters</li>
                  <li>✓ International content</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-red-500 mb-4">Premium Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ No advertisements</li>
                  <li>✓ Offline download feature</li>
                  <li>✓ Multiple device streaming</li>
                  <li>✓ Personalized recommendations</li>
                  <li>✓ Priority customer support</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-red-500 mb-4">Quality & Performance</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Crystal clear HD streaming</li>
                  <li>✓ 4K Ultra HD available</li>
                  <li>✓ Zero buffering technology</li>
                  <li>✓ Smooth playback on all devices</li>
                  <li>✓ Adaptive streaming</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-red-500 mb-4">Additional Perks</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Create multiple profiles</li>
                  <li>✓ Parental controls</li>
                  <li>✓ Watch history sync</li>
                  <li>✓ Early access to new content</li>
                  <li>✓ Family sharing options</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>

            <div className="space-y-4">
              {[
                {
                  q: "Can I cancel my subscription anytime?",
                  a: "Yes! You can cancel your subscription at any time without any hidden charges. Your access will continue until the end of your billing cycle.",
                },
                {
                  q: "How many devices can I use simultaneously?",
                  a: "It depends on your plan. Monthly: 1 device, 6-Month: 2 devices, 1-Year: 4 devices. You can switch between devices anytime.",
                },
                {
                  q: "Can I download content to watch offline?",
                  a: "Yes! With all our plans, you can download content to your devices and watch offline anytime, anywhere.",
                },
                {
                  q: "Is there a free trial available?",
                  a: "Contact our support team to inquire about special promotional offers and potential trial periods.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-card rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                  <p className="text-gray-300">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-red-900/30 py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center text-gray-400">
          <p>&copy; 2025 Unistream. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
