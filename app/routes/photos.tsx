import { json, LoaderFunction, MetaFunction, useCatch, useLoaderData } from 'remix'
import { Four00 } from '~/components'
import { getPhotos } from '~/utils/cms.server'

export const meta: MetaFunction = () => {
  return {
    'apple-mobile-web-app-title': 'Photos',
    title: 'Photos',
    description:
      'Tutorials for developers. Focus on Javascript, Typescript, React and other web development topics',
    pagename: 'Photos',
    image: '/images/og.jpg',
    robots: 'index, follow',
    // TODO: Og stuff are missing
  }
}

export const loader: LoaderFunction = async ({ context }) => {
  const photos = await getPhotos(context)

  if (!photos) {
    throw json({ message: 'No blogs found.' }, { status: 404 })
  }

  return photos
}

export default function Photos() {
  const photos = useLoaderData<Awaited<ReturnType<typeof getPhotos>>>()
  return (
    <div>
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4">
        {photos.map((photo) => (
          <img
            alt={photo.title}
            src={photo.image.url}
            key={photo.image.url}
            className="block w-full mb-4"
          />
        ))}
      </div>
    </div>
  )
}

export function CatchBoundary() {
  const caught = useCatch()

  const message = caught.status === 404 ? caught.data.message : 'Oopsies.. Something went wrong.'

  if (caught.status === 404) {
    return <Four00 title="404" message={message} link="/" />
  }

  return <Four00 title="500" message={message} link="/" />
}

export function ErrorBoundary() {
  return <Four00 title="500" message="Oopsies... Something went wrong." link="/" />
}
