import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Project from './Project';
import { Project as ProjectType } from './utils/interfaces';
import { Col } from 'react-bootstrap'

type PortfolioCarouselProp = {
  isRendering: boolean;
  projects: ProjectType[];
}

/** display a carousel project images and information 
 * 
 * Portfolio -> PortfolioCarousel -> Project
*/
function PortfolioCarousel({ isRendering, projects }: PortfolioCarouselProp) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <>
     {/* <Col>
       <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
        {projects.map(project =>
           <Carousel.Item>
           <Project isRenderingCarousel={isRendering} project={project} />
           </Carousel.Item>
           )} 
      </Carousel> */}
       </>
  )
}
export default PortfolioCarousel;