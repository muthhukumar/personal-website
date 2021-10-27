import {json, LoaderFunction, MetaFunction, useLoaderData, Form, useSubmit} from 'remix'
import {useLocation} from 'react-router-dom'
import {RiSearchLine} from 'react-icons/ri'

import {ArticlesListType, getArticlesFromDisk} from '~/utils/mdx.server'

import ArticleBanner from '~/components/ArticleBanner'

interface HTMLSearchInputFormElement extends HTMLFormControlsCollection {
  query: HTMLInputElement
}

type LoaderData = {
  articles: Array<ArticlesListType>
  categories: Array<string>
  query: string | ''
  tag: string | ''
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

  const tag = url.searchParams.get('tag') ?? ''

  console.log('tag in server', tag)

  const tagMatchedArticles = tag
    ? articles.filter((article) => {
        return article.categories.includes(tag.toLowerCase())
      })
    : articles

  const filteredArticles = query
    ? tagMatchedArticles.filter((article) =>
        article.title.toLowerCase().includes(query.toLowerCase()),
      )
    : tagMatchedArticles

  const uniqueCategories = new Set(articles.map((article) => article.categories).flat())

  const categories = Array.from(uniqueCategories)

  return json(
    {articles: filteredArticles, categories, query, tag, url},
    {
      headers: {
        'cache-control': 'max-age=3600',
      },
    },
  )
}

export default function Posts() {
  const {articles} = useLoaderData<LoaderData>()

  const location = useLocation()

  const urlSearchParams = new URLSearchParams(location.search)

  const query = urlSearchParams.get('query')

  // const tag = urlSearchParams.get('tag')

  const submit = useSubmit()

  return (
    <div>
      <div className="w-full">
        <h2 className="text-xl font-semibold text-primary">Find latest of my writing here.</h2>
        <Form
          onChange={(event) => {
            const {query} = event.currentTarget.elements as HTMLSearchInputFormElement

            const newUrl = new URL(window.location.href)

            newUrl.searchParams.set('query', query.value)

            submit(event.currentTarget, {method: 'get', action: `/posts/${newUrl.search}`})
          }}
        >
          <div className="container flex items-center justify-center px-4 mt-8 overflow-hidden border border-gray-100 dark:border-gray-600 rounded-xl focus-within:border-gray-600 dark:focus-within:border-gray-100">
            <RiSearchLine className="mr-2" size={18} color="gray" />
            <input
              name="query"
              type="text"
              defaultValue={query ?? ''}
              placeholder="Search article"
              className="w-full py-4 bg-primary focus:outline-none text-primary"
            />
            <div className="text-gray-400">{articles.length}</div>
          </div>
        </Form>
      </div>
      <div className="container flex flex-col mt-8">
        <div className="flex flex-col items-start mt-8 text-primary">
          {articles.length > 0
            ? articles.map((article) => {
                return <ArticleBanner key={article.slug} {...article} />
              })
            : null}
        </div>
        {articles.length === 0 && (
          <div className="text-lg font-normal text-center text-primary">
            Looks like the article you looking for is not available. Please try some other topic.
          </div>
        )}
      </div>
    </div>
  )
}
