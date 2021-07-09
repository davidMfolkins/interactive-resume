import { Link } from "react-router-dom";

import './Nav.css'

function Nav() {
  return (
    <div className="nav">
      <Link className="nav-item" to="/">About</Link>
      <Link className="nav-item" to="/resume">Resume</Link>
      <Link className="nav-item" to="/projects">Projects</Link>
      <span className="nav-item">Contact</span>
    </div>
  );
}

export default Nav;