import {Link} from 'react-router-dom'
import {json, LoaderFunction, MetaFunction, useRouteData} from 'remix'
import {MdKeyboardBackspace} from 'react-icons/md'
import moment from 'moment'

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
    <div className="p-6 pt-0 md:p-8 lg:p-16">
      <div className="container flex flex-col items-start max-w-4xl mx-auto mb-12 text-primary">
        <Link to="/blog">
          <div className="flex items-center justify-start">
            <MdKeyboardBackspace className="mr-4" size={25} />
            <div className="text-lg font-semibold">Back to overview</div>
          </div>
        </Link>

        <div className="flex flex-col items-start mt-16">
          <h2 className="mb-4 text-3xl font-semibold">{article.title}</h2>
          <div className="text-lg font-normal text-gray-400">
            {moment(article.date).format('ll')}
          </div>
        </div>
      </div>
      <img src={article.banner} className="container max-w-6xl mx-auto rounded-lg" />
      <article className="container max-w-4xl mx-auto mt-16 prose prose-lg prose-pink text-primary text-[19px] leading-8">
        <Component />
      </article>
    </div>
  )
}
