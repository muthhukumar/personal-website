import clsx from 'clsx'
import * as React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Outlet, useLocation } from 'remix'

import Sidebar from './sidebar'

export default function ListPage({
  header,
  title,
  children,
  href,
}: {
  title: string
  children: React.ReactNode
  header?: React.ReactNode
  href: string
}) {
  const [showSidebar, setShowSidebar] = React.useState(false)

  const toggleSidebar = () => {
    setShowSidebar((state) => !state)
  }

  const location = useLocation()

  const isExactPath = location.pathname === href

  return (
    <div>
      {showSidebar && (
        <Sidebar
          handleClose={toggleSidebar}
          className="fixed top-0 left-0 z-10 lg:hidden bg-color"
        />
      )}
      <div className="flex h-screen">
        <div
          className={clsx(
            'flex-[2] shrink-[100000] overflow-y-auto max-h-screen md:min-w-[18rem] min-w-full md:max-w-[24rem] border-r border-color',
            {
              'hidden md:block': !isExactPath,
              'block': isExactPath,
            },
          )}
          onClick={showSidebar ? toggleSidebar : () => undefined}
        >
          {!header ? (
            <div className="sticky top-0 flex items-center gap-4 p-6 py-4 bg-color">
              <button onClick={toggleSidebar} className="lg:hidden">
                <GiHamburgerMenu />
              </button>
              <h2 className="font-bold">{title}</h2>
            </div>
          ) : (
            header
          )}
          <div className="p-2 text-sm">{children}</div>
        </div>
        <div className="flex-[3] w-full max-h-screen overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
