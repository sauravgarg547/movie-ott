"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Monthly",
    price: "99",
    period: "per month",
    features: ["Unlimited streaming", "HD quality (720p)", "1 device at a time", "Ad-free experience"],
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
      "Family sharing",
    ],
    popular: false,
  },
]

export function SubscriptionModal({ open, onOpenChange, onSelectPlan }) {
  const [selectedPlan, setSelectedPlan] = useState(null)
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

  const handleSelectPlan = (planName) => {
    setSelectedPlan(planName)
    onSelectPlan?.(planName)
  }

  const handlePayment = async () => {
    if (!selectedPlan) {
      alert("Please select a plan first")
      return
    }

    if (typeof window.Razorpay === "undefined") {
      alert("Razorpay script is not loaded yet. Please try again.")
      return
    }

    setLoading(true)
    try {
      console.log("[v0] Starting payment for plan:", selectedPlan)

      const selectedPlanData = plans.find((p) => p.name === selectedPlan)

      const options = {
        key: "rzp_test_KcCkybYsHeBXrV",
        amount: Number(selectedPlanData.price) * 100,
        currency: "INR",
        name: "Unistream",
        description: `${selectedPlan} Subscription Plan`,
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999",
        },
        handler: (response) => {
          console.log("[v0] Payment successful:", response)
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`)
          onOpenChange(false)
          setSelectedPlan(null)
          setLoading(false)
        },
        modal: {
          ondismiss: () => {
            console.log("[v0] Payment modal closed")
            setLoading(false)
          },
        },
        theme: {
          color: "#dc2626",
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-red-900/30">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl">Choose Your Plan</DialogTitle>
          <DialogDescription className="text-gray-400">
            Select the perfect plan for your entertainment needs
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-3 gap-4 py-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg overflow-hidden border-2 transition ${
                plan.popular
                  ? "border-red-500 ring-1 ring-red-500/50 bg-card"
                  : "border-red-900/30 bg-black/30 hover:border-red-500/50"
              }`}
            >
              {plan.popular && (
                <div className="bg-red-600 text-white text-center py-1 text-sm font-semibold">Most Popular</div>
              )}

              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2">{plan.name}</h3>

                <div className="mb-4">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-3xl font-bold text-red-500">₹{plan.price}</span>
                    <span className="text-xs text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <Button
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`w-full mb-4 ${
                    selectedPlan === plan.name ? "bg-red-600 hover:bg-red-700" : "bg-red-600/80 hover:bg-red-600"
                  } text-white text-sm py-2`}
                >
                  {selectedPlan === plan.name ? "Selected" : "Choose Plan"}
                </Button>

                <div className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 justify-end mt-6">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="border-red-900/30 text-gray-300">
            Cancel
          </Button>
          <Button
            className="bg-red-600 hover:bg-red-700 text-white"
            disabled={!selectedPlan || loading}
            onClick={handlePayment}
          >
            {loading ? "Processing..." : `Pay ₹${plans.find((p) => p.name === selectedPlan)?.price || "0"}`}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
