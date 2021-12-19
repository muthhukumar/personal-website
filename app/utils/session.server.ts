import { createCookieSessionStorage } from 'remix'

export const { commitSession, getSession, destroySession } = createCookieSessionStorage({
  cookie: {
    name: '_session',
    sameSite: 'lax',
    domain: '/',
    httpOnly: true,
    secrets: ['s3cr3t'],
    secure: process.env.NODE_ENV === 'production',
  },
})
