import {Link} from 'react-router-dom'
import {HiOutlineArrowRight} from 'react-icons/hi'
import clsx from 'clsx'

import {ArticlesListType} from '~/utils/mdx.server'
import {composeToArticleDate} from '~/utils'

function ArticleBanner(props: ArticlesListType) {
  const {slug, title, draft, description, date} = props

  return (
    <Link
      to={`/blog/${slug}`}
      className={clsx('rounded-lg group mb-12 w-full', {
        'bg-red-400': draft,
      })}
      key={slug}
    >
      <h2 className="text-xl font-semibold text-primary">{title}</h2>
      <p className="mt-4 text-md text-normal">{description}</p>
      <p className="mt-4 text-sm text-gray-500 text-normal ">{composeToArticleDate(date)}</p>
      <div className="flex items-center mt-4 text-gray-500 underline">
        Read more <HiOutlineArrowRight className="ml-2" size={15} />
      </div>
    </Link>
  )
}

export default ArticleBanner
