import { LoaderFunction } from 'remix'

import { getNowPlaying } from '~/utils/spotify.server'

export const loader: LoaderFunction = () => {
  return getNowPlaying()
}
