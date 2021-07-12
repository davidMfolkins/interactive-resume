import profilepic from '../images/profilepic.png'
import poe from '../images/poe-armoury.png'
import spotify from '../images/spotify-search.png'
import omdb from '../images/omdb.png'
import './Projects.css'

function Projects() {
  return (
    <div className="projects">
      <div className="project-containers">
        <img className="project-pic" src={omdb} height="300px" width="500px" alt="omdb" />
        <h2>OMDB Nominee</h2>
        <span className="project-text">The Shoppies is a SPA where users can search for movies using the OMDB Api and select their nominees for best film! This webapp was built as front end challenege for Shopify Summer 2021 interships.</span>
      </div>
      <div className="project-containers">
        <img className="project-pic" src={poe} height="300px" width="500px" alt="poe" />
        <h2>PoE Armoury</h2>
        <span className="project-text">PoE Armoury is a character database for the video game Path of Exile. Users can search characters, browse their inventory/skills, and save to favourites.</span>
      </div>
      <div className="project-containers">
        <img className="project-pic" src={spotify} height="300px" width="500px" alt="spotify" />
        <h2>Spotify Artist Search</h2>
        <span className="project-text">A React single page application (SPA) for searching artists and viewing their albums.</span>
      </div>
      <div className="project-containers">
        <img className="project-pic" src={profilepic} width="500px" alt="profile" />
        <h2>mApp</h2>
        <span className="project-text">mApp is a map creation and sharing application built using Javascript, jQuery and Ajax.</span>
      </div>
      <div className="project-containers">
        <img className="project-pic" src={profilepic} width="500px" alt="profile" />
        <h2>Project title</h2>
        <span className="project-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
      </div>
      <div className="project-containers">
        <img className="project-pic" src={profilepic} width="500px" alt="profile" />
        <h2>Project title</h2>
        <span className="project-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
      </div>
    </div>
  );
}

export default Projects;