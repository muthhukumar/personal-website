import { LoaderFunction } from 'remix'

const siteMapText = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.nullish.in/</loc>
    <lastmod>2021-12-24</lastmod>
  </url>
  <url>
    <loc>https://www.nullish.in/changelog</loc>
    <lastmod>2021-12-21</lastmod>
  </url>
  <url>
    <loc>https://www.nullish.in/quotes</loc>
    <lastmod>2021-12-24</lastmod>
  </url>
  <url>
    <loc>https://www.nullish.in/blog</loc>
    <lastmod>2021-12-24</lastmod>
  </url>
  <url>
    <loc>https://www.nullish.in/</loc>
    <lastmod>2021-12-24</lastmod>
  </url>
  <url>
    <loc>https://www.nullish.in/about</loc>
    <lastmod>2021-12-24</lastmod>
  </url>
  <url>
    <loc>https://www.nullish.in/rss.xml</loc>
    <lastmod>2021-12-24</lastmod>
  </url>
</urlset>
`.trim()

export const loader: LoaderFunction = () => {
  return new Response(siteMapText, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
