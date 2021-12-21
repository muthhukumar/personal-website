import { LoaderFunction } from 'remix'

const siteMapText = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.nullish.in/changelog</loc>
    <lastmod>2021-12-21</lastmod>
  </url>
</urlset>
`

export const loader: LoaderFunction = () => {
  return new Response(siteMapText, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
