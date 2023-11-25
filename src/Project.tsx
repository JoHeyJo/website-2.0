import { Project as project } from './utils/interfaces';
import ProjectCardView from './ProjectCardView';
import ProjectCarouselView from './ProjectCarouselView';

type ProjectProp = {
  isRenderingCarousel?: boolean
  project: project;
}

/** Displays project image along with corresponding info about project. 
 * 
 * [Portfolio, PortfolioCarousel] -> Project -> [ProjectCardView, ProjectCarouselView]
*/
function Project({ isRenderingCarousel=false, project }: ProjectProp) {

  return (
    <>
      {
        isRenderingCarousel
          ? <ProjectCarouselView {...project} />
          : <ProjectCardView projectName={project.name} demoLink={project.links.demo} image={project.image} />
      }

    </>
  )
}

export default Project;