import { json, LoaderFunction, useLoaderData } from 'remix'
import markdownToHtml, { md } from '~/utils/mdx.server'

export const loader: LoaderFunction = async ({ params }) => {
  const slug = params.slug ?? ''

  const postData = await md.getPostData(slug)

  const html = await markdownToHtml(postData.content)

  return html
}

export default function BlogSlug() {
  const html = useLoaderData()

  return (
    <article className="prose prose-xl">
      <div dangerouslySetInnerHTML={{ __html: JSON.stringify(html) }} />
    </article>
  )
}
