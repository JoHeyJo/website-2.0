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

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
<>
    <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
      {projects.map((project: any) =>
        <Carousel.Item>
          <Col id="ProjectCarouselView-container-carousel">
            <img className="ProjectCarouselView-image" src={project.image} />
          </Col>
        </Carousel.Item>
      )}
    </Carousel>
    <Col>
        <div className="ProjectCarouselView">
          <ul>
            {/* {specs.map(s => <ul>{s}</ul>)} */}
          </ul>
        </div>
    </Col>
    </>
  )
}

export default ProjectCarouselView;