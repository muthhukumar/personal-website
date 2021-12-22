import { LoaderFunction, redirect } from 'remix'

export const loader: LoaderFunction = () => {
  throw redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
}
