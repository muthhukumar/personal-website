import * as React from 'react'
import clsx from 'clsx'

import { Container } from '.'

export default function Markdown({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string | undefined
}) {
  return (
    <Container className={clsx('max-w-3xl', className)}>
      <article className="py-2 prose md:py-6 md:prose-lg max-w-none prose-blue dark:prose-invert">
        {children}
      </article>
    </Container>
  )
}
