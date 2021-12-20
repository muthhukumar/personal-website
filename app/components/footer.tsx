import { Link } from 'remix'
import { BsGithub } from 'react-icons/bs'
import { SiTwitter } from 'react-icons/si'
import { IoLogoRss } from 'react-icons/io'

import Container from './container'
import SocialIcon from './social-icon'

const socials = [
  {
    Icon: BsGithub,
    href: 'https://rd.nullish.in/github',
    isLast: false,
    alt: `Muthukumar's github profile link` 
  },
  {
    Icon: SiTwitter,
    href: 'https://rd.nullish.in/twitter',
    isLast: false,
    alt: `Muthukumar's twitter profile link` 
  },
  {
    Icon: IoLogoRss,
    href: 'https://nullish.in/rss.xml',
    isLast: true,
    alt: `Nullish.in rss feed link` 
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-color">
      <Container className="py-16">
        <div className="flex flex-col items-center md:items-start">
          <Link to="/" className="flex items-center">
            <p className="text-2xl font-bold font-color">Muthukumar</p>
          </Link>
          <div className="flex flex-col items-center justify-center w-full mt-6 md:justify-between md:flex-row">
            <h2 className="mb-4 text-sm md:mb-0 light-font-color">
              Copyright &copy; 2021 Muthukumar. All rights reserved.
            </h2>
            <ul className="flex items-center">
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
