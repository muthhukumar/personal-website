import * as React from 'react'

export default function Quote({ children, author }: { children: React.ReactNode; author: string }) {
  return (
    <figure className="w-full mx-auto overflow-hidden lg:w-fit">
      <blockquote className="mt-4 p-4 lg:p-8 bg-gray-200 dark:bg-gray-700 rounded-md before:content-['“'] after:content-['”']">
        {children}
      </blockquote>
      <figcaption className="mt-2 text-right before:content-['-'] light-font-color">
        {author}
      </figcaption>
    </figure>
  )
}
