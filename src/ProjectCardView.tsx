import './styles/ProjectCardView.css';
import OverlayCard from './OverlayCard';
import { Project } from './utils/interfaces';

type ProjectCardProp = Project & {
  index: number;
}

/** Project Image displayed in thumbnail view
 * 
 * Project -> ProjectCardView -> OverlayCard
 */
function ProjectCardView({ index, name, image, links, cardHeader, cardSummary }: ProjectCardProp) {
  return (
    <div className="ProjectCardView-container">
      <img className="ProjectCardView-image" src={image} alt={`${name} image`}/>
      <div className="ProjectCardView-overlay">
        <OverlayCard index={index} link={links.demo} header={cardHeader} summary={cardSummary}/>
      </div>
    </div>
  )
}

export default ProjectCardView;