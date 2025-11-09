"use client"

import { CheckCircle2 } from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    {
      title: "No Dual Payments",
      description: "Don't pay twice. Start paying us only when your current vendor contract ends.",
    },
    {
      title: "Full Testing Time",
      description: "Test everything in dev, staging, or any non-prod environment. Take your time, no rush.",
    },
    {
      title: "24x7 Support",
      description: "Our expert team will be by your side around the clock to ensure a smooth transition.",
    },
    {
      title: "Zero-Risk Migration",
      description: "Move only when you're fully ready and confident. No pressure, no disruption.",
    },
    {
      title: "Verified Client References",
      description: "Hear directly from our clients about the impact of our work.",
    },
    {
      title: "Guaranteed Cost Savings",
      description: "Reduce your platform costs by 50% and more while giving you full control and transparency.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Benefits For You</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Why choose us for your technology transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="flex gap-4 p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
