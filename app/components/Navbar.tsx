import {Link, useLocation} from 'react-router-dom'
import clsx from 'clsx'
import {FaCircle} from 'react-icons/fa'

import {composeToArticleDate} from '~/utils'

const navLinks = [
  {
    to: '/',
    pathname: 'About',
  },
  {
    to: '/posts',
    pathname: 'Posts',
  },
]

function NavLink({to, pathname}: {to: string; pathname: string}) {
  const location = useLocation()

  const isActivePath = location.pathname === to

  return (
    <li>
      <Link
        to={to}
        className={clsx({
          'ml-8 font-medium text-md border-b-2 border-transparent hover:cursor-pointer': true,
          'border-b-2 border-pink-600': isActivePath,
        })}
      >
        {pathname}
      </Link>
    </li>
  )
}

function Tag({tag}: {tag: string}) {
  return (
    <Link
      className="px-[8px] py-[2px] mr-1 text-sm text-gray-600 bg-gray-300 rounded-md"
      to={`/posts?tag=${tag}`}
    >
      {tag}
    </Link>
  )
}

function PostNavbar({date, tags = []}: {date?: string | Date | number; tags: Array<string>}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start text-gray-500">
        You, {date && composeToArticleDate(date)}
        <FaCircle color="gray" size={5} className="mx-2" />
        {tags && tags.map((tag) => <Tag key={tag} tag={tag} />)}
      </div>
      <Link to="/posts" className="text-gray-500 underline">
        Back
      </Link>
    </div>
  )
}

function Navbar({tags, date}: {tags?: Array<string>; date?: string | Date | number}) {
  const location = useLocation()

  const isArticlePath = new RegExp(/\/blog\/./).test(location.pathname)

  return (
    <header className="mb-8">
      {isArticlePath ? (
        <PostNavbar tags={tags ?? []} date={date} />
      ) : (
        <nav>
          <ul className="flex items-center justify-end w-full">
            {navLinks.map((link) => {
              return <NavLink key={link.to} {...link} />
            })}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Navbar
