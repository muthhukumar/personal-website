import { LoaderFunction, redirect } from 'remix'

export const loader: LoaderFunction = () => {
  throw redirect('/maygodhelpyou')
}
