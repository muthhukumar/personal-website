import * as React from 'react'
import { Link } from 'remix'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

import Container from './container'

const links: Array<{ to: string; pathname: string }> = [
  {
    to: '/blog',
    pathname: 'Blog',
  },
  {
    to: '/about',
    pathname: 'About',
  },
]

export default function Navbar() {
  const [showModal, setShowModal] = React.useState(false)
  const toggle = () => setShowModal((state) => !state)
  return (
    <header className="sticky top-0 z-10 py-4 font-semibold transition-transform border-b navbar-backdrop-filter border-color transparent-all">
      <Container>
        <nav className="flex items-center justify-between lg:items-baseline lg:justify-start">
          <Link to="/" className="mr-8">
            <p className="text-2xl font-bold font-color">Muthukumar</p>
          </Link>
          <button onClick={toggle}>
            <HiOutlineMenuAlt4 className="lg:hidden" size={25} />
          </button>
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {links.map((link) => (
              <Link to={link.to} key={link.to} className="light-font-color">
                {link.pathname}
              </Link>
            ))}
          </div>
        </nav>
        {showModal && (
          <nav className="mt-4 lg:hidden">
            <div className="flex flex-col space-y-2">
              {links.map((link) => (
                <Link
                  to={link.to}
                  key={link.to}
                  className="pb-2 border-b border-color light-font-color"
                  onClick={toggle}
                >
                  {link.pathname}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </Container>
    </header>
  )
}
