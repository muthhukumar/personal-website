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

          <div className="flex items-center my-8 fit-content">
            <div className="inline-block w-4 h-4 mr-4 overflow-hidden align-middle rounded-full md:w-12 md:h-12">
              <img src="/images/profile.jpg" className="w-full h-full" />
            </div>
            <p className="font-semibold">Muthukumar</p>
            <div className="w-[1px] h-[32px] mx-2 bg-black dark:bg-white"></div>
            {/* <p className="mr-2 light-font-color">By</p> */}
            <Date date={publishedAt} className="light-font-color" />
          </div>
        </div>
      </div>
    </Link>
  )
}
