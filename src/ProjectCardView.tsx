import './styles/ProjectCardView.css';
import OverlayCard from './OverlayCard';

type ProjectCardProp = {
  index: number;
  projectName: string;
  image: string;
  demoLink: string;
}

/** Project Image displayed in thumbnail view
 * 
 * Project -> ProjectCardView -> OverlayCard
 */
function ProjectCardView({ index, projectName, image, demoLink }: ProjectCardProp) {
  return (
    <div className="ProjectCardView-container">
      <img className="ProjectCardView-image" src={image} alt={`${projectName} image`}/>
      <div className="ProjectCardView-overlay">
        <OverlayCard index={index} link={demoLink}/>
      </div>
    </div>
  )
}

export default ProjectCardView;