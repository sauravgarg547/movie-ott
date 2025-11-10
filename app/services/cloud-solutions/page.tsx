import type { Metadata } from "next"
import Script from "next/script"
import CloudSolutionsClientPage from "./cloud-solutions-client"
import Navbar from "@/components/navbar"
import FooterSection from "@/components/footer-section"

export const metadata: Metadata = {
  title: "Cloud Solutions & DevOps Services | AWS, Azure, GCP | Tech Solutions",
  description:
    "Expert cloud consulting and DevOps services. AWS, Azure, Google Cloud expertise. Infrastructure optimization, cloud migration, and deployment solutions.",
  keywords: "cloud solutions, DevOps, AWS, Azure, Google Cloud, cloud migration, infrastructure, cloud consulting",
  openGraph: {
    type: "website",
    title: "Cloud Solutions & DevOps Services | AWS, Azure, GCP | Tech Solutions",
    description: "Expert cloud consulting and DevOps services. AWS, Azure, Google Cloud expertise.",
    url: "https://yourdomain.com/services/cloud-solutions",
    images: [
      {
        url: "https://yourdomain.com/og-cloud.png",
        width: 1200,
        height: 630,
        alt: "Cloud Solutions Services",
      },
    ],
  },
  alternates: {
    canonical: "https://yourdomain.com/services/cloud-solutions",
  },
}

export default function CloudSolutionsPage() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <CloudSolutionsClientPage />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Cloud Solutions",
            description:
              "Expert cloud consulting, DevOps, and infrastructure services on AWS, Azure, and Google Cloud platforms",
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
