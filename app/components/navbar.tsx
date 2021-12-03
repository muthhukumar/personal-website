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
    <header className="py-6 font-semibold">
      <nav className="flex items-center">
        <Link to="/" className="mr-8">
          <p>Muthukumar</p>
        </Link>
        {links.map((link) => (
          <Link to={link.to} key={link.to} className="mr-6">
            {link.pathname}
          </Link>
        ))}
      </nav>
    </header>
  )
}
