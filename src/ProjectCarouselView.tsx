import { useState } from "react";
import { Project } from "./utils/interfaces";
import './styles/ProjectCarouselView.css'
import { Col } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';

type ProjectProps = {
  projects: Project[];
}


/** Renders individual project image with description
 * 
 * Portfolio -> ProjectCarouselView
 */
function ProjectCarouselView({ projects }: ProjectProps) {
  const [index, setIndex] = useState(0);
  const [details, setDetails] = useState<any>([]);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  /** syncs up details with active project */
  function syncProjectDetails(project: Project){
    return (
      <Carousel.Item>
        <img className="ProjectCarouselView-image" src={project.image} />
      </Carousel.Item>
    )
  }

  console.log(projects[index].specs)

  return (
    <Col>
      <Col xs={6}>
        <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
          {projects.map((project: any) =>
            syncProjectDetails(project)
          )}
        </Carousel>
      </Col>
      <Col>
        <div className="ProjectCarouselVie">
          <ul>
            {projects[index].specs.map((detail:any) => <ul>{detail}</ul>)}
          </ul>
        </div>
      </Col>
    </Col>
  )
}

export default ProjectCarouselView;