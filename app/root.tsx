import * as React from 'react'
import { Scripts, LinksFunction, useCatch, useLocation } from 'remix'
import { Links, LiveReload, Meta, Outlet, ScrollRestoration, MetaFunction } from 'remix'

import appleTouchFavIcon from '../public/favicon/dark/apple-touch-icon.png'
import lightAppleTouchFavIcon from '../public/favicon/light/apple-touch-icon.png'

import bigDarkFavIcon from '../public/favicon/dark/favicon-32x32.png'
import smallDarkFavIcon from '../public/favicon/dark/favicon-16x16.png'

import bigLightFavIcon from '../public/favicon/light/favicon-32x32.png'
import smallLightFavIcon from '../public/favicon/light/favicon-16x16.png'

import globalStylesUrl from '~/styles/global.css'
import tailwindStylesUrl from '~/styles/tailwind.css'
import darkStylesUrl from '~/styles/dark.css'

import { Four00, Navbar } from '~/components'
import * as gtag from '~/utils/gtags'

export const meta: MetaFunction = () => {
  return {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-transparent',
    'apple-mobile-web-app-title': 'Muthukumar',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#000',
    image: '/images/og.jpg',
    'og:image': '/images/og.jpg',
    'og:locale': 'en',
    'og:site_name': 'Nullish.in',
    'twitter:card': 'summary_large_image',
    'twitter:creator': '@am_muthukumar',
    'twitter:site': '@am_muthukumar',
    'X-UA-Compatible': 'IE=edge,chrome=1',
    'og:type': 'website',
    author: 'Muthukumar',
    HandheldFriendly: 'True',
    language: 'en',
    MobileOptimized: '320',
    pagename: 'Muthukumar',
    title: 'Muthukumar',
    description:
      'Tutorials and notes on React, Javascript, CSS and more. Also Personal book reviews and personal thoughts on stuff and more!.',
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow',
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
      href: '/fonts/inter.woff',
      type: 'font/woff',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/inter.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },

    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: appleTouchFavIcon,
      media: '(prefers-color-scheme: dark)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: bigDarkFavIcon,
      media: '(prefers-color-scheme: dark)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: smallDarkFavIcon,
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
      href: lightAppleTouchFavIcon,
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: bigLightFavIcon,
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: smallLightFavIcon,
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
  const location = useLocation()

  React.useEffect(() => {
    gtag.pageview(location.pathname)
  }, [location])

  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="color-scheme" content="dark light" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="white" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
        <Meta />
        <Links />
      </head>
      <body className="antialiased">
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
        <script
          async
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        {children}
        <Scripts />
        <ScrollRestoration />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "7768bd915ff3469096a04570cbb3575a"}'
        ></script>
      </body>
    </html>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {/* <Sidebar className="hidden lg:flex" /> */}
      <main className="w-full mt-20">{children}</main>
      {/* <Footer /> */}
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

export function ErrorBoundary() {
  return (
    <Document>
      <Layout>
        <Four00 title="500" message="Oopsies... Something went wrong." link="/" />
      </Layout>
    </Document>
  )
}
