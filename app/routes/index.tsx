import {LoaderFunction} from 'remix'
import {useLoaderData} from '@remix-run/react'

import {getContent} from '../utils/mdx.server'
import {useMdxComponent} from '../utils/hooks'

export const loader: LoaderFunction = async () => {
  const {code} = await getContent({slug: 'avoid-magic-numbers.mdx'})
  return code
}

export default function Index() {
  const data = useLoaderData()

  const Component = useMdxComponent(data)

  return (
    <div className="text-primary">
      <Component />
    </div>
  )
}
