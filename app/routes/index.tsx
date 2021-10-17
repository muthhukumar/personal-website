import {json, LoaderFunction, useLoaderData} from 'remix'
import ArticleBanner from '~/components/ArticleBanner'

import {ArticlesListType, getArticlesFromDisk} from '~/utils/mdx.server'

export const loader: LoaderFunction = async () => {
  const articles = getArticlesFromDisk() ?? []

  const latest10Articles = articles.slice(0, 6)

  return json(latest10Articles)
}

export default function Index() {
  const latest10Articles = useLoaderData<Array<ArticlesListType>>()
  return (
    <div className="mx-4">
      <div className="py-8 mb-8">
        <div className="container flex items-center justify-between max-w-4xl mx-auto text-primary">
          <div>
            <div className="text-xl font-normal">Hi, I&apos;m </div>
            <h1 className="text-5xl font-bold md:text-7xl">Muthukumar</h1>
            <p>
              I&apos;m a full stack web developer. I like to code and sketch when I&apos;m not
              coding.
            </p>
          </div>
          <img
            src="/profile.jpeg"
            className="object-cover w-64 h-64 ml-32 rounded-full sm:hidden lg:inline"
          />
        </div>
      </div>
      <div className="container max-w-4xl mx-auto text-primary">
        <h2 className="mt-6 text-xl font-bold text-pink-500">RECENTLY PUBLISHED</h2>
        <div className="flex flex-col items-start mt-8">
          {latest10Articles.length > 0 &&
            latest10Articles.map((article) => <ArticleBanner key={article.slug} {...article} />)}
        </div>
      </div>
    </div>
  )
}
