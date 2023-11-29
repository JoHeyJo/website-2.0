import { useState } from "react";
import { Row, Col } from 'react-bootstrap'
import { bugly, shareBB, portfolioSite } from './utils/projectData';
import './styles/Portfolio.css'
import { PortfolioContext } from "./context/user";
import ProjectCardView from "./ProjectCardView";
import ProjectCarouselView from "./ProjectCarouselView";

const Projects = [bugly, shareBB, portfolioSite];

/** Displays portfolio sites cards as a collection or carousel view.
 * 
 * App -> Portfolio -> [PortfolioCarousel, Project]
 */
function Portfolio() {
  const [isRenderingCarousel, setIsRenderingCarousel] = useState(false);

  function toggleView() {
    setIsRenderingCarousel(!isRenderingCarousel);
  };

  /** Renders projects in grid view */
  function renderProjectsAsGrid() {
    return (
      <Col id="Portfolio-container-grid">
        <ProjectCardView projectName={bugly.name} demoLink={bugly.links.demo} image={bugly.image} />
        <ProjectCardView projectName={shareBB.name} demoLink={shareBB.links.demo} image={shareBB.image} />
        <ProjectCardView projectName={portfolioSite.name} demoLink={portfolioSite.links.demo} image={portfolioSite.image} />
      </Col>
    )
  }

  /** Renders project in carousel view */
  function renderProjectsAsCarousel() {
    return (
      <ProjectCarouselView projects={Projects} />
    )
  }

  return (
    <Row>
      <PortfolioContext.Provider value={{ toggleView }}>
        <div id="Portfolio-container">
          {isRenderingCarousel
            ? renderProjectsAsCarousel()
            : renderProjectsAsGrid()
          }
        </div>
      </PortfolioContext.Provider>
    </Row>
  );
}

export default Portfolio;