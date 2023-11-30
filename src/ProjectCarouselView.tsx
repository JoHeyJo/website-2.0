import { useState, useContext } from "react";
import { Project } from "./utils/interfaces";
import './styles/ProjectCarouselView.css'
import { Col, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import Button from "react-bootstrap/Button";
import { PortfolioContext } from "./context/user";

type ProjectProps = {
  projects: Project[];
}


/** Renders individual project image with description
 * 
 * Portfolio -> ProjectCarouselView
 */
function ProjectCarouselView({ projects }: ProjectProps) {
  const [index, setIndex] = useState(0);

  const { toggleView } = useContext(PortfolioContext);

  /** Handles selection of carousel image */
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Row className="justify-content-end">
      <Col md={6}>
        <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
          {projects.map((project: any) =>
            <Carousel.Item>
              <img className="ProjectCarouselView-image" src={project.image} alt={`${project.name}`} />
            </Carousel.Item>
          )}
        </Carousel>
      </Col>
      <Col md={4} className="d-md-flex">
        <div className="ProjectCarouselView-text-box ">
          <ul>
            <li className="text">{projects[index].tech}</li>
            {projects[index].specs.map((detail) => <li className="text">{detail}</li>)}
          </ul>
          <Button variant="dark" className="align-self-center" onClick={toggleView}>View all</Button>
        </div>
      </Col>
    </Row>
  )
}

export default ProjectCarouselView;