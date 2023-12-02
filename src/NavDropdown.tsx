import Dropdown from 'react-bootstrap/Dropdown';
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './styles/NavDropdown.css'
import { sections } from './utils/sections';
const RESUME_LINK = "https://github.com/JoHeyJo/myWebsiteReact/raw/main/public/Joannes_Figueroa_Resume.pdf"

function NavDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant='dark-outline' split={false} id="dropdown-basic">
        <FontAwesomeIcon icon={faBars} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {sections.map((section, i) =>
          <Dropdown.Item>
            <HashLink className='Nav-link' to={`#${section.link}`}>{section.name}</HashLink>
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default NavDropdown;