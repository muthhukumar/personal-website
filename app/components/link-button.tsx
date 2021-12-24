import * as React from 'react'
import { Link } from 'remix'
import clsx from 'clsx'

export default function LinkButton({
  children,
  to,
  className,
}: {
  children: React.ReactNode
  to: string
  className?: string | undefined
}) {
  return (
    <Link
      to={to}
      className={clsx(
        'p-3 md:p-4 text-sm md:text-base font-bold text-center text-gray-600 transition-all border rounded-md min-w-[13rem] bg-color border-color hover:border-black hover:text-gray-900 dark:border-white dark:light-font-color dark:border-color dark:hover:border-white dark:hover:text-white',
        className,
      )}
    >
      {children}
    </Link>
  )
}
