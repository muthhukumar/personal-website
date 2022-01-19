import { HiOutlineArrowLeft } from 'react-icons/hi'
import { Link } from 'remix'
import clsx from 'clsx'

export default function GoBack({
  className,
  link,
  title = 'Go Back',
}: {
  className?: string | undefined
  link: string
  title?: string
}) {
  return (
    <Link
      to={link}
      className={clsx('flex items-center self-start justify-start text-sm', className)}
    >
      <HiOutlineArrowLeft />
      {title ? <p className="self-start ml-2 text-sm md:text-base">{title}</p> : null}
    </Link>
  )
}
