import {json, Link, LoaderFunction, MetaFunction, redirect, useLoaderData} from 'remix'

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

export const loader: LoaderFunction = async ({params}) => {
  const slug = params.slug ?? ''

  const page = await getMDXPageData({contentDir: 'blog', slug})

  if (!slug || !page) {
    return redirect('/posts')
  }

  let views = 0
  const readingTime = getReadingTime(page.code)

  try {
    let post = await prisma.post.findUnique({where: {slug}})

    if (!post) {
      post = await prisma.post.create({data: {slug}})
    }

    const {views: postViews} = await prisma.post.update({
      where: {id: post.id},
      data: {views: post.views + 1},
    })

    views = postViews
  } catch (error) {
    console.log('something winet wrong', error)
  }

  const article = getArticlesFromDisk().filter((article) => article.slug === slug)[0]
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

function Tag({tag}: {tag: string}) {
  return (
    <Link
      className="px-[8px] py-[2px] mr-1 text-sm text-gray-600 bg-gray-300 rounded-md"
      to={`/posts?tag=${tag}`}
    >
      {tag}
    </Link>
  )
}

function PostMoreDetails({
  date,
  tags = [],
  views,
  readingTime,
}: {
  views: number
  date?: string | Date | number
  tags: Array<string>
  readingTime: ReturnType<typeof getReadingTime>
}) {
  return (
    <div className="flex items-center justify-between mb-8 text-gray-500 text-md">
      <p>Muthukumar, {date && composeToArticleDate(date)}</p>
      {/* <FaCircle color="gray" size={5} className="mx-2" /> */}
      {/* {tags && tags.map((tag) => <Tag key={tag} tag={tag} />)} */}
      {}
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
