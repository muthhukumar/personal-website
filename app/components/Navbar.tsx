import clsx from 'clsx'
import {Link, useLocation} from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  {
    to: '/',
    pathname: 'Home',
  },
  {
    to: '/blog',
    pathname: 'Blog',
  },
  {
    to: '/bookmarks',
    pathname: 'Bookmarks',
  },
]

function NavLink({to, pathname}: {to: string; pathname: string}) {
  const location = useLocation()

  const isActivePath = location.pathname === to
  const hasBlogKey = location.pathname.includes('blog') && to.includes('blog')

  return (
    <Link to={to}>
      <li
        className={clsx({
          'mr-16 font-medium text-md py-2 text-gray-400 border-b-2 border-transparent hover:cursor-pointer':
            true,
          'text-pink-600 border-b-2 border-pink-600': isActivePath || hasBlogKey,
        })}
      >
        {pathname}
      </li>
    </Link>
  )
}

function Navbar() {
  return (
    <header className="flex items-center justify-start p-8 text-primary">
      <Link
        to="/"
        className="flex items-center justify-center w-10 h-10 font-sans text-2xl font-medium bg-pink-600 rounded-full text-primary-inverse"
      >
        M
      </Link>
      <nav className="ml-auto">
        <ul className="flex items-center">
          {navLinks.map((link) => {
            return <NavLink key={link.to} {...link} />
          })}
        </ul>
      </nav>
      <span className="ml-auto">
        <ThemeToggle />
      </span>
    </header>
  )
}

export default Navbar
