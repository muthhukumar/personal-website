import * as React from 'react'
import clsx from 'clsx'

export default function Quote({
  children,
  author,
  className,
}: {
  children: React.ReactNode
  author: string
  className?: string | undefined
}) {
  return (
    <figure className={clsx('w-full mx-auto overflow-hidden lg:w-fit', className)}>
      <blockquote className="mt-4 p-4 lg:p-6 bg-gray-200 dark:bg-gray-700 rounded-md before:content-['“'] after:content-['”']">
        {children}
      </blockquote>
      <figcaption className="mt-2 text-right before:content-['-'] before:mr-1 light-font-color">
        {author}
      </figcaption>
    </figure>
  )
}
