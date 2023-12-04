import "./styles/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <>
      <footer id="Footer-top-border">
      </footer>
      <section id="Footer-content">
        <div id="Footer-icons">
          <div>
            <a href="https://linkedin.com/in/joannes-figueroa" target="_blank">
              <FontAwesomeIcon size="xl" icon={faEnvelope} />
            </a>
          </div>
          <div>
            <a href="https://github.com/JoHeyJo" target="_blank">
              <FontAwesomeIcon size="xl" icon={faGithub} />
            </a>
          </div>
          <div>
            <a href="https://linkedin.com/in/joannes-figueroa" target="_blank">
              <FontAwesomeIcon size="xl" icon={faLinkedin} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer;