import * as React from 'react'
import clsx from 'clsx'
import { Link, useLocation } from 'remix'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { RiCloseFill } from 'react-icons/ri'
import { Dialog } from '@reach/dialog'

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
  {
    to: '/projects',
    pathname: 'Projects',
  },
  {
    to: '/about',
    pathname: 'About',
  },
]

export default function Navbar() {
  const scrolled = useScrolled(10)
  const pathname = useLocation().pathname
  const [showModal, setShowModal] = React.useState(false)

  const toggleModal = () => setShowModal((state) => !state)

  return (
    <header
      className={clsx(
        `px-8 flex items-center fixed z-40 w-full transition-transform border-b bg-white dark:bg-black border-color transparent-all`,
        {
          'drop-shadow-md': scrolled,
        },
        'top-0 left-0 right-0 h-16 transition-all ease duration-150',
      )}
    >
      <Dialog
        isOpen={showModal}
        aria-label="Navbar modal"
        className="fixed top-0 z-50 block w-screen h-screen bg-white dark:bg-black md:hidden dark:black"
      >
        <div className="flex flex-col px-8 py-4 gap-y-4">
          <button className="p-4 -mt-2 -ml-4 rounded-sm" onClick={toggleModal}>
            <RiCloseFill size={20} />
          </button>
          {links.map((link) => (
            <Link
              onClick={toggleModal}
              to={link.to}
              key={link.to}
              prefetch="intent"
              className={clsx('py-4 border-b border-gray-200 font-semibold')}
            >
              {link.pathname}
            </Link>
          ))}
        </div>
      </Dialog>
      <nav className="flex md:mx-auto">
        <div className="flex items-center md:hidden">
          <button className="p-4 -ml-4 rounded-sm" onClick={toggleModal}>
            <HiOutlineMenuAlt4 className="md:hidden" size={20} />
          </button>
          <h2 className="font-semibold">{links.find((link) => link.to === pathname)?.pathname}</h2>
        </div>

        <div className="items-center hidden md:flex gap-x-8">
          {links.map((link) => (
            <Link
              to={link.to}
              key={link.to}
              prefetch="intent"
              className={clsx('font-semibold', {
                'border-b-2 border-black dark:border-white': pathname === link.to,
              })}
            >
              {link.pathname}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
