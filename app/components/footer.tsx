import { Link } from 'remix'
import { BsGithub } from 'react-icons/bs'
import { SiTwitter } from 'react-icons/si'
import { IoLogoRss } from 'react-icons/io'

import Container from './container'
import SocialIcon from './social-icon'

type LinkType = {
  name: string
  link: string
  ariaLabel: string
  openInNewTab?: boolean
}

const socials = [
  {
    Icon: BsGithub,
    href: 'https://rd.nullish.in/github',
    isLast: false,
    alt: `Muthukumar's github profile link`,
    ariaLabel: 'Github',
  },
  {
    Icon: SiTwitter,
    href: 'https://rd.nullish.in/twitter',
    isLast: false,
    alt: `Muthukumar's twitter profile link`,
    ariaLabel: 'Twitter',
  },
  {
    Icon: IoLogoRss,
    href: '/rss.xml',
    isLast: true,
    alt: `Nullish.in rss feed link`,
    ariaLabel: 'Rss feed',
  },
]

const links: Array<LinkType> = [
  {
    name: 'Home',
    link: '/',
    ariaLabel: 'Home page',
  },
  {
    name: 'Blog',
    link: '/blog',
    ariaLabel: 'List of blogs page',
  },
  {
    name: 'About',
    link: '/about',
    ariaLabel: 'About page',
  },
  // {
  //   name: 'Quotes',
  //   link: '/quotes',
  //   ariaLabel: 'List of all the quotes',
  // },
  {
    name: 'RSS',
    link: '/rss.xml',
    ariaLabel: 'RSS file',
    openInNewTab: true,
  },
  {
    name: 'Site map',
    link: '/sitemap.xml',
    ariaLabel: 'Sitemap of the website',
    openInNewTab: true,
  },
  // {
  //   name: 'Changelog',
  //   link: '/changelog',
  //   ariaLabel: 'Changelog of the website',
  // },
  {
    name: 'Source code',
    link: 'https://github.com/muthhukumar/personal-website',
    ariaLabel: 'My Personal website Github repository',
    openInNewTab: true,
  },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-color dark:bg-black ">
      <Container className="py-8 lg:py-16">
        <nav className="grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 md:gap-y-2">
          {links.map((link) => {
            if (link?.openInNewTab) {
              return (
                <a
                  aria-label={link.ariaLabel}
                  key={link.link}
                  href={link.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.name}
                </a>
              )
            }
            return (
              <Link
                to={link.link}
                aria-label={link.ariaLabel}
                key={link.link}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>
        <div className="flex flex-col items-center mt-8 md:items-start">
          <Link to="/" className="flex items-center">
            <p className="text-2xl font-bold font-color">Muthukumar</p>
          </Link>
          <div className="flex flex-col items-center justify-center w-full mt-4 md:items-baseline md:justify-between md:flex-row">
            <h2 className="mb-6 md:mb-0 light-font-color">
              Copyright &copy; 2021 Muthukumar. All rights reserved.
            </h2>
            <ul className="flex items-center gap-x-6">
              {socials.map((social) => (
                <SocialIcon {...social} key={social.href} />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}
