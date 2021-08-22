import stylesUrl from '../styles/index.css'
import { useLoaderData } from '@remix-run/react'
import { LinksFunction, LoaderFunction, MetaFunction } from 'remix'

export const meta: MetaFunction = () => {
  return {
    title: 'Remix Starter',
    description: 'Welcome to remix!',
  }
}

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }]
}

export const loader: LoaderFunction = async () => {
  return { message: 'this is awesome 😎. Yay' }
}

export default function Index() {
  const data = useLoaderData()

  return (
    <div style={{ textAlign: 'center', padding: 20 }}>
      <h2>Welcome to Remix!</h2>
      <p>Message from the loader: {data.message}</p>
    </div>
  )
}
