import { Link } from 'remix'
// import { HiOutlineMenuAlt4 } from 'react-icons/hi'

// import { GiHamburgerMenu } from 'react-icons/gi'
import { useScrolled } from '~/utils/index'

const links: Array<{ to: string; pathname: string }> = [
  {
    to: '/',
    pathname: 'Home',
  },
  {
    to: '/blog',
    pathname: 'Blog',
  },
  // {
  //   to: '/good-reads',
  //   pathname: 'Good reads',
  // },
  // {
  //   to: '/notes',
  //   pathname: 'Notes',
  // },
  {
    to: '/photos',
    pathname: 'Photos',
  },
  {
    to: '/about',
    pathname: 'About',
  },
]

export default function Navbar() {
  const scrolled = useScrolled(10)

  return (
    <header
      className={`flex items-center bg-color fixed w-full ${
        scrolled ? 'drop-shadow-md' : ''
      }  top-0 left-0 right-0 h-16 z-30 transition-all ease duration-150 flex`}
    >
      <nav className="flex mx-auto">
        <div className="flex items-center gap-x-8">
          {links.map((link) => (
            <Link to={link.to} key={link.to} className="font-semibold">
              {link.pathname}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
