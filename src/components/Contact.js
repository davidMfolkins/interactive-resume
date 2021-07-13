import './Contact.css'
import FadeInDiv from './FadeIn'

function Contact() {
  return (
    <FadeInDiv>
      <div className="contact">
        <span className="contact-item">Email: david.folkins88@gmail.com</span>
        <span className="contact-item">Linkedin: <a
          target="_blank"
          rel="noreferrer"
          href="https://ca.linkedin.com/in/davidfolkins">david.folkins</a></span>
      </div>
    </FadeInDiv>
  );
}

export default Contact;