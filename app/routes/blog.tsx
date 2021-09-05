import {json, LoaderFunction, MetaFunction, useRouteData, Form, useSubmit} from 'remix'
import {RiSearchLine} from 'react-icons/ri'

import {ArticlesListType, getArticlesFromDisk} from '~/utils/mdx.server'

import ArticleBanner from '~/components/ArticleBanner'

type LoaderData = {
  articles: Array<ArticlesListType>
  categories: Array<string>
  query: string | ''
}

export const meta: MetaFunction = () => {
  return {
    title: 'Blog',
  }
}

export const loader: LoaderFunction = async ({request}) => {
  const articles = getArticlesFromDisk() ?? []

  const url = new URL(request.url)

  const query = url.searchParams.get('query') ?? ''

  const filteredArticles = query
    ? articles.filter((article) => article.title.toLowerCase().includes(query.toLowerCase()))
    : articles

  const uniqueCategories = new Set(articles.map((article) => article.categories).flat())

  const categories = Array.from(uniqueCategories)

  return json(
    {articles: filteredArticles, categories, query},
    {
      headers: {
        'cache-control': 'max-age=3600',
      },
    },
  )
}

export default function Blog() {
  const {articles, query} = useRouteData<LoaderData>()

  const submit = useSubmit()

  return (
    <div className="p-8 pt-0 md:p-16">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-primary">Find latest of my writing here.</h2>
        <Form onChange={(event) => submit(event.currentTarget, {method: 'get'})}>
          <div className="container flex items-center justify-center px-4 mt-8 overflow-hidden border border-gray-100 dark:border-gray-600 rounded-xl focus-within:border-gray-600 dark:focus-within:border-gray-100">
            <RiSearchLine className="mr-2" size={18} />
            <input
              name="query"
              type="text"
              defaultValue={query}
              placeholder="Search article"
              className="w-full py-4 bg-primary focus:outline-none text-primary"
            />
            <div className="text-gray-400">{articles.length}</div>
          </div>
        </Form>
      </div>
      <div className="container flex flex-col max-w-6xl mx-auto mt-8">
        <div className="flex flex-col items-start mt-8 text-primary">
          {articles.length > 0
            ? articles.map((article) => {
                return <ArticleBanner key={article.slug} {...article} />
              })
            : null}
        </div>
        {articles.length === 0 && (
          <div className="text-xl font-normal text-center text-primary">
            Looks like the article you looking for is not available. Please try some other topic.
          </div>
        )}
      </div>
    </div>
  )
}
