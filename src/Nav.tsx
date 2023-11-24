import { HashLink } from "react-router-hash-link";
import { Navbar } from "react-bootstrap";
import './styles/Nav.css'

const GITHUBURL = "https://github.com/JoHeyJo/myWebsiteReact/raw/main/public/Joannes_Figueroa_Resume.pdf"

function Nav() {
  return (
    <div className="d-none d-md-inline">
      <Navbar id="Nav-navbar" className="flex-column">
        <HashLink className="Nav-link" to="#Bio-about-me">About</HashLink>
        <HashLink className="Nav-link" to="#Portfolio-container">Portfolio</HashLink>
        {/* <a className="Nav-link" href={GITHUBURL}>Resume</a> */}
        <HashLink className="Nav-link" to="#footer-content">Contact</HashLink>
      </Navbar>
    </div>
  )
}

export default Nav