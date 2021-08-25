import {LoaderFunction} from 'remix'

import {getBlogPostListFromDisk} from '../utils/mdx.server'

export const loader: LoaderFunction = async () => {
  return getBlogPostListFromDisk()
}

export default function Index() {
  return (
    <div className="w-full p-16 pt-0 mt-32">
      <div className="container max-w-5xl mx-auto mt-12 text-primary">
        <div className="text-xl font-normal">Hi, I&apos;m </div>
        <h1 className="font-bold text-8xl">Muthukumar</h1>
        <p className="mt-8 text-xl font-normal text-gray-800 dark:text-gray-400">
          I&apos;m a full stack developer, who likes to code and try out new technologies.
          Passionate in learning new stuff.
        </p>
      </div>
    </div>
  )
}
