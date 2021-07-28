import poe from '../images/poe-armoury.png'
import spotify from '../images/spotify-search.png'
import omdb from '../images/omdb.png'
import pong from '../images/pong.png'
import maps from '../images/maps.png'
import connect4 from '../images/connect4.png'
import './Projects.css'
import FadeInDiv from './FadeIn'

function Projects() {
  return (
    <FadeInDiv>
      <div className="projects">
        <a
          className="project-containers"
          href="https://github.com/davidMfolkins/omdb-nominee"
          target="_blank"
          rel="noreferrer"
        >
          <img className="project-pic" src={omdb} height="300px" width="500px" alt="omdb" />
          <h2>OMDB Nominee</h2>
          <span className="project-text">The Shoppies is a SPA where users can search for movies using the OMDB Api and select their nominees for best film! This webapp was built as front end challenege for Shopify Summer 2021 interships.</span>
        </a>
        <a
          className="project-containers"
          href="https://github.com/davidMfolkins/PoE-Armoury"
          target="_blank"
          rel="noreferrer"
        >
          <img className="project-pic" src={poe} height="300px" width="500px" alt="poe" />
          <h2>PoE Armoury</h2>
          <span className="project-text">PoE Armoury is a character database for the video game Path of Exile. Users can search characters, browse their inventory/skills, and save to favourites. This was built by a small team during Lighthouse Labs Web Development bootcamp.</span>
        </a>
        <a
          className="project-containers"
          href="https://github.com/davidMfolkins/spotify-artist-search"
          target="_blank"
          rel="noreferrer"
        >
          <img className="project-pic" src={spotify} height="300px" width="500px" alt="spotify" />
          <h2>Spotify Artist Search</h2>
          <span className="project-text">A React single page application (SPA) for searching artists and viewing their albums.</span>
        </a>
        <a
          className="project-containers"
          href="https://github.com/davidMfolkins/mApp"
          target="_blank"
          rel="noreferrer"
        >
          <img className="project-pic" src={maps} height="300px" width="500px" alt="profile" />
          <h2>mApp</h2>
          <span className="project-text">mApp is a map creation and sharing application built by a small team during Lighthouse Labs Web Development bootcamp using Javascript, jQuery and Ajax.</span>
        </a>
        <a
          className="project-containers"
          href="https://github.com/davidMfolkins/python-pong"
          target="_blank"
          rel="noreferrer"
        >
          <img className="project-pic" src={pong} height="300px" width="500px" alt="profile" />
          <h2>Python Pong Game</h2>
          <span className="project-text">A simple introductory Python project on how to make pong! </span>
        </a>
        <a
          className="project-containers"
          href="https://github.com/davidMfolkins/python-connect4"
          target="_blank"
          rel="noreferrer"
        >
          <img className="project-pic" src={connect4} height="300px" width="500px" alt="profile" />
          <h2>Python Connect 4 Game</h2>
          <span className="project-text">A Connect4 game built using python, with graphics and all!</span>
        </a>
      </div>
    </FadeInDiv>
  );
}

export default Projects;