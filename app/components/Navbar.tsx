import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <h2>
        <Link to="/">Muthukumar</Link>
      </h2>
      <ul>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/bookmarks">Bookmarks</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
