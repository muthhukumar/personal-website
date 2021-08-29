import {Link} from 'react-router-dom'
import moment from 'moment'

import {ArticlesListType} from '~/utils/mdx.server'

function ArticleBanner(props: ArticlesListType) {
  const {slug, banner, title, date, bannerCredit} = props

  return (
    <Link to={`/blog/${slug}`} className="rounded-lg group" key={slug}>
      <div className="flex flex-col mb-4" key={slug}>
        <div className="w-full h-80">
          <img
            src={banner}
            className="w-full h-full rounded-lg group-hover:ring-primary"
            alt={bannerCredit ?? `${title} banner`}
            loading="eager"
          />
        </div>

        <h2 className="mt-4 text-xl font-medium text-primary">{title}</h2>
        <div className="mt-2 text-xl font-medium text-gray-400">{moment(date).format('ll')}</div>
      </div>
    </Link>
  )
}

export default ArticleBanner
