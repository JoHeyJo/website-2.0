import { useState } from "react";
import { Row, Col } from 'react-bootstrap'
import { bugly, shareBB, portfolioSite } from './utils/projectData';
import Project from "./Project";
import './styles/Portfolio.css'
import PortfolioCarousel from './PortfolioCarousel';
import { PortfolioContextType, PortfolioContext } from "./context/user";

const Projects = [bugly, shareBB, portfolioSite];

/** Displays portfolio sites cards as a collection or carousel view.
 * 
 * App -> Portfolio -> [PortfolioCarousel, Project]
 */
function Portfolio() {
  const [isRenderingCarousel, setIsRenderingCarousel] = useState(false);

  function toggleView() {
    console.log("toggling view")
    setIsRenderingCarousel(!isRenderingCarousel);
  };

  /** Renders projects in grid view */
  function renderProjectsAsGrid() {
    return (
      <Col id="Portfolio-container-grid">
        <PortfolioContext.Provider value={{ toggleView }}>
          <Project project={portfolioSite} />
          <Project project={bugly} />
          <Project project={shareBB} />
        </PortfolioContext.Provider>
      </Col>
    )
  }

  /** Renders project in carousel view */
  function renderProjectsAsCarousel() {
    return (
      <Col id="Portfolio-container-carousel">
        <PortfolioCarousel isRendering={isRenderingCarousel} projects={Projects} />
      </Col>
    )
  }

  return (
    <Row >
      <div id="Portfolio-container">
        {isRenderingCarousel
          ? renderProjectsAsCarousel()
          : renderProjectsAsGrid()
        }
      </div>
    </Row>
  );
}

export default Portfolio;