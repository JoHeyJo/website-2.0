import NavDropdown from "./NavDropdown";
import "./styles/TopBanner.css";
import { Row, Col } from 'react-bootstrap';

function TopBanner() {
  return (
    <section id="TopBanner-bar">
      <Row className="align-items-center justify-content-center text-center">
        <Col xs="auto" className="d-block d-md-none">
          <NavDropdown />
        </Col>
        <Col>
          <h1 className="d-none d-md-block">Joannes Figueroa</h1>
          <h1 className="d-block d-md-none">JF</h1>
        </Col>
      </Row>
    </section>
  )
}

export default TopBanner;