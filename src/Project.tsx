import { Project as project } from './utils/interfaces';
import ProjectCardView from './ProjectCardView';
import ProjectCarouselView from './ProjectCarouselView';

type ProjectProp = {
  isRenderingCarousel?: boolean;
  project: project;
  projects: project[];
}

/** Displays project carousel or grid view. 
 * 
 * [Portfolio, PortfolioCarousel] -> Project -> [ProjectCardView, ProjectCarouselView]
*/
function Project({ isRenderingCarousel=false, project, projects }: ProjectProp) {

  return (
    <>
      {
        isRenderingCarousel
          ? <ProjectCarouselView projects={projects} />
          : <ProjectCardView projectName={project.name} demoLink={project.links.demo} image={project.image} />
      }

    </>
  )
}

export default Project;