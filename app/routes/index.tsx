import { LoaderFunction, MetaFunction, redirect } from 'remix'

export const meta: MetaFunction = () => {
  return {
    title: 'Remix Starter',
    description: 'Welcome to remix!',
  }
}

export const loader: LoaderFunction = () => {
  throw redirect('/blog')
}

export default function Index() {
  return <div>You are not supposed to see this page!!!.</div>
}
