import Dropdown from 'react-bootstrap/Dropdown';
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './styles/NavDropdown.css'

const RESUME_LINK = "https://github.com/JoHeyJo/myWebsiteReact/raw/main/public/Joannes_Figueroa_Resume.pdf"

function NavDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant='dark-outline' split={false} id="dropdown-basic">
        <FontAwesomeIcon icon={faBars} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          <HashLink className="Nav-font" to="#Bio-about-me">About</HashLink>
        </Dropdown.Item>
        <Dropdown.Item>
          <HashLink className="Nav-link" to="#Portfolio-container">Portfolio</HashLink>
        </Dropdown.Item>
        <Dropdown.Item><a className="Nav-font" href={RESUME_LINK}>Resume</a>
        </Dropdown.Item>
        <Dropdown.Item>
          <HashLink className="Nav-font" to="#footer-content">Contact</HashLink>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default NavDropdown;