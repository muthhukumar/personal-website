import type { SpotifyNowPlayingType } from '~/utils/spotify.server'

import { FaSpotify } from 'react-icons/fa'

export default function SpotifyNowPlaying(props: SpotifyNowPlayingType) {
  return (
    <div className="flex items-start p-4 fit-content">
      <FaSpotify size={35} className="text-[color:var(--spotify-green)]" />
      <div className="flex flex-col ml-2">
        <h1>Now Playing</h1>
        <div className="mt-2 flex p-2 border rounded-sm border-[color:var(--spotify-green)]">
          <img src={props.image.url} width={35} height={35} className="rounded-sm" />
          <div className="flex flex-col ml-2 text-sm">
            <h2 className="">{props.name}</h2>
            <p className="light-font-color">{props.artistsNames}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
