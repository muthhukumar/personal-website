import { getRequiredServerEnvVar } from './env.server'
import { merge } from 'object-mapper'

const SpotifyNowPlayingMap = {
  'item.album.images': {
    key: 'image',
    transform: (value: unknown) => {
      if (!Array.isArray(value)) {
        return null
      }

      return value.find((imageProps) => imageProps.height === 300)
    },
  },
  'item.album.external_urls.spotify': 'url',
  'item.album.name': 'name',
  is_playing: 'isPlaying',
  'item.artists': {
    key: 'artistsNames',
    transform: (value: unknown) => {
      if (!Array.isArray(value)) {
        return ''
      }

      return value.map((artist) => artist.name).join('-')
    },
  },
}

export interface SpotifyNowPlayingType {
  image: {
    height: 640 | 300 | 64
    url: string
    width: 640 | 300 | 64
  }
  url: string
  name: string
  artistsNames: string
  isPlaying: boolean
}

export const getNowPlaying: () => Promise<SpotifyNowPlayingType | null> = async () => {
  try {
    const response = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing?market=ES',
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getRequiredServerEnvVar('SPOTIFY_ACCESS_TOKEN')}`,
        },
      },
    )
    const json = await response.json()

    if (!json) {
      return null
    }

    const nowPlaying = merge(json, SpotifyNowPlayingMap)
    return nowPlaying as SpotifyNowPlayingType
  } catch (err) {
    return null
  }
}
