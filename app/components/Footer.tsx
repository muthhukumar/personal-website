import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <div className="p-8 py-8 mt-auto border-t border-gray-200 xl:px-0 text-primary">
      <div className="container h-full max-w-4xl mx-auto">
        <div className="flex flex-col justify-between w-full h-full md:flex-row">
          <div className="h-full mb-4">
            <div className="flex flex-col h-full">
              <div className="text-2xl font-normal text-pink-600">Muthukumar</div>
              <div className="mt-2 text-sm">Thanks for stopping by!</div>
            </div>
          </div>
          <div className="flex flex-col text-gray-600 md:flex-row dark:text-gray-400">
            <div className="flex flex-col items-start mb-4 mr-16 font-normal text-md">
              <h2 className="mb-2 font-medium text-primary">Sitemap</h2>
              <Link to="/">Home</Link>
              <Link to="/blog">Blog</Link>
            </div>
            <div className="flex flex-col items-start mb-4 font-normal text-md">
              <h2 className="mb-2 font-medium text-primary">Links</h2>
              <a href="https://rd.nullish.in/twitter" className="mb-1">
                Twitter
              </a>
              <a href="https://rd.nullish.in/github" className="mb-1">
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-10 text-sm text-gray-600 dark:text-gray-400">
          <AiOutlineCopyrightCircle /> 2020-present Muthukumar. All rights reserved.
        </div>
      </div>
    </div>
  )
}
