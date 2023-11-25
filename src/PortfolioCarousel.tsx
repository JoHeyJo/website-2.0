import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Project from './Project';
import { Project as ProjectType } from './utils/interfaces';

type PortfolioCarouselProp = {
  isRendering: boolean;
  projects: ProjectType[];
}

/** display a carousel project images and information 
 * 
 * Portfolio -> PortfolioCarousel -> Project
*/
function PortfolioCarousel({ isRendering, projects }: PortfolioCarouselProp) {
  const [index, setIndex] = useState(2);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel interval={null} activeIndex={index}>
        {projects.map(project =>
          <Carousel.Item>
            <Project isRenderingCarousel={isRendering} project={project} />
              <h3>{project.heading}</h3>
              <p>{project.description}</p>
          </Carousel.Item>
        )}
      </Carousel>
    </>
  )
}
export default PortfolioCarousel;