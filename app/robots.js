export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://ltsector86gurugram.co.in/sitemap.xml',
  }
}
