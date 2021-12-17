import {
  // Scripts,
  Links,
  LiveReload,
  Meta,
  Outlet,
  ScrollRestoration,
  useCatch,
  MetaFunction,
} from 'remix'
import type { LinksFunction } from 'remix'

import globalStylesUrl from '~/styles/global.css'
import tailwindStylesUrl from '~/styles/tailwind.css'
import Navbar from './components/navbar'

export const meta: MetaFunction = () => {
  return {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-transparent',
    'apple-mobile-web-app-title': 'Muthukumar',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#000',
    'og:locale': 'en',
    'og:site_name': 'Muthukumar',
    'og:type': 'website',
    'theme-color': '#000',
    'twitter:card': 'summary_large_image',
    'twitter:creator': '@am_muthukumar',
    'twitter:site': '@am_muthukumar',
    'X-UA-Compatible': 'IE=edge,chrome=1',
    author: 'Muthukumar',
    HandheldFriendly: 'True',
    language: 'en',
    MobileOptimized: '320',
    pagename: 'Muthukumar',
    robots: 'index, follow',
    title: 'Muthukumar',
    viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  }
}

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: globalStylesUrl },
    { rel: 'stylesheet', href: tailwindStylesUrl },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/inter-v7-latin-regular.eot',
      type: 'font/eot',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/inter-v7-latin-regular.svg',
      type: 'font/svg',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/inter-v7-latin-regular.ttf',
      type: 'font/ttf',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/inter-v7-latin-regular.woff',
      type: 'font/woff',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/inter-v7-latin-regular.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },

    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ]
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>Hey, developer, you should replace this with what you want your users to see.</p>
        </div>
      </Layout>
    </Document>
  )
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  const caught = useCatch()

  let message
  switch (caught.status) {
    case 401:
      message = <p>Oops! Looks like you tried to visit a page that you do not have access to.</p>
      break
    case 404:
      message = <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      break

    default:
      throw new Error(caught.data || caught.statusText)
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  )
}

function Document({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body className="antialiased">
        {children}
        <ScrollRestoration />
        {/* <Scripts /> */}
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  )
}
