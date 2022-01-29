import * as React from 'react'
import clsx from 'clsx'

export default function Markdown({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string | undefined
}) {
  return (
    <article className={clsx('w-11/12 m-auto prose sm:w-3/4 prose-md sm:prose-lg dark:prose-invert', className)}>
      {children}
    </article>
  )
}
