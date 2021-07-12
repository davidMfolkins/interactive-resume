import { Link } from "react-router-dom";
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
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
          <img src={github} width="30px" alt="github" />
        </a>
        <a
          className="nav-right-item"
          target="_blank"
          rel="noreferrer"
          href="https://ca.linkedin.com/in/davidfolkins">
          <img src={linkedin} width="30px" alt="linkedin" />
        </a>
      </div>
    </div>

  );
}

export default Nav;