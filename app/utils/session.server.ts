import { createCookieSessionStorage } from 'remix'

import { getRequiredServerEnvVar } from './env.server'

export const { commitSession, getSession, destroySession } = createCookieSessionStorage({
  cookie: {
    name: '_session',
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
    secrets: [getRequiredServerEnvVar('COOKIE_SECRET')],
    secure: process.env.NODE_ENV === 'production',
  },
})
