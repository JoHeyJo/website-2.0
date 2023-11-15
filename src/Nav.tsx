import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";


function Nav() {
  return (
    <Navbar className="Nav-navbar">
    {/* //   <HashLink className="Nav-font" to="#Bio-about-me">About</HashLink> */}
        {/* <Link className="Nav-font" to="/portfolio">Portfolio</Link> */}
     <a className="Nav-font"
        href="https://github.com/JoHeyJo/myWebsiteReact/raw/main/public/Joannes_Figueroa_Resume.pdf"
      >Resume</a>
    {/* //   <HashLink className="Nav-font" to="#footer-content">Contact</HashLink> */}
    </Navbar>
  )
}

export default Nav