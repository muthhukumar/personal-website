import { Link, useLocation } from 'remix'

import { Date } from '.'
import { Note } from '~/utils/cms.server'
import clsx from 'clsx'

export default function BlogPost({
  title,
  publishedDate,
  excerpt,
  slug,
}: Pick<Note, 'title' | 'publishedDate' | 'excerpt' | 'slug'>) {
  const location = useLocation()
  return (
    <Link
      to={`/notes/${slug}`}
      prefetch="render"
      className={clsx(
        'flex flex-col gap-2 w-full mb-2 hover:bg-[color:var(--gray)] rounded-md p-2 px-4',
        {
          'bg-[color:var(--gray)]': location.pathname === `/notes/${slug}`,
        },
      )}
    >
      <h2 className="font-semibold">{title}</h2>
      <p className="text-truncate text-[color:var(--gray)]/[0.3]">{excerpt}</p>
      <Date className="light-font-color" date={publishedDate} />
    </Link>
  )
}
