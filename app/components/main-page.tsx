import * as React from 'react'

import GoBack from './go-back'

export default function MainPage({
  children,
  title,
  goBack,
}: {
  children: React.ReactNode
  title: string
  goBack: string
}) {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 flex items-center gap-4 p-4 border-b navbar-backdrop-filter border-color">
        <GoBack link={goBack} title="" className="block mb-0 md:hidden" />
        <h1 className="font-bold">{title}</h1>
      </div>
      {children}
    </div>
  )
}
