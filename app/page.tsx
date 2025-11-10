import type { Metadata } from "next"
import ClientHomePage from "./client-page"

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
}

export default function Home() {
  return <ClientHomePage />
}
