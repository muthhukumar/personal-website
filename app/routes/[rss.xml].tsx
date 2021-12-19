import type { LoaderFunction } from 'remix'
import { getPosts } from '~/utils/cms.server'

function escapeCdata(s: string) {
  return s.replaceAll(']]>', ']]]]><![CDATA[>')
}

function escapeHtml(s: string) {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

export const loader: LoaderFunction = async ({ request }) => {
  const blogs = await getPosts()

  const host = request.headers.get('X-Forwarded-Host') ?? request.headers.get('host')

  if (!host) {
    throw new Error('Could not determine domain URL.')
  }

  const protocol = host.includes('localhost') ? 'http' : 'https'
  const domain = `${protocol}://${host}`
  const blogUrl = `${domain}/blog`

  const rssString = `
    <rss xmlns:blogChannel="${blogUrl}" version="2.0">
      <channel>
        <title>Muthukumar blog</title>
        <link>${blogUrl}</link>
        <description>The Muthukumar's Blog</description>
        <language>en-us</language>
        <generator>RSS feed generator</generator>
        <ttl>40</ttl>
        ${blogs
          .map((blog) =>
            `
            <item>
              <title><![CDATA[${escapeCdata(blog.title)}]]></title>
              <description><![CDATA[${escapeHtml(blog.excerpt)}]]></description>
              <author><![CDATA[${escapeCdata('Muthukumar')}]]></author>
              <pubDate>${blog.publishedAt}</pubDate>
              <link>${blogUrl}/${blog.slug}</link>
              <guid>${blogUrl}/${blog.slug}</guid>
            </item>
          `.trim(),
          )
          .join('\n')}
      </channel>
    </rss>
  `.trim()

  return new Response(rssString, {
    headers: {
      'Cache-Control': `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`,
      'Content-Type': 'application/xml',
      'Content-Length': String(Buffer.byteLength(rssString)),
    },
  })
}
