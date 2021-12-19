import { HiOutlineArrowLeft } from 'react-icons/hi'
import { Link } from 'remix'
import clsx from 'clsx'

export default function GoBack({
  className,
  link,
}: {
  className?: string | undefined
  link: string
}) {
  return (
    <Link
      to={link}
      className={clsx(
        'flex items-center self-start justify-start mb-2 text-sm light-font-color',
        className,
      )}
    >
      <HiOutlineArrowLeft />
      <p className="self-start ml-2 text-sm md:text-base">Go Back</p>
    </Link>
  )
}
