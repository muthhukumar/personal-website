import {siteConfig} from '~/site-config'

function Social({
  displayName,
  link,
  socialName,
}: {
  socialName: string
  displayName: string
  link: string
}) {
  return (
    <div className="flex items-center justify-start mb-6">
      {socialName}
      <a href={link} className="ml-2 text-blue-500 underline">
        {displayName}
      </a>
    </div>
  )
}

export default function Index() {
  return (
    <div>
      <div className="mb-12">
        <p>{siteConfig.description}</p>
      </div>
      <div className="w-full h-[1px] my-8 bg-gray-200" />
      <div className="flex flex-col items-start">
        {siteConfig.socials.map((social) => {
          return <Social key={social.socialName} {...social} />
        })}
      </div>
    </div>
  )
}
