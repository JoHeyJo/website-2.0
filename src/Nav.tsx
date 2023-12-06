import { HashLink } from "react-router-hash-link";
import { Navbar } from "react-bootstrap";
import './styles/Nav.css'
import { sections } from "./utils/sections";

function Nav() {
  return (
    <div className="d-none d-md-inline">
      <Navbar id="Nav-navbar" className="flex-column">
        {sections.map((section, i) =>
          section.id === "Nav-resume" ?
            <a id={section.id} className="Nav-link" href={section.link} />
            :
            <HashLink key={i} id={section.id} className="Nav-link" to={`#${section.link}`}>{section.name}</HashLink>
        )}
      </Navbar>
    </div>
  )
}

export default Nav
