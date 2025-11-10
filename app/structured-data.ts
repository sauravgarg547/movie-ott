export function getOrganizationSchema() {
  return {
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
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address",
      addressLocality: "City",
      addressRegion: "State",
      postalCode: "12345",
      addressCountry: "Country",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      telephone: "+1-555-123-4567",
      email: "contact@yourdomain.com",
    },
  }
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Tech Solutions Company",
    image: "https://yourdomain.com/logo.png",
    description: "Professional software development and IT consulting services",
    telephone: "+1-555-123-4567",
    email: "contact@yourdomain.com",
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "USA",
    },
  }
}

export function getServiceSchema(serviceName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: description,
    provider: {
      "@type": "Organization",
      name: "Tech Solutions Company",
      url: "https://yourdomain.com",
    },
    areaServed: {
      "@type": "Country",
      name: "USA",
    },
  }
}
