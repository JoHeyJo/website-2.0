import { useState, useContext } from "react";
import { Project } from "./utils/interfaces";
import './styles/ProjectCarouselView.css'
import { Col } from 'react-bootstrap'
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
    <Col className="d-flex justify-content-end">
      <Col xs={6}>
        <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
          {projects.map((project: any) =>
            <Carousel.Item>
              <img className="ProjectCarouselView-image" src={project.image} alt={`${project.name}`} />
            </Carousel.Item>
          )}
        </Carousel>
      </Col>
      <Col xs={4} className="d-flex align-items-center">
        <div className="ProjectCarouselView-text-box ">
          <ul>
            <li className="text">{projects[index].tech}</li>
            {projects[index].specs.map((detail) => <li className="text">{detail}</li>)}
          </ul>
          <Button variant="dark" className="align-self-center" onClick={toggleView}>Grid View</Button>
        </div>
      </Col>
    </Col>
  )
}

export default ProjectCarouselView;