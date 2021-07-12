import { Link } from "react-router-dom";

import './Nav.css'

function Nav() {
  return (
    <div className="nav">
      <Link className="nav-item" to="/">About</Link>
      <Link className="nav-item" to="/resume">Resume</Link>
      <Link className="nav-item" to="/projects">Projects</Link>
      <Link className="nav-item" to="/contact">Contact</Link>
      <a className="nav-item" target="_blank" href="https://github.com/davidMfolkins">Github</a>
      <a className="nav-item" target="_blank" href="https://ca.linkedin.com/in/davidfolkins">Linkedin</a>
    </div>
  );
}

export default Nav;