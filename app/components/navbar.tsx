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
    <header className="relative py-4 font-semibold border-b border-color">
      <Container>
        <nav className="flex items-baseline">
          <Link to="/" className="mr-8">
            <p className="text-2xl font-bold font-color">Muthukumar</p>
          </Link>
          {links.map((link) => (
            <Link to={link.to} key={link.to} className="mr-6 light-font-color">
              {link.pathname}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  )
}
