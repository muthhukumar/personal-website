import { json, LoaderFunction, useCatch } from 'remix'
import { Container, Four00 } from '~/components'

export const loader: LoaderFunction = async () => {
  throw json({ message: `Page, you are looking for doesn't exists` }, { status: 404 })
}

export default function Splat() {
  return (
    <Container>
      <p>
        You are not suppose to see this page. Good job getting here. Can you please let Muthu know,
        you got here.
      </p>
    </Container>
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
