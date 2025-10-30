// Dynamic robots.txt generation
export default function robots() {
  const baseUrl = 'https://rohitkr963.vercel.app' // Update with your actual domain

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
