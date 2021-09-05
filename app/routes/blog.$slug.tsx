import {json, LoaderFunction, MetaFunction, useRouteData} from 'remix'
import {RiArrowRightSLine} from 'react-icons/ri'

import {
  ArticlesListType,
  getArticlesFromDisk,
  getMDXPageData,
  MDXPageType,
} from '~/utils/mdx.server'
import {useMdxComponent} from '~/utils/hooks'

type LoaderType = {
  article: ArticlesListType
  page: MDXPageType | null
}

export const meta: MetaFunction = ({data}) => {
  const article = data.article as ArticlesListType

  if (!article) {
    return {
      title: 'Article not found.',
      description: '',
      'og:title': '',
      'og:description': '',
      'og:image': '',
    }
  }

  return {
    title: article.title,
    description: article.description,
    'og:title': article.title,
    'og:description': article.description,
    'og:image': article.banner,
  }
}

export const loader: LoaderFunction = async ({params}) => {
  const page = await getMDXPageData({contentDir: 'blog', slug: params.slug})
  const article = getArticlesFromDisk().filter((article) => article.slug === params.slug)[0]
  return json(
    {page, article},
    {
      status: page ? 200 : 404,
      headers: {
        'cache-control': 'max-age=3600',
      },
    },
  )
}

export default function Index() {
  const {page, article} = useRouteData<LoaderType>()

  if (!page) {
    return <div className="text-primary">Article post not found</div>
  }

  return <MDXComponent page={page} article={article} />
}

function MDXComponent({page, article}: {page: MDXPageType; article: ArticlesListType}) {
  const Component = useMdxComponent(page.code)

  return (
    <div className="text-primary">
      <div className="h-[25vh] bg-blue-100 flex items-end">
        <div className="container max-w-6xl mx-auto mb-16">
          <div className="flex items-center mt-4">
            Home <RiArrowRightSLine className="mx-4" /> Blog <RiArrowRightSLine className="mx-4" />{' '}
            {article.categories[0]}
          </div>
          <div className="mt-8 text-3xl font-bold">{article.title}</div>
        </div>
      </div>
      <div className="p-6 pt-0 md:p-8 lg:p-16">
        <article className="container max-w-6xl mx-auto prose prose-lg prose-pink text-primary text-[19px] leading-8">
          <Component />
        </article>
      </div>
    </div>
  )
}
