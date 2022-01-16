import { LoaderFunction } from 'remix'
import { getPosts } from '~/utils/cms.server'

const getSiteMapText = async () => {
  const blogs = (await getPosts()) ?? []
  return `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.nullish.in/</loc>
    <lastmod>2021-12-28</lastmod>
  </url>
  <url>
    <loc>https://www.nullish.in/changelog</loc>
    <lastmod>2021-12-29</lastmod>
  </url>
  <url>
    <loc>https://www.nullish.in/quotes</loc>
    <lastmod>2021-12-28</lastmod>
  </url>
  <url>
    <loc>https://www.nullish.in/blog</loc>
    <lastmod>2021-12-28</lastmod>
  </url>
  <url>
    <loc>https://www.nullish.in/about</loc>
    <lastmod>2021-12-28</lastmod>
  </url>
  ${blogs.map(
    (blog) => `
  <url>
    <loc>https://www.nullish.in/blog/${blog.slug}</loc>
    <lastmod>${blog.lastUpdatedAt}</lastmod>
  </url>
  `,
  )}
</urlset>
`.trim()
}

export const loader: LoaderFunction = async () => {
  const siteMap = await getSiteMapText()
  return new Response(siteMap, {
    headers: {
      'Content-Type': 'application/xml',
      'X-Robots-Tag': 'no-index',
      'Content-Length': String(siteMap).length,
    },
  })
}
