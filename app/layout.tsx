import type { Metadata } from "next"
import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Professional Software Development Services | Tech Solutions",
  description:
    "Leading software development company offering web development, app development, and cloud solutions. Expert team with 10+ years experience.",
  keywords: "software development, web development, app development, cloud solutions, IT consulting, software company",
  authors: [{ name: "Tech Solutions" }],
  creator: "Tech Solutions",
  publisher: "Tech Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "Professional Software Development Services | Tech Solutions",
    description: "Leading software development company offering web development, app development, and cloud solutions.",
    siteName: "Tech Solutions",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tech Solutions - Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Software Development Services | Tech Solutions",
    description: "Leading software development company offering web development, app development, and cloud solutions.",
    creator: "@yourtwitterhandle",
    images: ["https://yourdomain.com/og-image.png"],
  },
  alternates: {
    canonical: "https://yourdomain.com",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tech Solutions Company",
              url: "https://yourdomain.com",
              logo: "https://yourdomain.com/logo.png",
              description: "Leading software development company offering web, app, and cloud solutions",
              sameAs: [
                "https://linkedin.com/company/yourcompany",
                "https://twitter.com/yourcompany",
                "https://github.com/yourcompany",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Sales",
                telephone: "+1-555-123-4567",
                email: "contact@yourdomain.com",
              },
            }),
          }}
        />
      </head>
      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
