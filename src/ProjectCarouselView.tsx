import { useContext } from "react";
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

  const { toggleView, index, handleSelect } = useContext(PortfolioContext);

  return (
    <Row className="justify-content-end">
      <Col md={6}>
        <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
          {projects.map((project: Project) =>
            <Carousel.Item>
              <img className="ProjectCarouselView-image" src={project.image} alt={`${project.name}`} />
              <Carousel.Caption>
                <h3>{project.heading}</h3>
                <p>{project.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )}
        </Carousel>
      </Col>
      <Col md={4}>
        <div className="ProjectCarouselView-text-box ">
          <ul>
            <li className="text-tech">{projects[index].tech}</li>
            {projects[index].specs.map((detail) => <li className="text">{detail}</li>)}
            <li className="text-note">NOTE: Heroku server takes a moment to fire up.</li>
          </ul>
          <div className="d-flex justify-content-evenly" >
            <Button variant="dark" className="align-self-center" onClick={toggleView}>View all</Button>
            <Button variant="dark" className="align-self-center" onClick={toggleView}>Demo</Button>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default ProjectCarouselView;