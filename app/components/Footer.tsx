import {AiOutlineCopyrightCircle} from 'react-icons/ai'

import {siteConfig} from '~/site-config'

export default function Footer() {
  return (
    <div className="flex items-center justify-between mt-10">
      <div className="flex items-center text-sm">
        2021
        <span className="mx-1">
          <AiOutlineCopyrightCircle />
        </span>
        {siteConfig.name}
      </div>
      <a href="#" className="text-sm text-blue-500 underline">
        RSS
      </a>
      {/* <a href="/rss.xml" className="text-sm text-blue-500 underline">
        RSS
      </a> */}
    </div>
  )
}
