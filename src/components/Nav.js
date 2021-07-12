import { Link } from "react-router-dom";
import './Nav.css'

function Nav() {
  return (
    <div className="nav">
      <div className="nav-left">
        <Link className="nav-left-item" to="/">About</Link>
        <Link className="nav-left-item" to="/resume">Resume</Link>
        <Link className="nav-left-item" to="/projects">Projects</Link>
        <Link className="nav-left-item" to="/contact">Contact</Link>
      </div>
      <div className="nav-right">
        <a
          className="nav-right-item"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/davidMfolkins">
          <i className="fab fa-github fa-2x" style={{ color: "white" }}></i>
        </a>
        <a
          className="nav-right-item"
          target="_blank"
          rel="noreferrer"
          href="https://ca.linkedin.com/in/davidfolkins">
          <i className="fab fa-linkedin-in fa-2x" style={{ color: "white" }}></i>
        </a>
      </div>
    </div>
  );
}

export default Nav;