import * as React from 'react'
import clsx from 'clsx'

function SocialIcon({
  Icon,
  href,
  isLast,
}: {
  Icon: React.JSXElementConstructor<{ size: number }>
  href: string
  isLast: boolean
}) {
  return (
    <li
      className={clsx('pr-4', {
        'mr-0': isLast,
        'mr-4 border-r border-color': !isLast,
      })}
    >
      <a href={href} target="_blank" rel="noreferrer">
        <Icon size={20} />
      </a>
    </li>
  )
}

export default SocialIcon
