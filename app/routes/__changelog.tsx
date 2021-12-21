import { Outlet } from 'remix'

import { Container, Markdown } from '~/components'

export default function Changelog() {
  return (
    <div>
      <div className="pb-6 border-b border-color">
        <Container>
          <h2 className="py-4 text-xl font-bold md:py-10 md:text-2xl">Changelog</h2>
          <p className="text-base font-bold md:text-lg">
            All notable changes to this project will be documented in this file.
          </p>
        </Container>
      </div>
      <Markdown className="sm:max-w-5xl">
        <Outlet />
      </Markdown>
    </div>
  )
}
