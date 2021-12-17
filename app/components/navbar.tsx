import { Link } from 'remix'
import Container from './container'

const links: Array<{ to: string; pathname: string }> = [
  {
    to: '/blog',
    pathname: 'Blog',
  },
]

export default function Navbar() {
  return (
    <header className="relative py-4 font-semibold border-b">
      <Container>
        <nav className="flex items-baseline">
          <Link to="/" className="mr-8">
            <p className="text-2xl font-bold text-black">Muthukumar</p>
          </Link>
          {links.map((link) => (
            <Link to={link.to} key={link.to} className="mr-6 text-gray-600">
              {link.pathname}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  )
}
