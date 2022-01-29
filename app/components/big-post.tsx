import { Link } from 'remix'
import Date from './date'

export default function BigPost({
  imageLink,
  title,
  publishedAt,
  excerpt,
  slug,
}: {
  imageLink: string
  title: string
  publishedAt: string
  excerpt: string
  slug: string
}) {
  return (
    <Link to={`/blog/${slug}`}>
      <div className="mb-20">
        <div className="w-full overflow-hidden h-[24rem] md:h-[37.5rem] rounded-none lg:rounded-lg">
          <img
            src={imageLink}
            className="object-cover object-center w-full h-full transition-all duration-500 hover:scale-110 ease"
          />
        </div>
        <div className="w-5/6 mx-auto mt-10 lg:w-full">
          <h2 className="my-10 text-4xl font-bold leading-tight md:text-6xl">{title}</h2>
          <p className="w-full mb-4 text-base md:text-lg lg:w-2/3">{excerpt}</p>
          <Date date={publishedAt} className="light-font-color" />
        </div>
      </div>
    </Link>
  )
}
