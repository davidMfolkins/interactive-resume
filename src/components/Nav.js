import { Link } from "react-router-dom";
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import './Nav.css'

function Nav() {
  return (
    <div className="nav">
      <Link className="nav-item" to="/">About</Link>
      <Link className="nav-item" to="/resume">Resume</Link>
      <Link className="nav-item" to="/projects">Projects</Link>
      <Link className="nav-item" to="/contact">Contact</Link>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/davidMfolkins">
        <img src={github} width="30px" alt="github" />
        </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://ca.linkedin.com/in/davidfolkins">
        <img src={linkedin} width="30px" alt="linkedin" />
        </a>
    </div>
  );
}

export default Nav;