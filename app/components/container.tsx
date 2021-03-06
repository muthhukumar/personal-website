import * as React from 'react'
import clsx from 'clsx'

export default function Container({
  children,
  className = undefined,
}: {
  children: React.ReactNode
  className?: string | undefined
}) {
  return <div className={clsx('px-8 container max-w-5xl mx-auto', className)}>{children}</div>
}
