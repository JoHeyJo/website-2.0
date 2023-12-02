import { HashLink } from "react-router-hash-link";
import { Navbar } from "react-bootstrap";
import './styles/Nav.css'
import { sections } from "./utils/sections";

const GITHUBURL = "https://github.com/JoHeyJo/myWebsiteReact/raw/main/public/Joannes_Figueroa_Resume.pdf"

function Nav() {
  return (
    <div className="d-none d-md-inline">
      <Navbar id="Nav-navbar" className="flex-column">
        {sections.map((section,i) =>
        <HashLink className="Nav-link" to={`#${section.link}`}>{section.name}</HashLink>
        )}
      </Navbar>
    </div>
  )
}

export default Nav