import moment from 'moment'
import { LoaderFunction } from 'remix'
import { getPosts } from '~/utils/cms.server'

const getSiteMapText = async (context: Record<string, string>) => {
  const blogs = await getPosts('', context)
  return `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.nullish.in/</loc>
    <lastmod>2021-12-28</lastmod>
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
  ${blogs
    .map((blog) => {
      const updatedAtDate = moment(blog.lastUpdatedAt).format('YYYY-MM-DD')

      return `
  <url>
    <loc>https://www.nullish.in/blog/${blog.slug}</loc>
    <lastmod>${updatedAtDate}</lastmod>
  </url>
  `.trim()
    })
    .join('\n')}
</urlset>
`.trim()
}

export const loader: LoaderFunction = async ({ context }) => {
  const siteMap = await getSiteMapText(context)
  return new Response(siteMap, {
    headers: {
      'Content-Type': 'application/xml',
      'X-Robots-Tag': 'no-index',
    },
  })
}
