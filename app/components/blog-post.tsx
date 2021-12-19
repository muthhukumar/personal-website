import { BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'remix'

import { Date } from '.'
import { Post } from '~/utils/cms.server'

export default function BlogPost({
  title,
  publishedAt,
  excerpt,
  slug,
}: Pick<Post, 'title' | 'publishedAt' | 'excerpt' | 'slug'>) {
  return (
    <div className="w-full pb-6 mb-4 border-b border-color md:pb-10 md:mb-8">
      <Date className="my-2 text-sm light-font-color md:text-base" date={publishedAt} />
      <h2 className="my-4 text-xl font-bold md:text-2xl">{title}</h2>
      <p className="mb-4 text-sm md:text-base">{excerpt}</p>
      <Link
        to={`/blog/${slug}`}
        className="flex items-center text-sm link-font-color"
        prefetch="render"
      >
        Read More <BiRightArrowAlt className="ml-1" />
      </Link>
    </div>
  )
}
