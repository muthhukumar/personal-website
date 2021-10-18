import {Link} from 'react-router-dom'
import {HiOutlineArrowRight} from 'react-icons/hi'
import clsx from 'clsx'

import {ArticlesListType} from '~/utils/mdx.server'

function ArticleBanner(props: ArticlesListType) {
  const {slug, title, draft, description} = props

  return (
    <Link
      to={`/blog/${slug}`}
      className={clsx('rounded-lg group mb-12 w-full md:w-4/6', {'bg-red-400': draft})}
      key={slug}
    >
      <h2 className="text-xl font-bold text-primary">{title}</h2>
      <p className="mt-4 text-md text-normal">{description}</p>
      <div className="flex items-center mt-4 font-bold">
        Read more <HiOutlineArrowRight className="ml-2" size={15} />
      </div>
    </Link>
  )
}

export default ArticleBanner
