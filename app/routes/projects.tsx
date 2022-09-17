import clsx from 'clsx'
import { json, useLoaderData } from 'remix'

import { Container } from '~/components'
import { getProjects } from '~/utils/index.server'

export async function loader() {
  return json({ projects: await getProjects() })
}

export default function Projects() {
  const { projects } = useLoaderData<{ projects: Awaited<ReturnType<typeof getProjects>> }>()
  return (
    <div className="py-4 min-h-[70vh]">
      <Container>
        <h2 className="mb-4 font-bold">Projects</h2>
        <div className="gap-4 flex flex-wrap">
          {projects.map((project) => {
            return (
              <a
                href={project.value.url}
                target="_blank"
                rel="noreferrer"
                key={project.value.url}
                className={clsx(`fit-content rounded-md px-3 py-2 border`, {
                  'border-red-500': !project.isActive,
                  'border-green-500': project.isActive,
                })}
              >
                {project.value.name}
              </a>
            )
          })}
        </div>
      </Container>
    </div>
  )
}
