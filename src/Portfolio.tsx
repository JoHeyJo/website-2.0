import { useState } from "react";
import { Container, Row } from 'react-bootstrap'
import { Bugly } from './utils/projectData';
import Project from "./Project";

// import "./Portfolio.css";
// import "./Header.css";
// import "./Nav.css";
import Button from 'react-bootstrap/Button';

function Portfolio() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Container className="">
      <Row>
        <Project props={...Bugly}/>
      </Row>
    </Container>



  );
}
// repetitive code consider refactoring can each portfolio be it's own component? 
export default Portfolio;