import { useState } from "react";
import { Project } from "./utils/interfaces";
import './styles/ProjectCarouselView.css'
import { Col } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';


/** Renders individual project image with description
 * 
 * Project -> ProjectCarouselView
 */
function ProjectCarouselView({ projects }: any) {
  const [index, setIndex] = useState(0);
  const [details, setDetails] = useState<any>([]);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  /** syncs up details with active project */
  function syncProjectDetails(project: Project){
    setDetails(project.specs);
    return (
      <Carousel.Item>
        <img className="ProjectCarouselView-imag" src={project.image} />
        hello
      </Carousel.Item>
    )
  }
  return (
    <Col>
      <Col xs={6}>
        <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
          {projects.map((project: any) =>
            ()=>syncProjectDetails(project)
          )}
        </Carousel>
      </Col>
      <Col>
        <div className="ProjectCarouselVie">
          <ul>
            {details.map((detail:any) => <ul>{detail}</ul>)}
          </ul>
        </div>
      </Col>
    </Col>
  )
}

export default ProjectCarouselView;