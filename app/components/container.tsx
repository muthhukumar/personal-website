import * as React from 'react'

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="container max-w-5xl mx-auto">{children}</div>
}
