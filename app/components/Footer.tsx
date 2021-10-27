import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import {Link} from 'remix'

import {siteConfig} from '~/site-config'

const links = [
  {
    to: '/',
    pathname: 'Home',
  },
  {
    to: '#',
    pathname: 'About',
  },
]

export default function Footer() {
  return (
    <div className="py-8 mt-10 border-t border-gray-200">
      <div className="flex text-gray-600">
        <div className="flex flex-col items-start w-1/3">
          {links.map((link) => (
            <Link key={link.to} {...link} className="mb-2 text-gray-600 text-md">
              {link.pathname}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-start w-1/3">
          {siteConfig.socials.map((social) => (
            <a key={social.socialName} className="mb-2 text-gray-600 text-md" href={social.link}>
              {social.socialName}
            </a>
          ))}
        </div>
      </div>
      <div className="text-gray-600 flex items-center mt-8 text-sm">
        2021
        <span className="mx-1">
          <AiOutlineCopyrightCircle />
        </span>
        {siteConfig.name}. All rights reserved.
      </div>
    </div>
  )
}
