import { useState } from "react";
import { Project } from "./utils/interfaces";
import './styles/ProjectCarouselView.css'
import { Col } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import Button from "react-bootstrap/Button";

type ProjectProps = {
  projects: Project[];
}


/** Renders individual project image with description
 * 
 * Portfolio -> ProjectCarouselView
 */
function ProjectCarouselView({ projects }: ProjectProps) {
  const [index, setIndex] = useState(0);

  /** Handles selection of carousel image */
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  /** syncs up details with active project */
  function syncProjectDetails(project: Project) {
    return (
      <Carousel.Item>
        <img className="ProjectCarouselView-image" src={project.image} />
      </Carousel.Item>
    )
  }

  return (
    <Col className="d-flex">
      <Col xs={6}>
        <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
          {projects.map((project: any) =>
            syncProjectDetails(project)
          )}
        </Carousel>
      </Col>
      <Col xs={6} className="d-flex align-items-center">
        <div className="ProjectCarouselView-text-box ">
          <ul>
            {projects[index].specs.map((detail) => <ul>{detail}</ul>)}
          </ul>
          <Button>Click me</Button>
        </div>
      </Col>
    </Col>
  )
}

export default ProjectCarouselView;