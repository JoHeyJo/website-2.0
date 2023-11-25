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

  const PortfolioContent: PortfolioContextType = {
    toggleView,
    word:'hello'
  }

  /** Renders projects in grid view */
  function renderProjectsAsGrid() {
    return (
      <>
        <Project project={portfolioSite} />
        <Project project={bugly} />
        <Project project={shareBB} />
      </>
    )
  }

  return (
    <Row>
      <Col id="Portfolio-container">

        {isRenderingCarousel
          ?
          <PortfolioContext.Provider value={PortfolioContent}>
            <PortfolioCarousel isRendering={isRenderingCarousel} projects={Projects} />
          </PortfolioContext.Provider>
          : renderProjectsAsGrid()
        }
      </Col>
    </Row>
  );
}

export default Portfolio;