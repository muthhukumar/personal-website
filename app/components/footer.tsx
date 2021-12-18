import { Link } from 'remix'
import { BsGithub } from 'react-icons/bs'
import { SiTwitter } from 'react-icons/si'

import Container from './container'

export default function Footer() {
  return (
    <footer className="border-t border-color">
      <Container className="py-16">
        <div className="flex flex-col items-center md:items-start">
          <Link to="/" className="flex items-center">
            <div className="w-8 h-8 mr-2">
              <img
                src="/favicon/dark/android-chrome-192x192.png"
                className="w-full h-full dark-favicon"
              />
              <img
                src="/favicon/light/android-chrome-192x192.png"
                className="w-full h-full light-favicon"
              />
            </div>
            <p className="text-2xl font-bold font-color">Muthukumar</p>
          </Link>
          <div className="flex flex-col items-center justify-center w-full mt-6 md:justify-between md:flex-row">
            <h2 className="mb-4 text-sm md:mb-0 light-font-color">
              Copyright &copy; 2021 Muthukumar. All rights reserved.
            </h2>
            <ul className="flex items-center">
              <li className="pr-4 mr-4 border-r border-color">
                <a href="https://rd.nullish.in/github" target="_blank" rel="noreferrer">
                  <BsGithub size={20} />
                </a>
              </li>
              <li>
                <a href="https://rd.nullish.in/twitter" target="_blank" rel="noreferrer">
                  <SiTwitter size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}