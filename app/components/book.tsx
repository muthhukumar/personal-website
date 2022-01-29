import { Link, useLocation } from 'remix'

import { Date } from '.'
import type { Book } from '~/utils/cms.server'
import clsx from 'clsx'

export default function Book({
  name,
  publishedAt,
  author,
  slug,
}: Pick<Book, 'author' | 'name' | 'publishedAt' | 'slug'>) {
  const location = useLocation()
  return (
    <Link
      to={`/good-reads/${slug}`}
      prefetch="render"
      className={clsx(
        'flex flex-col gap-2 w-full mb-2 hover:bg-[color:var(--gray)] rounded-md p-2 px-4',
        {
          'bg-[color:var(--gray)]': location.pathname === `/good-reads/${slug}`,
        },
      )}
    >
      <h2 className="font-semibold">
        {name} by {author}
      </h2>
      <Date className="light-font-color" date={publishedAt} />
    </Link>
  )
}
