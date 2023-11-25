import './styles/ProjectCardView.css';
import OverlayCard from './OverlayCard';

type ProjectCardProp = {
  projectName: string;
  image: string;
  demoLink: string;
}

/** Project Image displayed in thumbnail view
 * 
 * Project -> ProjectCardView -> OverlayCard
 */
function ProjectCardView({ projectName, image, demoLink }: ProjectCardProp) {
  return (
    <div className="ProjectCardView-container">
      <img id="ProjectCardView-image" src={image} alt={`${projectName} image`}/>
      <div className="ProjectCardView-overlay">
        <OverlayCard link={demoLink}/>
      </div>
    </div>
  )
}

export default ProjectCardView;