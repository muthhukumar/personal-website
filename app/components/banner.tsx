import { RiCloseFill } from 'react-icons/ri'
import { useFetcher } from 'remix'

export type BannerType = {
  title: string
  link: string
  show: boolean
}

export default function Banner({ title, link }: Pick<BannerType, 'title' | 'link'>) {
  const banner = useFetcher()
  return (
    <div
      role="banner"
      className="relative flex items-center justify-center py-2 font-bold border-b bg-color font-color border-color"
    >
      <a href={link}>
        <p className="w-full text-sm text-center">{title}</p>
      </a>
      <div className="absolute right-0 pr-4">
        <banner.Form method="post" action="/close-banner">
          <button>
            <RiCloseFill />
          </button>
        </banner.Form>
      </div>
    </div>
  )
}
