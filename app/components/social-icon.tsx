import * as React from 'react'
import clsx from 'clsx'

function SocialIcon({
  Icon,
  href,
  isLast,
  ariaLabel,
}: {
  Icon: React.JSXElementConstructor<{ size: number }>
  href: string
  isLast: boolean
  ariaLabel: string
}) {
  return (
    <li
      className={clsx({
        'mr-0': isLast,
        'mr-4 pr-4 border-r border-color': !isLast,
      })}
    >
      <a href={href} target="_blank" rel="noreferrer" aria-label={ariaLabel} title={ariaLabel}>
        <Icon size={20} />
      </a>
    </li>
  )
}

export default SocialIcon
