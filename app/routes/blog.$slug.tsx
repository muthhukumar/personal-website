import {json, LoaderFunction} from 'remix'
import {useLoaderData} from '@remix-run/react'

import {getMDXPageData, MDXPageType} from '../utils/mdx.server'
import {useMdxComponent} from '../utils/hooks'

export const loader: LoaderFunction = async ({params}) => {
  const page = await getMDXPageData({contentDir: 'blog', slug: params.slug})
  return json(page, {status: page ? 200 : 404})
}

export default function Index() {
  const page = useLoaderData<MDXPageType>()

  if (!page) {
    return <div className="text-primary">Blog post not found</div>
  }

  return <MDXComponent page={page} />
}

function MDXComponent({page}: {page: MDXPageType}) {
  const Component = useMdxComponent(page.code)

  return (
    <article className="container max-w-6xl p-8 mx-auto prose prose-md prose-purple">
      <Component />
    </article>
  )
}
