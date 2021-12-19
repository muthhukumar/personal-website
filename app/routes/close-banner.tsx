import { ActionFunction } from 'remix'
import { destroySession, getSession } from '~/utils/session.server'

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))

  return new Response('', {
    headers: {
      'Set-Cookie': await destroySession(session),
    },
  })
}
