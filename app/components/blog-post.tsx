import { Link } from 'remix'

import { Date } from '.'
import { Post } from '~/utils/cms.server'
import clsx from 'clsx'

interface Props extends Pick<Post, 'title' | 'publishedAt' | 'excerpt' | 'slug' | 'seo'> {
  className?: string
}

export default function BlogPost({ title, publishedAt, excerpt, slug, className, seo }: Props) {
  return (
    <Link to={`/blog/${slug}`} prefetch="render" className={clsx(className, 'flex flex-1')}>
      <div
        className={clsx(
          'overflow-hidden transition-all duration-200 bg-color border-2 dark:border-color shadow-md rounded-2xl hover:shadow-xl hover:-translate-y-1 ease',
        )}
      >
        <img
          src={seo?.image?.url}
          className="object-cover object-center w-full duration-700 ease-in-out scale-100 grayscale-0 blur-0 min-h-[325px]"
        />
        <div className="my-auto"></div>
        <div className="flex flex-col p-6 pt-8 mt-auto border-t gap-y-2 border-color">
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="italic truncate text-[color:var(--gray)]/[0.3]">{excerpt}</p>
          <Date className="text-sm light-font-color" date={publishedAt} />
        </div>
      </div>
    </Link>
  )
}
