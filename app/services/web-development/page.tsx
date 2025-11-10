import type { Metadata } from "next"
import WebDevelopmentClientPage from "./web-development-client"

export const metadata: Metadata = {
  title: "Web Development Services | Custom Web Solutions | Tech Solutions",
  description:
    "Expert web development services including React, Vue, Angular, Node.js. Build scalable, secure web applications tailored to your business needs.",
  keywords:
    "web development, custom web applications, React development, Vue.js, Angular, web app development, e-commerce solutions",
  openGraph: {
    type: "website",
    title: "Web Development Services | Custom Web Solutions | Tech Solutions",
    description: "Expert web development services including React, Vue, Angular, Node.js.",
    url: "https://yourdomain.com/services/web-development",
    images: [
      {
        url: "https://yourdomain.com/og-web-dev.png",
        width: 1200,
        height: 630,
        alt: "Web Development Services",
      },
    ],
  },
  alternates: {
    canonical: "https://yourdomain.com/services/web-development",
  },
}

export default function WebDevelopmentPage() {
  return <WebDevelopmentClientPage />
}
