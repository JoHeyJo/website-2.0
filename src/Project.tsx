import { useState } from 'react';
import { Project as project } from './utils/interfaces';
import ProjectCardView from './ProjectCardView';
import ProjectCarouseView from './ProjectCarouselView';

type ProjectProp = {
  isRenderingCarousel?: boolean
  project: project;
}

/** Displays project image along with corresponding info about project. 
 * 
 * [Portfolio, PortfolioCarousel] -> Project -> ProjectCardView
*/
function Project({ isRenderingCarousel=false, project }: ProjectProp) {
  const [view, setView] = useState("card")

  return (
    <>
      {
        isRenderingCarousel
          ? <ProjectCarouseView {...project} />
          : <ProjectCardView projectName={project.name} demoLink={project.links.demo} image={project.image} />
      }

    </>
  )
}

export default Project;