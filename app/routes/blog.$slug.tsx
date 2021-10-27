import * as React from 'react'
import {
  ActionFunction,
  json,
  LoaderFunction,
  MetaFunction,
  redirect,
  useFetcher,
  useLoaderData,
} from 'remix'

import {
  ArticlesListType,
  getArticlesFromDisk,
  getMDXPageData,
  getReadingTime,
  MDXPageType,
} from '~/utils/mdx.server'
import {useMdxComponent} from '~/utils/hooks'
import {Header} from '~/components'
import {prisma} from '~/utils/prisma.server'
import {composeToArticleDate} from '~/utils'
import {FaCircle} from 'react-icons/fa'
import {useParams} from 'react-router-dom'

type LoaderType = {
  article: ArticlesListType
  page: MDXPageType | null
  views: number
  readingTime: ReturnType<typeof getReadingTime>
}

export const meta: MetaFunction = ({data}) => {
  const article = data.article as ArticlesListType

  if (!article) {
    return {
      title: 'Article not found.',
      description: '',
      'og:title': '',
      'og:description': '',
    }
  }

  return {
    title: article.title,
    description: article.description,
    'og:title': article.title,
    'og:description': article.description,
  }
}

export const action: ActionFunction = async ({request}) => {
  const formData = new URLSearchParams(await request.text())

  const slug = formData.get('slug')

  const url = new URL(request.url)

  const article = getArticlesFromDisk().filter((article) => article.slug === slug)[0]

  if (!slug || !article) {
    return redirect(url.pathname)
  }

  try {
    let post = await prisma.post.findUnique({where: {slug}})

    if (!post) {
      post = await prisma.post.create({
        data: {slug, title: article.title, date: article.date, description: article.description},
      })
    }

    await prisma.post.update({
      where: {id: post.id},
      data: {views: post.views + 1},
    })
  } catch (error) {
    console.log('error', error)
  }

  return redirect(url.pathname)
}

export const loader: LoaderFunction = async ({params}) => {
  const slug = params.slug ?? ''

  const page = await getMDXPageData({contentDir: 'blog', slug})

  if (!slug || !page) {
    return redirect('/posts')
  }

  let views = 0
  const readingTime = getReadingTime(page.code)
  const article = getArticlesFromDisk().filter((article) => article.slug === slug)[0]

  try {
    let post = await prisma.post.findUnique({where: {slug}})

    if (!post) {
      post = await prisma.post.create({
        data: {slug, title: article.title, date: article.date, description: article.description},
      })
    }
    views = post.views
  } catch (error) {
    console.log('something winet wrong', error)
  }

  return json(
    {page, article, views, readingTime},
    {
      status: page ? 200 : 404,
      headers: {
        'cache-control': 'max-age=3600',
      },
    },
  )
}

function PostMoreDetails({
  date,
  views,
  readingTime,
}: {
  views: number
  date?: string | Date | number
  tags: Array<string>
  readingTime: ReturnType<typeof getReadingTime>
}) {
  return (
    <div className="flex items-center justify-between mb-8 text-sm text-gray-800">
      <div className="flex items-center">
        <img src="/profile.jpeg" alt="Muthukumar picture" className="w-6 h-6 mr-2 rounded-full" />
        <p>Muthukumar / {date && composeToArticleDate(date)}</p>
      </div>
      <div className="flex items-center">
        <p>{readingTime.text}</p>
        <FaCircle color="gray" size={5} className="mx-2" />
        <p>{views.toLocaleString()} views</p>
      </div>
    </div>
  )
}

export default function Index() {
  const {page, ...data} = useLoaderData<LoaderType>()
  const fetcher = useFetcher()

  const {slug} = useParams()

  React.useEffect(() => {
    if (slug) {
      fetcher.submit({slug}, {method: 'post'})
    }
  }, [])

  if (!page) {
    return <div className="text-primary">Article post not found</div>
  }

  return <MDXComponent page={page} {...data} />
}

function MDXComponent({
  page,
  article,
  views,
  readingTime,
}: {
  views: number
  page: MDXPageType
  article: ArticlesListType
  readingTime: ReturnType<typeof getReadingTime>
}) {
  const Component = useMdxComponent(page.code)

  return (
    <>
      <Header title={article.title} />
      <PostMoreDetails
        date={article.date}
        tags={article.categories}
        views={views}
        readingTime={readingTime}
      />
      <article className="w-full max-w-full prose pt-7 prose-pink text-primary">
        <Component />
      </article>
    </>
  )
}
