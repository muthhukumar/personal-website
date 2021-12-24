import type { Tasks } from '~/routes'
import { getSession } from './session.server'

async function getTasks(request: Request) {
  const session = await getSession(request.headers.get('Cookie'))

  const today = new Date().toLocaleDateString()

  let tasks = session.get('tasks')

  if (tasks?.lastUpdated !== today || !tasks) {
    tasks = {
      drinkWater: false,
      workout: false,
      readBook: false,
      lastUpdated: new Date().toLocaleDateString(),
    }
  }

  return tasks as Tasks
}

export { getTasks }
