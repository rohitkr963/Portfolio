// Dynamic sitemap generation for better SEO
export default function sitemap() {
  const baseUrl = 'https://rohitkr963.vercel.app' // Update with your actual domain

  const routes = [
    '',
    '#about',
    '#skills',
    '#projects',
    '#experience',
    '#education',
    '#achievements',
    '#certificates',
    '#contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }))

  return routes
}
