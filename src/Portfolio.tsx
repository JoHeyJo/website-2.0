// MIGRATED
import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { PRODUCT, DOCS, BUGLY, BLOG } from "./utils/projectData";
import "./styles/Portfolio.css";
import { PortfolioContextType, PortfolioContext } from "./context/user";
import ProjectCardView from "./ProjectCardView";
import ProjectCarouselView from "./ProjectCarouselView";

const Projects = [BUGLY, PRODUCT, DOCS, BLOG];

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
    handleSelect,
  };

  /** Handles selection of carousel image */
  function handleSelect(index: number) {
    console.log(index);
    setIndex(index);
  }

  /** Toggles carousel view or grid view */
  function toggleView() {
    setIsRenderingCarousel(!isRenderingCarousel);
  }

  /** Renders projects in grid view */
  function renderProjectsAsGrid() {
    return (
      <Container className="my-4">
        <Row>
          {Projects.map((project, i) => (
            <Col
              key={i}
              xs={12} // 1 card per row on extra small screens
              sm={12} // 2 cards per row on small screens
              md={12} // 3 cards per row on medium screens
              lg={6} // 4 cards per row on large screens
              className="mb-4" // Bottom spacing between grid rows
            >
              {/* <Card className="h-100"> */}
                <ProjectCardView key={i} index={i} {...project} />
              {/* </Card> */}
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

  /** Renders project in carousel view */
  function renderProjectsAsCarousel() {
    return <ProjectCarouselView projects={Projects} />;
  }

  return (
    <PortfolioContext.Provider value={PortfolioContent}>
      <div id="Portfolio-container">
        {isRenderingCarousel
          ? renderProjectsAsCarousel()
          : renderProjectsAsGrid()}
      </div>
    </PortfolioContext.Provider>
  );
}

export default Portfolio;
