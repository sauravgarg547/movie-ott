export default function sitemap() {
  const baseUrl = "https://yourdomain.com"

  const routes = [
    "",
    "/about",
    "/projects",
    "/resources",
    "/services/web-development",
    "/services/app-development",
    "/services/cloud-solutions",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }))
}
