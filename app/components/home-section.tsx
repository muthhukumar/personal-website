import * as React from 'react'
import clsx from 'clsx'

export default function HomeSection({
  children,
  showBorder = true,
  title,
}: {
  children: React.ReactNode
  showBorder?: boolean
  title: string
}) {
  return (
    <div
      className={clsx('py-10 lg:py-16', {
        'border-b border-color': showBorder,
      })}
    >
      <h2 className="text-xl font-bold md:text-2xl">{title}</h2>
      {children}
    </div>
  )
}
