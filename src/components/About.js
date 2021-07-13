import profilepic from '../images/profilepic.png'
import './About.css'
import FadeInDiv from './FadeIn'

function About() {
  return (
    <FadeInDiv>
    <div className="profile">
      <div className="profile-blurb">
        <h1>Hi! My name is David Folkins, and I'm a full-stack developer from Montréal, Canada.</h1>
        <p>
          In April 2020, I was laid off from my job as a QA Associate.
          Living in Canada I was lucky enough to keep afloat with the CERB program, but I wanted to make a change.
          I had always dreamt of becoming a developer, and with the support of my fiancé, family and friends, I took the opportunity to make that happen.
          I spent the next 5 months teaching myself as much HTML, CSS and Javascript as possible before finally joining Lighthouse Labs Remote Web Development Course in September 2020.
          Over 3 months later I would graduate, and landed my first role as a full-stack developer in February 2021 at 4th Whale Marketing.
      </p>
      <p>
          When I'm not growing my skills as a devloper, you can find me building PCs to get that extra FPS boost, game on said PC, cycling around Montréal
          and organizing my next (post covid) travel plans!
      </p>
      </div>
      <img className="profile-pic" src={profilepic} width="360px" alt="profile" />
    </div>
    </FadeInDiv>
  );
}

export default About;
