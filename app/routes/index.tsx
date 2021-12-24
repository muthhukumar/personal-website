import {
  ActionFunction,
  Form,
  json,
  LoaderFunction,
  MetaFunction,
  redirect,
  useLoaderData,
  useSubmit,
} from 'remix'
import { Link, useCatch } from 'remix'

import { Quote, Four00, Container, HomeSection, LinkButton } from '~/components'
import { getQuote } from '~/utils/index.server'
import { commitSession, getSession } from '~/utils/session.server'
import { getTasks } from '~/utils/tasks.server'

export type Tasks = {
  drinkWater: boolean
  workout: boolean
  readBook: boolean
}

type LoaderData = {
  tasks: Tasks
  quote: Awaited<ReturnType<typeof getQuote>>
}

export const meta: MetaFunction = () => {
  return {
    title: 'Muthukumar',
  }
}

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))
  const formData = await request.formData()

  const today = new Date().toLocaleDateString()

  const drinkWater = formData.get('drinkWater')
  const workout = formData.get('workout')
  const readBook = formData.get('readBook')

  session.set('tasks', {
    drinkWater: drinkWater === 'on' ? true : false,
    workout: workout === 'on' ? true : false,
    readBook: readBook === 'on' ? true : false,
    lastUpdated: today,
  })

  throw redirect('/', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  })
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))

  const tasks = await getTasks(request)
  const quote = await getQuote(request)

  session.set('tasks', tasks)
  session.set('quote', quote)

  return json(
    { tasks, quote },
    {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    },
  )
}

export default function Blog() {
  const data = useLoaderData<LoaderData>()

  const submit = useSubmit()
  return (
    <div className="py-4 lg:py-8">
      <Container>
        <div className="py-16 text-lg border-b border-color">
          <p>Hey, I&apos;m</p>
          <h1 className="text-2xl font-bold md:text-6xl">Muthukumar</h1>
          <div className="flex flex-col mt-4 space-y-2 text-base md:text-lg">
            <p>Welcome to my Personal website.</p>
            <p>
              I write <strong>code</strong>. I listen to <strong>music</strong>. Loves to read{' '}
              <strong>books</strong>. And I occasionally write articles on React, Javascript and
              other stuff.
            </p>
            <p>
              Feel free to poke around. There are some{' '}
              <Link to="/login" className="link-font-color">
                easter eggs
              </Link>{' '}
              I added in the website. If you find any of them, let me know on{' '}
              <a
                href="https://rd.nullish.in/twitter"
                target="_blank"
                rel="noreferrer"
                aria-label="twitter"
                className="link-font-color"
              >
                Twitter
              </a>
              .
            </p>
          </div>
        </div>
        <HomeSection title="Tasks of the day!">
          <Form
            className="flex flex-col mt-4 ml-2 space-y-2 text-base lg:text-lg"
            onChange={(event) => submit(event.currentTarget, { method: 'post', action: '?index' })}
          >
            <label className="inline-flex items-center">
              <input type="checkbox" name="drinkWater" defaultChecked={data.tasks.drinkWater} />
              <span className="ml-2">Drink 10 glasses of water</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" name="workout" defaultChecked={data.tasks.workout} />
              <span className="ml-2">Workout</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" name="readBook" defaultChecked={data.tasks.readBook} />
              <span className="ml-2">Read book</span>
            </label>
          </Form>
        </HomeSection>
        <HomeSection title="Quote of the day">
          <Quote author={data.quote.quote.author}>{data.quote.quote.quote}</Quote>
        </HomeSection>
        <HomeSection title="Website map" showBorder={false}>
          <div className="flex items-center justify-center mt-8">
            <div className="flex flex-col justify-center w-full space-y-2 md:space-y-0 md:flex-row">
              <LinkButton to="/blog" className="w-full md:rounded-r-none md:w-auto">
                Read articles
              </LinkButton>
              <LinkButton
                to="/about"
                className="inline-block w-full md:rounded-l-none md:rounded-r-none md:w-auto"
              >
                More about me
              </LinkButton>
              <LinkButton
                to="/changelog"
                className="inline-block w-full md:rounded-l-none md:w-auto"
              >
                Website changelog
              </LinkButton>
            </div>
          </div>
        </HomeSection>
      </Container>
    </div>
  )
}

export function CatchBoundary() {
  const caught = useCatch()

  const message = caught.status === 404 ? caught.data.message : 'Oopsies.. Something went wrong.'

  if (caught.status === 404) {
    return <Four00 title="404" message={message} link="/blog" />
  }

  return <Four00 title="500" message={message} link="/blog" />
}

export function ErrorBoundary({ error }) {
  console.log('error', error)
  return <Four00 title="500" message="Oopsies... Something went wrong." link="/" />
}
