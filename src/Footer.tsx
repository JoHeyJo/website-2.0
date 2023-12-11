import "./styles/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const handleCopy = () => {
    // Copy the text to clipboard
    navigator.clipboard.writeText("testing")
      .then(() => {
        // Success handling, like showing a message to the user
        console.log('text copied')
        alert("Text copied to clipboard!");
      })
      .catch(err => {
        // Error handling
        console.log("error", err)
        console.error('Failed to copy text: ', err);
      });
  };
  return (
    <>
      <footer id="Footer-top-border">
      </footer>
      <section id="Footer-content">
        <div id="Footer-icons">
          <div>
            <button id="Footer-copy-email" onClick={handleCopy}>
              <FontAwesomeIcon size="xl" icon={faEnvelope} />
            </button>
          </div>
          <div>
            <a href="https://github.com/JoHeyJo" target="_blank">
              <FontAwesomeIcon size="xl" icon={faGithub} />
            </a>
          </div>
          <div id="Footer-copyright">
            <p>&copy; 2023 Joannes Figueroa</p>
          </div>
          <div>
            <a href="https://linkedin.com/in/joannes-figueroa" target="_blank">
              <FontAwesomeIcon size="xl" icon={faLinkedin} />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/joheyjo/" target="_blank">
              <FontAwesomeIcon size="xl" icon={faInstagram} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer;