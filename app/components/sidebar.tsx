import type { IconType } from 'react-icons'

import clsx from 'clsx'

import { HiHome } from 'react-icons/hi'
import { GiWhiteBook } from 'react-icons/gi'
import { RiQuillPenFill } from 'react-icons/ri'
import {
  BsChatSquareQuoteFill,
  BsGithub,
  BsFillBookmarksFill,
  BsFillFileImageFill,
} from 'react-icons/bs'
import { GrStackOverflow } from 'react-icons/gr'
import { SiTwitter } from 'react-icons/si'
import { MdCollectionsBookmark } from 'react-icons/md'
import { IoLogoRss } from 'react-icons/io'
import { HiExternalLink } from 'react-icons/hi'
import { Link, useLocation } from 'remix'

const socials = [
  {
    Icon: BsGithub,
    href: 'https://rd.nullish.in/github',
    alt: `Muthukumar's github profile link`,
    'aria-label': 'Github',
  },
  {
    Icon: SiTwitter,
    href: 'https://rd.nullish.in/twitter',
    alt: `Muthukumar's twitter profile link`,
    'aria-label': 'Twitter',
  },
  {
    Icon: IoLogoRss,
    href: '/rss.xml',
    alt: `Nullish.in rss feed link`,
    'aria-label': 'Rss feed',
  },
]

function NavLink({
  Icon,
  href,
  pathname,
  external,
  exact = false,
  ...delegated
}: {
  external?: boolean
  Icon: IconType
  href: string
  pathname: string
  exact?: boolean
}) {
  const location = useLocation()

  const currentPathname = location.pathname

  const highlight = exact
    ? currentPathname === href
    : currentPathname.includes(href) && href.length > 1

  const Component = external
    ? (props: { href: string; className: string }) => (
        <a {...props} target="_blank" rel="noreferrer" />
      )
    : Link

  return (
    <Component
      to={href}
      href={href}
      className={clsx('font-semibold flex items-center p-2 rounded-md', {
        'bg-[color:var(--gray)]': highlight,
        'hover:bg-[color:var(--gray)]': !highlight,
      })}
      {...delegated}
    >
      {Icon ? <Icon size={15} /> : null}
      <p className="ml-3">{pathname}</p>
      {external ? <HiExternalLink className="ml-auto" size={15} /> : null}
    </Component>
  )
}

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-6 p-4 text-sm border-r border-color h-screen min-w-[18rem] overflow-y-auto">
      <h2 className="mx-2 font-bold">Muthukumar</h2>
      <div className="flex flex-col gap-1">
        <NavLink Icon={HiHome} href="/" pathname="Home" exact />
        <NavLink Icon={RiQuillPenFill} href="/blog" pathname="Writings" />
        <NavLink Icon={GiWhiteBook} href="/good-reads" pathname="Good reads" />
        <NavLink Icon={MdCollectionsBookmark} href="/notes" pathname="Notes" />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="px-2 mb-4 text-gray-400">Me</h2>
        <NavLink Icon={BsFillBookmarksFill} href="/bookmarks" pathname="Bookmarks" />
        <NavLink Icon={GrStackOverflow} href="/stacks" pathname="Stack" />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="px-2 mb-4 text-gray-400">Online</h2>
        {socials.map((props) => (
          <NavLink pathname={props['aria-label']} {...props} key={props.href} external />
        ))}
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="px-2 mb-4 text-gray-400">Others</h2>
        <NavLink pathname="Favorite Quotes" href="/quotes" Icon={BsChatSquareQuoteFill} />
        <NavLink pathname="Photos" href="/photos" Icon={BsFillFileImageFill} />
      </div>
    </div>
  )
}
