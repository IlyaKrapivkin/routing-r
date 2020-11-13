import {
  Link
} from "react-router-dom";

function Header() {
  return (
    <nav className="site-header sticky-top py-1">
      <div className="container d-flex flex-column flex-md-row justify-content-between">
        <Link className="py-2 d-none d-md-inline-block" to="/">Home</Link>
        <Link className="py-2 d-none d-md-inline-block" to="/users">List</Link>
      </div>
    </nav>
  )
}

export default Header;
