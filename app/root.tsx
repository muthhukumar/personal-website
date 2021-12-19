import type { LinksFunction } from 'remix'

import { Scripts, Links, LiveReload, Meta, Outlet, ScrollRestoration, MetaFunction } from 'remix'

import globalStylesUrl from '~/styles/global.css'
import tailwindStylesUrl from '~/styles/tailwind.css'
import darkStylesUrl from '~/styles/dark.css'

import { Navbar, Footer, Four00 } from '~/components'

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
    { rel: 'stylesheet', href: darkStylesUrl, media: '(prefers-color-scheme: dark)' },
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
      href: '/favicon/dark/apple-touch-icon.png',
      media: '(prefers-color-scheme: dark)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon/dark/favicon-32x32.png',
      media: '(prefers-color-scheme: dark)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon/dark/favicon-16x16.png',
      media: '(prefers-color-scheme: dark)',
    },
    {
      rel: 'manifest',
      href: '/favicon/dark/site.webmanifest',
      media: '(prefers-color-scheme: dark)',
    },

    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicon/light/apple-touch-icon.png',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon/light/favicon-32x32.png',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon/light/favicon-16x16.png',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'manifest',
      href: '/favicon/light/site.webmanifest',
      media: '(prefers-color-scheme: light)',
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

export function ErrorBoundary() {
  return (
    <Document title="Error!">
      <Layout>
        <Four00 title="500" message="Oopsies... Something went wrong." link="/" />
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
        <meta name="color-scheme" content="dark light" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body className="antialiased bg-color font-color">
        {children}
        <ScrollRestoration />
        <Scripts />
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
      <Footer />
    </div>
  )
}
