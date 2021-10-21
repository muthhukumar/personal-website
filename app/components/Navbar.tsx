import {Link, useLocation} from 'react-router-dom'
import clsx from 'clsx'
import {ThemeToggle} from '.'

const navLinks = [
  {
    to: '/',
    pathname: 'Home',
  },
  {
    to: '/posts',
    pathname: 'Posts',
  },
  {
    to: '/snippets',
    pathname: 'Snippets',
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
          'mr-8 font-medium text-md border-b-2 border-transparent hover:cursor-pointer': true,
          'border-b-2 border-pink-600': isActivePath,
        })}
      >
        {pathname}
      </Link>
    </li>
  )
}

function Navbar() {
  return (
    <header className="flex items-center justify-between mb-16">
      <nav>
        <ul className="flex items-center justify-start w-full">
          {navLinks.map((link) => {
            return <NavLink key={link.to} {...link} />
          })}
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  )
}

export default Navbar
