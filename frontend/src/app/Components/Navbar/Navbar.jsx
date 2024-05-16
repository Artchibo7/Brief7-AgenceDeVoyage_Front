import Link from "next/link";
import "./navbar.css";


export default function Navbar() {
  return (
    <div className="NavbarItems">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <div>
            <h1 className="navbar-logo">Art & Voyage</h1>
          </div>
          <div className="nav-links" style={{ textDecoration: "none" }}>
            <ul className="d-flex justify-content-end gap-3 mb-2 mb-lg-0" style={{ listStyle: "none" }}>
              <li>
                <Link style={{ textDecoration: "none", color: "rgb(12, 100, 118)" }} href="/">accueil </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none", color: "rgb(12, 100, 118)" }} href="/voyages">destination</Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none", color: "rgb(12, 100, 118)" }} href="/Contact">contact </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
