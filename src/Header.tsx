import React from "react";
import NavDropdown from "./NavDropdown";
import "./styles/Header.css";
import { Row, Col } from 'react-bootstrap';

function Header() {
  return (
    <header id="Header-bar">
      <Row className="align-items-center justify-content-center text-center">
        <Col xs="auto" className="d-block d-md-none">
          <NavDropdown />
        </Col>
        <Col>
          <p className="d-none d-md-block">Joannes Figueroa</p>
          <p className="d-block d-md-none">JF</p>
        </Col>
      </Row>
    </header>
  )
}

export default Header;