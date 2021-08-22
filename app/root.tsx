import stylesUrl from './styles/global.css'
import tailwindcssStyles from './styles/tailwind.css'

import { Meta, Links, Scripts, useLoaderData } from '@remix-run/react'
import { Outlet } from 'react-router-dom'
import { LinksFunction, LoaderFunction, LiveReload } from 'remix'
import { NonFlashOfWrongThemeEls, Themed, ThemeProvider, useTheme } from './utils/theme-provider'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/roboto-v27-latin-regular.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/roboto-v27-latin-regular.woff',
      type: 'font/woff',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/roboto-v27-latin-500.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/roboto-v27-latin-500.woff',
      type: 'font/woff',
      crossOrigin: 'anonymous',
    },
    { rel: 'stylesheet', href: stylesUrl },
    { rel: 'stylesheet', href: tailwindcssStyles },
  ]
}

export const loader: LoaderFunction = async () => {
  return { date: new Date() }
}

function App() {
  const data = useLoaderData()
  const { theme, toggleTheme } = useTheme()

  return (
    <html lang="en" className={theme ?? ''}>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <Meta />
        <Links />
        <NonFlashOfWrongThemeEls />
      </head>
      <body className="bg-white dark:bg-black">
        <Outlet />

        <button onClick={toggleTheme} className="text-black dark:text-white">
          <Themed light="light" dark="dark" />
        </button>

        <footer className="bg-white dark:bg-black">
          <p>This page was rendered at {data.date.toLocaleString()}</p>
        </footer>

        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

export default function AppWithProvider() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <title>Oops!</title>
      </head>
      <body>
        <div>
          <h1>App Error</h1>
          <pre>{error.message}</pre>
          <p>
            Replace this UI with what you want users to see when your app throws uncaught errors.
          </p>
        </div>

        <Scripts />
      </body>
    </html>
  )
}
