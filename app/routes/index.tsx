import {HiOutlineArrowRight} from 'react-icons/hi'
import {json, LoaderFunction, useRouteData} from 'remix'
import ArticleBanner from '~/components/ArticleBanner'

import {ArticlesListType, getArticlesFromDisk} from '~/utils/mdx.server'
import {Link} from 'react-router-dom'

export const loader: LoaderFunction = async () => {
  const articles = getArticlesFromDisk() ?? []

  const latest10Articles = articles.slice(0, 6)

  return json(latest10Articles)
}

export default function Index() {
  const latest10Articles = useRouteData<Array<ArticlesListType>>()
  return (
    <div className="p-8 lg:p-16">
      <div className="container mx-auto my-auto max-w-7xl text-primary">
        <div className="text-xl font-normal">Hi, I&apos;m </div>
        <h1 className="text-5xl font-bold md:text-8xl">Muthukumar</h1>
        <h1 className="mt-12 text-2xl font-bold">Here are my recently published articles</h1>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {latest10Articles.length > 0 &&
            latest10Articles.map((article) => <ArticleBanner key={article.slug} {...article} />)}
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link to="/blog">
            <div className="flex items-center px-8 py-4 border border-black rounded-full align-center dark:border-white">
              <div className="mr-4 text-xl text-primary">View all</div>
              <HiOutlineArrowRight size={25} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
