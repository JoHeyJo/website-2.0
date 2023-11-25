import { Project } from "./utils/interfaces";
import './styles/ProjectCarouselView.css'

/** Renders individual project image with description
 * 
 * Project -> ProjectCarouselView
 */
function ProjectCarouselView({
  name,
  image,
  tech,
  description,
  heading,
  specs,
  links
}: Project) {
  return (
    <div className="ProjectCarouselView-container">
      <img className="ProjectCarouselView-image" src={image}/>
    </div>
  )
}

export default ProjectCarouselView;