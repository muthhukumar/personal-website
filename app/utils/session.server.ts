import { createCookieSessionStorage } from 'remix'

export const { commitSession, getSession, destroySession } = createCookieSessionStorage({
  cookie: {
    name: '_session',
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
    secrets: ['something string'],
    secure: process.env.NODE_ENV === 'production',
  },
})
