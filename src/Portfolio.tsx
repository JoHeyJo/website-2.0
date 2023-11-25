import { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { bugly, shareBB, portfolioSite } from './utils/projectData';
import Project from "./Project";
import './styles/Portfolio.css'
import PortfolioCarousel from './PortfolioCarousel';


/** Displays portfolio sites cards as a collection or carousel view.
 * 
 * App -> Portfolio -> [PortfolioCarousel, Project]
 */
function Portfolio() {
  const [view, setView] = useState("grid");

  /** Renders projects in grid view */
  function viewProjectGrid() {
    return (
      <>
        <Project {...portfolioSite} />
        <Project {...bugly} />
        <Project {...shareBB} />
      </>
    )
  }

  return (
    <Row>
      <Col id="Portfolio-container">
        {view === "grid"
          ? viewProjectGrid()
          : <PortfolioCarousel />
        }
      </Col>
    </Row>
  );
}
// repetitive code consider refactoring can each portfolio be it's own component? 
export default Portfolio;