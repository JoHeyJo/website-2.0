import { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { bugly, shareBB, portfolioSite } from './utils/projectData';
import Project from "./Project";
import './styles/Portfolio.css'

// import "./Portfolio.css";
// import "./Header.css";
// import "./Nav.css";
import Button from 'react-bootstrap/Button';

/** Displays portfolio sites cards as a collection or carousel view.   */
function Portfolio() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };
  return (
      <Row>
        <Col id="Portfolio-container">
          <Project {...portfolioSite} />
          <Project {...bugly} />
          <Project {...shareBB} />
        </Col>
      </Row>
  );
}
// repetitive code consider refactoring can each portfolio be it's own component? 
export default Portfolio;