import {Link, useLocation} from 'react-router-dom'
import clsx from 'clsx'

// import ThemeToggle from './ThemeToggle'

const navLinks = [
  {
    to: '/',
    pathname: 'Home',
  },
  {
    to: '/blog',
    pathname: 'Blog',
  },
  // {
  //   to: '/sketches',
  //   pathname: 'Sketches',
  // },
]

function NavLink({to, pathname}: {to: string; pathname: string}) {
  const location = useLocation()

  const isActivePath = location.pathname === to
  const hasBlogKey = location.pathname.includes('blog') && to.includes('blog')

  return (
    <li>
      <Link
        to={to}
        className={clsx({
          'mr-16 font-medium text-md border-b-2 border-transparent hover:cursor-pointer': true,
          'border-b-2 border-pink-600': isActivePath || hasBlogKey,
        })}
      >
        {pathname}
      </Link>
    </li>
  )
}

function Navbar() {
  const location = useLocation()

  const isBlogPath = new RegExp(/\/blog\/./).test(location.pathname)

  console.log(location.pathname)

  console.log(isBlogPath)

  return (
    <header className={clsx('p-16 pb-4 text-primary', {'bg-blue-100': isBlogPath})}>
      <nav className="container flex items-center justify-start max-w-4xl mx-auto">
        <ul className="flex items-center justify-center">
          {navLinks.map((link) => {
            return <NavLink key={link.to} {...link} />
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar

// <div className="flex flex-col mt-auto mb-8">
//   <div className="text-lg text-gray-600">Hi, my name is</div>
//   <div className="mt-2 font-black text-8xl">Muthukumar</div>
//   <div className="text-lg text-gray-600">I love to code & try out new things.</div>
// </div>
