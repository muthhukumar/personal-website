import * as React from 'react'
import clsx from 'clsx'

export default function Container({
  children,
  className = undefined,
}: {
  children: React.ReactNode
  className?: string | undefined
}) {
  const hasPy = className?.includes('py')
  return (
    <div className={clsx('px-4 container max-w-5xl mx-auto', { 'py-2': !hasPy }, className)}>
      {children}
    </div>
  )
}
