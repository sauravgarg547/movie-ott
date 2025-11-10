import type { Metadata } from "next"
import Script from "next/script"
import AppDevelopmentClientPage from "./app-development-client"
import Navbar from "@/components/navbar"
import FooterSection from "@/components/footer-section"

export const metadata: Metadata = {
  title: "App Development Services | iOS & Android Solutions | Tech Solutions",
  description:
    "Professional mobile app development services for iOS, Android, and cross-platform applications. React Native, Flutter, and native development expertise.",
  keywords:
    "app development, mobile app development, iOS development, Android development, React Native, Flutter, cross-platform",
  openGraph: {
    type: "website",
    title: "App Development Services | iOS & Android Solutions | Tech Solutions",
    description: "Professional mobile app development services for iOS, Android, and cross-platform applications.",
    url: "https://yourdomain.com/services/app-development",
    images: [
      {
        url: "https://yourdomain.com/og-app-dev.png",
        width: 1200,
        height: 630,
        alt: "App Development Services",
      },
    ],
  },
  alternates: {
    canonical: "https://yourdomain.com/services/app-development",
  },
}

export default function AppDevelopmentPage() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <AppDevelopmentClientPage />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "App Development",
            description:
              "Professional mobile app development services for iOS, Android, and cross-platform applications",
            provider: {
              "@type": "Organization",
              name: "Tech Solutions Company",
              url: "https://yourdomain.com",
            },
          }),
        }}
        strategy="afterInteractive"
      />
      <FooterSection />
    </div>
  )
}
