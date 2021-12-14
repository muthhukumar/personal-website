import { Link } from 'remix'

const links: Array<{ to: string; pathname: string }> = [
  {
    to: '/blog',
    pathname: 'Blog',
  },
  {
    to: '/goodies',
    pathname: 'Goodies',
  },
]

export default function Navbar() {
  return (
    <header className="relative py-6 font-semibold border-b">
      <nav className="container flex items-baseline max-w-5xl mx-auto">
        <Link to="/" className="mr-8">
          <p className="text-2xl font-bold text-black">Muthukumar</p>
        </Link>
        {links.map((link) => (
          <Link to={link.to} key={link.to} className="mr-6 text-gray-500">
            {link.pathname}
          </Link>
        ))}
      </nav>
    </header>
  )
}
