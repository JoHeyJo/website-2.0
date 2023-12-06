import { useState } from "react";
import { Row, Col } from 'react-bootstrap'
import { bugly, shareBB, portfolioSite } from './utils/projectData';
import './styles/Portfolio.css'
import { PortfolioContextType, PortfolioContext } from "./context/user";
import ProjectCardView from "./ProjectCardView";
import ProjectCarouselView from "./ProjectCarouselView";

const Projects = [bugly, shareBB, portfolioSite];

/** Displays portfolio sites cards as a collection or carousel view.
 * 
 * App -> Portfolio -> [PortfolioCarousel, Project]
 */
function Portfolio() {
  const [isRenderingCarousel, setIsRenderingCarousel] = useState(false);
  const [index, setIndex] = useState(0);

  const PortfolioContent: PortfolioContextType = {
    toggleView,
    index,
    setIndex,
    handleSelect
  }

  /** Handles selection of carousel image */
  function handleSelect(index: number) {
    console.log(index)
    setIndex(index)
  }

  /** Toggles carousel view or grid view */
  function toggleView() {
    setIsRenderingCarousel(!isRenderingCarousel);
  };

  /** Renders projects in grid view */
  function renderProjectsAsGrid() {
    return (
      <Col id="Portfolio-container-grid">
        {Projects.map((project, i) =>
          <ProjectCardView
            key={i}
            {...project} />
        )}
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
    <PortfolioContext.Provider value={PortfolioContent}>
      <div id="Portfolio-container">
        {isRenderingCarousel
          ? renderProjectsAsCarousel()
          : renderProjectsAsGrid()
        }
      </div>
    </PortfolioContext.Provider>
  );
}

export default Portfolio;