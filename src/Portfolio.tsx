import { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { bugly, shareBB, portfolioSite  } from './utils/projectData';
import Project from "./Project";

// import "./Portfolio.css";
// import "./Header.css";
// import "./Nav.css";
import Button from 'react-bootstrap/Button';

function Portfolio() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e:any) => {
    setIndex(selectedIndex);
  };
  return (
    <Container className="">
      <Row>
        <Col className="d-flex justify-content-between">
        <Project {...portfolioSite}/> 
        <Project {...bugly}/>
        <Project {...shareBB}/>
        </Col>
      </Row>
    </Container>

  );
}
// repetitive code consider refactoring can each portfolio be it's own component? 
export default Portfolio;